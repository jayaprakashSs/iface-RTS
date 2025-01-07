import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai"; // Importing Logout icon
import { BsFillPersonFill, BsFillGearFill } from "react-icons/bs"; // Profile and Settings icons
import logo from "../assets/logo.jpg"; // Importing the local image logo

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout functionality
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 p-4 shadow-lg flex items-center justify-between">
      {/* Logo and Admin Panel Section */}
      <div className="flex items-center space-x-6">
        <img src={logo} alt="Logo" className="w-04 h-14" /> {/* Increased Logo Size */}
        <div className="text-white text-2xl font-bold">Admin Panel</div>
      </div>

      {/* Right-aligned Navbar Items */}
      <div className="flex items-center space-x-8">
        {/* Profile Section */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center">
            <BsFillPersonFill className="text-white" size={20} />
          </div>
          <span className="text-white font-medium">John Doe</span>
        </div>

        {/* Settings Icon */}
        <button
          onClick={() => navigate("/dashboard/settings")}
          className="text-white hover:text-gray-300 transition duration-200"
        >
          <BsFillGearFill size={24} />
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
        >
          <AiOutlineLogout size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
