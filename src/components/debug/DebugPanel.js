import React, { useState, useEffect, useRef } from 'react';
import Debug from '../../utils/debugUtils';

/**
 * Enhanced Debug Panel Component
 * 
 * This component provides a comprehensive debugging interface with:
 * - User data inspection
 * - Firestore collection statistics
 * - Console log viewer
 * - Performance metrics
 * - Debug settings
 */
const DebugPanel = ({ user, debugInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [consoleMessages, setConsoleMessages] = useState([]);
  const [logLevel, setLogLevel] = useState('DEBUG');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [networkCalls, setNetworkCalls] = useState([]);
  const consoleEndRef = useRef(null);
  
  // Track console messages
  useEffect(() => {
    if (!Debug.isEnabled()) return;
    
    const originalConsole = {
      log: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error,
      debug: console.debug
    };
    
    // Override console methods to capture logs
    console.log = (...args) => {
      originalConsole.log(...args);
      captureLog('LOG', args);
    };
    
    console.info = (...args) => {
      originalConsole.info(...args);
      captureLog('INFO', args);
    };
    
    console.warn = (...args) => {
      originalConsole.warn(...args);
      captureLog('WARN', args);
    };
    
    console.error = (...args) => {
      originalConsole.error(...args);
      captureLog('ERROR', args);
    };
    
    console.debug = (...args) => {
      originalConsole.debug(...args);
      captureLog('DEBUG', args);
    };
    
    // Restore original console methods on unmount
    return () => {
      console.log = originalConsole.log;
      console.info = originalConsole.info;
      console.warn = originalConsole.warn;
      console.error = originalConsole.error;
      console.debug = originalConsole.debug;
    };
  }, []);
  
  // Monitor fetch/XHR requests
  useEffect(() => {
    if (!Debug.isEnabled()) return;
    
    // Track fetch requests
    const originalFetch = window.fetch;
    window.fetch = async (url, options) => {
      const start = performance.now();
      const callId = Date.now().toString();
      
      setNetworkCalls(prev => [...prev, {
        id: callId,
        type: 'fetch',
        url,
        method: options?.method || 'GET',
        status: 'pending',
        startTime: start,
        endTime: null,
        duration: null
      }]);
      
      try {
        const response = await originalFetch(url, options);
        const end = performance.now();
        
        setNetworkCalls(prev => 
          prev.map(call => 
            call.id === callId 
              ? {
                  ...call,
                  status: response.ok ? 'success' : 'error',
                  statusCode: response.status,
                  endTime: end,
                  duration: end - start
                }
              : call
          )
        );
        
        return response;
      } catch (error) {
        const end = performance.now();
        
        setNetworkCalls(prev => 
          prev.map(call => 
            call.id === callId 
              ? {
                  ...call,
                  status: 'error',
                  error: error.message,
                  endTime: end,
                  duration: end - start
                }
              : call
          )
        );
        
        throw error;
      }
    };
    
    // Track XMLHttpRequest
    const originalXHROpen = XMLHttpRequest.prototype.open;
    const originalXHRSend = XMLHttpRequest.prototype.send;
    
    XMLHttpRequest.prototype.open = function(method, url) {
      this._debugData = {
        method,
        url,
        startTime: null,
        id: Date.now().toString()
      };
      originalXHROpen.apply(this, arguments);
    };
    
    XMLHttpRequest.prototype.send = function() {
      if (this._debugData) {
        this._debugData.startTime = performance.now();
        
        setNetworkCalls(prev => [...prev, {
          id: this._debugData.id,
          type: 'xhr',
          url: this._debugData.url,
          method: this._debugData.method,
          status: 'pending',
          startTime: this._debugData.startTime
        }]);
        
        this.addEventListener('load', function() {
          const endTime = performance.now();
          setNetworkCalls(prev => 
            prev.map(call => 
              call.id === this._debugData.id 
                ? {
                    ...call,
                    status: this.status >= 200 && this.status < 300 ? 'success' : 'error',
                    statusCode: this.status,
                    endTime,
                    duration: endTime - this._debugData.startTime
                  }
                : call
            )
          );
        });
        
        this.addEventListener('error', function() {
          const endTime = performance.now();
          setNetworkCalls(prev => 
            prev.map(call => 
              call.id === this._debugData.id 
                ? {
                    ...call,
                    status: 'error',
                    endTime,
                    duration: endTime - this._debugData.startTime
                  }
                : call
            )
          );
        });
      }
      
      originalXHRSend.apply(this, arguments);
    };
    
    // Cleanup
    return () => {
      window.fetch = originalFetch;
      XMLHttpRequest.prototype.open = originalXHROpen;
      XMLHttpRequest.prototype.send = originalXHRSend;
    };
  }, []);
  
  // Auto-scroll console to bottom when new messages arrive
  useEffect(() => {
    if (consoleEndRef.current && activeTab === 'console') {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [consoleMessages, activeTab]);
  
  // Capture console logs
  const captureLog = (level, args) => {
    const time = new Date().toLocaleTimeString();
    
    setConsoleMessages(prev => {
      // Keep max 1000 messages to prevent memory issues
      const messages = [...prev, { level, args, time }];
      if (messages.length > 1000) {
        return messages.slice(messages.length - 1000);
      }
      return messages;
    });
  };
  
  // Clear console
  const clearConsole = () => {
    setConsoleMessages([]);
  };
  
  // Change log level
  const handleLogLevelChange = (newLevel) => {
    setLogLevel(newLevel);
    Debug.setLogLevel(newLevel);
  };
  
  // Toggle debug features
  const toggleDebugFeature = (feature) => {
    Debug.FEATURES[feature] = !Debug.FEATURES[feature];
    // Force re-render
    setLogLevel(prev => prev);
  };
  
  // Add sample data
  const addSampleData = async () => {
    if (user?.uid) {
      try {
        const result = await Debug.measurePerformance(
          'FIREBASE', 
          'populateSampleUserData', 
          () => window.populateSampleUserData(user.uid)
        );
        
        Debug.info('DEBUG_PANEL', 'Sample data added', result);
        
        // Refresh the page to show new data
        window.location.reload();
      } catch (error) {
        Debug.error('DEBUG_PANEL', 'Failed to add sample data', error);
      }
    }
  };
  
  // Function to refresh data from Firestore
  const refreshFirestoreData = async () => {
    if (!user || !user.uid) {
      console.error('Cannot refresh data: No user ID available');
      return;
    }
    
    try {
      Debug.info('DEBUG_PANEL', 'Forcing refresh of Firestore data');
      
      // Clear existing data in state
      window.dispatchEvent(new CustomEvent('debug:requestDataRefresh', {
        detail: { userId: user.uid }
      }));
      
      // Re-fetch debug info
      const refreshedData = await debugFirestoreCollections(user.uid);
      
      Debug.info('DEBUG_PANEL', 'Data refresh completed', refreshedData);
      window.location.reload(); // Force a full page reload to ensure all components re-fetch data
    } catch (error) {
      Debug.error('DEBUG_PANEL', 'Error refreshing Firestore data', error);
    }
  };
  
  // If debugging is not enabled, show only a toggle button
  if (!Debug.isEnabled()) {
    return (
      <button
        onClick={() => Debug.toggleDebugging(true)}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg z-50"
        title="Enable debugging"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    );
  }
  
  if (isCollapsed) {
    return (
      <button
        onClick={() => setIsCollapsed(false)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg z-50"
        title="Expand debug panel"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    );
  }
  
  return (
    <div className="fixed bottom-0 right-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white dark:bg-gray-800 shadow-xl z-50 flex flex-col rounded-t-lg transition-all">
      {/* Header */}
      <div className="bg-blue-600 text-white p-2 rounded-t-lg flex justify-between items-center">
        <h3 className="text-lg font-bold flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Debug Panel
        </h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-blue-200 transition-colors"
            title={isOpen ? "Minimize" : "Expand"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} />
            </svg>
          </button>
          <button
            onClick={() => setIsCollapsed(true)}
            className="text-white hover:text-blue-200 transition-colors"
            title="Collapse to icon"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Panel content */}
      {isOpen && (
        <div className="min-h-48 max-h-96 overflow-hidden flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-2 px-4 text-sm font-medium ${
                activeTab === 'overview'
                  ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('console')}
              className={`flex-1 py-2 px-4 text-sm font-medium ${
                activeTab === 'console'
                  ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Console
            </button>
            <button
              onClick={() => setActiveTab('network')}
              className={`flex-1 py-2 px-4 text-sm font-medium ${
                activeTab === 'network'
                  ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Network
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex-1 py-2 px-4 text-sm font-medium ${
                activeTab === 'settings'
                  ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Settings
            </button>
          </div>
          
          {/* Tab content */}
          <div className="flex-1 overflow-auto p-3">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                {/* User Info */}
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">User Info</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-start">
                      <span className="text-gray-500 dark:text-gray-400 w-20 flex-shrink-0">UID:</span>
                      <span className="text-gray-700 dark:text-gray-300 break-all">{user?.uid}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-500 dark:text-gray-400 w-20 flex-shrink-0">Email:</span>
                      <span className="text-gray-700 dark:text-gray-300">{user?.email}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-500 dark:text-gray-400 w-20 flex-shrink-0">Auth Status:</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {user?.emailVerified ? 'Verified' : 'Unverified'}
                      </span>
                    </div>
                    {debugInfo?.users?.userExists !== undefined && (
                      <div className="flex items-start">
                        <span className="text-gray-500 dark:text-gray-400 w-20 flex-shrink-0">Firestore:</span>
                        <span className={`${debugInfo.users.userExists ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                          {debugInfo.users.userExists ? 'User Document Exists' : 'No User Document'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Firestore Collections */}
                {debugInfo && (
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Firestore Collections</h4>
                      <button
                        onClick={refreshFirestoreData}
                        className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 px-2 py-1 rounded hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors"
                        title="Refresh data from Firestore"
                      >
                        <div className="flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Refresh
                        </div>
                      </button>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Users</span>
                        <span className="text-xs font-medium">{debugInfo.users?.total || 0}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Notes</span>
                        <div className="flex items-center">
                          <span className="text-xs font-medium">{debugInfo.notes?.total || 0}</span>
                          {debugInfo.notes?.userNotes > 0 && (
                            <span className="ml-1 text-xs text-blue-600 dark:text-blue-400">
                              ({debugInfo.notes.userNotes} yours)
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Search History</span>
                        <div className="flex items-center">
                          <span className="text-xs font-medium">{debugInfo.searchHistory?.total || 0}</span>
                          {debugInfo.searchHistory?.userSearches > 0 && (
                            <span className="ml-1 text-xs text-blue-600 dark:text-blue-400">
                              ({debugInfo.searchHistory.userSearches} yours)
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Chat Sessions</span>
                        <div className="flex items-center">
                          <span className="text-xs font-medium">{debugInfo.chatSessions?.total || 0}</span>
                          {debugInfo.chatSessions?.userSessions > 0 && (
                            <span className="ml-1 text-xs text-blue-600 dark:text-blue-400">
                              ({debugInfo.chatSessions.userSessions} yours)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex space-x-2">
                      <button
                        onClick={addSampleData}
                        className="w-full bg-blue-600 text-white py-1 rounded text-xs hover:bg-blue-700 transition-colors flex items-center justify-center"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add Sample Data
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Performance Metrics */}
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Performance Metrics</h4>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex justify-between items-center mb-1">
                      <span>Page Load:</span>
                      <span className="font-medium">{performance.now().toFixed(0)}ms</span>
                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <span>Memory Usage:</span>
                      <span className="font-medium">
                        {window.performance.memory 
                          ? `${Math.round(window.performance.memory.usedJSHeapSize / 1048576)} MB`
                          : 'Not available'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'console' && (
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex space-x-2">
                    <select 
                      value={logLevel} 
                      onChange={(e) => handleLogLevelChange(e.target.value)}
                      className="text-xs p-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
                    >
                      <option value="DEBUG">Debug</option>
                      <option value="INFO">Info</option>
                      <option value="WARN">Warn</option>
                      <option value="ERROR">Error</option>
                    </select>
                  </div>
                  <button
                    onClick={clearConsole}
                    className="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  >
                    Clear
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto bg-black p-2 rounded font-mono text-xs space-y-1 text-white">
                  {consoleMessages.length === 0 ? (
                    <div className="text-gray-400 italic p-2">No console messages yet.</div>
                  ) : (
                    consoleMessages.map((msg, i) => {
                      let bgColor = '';
                      let textColor = 'text-white';
                      
                      switch (msg.level) {
                        case 'INFO':
                          bgColor = 'bg-blue-800/20';
                          textColor = 'text-blue-300';
                          break;
                        case 'WARN':
                          bgColor = 'bg-yellow-800/20';
                          textColor = 'text-yellow-300';
                          break;
                        case 'ERROR':
                          bgColor = 'bg-red-800/20';
                          textColor = 'text-red-300';
                          break;
                        case 'DEBUG':
                          bgColor = 'bg-purple-800/20';
                          textColor = 'text-purple-300';
                          break;
                        default:
                          bgColor = '';
                      }
                      
                      return (
                        <div key={i} className={`p-1 rounded ${bgColor}`}>
                          <span className="text-gray-400">[{msg.time}]</span>{' '}
                          <span className={textColor}>[{msg.level}]</span>{' '}
                          <span>
                            {msg.args.map((arg, j) => (
                              <span key={j}>
                                {typeof arg === 'object' 
                                  ? JSON.stringify(arg, null, 2) 
                                  : String(arg)}
                              </span>
                            ))}
                          </span>
                        </div>
                      );
                    })
                  )}
                  <div ref={consoleEndRef} />
                </div>
              </div>
            )}
            
            {activeTab === 'network' && (
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium">
                    {networkCalls.length} Network Requests
                  </span>
                  <button
                    onClick={() => setNetworkCalls([])}
                    className="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  >
                    Clear
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                  {networkCalls.length === 0 ? (
                    <div className="text-gray-400 italic p-4 text-center text-xs">No network calls recorded yet.</div>
                  ) : (
                    <table className="min-w-full text-xs">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th className="py-2 px-3 text-left text-gray-500 dark:text-gray-300 font-medium">URL</th>
                          <th className="py-2 px-3 text-left text-gray-500 dark:text-gray-300 font-medium">Method</th>
                          <th className="py-2 px-3 text-left text-gray-500 dark:text-gray-300 font-medium">Status</th>
                          <th className="py-2 px-3 text-left text-gray-500 dark:text-gray-300 font-medium">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {networkCalls.map((call) => (
                          <tr key={call.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            <td className="py-2 px-3 truncate max-w-[150px]">{call.url}</td>
                            <td className="py-2 px-3">{call.method}</td>
                            <td className="py-2 px-3">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                call.status === 'success' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400'
                                  : call.status === 'error'
                                  ? 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'
                                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400'
                              }`}>
                                {call.status === 'pending' ? 'Pending' : call.statusCode || call.status}
                              </span>
                            </td>
                            <td className="py-2 px-3">
                              {call.duration ? `${call.duration.toFixed(2)} ms` : '...'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Debug Features</h4>
                  <div className="space-y-2">
                    {Object.entries(Debug.FEATURES).map(([feature, enabled]) => (
                      <div key={feature} className="flex items-center justify-between">
                        <span className="text-xs text-gray-700 dark:text-gray-300">{feature}</span>
                        <button
                          onClick={() => toggleDebugFeature(feature)}
                          className={`w-10 h-5 relative rounded-full ${enabled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'}`}
                        >
                          <span 
                            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                              enabled ? 'transform translate-x-5' : ''
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Log Level</h4>
                  <select 
                    value={logLevel} 
                    onChange={(e) => handleLogLevelChange(e.target.value)}
                    className="w-full p-1.5 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm"
                  >
                    <option value="DEBUG">Debug (All logs)</option>
                    <option value="INFO">Info (Info, Warn, Error)</option>
                    <option value="WARN">Warn (Warn, Error)</option>
                    <option value="ERROR">Error (Error only)</option>
                  </select>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => Debug.toggleDebugging(false)}
                    className="flex-1 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
                  >
                    Disable Debugging
                  </button>
                  <button
                    onClick={() => Debug.resetDebugSettings()}
                    className="flex-1 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors"
                  >
                    Reset Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DebugPanel;

// Make functions available globally for the debug panel to call
if (typeof window !== 'undefined') {
  window.populateSampleUserData = async (userId) => {
    const { populateSampleUserData } = await import('../../services/debugFirestore');
    return populateSampleUserData(userId);
  };
} 