import React from 'react';

const ResultsPanel = ({ 
  searchResults, 
  selectedCase, 
  setSelectedCase, 
  activeTab,
  isLoading 
}) => {
  // Generate a placeholder for when no search results are available
  const renderEmptyState = () => (
    <div className="text-center text-gray-500 dark:text-gray-400 py-10">
      <svg className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <h3 className="text-lg font-medium mb-2">Your search results will appear here</h3>
      <p>Try searching for a legal question or concept</p>
    </div>
  );

  // Render loading state
  const renderLoadingState = () => (
    <div className="flex justify-center items-center py-10">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  );

  // Display detailed case information
  const renderCaseDetail = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <button
        onClick={() => setSelectedCase(null)}
        className="mb-4 text-blue-600 hover:text-blue-800 dark:text-blue-400 flex items-center transition-colors"
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Results
      </button>
      
      <h2 className="text-xl font-bold mb-4">{selectedCase.title}</h2>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full">
          Relevance: {(selectedCase.relevance * 100).toFixed(1)}%
        </span>
        {selectedCase.citation && (
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
            Citation: {selectedCase.citation}
          </span>
        )}
        {selectedCase.date && (
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
            Date: {selectedCase.date}
          </span>
        )}
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3 className="text-lg font-semibold mb-2">Summary</h3>
        <p className="text-gray-700 dark:text-gray-300">{selectedCase.summary}</p>
        
        {selectedCase.facts && (
          <>
            <h3 className="text-lg font-semibold mb-2 mt-4">Facts</h3>
            <p className="text-gray-700 dark:text-gray-300">{selectedCase.facts}</p>
          </>
        )}
        
        {selectedCase.holding && (
          <>
            <h3 className="text-lg font-semibold mb-2 mt-4">Holding</h3>
            <p className="text-gray-700 dark:text-gray-300">{selectedCase.holding}</p>
          </>
        )}
        
        {selectedCase.analysis && (
          <>
            <h3 className="text-lg font-semibold mb-2 mt-4">Analysis</h3>
            <p className="text-gray-700 dark:text-gray-300">{selectedCase.analysis}</p>
          </>
        )}
      </div>

      <div className="mt-6 flex gap-3">
        <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-colors shadow-sm">
          Save to Library
        </button>
        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition-colors">
          <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export
        </button>
        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition-colors">
          <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
      </div>
    </div>
  );

  // Display search results
  const renderSearchResults = () => (
    <div className="space-y-3">
      {searchResults.map(result => (
        <div
          key={result.id}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700"
          onClick={() => setSelectedCase(result)}
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{result.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{result.summary}</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300">
              {(result.relevance * 100).toFixed(1)}%
            </span>
            {result.citation && (
              <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {result.citation}
              </span>
            )}
            {result.date && (
              <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {result.date}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  // Main render logic
  if (isLoading) {
    return renderLoadingState();
  }
  
  if (selectedCase) {
    return renderCaseDetail();
  }
  
  if (searchResults.length > 0) {
    return renderSearchResults();
  }
  
  return renderEmptyState();
};

export default ResultsPanel;
