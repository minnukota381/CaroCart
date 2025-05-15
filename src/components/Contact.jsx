import React, { useState } from "react";

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
    <div className="pt-5 pb-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>

        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <div className="card p-4 shadow-sm">
            {submitted && (
              <div className="alert alert-success" role="alert">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-success w-100">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="row mt-5 text-center g-4">
            <div className="col-md-4">
              <div className="card p-3">
                <div className="mb-2">
                  <i className="bi bi-telephone-fill fs-3 text-success"></i>
                </div>
                <h5>Phone</h5>
                <p>+91 12345 67890</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="mb-2">
                  <i className="bi bi-envelope-fill fs-3 text-success"></i>
                </div>
                <h5>Email</h5>
                <p>info@carocart.in</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="mb-2">
                  <i className="bi bi-geo-alt-fill fs-3 text-success"></i>
                </div>
                <h5>Address</h5>
                <p>123 Military Station, Vizag, Andhra Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
