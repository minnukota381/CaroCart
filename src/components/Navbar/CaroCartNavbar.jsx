import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ShoppingCart, Menu } from "lucide-react";

const CaroCartNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const oliveGreen = "#556B2F";
  const creamBackground = "#f5f2e9";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      bg="none"
      expand="md"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="shadow-sm"
      style={{
        backgroundColor: scrolled ? oliveGreen : oliveGreen,
        transition: "background-color 0.3s ease",
      }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center text-white fw-bold"
        >
          <ShoppingCart className="me-2" size={24} color="white" />
          CaroCart
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0"
          style={{ boxShadow: "none" }}
        >
          <Menu color="white" size={24} />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto gap-md-3">
            {["Home", "Services", "About Us", "Contact", "Order Now"].map(
              (item) => (
                <Nav.Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white fw-semibold"
                  style={{
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#e2dbc9")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
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
