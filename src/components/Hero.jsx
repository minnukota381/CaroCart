import React from "react";
import { Link } from "react-router-dom";

const indianMilitaryOliveGreen = "#4B5320";

const Hero = () => {
  return (
    <div
      className="pt-5 text-white"
      style={{ backgroundColor: indianMilitaryOliveGreen }}
    >
      <div className="container py-5 py-md-6">
        <div
          className="mx-auto text-center text-md-start"
          style={{ maxWidth: "48rem" }}
        >
          <h1 className="display-5 fw-bold mb-4">
            Quick Delivery for Army Families in Vizag
          </h1>
          <div className="mb-4">
            <Link
              to="/order"
              className="btn btn-warning btn-lg text-white fw-semibold"
              style={{ minWidth: "180px" }}
            >
              Order on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
