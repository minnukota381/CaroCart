import React from "react";
import {
  FaShoppingBasket,
  FaHamburger,
  FaPills,
  FaFileAlt,
  FaMedal,
  FaClock,
  FaCalendarAlt,
  FaLeaf,
} from "react-icons/fa";
import "./Services.css";

const ServiceCard = ({ icon, title, description, isAdditional = false }) => {
  return (
    <div className={`service-card ${isAdditional ? "additional-service" : ""}`}>
      <div className="service-icon-container">{icon}</div>
      <h3 className="service-title">{title}</h3>
      {description && <p className="service-description">{description}</p>}
      <div className="service-hover-effect"></div>
    </div>
  );
};

const Services = ({ fullPage = false }) => {
  return (
    <section className={`services-section ${fullPage ? "full-page" : ""}`}>
      <div className="container">
        {fullPage && (
          <div className="section-header">
            <h2 className="section-title">Our Premium Services</h2>
            <p className="section-subtitle">
              Delivering excellence at your doorstep
            </p>
            <div className="divider"></div>
          </div>
        )}

        <div className="services-grid">
          <ServiceCard
            icon={<FaShoppingBasket className="service-icon groceries-icon" />}
            title="Groceries Delivery"
            description="Fresh produce, pantry staples & household essentials"
          />

          <ServiceCard
            icon={<FaHamburger className="service-icon food-icon" />}
            title="Food Delivery"
            description="From your favorite local restaurants"
          />

          <ServiceCard
            icon={<FaPills className="service-icon medicine-icon" />}
            title="Medicine Delivery"
            description="Prescriptions & pharmacy items"
          />

          <ServiceCard
            icon={<FaFileAlt className="service-icon document-icon" />}
            title="Document Services"
            description="Secure pickup & delivery"
          />
        </div>

        {fullPage && (
          <div className="additional-services">
            <div className="section-header">
              <h3 className="section-subtitle">Value-Added Services</h3>
              <div className="small-divider"></div>
            </div>

            <div className="additional-services-grid">
              <ServiceCard
                icon={<FaMedal className="service-icon discount-icon" />}
                title="Military Discounts"
                description="Exclusive savings for service members"
                isAdditional={true}
              />

              <ServiceCard
                icon={<FaClock className="service-icon express-icon" />}
                title="Express Delivery"
                description="Urgent deliveries within 2 hours"
                isAdditional={true}
              />

              <ServiceCard
                icon={
                  <FaCalendarAlt className="service-icon subscription-icon" />
                }
                title="Subscription Plans"
                description="Regular deliveries on your schedule"
                isAdditional={true}
              />

              <ServiceCard
                icon={<FaLeaf className="service-icon eco-icon" />}
                title="Eco Delivery"
                description="Sustainable packaging options"
                isAdditional={true}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
