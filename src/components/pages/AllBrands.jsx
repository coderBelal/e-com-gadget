import React from 'react';

const AllBrands = () => {
  const brands = [
    // Phone Brands
    'Apple', 'Samsung', 'Xiaomi', 'Oppo', 'Vivo', 'OnePlus', 'Realme', 'Nokia',
    'Motorola', 'Infinix', 'Huawei', 'LG', 'Sony', 'Lenovo', 'Asus', 'Google Pixel',
    'HTC', 'Alcatel', 'ZTE',
    // Laptop Brands
    'Dell', 'HP', 'Lenovo', 'Acer', 'Asus', 'MSI', 'Apple MacBook', 'Razer',
    'Samsung', 'Microsoft Surface', 'Toshiba', 'LG Gram', 'Huawei MateBook', 'Alienware'
  ];

  return (
    <div className="p-4 mt-14">
    <h1 className="text-xl font-bold mb-6 text-center">All Brands</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {brands.map((brand, index) => (
        <div
          key={index}
          data-aos="zoom-out"
          className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
        >
          <div className="text-center text-lg font-semibold gradient-text">
            {brand}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default AllBrands;
