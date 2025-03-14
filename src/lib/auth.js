import { getAuth, onAuthStateChanged, setPersistence, browserLocalPersistence, signOut } from 'firebase/auth';

/**
 * Checks if a user is currently logged in
 * @returns {Promise<Object|null>} A Promise that resolves to the user object or null
 */
export const getCurrentUser = () => {
  const auth = getAuth();
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};

/**
 * Sets the authentication persistence to LOCAL (persistent)
 * @returns {Promise<void>}
 */
export const setPersistentAuth = async () => {
  const auth = getAuth();
  try {
    await setPersistence(auth, browserLocalPersistence);
    console.log('Persistence set to LOCAL');
    return true;
  } catch (error) {
    console.error('Error setting persistence:', error);
    return false;
  }
};

/**
 * Signs out the current user and clears persistence
 * @returns {Promise<void>}
 */
export const signOutUser = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    console.log('User signed out');
    return true;
  } catch (error) {
    console.error('Error signing out:', error);
    return false;
  }
};

/**
 * Verifies that the user is authenticated and redirects if not
 * @param {Function} router - Next.js router
 * @returns {Promise<Object|null>} A Promise that resolves to the user object or null
 */
export const requireAuth = async (router) => {
  const user = await getCurrentUser();
  if (!user) {
    // User is not authenticated, redirect to login
    router.push('/auth');
    return null;
  }
  return user;
};

export default {
  getCurrentUser,
  setPersistentAuth,
  signOutUser,
  requireAuth
}; 