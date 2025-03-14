import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../src/config/firebase';
import { doc, getDoc, updateDoc, arrayUnion, Timestamp, collection, addDoc, getDocs, deleteDoc, query, where, orderBy, limit, setDoc } from 'firebase/firestore';
import { storage } from '../src/config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { analyzeDocumentWithGemini, extractTextFromFile } from '../src/services/geminiService';
import { debugFirestoreCollections, populateSampleUserData, repairSearchHistoryData } from '../src/services/debugFirestore';
import Debug from '../src/utils/debugUtils';

// Import modular components
import Sidebar from '../src/components/dashboard/Sidebar';
import SearchHeader from '../src/components/dashboard/SearchHeader';
import ResultsPanel from '../src/components/dashboard/ResultsPanel';
import ChatPanel from '../src/components/dashboard/ChatPanel';
import NotesModal from '../src/components/dashboard/NotesModal';
import SettingsModal from '../src/components/dashboard/SettingsModal';
import DebugPanel from '../src/components/debug/DebugPanel';

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('ai');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [notes, setNotes] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [chatSessions, setChatSessions] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isExporting, setIsExporting] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isResultsExpanded, setIsResultsExpanded] = useState(true);
  const [isNotesExpanded, setIsNotesExpanded] = useState(true);
  const [isSearchHistoryExpanded, setIsSearchHistoryExpanded] = useState(true);
  const [currentFile, setCurrentFile] = useState(null);
  const [debugInfo, setDebugInfo] = useState(null);
  const auth = getAuth();

  // Fetch user-specific chat sessions
  const fetchUserChatSessions = async (userId) => {
    try {
      Debug.info('DASHBOARD', `Fetching chat sessions for user: ${userId}`);
      
      if (!userId) {
        throw new Error('No user ID provided for fetching chat sessions');
      }
      
      const chatSessionsQuery = query(
        collection(db, "chatSessions"),
        where("userId", "==", userId),
        orderBy("updatedAt", "desc")
      );
      
      let chatSessionsSnapshot;
      try {
        chatSessionsSnapshot = await getDocs(chatSessionsQuery);
      } catch (queryError) {
        // Handle Firestore index errors specifically
        if (queryError.code === 'failed-precondition' || queryError.message?.includes('index')) {
          Debug.error('DASHBOARD', 'Firestore index error on chat sessions query', queryError);
          
          // Show a helpful error message with link to Firestore console
          const indexUrl = getFirestoreIndexUrl(queryError.message);
          
          const indexErrorMessage = `
            Chat sessions query requires a Firestore index.

            Required composite index on 'chatSessions' collection:
            - userId (Ascending)
            - updatedAt (Descending)
            
            You can create this index in the Firebase console.
          `;
          
          // Show alert with basic info
          alert(indexErrorMessage);
          
          // Add additional info to debug console with clickable link
          console.warn(`Firestore index required. Open console: ${indexUrl}`);
          
          // Continue execution with empty results
          chatSessionsSnapshot = { docs: [] };
        } else {
          // Re-throw other errors
          throw queryError;
        }
      }
      
      Debug.debug('DASHBOARD', `Chat sessions query returned ${chatSessionsSnapshot.docs.length} results`);
      
      // Check for chat sessions with missing required fields
      let validSessions = 0;
      const chatSessionsData = chatSessionsSnapshot.docs.map(doc => {
        const data = doc.data();
        const isValid = data && data.userId && data.updatedAt;
        if (isValid) validSessions++;
        return {
          id: doc.id,
          ...data,
          // Ensure updatedAt is always a valid Timestamp
          updatedAt: data.updatedAt || Timestamp.now()
        };
      });
      
      Debug.info('DASHBOARD', `Found ${validSessions} valid chat sessions out of ${chatSessionsSnapshot.docs.length} total`);
      setChatSessions(chatSessionsData);
      
      // If there's at least one chat session, get the messages for the latest session
      if (chatSessionsData.length > 0) {
        const latestSessionId = chatSessionsData[0].id;
        Debug.debug('DASHBOARD', `Setting current chat ID to latest session: ${latestSessionId}`);
        setCurrentChatId(latestSessionId);
        try {
          await loadChatSession(latestSessionId);
        } catch (sessionError) {
          Debug.error('DASHBOARD', `Error loading latest chat session: ${latestSessionId}`, sessionError);
          // Continue even if loading the specific session fails
        }
      } else {
        Debug.info('DASHBOARD', 'No chat sessions found to load');
      }
      
      return { success: true, sessions: chatSessionsData.length };
    } catch (error) {
      const errorMessage = error?.message || 'Unknown error';
      Debug.error("DASHBOARD", `Error fetching user chat sessions: ${errorMessage}`, error);
      // Don't throw here to prevent cascading failures
      return { success: false, error };
    }
  };

  // Fetch user data on login
  useEffect(() => {
    let isMounted = true;
    
    Debug.info('DASHBOARD', 'Setting up auth state listener');
    
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      Debug.info('DASHBOARD', `Auth state changed: ${currentUser ? 'User logged in' : 'No user'}`);
      
      if (!isMounted) return;
      
      if (currentUser) {
        setUser(currentUser);
        
        // Enable debugging in development mode
        if (process.env.NODE_ENV === 'development') {
          Debug.toggleDebugging(true);
        }
        
        // Fetch additional user data from Firestore
        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            // Create a basic user document if one doesn't exist
            // This ensures we have at least minimal user data even for accounts
            // created before we added Firestore integration
            const basicUserData = {
              email: currentUser.email,
              displayName: currentUser.displayName || '',
              photoURL: currentUser.photoURL || '',
              role: 'student', // Default role
              createdAt: Timestamp.now(),
              lastLogin: Timestamp.now()
            };
            
            await setDoc(userDocRef, basicUserData);
            setUserData(basicUserData);
            Debug.info('DASHBOARD', 'Created new user document for first-time user');
          }
          
          // Update last login timestamp
          await updateDoc(userDocRef, {
            lastLogin: Timestamp.now()
          });
          
          // Load all user data
          const debugData = await debugFirestoreCollections(currentUser.uid);
          setDebugInfo(debugData);
          
          // If no data found, populate with sample data for testing
          if (
            (!debugData.notes || debugData.notes.total === 0) &&
            (!debugData.searchHistory || debugData.searchHistory.total === 0) &&
            (!debugData.chatSessions || debugData.chatSessions.total === 0)
          ) {
            Debug.info('DASHBOARD', 'No user data found');
            
            if (confirm('No user data found. Would you like to add sample data for testing?')) {
              const sampleDataResult = await Debug.measurePerformance(
                'FIRESTORE', 
                'populateSampleUserData', 
                () => populateSampleUserData(currentUser.uid)
              );
              Debug.info('DASHBOARD', 'Sample data added', sampleDataResult);
              
              // Refetch debug data to verify sample data was added
              const updatedDebugData = await debugFirestoreCollections(currentUser.uid);
              setDebugInfo(updatedDebugData);
            }
          }
          
          // Load user data using our new function
          await loadUserData(currentUser);
          setLoading(false);
        } catch (error) {
          Debug.error('DASHBOARD', 'Error fetching user data', error);
          setLoading(false);
        }
      } else {
        // Redirect to auth page if not logged in
        Debug.info('DASHBOARD', 'No user detected, redirecting to auth page');
        router.push('/auth');
      }
    });

    // Cleanup subscription on unmount
    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [router]);

  // Handle search query submission
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    Debug.info('SEARCH', `Executing search: "${searchQuery}"`);
    
    try {
      // Save search to history with enhanced validation
      if (!user?.uid) {
        Debug.warn('SEARCH', 'Cannot save search history: No user ID available');
      } else {
        // Create properly formatted search data object
        const searchData = {
          userId: user.uid,
          query: searchQuery.trim(), // Ensure query is trimmed
          type: ['ai', 'case', 'keyword'].includes(activeTab) ? activeTab : 'ai', // Validate type
          timestamp: Timestamp.now()
        };
        
        Debug.debug('SEARCH', 'Saving search history entry:', searchData);
        
        const searchHistoryRef = collection(db, "searchHistory");
        await Debug.measurePerformance('FIRESTORE', 'addSearchHistory', 
          () => addDoc(searchHistoryRef, searchData)
        );
        
        // Update search history in state
        setSearchHistory(prev => [
          { 
            id: 'temp-' + Date.now(), 
            ...searchData,
            // Convert Timestamp to Date for consistent display
            timestamp: searchData.timestamp
          },
          ...prev
        ]);
      }
      
      // TODO: Implement actual search functionality based on activeTab
      const mockResults = [
        {
          id: '1',
          title: 'Example Search Result 1',
          excerpt: 'This is a sample search result that would match your query for "' + searchQuery + '". In a real implementation, this would contain relevant information from the database.',
          relevance: 0.95,
          source: 'Mock Database'
        },
        {
          id: '2',
          title: 'Example Search Result 2',
          excerpt: 'Another sample result for demonstration purposes. Your search for "' + searchQuery + '" would fetch real data in a production environment.',
          relevance: 0.88,
          source: 'Mock Database'
        }
      ];
      
      setTimeout(() => {
        setSearchResults(mockResults);
        setIsSearching(false);
        Debug.debug('SEARCH', `Search completed with ${mockResults.length} results`);
      }, 1500);
      
    } catch (error) {
      Debug.error('SEARCH', 'Search error', error);
      setIsSearching(false);
    }
  };

  // Handle chat message submission
  const handleChatSubmit = async (eventOrMessage) => {
    // Null check at the beginning
    if (!eventOrMessage) {
      Debug.warn('CHAT', 'handleChatSubmit called with null/undefined input');
      return;
    }
    
    // Check if argument is an event or a string message
    const isEvent = eventOrMessage && typeof eventOrMessage === 'object' && typeof eventOrMessage.preventDefault === 'function';
    
    let userMessage = '';
    
    // If it's an event, prevent default form submission and get message from chatInput state
    if (isEvent) {
      eventOrMessage.preventDefault();
      // Use the current chatInput value
      userMessage = chatInput || '';
      if (!userMessage.trim() || isLoading) {
        Debug.debug('CHAT', 'Empty message or still loading, not submitting');
        return;
      }
    } else {
      // Direct message input - ensure it's a string
      userMessage = String(eventOrMessage || '');
      if (!userMessage.trim() || isLoading) {
        Debug.debug('CHAT', 'Empty direct message or still loading, not submitting');
        return;
      }
    }
    
    Debug.info('CHAT', `Submitting message: "${userMessage.substring(0, 50)}${userMessage.length > 50 ? '...' : ''}"`);
    
    setIsLoading(true);
    const tempMessageId = 'temp-' + Date.now();
    
    // Add user message to state immediately for UI responsiveness
    const newUserMessage = { id: tempMessageId, sender: 'user', content: userMessage, timestamp: new Date() };
    setChatMessages(prev => [...prev, newUserMessage]);
    setChatInput('');
    
    try {
      let sessionId = currentChatId;
      
      // If no current chat, create a new session
      if (!sessionId) {
        const title = userMessage.length > 30 ? `${userMessage.substring(0, 30)}...` : userMessage;
        
        const chatSessionRef = collection(db, "chatSessions");
        const chatSessionDoc = await Debug.measurePerformance('FIREBASE', 'createChatSession', async () => {
          const docRef = await addDoc(chatSessionRef, {
            userId: user.uid,
            title: title,
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now(),
            messages: [
              {
                role: 'user',
                content: userMessage,
                timestamp: new Date().toISOString()
              }
            ]
          });
          return docRef;
        });
        
        sessionId = chatSessionDoc.id;
        setCurrentChatId(sessionId);
        
        // Add to chat sessions list
        setChatSessions(prev => [{
          id: sessionId,
          userId: user.uid,
          title: title,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now()
        }, ...prev]);
        
        Debug.info('CHAT', `Created new chat session with ID: ${sessionId}`);
      } else {
        // Add message to existing chat session
        const chatSessionRef = doc(db, "chatSessions", sessionId);
        
        await Debug.measurePerformance('FIREBASE', 'updateChatSession', async () => {
          return updateDoc(chatSessionRef, {
            updatedAt: Timestamp.now(),
            messages: arrayUnion({
              role: 'user',
              content: userMessage,
              timestamp: new Date().toISOString()
            })
          });
        });
        
        Debug.debug('CHAT', `Added message to existing chat session: ${sessionId}`);
      }
      
      // Simulate AI response
      setTimeout(async () => {
        try {
          const aiResponseText = `I'm your AI assistant. You asked: "${userMessage}"\n\nThis is a simulated response for development purposes. In production, this would be an actual API response from an AI model.`;
          
          // Add AI response to chat session
          const chatSessionRef = doc(db, "chatSessions", sessionId);
          await Debug.measurePerformance('FIREBASE', 'updateChatSessionWithAIResponse', async () => {
            return updateDoc(chatSessionRef, {
              messages: arrayUnion({
                role: 'assistant',
                content: aiResponseText,
                timestamp: new Date().toISOString()
              })
            });
          });
          
          // Add AI response to state
          setChatMessages(prev => [...prev, { 
            id: 'ai-' + Date.now(), 
            sender: 'ai', 
            content: aiResponseText, 
            timestamp: new Date() 
          }]);
          
          Debug.debug('CHAT', 'AI response added to session');
        } catch (error) {
          Debug.error('CHAT', 'Error saving AI response', error);
        } finally {
          setIsLoading(false);
        }
      }, 1500);
      
    } catch (error) {
      Debug.error('CHAT', 'Chat error', error);
      setIsLoading(false);
      setChatMessages(prev => prev.filter(msg => msg.id !== tempMessageId));
    }
  };

  // Handle file upload for chat
  const handleFileUpload = async (file) => {
    if (!file) {
      Debug.warn('FILE_UPLOAD', 'No file provided to handleFileUpload');
      return null;
    }
    
    if (!currentChatId) {
      Debug.warn('FILE_UPLOAD', 'No current chat session for file upload');
      return null;
    }
    
    if (!user || !user.uid) {
      Debug.error('FILE_UPLOAD', 'No authenticated user for file upload');
      return null;
    }
    
    Debug.info('FILE_UPLOAD', `Starting file upload for: ${file.name} (${file.type}, ${file.size} bytes)`);
    
    try {
      // Extract content from file if possible (for PDF, etc.)
      let fileContent = null;
      try {
        Debug.info('FILE_UPLOAD', `Extracting content from file: ${file.name}`);
        fileContent = await extractTextFromFile(file);
        
        if (fileContent) {
          Debug.debug('FILE_UPLOAD', `Content extracted successfully, length: ${fileContent.length}`);
        } else {
          Debug.warn('FILE_UPLOAD', `No content extracted from file: ${file.name}`);
        }
      } catch (error) {
        Debug.error('FILE_UPLOAD', `Error extracting file content from ${file.name}`, error);
        // Continue with upload even if content extraction fails
        fileContent = null;
      }
      
      // Upload file to Firebase Storage
      Debug.debug('FILE_UPLOAD', `Uploading to Firebase Storage: ${file.name}`);
      const storageRef = ref(storage, `uploads/${user.uid}/${Date.now()}_${file.name}`);
      
      const uploadResult = await uploadBytes(storageRef, file);
      if (!uploadResult) {
        throw new Error('Firebase Storage upload failed with empty result');
      }
      
      const downloadURL = await getDownloadURL(storageRef);
      if (!downloadURL) {
        throw new Error('Failed to get download URL from Firebase Storage');
      }
      
      Debug.info('FILE_UPLOAD', `File uploaded to Firebase, URL obtained successfully`);
      
      // Store file metadata in Firestore
      const fileData = {
        userId: user.uid,
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        uploadedAt: Timestamp.now(),
        downloadURL: downloadURL,
        extractedContent: fileContent,
        chatSessionId: currentChatId
      };
      
      Debug.debug('FILE_UPLOAD', 'Saving file metadata to Firestore');
      const filesCollection = collection(db, "uploadedFiles");
      const fileDoc = await addDoc(filesCollection, fileData);
      
      if (!fileDoc || !fileDoc.id) {
        throw new Error('Firestore document creation failed');
      }
      
      Debug.info('FILE_UPLOAD', `File metadata saved to Firestore with ID: ${fileDoc.id}`);
      
      // Update uploaded files state
      const newFile = {
        id: fileDoc.id,
        name: file.name,
        url: downloadURL,
        type: file.type,
        ...fileData
      };
      
      setUploadedFiles(prev => [newFile, ...prev]);
      setCurrentFile(newFile);
      
      Debug.info('FILE_UPLOAD', 'File upload process completed successfully');
      
      return newFile;
    } catch (error) {
      // Enhanced error logging for debugging
      Debug.error('FILE_UPLOAD', 'Error in file upload process', error);
      
      // Dump the state of relevant objects for debugging
      Debug.debug('FILE_UPLOAD', 'Debug info', {
        fileInfo: file ? {
          name: file.name,
          type: file.type,
          size: file.size,
          lastModified: file.lastModified
        } : null,
        currentChatId,
        userAuth: user ? {
          uid: user.uid,
          isAnonymous: user.isAnonymous,
          emailVerified: user.emailVerified
        } : null,
        storageInstance: !!storage,
        databaseInstance: !!db
      });
      
      return null;
    }
  };

  const startNewChat = async () => {
    setChatMessages([]);
    setCurrentChatId(null);
    setSelectedCase(null); // Clear any selected case
  };

  const loadChatSession = async (sessionId) => {
    if (!sessionId) {
      Debug.error('DASHBOARD', 'Cannot load chat session: No session ID provided');
      return { success: false, error: new Error('No session ID provided') };
    }
    
    try {
      setIsLoading(true);
      Debug.info('DASHBOARD', `Loading chat session: ${sessionId}`);
      
      // Clear any selected case to prevent confusion
      setSelectedCase(null);
      
      // Verify this session exists
      const sessionRef = doc(db, "chatSessions", sessionId);
      
      let sessionDoc;
      try {
        sessionDoc = await getDoc(sessionRef);
      } catch (docError) {
        Debug.error('DASHBOARD', `Firebase error fetching session document: ${sessionId}`, docError);
        throw new Error(`Database error: ${docError.message}`);
      }
      
      if (!sessionDoc.exists()) {
        Debug.error('DASHBOARD', `Chat session not found: ${sessionId}`);
        setChatMessages([{
          id: 'error-message',
          sender: 'ai',
          content: 'Error: The requested chat session could not be found. This may be due to a database error or the session may have been deleted.',
          timestamp: new Date()
        }]);
        setIsLoading(false);
        return { success: false, error: new Error('Session not found') };
      }
      
      const sessionData = sessionDoc.data();
      
      // Security check - ensure this session belongs to the current user
      if (!user || !user.uid) {
        Debug.error('DASHBOARD', 'Security error: No authenticated user while loading chat session');
        setChatMessages([{
          id: 'auth-error',
          sender: 'ai',
          content: 'Error: You must be logged in to view this chat session.',
          timestamp: new Date()
        }]);
        setIsLoading(false);
        return { success: false, error: new Error('Not authenticated') };
      }
      
      if (sessionData.userId !== user.uid) {
        Debug.error('DASHBOARD', `Security error: Attempted to access chat session belonging to another user. Session ID: ${sessionId}, Session user: ${sessionData.userId}, Current user: ${user.uid}`);
        setChatMessages([{
          id: 'security-error',
          sender: 'ai',
          content: 'Security Error: You do not have permission to access this chat session.',
          timestamp: new Date()
        }]);
        setIsLoading(false);
        return { success: false, error: new Error('Permission denied') };
      }
      
      // Handle messages directly embedded in the chat session document
      if (sessionData.messages && Array.isArray(sessionData.messages)) {
        Debug.info('DASHBOARD', `Loading ${sessionData.messages.length} messages directly from session document`);
        
        // Format messages for display
        const formattedMessages = sessionData.messages.map((msg, index) => ({
          id: `inline-msg-${index}`,
          sender: msg.role === 'user' ? 'user' : 'ai',
          content: msg.content,
          timestamp: msg.timestamp ? new Date(msg.timestamp) : new Date()
        }));
        
        setChatMessages(formattedMessages);
        setCurrentChatId(sessionId);
        setIsLoading(false);
        return { success: true, messageCount: formattedMessages.length };
      }
      
      // If we get here, try to find messages in the separate chatMessages collection
      try {
        const chatMessagesQuery = query(
          collection(db, "chatMessages"),
          where("sessionId", "==", sessionId),
          orderBy("timestamp", "asc")
        );
        
        let chatMessagesSnapshot;
        try {
          chatMessagesSnapshot = await getDocs(chatMessagesQuery);
        } catch (queryError) {
          // Handle Firestore index errors specifically
          if (queryError.code === 'failed-precondition' || queryError.message?.includes('index')) {
            Debug.error('DASHBOARD', `Firestore index error on chat messages query: ${queryError.message}`, queryError);
            
            // For user experience, just show a simple error without the index details
            // since this is a nested error deep in the UI flow
            setChatMessages([{
              id: 'index-error',
              sender: 'ai',
              content: 'Database index error loading messages. Please contact the administrator.',
              timestamp: new Date()
            }]);
            return { success: false, error: queryError };
          } else {
            // Re-throw other errors
            throw queryError;
          }
        }
        
        Debug.info('DASHBOARD', `Found ${chatMessagesSnapshot.docs.length} messages in chatMessages collection`);
        
        if (chatMessagesSnapshot.docs.length === 0) {
          // No messages found, create a welcome message
          setChatMessages([{
            id: 'welcome-message',
            sender: 'ai',
            content: 'Welcome to this chat session. There are no previous messages to display.',
            timestamp: new Date()
          }]);
        } else {
          const messageHistory = chatMessagesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setChatMessages(messageHistory);
        }
      } catch (messagesError) {
        Debug.error('DASHBOARD', `Error fetching chat messages for session ${sessionId}`, messagesError);
        setChatMessages([{
          id: 'error-message',
          sender: 'ai',
          content: `Error loading chat messages: ${messagesError.message}`,
          timestamp: new Date()
        }]);
        // Continue execution to update the session timestamp
      }
      
      // Update session timestamp to mark it as recently accessed
      try {
        await updateDoc(sessionRef, {
          updatedAt: Timestamp.now()
        });
      } catch (updateError) {
        Debug.warn('DASHBOARD', `Could not update session timestamp: ${sessionId}`, updateError);
        // Non-critical error, continue
      }
      
      // Update chat state
      setCurrentChatId(sessionId);
      
      // Update UI to move this session to the top of the list
      setChatSessions(prev => {
        // Find the current session
        const targetSession = prev.find(session => session.id === sessionId);
        if (!targetSession) return prev;
        
        // Remove it from the current position
        const otherSessions = prev.filter(session => session.id !== sessionId);
        
        // Create an updated version with current timestamp
        const updatedSession = {
          ...targetSession,
          updatedAt: Timestamp.now()
        };
        
        // Return with the selected session at the top
        return [updatedSession, ...otherSessions];
      });
      
      return { success: true };
    } catch (error) {
      Debug.error('DASHBOARD', `Error loading chat session: ${error.message}`, error);
      setChatMessages([{
        id: 'error-message',
        sender: 'ai',
        content: `Error: Could not load chat session: ${error.message}`,
        timestamp: new Date()
      }]);
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  const deleteChatSession = async (sessionId) => {
    try {
      // Verify this session belongs to the current user
      const sessionRef = doc(db, "chatSessions", sessionId);
      const sessionDoc = await getDoc(sessionRef);
      
      if (!sessionDoc.exists()) {
        console.error('Chat session not found');
        return;
      }
      
      const sessionData = sessionDoc.data();
      
      // Security check - ensure this session belongs to the current user
      if (sessionData.userId !== user.uid) {
        console.error('Security error: Attempted to delete chat session belonging to another user');
        return;
      }
      
      // Delete the chat session document
      await deleteDoc(doc(db, "chatSessions", sessionId));
      
      // Delete all messages associated with the session
      const chatMessagesQuery = query(
        collection(db, "chatMessages"),
        where("sessionId", "==", sessionId)
      );
      
      const chatMessagesSnapshot = await getDocs(chatMessagesQuery);
      const deletePromises = chatMessagesSnapshot.docs.map(doc => deleteDoc(doc.ref));
      await Promise.all(deletePromises);
      
      // Update local state
      setChatSessions(prev => prev.filter(session => session.id !== sessionId));
      
      // If the deleted session was the current session, reset the chat
      if (sessionId === currentChatId) {
        setChatMessages([]);
        setCurrentChatId(null);
      }
    } catch (error) {
      console.error('Error deleting chat session:', error);
    }
  };

  // Simulate legal search function
  const simulateLegalSearch = async (query, type) => {
    // This would be replaced with actual API calls to your legal research service
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Different mock results for different tabs
    if (type === 'case') {
      return [
        {
          id: '1',
          title: 'Smith v. Jones Corp.',
          summary: 'Plaintiff alleged negligence in a workplace injury case...',
          citation: '123 F.3d 456 (2020)',
          date: '2020-05-15',
          relevance: 0.95
        },
        {
          id: '2',
          title: 'State v. Williams',
          summary: 'Criminal case involving questions of search and seizure...',
          citation: '234 S.W.2d 567 (2019)',
          date: '2019-11-03',
          relevance: 0.88
        }
      ];
    } else if (type === 'keyword') {
      return [
        {
          id: '3',
          title: 'Statute Reference: Contract Law',
          summary: 'References to contract law in state statutes...',
          relevance: 0.92
        },
        {
          id: '4',
          title: 'Legal Dictionary: Contract',
          summary: 'Definition and explanation of contract terminology...',
          relevance: 0.87
        }
      ];
    } else {
      return [
        {
          id: '5',
          title: 'Legal Analysis: Contract Disputes',
          summary: 'This is a sample analysis of contract dispute resolutions based on your query...',
          relevance: 0.95,
          facts: 'Contract disputes often arise from misunderstandings about terms, failure to perform obligations, or changed circumstances that make performance difficult.',
          holding: 'Courts typically examine the original intent of the parties when interpreting contract language.',
          analysis: 'In your situation, the key factors to consider would include whether there was a valid offer and acceptance, whether considerations were exchanged, and if there are any defenses to enforcement.'
        },
      ];
    }
  };

  // Update the simulateAIResponse function to use Gemini for file analysis
  const simulateAIResponse = async (input, fileContents = {}) => {
    // If files are provided and Gemini is available, use it for analysis
    const fileNames = Object.keys(fileContents);
    
    if (fileNames.length > 0) {
      try {
        // Create document array for Gemini
        const documents = [];
        
        for (const fileName of fileNames) {
          const fileDetails = fileContents[fileName];
          
          // First check if content is directly available in fileContents
          if (fileDetails.content) {
            documents.push({
              name: fileName,
              content: fileDetails.content,
              type: fileDetails.type || 'unknown'
            });
            continue;
          }
          
          // If not, try to fetch content from Firestore
          if (fileDetails.id) {
            try {
              const fileDoc = await getDoc(doc(db, "uploadedFiles", fileDetails.id));
              if (fileDoc.exists()) {
                const fileData = fileDoc.data();
                if (fileData.fileContent) {
                  documents.push({
                    name: fileName,
                    content: fileData.fileContent,
                    type: fileData.fileType || fileDetails.type || 'unknown'
                  });
                  continue;
                }
              }
            } catch (err) {
              console.error(`Error fetching file content for ${fileName}:`, err);
            }
          }
          
          // If we still don't have content, generate a placeholder based on file type
          const fileExtension = fileDetails.type || fileName.split('.').pop().toLowerCase() || 'unknown';
          let placeholderContent;
          
          if (fileExtension.includes('pdf')) {
            placeholderContent = `[PDF Document: ${fileName}]
            
This is a placeholder for PDF content that couldn't be extracted.
The document would contain PDF text content and structure.`;
          } else if (fileExtension.includes('doc') || fileExtension.includes('word')) {
            placeholderContent = `[Word Document: ${fileName}]
            
This is a placeholder for Word document content that couldn't be extracted.
The document would contain formatted text and document structure.`;
          } else {
            placeholderContent = `[Document: ${fileName}]
            
This is a placeholder for document content that couldn't be extracted.
File type: ${fileExtension}`;
          }
          
          documents.push({
            name: fileName,
            content: placeholderContent,
            type: fileExtension
          });
        }
        
        // Log document array for debugging
        console.log('Documents prepared for Gemini:', documents);
        
        // Use Gemini to analyze the documents
        let geminiResponse;
        try {
          // If input is empty, ask for a general document summary
          const query = input.trim() || "Please summarize the key points from this document.";
          geminiResponse = await analyzeDocumentWithGemini(query, documents);
        } catch (error) {
          console.error('Error calling Gemini API:', error);
          geminiResponse = `I attempted to analyze your document, but encountered an error with the AI service. ${error.message}`;
        }
        
        // Return Gemini's response
        return geminiResponse;
      } catch (error) {
        console.error('Error in document analysis with Gemini:', error);
        
        // Fallback to the original file analysis if Gemini fails
        const fileAnalysisResponses = fileNames.map(fileName => {
          const fileDetails = fileContents[fileName];
          const fileExtension = fileDetails.type || 'txt';
          
          return `I've analyzed the file "${fileName}" but encountered technical difficulties with the AI processing.
            
This appears to be a ${fileExtension.toUpperCase()} file. Unfortunately, I couldn't perform a detailed analysis at this time.

Would you like me to try again or focus on specific aspects of the document?`;
        });
        
        return `${fileAnalysisResponses.join('\n\n')}\n\n${
          input.trim() ? 
          `Regarding your question "${input}": I'd be happy to answer once we resolve the document analysis issue.` : 
          "Please let me know if you have any specific questions about these documents."
        }`;
      }
    }
    
    // Original function for non-document queries...
    if (input.toLowerCase().includes('negligence')) {
      return "The elements of negligence typically include:\n\n1. Duty of care\n2. Breach of duty\n3. Causation (actual and proximate)\n4. Damages\n\nTo establish negligence, the plaintiff must prove each of these elements. Would you like me to explain any particular element in more detail?";
    } else if (input.toLowerCase().includes('supreme court')) {
      return "Recent Supreme Court decisions on IP law include:\n\n1. Google LLC v. Oracle America, Inc. (2021) - Involving copyright protection for APIs\n2. United States v. Arthrex, Inc. (2021) - Addressing the constitutionality of Patent Trial and Appeal Board judge appointments\n\nThese decisions have significantly impacted how intellectual property is protected and challenged. Would you like more specific information about either case?";
    } else if (input.toLowerCase().includes('demand letter') || input.toLowerCase().includes('draft')) {
      return "I can help you draft a demand letter for contract breach. Here's a basic template:\n\n[Your Name/Company]\n[Your Address]\n[Date]\n\nRE: Notice of Contract Breach\n\nDear [Recipient],\n\nI am writing to notify you of your breach of our agreement dated [contract date].\n\n[Describe the specific breach and reference relevant contract sections]\n\nAs a result of this breach, I have suffered damages of [amount/description].\n\nPlease [specific demand] within [timeframe] to resolve this matter.\n\nSincerely,\n[Your name]\n\nWould you like me to customize this further based on your specific situation?";
    } else {
      return "I understand you're asking about " + input + ". Here's what I can tell you:\n\nLegal questions often require careful analysis of facts, jurisdiction, and applicable laws. While I can provide general information, specific legal advice should come from a qualified attorney familiar with your situation.\n\nCan you provide more details about your question so I can give you more relevant information?";
    }
  };

  const handleAddNote = async () => {
    if (!newNote.trim()) return;
    
    try {
      // Create a Timestamp for Firestore storage
      const firestoreTimestamp = Timestamp.now();
      
      const noteData = {
        userId: user.uid,
        content: newNote.trim(),
        createdAt: firestoreTimestamp,
        category: selectedNote?.category || 'General'
      };
      
      // Add note to Firestore
      const notesRef = collection(db, "notes");
      const noteDoc = await addDoc(notesRef, noteData);
      
      // Update local notes collection - ensure timestamp is normalized for UI
      setNotes(prev => [
        {
          id: noteDoc.id,
          ...noteData,
          // Convert to JS Date for UI rendering
          createdAt: normalizeTimestamp(firestoreTimestamp)
        },
        ...prev
      ]);
      
      // Reset note input and close modal
      setNewNote('');
      setIsAddNoteOpen(false);
    } catch (error) {
      Debug.error('NOTES', 'Error adding note', error);
      alert(`Failed to add note: ${error.message}`);
    }
  };

  const handleUpdateNote = async () => {
    if (!selectedNote || !newNote.trim()) return;
    
    try {
      // Create a Timestamp for Firestore storage
      const firestoreTimestamp = Timestamp.now();
      
      const noteRef = doc(db, "notes", selectedNote.id);
      const updatedData = {
        content: newNote.trim(),
        updatedAt: firestoreTimestamp,
        category: selectedNote.category || 'General'
      };
      
      await updateDoc(noteRef, updatedData);
      
      // Update local notes collection - ensure timestamps are normalized for UI
      setNotes(prev => prev.map(note => 
        note.id === selectedNote.id 
          ? { 
              ...note, 
              ...updatedData,
              // Keep the original createdAt but ensure it's normalized
              createdAt: normalizeTimestamp(note.createdAt),
              // Convert new updatedAt to JS Date for UI rendering
              updatedAt: normalizeTimestamp(firestoreTimestamp)
            }
          : note
      ));
      
      // Reset note input, selected note, and close modal
      setNewNote('');
      setSelectedNote(null);
      setIsAddNoteOpen(false);
    } catch (error) {
      Debug.error('NOTES', 'Error updating note', error);
      alert(`Failed to update note: ${error.message}`);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      const noteRef = doc(db, "notes", noteId);
      await deleteDoc(noteRef);
      
      // Update local notes collection
      setNotes(prev => prev.filter(note => note.id !== noteId));
    } catch (error) {
      Debug.error('NOTES', 'Error deleting note', error);
      alert(`Failed to delete note: ${error.message}`);
    }
  };

  const updateUserSettings = async (settings) => {
    try {
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, {
        settings: settings
      });
      
      // Update local user data
      setUserData({
        ...userData,
        settings: {
          ...(userData.settings || {}),
          ...settings
        }
      });
      
      return true;
    } catch (error) {
      console.error("Error updating settings:", error);
      throw error;
    }
  };

  const exportChat = async () => {
    if (!currentChatId) return;
    
    setIsExporting(true);
    try {
      const chatMessagesQuery = query(
        collection(db, "chatMessages"),
        where("sessionId", "==", currentChatId),
        orderBy("timestamp", "asc")
      );
      
      const chatMessagesSnapshot = await getDocs(chatMessagesQuery);
      const messages = chatMessagesSnapshot.docs.map(doc => doc.data());
      
      const exportContent = messages.map(msg => 
        `[${msg.timestamp.toDate().toLocaleString()}] ${msg.sender.toUpperCase()}: ${msg.content}`
      ).join('\n\n');
      
      const blob = new Blob([exportContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `chat-export-${new Date().toISOString()}.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error exporting chat:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const saveToLibrary = async (result) => {
    if (!user) return;
    
    try {
      // Save to user's library in Firestore
      const libraryRef = collection(db, "library");
      await addDoc(libraryRef, {
        userId: user.uid,
        item: result,
        savedAt: Timestamp.now(),
        type: 'search_result'
      });
      
      // Show success notification
      alert("Successfully saved to your library");
    } catch (error) {
      console.error("Error saving to library:", error);
      alert("Failed to save to library");
    }
  };

  const exportSearchResult = (result) => {
    try {
      // Create formatted content
      let content = `Title: ${result.title}\n\n`;
      if (result.citation) content += `Citation: ${result.citation}\n`;
      if (result.date) content += `Date: ${result.date}\n`;
      content += `Relevance: ${(result.relevance * 100).toFixed(1)}%\n\n`;
      content += `Summary: ${result.summary}\n\n`;
      
      if (result.facts) content += `Facts: ${result.facts}\n\n`;
      if (result.holding) content += `Holding: ${result.holding}\n\n`;
      if (result.analysis) content += `Analysis: ${result.analysis}\n\n`;
      
      // Create and trigger download
      const blob = new Blob([content], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${result.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error exporting search result:", error);
      alert("Failed to export search result");
    }
  };

  const shareSearchResult = async (result) => {
    try {
      // Check if Web Share API is available
      if (navigator.share) {
        await navigator.share({
          title: result.title,
          text: result.summary,
          url: window.location.href
        });
      } else {
        // Fallback: copy to clipboard
        const text = `${result.title}\n${result.summary}`;
        await navigator.clipboard.writeText(text);
        alert("Result copied to clipboard");
      }
    } catch (error) {
      console.error("Error sharing search result:", error);
      alert("Failed to share result");
    }
  };

  // Helper to format timestamps consistently for display
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '(no date)';
    
    try {
      // Convert to standard Date object first using normalizeTimestamp
      const dateObj = timestamp instanceof Date ? timestamp : normalizeTimestamp(timestamp);
      
      // Format the date consistently
      return dateObj.toLocaleDateString(undefined, { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    } catch (error) {
      Debug.warn('TIMESTAMP_FORMAT', 'Failed to format timestamp', { timestamp, error });
      // Return a more descriptive fallback message for debugging
      if (timestamp && typeof timestamp === 'object') {
        return `(Invalid: ${Object.keys(timestamp).join(',')})`;
      }
      return '(invalid date)';
    }
  };

  // Helper to generate Firestore console URL for index creation
  const getFirestoreIndexUrl = (queryErrorMessage) => {
    // Extract project ID from error message if possible
    let projectId = '';
    const projectIdMatch = queryErrorMessage?.match(/project\s+([a-z0-9-]+)/i);
    if (projectIdMatch && projectIdMatch[1]) {
      projectId = projectIdMatch[1];
    }
    
    // Check for direct URL in error message (Firebase often provides this)
    const urlMatch = queryErrorMessage?.match(/(https:\/\/console\.firebase\.google\.com\/[^\s]+)/);
    if (urlMatch && urlMatch[1]) {
      // Found a direct URL to create the index
      Debug.info('DASHBOARD', 'Found direct Firebase index creation URL in error message');
      return urlMatch[1];
    }
    
    // Use extracted project ID or fall back to environment variable
    const effectiveProjectId = projectId || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '';
    
    if (!effectiveProjectId) {
      return 'https://console.firebase.google.com/';
    }
    
    return `https://console.firebase.google.com/project/${effectiveProjectId}/firestore/indexes`;
  };

  // Function to forcibly refresh Firestore data
  const refreshFirestoreData = async () => {
    if (!user || !user.uid) {
      Debug.warn('DASHBOARD', 'Cannot refresh data: No user ID available');
      return;
    }
    
    try {
      Debug.info('DASHBOARD', 'Forcing refresh of Firestore data');
      
      // Clear current data before fetching
      setSearchHistory([]);
      setNotes([]);
      setChatSessions([]);
      
      // Show loading state
      setLoading(true);
      
      // Re-fetch all data using our centralized function
      const result = await loadUserData(user);
      
      if (!result || !result.success) {
        throw new Error(result?.error?.message || "Unknown error during data refresh");
      }
      
      Debug.info('DASHBOARD', 'Data refresh completed successfully');
      
      // Hide loading state
      setLoading(false);
    } catch (error) {
      const errorMessage = error?.message || 'Unknown error';
      Debug.error('DASHBOARD', `Error refreshing Firestore data: ${errorMessage}`, error);
      
      // Show error notification to user
      alert(`Failed to refresh data: ${errorMessage}`);
      
      // Hide loading state
      setLoading(false);
    }
  };

  // Helper to normalize any timestamp format to a consistent JS Date object
  const normalizeTimestamp = (timestamp) => {
    if (!timestamp) return new Date(); // Default to current time if no timestamp
    
    try {
      // Already a JavaScript Date
      if (timestamp instanceof Date) {
        return timestamp;
      }
      
      // Firestore Timestamp object with toDate() method
      if (timestamp.toDate && typeof timestamp.toDate === 'function') {
        return timestamp.toDate();
      }
      
      // Firestore server timestamp (seconds + nanoseconds)
      if (timestamp.seconds !== undefined && timestamp.nanoseconds !== undefined) {
        return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
      }
      
      // Unix timestamp (number in milliseconds)
      if (typeof timestamp === 'number') {
        return new Date(timestamp);
      }
      
      // ISO string or other date string
      if (typeof timestamp === 'string') {
        return new Date(timestamp);
      }
      
      // If we can't determine the format, return current date as fallback
      Debug.warn('TIMESTAMP_NORMALIZE', 'Unknown timestamp format', { timestamp });
      return new Date();
    } catch (error) {
      Debug.error('TIMESTAMP_NORMALIZE', 'Error normalizing timestamp', { timestamp, error });
      return new Date(); // Return current date if there's an error
    }
  };

  // Function to repair search history data
  const handleRepairSearchHistory = async () => {
    if (!user || !user.uid) {
      Debug.warn('DASHBOARD', 'Cannot repair data: No user ID available');
      return;
    }
    
    try {
      Debug.info('DASHBOARD', 'Repairing search history data');
      
      // Show loading state
      setLoading(true);
      
      // Repair search history data
      const repairResult = await Debug.measurePerformance(
        'FIRESTORE', 
        'repairSearchHistoryData', 
        () => repairSearchHistoryData(user.uid)
      );
      
      Debug.info('DASHBOARD', 'Search history repair completed', repairResult);
      
      // Re-fetch all data after repair
      await refreshFirestoreData();
    } catch (error) {
      Debug.error('DASHBOARD', 'Error repairing search history data', error);
      // Hide loading state
      setLoading(false);
    }
  };

  // Function to load all user data
  const loadUserData = async (currentUser) => {
    if (!currentUser || !currentUser.uid) {
      Debug.warn('DASHBOARD', 'Cannot load user data: No user ID available');
      return { success: false, error: new Error('No user ID available') };
    }
    
    Debug.info('DASHBOARD', `Loading data for user: ${currentUser.uid}`);
    
    try {
      // Debug: Check Firestore collections for this user
      let debugData;
      try {
        debugData = await Debug.measurePerformance(
          'FIRESTORE', 
          'debugFirestoreCollections', 
          () => debugFirestoreCollections(currentUser.uid)
        );
        setDebugInfo(debugData);
        Debug.debug('DASHBOARD', 'Firestore collections checked', debugData);
      } catch (debugError) {
        Debug.warn('DASHBOARD', 'Error checking Firestore collections', debugError);
        // Continue with loading - this is just diagnostic
      }
      
      // Further loading operations with individual try/catch for each section
      try {
        // Fetch search history for this user
        Debug.info('DASHBOARD', `Fetching search history for user: ${currentUser.uid}`);
        try {
          // First check if we have the proper index by running a simpler query
          const testQuery = query(
            collection(db, "searchHistory"),
            where("userId", "==", currentUser.uid)
          );
          
          await getDocs(testQuery); // If this passes, we have basic indexing
          
          // Now try the full query with ordering
          const searchHistoryQuery = query(
            collection(db, "searchHistory"),
            where("userId", "==", currentUser.uid),
            orderBy("timestamp", "desc"),
            limit(10)
          );
          
          let searchHistorySnapshot;
          try {
            searchHistorySnapshot = await getDocs(searchHistoryQuery);
          } catch (queryError) {
            // Handle Firestore index errors specifically
            if (queryError.code === 'failed-precondition' || queryError.message?.includes('index')) {
              Debug.error('DASHBOARD', 'Firestore index error on search history query', queryError);
              
              // Check for automatic index creation link in error message
              const indexUrl = getFirestoreIndexUrl(queryError.message);
              console.log('Firebase Index Creation URL:', indexUrl);
              
              const indexErrorMessage = `
                Search history query requires a Firestore index.

                Required composite index on 'searchHistory' collection:
                - userId (Ascending)
                - timestamp (Descending)
                
                You can create this index in the Firebase console.
              `;
              
              // Show alert with basic info and direct link
              if (indexUrl) {
                if (confirm(indexErrorMessage + '\n\nWould you like to open the Firebase console to create this index?')) {
                  window.open(indexUrl, '_blank');
                }
              } else {
                alert(indexErrorMessage + '\n\nPlease visit the Firebase console to create this index.');
              }
              
              // Continue with fallback query (unordered, but still shows some data)
              try {
                searchHistorySnapshot = await getDocs(testQuery);
                Debug.info('DASHBOARD', 'Using fallback query without ordering for search history');
              } catch (fallbackError) {
                Debug.error('DASHBOARD', 'Even fallback search history query failed', fallbackError);
                searchHistorySnapshot = { docs: [] };
              }
            } else {
              // Re-throw other errors
              throw queryError;
            }
          }
          
          // Add debug logging to inspect each search history item in detail
          Debug.warn('DASHBOARD', `Raw search history items from Firestore:`, 
            searchHistorySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
              dataType: typeof doc.data(),
              hasTimestamp: !!doc.data().timestamp,
              timestampType: doc.data().timestamp ? typeof doc.data().timestamp : 'undefined',
              hasServerTimestamp: doc.data().timestamp && doc.data().timestamp.toDate ? true : false
            }))
          );
          
          // Validate search history data before processing
          let validSearchItems = 0;
          let invalidItems = [];
          
          const searchHistoryData = searchHistorySnapshot.docs.map(doc => {
            const data = doc.data();
            
            // More extensive validation of search history data
            const isValid = data && 
                          data.userId === currentUser.uid && 
                          typeof data.query === 'string' && 
                          data.query.trim() !== '';
            
            // Check for deleted flag
            const isDeleted = data.deleted === true;
            
            if (isValid && !isDeleted) {
              validSearchItems++;
              
              // Create a normalized version of the search history item
              return {
                id: doc.id,
                // Essential fields with defaults
                userId: data.userId,
                query: data.query.trim(),
                type: ['ai', 'case', 'keyword'].includes(data.type) ? data.type : 'ai',
                // Handle all possible timestamp formats
                timestamp: normalizeTimestamp(data.timestamp || data.createdAt || new Date())
              };
            } else {
              // Track invalid items for debugging
              invalidItems.push({
                id: doc.id,
                hasUserId: !!data?.userId,
                userIdMatch: data?.userId === currentUser.uid,
                hasQuery: !!data?.query,
                queryType: typeof data?.query,
                hasTimestamp: !!data?.timestamp,
                hasCreatedAt: !!data?.createdAt,
                isDeleted: isDeleted
              });
              
              // Return null for invalid items (will be filtered out below)
              return null;
            }
          }).filter(Boolean); // Remove null items from the array
          
          if (invalidItems.length > 0) {
            Debug.warn('DASHBOARD', `Found ${invalidItems.length} invalid search history items:`, invalidItems);
          }
          
          Debug.info('DASHBOARD', `Found ${validSearchItems} valid search history items out of ${searchHistorySnapshot.docs.length} total`);
          setSearchHistory(searchHistoryData);
          
          // Fetch notes for this user
          Debug.info('DASHBOARD', `Fetching notes for user: ${currentUser.uid}`);
          const notesQuery = query(
            collection(db, "notes"),
            where("userId", "==", currentUser.uid),
            orderBy("createdAt", "desc")
          );
          
          let notesSnapshot;
          try {
            notesSnapshot = await getDocs(notesQuery);
          } catch (queryError) {
            // Handle Firestore index errors specifically
            if (queryError.code === 'failed-precondition' || queryError.message?.includes('index')) {
              Debug.error('DASHBOARD', 'Firestore index error on notes query', queryError);
              
              // Show a helpful error message with link to Firestore console
              const indexUrl = getFirestoreIndexUrl(queryError.message);
              
              const indexErrorMessage = `
                Notes query requires a Firestore index.

                Required composite index on 'notes' collection:
                - userId (Ascending)
                - createdAt (Descending)
                
                You can create this index in the Firebase console.
              `;
              
              // Show alert with basic info
              alert(indexErrorMessage);
              
              // Add additional info to debug console with clickable link
              console.warn(`Firestore index required. Open console: ${indexUrl}`);
              
              // Continue execution with empty results
              notesSnapshot = { docs: [] };
            } else {
              // Re-throw other errors
              throw queryError;
            }
          }
          
          // Validate notes data before processing
          let validNotes = 0;
          const notesData = notesSnapshot.docs.map(doc => {
            const data = doc.data();
            const isValid = data && data.content && data.createdAt;
            if (isValid) validNotes++;
            return {
              id: doc.id,
              ...data,
              // Ensure createdAt is always normalized to a proper Date object
              createdAt: normalizeTimestamp(data.createdAt || Timestamp.now())
            };
          });
          
          Debug.info('DASHBOARD', `Found ${validNotes} valid notes out of ${notesSnapshot.docs.length} total`);
          setNotes(notesData);
          
          // Fetch uploaded files for this user
          const filesQuery = query(
            collection(db, "uploadedFiles"),
            where("userId", "==", currentUser.uid),
            orderBy("uploadedAt", "desc")
          );
          
          const filesSnapshot = await getDocs(filesQuery);
          const filesData = filesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          Debug.debug('DASHBOARD', `Fetched ${filesData.length} uploaded files`);
          setUploadedFiles(filesData);
          
          // Fetch chat sessions for this user
          await fetchUserChatSessions(currentUser.uid);
          
          return { success: true };
        } catch (searchError) {
          Debug.error('DASHBOARD', 'Error loading search history', searchError);
          // Continue with other data loading
        }
        
        return { success: true };
      } catch (error) {
        Debug.error('DASHBOARD', 'Error loading user data', error);
        return { success: false, error };
      }
    } catch (error) {
      Debug.error('DASHBOARD', 'Error loading user data', error);
      return { success: false, error };
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex">
      {/* Sidebar Component */}
      <Sidebar 
        user={user} 
        userData={userData} 
        setIsSettingsOpen={setIsSettingsOpen}
        auth={auth}
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
        chatSessions={chatSessions}
        loadChatSession={loadChatSession}
        startNewChat={startNewChat}
        deleteChatSession={deleteChatSession}
        currentChatId={currentChatId}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* SearchHeader Component - Sticky */}
        <div className="sticky top-0 z-30">
          <SearchHeader 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
            isLoading={isLoading || isSearching}
            searchHistory={searchHistory}
          />
        </div>
        
        {/* Content Area - Bento Layout */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Column - Chat Interface */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="bg-white dark:bg-gray-800 rounded-tl-3xl shadow-xl m-4 mb-0 flex flex-col flex-1 overflow-hidden">
              <ChatPanel 
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
                chatInput={chatInput}
                setChatInput={setChatInput}
                handleChatSubmit={handleChatSubmit}
                isLoading={isLoading}
                userData={userData}
                handleFileUpload={handleFileUpload}
                uploadedFiles={uploadedFiles}
                exportChat={exportChat}
                isExporting={isExporting}
                currentChatId={currentChatId}
                currentFile={currentFile}
                setCurrentFile={setCurrentFile}
              />
            </div>
          </div>
          
          {/* Right Column - Results and Notes */}
          <div className="w-96 border-l border-gray-100 dark:border-gray-700 overflow-hidden h-full flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-4">
                {/* Search Results Section */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
                  <div className="sticky top-0 z-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 font-semibold flex justify-between items-center">
                    <h3 className="font-semibold">Search Results</h3>
                    <button 
                      onClick={() => setIsResultsExpanded(!isResultsExpanded)}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 transition-colors"
                    >
                      <svg className={`w-5 h-5 transition-transform ${isResultsExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  {isResultsExpanded && (
                    <div className="max-h-80 overflow-y-auto p-4">
                      <ResultsPanel 
                        searchResults={searchResults}
                        selectedCase={selectedCase}
                        setSelectedCase={setSelectedCase}
                        activeTab={activeTab}
                        isLoading={isLoading || isSearching}
                        onResultClick={(result) => {
                          setChatInput(`Can you analyze this case for me?\n\n${result.title}\n${result.summary}`);
                        }}
                        handleSaveToLibrary={(result) => saveToLibrary(result)}
                        handleExportResult={(result) => exportSearchResult(result)}
                        handleShareResult={(result) => shareSearchResult(result)}
                        user={user}
                      />
                    </div>
                  )}
                </div>
                
                {/* Notes Section */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
                  <div className="sticky top-0 z-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex justify-between items-center">
                    <h3 className="font-semibold">Recent Notes</h3>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setIsAddNoteOpen(true)}
                        className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg px-3 py-1 text-sm transition-colors"
                      >
                        Add Note
                      </button>
                      <button 
                        onClick={() => setIsNotesExpanded(!isNotesExpanded)}
                        className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 transition-colors"
                      >
                        <svg className={`w-5 h-5 transition-transform ${isNotesExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {isNotesExpanded && (
                    <div className="max-h-80 overflow-y-auto p-4">
                      {loading ? (
                        <div className="flex justify-center items-center py-6">
                          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
                        </div>
                      ) : notes && notes.length > 0 ? (
                        <div className="space-y-3">
                          {notes.map(note => (
                            <div key={note.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg relative group">
                              <p className="text-gray-800 dark:text-gray-200 text-sm mb-2">{note.content}</p>
                              <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                                <span>
                                  {note.category && <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded-full mr-2">{note.category}</span>}
                                  {formatTimestamp(note.createdAt)}
                                </span>
                                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button 
                                    onClick={() => {
                                      setSelectedNote(note);
                                      setNewNote(note.content);
                                      setIsAddNoteOpen(true);
                                    }}
                                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                                  >
                                    Edit
                                  </button>
                                  <button 
                                    onClick={() => {
                                      if (window.confirm('Are you sure you want to delete this note?')) {
                                        handleDeleteNote(note.id);
                                      }
                                    }}
                                    className="text-red-600 hover:text-red-800 dark:text-red-400"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center text-gray-500 dark:text-gray-400 py-6">
                          <svg className="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <p>No notes yet</p>
                          <button 
                            onClick={() => setIsAddNoteOpen(true)}
                            className="mt-2 text-blue-600 hover:text-blue-800 dark:text-blue-400"
                          >
                            Create your first note
                          </button>
                          {debugInfo && debugInfo.notes && debugInfo.notes.userNotes > 0 && (
                            <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-md text-xs">
                              <div className="font-medium">Data Mismatch Detected:</div>
                              <p>Debug panel shows {debugInfo.notes.userNotes} notes, but they're not displaying properly.</p>
                              <button
                                onClick={() => window.location.reload()}
                                className="mt-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-800 rounded text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-700"
                              >
                                Refresh Page
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Recent Search History */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
                  <div className="sticky top-0 z-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex justify-between items-center">
                    <h3 className="font-semibold">Recent Searches</h3>
                    <button 
                      onClick={() => setIsSearchHistoryExpanded(!isSearchHistoryExpanded)}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 transition-colors"
                    >
                      <svg className={`w-5 h-5 transition-transform ${isSearchHistoryExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  {isSearchHistoryExpanded && (
                    <div className="max-h-80 overflow-y-auto p-4">
                      {loading ? (
                        <div className="flex justify-center items-center py-6">
                          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
                        </div>
                      ) : searchHistory && searchHistory.length > 0 ? (
                        <div className="space-y-2">
                          {searchHistory.map(item => (
                            <div 
                              key={item.id} 
                              className="p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg cursor-pointer transition-colors"
                              onClick={() => {
                                setSearchQuery(item.query);
                                setActiveTab(item.type || 'ai');
                                if (item.sessionId) {
                                  loadChatSession(item.sessionId);
                                } else {
                                  handleSearch();
                                }
                              }}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
                                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                  </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                    {item.query}
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {(item.type ? item.type.charAt(0).toUpperCase() + item.type.slice(1) : 'Search')} • 
                                    {formatTimestamp(item.timestamp)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center text-gray-500 dark:text-gray-400 py-6">
                          <svg className="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <p>No search history yet</p>
                          {debugInfo && debugInfo.searchHistory && debugInfo.searchHistory.userSearches > 0 && (
                            <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-md text-xs">
                              <div className="font-medium">Data Mismatch Detected:</div>
                              <p>Debug panel shows {debugInfo.searchHistory.userSearches} searches, but only {searchHistory?.length || 0} displayed.</p>
                              <p className="mt-1 text-xs">Troubleshooting steps:</p>
                              <ul className="list-disc pl-4 space-y-1 text-xs mt-1">
                                <li>Check browser console for validation warnings</li>
                                <li>Verify user ID matches in all search records</li>
                                <li>Check for 'deleted' flag on items</li>
                              </ul>
                              <div className="flex mt-2 space-x-2">
                                <button
                                  onClick={() => window.location.reload()}
                                  className="px-2 py-1 bg-yellow-100 dark:bg-yellow-800 rounded text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-700 text-xs"
                                >
                                  Refresh Page
                                </button>
                                <button
                                  onClick={refreshFirestoreData}
                                  className="px-2 py-1 bg-yellow-100 dark:bg-yellow-800 rounded text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-700 text-xs"
                                >
                                  Force Data Refresh
                                </button>
                                <button
                                  onClick={handleRepairSearchHistory}
                                  className="px-2 py-1 bg-yellow-100 dark:bg-yellow-800 rounded text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-700 text-xs"
                                >
                                  Repair Data
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <NotesModal 
        isOpen={isAddNoteOpen}
        onClose={() => {
          setIsAddNoteOpen(false);
          setSelectedNote(null);
          setNewNote('');
        }}
        newNote={newNote}
        setNewNote={setNewNote}
        handleAddNote={handleAddNote}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
        handleUpdateNote={handleUpdateNote}
        handleDeleteNote={handleDeleteNote}
      />
      
      <SettingsModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        user={user}
        userData={userData}
        updateUserSettings={updateUserSettings}
      />
      
      {/* Debug Panel */}
      {process.env.NODE_ENV === 'development' && <DebugPanel user={user} debugInfo={debugInfo} />}
      
      {process.env.NODE_ENV === 'development' && debugInfo && (
        <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-md text-xs">
          <div className="font-medium">Development Tools:</div>
          <div className="flex space-x-2 mt-1">
            <button
              onClick={refreshFirestoreData}
              className="px-2 py-1 bg-yellow-100 dark:bg-yellow-800 rounded text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-700 text-xs"
            >
              Refresh Data
            </button>
            <button
              onClick={handleRepairSearchHistory}
              className="px-2 py-1 bg-yellow-100 dark:bg-yellow-800 rounded text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-700 text-xs"
            >
              Repair Data
            </button>
            <button
              onClick={() => {
                const requiredIndexes = [
                  {
                    collection: 'searchHistory',
                    fields: [
                      { fieldPath: 'userId', order: 'ASCENDING' },
                      { fieldPath: 'timestamp', order: 'DESCENDING' }
                    ]
                  },
                  {
                    collection: 'notes',
                    fields: [
                      { fieldPath: 'userId', order: 'ASCENDING' },
                      { fieldPath: 'createdAt', order: 'DESCENDING' }
                    ]
                  },
                  {
                    collection: 'chatSessions',
                    fields: [
                      { fieldPath: 'userId', order: 'ASCENDING' },
                      { fieldPath: 'updatedAt', order: 'DESCENDING' }
                    ]
                  },
                  {
                    collection: 'chatMessages',
                    fields: [
                      { fieldPath: 'sessionId', order: 'ASCENDING' },
                      { fieldPath: 'timestamp', order: 'ASCENDING' }
                    ]
                  }
                ];
                
                // Generate Firebase CLI commands to create all required indexes
                const commands = requiredIndexes.map(index => {
                  const fieldDefs = index.fields.map(f => 
                    `${f.fieldPath}:${f.order.toLowerCase()}`
                  ).join(',');
                  
                  return `firebase firestore:indexes:create --collection ${index.collection} --fields "${fieldDefs}"`;
                });
                
                const commandText = commands.join('\n');
                console.info('Commands to create required indexes:\n', commandText);
                
                // Copy to clipboard
                navigator.clipboard.writeText(commandText)
                  .then(() => alert('Firebase CLI commands for index creation copied to clipboard!\n\nPaste and run in your terminal.'))
                  .catch(err => alert('Failed to copy to clipboard. See console for commands.'));
              }}
              className="px-2 py-1 bg-yellow-100 dark:bg-yellow-800 rounded text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-700 text-xs"
            >
              Fix Indexes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard; 