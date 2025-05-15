import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="container hero-inner-container">
        <div className="hero-text-wrapper">
          <h1 className="hero-heading">
            Quick Delivery for Army Families in Vizag
          </h1>
          <div className="hero-button-wrapper">
            <Link to="/order" className="hero-button">
              Order on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
