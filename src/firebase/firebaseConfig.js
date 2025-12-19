import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

if (isBrowser) {
  // Check if Firebase is already initialized to avoid duplicate apps
  const apps = getApps();
  if (apps.length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = apps[0]; // if already initialized, use that one
  }
  
  // Initialize services only on client side
  db = getFirestore(app);
} else {
  // Server-side: provide empty implementations or mocks if needed
  db = null;
}

export { db }; 