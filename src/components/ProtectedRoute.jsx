import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    // You can adjust this logic as needed (e.g., check user.isAdmin for admin routes)
    const isAuthenticated = !!user && !!user.username;
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;