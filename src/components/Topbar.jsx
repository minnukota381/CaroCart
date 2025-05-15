import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between bg-gray-900 px-6 py-4 shadow-md">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-800 rounded-md px-3 py-2 w-80">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search orders, customers..."
          className="bg-transparent outline-none text-gray-200 w-full"
        />
      </div>

      {/* Right side icons */}
      <div className="flex items-center space-x-6">
        <button
          aria-label="Notifications"
          className="relative text-gray-400 hover:text-white"
        >
          <FaBell size={20} />
          {/* Example notification dot */}
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </button>

        <button
          aria-label="User profile"
          className="text-gray-400 hover:text-white"
        >
          <FaUserCircle size={28} />
        </button>
      </div>
    </header>
  );
}
