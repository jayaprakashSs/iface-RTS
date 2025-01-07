import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for open and close

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gradient-to-b from-indigo-600 via-indigo-700 to-indigo-800 text-white h-screen transition-all duration-300`}
      >
        {/* Toggle Button */}
        <div className="p-4 flex justify-end items-center">
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-gray-400 transition duration-200"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <ul className="p-4 space-y-4">
          <li>
            <Link
              to="/dashboard"
              className="hover:bg-indigo-500 p-2 block rounded text-center"
            >
              <span className={`${!isOpen && "hidden"} ml-2`}>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/profile"
              className="hover:bg-indigo-500 p-2 block rounded text-center"
            >
              <span className={`${!isOpen && "hidden"} ml-2`}>Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/settings"
              className="hover:bg-indigo-500 p-2 block rounded text-center"
            >
              <span className={`${!isOpen && "hidden"} ml-2`}>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
