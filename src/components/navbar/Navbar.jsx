import React from 'react';
import { FaTh, FaFunnelDollar, FaCog, FaBell, FaFilter } from 'react-icons/fa';
import logo from '../../assets/logo.jpeg';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from 'react-icons/ri';

function Navbar() {
  return (
    <div className=" text-white p-4 flex justify-between items-center w-full">
      <div className="flex items-center space-x-4">
        {/* Logo and Company Title */}
        <div className=" flex items-center space-x-2">
          <img className="w-10 h-10" src={logo} alt="Logo" />
          <span className="text-xl hidden md:block font-bold">FreedomTrack</span>
        </div>
      </div>

      {/* Search Bar */}
     

      {/* User Profile */}
      <div className="flex items-center space-x-5">
      <div className=" w-8 h-8 bg-gray-400 flex justify-center items-center  rounded-full">
          <CiSearch  className="" />
        </div>
        <div className=" w-8 h-8 bg-gray-400 flex justify-center items-center rounded-full">
          <FaBell className="" />
        </div>
        <div className=' w-16 h-8 bg-gray-400 flex justify-between px-2 items-center rounded-full'>

        <CgProfile size={20} />
        <RiArrowDropDownLine size={30} />

        </div>
        
      </div>
    </div>
  );
}

export default Navbar;