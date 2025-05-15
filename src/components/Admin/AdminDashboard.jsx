import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <button className="btn btn-danger float-end" onClick={handleLogout}>
        Logout
      </button>

      <div className="mt-4">
        <h4>Manage Services</h4>
        {/* Placeholder for add/edit services */}
        <p>Add, edit, or remove services here.</p>

        <h4 className="mt-4">Manage Products</h4>
        {/* Placeholder for add/edit products */}
        <p>Add, edit, or remove products here.</p>

        <h4 className="mt-4">Live User Orders</h4>
        {/* Placeholder for live order list */}
        <p>View live user order list here.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
