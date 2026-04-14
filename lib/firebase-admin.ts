import { initializeApp, getApps, cert, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function getAdminApp() {
  if (getApps().length > 0) {
    return getApps()[0];
  }

  // In Cloud Run, applicationDefault() works automatically.
  // For local dev, set GOOGLE_APPLICATION_CREDENTIALS env var.
  const credential = process.env.GOOGLE_APPLICATION_CREDENTIALS
    ? cert(process.env.GOOGLE_APPLICATION_CREDENTIALS)
    : applicationDefault();

  return initializeApp({
    credential,
    projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID || "boty-app",
  });
}

const app = getAdminApp();
const adminDb = getFirestore(app);

export { adminDb };
