import React, { useContext } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const handleQuantityChange = (id, type) => {
    cartItems.forEach((item) => {
      if (item.id === id) {
        let updatedQuantity = item.quantity;
        if (type === "increase") {
          updatedQuantity++;
        } else if (type === "decrease" && updatedQuantity > 1) {
          updatedQuantity--;
        }
        updateQuantity(id, updatedQuantity);
      }
    });
  };

  return (
    <div className="p-4 mx-auto max-w-7xl min-h-screen">
      <h1 className="text-xl font-bold mb-4 mt-28 text-white">Shopping Cart</h1>

      {/* Check if the cart is empty */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <img
            src="https://i.postimg.cc/fTt6z14c/empty-cart.png" // Image for demo
            alt="Cart Image"
            className="mb-8"
          />
          <h2 className="text-3xl font-bold mb-4 text-white">Your cart is empty</h2>
          <Link to="/">
            <button className="gradient-bg text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div>
          {/* Cart Items for larger screens */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-6 text-center font-semibold bg-gray-200 p-2 rounded-t-lg">
              <div className="text-black">Image</div>
              <div className="col-span-2 text-black">Product Name</div>
              <div className="text-black">Quantity</div>
              <div className="text-black">Price</div>
              <div className="text-black">Action</div>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-6 items-center text-center p-2 border-b"
              >
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain mx-auto"
                  />
                </div>
                <div className="col-span-2 text-left">
                  <p className="font-bold text-white">{item.title}</p>
                </div>
                <div className="text-white flex items-center justify-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, "decrease")}
                    className="text-red-500"
                    disabled={item.quantity <= 1}
                  >
                    <FaMinus />
                  </button>
                  <span className="text-white">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, "increase")}
                    className="text-green-500"
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="text-white">${item.price * item.quantity}</div>
                <div className="text-white flex items-center justify-center">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 ml-2"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Items for small screens */}
          <div className="lg:hidden space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 bg-gray-800 text-white"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain"
                  />
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p>Price: ${item.price * item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, "decrease")}
                      className="text-red-500"
                      disabled={item.quantity <= 1}
                    >
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, "increase")}
                      className="text-green-500"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
              <div className="mt-4 flex flex-col lg:flex-row justify-between items-center">
            <div className="flex space-x-2 w-full lg:w-auto">
              <input
                type="text"
                placeholder="Promo / Coupon Code"
                className="border p-2 w-full lg:w-1/2 text-white"
              />
              <button className="px-4 py-2 gradient-bg text-white font-semibold">
                APPLY COUPON
              </button>
            </div>
            <div className="flex space-x-2 w-full lg:w-auto mt-4 lg:mt-0">
              <input
                type="text"
                placeholder="Apply Discount"
                className="border p-2 w-full lg:w-1/2 text-white"
              />
              <button className="px-4 py-2 gradient-bg text-white font-semibold">
                APPLY
              </button>
            </div>
          </div>


      {/* Summary */}
<div className="mt-4 text-right text-white">
  <p className="mb-2">
    <span className="font-bold">Sub-Total:</span> $
    {cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2)}
  </p>
  <p className="mb-2">
    <span className="font-bold">Delivery Charge:</span>{" "}
    <span>(will be added)</span>
  </p>
  <p className="mb-2">
    <span className="font-bold">Total Discount:</span> 0
  </p>
  <p className="text-xl font-bold">
    <span>Total:</span> $
    {cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2)}
  </p>
</div>

{/* Checkout Button */}
<div className="mt-8 text-center">
  <button className="px-8 py-4 gradient-bg text-white font-semibold rounded-full">
    PROCEED TO CHECKOUT
  </button>
</div>

    </div>
  );
};

export default ShoppingCart;
