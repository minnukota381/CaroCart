import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  // Check if user is logged in (example: token stored in localStorage)
  const isLoggedIn = !!localStorage.getItem("token");

  const handleViewCart = () => {
    if (!isLoggedIn) {
      alert("Please login to view your cart.");
      navigate("/login");
    } else {
      // Logic to show cart contents or open cart modal here
      alert("Showing your cart... (You can implement your cart UI here)");
    }
  };

  return (
    <div className="cart-container">
      <button onClick={handleViewCart}>View Cart 🛒</button>
    </div>
  );
};

export default Cart;
