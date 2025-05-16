import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaPlus,
  FaMinus,
  FaLeaf,
  FaMugHot,
} from "react-icons/fa";
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

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  const handleQuantityChange = (id, increment) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + increment),
    }));
  };

  const handleAddToCart = (product) => {
    if (!isUserLoggedIn) {
      navigate("/login");
      return;
    }

    const quantity = quantities[product.id];
    // You can now send this to your backend cart or store it in context/state
    console.log("Add to cart:", { product, quantity });

    navigate("/cart", { state: { product, quantity } });
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
                  <div className="quantity-control">
                    <button
                      onClick={() => handleQuantityChange(product.id, -1)}
                    >
                      <FaMinus />
                    </button>
                    <span>{quantities[product.id]}</span>
                    <button onClick={() => handleQuantityChange(product.id, 1)}>
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    className="order-button"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart className="button-icon" />
                    Add to Cart
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
