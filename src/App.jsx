import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CaroCartNavbar from "./components/Navbar/CaroCartNavbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import OrderPage from "./components/OrderPage/OrderPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <CaroCartNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <HowItWorks />
                <AboutUs />
              </>
            }
          />
          <Route path="/services" element={<Services fullPage={true} />} />
          <Route path="/about" element={<AboutUs fullPage={true} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
