import { useContext } from "react";
import { FaTimes } from "react-icons/fa"; // Close icon
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartSidebar = ({ isOpen, closeSidebar }) => {
  const { cartItems, updateCartItems, removeFromCart } = useContext(CartContext);

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity < 10) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateCartItems(updatedCartItems);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80  bg-[#06080D]  shadow-xl p-6 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } overflow-y-auto`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold  gradient-text     ">Your Cart</h2>
        <button
          onClick={closeSidebar}
          className="p-2 rounded hover:bg-gray-800 transition-colors"
        >
          <FaTimes className="text-2xl text-red-600" />
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src="https://i.postimg.cc/fTt6z14c/empty-cart.png"
            alt="Empty Cart"
            className="w-40 mb-4"
          />
          <h3 className="text-lg font-semibold    gradient-text  mb-2">
            Your cart is empty
          </h3>
        
        </div>
      ) : (
        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto space-y-6">
            <ul className="  space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-start p-4   bg-[#0F1012] rounded-lg shadow-lg hover:shadow-lg transition-shadow"
                >
                  <div className="flex  space-y-6 items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="ml-4">
                      <h3 className="text-sm font-semibold  text-white">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <button
                          className="text-red-500   px-2 py-1 rounded  transition-colors"
                          onClick={() => decreaseQuantity(item.id)}
                          title="Decrease Quantity"
                        >
                          -
                        </button>
                        <span className="text-sm text-white font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          className="  text-green-700    px-2 py-1 rounded    transition-colors"
                          onClick={() => increaseQuantity(item.id)}
                          title="Increase Quantity"
                        >
                          +
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700 transition-colors"
                          onClick={() => handleRemoveFromCart(item.id)}
                          title="Remove Item"
                        >
                          <FaTimes />
                        </button>
                      </div>
                      <p className=" text-white mt-1 text-sm">
                        ${(item.price * item.quantity).toFixed(2)}{" "}
                        <span className="text-xs text-white">
                          (${item.price.toFixed(2)} each)
                        </span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Summary */}
          <div className="  p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-sm font-semibold  gradient-text  mb-2">
              Price Summary
            </h3>
            <div className="flex justify-between  gradient-text  text-sm mb-2">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between  gradient-text  text-sm mb-4">
              <span>Tax (10%)</span>
              <span>${(totalPrice * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold  gradient-text  text-base">
              <span>Total</span>
              <span>${(totalPrice + totalPrice * 0.1).toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="mt-4">
            <Link to="/cart">
              <button className="w-full gradient-bg  text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
         View Cart
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
