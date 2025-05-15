import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text-wrapper">
          <h1 className="hero-heading">
            <span className="hero-highlight">Quick Delivery</span> for
            <br />
            Army Families in <span className="hero-city">Vizag</span>
          </h1>
          <p className="hero-subheading">
            Serving our military community with fast, reliable delivery services
          </p>

          <div className="hero-button-wrapper">
            <Link to="/order" className="hero-button">
              <span className="button-content">
                <FaWhatsapp className="button-icon" />
                Order on WhatsApp
                <FaArrowRight className="button-arrow" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span className="scroll-text">Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
