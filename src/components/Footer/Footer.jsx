import React from "react";
import {
  BsEnvelopeFill,
  BsTelephoneFill,
  BsInstagram,
  BsTwitter,
  BsFacebook,
} from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="mb-3 mb-md-0 d-flex gap-3">
            <a
              href="mailto:info@carocart.in"
              className="text-white text-decoration-none d-flex align-items-center"
            >
              <BsEnvelopeFill className="me-2" size={18} />
              info@carocart.in
            </a>
            <a
              href="tel:+912345678900"
              className="text-white text-decoration-none d-flex align-items-center"
            >
              <BsTelephoneFill className="me-2" size={18} />
              +91 12345 67890
            </a>
          </div>

          <div className="d-flex gap-3">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-5"
              aria-label="Instagram"
            >
              <BsInstagram size={24} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-5"
              aria-label="Twitter"
            >
              <BsTwitter size={24} />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-5"
              aria-label="Facebook"
            >
              <BsFacebook size={24} />
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
