// src/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);      // firebase user
  const [profile, setProfile] = useState(null); // extra data from Firestore
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
    if (!firebaseUser) {
      setUser(null);
      setProfile(null);
      setLoading(false);
      return;
    }

    setUser(firebaseUser);

    // Load Firestore profile safely
    try {
      const ref = doc(db, "users", firebaseUser.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setProfile(snap.data());
      } else {
        setProfile({});
      }
    } catch (err) {
      console.log("🔥 Firestore still offline. Using fallback profile.");
      setProfile({});
    }

    setLoading(false);
  });

  return () => unsub();
}, []);

  // Signup with role (farmer/buyer)
  const signupWithRole = async (email, password, role, extraData = {}) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const uid = cred.user.uid;

    await setDoc(doc(db, "users", uid), {
      uid,
      email,
      role,
      ...extraData,
      createdAt: new Date(),
    });

    return cred.user;
  };

  // Email/password login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => signOut(auth);

  const value = {
    user,
    profile,
    loading,
    signupWithRole,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
