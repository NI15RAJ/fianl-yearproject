// src/App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import FirestoreTest from "./pages/firestoreTest";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import SignupChoice from "./pages/SignupChoice";
import FarmerSignup from "./pages/FarmerSignup";
import BuyerSignup from "./pages/BuyerSignup";
import Inventory from "./pages/Inventory";
import Products from "./pages/Products";
import MarketPrices from "./pages/MarketPrices";
import About from "./pages/About";

function App() {
  return (
    <div className="app-root">
      <Navbar />

      <main className="main-content">
        <Routes>
          {/* Default route → Signup choice */}
          <Route path="/" element={<Navigate to="/signup" replace />} />
          <Route path="/firetest" element={<FirestoreTest />} />

          <Route path="/home" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupChoice />} />
          <Route path="/signup/farmer" element={<FarmerSignup />} />
          <Route path="/signup/buyer" element={<BuyerSignup />} />

          {/* Farmer-only inventory */}
          <Route
            path="/inventory"
            element={
              <ProtectedRoute requireRole="farmer">
                <Inventory />
              </ProtectedRoute>
            }
          />

          {/* Public-ish pages */}
          <Route path="/products" element={<Products />} />
          <Route path="/market-prices" element={<MarketPrices />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<div style={{ padding: "2rem" }}>404 – Page Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
