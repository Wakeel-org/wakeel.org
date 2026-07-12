import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

let adminDb;

// Build-time only (getStaticProps under `output: 'export'`). Requires
// FIREBASE_SERVICE_ACCOUNT_KEY (raw service-account JSON) in the build
// environment; returns null when absent so builds without it still succeed.
export function getAdminDb() {
  if (adminDb) return adminDb;

  const key = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!key) return null;

  try {
    const serviceAccount = JSON.parse(key);
    const app = getApps().length ? getApps()[0] : initializeApp({ credential: cert(serviceAccount) });
    adminDb = getFirestore(app);
    return adminDb;
  } catch (error) {
    console.error("Firebase Admin init failed:", error.message);
    return null;
  }
}
