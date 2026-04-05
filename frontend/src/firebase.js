import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

// ✅ cria primeiro
export const auth = getAuth(app);


// ✅ depois configura
setPersistence(auth, browserLocalPersistence);

export const provider = new GoogleAuthProvider();
export const db = getFirestore(app); // 🔥 banco
export const storage = getStorage(app);
console.log("BUCKET:", import.meta.env.VITE_STORAGE_BUCKET);

export default app;





