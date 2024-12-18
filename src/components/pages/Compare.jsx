import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Compare = () => {
 
  const [searchQueries, setSearchQueries] = useState(["", ""]);
  const [filteredProducts, setFilteredProducts] = useState([[], []]);
  const [selectedProducts, setSelectedProducts] = useState([null, null]);
  const products = [
    { 
      id: 1, 
      name: "MacBook Air M1", 
      details: "Space Gray | 13-inch | RAM: 8GB | ROM: 256GB | M1 Chip", 
      brand: "Apple", 
      ram: "8GB", 
      rom: "256GB", 
      camera: "13MP"
    },
    { 
      id: 2, 
      name: "iPad Mini 7", 
      details: "8.3-inch | RAM: 4GB | ROM: 64GB | A17 Pro Chipset | Wi-Fi Only", 
      brand: "Apple", 
      ram: "4GB", 
      rom: "64GB", 
      camera: "8MP"
    },
    { 
      id: 3, 
      name: "Apple AirPods 2", 
      details: "Wireless Charging Case | Bluetooth 5.0", 
      brand: "Apple", 
      ram: "N/A", 
      rom: "N/A", 
      camera: "N/A"
    },
    { 
      id: 4, 
      name: "Samsung Galaxy S21", 
      details: "6.2-inch | RAM: 8GB | ROM: 128GB | Camera: 48MP | Exynos 2100", 
      brand: "Samsung", 
      ram: "8GB", 
      rom: "128GB", 
      camera: "48MP"
    },
    { 
      id: 5, 
      name: "Samsung Galaxy Z Fold 4", 
      details: "7.6-inch | RAM: 12GB | ROM: 256GB | Snapdragon 8 Gen 1 | Foldable Display", 
      brand: "Samsung", 
      ram: "12GB", 
      rom: "256GB", 
      camera: "16MP"
    },
    { 
      id: 6, 
      name: "MacBook Pro M2", 
      details: "Space Gray | 14-inch | RAM: 16GB | ROM: 512GB | M2 Chip", 
      brand: "Apple", 
      ram: "16GB", 
      rom: "512GB", 
      camera: "1080p FaceTime HD"
    },
    { 
      id: 7, 
      name: "Apple Watch Ultra", 
      details: "Titanium Case | GPS + Cellular | 49mm", 
      brand: "Apple", 
      ram: "N/A", 
      rom: "N/A", 
      camera: "N/A"
    },
    { 
      id: 8, 
      name: "OnePlus 11 5G", 
      details: "6.7-inch | RAM: 16GB | ROM: 256GB | Snapdragon 8 Gen 2 | 100W Charging", 
      brand: "OnePlus", 
      ram: "16GB", 
      rom: "256GB", 
      camera: "50MP"
    },
    { 
      id: 9, 
      name: "Sony WH-1000XM5", 
      details: "Noise Cancelling | 30-Hour Battery | Bluetooth 5.3", 
      brand: "Sony", 
      ram: "N/A", 
      rom: "N/A", 
      camera: "N/A"
    },
    { 
      id: 10, 
      name: "Canon EOS R6 Mark II", 
      details: "24.2MP | 4K 60FPS Video | Mirrorless Camera", 
      brand: "Canon", 
      ram: "N/A", 
      rom: "N/A", 
      camera: "24.2MP"
    },
    // Additional products
    { 
      id: 11, 
      name: "Google Pixel 8 Pro", 
      details: "6.7-inch | RAM: 12GB | ROM: 256GB | Google Tensor G3 | 50MP Camera", 
      brand: "Google", 
      ram: "12GB", 
      rom: "256GB", 
      camera: "50MP"
    },
    { 
      id: 12, 
      name: "Xiaomi Mi 13", 
      details: "6.36-inch | RAM: 8GB | ROM: 128GB | Snapdragon 8 Gen 2 | 50MP Camera", 
      brand: "Xiaomi", 
      ram: "8GB", 
      rom: "128GB", 
      camera: "50MP"
    },
    { 
      id: 13, 
      name: "LG OLED C1", 
      details: "55-inch | 4K OLED | WebOS | HDMI 2.1", 
      brand: "LG", 
      ram: "N/A", 
      rom: "N/A", 
      camera: "N/A"
    },
    { 
      id: 14, 
      name: "Sony PlayStation 5", 
      details: "8K Support | 825GB SSD | DualSense Wireless Controller", 
      brand: "Sony", 
      ram: "16GB", 
      rom: "825GB SSD", 
      camera: "N/A"
    },
    { 
      id: 15, 
      name: "Microsoft Surface Laptop 5", 
      details: "13.5-inch | RAM: 8GB | ROM: 256GB | Intel Core i7 | PixelSense Display", 
      brand: "Microsoft", 
      ram: "8GB", 
      rom: "256GB", 
      camera: "720p HD"
    },
    { 
      id: 16, 
      name: "Nintendo Switch OLED", 
      details: "7-inch OLED Display | 64GB Storage | Handheld/Console Mode", 
      brand: "Nintendo", 
      ram: "4GB", 
      rom: "64GB", 
      camera: "N/A"
    },
    { 
      id: 17, 
      name: "Dell XPS 13", 
      details: "13.4-inch | RAM: 8GB | ROM: 512GB | Intel Core i7", 
      brand: "Dell", 
      ram: "8GB", 
      rom: "512GB", 
      camera: "720p"
    },
    { 
      id: 18, 
      name: "Bose QuietComfort 45", 
      details: "Noise Cancelling | 24-Hour Battery | Bluetooth 5.1", 
      brand: "Bose", 
      ram: "N/A", 
      rom: "N/A", 
      camera: "N/A"
    },
    { 
      id: 19, 
      name: "Acer Predator Helios 300", 
      details: "15.6-inch | RAM: 16GB | ROM: 512GB SSD | Intel i7 | NVIDIA GeForce RTX 3060", 
      brand: "Acer", 
      ram: "16GB", 
      rom: "512GB SSD", 
      camera: "N/A"
    },
    { 
      id: 20, 
      name: "HP Spectre x360", 
      details: "13.3-inch | RAM: 16GB | ROM: 512GB | Intel Core i7 | Convertible Laptop", 
      brand: "HP", 
      ram: "16GB", 
      rom: "512GB", 
      camera: "720p"
    }
  ];
  
  
  const handleSearch = (query, index) => {
    const updatedSearchQueries = [...searchQueries];
    updatedSearchQueries[index] = query;
    setSearchQueries(updatedSearchQueries);

    const results = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    const updatedFilteredProducts = [...filteredProducts];
    updatedFilteredProducts[index] = results;
    setFilteredProducts(updatedFilteredProducts);
  };

 
  const handleSelectProduct = (product, index) => {
    const updatedSelectedProducts = [...selectedProducts];
    updatedSelectedProducts[index] = product;
    setSelectedProducts(updatedSelectedProducts);

    const updatedSearchQueries = [...searchQueries];
    updatedSearchQueries[index] = "";
    setSearchQueries(updatedSearchQueries);

    const updatedFilteredProducts = [...filteredProducts];
    updatedFilteredProducts[index] = [];
    setFilteredProducts(updatedFilteredProducts);
  };
 
  const handleRemoveProduct = (index) => {
    const updatedSelectedProducts = [...selectedProducts];
    updatedSelectedProducts[index] = null;
    setSelectedProducts(updatedSelectedProducts);
  };

  return (
    <div
    className="max-w-6xl border border-gray-200 shadow-lg bg-[#0F1012] rounded-xl lg:mt-32 mx-auto lg:my-10 lg:p-8"
    data-aos="fade-up"
  >
    <div
      className="text-center mb-10 mt-32 lg:mt-0 md:mt-0"
      data-aos="zoom-in"
    >
      <h2 className="text-3xl font-extrabold gradient-text mb-2">
        Product Comparison
      </h2>
      <p className="text-white text-lg">
        Find and select products to see their differences and similarities.
      </p>
    </div>

    <div className="flex justify-between" data-aos="fade-right">
      {[0, 1].map((index) => (
        <div key={index} className="relative lg:w-1/2 md:w-1/2 px-2">
          <input
            type="text"
            value={searchQueries[index]}
            onChange={(e) => handleSearch(e.target.value, index)}
            placeholder="Search and Select Product"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm transition-all duration-300"
          />
          <FaSearch className="absolute cursor-pointer top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          {filteredProducts[index].length > 0 && (
            <ul className="absolute bg-white border mt-1 rounded-lg shadow-lg w-full z-10">
              {filteredProducts[index].map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleSelectProduct(product, index)}
                  className="p-2 text-black hover:bg-gray-200 cursor-pointer"
                >
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>

    {selectedProducts.length > 0 ? (
      <div className="grid grid-cols-2 gap-6 mt-10" data-aos="fade-up">
        {selectedProducts.map(
          (product, index) =>
            product && (
              <div
                key={index}
                className="border border-gray-300 rounded-lg shadow-lg p-4 bg-gray-800 text-white relative"
                data-aos="flip-left"
              >
                <h3 className="text-xl font-bold gradient-text mb-2">
                  {product.name}
                </h3>
                <p className="text-sm mb-1">
                  <strong>Details:</strong> {product.details}
                </p>
                <p className="text-sm mb-1">
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p className="text-sm mb-1">
                  <strong>RAM:</strong> {product.ram}
                </p>
                <p className="text-sm mb-1">
                  <strong>ROM:</strong> {product.rom}
                </p>
                <p className="text-sm mb-1">
                  <strong>Camera:</strong> {product.camera}
                </p>

                <button
                  onClick={() => handleRemoveProduct(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-600 transition duration-200"
                >
                  Remove
                </button>
              </div>
            )
        )}
      </div>
    ) : (
      <p className="text-white mt-5 text-center" data-aos="fade-down">
        No products selected for comparison.
      </p>
    )}
  </div>
  );
};

export default Compare;
