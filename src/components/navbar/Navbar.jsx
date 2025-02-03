import React from 'react';
import { FaTh, FaFunnelDollar, FaCog, FaBell, FaFilter } from 'react-icons/fa';
import logo from '../../assets/logo.jpeg';

function Navbar() {
  return (
    <div className="bg-gray-700 text-white p-4 flex justify-between items-center w-full">
      <div className="flex items-center space-x-4">
        {/* Logo and Company Title */}
        <div className="flex items-center space-x-2">
          <img className="w-10 h-10" src={logo} alt="Logo" />
          <span className="text-xl hidden md:block font-bold">FreedomTrack</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 hidden sm:flex justify-center px-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md p-2 rounded bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* User Profile */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center p-2 hover:bg-gray-600 rounded">
          <FaBell className="mr-2" />
        </div>
        <img className="rounded-full w-10 h-10" src="profile-pic-url" alt="Profile" />
        <span>Username</span>
      </div>
    </div>
  );
}

export default Navbar;