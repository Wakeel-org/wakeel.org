import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../src/config/firebase';
import { doc, getDoc, updateDoc, arrayUnion, Timestamp, collection, addDoc, getDocs, deleteDoc, query, where, orderBy, limit } from 'firebase/firestore';
import { storage } from '../src/config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Import modular components
import Sidebar from '../src/components/dashboard/Sidebar';
import SearchHeader from '../src/components/dashboard/SearchHeader';
import ResultsPanel from '../src/components/dashboard/ResultsPanel';
import ChatPanel from '../src/components/dashboard/ChatPanel';
import NotesModal from '../src/components/dashboard/NotesModal';
import SettingsModal from '../src/components/dashboard/SettingsModal';

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
  const [notesCollection, setNotesCollection] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [chatSessions, setChatSessions] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isExporting, setIsExporting] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const auth = getAuth();

  // Fetch user data, chat history, and notes from Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        
        // Fetch additional user data from Firestore
        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
          
          // Fetch search history
          const searchHistoryQuery = query(
            collection(db, "searchHistory"),
            where("userId", "==", currentUser.uid),
            orderBy("timestamp", "desc"),
            limit(10)
          );
          
          const searchHistorySnapshot = await getDocs(searchHistoryQuery);
          const searchHistoryData = searchHistorySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setSearchHistory(searchHistoryData);
          
          // Fetch notes
          const notesQuery = query(
            collection(db, "notes"),
            where("userId", "==", currentUser.uid),
            orderBy("createdAt", "desc")
          );
          
          const notesSnapshot = await getDocs(notesQuery);
          const notesData = notesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setNotesCollection(notesData);
          
          // Fetch chat sessions
          const chatSessionsQuery = query(
            collection(db, "chatSessions"),
            where("userId", "==", currentUser.uid),
            orderBy("updatedAt", "desc")
          );
          
          const chatSessionsSnapshot = await getDocs(chatSessionsQuery);
          const chatSessionsData = chatSessionsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setChatSessions(chatSessionsData);
          
          // If there's at least one chat session, get the messages for the latest session
          if (chatSessionsData.length > 0) {
            const latestSessionId = chatSessionsData[0].id;
            setCurrentChatId(latestSessionId);
            await loadChatSession(latestSessionId);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
        
        setLoading(false);
      } else {
        // Redirect to auth page if not logged in
        router.push('/auth');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth, router]);

  const handleSearch = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    
    if (!searchQuery.trim() || isSearching) return;
    
    setIsSearching(true);
    setIsLoading(true);
    
    try {
      // Simulate API call for search results
      const results = await simulateLegalSearch(searchQuery, activeTab);
      setSearchResults(results);
      
      // Create a new chat session with search results
      const searchSummary = `Search Results for "${searchQuery}" (${activeTab})\n\n${
        results.map(r => `- ${r.title}\n  ${r.summary}`).join('\n\n')
      }`;
      
      const chatSessionRef = collection(db, "chatSessions");
      const newSessionDoc = await addDoc(chatSessionRef, {
        userId: user.uid,
        title: `Search: ${searchQuery.substring(0, 30)}${searchQuery.length > 30 ? '...' : ''}`,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        type: 'search',
        searchData: {
          query: searchQuery,
          type: activeTab,
          results: results
        }
      });
      
      // Add search results as AI message
      const chatMessagesRef = collection(db, "chatMessages");
      await addDoc(chatMessagesRef, {
        sessionId: newSessionDoc.id,
        content: searchSummary,
        sender: 'ai',
        timestamp: Timestamp.now(),
        type: 'search_results'
      });
      
      // Add to search history
      const searchHistoryRef = collection(db, "searchHistory");
      await addDoc(searchHistoryRef, {
        userId: user.uid,
        query: searchQuery,
        type: activeTab,
        timestamp: Timestamp.now(),
        sessionId: newSessionDoc.id
      });
      
      // Update local states
      const newSession = {
        id: newSessionDoc.id,
        userId: user.uid,
        title: `Search: ${searchQuery.substring(0, 30)}${searchQuery.length > 30 ? '...' : ''}`,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        type: 'search'
      };
      
      setChatSessions(prev => [newSession, ...prev]);
      
      setSearchHistory(prev => [{
        id: Date.now().toString(),
        userId: user.uid,
        query: searchQuery,
        type: activeTab,
        timestamp: Timestamp.now(),
        sessionId: newSessionDoc.id
      }, ...prev].slice(0, 10));
      
      // Load new search session automatically
      await loadChatSession(newSessionDoc.id);
      
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
      setIsSearching(false);
    }
  };

  const handleChatSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    
    if (!chatInput.trim() || isLoading) return;

    const newUserMessage = {
      content: chatInput,
      sender: 'user',
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, newUserMessage]);
    const currentInputValue = chatInput;
    setChatInput('');

    let sessionId = currentChatId;
    
    // If there's no current chat session, create a new one
    if (!sessionId) {
      try {
        const chatSessionRef = collection(db, "chatSessions");
        const newSessionDoc = await addDoc(chatSessionRef, {
          userId: user.uid,
          title: currentInputValue.substring(0, 30) + (currentInputValue.length > 30 ? '...' : ''),
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now()
        });
        
        sessionId = newSessionDoc.id;
        setCurrentChatId(sessionId);
        
        // Add to local chat sessions
        setChatSessions(prev => [
          {
            id: sessionId,
            userId: user.uid,
            title: currentInputValue.substring(0, 30) + (currentInputValue.length > 30 ? '...' : ''),
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now()
          },
          ...prev
        ]);
      } catch (error) {
        console.error('Error creating chat session:', error);
      }
    } else {
      // Update the existing chat session's updatedAt timestamp
      try {
        const sessionRef = doc(db, "chatSessions", sessionId);
        await updateDoc(sessionRef, {
          updatedAt: Timestamp.now()
        });
      } catch (error) {
        console.error('Error updating chat session:', error);
      }
    }
    
    // Save user message to Firestore
    try {
      const chatMessagesRef = collection(db, "chatMessages");
      await addDoc(chatMessagesRef, {
        sessionId: sessionId,
        content: currentInputValue,
        sender: 'user',
        timestamp: Timestamp.now()
      });
    } catch (error) {
      console.error('Error saving chat message:', error);
    }
    
    // Simulate AI response
    setIsLoading(true);
    try {
      const response = await simulateAIResponse(currentInputValue);
      
      const aiMessageData = {
        content: response,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, aiMessageData]);
      
      // Save AI response to Firestore
      try {
        const chatMessagesRef = collection(db, "chatMessages");
        await addDoc(chatMessagesRef, {
          sessionId: sessionId,
          content: response,
          sender: 'ai',
          timestamp: Timestamp.now()
        });
      } catch (error) {
        console.error('Error saving AI response:', error);
      }
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const startNewChat = async () => {
    setChatMessages([]);
    setCurrentChatId(null);
  };

  const loadChatSession = async (sessionId) => {
    try {
      setIsLoading(true);
      const chatMessagesQuery = query(
        collection(db, "chatMessages"),
        where("sessionId", "==", sessionId),
        orderBy("timestamp", "asc")
      );
      
      const chatMessagesSnapshot = await getDocs(chatMessagesQuery);
      const messageHistory = chatMessagesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setChatMessages(messageHistory);
      setCurrentChatId(sessionId);
      
      // Update session order (move to top)
      setChatSessions(prev => {
        const selectedSession = prev.find(session => session.id === sessionId);
        const otherSessions = prev.filter(session => session.id !== sessionId);
        return selectedSession ? [selectedSession, ...otherSessions] : prev;
      });
      
    } catch (error) {
      console.error('Error loading chat session:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteChatSession = async (sessionId) => {
    try {
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

  // Simulate AI response function
  const simulateAIResponse = async (input) => {
    // This would be replaced with actual API calls to your AI service
    await new Promise(resolve => setTimeout(resolve, 1500));
    
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
      const noteData = {
        userId: user.uid,
        content: newNote.trim(),
        createdAt: Timestamp.now(),
        category: selectedNote?.category || 'General'
      };
      
      // Add note to Firestore
      const notesRef = collection(db, "notes");
      const noteDoc = await addDoc(notesRef, noteData);
      
      // Update local notes collection
      setNotesCollection(prev => [
        {
          id: noteDoc.id,
          ...noteData
        },
        ...prev
      ]);
      
      // Reset note input and close modal
      setNewNote('');
      setIsAddNoteOpen(false);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const handleUpdateNote = async () => {
    if (!selectedNote || !newNote.trim()) return;
    
    try {
      const noteRef = doc(db, "notes", selectedNote.id);
      const updatedData = {
        content: newNote.trim(),
        updatedAt: Timestamp.now(),
        category: selectedNote.category || 'General'
      };
      
      await updateDoc(noteRef, updatedData);
      
      // Update local notes collection
      setNotesCollection(prev => prev.map(note => 
        note.id === selectedNote.id 
          ? { ...note, ...updatedData }
          : note
      ));
      
      // Reset note input, selected note, and close modal
      setNewNote('');
      setSelectedNote(null);
      setIsAddNoteOpen(false);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      const noteRef = doc(db, "notes", noteId);
      await deleteDoc(noteRef);
      
      // Update local notes collection
      setNotesCollection(prev => prev.filter(note => note.id !== noteId));
    } catch (error) {
      console.error("Error deleting note:", error);
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

  const handleFileUpload = async (file) => {
    try {
      const fileRef = ref(storage, `uploads/${user.uid}/${file.name}`);
      await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(fileRef);
      
      // Store file reference in Firestore
      const filesRef = collection(db, "uploadedFiles");
      const fileDoc = await addDoc(filesRef, {
        userId: user.uid,
        fileName: file.name,
        fileUrl: downloadURL,
        uploadedAt: Timestamp.now()
      });
      
      setUploadedFiles(prev => [{
        id: fileDoc.id,
        fileName: file.name,
        fileUrl: downloadURL,
        uploadedAt: Timestamp.now()
      }, ...prev]);
      
      return downloadURL;
    } catch (error) {
      console.error('Error uploading file:', error);
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
              />
            </div>
          </div>
          
          {/* Right Column - Results and Notes */}
          <div className="w-96 border-l border-gray-100 dark:border-gray-700 overflow-hidden h-full flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-4">
                {/* Search Results Section */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
                  <div className="sticky top-0 z-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 font-semibold">
                    Search Results
                  </div>
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
                    />
                  </div>
                </div>
                
                {/* Notes Section */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
                  <div className="sticky top-0 z-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex justify-between items-center">
                    <h3 className="font-semibold">Recent Notes</h3>
                    <button 
                      onClick={() => setIsAddNoteOpen(true)}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg px-3 py-1 text-sm transition-colors"
                    >
                      Add Note
                    </button>
                  </div>
                  <div className="max-h-80 overflow-y-auto p-4">
                    {notesCollection.length > 0 ? (
                      <div className="space-y-3">
                        {notesCollection.map(note => (
                          <div key={note.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg relative group">
                            <p className="text-gray-800 dark:text-gray-200 text-sm mb-2">{note.content}</p>
                            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                              <span>
                                {note.category && <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded-full mr-2">{note.category}</span>}
                                {note.createdAt?.toDate ? note.createdAt.toDate().toLocaleDateString() : 
                                 (note.createdAt instanceof Date ? note.createdAt.toLocaleDateString() : 'Unknown date')}
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
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Recent Search History */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
                  <div className="sticky top-0 z-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 font-semibold">
                    Recent Searches
                  </div>
                  <div className="max-h-80 overflow-y-auto p-4">
                    {searchHistory.length > 0 ? (
                      <div className="space-y-2">
                        {searchHistory.map(item => (
                          <div 
                            key={item.id} 
                            className="p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg cursor-pointer transition-colors"
                            onClick={() => {
                              setSearchQuery(item.query);
                              setActiveTab(item.type);
                              if (item.sessionId) {
                                loadChatSession(item.sessionId);
                              } else {
                                handleSearch({ preventDefault: () => {} });
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
                                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)} • 
                                  {item.timestamp?.toDate ? ' ' + item.timestamp.toDate().toLocaleDateString() : 
                                   (item.timestamp instanceof Date ? ' ' + item.timestamp.toLocaleDateString() : '')}
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
                      </div>
                    )}
                  </div>
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
    </div>
  );
};

export default Dashboard; 