import React, { useState } from "react";

const PreOrderForm = () => {
  const [formData, setFormData] = useState({
    productInfo: "",
    image: null,
    name: "",
    phone: "",
    email: "",
    address: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md p-8 rounded shadow-lg"
      data-aos="zoom-in" // Applying zoom-in animation to the form
    >
      <h2
        className="text-center gradient-text font-bold text-xl mb-4"
        data-aos="fade-up" // Applying fade-up animation to the title
      >
        Looking For Something Different ??
      </h2>
      <p
        className="text-center text-white mb-6"
        data-aos="fade-up"
        data-aos-delay="200" // Delayed fade-up animation for description
      >
        Put Your Information in The Box...
      </p>

      <div className="mb-4" data-aos="zoom-in-up"> {/* Zoom in-up for input section */}
        <label
          htmlFor="productInfo"
          className="block gradient-text font-semibold mb-1"
        >
          Product Information
        </label>
        <input
          type="text"
          id="productInfo"
          name="productInfo"
          placeholder="Enter Product Name/ URL"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={formData.productInfo}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4" data-aos="zoom-in-up">
        <label
          htmlFor="image"
          className="block gradient-text font-semibold mb-1"
        >
          Insert Image
        </label>
        <input
          type="file"
          id="image"
          className="w-full text-gray-600"
          onChange={handleFileChange}
        />
      </div>

      <div className="mb-4" data-aos="zoom-in-up">
        <label
          htmlFor="name"
          className="block gradient-text font-semibold mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4 flex gap-4" data-aos="zoom-in-up">
        <div className="w-1/2">
          <label
            htmlFor="phone"
            className="bloc gradient-text font-semibold mb-1"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter Phone No"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="w-1/2">
          <label
            htmlFor="email"
            className="block gradient-text font-semibold mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email Address"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-4" data-aos="zoom-in-up">
        <label
          htmlFor="address"
          className="block gradient-text font-semibold mb-1"
        >
          Address
        </label>
        <textarea
          id="address"
          name="address"
          rows="3"
          placeholder="Enter Address"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="mb-4 flex items-center" data-aos="fade-up">
        <input
          type="checkbox"
          id="termsAccepted"
          name="termsAccepted"
          className="mr-2"
          checked={formData.termsAccepted}
          onChange={handleChange}
        />
        <label
          htmlFor="termsAccepted"
          className="text-white text-sm select-none"
        >
          I hereby accept the terms and conditions of pre-order and read the
          pre-order terms and conditions carefully.
        </label>
      </div>
      <button
        className="cursor-pointer py-2 px-4 block mt-6 bg-purple-600 text-white font-bold w-full text-center rounded"
        data-aos="zoom-in" // Applying zoom-in animation to the submit button
      >
        Submit
      </button>
    </form>
  </div>
  );
};

export default PreOrderForm;
