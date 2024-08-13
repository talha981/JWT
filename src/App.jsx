import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignupForm from './Component/Signup';
import LoginForm from './Component/Login';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import ProtectedRoute from './Component/ProtectedRoute';
import Dashboard from './Component/Dashboard';
import Profile from './Component/Profile';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard/>} />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile/>} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
