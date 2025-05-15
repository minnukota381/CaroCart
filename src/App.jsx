import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import OrderPage from "./components/OrderPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
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
