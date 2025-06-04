import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ Children }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? Children : <Navigate to="/login" />;
};

export default ProtectedRoute;