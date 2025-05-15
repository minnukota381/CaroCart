import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-light rounded p-4 text-center d-flex flex-column align-items-center">
      <div
        className="bg-success bg-opacity-10 rounded-circle mb-3 d-flex justify-content-center align-items-center"
        style={{ width: "56px", height: "56px" }}
      >
        {icon}
      </div>
      <h5 className="text-dark fw-semibold mb-2">{title}</h5>
      {description && <p className="text-secondary">{description}</p>}
    </div>
  );
};

const Services = ({ fullPage = false }) => {
  return (
    <div className={`${fullPage ? "pt-5" : ""} bg-light py-5`}>
      <div className="container">
        {fullPage && (
          <h2 className="text-center fw-bold text-dark mb-5">Our Services</h2>
        )}

        <div className="row row-cols-2 row-cols-md-4 g-3">
          <div>
            <ServiceCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="var(--bs-success)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 11V7a4 4 0 00-8 0v4" />
                  <path d="M5 9h14l1 12H4L5 9z" />
                </svg>
              }
              title="Groceries Delivery"
            />
          </div>

          <div>
            <ServiceCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="var(--bs-success)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 8v13" />
                  <path d="M12 6a2 2 0 112 2h-2z" />
                  <path d="M5 12h14" />
                  <path d="M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              }
              title="Food Delivery"
            />
          </div>

          <div>
            <ServiceCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="var(--bs-success)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
                  <path d="M14 21h-4" />
                  <path d="M9 7h1m-1 4h1m4-4h1m-1 4h1" />
                  <path d="M9 21v-5a1 1 0 011-1h2a1 1 0 011 1v5" />
                </svg>
              }
              title="Medicine Delivery"
            />
          </div>

          <div>
            <ServiceCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="var(--bs-success)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12h6m-6 4h6" />
                  <path d="M18 21H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              title="Document Pickup & Drop"
            />
          </div>
        </div>

        {fullPage && (
          <div className="mt-5">
            <h3 className="text-success fw-semibold mb-4">
              Additional Services
            </h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="bg-white shadow-sm rounded p-4">
                <h4 className="text-success fw-semibold mb-2">
                  Special Military Discounts
                </h4>
                <p className="text-secondary">
                  We offer exclusive discounts for military personnel and their
                  families.
                </p>
              </div>
              <div className="bg-white shadow-sm rounded p-4">
                <h4 className="text-success fw-semibold mb-2">
                  Express Emergency Delivery
                </h4>
                <p className="text-secondary">
                  Urgent deliveries within 2 hours for emergency situations.
                </p>
              </div>
              <div className="bg-white shadow-sm rounded p-4">
                <h4 className="text-success fw-semibold mb-2">
                  Monthly Subscription Plans
                </h4>
                <p className="text-secondary">
                  Regular deliveries with custom schedules and preferred rates.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
