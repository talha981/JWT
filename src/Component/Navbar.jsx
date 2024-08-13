import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Check if a token exists to determine if the user is logged in

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 flex justify-center">
          <div className="text-white text-2xl font-bold">
            <Link to="/" className="hover:text-gray-300 italic">Json Web Token</Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center space-x-6">
          <Link to="/" className="text-white text-lg hover:text-gray-300">Home</Link>
          {token && (
              <>
              <Link to="/dashboard" className="text-white text-lg hover:text-gray-300">Dashboard</Link>
              <Link to="/profile" className="text-white text-lg hover:text-gray-300">Profile</Link>
            </>
          )}
        </div>
        <div className="flex-1 flex justify-end">
          {token ? (
              <button
              onClick={handleLogout}
              className="text-white text-lg hover:text-gray-300"
              >
              Logout
            </button>
          ) : (
            <>
              <Link to="/signup" className="text-white text-lg hover:text-gray-300 ">Signup</Link>
              <Link to="/login" className="text-white text-lg hover:text-gray-300 ml-5">Login</Link>
            </>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
