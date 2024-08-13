import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex ">
        <div className="text-white text-lg font-bold">
          <Link to="/" className="hover:text-gray-300">MyApp</Link>
        </div>
        <div className="space-x-4 ml-64">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/signup" className="text-white hover:text-gray-300">Signup</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
        </div>
      </div>
 
    </nav>
  );
};

export default Navbar;
