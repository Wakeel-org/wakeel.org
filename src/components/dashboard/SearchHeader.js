import React, { useState, useEffect } from 'react';

const SearchHeader = ({ 
  activeTab, 
  setActiveTab, 
  searchQuery, 
  setSearchQuery, 
  handleSearch, 
  isLoading,
  searchHistory
}) => {
  const [showHistory, setShowHistory] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(localSearchQuery);
    handleSearch(e);
  };

  return (
    <div className="bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-blue-900 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800 dark:text-white shadow-lg border-b border-gray-200 dark:border-gray-800">
      {/* Search Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
        <button 
          className={`py-3 px-6 ${activeTab === 'ai' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'} transition-colors`}
          onClick={() => setActiveTab('ai')}
        >
          AI Search
        </button>
        <button 
          className={`py-3 px-6 ${activeTab === 'keyword' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'} transition-colors`}
          onClick={() => setActiveTab('keyword')}
        >
          Keyword Search
        </button>
        <button 
          className={`py-3 px-6 ${activeTab === 'case' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'} transition-colors`}
          onClick={() => setActiveTab('case')}
        >
          Case Summaries
        </button>
        <button 
          className={`py-3 px-6 ${activeTab === 'drafter' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'} transition-colors`}
          onClick={() => setActiveTab('drafter')}
        >
          Drafter (Coming Soon)
        </button>
        <button 
          className={`py-3 px-6 ${activeTab === 'citation' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'} transition-colors`}
          onClick={() => setActiveTab('citation')}
        >
          Citation Analysis
        </button>
        <div className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-lg flex items-center border border-blue-200 dark:border-blue-700 ml-auto mr-4 my-2">
          <span className="text-sm text-blue-700 dark:text-blue-300">
            <span className="font-semibold">10</span> searches remaining
          </span>
        </div>
      </div>
      
      <div className="p-4">
        {/* Search Box */}
        <div className="relative mb-4">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
                onFocus={() => searchHistory.length > 0 && setShowHistory(true)}
                onBlur={() => setTimeout(() => setShowHistory(false), 200)}
                className="block w-full pl-12 pr-24 py-3 rounded-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-gray-700"
                placeholder={
                  activeTab === 'ai' ? "Enter facts, concept or a legal question..." :
                  activeTab === 'keyword' ? "Enter keywords to search for..." :
                  activeTab === 'case' ? "Enter case name or citation..." :
                  activeTab === 'drafter' ? "Describe the document you want to draft..." :
                  "Enter citation to analyze..."
                }
              />
              <button
                type="submit"
                disabled={isLoading || !localSearchQuery.trim()}
                className="absolute right-2 top-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50 transition-colors flex items-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Searching...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Search</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Search History Dropdown */}
          {/* {showHistory && searchHistory.length > 0 && (
            <div className="absolute z-40 mt-2 w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 max-h-64 overflow-y-auto">
              <div className="p-2">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 px-2 py-1">Recent Searches</h3>
                {searchHistory.map(item => (
                  <div 
                    key={item.id}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
                    onClick={() => {
                      setLocalSearchQuery(item.query);
                      setSearchQuery(item.query);
                      setActiveTab(item.type);
                      setShowHistory(false);
                      handleSearch({ preventDefault: () => {} });
                    }}
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-800 dark:text-white">{item.query}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )} */}
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
          Wakeel.org AI Search is currently in development—early access stage; results may be imperfect. Please verify critical information independently.
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
