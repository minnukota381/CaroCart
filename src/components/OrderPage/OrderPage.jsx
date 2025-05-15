import React, { useState } from "react";
import "./OrderPage.css"; // External CSS

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
    <div className="order-page-container py-5">
      <div className="container">
        <h2 className="text-center mb-5">Place Your Order</h2>
        <div className="card shadow p-4">
          {submitted && (
            <div className="alert alert-success" role="alert">
              Thank you for your order! We'll process it immediately and get
              back to you.
            </div>
          )}

          {/* Service Type Selector */}
          <div className="mb-4">
            <h5 className="mb-3">Select Service Type</h5>
            <div className="row g-3">
              {[
                { type: "groceries", label: "Groceries Delivery", icon: "🛒" },
                { type: "food", label: "Food Delivery", icon: "🍔" },
                { type: "medicine", label: "Medicine Delivery", icon: "💊" },
                {
                  type: "document",
                  label: "Document Pickup & Drop",
                  icon: "📄",
                },
              ].map((item) => (
                <div key={item.type} className="col-6 col-md-3">
                  <button
                    type="button"
                    className={`w-100 btn btn-outline-secondary service-btn ${
                      orderType === item.type ? "active-service" : ""
                    }`}
                    onClick={() => handleTypeChange(item.type)}
                  >
                    <div className="fs-3">{item.icon}</div>
                    <div className="small">{item.label}</div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Form */}
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Delivery Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="form-control"
                  rows="2"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="col-12">
                <label htmlFor="orderDetails" className="form-label">
                  {orderType === "groceries"
                    ? "List of groceries"
                    : orderType === "food"
                    ? "Food items"
                    : orderType === "medicine"
                    ? "Medicine details"
                    : "Document details and instructions"}
                </label>
                <textarea
                  id="orderDetails"
                  name="orderDetails"
                  className="form-control"
                  rows="4"
                  value={formData.orderDetails}
                  onChange={handleChange}
                  placeholder={
                    orderType === "groceries"
                      ? "Please list all groceries items you need..."
                      : orderType === "food"
                      ? "Please specify your food order details..."
                      : orderType === "medicine"
                      ? "Please provide medicine names, prescriptions if available..."
                      : "Please provide document type, pickup and drop locations..."
                  }
                  required
                ></textarea>
              </div>

              <div className="col-12 text-center">
                <button type="submit" className="btn btn-success px-5">
                  Submit Order
                </button>
              </div>
            </div>
          </form>

          <div className="text-center text-muted mt-4">
            Need urgent assistance? Contact our support at{" "}
            <a
              href="tel:+1234567890"
              className="text-decoration-none text-success"
            >
              +1 234 567 890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
