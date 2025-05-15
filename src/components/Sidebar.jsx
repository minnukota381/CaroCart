import React from "react";
import { FaTruck, FaHome, FaUser, FaCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-gray-100 flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-8">Logistics</h2>

      <nav className="flex flex-col space-y-4">
        <a
          href="#dashboard"
          className="flex items-center space-x-3 px-3 py-2 rounded hover:bg-gray-700 transition"
        >
          <FaHome size={20} />
          <span>Dashboard</span>
        </a>

        <a
          href="#orders"
          className="flex items-center space-x-3 px-3 py-2 rounded hover:bg-gray-700 transition"
        >
          <FaTruck size={20} />
          <span>Orders</span>
        </a>

        <a
          href="#customers"
          className="flex items-center space-x-3 px-3 py-2 rounded hover:bg-gray-700 transition"
        >
          <FaUser size={20} />
          <span>Customers</span>
        </a>

        <a
          href="#settings"
          className="flex items-center space-x-3 px-3 py-2 rounded hover:bg-gray-700 transition"
        >
          <FaCog size={20} />
          <span>Settings</span>
        </a>
      </nav>

      <div className="mt-auto text-xs text-gray-400">
        &copy; 2025 Logistics Inc.
      </div>
    </aside>
  );
}
