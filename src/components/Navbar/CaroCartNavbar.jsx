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
  FaCartArrowDown,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GetUserLocation from "../Location/GetUserLocation";
import "./CaroCartNavbar.css";

const CaroCartNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [user, setUser] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem("carocartUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
    setExpanded(false);
  }, [location]);

  const handleNavClick = (e, path) => {
    if (path === "/cart") {
      localStorage.setItem("redirectAfterLogin", "/cart");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("carocartUser");
    setUser(null);
    navigate("/");
    window.location.reload();
  };

  const navItems = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "Services", icon: <FaConciergeBell />, path: "/services" },
    { label: "About Us", icon: <FaInfoCircle />, path: "/about" },
    { label: "Contact", icon: <FaPhoneAlt />, path: "/contact" },
    { label: "Order Now", icon: <FaShoppingBag />, path: "/order" },
    { label: "Cart", icon: <FaCartArrowDown />, path: "/cart" },
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`shadow-sm navbar-custom ${scrolled ? "scrolled" : ""}`}
    >
      <Container fluid="xxl">
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <div className="brand-content">
            <ShoppingCart size={24} color="white" />
            <span className="brand-name">CaroCart</span>
          </div>
          <div className="location-info">
            <GetUserLocation />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="nav-toggle-custom">
          <Menu color="white" size={24} />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <div className="navbar-content-wrapper">
            <Nav className="nav-items">
              {navItems.map(({ label, icon, path }) => (
                <Nav.Link
                  key={label}
                  as={Link}
                  to={path}
                  className="nav-link-custom"
                  onClick={(e) => handleNavClick(e, path)}
                >
                  <span className="nav-icon">{icon}</span>
                  <span className="nav-label">{label}</span>
                </Nav.Link>
              ))}
            </Nav>

            <div className="user-dropdown-wrapper">
              {user ? (
                <NavDropdown
                  title={
                    <span className="user-dropdown-title">
                      <FaUserCircle className="user-icon" />
                      <span className="user-text">
                        {user.name || "My Account"}
                      </span>
                    </span>
                  }
                  id="user-dropdown"
                  className="login-dropdown"
                  align="end"
                >
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/orders">
                    My Orders
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown
                  title={
                    <span className="user-dropdown-title">
                      <FaUserCircle className="user-icon" />
                      <span className="user-text">Login / Sign Up</span>
                    </span>
                  }
                  id="login-dropdown"
                  className="login-dropdown"
                  align="end"
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
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CaroCartNavbar;
