import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // Your Firebase configuration object
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Check if Firebase is already initialized
let app;
const apps = getApps();
if (apps.length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = apps[0]; // Use existing app
}

export const db = getFirestore(app);

// Initialize Auth with persistence
export const auth = getAuth(app);
// Set persistence to LOCAL (keeps user logged in until they explicitly sign out)
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Firebase persistence set to LOCAL');
  })
  .catch((error) => {
    console.error('Error setting persistence:', error);
  });

export const storage = getStorage(app);
export default app;