import React from "react";

const ShopByBrands = () => {
  const brands = [
    { name: "Apple", logo: "https://i.postimg.cc/cJ1Hp2Zw/Google-4283.png" },
    { name: "Samsung", logo: " https://i.postimg.cc/cJ1Hp2Zw/Google-4283.png" },
    { name: "OnePlus", logo: " https://i.postimg.cc/cJ1Hp2Zw/Google-4283.png" },
    { name: "Xiaomi", logo: " https://i.postimg.cc/cJ1Hp2Zw/Google-4283.png" },
    { name: "Google", logo: " https://i.postimg.cc/cJ1Hp2Zw/Google-4283.png" },
    { name: "Spigen", logo: " https://i.postimg.cc/cJ1Hp2Zw/Google-4283.png" },
    { name: "Acer", logo: " https://i.postimg.cc/cJ1Hp2Zw/Google-4283.png" },
    { name: "Thunderbolt", logo: " https://i.postimg.cc/cJ1Hp2Zw/Google-4283.png" },
    { name: "Dell", logo: " https://i.postimg.cc/cJ1Hp2Zw/Google-4283.png" },
    { name: "MSI", logo: " https://i.postimg.cc/cJ1Hp2Zw/Google-4283.png" },
    { name: "Boat", logo: " https://i.postimg.cc/cJ1Hp2Zw/Google-4283.png" },
    { name: "Titan", logo: " https://i.postimg.cc/cJ1Hp2Zw/Google-4283.png" },
    { name: "Pitaka", logo: " https://i.postimg.cc/cJ1Hp2Zw/Google-4283.png" },
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-black">
      <h2 className="text-center text-3xl font-semibold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent ">Shop By Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center">
        {brands.map((brand, index) => (
          <div key={index} className="flex flex-col items-center ">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-24 h-24 object-contain mb-4 text-white"
            />
            <span className=" text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">{brand.name}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="  text-white hover:underline text-lg">All Brands &gt;</button>
      </div>
    </div>
  );
};

export default ShopByBrands;
