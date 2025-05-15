import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-success text-white py-4">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="mb-3 mb-md-0 d-flex gap-3">
            <a
              href="mailto:info@carocart.in"
              className="text-white text-decoration-none d-flex align-items-center"
            >
              <i
                className="bi bi-envelope-fill me-2"
                style={{ fontSize: "1rem" }}
              ></i>
              info@carocart.in
            </a>
            <a
              href="tel:+912345678900"
              className="text-white text-decoration-none d-flex align-items-center"
            >
              <i
                className="bi bi-telephone-fill me-2"
                style={{ fontSize: "1rem" }}
              ></i>
              +91 12345 67890
            </a>
          </div>

          <div className="d-flex gap-3">
            <a href="#" className="text-white fs-5">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white fs-5">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white fs-5">
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>

        <div className="mt-3 pt-3 border-top border-white-50 text-center small text-white-50">
          &copy; {new Date().getFullYear()} CaroCart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
