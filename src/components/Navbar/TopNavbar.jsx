import { FaSearch, FaGift, FaShoppingCart, FaEnvelope, FaUser } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className="bg-black p-4">
      <div className="mx-auto max-w-7xl">
        <nav className="text-white p-4 flex items-center justify-between flex-col md:flex-row">
          {/* Logo */}
          <div className="flex items-center space-x-2 w-full justify-between md:justify-start">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="logo"
              className="h-6"
            />
            <span className="text-xl font-bold text-orange-500 md:block">
              <span className="text-sm text-center text-gray-300">AppleGadgets</span>
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full md:w-1/3 my-2 md:my-0">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow bg-transparent text-black outline-none"
            />
            <FaSearch className="text-orange-500" />
          </div>

          {/* Menu Options */}
          <div className="hidden md:flex items-center space-x-8 md:ml-11">
            <div className="flex items-center space-x-2">
              <FaGift className="  text-2xl" />
              <div>
                <span className="block text-sm bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Offers</span>
                <span className="block text-xs  ">Latest Offers</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaShoppingCart className="  text-2xl" />
              <div>
                <span className="block text-sm bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Cart(0)</span>
                <span className="block text-xs  ">Add items</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="  text-2xl" />
              <div>
                <span className="block text-sm bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Pre-Order</span>
                <span className="block text-xs  ">Order Today</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaUser className="  text-2xl" />
              <div>
                <span className="block text-sm bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Account</span>
                <span className="block text-xs  ">Register or Login</span>
              </div>
            </div>
          </div>

          {/* Mobile (sm) Bottom Navigation Menu */}
          <div className="md:hidden fixed bottom-0 left-0 w-full bg-black shadow-lg z-50">
            <div className="flex justify-around items-center py-2">
              <div className="flex flex-col items-center">
                <FaGift className="text-white text-xl" />
                <span className="text-xs bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Offers</span>
              </div>
              <div className="flex flex-col items-center">
                <FaShoppingCart className="text-white text-xl" />
                <span className="text-xs bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Cart(0)</span>
              </div>
              <div className="flex flex-col items-center">
                <FaEnvelope className="text-white text-xl" />
                <span className="text-xs bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Pre-Order</span>
              </div>
              <div className="flex flex-col items-center">
                <FaUser className="text-white text-xl" />
                <span className="text-xs bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Account</span>
              </div>
            </div>
          </div>

        </nav>
      </div>
    </div>
  );
};

export default TopNavbar;
