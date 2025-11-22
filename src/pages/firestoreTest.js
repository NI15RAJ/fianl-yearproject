import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const FirestoreTest = () => {
  const [output, setOutput] = useState("");

  const testWrite = async () => {
    try {
      await addDoc(collection(db, "testCollection"), {
        message: "Hello Firestore",
        time: new Date(),
      });
      setOutput("Write successful!");
    } catch (error) {
      setOutput("WRITE FAILED: " + error.message);
    }
  };

  const testRead = async () => {
    try {
      const snap = await getDocs(collection(db, "testCollection"));
      setOutput("Read " + snap.size + " documents.");
    } catch (error) {
      setOutput("READ FAILED: " + error.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Firestore Connectivity Test</h2>
      <button onClick={testWrite}>Test Write</button>
      <button onClick={testRead}>Test Read</button>
      <p>{output}</p>
    </div>
  );
};

export default FirestoreTest;
