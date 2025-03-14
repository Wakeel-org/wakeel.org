import React, { useState } from 'react';

const NotesModal = ({ 
  isOpen, 
  onClose, 
  newNote, 
  setNewNote, 
  handleAddNote,
  selectedNote,
  setSelectedNote,
  handleUpdateNote,
  handleDeleteNote
}) => {
  const [noteCategory, setNoteCategory] = useState(selectedNote?.category || 'General');
  
  if (!isOpen) return null;

  const isEditMode = !!selectedNote;
  
  const handleSubmit = () => {
    if (isEditMode) {
      handleUpdateNote();
    } else {
      handleAddNote();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-6 transform transition-all">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            {isEditMode ? 'Edit Note' : 'Add New Note'}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label htmlFor="note-category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Category
            </label>
            <select 
              id="note-category"
              value={noteCategory}
              onChange={(e) => setNoteCategory(e.target.value)}
              className="text-sm px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="General">General</option>
              <option value="Case Notes">Case Notes</option>
              <option value="Research">Research</option>
              <option value="To-Do">To-Do</option>
              <option value="Important">Important</option>
            </select>
          </div>
          
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Type your note here..."
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white min-h-[180px] shadow-sm"
          />
        </div>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-800/30">
          <svg className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Notes are automatically saved to your personal library and synchronized across devices</span>
        </div>
        
        <div className="flex justify-end">
          {isEditMode && (
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to delete this note?')) {
                  handleDeleteNote(selectedNote.id);
                  onClose();
                }
              }}
              className="px-4 py-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 mr-auto transition-colors"
            >
              <svg className="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Delete
            </button>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 mr-3 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!newNote.trim()}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-sm disabled:opacity-50 transition-colors"
          >
            {isEditMode ? 'Update Note' : 'Save Note'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesModal;
