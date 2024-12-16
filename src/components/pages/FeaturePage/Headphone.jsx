import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { CartContext } from "../../context/CartContext";
import { useNotification } from "../../context/NotificationContext";
import CartSidebar from "../CartSidebar";
 

export const   Headphones= () => {
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
    const [availability, setAvailability] = useState([]);
    const [network,setNetWork]=useState([])
    const [ Storage,setStorage]=useState([])
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
   
     
  
    const { addToCart } = useContext(CartContext);
    const { showNotification } =  useNotification()
    const [isCartOpen, setIsCartOpen] =   useState(false);
  
    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);
 
    const products = [
      {
          id: 1,
          title: "Product 1",
          description: "This is a short description of Product 1",
          price: 30.0,
          image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
          availability: "In Stock",
          storage: "12/128GB", // Updated format
          network: "4G",
        },
      {
        id: 2,
        title: "Product 2",
        description: "This is a short description of Product 2",
        price: 25.0,
        image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
     
        availability: "Preorder",
        storage: "12/1TB",
        network: "5G",
      },
      {
        id: 3,
        title: "Product 3",
        description: "This is a short description of Product 3",
        price: 40.0,
        image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
   
        availability: "In Stock",
        storage: "12/1TB",
        network: "3G",
      },
      {
        id: 4,
        title: "Product 4",
        description: "This is a short description of Product 4",
        price: 35.0,
        image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
   
        availability: "In Stock",
        storage: "12/1TB",
        network: "4G",
      },
      {
        id: 5,
        title: "Product 5",
        description: "This is a short description of Product 5",
        price: 50.0,
        image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
      
        availability: "Preorder",
        storage: "12/512GB",
        network: "5G",
      },
      {
        id: 6,
        title: "Product 6",
        description: "This is a short description of Product 6",
        price: 45.0,
        image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
   
        availability: "In Stock",
        storage: "12/512GB",
        network: "4G",
      },
      {
        id: 7,
        title: "Product 7",
        description: "This is a short description of Product 7",
        price: 55.0,
        image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
   
        availability: "Preorder",
        storage: "12/512GB",
        network: "5G",
      },
      {
        id: 8,
        title: "Product 8",
        description: "This is a short description of Product 8",
        price: 60.0,
        image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
     
        availability: "In Stock",
        storage: "12/512GB",
        network: "4G",
      },
      {
        id: 9,
        title: "Product 9",
        description: "This is a short description of Product 9",
        price: 65.0,
        image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
   
        availability: "Preorder",
        storage: "12/512GB",
        network: "3G",
      },
      {
        id: 10,
        title: "Product 10",
        description: "This is a short description of Product 10",
        price: 70.0,
        image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
     
        availability: "In Stock",
        storage: "12/512GB",
        network: "5G",
      },
      {
        id: 11,
        title: "Product 11",
        description: "This is a short description of Product 11",
        price: 80.0,
        image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
     
        availability: "In Stock",
        storage: "12/512GB",
        network: "5G",
      },
      {
        id: 12,
        title: "Product 12",
        description: "This is a short description of Product 12",
        price: 90.0,
        image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
       
        availability: "Preorder",
        storage: "12/1TB",
        network: "4G",
      },
      {
        id: 13,
        title: "Product 13",
        description: "This is a short description of Product 13",
        price: 95.0,
        image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
   
        availability: "In Stock",
        storage: "12GB/ 1TB ",
        network: "5G",
      },
      {
        id: 14,
        title: "Product 14",
        description: "This is a short description of Product 14",
        price: 110.0,
        image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
   
        availability: "Preorder",
        storage: "12/1TB",
        network: "5G",
      },
      {
        id: 15,
        title: "Product 15",
        description: "This is a short description of Product 15",
        price: 120.0,
        image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    
        availability: "Online Order",
        storage: "12/1TB",
        network: "4G",
      },
    ];
  
    const handleAddToCart = (product) => {
      addToCart(product);
      showNotification(`${product.title} has been added to your cart!`);
      openCart()
    };
  
    const filteredProducts = products.filter((product) => {
      const inPriceRange =
        product.price >= priceRange.min && product.price <= priceRange.max;
      const inAvailability =
        availability.length === 0 || availability.includes(product.availability);
          const inNetwork =network.length === 0 ||  network.includes(product.network);
          const inStorage=Storage.length===0 || Storage.includes(product.storage);
          return inPriceRange && inAvailability&& inNetwork&& inStorage; 
   
    });
  
  return (
    <div className="py-4 p-2 lg:p-0 md:p-0 lg:mt-10 mx-auto max-w-7xl grid grid-cols-12 gap-4">
    {/* Sidebar */}
    <div
      className={`fixed z-20 bg-[#0F1012] top-0 left-0 w-64 h-full transform transition-transform duration-300 ${
        isSidebarVisible ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:static lg:col-span-3 md:block md:col-span-3 md:static lg:block p-4 rounded-lg`}
    >
      <h3 className="font-bold mb-2 mt-20 text-white">Price Range</h3>
      <div className="flex gap-2">
        <input
          type="number"
          className="w-1/2 border border-gray-300 p-2 rounded"
          placeholder="Min"
          value={priceRange.min}
          onChange={(e) =>
            setPriceRange({ ...priceRange, min: Number(e.target.value) })
          }
        />
        <input
          type="number"
          className="w-1/2 border p-2 rounded"
          placeholder="Max"
          value={priceRange.max}
          onChange={(e) =>
            setPriceRange({ ...priceRange, max: Number(e.target.value) })
          }
        />
      </div>
      <button className=" gradient-bg  text-white w-full py-2 rounded mt-2">
        Filter
      </button>
      <h3 className="font-bold text-white mt-4">Availability</h3>
      <div>
        {["In Stock", "Online Order", "Preorder"].map((status) => (
          <label
            key={status}
            className="flex items-center text-white gap-2 mt-2"
          >
            <input
              type="checkbox"
              value={status}
              onChange={(e) => {
                const checked = e.target.checked;
                setAvailability((prev) =>
                  checked
                    ? [...prev, status]
                    : prev.filter((item) => item !== status)
                );
              }}
            />
            {status}
          </label>
        ))}
      </div>
      <h3 className="font-bold text-white mt-4">Storage</h3>
      <div>
        {    ["12/128GB", "12/1TB", "12/256GB", "12/512GB", "128GB"].map((storage) => (
          <label
            key={storage}
            className="flex items-center text-white gap-2 mt-2"
          >
            <input
              type="checkbox"
              value={  storage}
              onChange={(e) => {
                const checked = e.target.checked;
                  setStorage((prev) =>
                  checked
                    ? [...prev,   storage]
                    : prev.filter((item) => item !==   storage)
                );
              }}
            />
     {storage}
          </label>
        ))}
      </div>
      <h3 className="font-bold text-white mt-4">Network</h3>
      <div>
        {  ["2G", "3G", "4G", "5G"].map((net) => (
          <label
            key={net}
            className="flex items-center text-white gap-2 mt-2"
          >
            <input
              type="checkbox"
              value={ net}
              onChange={(e) => {
                const checked = e.target.checked;
                 setNetWork((prev) =>
                  checked
                    ? [...prev,  net]
                    : prev.filter((item) => item !==  net)
                );
              }}
            />
     {net}
          </label>
        ))}
      </div>
  
    </div>

    <button
      className="fixed bottom-16 right-4    bg-purple-900  text-white p-3 rounded-full shadow-lg lg:hidden"
      onClick={() => setIsSidebarVisible((prev) => !prev)}
    >
      {isSidebarVisible ? "Close" : "Filter"}
    </button>

    {/* Product Gallery */}
    <div className="col-span-9 mt-24">
    <div className="mb-4 text-center">
          <h2 className="text-2xl uppercase font-bold gradient-text">
        New   Headphone 
          </h2>
          <p className="text-gray-500 text-xs">
            Check out our exclusive products available for you.
          </p>
        </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col cursor-pointer items-center rounded-lg p-4 shadow-lg bg-[#0F1012] hover:shadow-2xl hover:bg-gray-800 transition-all duration-300"
          >
            <div className="relative">
              <Link to= {`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-48 rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div
                onClick={() => handleAddToCart(product)}
                className="absolute top-2 right-2 transition-transform duration-300 ease-in-out group-hover:scale-105 gradient-bg p-2 rounded-full shadow-md"
              >
                <FaShoppingCart className="text-white shadow-lg" size={20} />
              </div>
            </div>
            <h2 className="mt-4 text-center text-lg font-bold gradient-text">
              {product.title}
            </h2>
            <p className="text-sm text-[#AFB1B4] group-hover:text-white">
              {product.description}
            </p>
            <div className="mt-4 flex gap-14 justify-between items-center">
              <p className="font-semibold text-white">
                ${product.price.toFixed(2)}
              </p>
              <Link to={`checkout/${product.id}`}>
                <button className="px-4 py-2 gradient-bg text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 relative">
                  Buy Now
                  <span className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                    <IoIosArrowForward size={20} className="text-white" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    <CartSidebar isOpen={isCartOpen} closeSidebar={closeCart}   />
  </div>
  )
}

 