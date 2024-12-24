import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const ShopByBrands = () => {
  const brands = [
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { name: "OnePlus", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/OnePlus_logo.svg" },
    { name: "Xiaomi", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Spigen", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Spigen_logo.svg" },
    { name: "Acer", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Acer_2011.svg" },
    { name: "Thunderbolt", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Thunderbolt_logo.svg" },
    { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
    { name: "MSI", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/MSI_Logo.svg" },
    { name: "Boat", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Boat_logo.svg" },
    { name: "Titan", logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Titan_Logo.svg" },
    { name: "Pitaka", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Pitaka_logo.svg" },
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <h2 className="text-center mb-10 lg:text-3xl text-lg font-bold gradient-text">Shop By Brands</h2>

      {/* Marquee Component */}
      <Marquee gradient={false} speed={50}>
        {brands.map((brand, index) => (
          <div key={index} className="flex flex-col items-center mx-6">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-24 h-24 object-contain mb-4"
            />
            <span className="text-lg text-white">{brand.name}</span>
          </div>
        ))}
      </Marquee>

      <div className="text-center mt-6">
        <Link to="/all-brand">
          <button className="text-white hover:underline text-lg">All Brands &gt;</button>
        </Link>
      </div>
    </div>
  );
};

export default ShopByBrands;
