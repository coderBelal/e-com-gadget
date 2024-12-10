 
import { useEffect, useState } from "react";
import {   FaGift, FaShoppingCart, FaEnvelope, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const PhoneNav = () => {
  const [showLogin, setShowLogin] =  useState(false);
const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
const [showForgotPassword, setShowForgotPassword] = useState(false); // New state for forgot password

const handleShowLogin = () => {
  setShowLogin(!showLogin);
};

const handleClose = () => {
  setShowLogin(false);
};

const toggleForm = () => {
  setIsLogin(!isLogin); // Toggle between login and signup
  setShowForgotPassword(false);
};
const handleForgotPassword = () => {
  setShowForgotPassword(true); // Show the forgot password form
};
// Prevent body scrolling when login form is visible
//  useEffect(() => {
//   if (showLogin) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "auto";
//   }

//   return () => {
//     document.body.style.overflow = "auto"; // Clean up on component unmount
//   };
// }, [showLogin]);
  return (
    <div> 
                <div className="md:hidden fixed   bottom-0 left-0 w-full bg-black   z-50     shadow-lg ">
            <div className="flex justify-around items-center py-2">
              <div className="flex flex-col items-center">
                <FaGift className="text-white text-xl" />
                <span className="text-xs  ">Offers</span>
              </div>
              <Link to="/cart">
              <div className="flex flex-col items-center space-x-2">
                <FaShoppingCart className="text-xl" />
                <div>
                  <span className="block text-sm text-white">Cart(0)</span>
          
                </div>
              </div></Link>
              <Link to="/pre-order" >
              <div className="flex flex-col items-center">
                <FaEnvelope className="text-white text-xl" />
                <span className="text-xs ">Pre-Order</span>
              </div>
              </Link>
           <Link  >    <div  onClick={handleShowLogin} className="flex flex-col items-center">
                <FaUser className="text-white text-xl" />
                <span className="text-xs  ">Account</span>
              </div></Link>
          
            </div>
          </div>
                {/* Register Form */}
      {showLogin && (
        <div className="max-w-xl   p-4   py-8 px-8 h-auto bg-[#0F1012] md:ml-[25%] lg:ml-[35%]  rounded-lg shadow-2xl absolute top-0 left-0 right-0 z-[500] transition-opacity opacity-100">
          <p
            onClick={handleClose}
            className="    cursor-pointer text-right "
          >
            X
          </p>
          <div className="flex justify-between mb-4">
            {/* Tab buttons */}
            <button
              onClick={toggleForm}
              className={`w-1/2 text-center py-2 font-semibold transition-all duration-300 
          ${
            isLogin
              ? "bg-purple-600 text-white"
              : "bg-transparent text-gray-300 hover:bg-gray-700"
          }`}
            >
              Log In
            </button>
            <button
              onClick={toggleForm}
              className={`w-1/2 text-center py-2 font-semibold transition-all duration-300 
          ${
            !isLogin
              ? "bg-purple-600 text-white"
              : "bg-transparent text-gray-300 hover:bg-gray-700"
          }`}
            >
              Sign Up
            </button>
          </div>

          {/* Display either Login or Sign Up form */}
          {isLogin && !showForgotPassword ? (
            <div>
              <form action="">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block gradient-text font-bold  "
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="username"
                    className="w-full border    border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block gradient-text font-bold  "
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="@email"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                  />
                  <a
                    href="#"
                    onClick={handleForgotPassword}
                    className="   font-semibold hover:underline mt-2 inline-block text-indigo-600"
                  >
                    Forget Password
                  </a>
                </div>
                <button className="cursor-pointer py-2 px-4 block mt-6   gradient-bg text-white font-bold w-full text-center rounded">
                  Login
                </button>
              </form>
            </div>
          ) : showForgotPassword ? (
            <div>
 
              <form action="">
                <div className="mb-6">
                  <label htmlFor="email" className="block gradient-text font-bold">
                    Enter your email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                  />
                </div>
                <button className="cursor-pointer py-2 px-4 block mt-6 gradient-bg text-white font-bold w-full text-center rounded">
                  Reset Password
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-lg mx-auto  rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
           
              <form action="#" className="w-full flex flex-col gap-4">
            
                <div className="flex items-start flex-col justify-start">
                  <label
                    htmlFor="firstName"
                    className="  block gradient-text font-bold  mr-2"
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="first name"
                    className="w-full border text-gray-500 border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                  />
                </div>
                <div className="flex items-start flex-col justify-start">
                  <label
                    htmlFor="lastName"
                    className=" block gradient-text font-bold mr-2"
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="last name"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                  />
                </div>
                <div className="flex items-start flex-col justify-start">
                  <label
                    htmlFor="username"
                    className="block gradient-text font-bold  mr-2"
                  >
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="user name"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                  />
                </div>
                <div className="flex items-start flex-col justify-start">
                  <label
                    htmlFor="email"
                    className="block gradient-text font-bold mr-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                  />
                </div>
                <div className="flex items-start flex-col justify-start">
                  <label
                    htmlFor="password"
                    className="block gradient-text font-bold mr-2"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                  />
                </div>
                <div className="flex items-start flex-col justify-start">
                  <label
                    htmlFor="confirmPassword"
                    className="block gradient-text font-bold  mr-2"
                  >
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="confirm password"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                  />
                </div>
                <button className="cursor-pointer py-2 px-4 block mt-6   gradient-bg text-white font-bold w-full text-center rounded">
                  Register
                </button>
              </form>
              <div className="mt-4 text-center"></div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PhoneNav