import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const OfferCards = () => {
  const offers = [
    {
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
      title: "Exclusive Deal on iPhone 16 Series",
      description:
        "Be the first to own the latest Apple product! Ready stock available now for the iPhone 16 Series. Enjoy exclusive offers and limited-time deals.",
      date: "01 December, 2024 - 31 December, 2024",
      phone: "+8809613048048",
    },
    {
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
      title: "Get the latest Samsung smartphones at unbeatable prices",
      description:
        "Upgrade your mobile experience with Samsung's flagship smartphones, now available at discounted rates!",
      date: "01 December, 2024 - 31 December, 2024",
      phone: "+8809613048048",
    },
    {
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
      title: "Capture Life's Moments with Pixel Phones - Best Price!",
      description:
        "From stunning low-light shots to incredible portrait mode, these smartphones offer exceptional camera capabilities.",
      date: "01 December, 2024 - 31 December, 2024",
      phone: "+8809613048048",
    },
  ];

  return (
    <div className="grid grid-cols-1 mt-0 lg:mt-48 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {offers.map((offer, index) => (
      <div
        key={index}
        className="max-w-sm mt-28 rounded-lg shadow-lg border hover:shadow-2xl transition duration-300"
        data-aos="fade-up" // Add AOS animation here
      >
        {/* Image Section */}
        <img
          src={offer.image}
          alt={offer.title}
          className="rounded-t-lg w-full h-48 object-cover"
        />
        {/* Content Section */}
        <div className="p-4">
          <div className="flex items-center text-sm text-white mb-2">
            <FaCalendarAlt className="mr-2" />
            {offer.date}
          </div>
          <h2 className="text-lg font-semibold text-white">{offer.title}</h2>
          <p className="text-sm text-white mt-2">{offer.description}</p>
          <p className="text-sm text-white mt-2">
            Call: <span className="font-medium">{offer.phone}</span>
          </p>
          {/* Button */}
          <button className="mt-4 w-full gradient-bg text-white py-2 rounded-lg font-medium">
            View Details
          </button>
        </div>
      </div>
    ))}
  </div>
  );
};

export default OfferCards;
