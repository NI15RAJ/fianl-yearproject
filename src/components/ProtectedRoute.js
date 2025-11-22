// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const ProtectedRoute = ({ children, requireRole }) => {
  const { user, profile, loading } = useAuth();

  if (loading) return <div style={{ padding: "2rem" }}>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  if (requireRole && profile?.role !== requireRole) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default ProtectedRoute;
