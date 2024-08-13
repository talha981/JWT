// src/Component/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if the user is authenticated
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
