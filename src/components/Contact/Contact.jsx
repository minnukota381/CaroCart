import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">We'd love to hear from you</p>
          <div className="divider"></div>
        </div>

        <div className="contact-container">
          <div className="contact-form-card">
            {submitted && (
              <div className="success-message">
                <FaPaperPlane className="success-icon" />
                <span>
                  Thank you for your message! We'll get back to you soon.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <FaPaperPlane className="button-icon" />
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-cards">
            <div className="contact-info-card">
              <div className="info-icon">
                <FaPhoneAlt />
              </div>
              <h3>Phone</h3>
              <p>+91 12345 67890</p>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>info@carocart.in</p>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Address</h3>
              <p>123 Military Station, Vizag, Andhra Pradesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
