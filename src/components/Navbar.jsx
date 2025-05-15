import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed-top ${
        scrolled ? "bg-success shadow" : "bg-success bg-opacity-75"
      } transition`}
      style={{ transition: "background-color 0.3s ease" }}
    >
      <div className="container">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center text-white fw-bold"
        >
          {/* SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="me-2"
            viewBox="0 0 24 24"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          CaroCart
        </Link>

        {/* Desktop Nav */}
        <div className="d-none d-md-flex ms-auto gap-4">
          <Link to="/" className="nav-link text-white fw-semibold">
            Home
          </Link>
          <Link to="/services" className="nav-link text-white fw-semibold">
            Services
          </Link>
          <Link to="/about" className="nav-link text-white fw-semibold">
            About Us
          </Link>
          <Link to="/contact" className="nav-link text-white fw-semibold">
            Contact
          </Link>
          <Link to="/order" className="nav-link text-white fw-semibold">
            Order Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="btn btn-link d-md-none text-white p-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-success bg-opacity-100 shadow">
          <div className="container d-flex flex-column py-3 gap-3">
            {["/", "/services", "/about", "/contact", "/order"].map(
              (path, i) => {
                const labels = [
                  "Home",
                  "Services",
                  "About Us",
                  "Contact",
                  "Order Now",
                ];
                return (
                  <Link
                    key={path}
                    to={path}
                    className="nav-link text-white fw-semibold"
                    onClick={() => setMenuOpen(false)}
                  >
                    {labels[i]}
                  </Link>
                );
              }
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
