import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './Component/Signup';
import LoginForm from './Component/Login';
import Navbar from './Component/Navbar';
import Home from './Component/Home';

const App = () => {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="/login" element={<LoginForm/>} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
