import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOutUser } from '../../lib/auth';

const Sidebar = ({ 
  user, 
  userData, 
  setIsSettingsOpen, 
  auth, 
  isSidebarCollapsed, 
  setIsSidebarCollapsed,
  chatSessions,
  loadChatSession,
  startNewChat,
  deleteChatSession,
  currentChatId
}) => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      // Show confirmation dialog
      if (window.confirm('Are you sure you want to sign out?')) {
        // Use our utility function for signing out
        await signOutUser();
        router.push('/');
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div 
      className={`${isSidebarCollapsed ? 'w-16' : 'w-64'} bg-white dark:bg-gray-800 shadow-xl flex flex-col h-screen transition-all duration-300 relative z-40 border-r border-gray-100 dark:border-gray-700`}
    >
      {/* Toggle Button */}
      <button 
        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        className="absolute -right-4 top-16 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow z-50"
        style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)' }}
      >
        <svg className={`w-4 h-4 text-blue-600 dark:text-blue-400 transition-transform duration-300 ${isSidebarCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      {/* Logo */}
      <div className="p-4 border-b border-gray-100 dark:border-gray-700">
        <Link href="/" className="flex items-center justify-center md:justify-start">
          {isSidebarCollapsed ? (
            <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-xl text-white font-bold">
              W
            </div>
          ) : (
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-xl text-white font-bold mr-2">
                W
              </div>
              <h1 className="text-xl font-bold text-blue-600">Wakeel.org</h1>
            </div>
          )}
        </Link>
      </div>
      
      {/* Navigation */}
      <div className="flex-1 flex flex-col overflow-hidden py-2">
        <nav className="px-2 mb-6">
          <ul className="space-y-1">
            <li>
              <Link 
                href="/dashboard" 
                className={`flex items-center p-2 ${isSidebarCollapsed ? 'justify-center' : ''} text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg`}
              >
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {!isSidebarCollapsed && <span className="ml-3">Legal Research</span>}
              </Link>
            </li>
            <li>
              <Link 
                href="#document-manager" 
                className={`flex items-center p-2 ${isSidebarCollapsed ? 'justify-center' : ''} text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg`}
              >
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {!isSidebarCollapsed && <span className="ml-3">Documents</span>}
              </Link>
            </li>
            <li>
              <Link 
                href="#case-management" 
                className={`flex items-center p-2 ${isSidebarCollapsed ? 'justify-center' : ''} text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg`}
              >
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                {!isSidebarCollapsed && <span className="ml-3">Cases</span>}
              </Link>
            </li>
            <li>
              <Link 
                href="#analytics" 
                className={`flex items-center p-2 ${isSidebarCollapsed ? 'justify-center' : ''} text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg`}
              >
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {!isSidebarCollapsed && <span className="ml-3">Analytics</span>}
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Chat Sessions */}
        {!isSidebarCollapsed && (
          <div className="flex-1 overflow-hidden flex flex-col px-2">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Chat History</h3>
              <button 
                onClick={startNewChat}
                className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
              >
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                New Chat
              </button>
            </div>
            <div className="overflow-y-auto flex-1 pr-1">
              <ul className="space-y-1">
                {chatSessions.length > 0 ? (
                  chatSessions.map(session => (
                    <li key={session.id} className="relative group">
                      <button 
                        onClick={() => loadChatSession(session.id)}
                        className={`w-full text-left p-2 rounded-lg text-sm flex items-center ${
                          currentChatId === session.id 
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <span className="truncate flex-1">
                          {session.title || 'Chat Session'}
                        </span>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            if (window.confirm('Are you sure you want to delete this chat?')) {
                              deleteChatSession(session.id);
                            }
                          }}
                          className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-opacity ml-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </button>
                    </li>
                  ))
                ) : (
                  <li className="text-xs text-gray-500 dark:text-gray-400 text-center py-2">
                    No chat history yet
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
      
      {/* Settings and Help - Now at the bottom above user profile */}
      <div className="border-t border-gray-100 dark:border-gray-700 pt-2 px-2 pb-2">
        <ul className="space-y-1">
          <li>
            <button 
              onClick={() => setIsSettingsOpen(true)}
              className={`w-full flex items-center p-2 ${isSidebarCollapsed ? 'justify-center' : ''} text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg`}
            >
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {!isSidebarCollapsed && <span className="ml-3">Settings</span>}
            </button>
          </li>
          <li>
            <Link 
              href="#help" 
              className={`flex items-center p-2 ${isSidebarCollapsed ? 'justify-center' : ''} text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg`}
            >
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {!isSidebarCollapsed && <span className="ml-3">Help</span>}
            </Link>
          </li>
        </ul>
      </div>
      
      {/* User Profile Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        {isSidebarCollapsed ? (
          <div className="flex justify-center">
            {user.photoURL ? (
              <img 
                src={user.photoURL} 
                alt="Profile" 
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold">
                {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="flex items-center mb-3">
              {user.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt="Profile" 
                  className="w-9 h-9 rounded-full mr-3 object-cover"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold mr-3">
                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {user.displayName || user.email}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {userData?.role || 'User'}
                </p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center p-2 text-gray-800 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
