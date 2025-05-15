import React, { useState } from "react";

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
    // Here you would typically send the data to your backend
    const orderData = {
      ...formData,
      orderType,
    };

    console.log("Order submitted:", orderData);

    // Show success message
    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      phone: "",
      address: "",
      orderDetails: "",
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="pt-24 py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Place Your Order
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you for your order! We'll process it immediately and get
                back to you.
              </div>
            ) : null}

            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Select Service Type
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button
                  className={`p-4 flex flex-col items-center justify-center rounded-lg border-2 ${
                    orderType === "groceries"
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleTypeChange("groceries")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-8 w-8 ${
                      orderType === "groceries"
                        ? "text-green-800"
                        : "text-gray-500"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span
                    className={`mt-2 ${
                      orderType === "groceries"
                        ? "text-green-800"
                        : "text-gray-600"
                    }`}
                  >
                    Groceries Delivery
                  </span>
                </button>

                <button
                  className={`p-4 flex flex-col items-center justify-center rounded-lg border-2 ${
                    orderType === "food"
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleTypeChange("food")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-8 w-8 ${
                      orderType === "food" ? "text-green-800" : "text-gray-500"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                  <span
                    className={`mt-2 ${
                      orderType === "food" ? "text-green-800" : "text-gray-600"
                    }`}
                  >
                    Food Delivery
                  </span>
                </button>

                <button
                  className={`p-4 flex flex-col items-center justify-center rounded-lg border-2 ${
                    orderType === "medicine"
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleTypeChange("medicine")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-8 w-8 ${
                      orderType === "medicine"
                        ? "text-green-800"
                        : "text-gray-500"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span
                    className={`mt-2 ${
                      orderType === "medicine"
                        ? "text-green-800"
                        : "text-gray-600"
                    }`}
                  >
                    Medicine Delivery
                  </span>
                </button>

                <button
                  className={`p-4 flex flex-col items-center justify-center rounded-lg border-2 ${
                    orderType === "document"
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleTypeChange("document")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-8 w-8 ${
                      orderType === "document"
                        ? "text-green-800"
                        : "text-gray-500"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span
                    className={`mt-2 ${
                      orderType === "document"
                        ? "text-green-800"
                        : "text-gray-600"
                    }`}
                  >
                    Document Pickup & Drop
                  </span>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2" htmlFor="address">
                    Delivery Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="orderDetails"
                  >
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
                    value={formData.orderDetails}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                    placeholder={
                      orderType === "groceries"
                        ? "Please list all groceries items you need..."
                        : orderType === "food"
                        ? "Please specify your food order details..."
                        : orderType === "medicine"
                        ? "Please provide medicine names, prescriptions if available..."
                        : "Please provide document type, pickup and drop locations..."
                    }
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="bg-green-800 text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-300"
                  >
                    Submit Order
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-medium text-gray-800 mb-4">
                Order via WhatsApp
              </h4>
              <p className="text-gray-600 mb-4">
                You can also place your order directly via WhatsApp:
              </p>
              <a
                href="https://wa.me/912345678900"
                className="inline-flex items-center bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
