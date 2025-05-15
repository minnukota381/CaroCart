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
  FaShieldAlt,
  FaHeartbeat,
  FaCarAlt,
  FaUserShield,
} from "react-icons/fa";
import "./Services.css";

const ServiceCard = ({
  icon,
  title,
  description,
  isAdditional = false,
  isSpecial = false,
}) => {
  return (
    <div
      className={`service-card ${isAdditional ? "additional-service" : ""} ${
        isSpecial ? "special-service" : ""
      }`}
    >
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
          <>
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

            {/* Special Services Section */}
            <div className="special-services-intro">
              <FaShieldAlt className="safety-icon" />
              <h3 className="safety-motto">
                "We always look towards your safety & security"
              </h3>
            </div>

            <div className="special-services-section">
              <div className="special-service">
                <div className="special-service-header">
                  <FaHeartbeat className="special-service-icon health-icon" />
                  <h3 className="special-service-title">CARO'S HEALTH</h3>
                </div>
                <div className="special-service-content">
                  <p>
                    Here, We provide you the Best medicare as per your
                    requirements. Here, You can simply book your slot (OPD) by
                    simply sitting in your house.
                  </p>
                  <p>
                    We tie up with highly qualified doctors. They will assist
                    you in your home. Also you can set a reminder for monthly
                    checkups.
                  </p>
                  <p className="example-text">
                    <strong>Example:</strong> If your mother/father having BP or
                    Sugar-Meanwhile you are working in other city. Monthly
                    checkup are Mandatory. "You have to come to your home twice
                    to do checkups. But, Now-Onwards, "Caro is here to do all
                    your parents checkups and health condition"
                  </p>
                  <p>
                    You Simply Take Subscription for checkups, and Book your
                    concern doctors. "Caro" doctors will come to your house and
                    assist your parents without your intervention.
                  </p>
                  <p className="priority-text">
                    <FaHeartbeat className="priority-icon" /> "YOUR HEALTH OUR
                    PRIORITY"
                  </p>
                </div>
              </div>

              <div className="special-service">
                <div className="special-service-header">
                  <FaCarAlt className="special-service-icon drive-icon" />
                  <h3 className="special-service-title">CARO'S SAFE DRIVE</h3>
                </div>
                <div className="special-service-content">
                  <p>
                    Here, We provide Safe & Security to you / your
                    child/siblings.
                  </p>
                  <p className="example-text">
                    <strong>Example:</strong> If your sister/GF are stuck in the
                    office for Night shift They are struggling to reach your
                    home. But you are unable to reach them, you are busy with
                    other work. then NO PROBLEM.
                  </p>
                  <p>
                    Caro is here to drop your Sis/GF to your concern Place. You
                    Simply book a ride through our site any time. Our team will
                    Engage in that work. We provide Safety and Security.
                  </p>
                  <p className="priority-text">
                    <FaUserShield className="priority-icon" /> "YOUR SAFETY OUR
                    PRIORITY"
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Services;
