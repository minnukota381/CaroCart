import React from "react";

const Step = ({ number, title, description, icon }) => {
  return (
    <div className="d-flex flex-column align-items-center text-center px-3">
      <div
        className="bg-light rounded-circle d-flex align-items-center justify-content-center mb-3"
        style={{ width: "80px", height: "80px" }}
      >
        {icon || <span className="fs-4 fw-bold text-success">{number}</span>}
      </div>
      <h5 className="fw-medium text-dark mb-2">{title}</h5>
      {description && <p className="text-muted">{description}</p>}
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold text-dark mb-5">How It Works</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 d-flex justify-content-center">
            <Step
              number="1"
              title="Place Order"
              description="via WhatsApp or Call"
              icon={
                <i className="bi bi-chat-dots fs-3 text-success"></i> // Bootstrap Icons
              }
            />
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <Step
              number="2"
              title="We Pick & Pack"
              icon={<i className="bi bi-box-seam fs-3 text-success"></i>}
            />
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <Step
              number="3"
              title="Quick & Safe Delivery"
              icon={<i className="bi bi-truck fs-3 text-success"></i>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
