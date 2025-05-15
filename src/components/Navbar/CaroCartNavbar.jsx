import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ShoppingCart, Menu } from "lucide-react";
import "./CaroCartNavbar.css";

const CaroCartNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="md"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`shadow-sm navbar-custom ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          <ShoppingCart size={24} color="white" />
          CaroCart
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="nav-toggle-custom">
          <Menu color="white" size={24} />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto gap-md-3">
            {["Home", "Services", "About Us", "Contact", "Order Now"].map(
              (item) => (
                <Nav.Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="nav-link-custom"
                >
                  {item}
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CaroCartNavbar;
