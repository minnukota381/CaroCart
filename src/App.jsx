import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import CaroCartNavbar from "./components/Navbar/CaroCartNavbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import OrderPage from "./components/OrderPage/OrderPage";

import UserLogin from "./components/Auth/UserLogin";
import UserRegister from "./components/Auth/UserRegister";

import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";

import OurProducts from "./components/OurProducts/OurProducts";

import GetUserLocation from "./components/Location/GetUserLocation"; 


// Protected route component for admin pages
const RequireAdminAuth = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/admin/login" replace />;
};

function App() {
  return (
    <Router>
      <div className="app">
        <CaroCartNavbar />

        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <GetUserLocation />
                <Services />
                <OurProducts />
                <HowItWorks />
                <AboutUs />
              </>
            }
          />
          <Route path="/services" element={<Services fullPage={true} />} />
          <Route path="/about" element={<AboutUs fullPage={true} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<OrderPage />} />

          {/* User Authentication */}
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />

          {/* Admin Authentication */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protected Admin Dashboard */}
          <Route
            path="/admin/dashboard"
            element={
              <RequireAdminAuth>
                <AdminDashboard />
              </RequireAdminAuth>
            }
          />

          {/* Fallback route for unknown URLs */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
