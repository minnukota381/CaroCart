import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaLeaf, FaMugHot } from "react-icons/fa";
import "./OurProducts.css";

const OurProducts = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = localStorage.getItem("isUserLoggedIn") === "true";

  const products = [
    {
      id: 1,
      name: "Special Chai",
      description: "A refreshing blend of spices and tea leaves.",
      price: 50,
      tagline: "WHO NEEDS A GUY WHEN THERE'S CHAI",
      type: "chai",
      subtitle: "AROHA'S BLUE TEA",
      note: "- Makes you feel Tranquil",
    },
    {
      id: 2,
      name: "Special Chocolate",
      description: "Rich and creamy chocolate from our partner company.",
      price: 120,
      tagline: "Dive in to the world of fresh chocolate",
      type: "chocolate",
      subtitle: "AROHA'S KUNAFU",
      note: "OUR Spl Treat for my lovely customers",
    },
  ];

  const handleOrderClick = (product) => {
    if (!isUserLoggedIn) {
      alert("Please login to order this product.");
      navigate("/login");
      return;
    }
    navigate("/order", { state: { product } });
  };

  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Premium Products</h2>
          <p className="section-subtitle">
            Handcrafted with love for our valued customers
          </p>
          <div className="divider"></div>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className={`product-card ${product.type}`}>
              <div className="product-badge">
                {product.type === "chai" ? <FaMugHot /> : <FaLeaf />}
              </div>

              <div className="product-content">
                <div className="product-tagline">{product.tagline}</div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-subtitle">{product.subtitle}</div>
                <p className="product-description">{product.description}</p>
                <div className="product-note">{product.note}</div>

                <div className="product-footer">
                  <div className="product-price">₹{product.price}</div>
                  <button
                    className="order-button"
                    onClick={() => handleOrderClick(product)}
                  >
                    <FaShoppingCart className="button-icon" />
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
