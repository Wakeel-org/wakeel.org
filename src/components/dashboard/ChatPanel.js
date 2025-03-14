import React, { useRef, useEffect, useState } from 'react';

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
  currentChatId
}) => {
  const chatEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  
  // Scroll to bottom of chat when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const fileUrl = await handleFileUpload(file);
      // Create context for the uploaded file to pass to the AI
      setChatInput(`I've uploaded a file (${file.name}). Can you analyze its contents and help me understand it better?`);
      
      // Wait a moment to let user see the message before sending automatically
      setTimeout(() => {
        if (handleChatSubmit) {
          handleChatSubmit({ preventDefault: () => {} });
        }
      }, 500);
    } catch (error) {
      console.error('Error handling file upload:', error);
    } finally {
      setIsUploading(false);
    }
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
        <div className="whitespace-pre-wrap">{message.content}</div>
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
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
      <h3 className="text-lg font-medium mb-2">Wakeel AI Assistant</h3>
      <p className="mb-4">How can I help with your legal research today?</p>
      <div className="max-w-md mx-auto space-y-2">
        <button 
          onClick={() => {
            setChatInput("What are the elements of negligence?");
            setTimeout(() => handleChatSubmit({ preventDefault: () => {} }), 100);
          }}
          className="w-full text-left p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
        >
          What are the elements of negligence?
        </button>
        <button 
          onClick={() => {
            setChatInput("Summarize the recent Supreme Court decisions on IP law");
            setTimeout(() => handleChatSubmit({ preventDefault: () => {} }), 100);
          }}
          className="w-full text-left p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
        >
          Summarize the recent Supreme Court decisions on IP law
        </button>
        <button 
          onClick={() => {
            setChatInput("Draft a demand letter for contract breach");
            setTimeout(() => handleChatSubmit({ preventDefault: () => {} }), 100);
          }}
          className="w-full text-left p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
        >
          Draft a demand letter for contract breach
        </button>
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 font-semibold text-lg flex justify-between items-center sticky top-0 z-20">
        <span>AI Assistant</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={exportChat}
            disabled={isExporting || chatMessages.length === 0 || !currentChatId}
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
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600" ref={messagesContainerRef}>
        {chatMessages.length > 0 ? (
          <div className="space-y-1">
            {chatMessages.map(renderMessage)}
            <div ref={chatEndRef} />
          </div>
        ) : (
          renderWelcomeMessage()
        )}
      </div>
      
      {/* Chat Input - Fixed at bottom */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <form onSubmit={handleChatSubmit} className="flex space-x-3">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Ask me anything about your legal research..."
            className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="px-3 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl transition-colors disabled:opacity-50"
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
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileInputChange}
            className="hidden"
            accept=".pdf,.doc,.docx,.txt"
          />
          <button
            type="submit"
            disabled={isLoading || !chatInput.trim()}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl disabled:opacity-50 transition-colors shadow-md"
          >
            {isLoading ? (
              <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              'Send'
            )}
          </button>
        </form>
        {uploadedFiles.length > 0 && (
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
                  className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                  onClick={() => {
                    setChatInput(`Let's discuss the file I uploaded earlier: ${file.fileName}`);
                  }}
                >
                  {file.fileName}
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
