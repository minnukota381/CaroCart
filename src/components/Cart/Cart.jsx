import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    if (!isLoggedIn) {
      // Save the intended redirect path
      localStorage.setItem("redirectAfterLogin", "/cart");
    }
  }, [isLoggedIn]);

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div
      className="cart-container"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      {!isLoggedIn ? (
        <div>
          <h2>Your Cart</h2>
          <p>Please log in to view your cart items.</p>
          <button
            onClick={handleLoginRedirect}
            style={{
              padding: "10px 20px",
              marginTop: "15px",
              cursor: "pointer",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Login to Continue
          </button>
        </div>
      ) : (
        <div>
          <h2>Your Cart</h2>
          <p>(Display your cart items here)</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
