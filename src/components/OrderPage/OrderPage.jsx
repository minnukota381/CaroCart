import React, { useState } from "react";
import {
  FaShoppingBasket,
  FaHamburger,
  FaPills,
  FaFileAlt,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";
import { MdDeliveryDining, MdLocationOn, MdPerson } from "react-icons/md";
import "./OrderPage.css";

const OrderPage = () => {
  const [orderType, setOrderType] = useState("groceries");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    orderDetails: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleTypeChange = (type) => {
    setOrderType(type);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = { ...formData, orderType };
    console.log("Order submitted:", orderData);
    setSubmitted(true);
    setFormData({ name: "", phone: "", address: "", orderDetails: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="order-page-container">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-success mb-3">
            Place Your Order
          </h2>
          <p className="lead text-muted">
            Fast, reliable delivery at your fingertips
          </p>
          <div className="divider mx-auto bg-success"></div>
        </div>

        <div className="card shadow-lg border-0 overflow-hidden">
          <div className="card-header bg-success text-white py-3">
            <h3 className="mb-0 text-center">
              <MdDeliveryDining className="me-2" />
              Delivery Request Form
            </h3>
          </div>

          <div className="card-body p-4 p-md-5">
            {submitted && (
              <div
                className="alert alert-success d-flex align-items-center"
                role="alert"
              >
                <FaCheckCircle className="me-2 fs-4" />
                <div>
                  <strong>Thank you for your order!</strong> We'll process it
                  immediately and contact you shortly.
                </div>
              </div>
            )}

            {/* Service Type Selector */}
            <div className="mb-5">
              <h5 className="mb-4 text-center fw-semibold">
                What would you like us to deliver?
              </h5>
              <div className="row g-3">
                {[
                  {
                    type: "groceries",
                    label: "Groceries",
                    icon: <FaShoppingBasket className="service-icon" />,
                    desc: "Fresh produce, pantry items & more",
                  },
                  {
                    type: "food",
                    label: "Food",
                    icon: <FaHamburger className="service-icon" />,
                    desc: "Restaurant meals & takeout",
                  },
                  {
                    type: "medicine",
                    label: "Medicine",
                    icon: <FaPills className="service-icon" />,
                    desc: "Prescriptions & pharmacy items",
                  },
                  {
                    type: "document",
                    label: "Documents",
                    icon: <FaFileAlt className="service-icon" />,
                    desc: "Important papers & parcels",
                  },
                ].map((item) => (
                  <div key={item.type} className="col-6 col-md-3">
                    <div
                      className={`service-card p-3 text-center rounded-3 cursor-pointer ${
                        orderType === item.type ? "active-service" : ""
                      }`}
                      onClick={() => handleTypeChange(item.type)}
                    >
                      <div className="icon-wrapper mb-3">{item.icon}</div>
                      <h6 className="mb-1 fw-semibold">{item.label}</h6>
                      <p className="small text-muted mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Form */}
            <form onSubmit={handleSubmit}>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control border-2"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name" className="text-muted">
                      <MdPerson className="me-2" />
                      Full Name
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control border-2"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="phone" className="text-muted">
                      <FaPhone className="me-2" />
                      Phone Number
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      id="address"
                      name="address"
                      className="form-control border-2"
                      style={{ height: "100px" }}
                      placeholder="Delivery Address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="address" className="text-muted">
                      <MdLocationOn className="me-2" />
                      Delivery Address
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      id="orderDetails"
                      name="orderDetails"
                      className="form-control border-2"
                      style={{ height: "150px" }}
                      placeholder="Order Details"
                      value={formData.orderDetails}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="orderDetails" className="text-muted">
                      {orderType === "groceries" ? (
                        <>
                          <FaShoppingBasket className="me-2" /> Grocery List
                        </>
                      ) : orderType === "food" ? (
                        <>
                          <FaHamburger className="me-2" /> Food Order Details
                        </>
                      ) : orderType === "medicine" ? (
                        <>
                          <FaPills className="me-2" /> Medicine Details
                        </>
                      ) : (
                        <>
                          <FaFileAlt className="me-2" /> Document Details
                        </>
                      )}
                    </label>
                  </div>
                  <small className="text-muted">
                    {orderType === "groceries"
                      ? "Please list all grocery items you need with quantities"
                      : orderType === "food"
                      ? "Include restaurant name, menu items, and special instructions"
                      : orderType === "medicine"
                      ? "Provide medicine names, dosage, and prescription details if available"
                      : "Specify document type, pickup/drop locations, and any special handling"}
                  </small>
                </div>

                <div className="col-12 text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg px-5 py-3 fw-bold"
                  >
                    <MdDeliveryDining className="me-2" />
                    Submit Delivery Request
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="card-footer bg-light text-center py-3">
            <p className="mb-0">
              Need urgent assistance? Contact our support at{" "}
              <a
                href="tel:+1234567890"
                className="text-success fw-semibold text-decoration-none"
              >
                <FaPhone className="me-1" />
                +1 234 567 890
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
