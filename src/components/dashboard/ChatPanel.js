import React, { useRef, useEffect, useState } from 'react';
import Debug from '../../utils/debugUtils';

const ChatPanel = ({ 
  chatMessages, 
  setChatMessages, 
  chatInput, 
  setChatInput, 
  handleChatSubmit, 
  isLoading,
  userData,
  handleFileUpload,
  uploadedFiles,
  exportChat,
  isExporting,
  currentChatId,
  setCurrentFile,
  currentFile
}) => {
  const chatEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  
  // Scroll to bottom of chat when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      setUploadError(null);
      
      Debug.info('CHAT_PANEL', `Initiating file upload: ${file.name} (${file.type}, ${file.size} bytes)`);
      
      // Call the file upload handler from the dashboard
      const fileResponse = await handleFileUpload(file);
      
      Debug.debug('CHAT_PANEL', 'File upload response:', fileResponse);
      
      if (!fileResponse) {
        const error = new Error('File upload failed to return any data');
        Debug.error('CHAT_PANEL', 'Invalid file upload response:', error);
        setUploadError('Upload failed: No response received');
        throw error;
      }
      
      if (!fileResponse.id || !fileResponse.downloadURL) {
        const error = new Error('File upload response missing required fields');
        Debug.error('CHAT_PANEL', 'Invalid file upload response data structure:', error);
        setUploadError('Upload failed: Incomplete file metadata');
        throw error;
      }
      
      // Set the current file for display in the input area with complete metadata
      setCurrentFile({
        name: file.name,
        url: fileResponse.downloadURL,
        id: fileResponse.id,
        type: file.type
      });
      
      // Add the file reference to chat input
      setChatInput(chatInput => {
        const prefix = chatInput.trim() ? `${chatInput} ` : '';
        return `${prefix}[File: ${file.name}]`;
      });
      
      Debug.info('CHAT_PANEL', `File upload complete and added to chat: ${file.name}`);
      
      // Reset the file input control so the same file can be selected again
      e.target.value = null;
    } catch (error) {
      Debug.error('CHAT_PANEL', 'Error handling file upload', error);
      
      if (!uploadError) {
        setUploadError(`Upload failed: ${error.message || 'Unknown error'}`);
      }
      
      // Reset the file input control even on error
      e.target.value = null;
    } finally {
      setIsUploading(false);
    }
  };

  // Enhanced render function for attached files in message
  const renderFileReferences = (message) => {
    if (!message.fileRefs || message.fileRefs.length === 0) return null;
    
    return (
      <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs font-medium mb-1">Attached files:</div>
        <div className="space-y-1">
          {message.fileRefs.map((file, index) => (
            <div 
              key={index} 
              className="flex items-center text-sm p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded"
            >
              {/* File icon based on file type */}
              {file.type && file.type.includes('pdf') ? (
                <svg className="w-4 h-4 mr-1.5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              ) : file.type && (file.type.includes('doc') || file.type.includes('word')) ? (
                <svg className="w-4 h-4 mr-1.5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 mr-1.5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              )}
              <span className="truncate flex-1">{file.name}</span>
              <a 
                href={file.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 text-blue-600 dark:text-blue-400 hover:underline text-xs"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render message bubbles with different styling based on sender
  const renderMessage = (message, index) => (
    <div
      key={message.id || index}
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
    >
      {message.sender !== 'user' && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mr-2 flex-shrink-0 shadow-md">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
        <div className="whitespace-pre-wrap">
          {/* Clean up message content if it contains file references for display */}
          {message.content ? message.content.replace(/\[File: [^\]]+\]/g, '').trim() : ''}
        </div>
        
        {/* Render file references if any */}
        {renderFileReferences(message)}
        
        {/* If this is an AI response to a file analysis, add a special indicator */}
        {message.sender === 'ai' && message.fileAnalysis && (
          <div className="mt-2 text-xs text-blue-600 dark:text-blue-400 flex items-center">
            <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span>File analysis completed</span>
          </div>
        )}
        
        <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>
          {message.timestamp ? (
            message.timestamp.toDate 
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

  // Display welcome message when no chat history exists
  const renderWelcomeMessage = () => (
    <div className="text-center text-gray-500 dark:text-gray-400 py-6">
      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Your Legal AI Assistant</h3>
      <p className="max-w-md mx-auto mb-6">
        Ask me anything about legal research, case law, or drafting legal documents. I'm here to help with your legal questions.
      </p>
      <div className="grid gap-3 max-w-md mx-auto">
        <button 
          onClick={() => {
            const text = "Explain the elements of negligence";
            setChatInput(text);
            setTimeout(() => handleChatSubmit(text), 100);
          }}
          className="w-full text-left p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
        >
          Explain the elements of negligence
        </button>
        <button 
          onClick={() => {
            const text = "Summarize the recent Supreme Court decisions on IP law";
            setChatInput(text);
            setTimeout(() => handleChatSubmit(text), 100);
          }}
          className="w-full text-left p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
        >
          Summarize the recent Supreme Court decisions on IP law
        </button>
        <button 
          onClick={() => {
            const text = "Draft a demand letter for contract breach";
            setChatInput(text);
            setTimeout(() => handleChatSubmit(text), 100);
          }}
          className="w-full text-left p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
        >
          Draft a demand letter for contract breach
        </button>
      </div>
    </div>
  );

  // Add a clearUploadError method
  const clearUploadError = () => {
    setUploadError(null);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-600 dark:to-indigo-600 text-white p-4 font-semibold text-lg flex justify-between items-center sticky top-0 z-20">
        <span>AI Assistant</span>
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

      {/* Chat Messages */}
      <div className="flex-1 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600" ref={messagesContainerRef}>
        {chatMessages.length > 0 ? (
          <>
            {chatMessages.map((message, index) => renderMessage(message, index))}
            <div ref={chatEndRef} />
          </>
        ) : (
          renderWelcomeMessage()
        )}
      </div>

      {/* Add error message display right here, before the input area */}
      {uploadError && (
        <div className="mx-4 mb-2 p-2 bg-red-100 border border-red-400 text-red-700 rounded-md flex items-center justify-between">
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

      {/* Chat Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <form onSubmit={handleChatSubmit} className="flex gap-2 items-center">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder={currentFile ? "Ask about the uploaded document..." : "Ask me anything about your legal research..."}
            className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            disabled={isLoading}
          />
          <div className="flex-shrink-0 relative">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading || isLoading}
              className="px-3 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl transition-colors disabled:opacity-50 relative"
              title="Attach a file"
            >
              {isUploading ? (
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
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
            accept=".pdf,.doc,.docx,.txt"
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
                    <span>Analyze</span>
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
              {currentFile.name.endsWith('.pdf') ? (
                <svg className="w-4 h-4 text-red-600 dark:text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              ) : currentFile.name.endsWith('.doc') || currentFile.name.endsWith('.docx') ? (
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              )}
              <span className="text-sm text-blue-700 dark:text-blue-300">
                {currentFile.name}
              </span>
            </div>
            <button 
              onClick={() => {
                setChatInput(chatInput => chatInput.replace(`[File: ${currentFile.name}]`, '').trim());
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
              <span className="font-medium">Document analysis powered by Gemini AI</span>
            </div>
            <p>You can ask specific questions about the document or press "Analyze" for a general summary.</p>
          </div>
        )}

        {/* Show available recent uploads without auto-generating messages */}
        {uploadedFiles.length > 0 && !currentFile && !isLoading && (
          <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <span>Recent uploads:</span>
            </div>
            <div className="mt-1 space-y-1">
              {uploadedFiles.slice(0, 3).map(file => (
                <div 
                  key={file.id} 
                  className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer flex items-center"
                  onClick={() => {
                    // Add file reference to current input
                    setChatInput(currentInput => {
                      const fileRef = `[File: ${file.fileName}]`;
                      // Check if the file reference is already in the input
                      if (currentInput.includes(fileRef)) return currentInput;
                      const prefix = currentInput.trim() ? `${currentInput} ` : '';
                      return `${prefix}${fileRef}`;
                    });
                    setCurrentFile({
                      name: file.fileName,
                      url: file.fileUrl,
                      id: file.id
                    });
                  }}
                >
                  {/* File icon based on type */}
                  {file.fileName && file.fileName.endsWith('.pdf') ? (
                    <svg className="w-3 h-3 mr-1 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ) : file.fileName && (file.fileName.endsWith('.doc') || file.fileName.endsWith('.docx')) ? (
                    <svg className="w-3 h-3 mr-1 flex-shrink-0 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  )}
                  <span className="truncate">{file.fileName}</span>
                </div>
              ))}
              {uploadedFiles.length > 3 && (
                <div className="text-gray-500 dark:text-gray-400 text-xs">
                  + {uploadedFiles.length - 3} more files
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPanel;
