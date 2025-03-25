import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYuC-uyxF7sijfdVdzAd-Evof924mYCgM",
  authDomain: "intnow-2d928.firebaseapp.com",
  projectId: "intnow-2d928",
  storageBucket: "intnow-2d928.appspot.com",
  messagingSenderId: "65200460527",
  appId: "1:65200460527:web:22a06706b75043b3a3411a",
  measurementId: "G-FC8XV6NCN8",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
