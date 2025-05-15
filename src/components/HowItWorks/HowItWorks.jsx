import React from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaBoxOpen,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";
import "./HowItWorks.css";

const Step = ({ number, title, description, icon, isLast }) => {
  return (
    <div className="step">
      <div className="step-content">
        <div className="step-icon-container">
          <div className="step-number">{number}</div>
          <div className="step-icon">{icon}</div>
        </div>
        <h3 className="step-title">{title}</h3>
        {description && <p className="step-description">{description}</p>}
      </div>
      {!isLast && (
        <div className="step-connector">
          <div className="step-line"></div>
          <div className="step-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Get your essentials delivered in just 3 simple steps
          </p>
          <div className="divider"></div>
        </div>

        <div className="steps-container">
          <Step
            number="1"
            title="Place Order"
            description="Via WhatsApp or Phone Call"
            icon={
              <div className="dual-icon">
                <FaWhatsapp className="whatsapp-icon" />
                <FaPhoneAlt className="phone-icon" />
              </div>
            }
          />

          <Step
            number="2"
            title="We Pick & Pack"
            description="Carefully selected items"
            icon={<FaBoxOpen className="box-icon" />}
          />

          <Step
            number="3"
            title="Fast Delivery"
            description="At your doorstep in no time"
            icon={<FaTruck className="truck-icon" />}
            isLast={true}
          />
        </div>

        <div className="guarantee-badge">
          <FaCheckCircle className="check-icon" />
          <span>100% Satisfaction Guaranteed</span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
