import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Helper to determine if we're in a browser or Node.js
const isBrowser = typeof window !== 'undefined';

// Initialize Firebase only on the client side
let app;
let db;
let storage;
let auth;

if (isBrowser) {
  // Check if Firebase is already initialized to avoid duplicate apps
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0]; // if already initialized, use that one
  }
  
  // Initialize services only on client side
  db = getFirestore(app);
  storage = getStorage(app);
  auth = getAuth(app);
} else {
  // Server-side: provide empty implementations or mocks if needed
  db = null;
  storage = null;
  auth = null;
}

export { db, storage, auth }; 