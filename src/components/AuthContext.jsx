import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('isAdmin') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem('isAdmin', isAdmin);
  }, [isAdmin]);

  const login = (admin = false) => {
    setIsAuthenticated(true);
    setIsAdmin(admin);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isAdmin');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
