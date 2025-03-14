/**
 * Debug Firestore Service
 * 
 * Utilities for debugging Firestore collections and generating sample data for testing.
 */
import { db } from '../config/firebase';
import { collection, doc, getDoc, getDocs, setDoc, query, where, serverTimestamp } from 'firebase/firestore';
import Debug from '../utils/debugUtils';

/**
 * Check the state of Firestore collections
 * @param {string} userId - The current user ID
 * @returns {Promise<object>} - Collection statistics and user verification
 */
export const debugFirestoreCollections = async (userId) => {
  if (!userId) {
    Debug.warn('FIRESTORE_DEBUG', 'Cannot debug collections without a user ID');
    return null;
  }
  
  try {
    Debug.info('FIRESTORE_DEBUG', `Checking collections for user: ${userId}`);
    
    const result = {
      users: { total: 0, userExists: false },
      notes: { total: 0, userNotes: 0 },
      searchHistory: { total: 0, userSearches: 0 },
      chatSessions: { total: 0, userSessions: 0 }
    };
    
    // Check if user document exists
    const userDoc = await getDoc(doc(db, 'users', userId));
    result.users.userExists = userDoc.exists();
    
    // Count all collections
    await Promise.all([
      // Count users
      getDocs(collection(db, 'users')).then(snapshot => {
        result.users.total = snapshot.size;
        Debug.debug('FIRESTORE_DEBUG', `Found ${snapshot.size} users`);
      }),
      
      // Count notes and user's notes
      getDocs(collection(db, 'notes')).then(snapshot => {
        result.notes.total = snapshot.size;
        Debug.debug('FIRESTORE_DEBUG', `Found ${snapshot.size} notes total`);
      }),
      
      // Count user's notes
      getDocs(query(collection(db, 'notes'), where('userId', '==', userId))).then(snapshot => {
        result.notes.userNotes = snapshot.size;
        Debug.debug('FIRESTORE_DEBUG', `Found ${snapshot.size} notes for user ${userId}`);
      }),
      
      // Count search history and user's searches
      getDocs(collection(db, 'searchHistory')).then(snapshot => {
        result.searchHistory.total = snapshot.size;
        Debug.debug('FIRESTORE_DEBUG', `Found ${snapshot.size} search history entries total`);
      }),
      
      // Count user's search history
      getDocs(query(collection(db, 'searchHistory'), where('userId', '==', userId))).then(snapshot => {
        result.searchHistory.userSearches = snapshot.size;
        Debug.debug('FIRESTORE_DEBUG', `Found ${snapshot.size} search history entries for user ${userId}`);
      }),
      
      // Count chat sessions and user's sessions
      getDocs(collection(db, 'chatSessions')).then(snapshot => {
        result.chatSessions.total = snapshot.size;
        Debug.debug('FIRESTORE_DEBUG', `Found ${snapshot.size} chat sessions total`);
      }),
      
      // Count user's chat sessions
      getDocs(query(collection(db, 'chatSessions'), where('userId', '==', userId))).then(snapshot => {
        result.chatSessions.userSessions = snapshot.size;
        Debug.debug('FIRESTORE_DEBUG', `Found ${snapshot.size} chat sessions for user ${userId}`);
      })
    ]);
    
    Debug.info('FIRESTORE_DEBUG', 'Collection check complete', result);
    return result;
    
  } catch (error) {
    Debug.error('FIRESTORE_DEBUG', 'Error checking collections', error);
    throw error;
  }
};

/**
 * Populate sample data for a user for testing
 * @param {string} userId - The user ID to populate data for
 * @returns {Promise<object>} - Result of the operation
 */
export const populateSampleUserData = async (userId) => {
  if (!userId) {
    Debug.warn('FIRESTORE_DEBUG', 'Cannot populate sample data without a user ID');
    return { success: false, error: 'No user ID provided' };
  }
  
  try {
    Debug.info('FIRESTORE_DEBUG', `Populating sample data for user: ${userId}`);
    const result = { success: true, created: {} };
    
    // Check if user exists, create if not
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      await setDoc(doc(db, 'users', userId), {
        displayName: 'Test User',
        email: 'test@example.com',
        photoURL: null,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp()
      });
      
      result.created.user = true;
      Debug.info('FIRESTORE_DEBUG', 'Created sample user');
    }
    
    // Create sample notes (5)
    const notesRef = collection(db, 'notes');
    result.created.notes = [];
    
    const sampleNotes = [
      {
        content: 'Important case precedent: Smith v. Jones (2019) establishes a new standard for proving damages in contract disputes.',
        category: 'Case Law',
        createdAt: serverTimestamp(),
        userId: userId
      },
      {
        content: 'Client meeting on Thursday at 2 PM to discuss settlement options.',
        category: 'Meetings',
        createdAt: serverTimestamp(),
        userId: userId
      },
      {
        content: 'Research needed: What are the legal implications of AI-generated content for copyright law?',
        category: 'Research',
        createdAt: serverTimestamp(),
        userId: userId
      },
      {
        content: 'Need to file motion for extension by Friday COB.',
        category: 'Tasks',
        createdAt: serverTimestamp(),
        userId: userId
      },
      {
        content: 'Opposing counsel requested additional time for discovery.',
        category: 'Case Updates',
        createdAt: serverTimestamp(),
        userId: userId
      }
    ];
    
    for (const note of sampleNotes) {
      // Add a small delay between creations to ensure different timestamps
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Ensure proper timestamp format for display
      const noteData = {
        ...note,
        createdAt: new Date()  // Use actual Date object instead of serverTimestamp() for immediate display
      };
      
      const noteRef = doc(notesRef);
      await setDoc(noteRef, noteData);
      result.created.notes.push(noteRef.id);
    }
    
    // Create sample search history (3)
    const searchHistoryRef = collection(db, 'searchHistory');
    result.created.searchHistory = [];
    
    const sampleSearches = [
      {
        query: "Supreme Court decisions on privacy rights",
        type: "case",
        timestamp: new Date(), // Use explicit Date objects for immediate display
        userId: userId
      },
      {
        query: "Contract breach remedies",
        type: "keyword",
        timestamp: new Date(Date.now() - 86400000), // 1 day ago
        userId: userId
      },
      {
        query: "Statute of limitations for medical malpractice",
        type: "ai",
        timestamp: new Date(Date.now() - 172800000), // 2 days ago
        userId: userId
      }
    ];
    
    for (const search of sampleSearches) {
      // Add a small delay between creations to ensure different timestamps
      await new Promise(resolve => setTimeout(resolve, 100));
      
      Debug.debug('FIRESTORE_DEBUG', `Creating sample search history: "${search.query}"`);
      
      const searchRef = doc(searchHistoryRef);
      await setDoc(searchRef, search);
      result.created.searchHistory.push(searchRef.id);
    }
    
    // Create sample chat session with messages
    const chatSessionsRef = collection(db, 'chatSessions');
    result.created.chatSessions = [];
    
    // Create a single chat session with embedded messages
    const chatSessionRef = doc(chatSessionsRef);
    const chatSessionData = {
      userId: userId,
      title: "Legal research about negligence",
      createdAt: new Date(),
      updatedAt: new Date(),
      messages: [
        {
          role: "user",
          content: "What are the elements of negligence?",
          timestamp: new Date(Date.now() - 20000).toISOString()
        },
        {
          role: "assistant",
          content: "The elements of negligence typically include:\n\n1. Duty of care\n2. Breach of duty\n3. Causation (actual and proximate)\n4. Damages\n\nTo establish negligence, the plaintiff must prove each of these elements. Would you like me to explain any particular element in more detail?",
          timestamp: new Date(Date.now() - 15000).toISOString()
        },
        {
          role: "user",
          content: "Can you explain causation in more detail?",
          timestamp: new Date(Date.now() - 10000).toISOString()
        },
        {
          role: "assistant",
          content: "Causation in negligence has two components:\n\n**1. Actual Cause (Cause-in-Fact):**\n- Also known as the \"but-for\" test\n- Asks: \"But for the defendant's actions, would the harm have occurred?\"\n- If the harm would not have occurred without the defendant's actions, then actual cause is established\n\n**2. Proximate Cause (Legal Cause):**\n- Limits liability to reasonably foreseeable consequences\n- Prevents holding defendants responsible for remote or unforeseeable results\n- Courts may use various tests including:\n  - Foreseeability test: Was the harm a foreseeable result?\n  - Risk rule: Was the harm within the scope of risk created?\n  - Direct consequences test: Was there an unbroken chain of events?\n\nProximate cause is often the more challenging element to establish, as it involves policy considerations about how far liability should extend.",
          timestamp: new Date(Date.now() - 5000).toISOString()
        }
      ]
    };
    
    await setDoc(chatSessionRef, chatSessionData);
    result.created.chatSessions.push(chatSessionRef.id);
    
    Debug.info('FIRESTORE_DEBUG', `Sample data created successfully`, result);
    return result;
    
  } catch (error) {
    Debug.error('FIRESTORE_DEBUG', 'Error populating sample data', error);
    return { success: false, error: error.message };
  }
};

/**
 * Clear all data for a user (for testing/debugging)
 * WARNING: This is destructive and should only be used in development
 * @param {string} userId - The user ID to clear data for
 */
export const clearUserData = async (userId) => {
  if (!userId) {
    Debug.warn('FIRESTORE_DEBUG', 'Cannot clear data without a user ID');
    return { success: false, error: 'No user ID provided' };
  }
  
  if (process.env.NODE_ENV === 'production') {
    Debug.error('FIRESTORE_DEBUG', 'clearUserData cannot be used in production');
    return { success: false, error: 'This operation is not allowed in production' };
  }
  
  try {
    Debug.warn('FIRESTORE_DEBUG', `Clearing all data for user: ${userId}`);
    const result = { success: true, deleted: {} };
    
    // Delete user's notes
    const notesSnapshot = await getDocs(query(collection(db, 'notes'), where('userId', '==', userId)));
    result.deleted.notes = 0;
    
    for (const docSnapshot of notesSnapshot.docs) {
      await setDoc(doc(db, 'notes', docSnapshot.id), { deleted: true }, { merge: true });
      result.deleted.notes++;
      Debug.debug('FIRESTORE_DEBUG', `Marked note as deleted: ${docSnapshot.id}`);
    }
    
    // Delete user's search history
    const searchHistorySnapshot = await getDocs(query(collection(db, 'searchHistory'), where('userId', '==', userId)));
    result.deleted.searchHistory = 0;
    
    for (const docSnapshot of searchHistorySnapshot.docs) {
      await setDoc(doc(db, 'searchHistory', docSnapshot.id), { deleted: true }, { merge: true });
      result.deleted.searchHistory++;
      Debug.debug('FIRESTORE_DEBUG', `Marked search history as deleted: ${docSnapshot.id}`);
    }
    
    // Delete user's chat sessions
    const chatSessionsSnapshot = await getDocs(query(collection(db, 'chatSessions'), where('userId', '==', userId)));
    result.deleted.chatSessions = 0;
    
    for (const docSnapshot of chatSessionsSnapshot.docs) {
      await setDoc(doc(db, 'chatSessions', docSnapshot.id), { deleted: true }, { merge: true });
      result.deleted.chatSessions++;
      Debug.debug('FIRESTORE_DEBUG', `Marked chat session as deleted: ${docSnapshot.id}`);
    }
    
    // Update user document (don't delete it)
    if (userId) {
      await setDoc(doc(db, 'users', userId), { 
        dataCleared: true,
        dataCleanTimestamp: serverTimestamp() 
      }, { merge: true });
    }
    
    Debug.info('FIRESTORE_DEBUG', 'User data clearing complete', result);
    return result;
    
  } catch (error) {
    Debug.error('FIRESTORE_DEBUG', 'Error clearing user data', error);
    return { success: false, error: error.message };
  }
};

/**
 * Repair inconsistent search history data for a user
 * @param {string} userId - The user ID to repair data for
 * @returns {Promise<object>} - Result of the repair operation
 */
export const repairSearchHistoryData = async (userId) => {
  if (!userId) {
    Debug.warn('FIRESTORE_DEBUG', 'Cannot repair search history without a user ID');
    return { success: false, error: 'No user ID provided' };
  }
  
  try {
    Debug.info('FIRESTORE_DEBUG', `Repairing search history data for user: ${userId}`);
    const result = { success: true, repaired: 0, deleted: 0, unchanged: 0 };
    
    // Get all search history items for this user
    const searchHistoryQuery = query(
      collection(db, 'searchHistory'),
      where('userId', '==', userId)
    );
    
    const searchHistorySnapshot = await getDocs(searchHistoryQuery);
    Debug.info('FIRESTORE_DEBUG', `Found ${searchHistorySnapshot.docs.length} search history items to check`);
    
    for (const docSnapshot of searchHistorySnapshot.docs) {
      const data = docSnapshot.data();
      const docRef = doc(db, 'searchHistory', docSnapshot.id);
      
      // Check for critical issues
      if (data.deleted === true) {
        // Skip already deleted items
        result.deleted++;
        continue;
      }
      
      let needsRepair = false;
      const updates = {};
      
      // Missing or empty query field
      if (!data.query || typeof data.query !== 'string' || data.query.trim() === '') {
        needsRepair = true;
        updates.query = data.query ? data.query.trim() : '[No query text]';
        updates.repaired = true;
      }
      
      // Missing or invalid type field
      if (!data.type || !['ai', 'case', 'keyword'].includes(data.type)) {
        needsRepair = true;
        updates.type = 'ai'; // Default to AI type
      }
      
      // Missing timestamp
      if (!data.timestamp) {
        needsRepair = true;
        updates.timestamp = new Date();
        Debug.debug('FIRESTORE_DEBUG', `Adding missing timestamp to search history: ${docSnapshot.id}`);
      }
      
      // Repair document if needed
      if (needsRepair) {
        await setDoc(docRef, updates, { merge: true });
        result.repaired++;
        Debug.info('FIRESTORE_DEBUG', `Repaired search history item: ${docSnapshot.id}`, updates);
      } else {
        result.unchanged++;
      }
    }
    
    Debug.info('FIRESTORE_DEBUG', 'Search history repair complete', result);
    return result;
  } catch (error) {
    Debug.error('FIRESTORE_DEBUG', 'Error repairing search history', error);
    return { success: false, error: error.message };
  }
}; 