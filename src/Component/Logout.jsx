import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className="btn-logout bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">
      Logout
    </button>
  );
};

export default Logout;
