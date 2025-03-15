import React, { useRef, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ChevronRightIcon, PaperClipIcon, XCircleIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { analyzeDocumentWithGemini } from '../../services/geminiService';
import { doc, updateDoc, arrayUnion, serverTimestamp, getDoc, collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

/**
 * ChatPanel - Wakeel Legal Assistant chat interface
 * Implements full chat functionality with Gemini AI integration
 */
const ChatPanel = ({ 
  chatMessages = [], 
  setChatMessages,
  userData = {},
  isLoading = false,
  setIsLoading = () => {},
  isExporting = false,
  currentChatId,
  currentFile,
  setCurrentFile,
  uploadedFiles = [],
  exportChat,
  handleFileUpload: parentHandleFileUpload
}) => {
  const chatEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const [chatInput, setChatInput] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [followupQuestions, setFollowupQuestions] = useState([]);

  // Scroll to bottom of chat when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Generate follow-up questions based on conversation history
  useEffect(() => {
    if (chatMessages.length > 0) {
      // Get the last AI message
      const lastAiMessage = [...chatMessages].reverse().find(msg => msg.sender === 'ai');
      
      if (lastAiMessage) {
        generateFollowupQuestions(lastAiMessage.content, chatMessages);
      }
    }
  }, [chatMessages]);
  
  // Generate contextual follow-up questions based on conversation
  const generateFollowupQuestions = async (lastAiResponse, messageHistory) => {
    try {
      // Get just the recent context (last 6 messages or fewer)
      const recentMessages = messageHistory.slice(-6);
      
      // Extract topic from conversation
      let topic = "legal";
      if (recentMessages.length > 0) {
        const userMessages = recentMessages.filter(msg => msg.sender === 'user');
        if (userMessages.length > 0) {
          topic = userMessages[userMessages.length - 1].content;
        }
      }
      
      // Generate questions based on topic and legal domain patterns
      let questions = [];
      
      if (lastAiResponse.toLowerCase().includes("negligence")) {
        questions.push("What specific elements of negligence apply in my jurisdiction?");
        questions.push("Can you explain the standard of care required in this situation?");
      } 
      else if (lastAiResponse.toLowerCase().includes("contract")) {
        questions.push("What are the essential elements for a valid contract?");
        questions.push("How can I prove a breach of contract occurred?");
      }
      else if (lastAiResponse.toLowerCase().includes("intellectual property") || lastAiResponse.toLowerCase().includes("copyright")) {
        questions.push("How long do intellectual property protections last?");
        questions.push("What's the difference between patents, copyrights, and trademarks?");
      }
      else if (lastAiResponse.toLowerCase().includes("employment") || lastAiResponse.toLowerCase().includes("workplace")) {
        questions.push("What are my rights as an employee in this situation?");
        questions.push("Are there specific employment laws that apply to my case?");
      }
      else {
        // Default questions based on common legal inquiries
        questions = [
          "Can you explain more about the legal implications?",
          "What documentation do I need to support my case?",
          "What are the next steps I should take?"
        ];
      }
      
      // Set the generated questions
      setFollowupQuestions(questions);
    } catch (error) {
      console.error('Error generating follow-up questions:', error);
      setFollowupQuestions([
        "What else would you like to know about this topic?",
        "Do you need clarification on any legal terms?",
        "Would you like me to analyze a specific document?"
      ]);
    }
  };

  // Handle file upload
  const handleFileInputChange = async (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      console.log('No files selected');
      return;
    }
    
    setIsUploading(true);
    setUploadError(null);
    const file = event.target.files[0];
    
    try {
      console.log(`Uploading file: ${file.name}`);
      
      // Either use parent handler or implement our own
      let uploadedFile;
      if (typeof parentHandleFileUpload === 'function') {
        uploadedFile = await parentHandleFileUpload(file);
      } else {
        // Fallback upload implementation
        uploadedFile = await uploadFileToStorage(file);
      }
      
      if (!uploadedFile) {
        throw new Error('File upload failed - no response received');
      }
      
      // Set the current file for use in the chat
      setCurrentFile(uploadedFile);
      setIsUploading(false);
      
      // Clear file input to allow selecting the same file again
      event.target.value = null;
    } catch (error) {
      console.error('Error handling file upload', error);
      setIsUploading(false);
      setUploadError(`Error uploading file: ${error.message || 'Unknown error'}`);
      event.target.value = null;
    }
  };

  // Fallback file upload implementation if parent doesn't provide one
  const uploadFileToStorage = async (file) => {
    try {
      if (!userData?.uid) {
        throw new Error('User not authenticated');
      }

      // Create a reference to the file in Firebase Storage
      const storageRef = ref(storage, `files/${userData.uid}/${Date.now()}_${file.name}`);
      
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);
      
      // Get download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      // Create file metadata in Firestore
      const fileData = {
        id: uuidv4(),
        name: file.name,
        type: file.type,
        size: file.size,
        downloadURL,
        uploadedAt: serverTimestamp(),
        userId: userData.uid
      };
      
      // Store file metadata in Firestore
      const fileDocRef = await addDoc(collection(db, 'uploadedFiles'), fileData);
      
      return {
        ...fileData,
        id: fileDocRef.id
      };
    } catch (error) {
      console.error('Error uploading file to storage', error);
      throw error;
    }
  };

  // Generate a response using Gemini AI
  const generateAIResponse = async (message, fileContent = null) => {
    try {
      let response;
      
      // If there's a file, analyze it with Gemini
      if (fileContent || currentFile) {
        const fileToAnalyze = fileContent || currentFile;
        console.log('Analyzing document with query:', message);
        response = await analyzeDocumentWithGemini(message, fileToAnalyze);
      } else {
        // Regular chat (use Gemini text generation without document)
        console.log('Sending query to Gemini without document:', message);
        response = await analyzeDocumentWithGemini(message, []);
      }
      
      return response;
    } catch (error) {
      console.error('Error generating AI response', error);
      return `I apologize, but I encountered an error processing your request. ${error.message || 'Please try again later.'}`;
    }
  };

  // Handle chat submission
  const handleSubmitAndClearFile = async (event) => {
    event.preventDefault();
    
    // Don't submit empty messages without a file
    if (!chatInput.trim() && !currentFile) return;
    
    // Create new user message
    const userMessage = {
      id: uuidv4(),
      content: chatInput.trim(),
      sender: 'user',
      timestamp: new Date(),
      fileRefs: currentFile ? [currentFile] : []
    };
    
    // Add user message to chat
    const updatedMessages = [...chatMessages, userMessage];
    setChatMessages(updatedMessages);
    setChatInput('');
    
    // Start loading state
    setIsLoading(true);
    
    try {
      let sessionId = currentChatId;
      
      // If no current chat, create a new session
      if (!currentChatId) {
        try {
          // Create a descriptive title based on message or file
          let title = userMessage.content || '';
          if (currentFile) {
            title = userMessage.content 
              ? `Analysis of ${currentFile.name}: ${userMessage.content.substring(0, 30)}` 
              : `Analysis of ${currentFile.name}`;
          }
          if (title.length > 50) title = `${title.substring(0, 47)}...`;
          if (!title || title.trim().length === 0) {
            title = 'New legal conversation';
          }
          
          // Create a new chat session in Firestore
          const chatSessionRef = collection(db, "chatSessions");
          const chatSessionDoc = await addDoc(chatSessionRef, {
            userId: userData.uid,
            title: title,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            messages: [{
              id: userMessage.id,
              content: userMessage.content,
              sender: 'user',
              timestamp: serverTimestamp(),
              fileRefs: userMessage.fileRefs
            }]
          });
          
          sessionId = chatSessionDoc.id;
          
          // Update current chat ID in state
          if (typeof window !== 'undefined') {
            // This code only runs in the browser
            window.dispatchEvent(new CustomEvent('newChatSession', { 
              detail: { 
                id: sessionId,
                title: title
              } 
            }));
          }
        } catch (createError) {
          console.error('Error creating chat session', createError);
          // Continue with local chat only if creation fails
        }
      } else {
        // Add message to existing chat session
        const chatRef = doc(db, 'chatSessions', currentChatId);
        await updateDoc(chatRef, {
          messages: arrayUnion({
            id: userMessage.id,
            content: userMessage.content,
            sender: 'user',
            timestamp: serverTimestamp(),
            fileRefs: userMessage.fileRefs
          }),
          updatedAt: serverTimestamp()
        });
      }
      
      // Generate AI response
      const aiResponseText = await generateAIResponse(
        userMessage.content,
        currentFile
      );
      
      // Create AI message object
      const aiMessage = {
        id: uuidv4(),
        content: aiResponseText,
        sender: 'ai',
        timestamp: new Date(),
        fileAnalysis: !!currentFile
      };
      
      // Add AI message to chat
      const finalMessages = [...updatedMessages, aiMessage];
      setChatMessages(finalMessages);
      
      // Save AI message to Firestore if we have a chat ID
      if (sessionId) {
        try {
          const chatRef = doc(db, 'chatSessions', sessionId);
          await updateDoc(chatRef, {
            messages: arrayUnion({
              id: aiMessage.id,
              content: aiMessage.content,
              sender: 'ai',
              timestamp: serverTimestamp(),
              fileAnalysis: aiMessage.fileAnalysis
            }),
            updatedAt: serverTimestamp()
          });
        } catch (updateError) {
          console.error('Error saving AI response to Firestore', updateError);
          // Continue with local chat if update fails
        }
      }
      
      // Clear the current file after submission with a small delay
      setTimeout(() => {
        setCurrentFile(null);
      }, 100);
    } catch (error) {
      console.error('Error processing chat', error);
      
      // Add error message
      const errorMessage = {
        id: uuidv4(),
        content: `Sorry, an error occurred: ${error.message || 'Unknown error'}. Please try again.`,
        sender: 'ai',
        timestamp: new Date(),
        isError: true
      };
      
      setChatMessages([...updatedMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Clear upload error
  const clearUploadError = () => {
    setUploadError(null);
  };

  // Render file references
  const renderFileReferences = (fileRefs) => {
    if (!fileRefs || !Array.isArray(fileRefs) || fileRefs.length === 0) {
      return null;
    }
    
    return (
      <div className="file-references flex flex-wrap gap-2 my-2">
        {fileRefs.map((file, index) => {
          // Basic file reference UI
          const fileId = file.id || `file-${index}`;
          const fileName = file.name || file.fileName || 'Document';
          const fileUrl = file.url || file.downloadURL || file.fileUrl || '#';
          
          return (
            <a
              key={fileId}
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="file-reference flex items-center p-1.5 px-3 bg-blue-50 text-blue-700 rounded-md text-sm hover:bg-blue-100 transition-colors"
            >
              <DocumentIcon className="w-4 h-4 mr-1.5" />
              <span className="file-name">{fileName}</span>
            </a>
          );
        })}
      </div>
    );
  };

  // Message rendering - preserves styling and layout
  const renderMessage = (message, index) => (
    <div
      key={message.id || index}
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
    >
      {message.sender !== 'user' && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mr-2 flex-shrink-0 shadow-md">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </div>
      )}
      
      <div
        className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
          message.sender === 'user'
            ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white'
            : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-100 dark:border-gray-700'
        }`}
      >
        <div className={`message-content text-sm ${message.sender === 'ai' ? 'prose prose-sm max-w-none' : ''}`}>
          {message.sender === 'ai' ? (
            <ReactMarkdown>
              {message.content}
            </ReactMarkdown>
          ) : (
            <div className="whitespace-pre-wrap">{message.content}</div>
          )}
        </div>
        
        {renderFileReferences(message.fileRefs)}
        
        {message.sender === 'ai' && message.fileAnalysis && (
          <div className="mt-2 text-xs text-blue-600 dark:text-blue-400 flex items-center">
            <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span>Legal document analysis completed</span>
          </div>
        )}
        
        <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>
          {message.timestamp ? (
            typeof message.timestamp.toDate === 'function'
              ? message.timestamp.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              : new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          ) : ''}
        </div>
      </div>
      
      {message.sender === 'user' && (
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 ml-2 flex-shrink-0 shadow-md">
          {userData?.displayName ? userData.displayName.charAt(0).toUpperCase() : 'U'}
        </div>
      )}
    </div>
  );

  // Welcome message UI with dynamic follow-up questions based on conversation
  const renderWelcomeMessage = () => (
    <div className="text-center text-gray-500 dark:text-gray-400 py-6">
      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Wakeel Legal Assistant</h3>
      <p className="max-w-md mx-auto mb-6">
        Your AI-powered legal research assistant. Upload documents for analysis or ask questions about legal matters. Designed for lawyers, judges, and law students.
      </p>
      <div className="grid gap-3 max-w-md mx-auto">
        <button 
          onClick={() => {
            const text = "What are the critical elements I need to establish for a negligence claim?";
            setChatInput(text);
            setTimeout(() => {
              const fakeEvent = { preventDefault: () => {} };
              handleSubmitAndClearFile(fakeEvent);
            }, 100);
          }}
          className="w-full text-left p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
        >
          What are the critical elements I need to establish for a negligence claim?
        </button>
        <button 
          onClick={() => {
            const text = "Summarize the key holdings in the recent Supreme Court decisions on intellectual property law";
            setChatInput(text);
            setTimeout(() => {
              const fakeEvent = { preventDefault: () => {} };
              handleSubmitAndClearFile(fakeEvent);
            }, 100);
          }}
          className="w-full text-left p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
        >
          Summarize the key holdings in the recent Supreme Court decisions on intellectual property law
        </button>
        <button 
          onClick={() => {
            const text = "Help me draft a demand letter for breach of contract";
            setChatInput(text);
            setTimeout(() => {
              const fakeEvent = { preventDefault: () => {} };
              handleSubmitAndClearFile(fakeEvent);
            }, 100);
          }}
          className="w-full text-left p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
        >
          Help me draft a demand letter for breach of contract
        </button>
      </div>
    </div>
  );

  // Render follow-up questions based on conversation context
  const renderFollowupQuestions = () => {
    if (!followupQuestions || followupQuestions.length === 0) return null;
    
    return (
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">You might want to ask:</h4>
        <div className="flex flex-wrap gap-2">
          {followupQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => {
                setChatInput(question);
                setTimeout(() => {
                  const fakeEvent = { preventDefault: () => {} };
                  handleSubmitAndClearFile(fakeEvent);
                }, 100);
              }}
              className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-xs hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Recent uploads UI with click functionality
  const renderRecentUploads = () => {
    if (!uploadedFiles || uploadedFiles.length === 0) {
      return (
        <div className="text-gray-500 text-sm italic">
          No recent documents. Upload a legal document to analyze.
        </div>
      );
    }
    
    return (
      <div className="recent-uploads-list flex flex-wrap gap-2">
        {uploadedFiles.slice(0, 5).map((file) => (
          <button
            key={file.id || `file-${Math.random()}`}
            onClick={() => {
              // Add file reference to input if not already there
              setChatInput(currentInput => {
                const fileRef = `[File: ${file.name || file.fileName || 'Document'}]`;
                if (currentInput.includes(fileRef)) return currentInput;
                const prefix = currentInput.trim() ? `${currentInput} ` : '';
                return `${prefix}${fileRef}`;
              });
              
              // Set as current file
              setCurrentFile({
                id: file.id,
                name: file.name || file.fileName || 'Document',
                url: file.url || file.downloadURL || file.fileUrl || '#',
                type: file.fileType || file.type || ''
              });
            }}
            className={`upload-item p-1.5 px-3 rounded-md text-sm flex items-center transition-colors ${
              currentFile && currentFile.id === file.id 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <DocumentIcon className="w-4 h-4 mr-1.5" />
            <span className="truncate max-w-[120px]">{file.name || file.fileName || 'Document'}</span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 font-semibold text-lg flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          <span>Wakeel Legal Assistant</span>
        </div>
        {chatMessages.length > 0 && currentChatId && (
          <div className="flex items-center space-x-2">
            <button
              onClick={exportChat}
              disabled={isExporting}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg px-3 py-1 text-sm transition-colors disabled:opacity-50 flex items-center"
            >
              {isExporting ? (
                <>
                  <svg className="w-4 h-4 animate-spin mr-1" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Exporting...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Export Chat</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Error message */}
      {uploadError && (
        <div className="mx-4 mt-2 p-2 bg-red-100 border border-red-400 text-red-700 rounded-md flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">{uploadError}</span>
          </div>
          <button onClick={clearUploadError} className="text-red-500 hover:text-red-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Chat Messages */}
      <div className="flex-1 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600" ref={messagesContainerRef}>
        {chatMessages.length > 0 ? (
          <>
            {chatMessages.map((message, index) => renderMessage(message, index))}
            {renderFollowupQuestions()}
            <div ref={chatEndRef} />
          </>
        ) : (
          renderWelcomeMessage()
        )}
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <form onSubmit={handleSubmitAndClearFile} className="flex gap-2 items-center">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder={currentFile ? "Ask questions about this legal document..." : "Ask about legal research, case analysis, or document drafting..."}
            className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            disabled={isLoading}
          />
          <div className="flex-shrink-0 relative">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading || isLoading}
              className="px-3 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl transition-colors disabled:opacity-50 relative"
              title="Attach a legal document"
            >
              {isUploading ? (
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )}
            </button>
            {currentFile && (
              <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                1
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileInputChange}
            className="hidden"
            accept=".pdf,.doc,.docx,.txt,.rtf,.odt,.wpd"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || (!chatInput.trim() && !currentFile)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl disabled:opacity-50 transition-colors shadow-md flex items-center"
          >
            {isLoading ? (
              <>
                <svg className="w-5 h-5 animate-spin mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>{currentFile ? "Analyzing" : "Processing"}</span>
              </>
            ) : (
              <>
                {currentFile ? (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span>Analyze Document</span>
                  </>
                ) : (
                  'Send'
                )}
              </>
            )}
          </button>
        </form>
        
        {/* Show current file if selected */}
        {currentFile && (
          <div className="mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              {/* File icon based on file type */}
              {currentFile.name?.endsWith('.pdf') ? (
                <svg className="w-4 h-4 text-red-600 dark:text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              ) : currentFile.name?.endsWith('.doc') || currentFile.name?.endsWith('.docx') ? (
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              )}
              <span className="text-sm text-blue-700 dark:text-blue-300">
                {currentFile.name || 'Document'}
              </span>
            </div>
            <button 
              onClick={() => {
                setChatInput(input => input.replace(`[File: ${currentFile.name || 'Document'}]`, '').trim());
                setCurrentFile(null);
              }}
              className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
              disabled={isLoading}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        
        {/* Message about document analysis capabilities */}
        {currentFile && !isLoading && (
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center mb-1">
              <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Legal document analysis powered by Gemini AI</span>
            </div>
            <p>Ask specific questions about this legal document or click "Analyze Document" for a comprehensive legal analysis, including key facts, legal issues, and relevant precedents.</p>
          </div>
        )}

        {/* Show available recent uploads */}
        {renderRecentUploads()}
      </div>
    </div>
  );
};

export default ChatPanel;
