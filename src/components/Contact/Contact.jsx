import React, { useState } from "react";

const oliveGreen = "#4B5320";

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
        <h2 className="text-center mb-5" style={{ color: oliveGreen }}>
          Contact Us
        </h2>

        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <div className="card p-4 shadow-sm">
            {submitted && (
              <div
                className="alert"
                role="alert"
                style={{ backgroundColor: oliveGreen, color: "white" }}
              >
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label
                    htmlFor="name"
                    className="form-label"
                    style={{ color: oliveGreen }}
                  >
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
                  <label
                    htmlFor="email"
                    className="form-label"
                    style={{ color: oliveGreen }}
                  >
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
                  <label
                    htmlFor="phone"
                    className="form-label"
                    style={{ color: oliveGreen }}
                  >
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
                  <label
                    htmlFor="message"
                    className="form-label"
                    style={{ color: oliveGreen }}
                  >
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
                  <button
                    type="submit"
                    className="btn w-100"
                    style={{
                      backgroundColor: oliveGreen,
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="row mt-5 text-center g-4">
            {[
              {
                icon: "bi-telephone-fill",
                label: "Phone",
                text: "+91 12345 67890",
              },
              {
                icon: "bi-envelope-fill",
                label: "Email",
                text: "info@carocart.in",
              },
              {
                icon: "bi-geo-alt-fill",
                label: "Address",
                text: "123 Military Station, Vizag, Andhra Pradesh",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="col-md-4">
                <div className="card p-3">
                  <div className="mb-2">
                    <i
                      className={`bi ${icon} fs-3`}
                      style={{ color: oliveGreen }}
                    ></i>
                  </div>
                  <h5 style={{ color: oliveGreen }}>{label}</h5>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
