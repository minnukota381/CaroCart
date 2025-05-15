import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { ShoppingCart, Menu } from "lucide-react";
import {
  FaHome,
  FaConciergeBell,
  FaInfoCircle,
  FaPhoneAlt,
  FaShoppingBag,
  FaUserCircle,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./CaroCartNavbar.css";

const CaroCartNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const navItems = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "Services", icon: <FaConciergeBell />, path: "/services" },
    { label: "About Us", icon: <FaInfoCircle />, path: "/about" },
    { label: "Contact", icon: <FaPhoneAlt />, path: "/contact" },
    { label: "Order Now", icon: <FaShoppingBag />, path: "/order" },
  ];

  return (
    <Navbar
      expand="md"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`shadow-sm navbar-custom ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <ShoppingCart size={24} color="white" />
          CaroCart
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="nav-toggle-custom">
          <Menu color="white" size={24} />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto gap-md-3 align-items-center">
            {navItems.map(({ label, icon, path }) => (
              <Nav.Link
                key={label}
                as={Link}
                to={path}
                className="nav-link-custom d-flex align-items-center gap-2"
              >
                {icon}
                <span>{label}</span>
              </Nav.Link>
            ))}

            {/* Login / Sign Up Dropdown */}
            <NavDropdown
              title={
                <span className="d-flex align-items-center text-white gap-2">
                  <FaUserCircle />
                  Login / Sign Up
                </span>
              }
              id="login-dropdown"
              className="login-dropdown"
            >
              <NavDropdown.Item as={Link} to="/login">
                User Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register">
                User Sign Up
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/admin">
                Admin Login
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CaroCartNavbar;
