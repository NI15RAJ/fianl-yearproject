// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  initializeFirestore,
  getFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAqkgxcTU1dTZh4ixIThoSHsu8RQyeX28",
  authDomain: "krishi-kart.firebaseapp.com",
  projectId: "krishi-kart",
  storageBucket: "krishi-kart.firebasestorage.app",
  messagingSenderId: "424759086736",
  appId: "1:424759086736:web:b5ae095cf20723f3ba9215",
  measurementId: "G-NSMGFS7LQ2"
};

const app = initializeApp(firebaseConfig);

// 🔥 THE MOST COMPATIBLE SETTINGS FOR RESTRICTED NETWORKS
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  experimentalAutoDetectLongPolling: false,
  useFetchStreams: false,
});

export const auth = getAuth(app);
