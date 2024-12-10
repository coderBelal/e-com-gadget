import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { useNotification } from "./context/NotificationContext";
import { IoIosArrowForward } from "react-icons/io";

const Product = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "This is a short description of Product 1",
      price: 30.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      description: "This is a short description of Product 2",
      price: 25.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 3,
      title: "Product 3",
      description: "This is a short description of Product 3",
      price: 40.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 4,
      title: "Product 4",
      description: "This is a short description of Product 4",
      price: 35.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 5,
      title: "Product 5",
      description: "This is a short description of Product 5",
      price: 50.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 6,
      title: "Product 6",
      description: "This is a short description of Product 6",
      price: 45.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 7,
      title: "Product 7",
      description: "This is a short description of Product 7",
      price: 55.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 8,
      title: "Product 8",
      description: "This is a short description of Product 8",
      price: 60.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 9,
      title: "Product 9",
      description: "This is a short description of Product 9",
      price: 65.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
    {
      id: 10,
      title: "Product 10",
      description: "This is a short description of Product 10",
      price: 70.0,
      image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
    },
  ];

  const { addToCart } = useContext(CartContext);
  const { showNotification } = useNotification();
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to the cart
    showNotification(`${product.title} has been added to your cart!`);
  };

  return (
    <div className="py-4 p-2 lg:p-0 md:p-0 mt-10 mx-auto max-w-7xl">
    <div className="mb-4 text-center">
      <h2 className="text-3xl uppercase font-bold gradient-text">
        Featured Products
      </h2>
      <p className="text-gray-300 text-xs">
        Check out our exclusive products available for you.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {products.map((product) => (
        <div
          key={product.id}
          data-aos="fade-up"  // AOS animation for fade-up effect
          className="group flex flex-col cursor-pointer items-center rounded-lg p-4 shadow-lg bg-[#0F1012] hover:shadow-2xl hover:bg-gray-800 transition-all duration-300"
        >
          <div className="relative">
            <Link to={`/products/${product.id}`}>
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
          <div className="mt-4 flex lg:gap-14 justify-between items-center">
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
  );
};

export default Product;
