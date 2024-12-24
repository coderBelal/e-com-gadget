import {
  FaSearch,
  FaGift,
  FaShoppingCart,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import PhoneNav from "./PhoneNav";
import { useState, useEffect, useContext } from "react";
import { Link, Links } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const TopNavbar = () => {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Smartphone", category: "Electronics" },
    { id: 3, name: "Shoes", category: "Fashion" },
    { id: 4, name: "Watch", category: "Accessories" },
    { id: 5, name: "Backpack", category: "Fashion" },
    { id: 6, name: "Headphones", category: "Electronics" },
    { id: 7, name: "T-shirt", category: "Fashion" },
    { id: 8, name: "Sunglasses", category: "Accessories" },
    { id: 9, name: "Desk Chair", category: "Furniture" },
    { id: 10, name: "Water Bottle", category: "Accessories" },
    { id: 11, name: "Blender", category: "Home Appliances" },
    { id: 12, name: "Gaming Console", category: "Electronics" },
    { id: 13, name: "Notebook", category: "Stationery" },
    { id: 14, name: "Pen", category: "Stationery" },
    { id: 15, name: "Camera", category: "Electronics" },
    { id: 16, name: "Sneakers", category: "Fashion" },
    { id: 17, name: "Curtains", category: "Home Decor" },
    { id: 18, name: "Bookshelf", category: "Furniture" },
    { id: 19, name: "Running Shoes", category: "Fashion" },
    { id: 20, name: "Microwave Oven", category: "Home Appliances" },
    { id: 21, name: "Electric Kettle", category: "Home Appliances" },
    { id: 22, name: "Desk Lamp", category: "Home Decor" },
    { id: 23, name: "Yoga Mat", category: "Fitness" },
    { id: 24, name: "Barbell Set", category: "Fitness" },
    { id: 25, name: "Drone", category: "Electronics" },
  ];
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm,setSearchTerm]=useState("")
  const filterProduct=searchTerm.trim()===""?[]:
  products.filter((product)=>product.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleClose = () => {
    setShowLogin(false);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setShowForgotPassword(false);
  };
  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };
 const {cartItems} =useContext(CartContext)
  // useEffect(() => {
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
    <>
      <div className="bg-[#10151F] fixed lg:-top-5 left-0   h-18 w-full z-50 md:p-7">
        <div className="mx-auto max-w-7xl">
          <nav className="text-white flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="   flex items-center justify-between gap-5  space-x-2">
                <div className="text-xl   mt-4 lg:mt-0   font-bold">
                  <Link to="/">
                    {" "}
                    <h1 className="text-2xl p-1 ml-6 border border-purple-700">GadgetandTech</h1>
                  </Link>
                </div>
                <div className="  mt-4 lg:mt-0 lg:ml-0 ml-10 ">
                  <FaSearch
                    onClick={toggleSearchBar}
                    className="text-2xl  lg:hidden cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {showSearchBar && (
              <div className="absolute lg:hidden top-28 left-0 w-full px-4 z-[1000]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
            )}

            {/* Search Bar */}
            <div className="flex-grow hidden  lg:flex items-center justify-center mb-4 md:mb-0">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-xs md:max-w">
                <FaSearch className=" text-2xl" />
                <input
                  type="text"
                   value={searchTerm}
                   onChange={(e)=>setSearchTerm(e.target.value)}
                  placeholder="Search Your Product"
                  className="flex-grow bg-transparent text-black outline-none pl-2"
                />
              </div>
            </div>
 
            {/* Menu Options */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/offer-card">
                {" "}
                <div className="flex items-center space-x-2">
                  <FaGift className="text-2xl" />
                  <div>
                    <span className="block text-sm text-white">Offers</span>
                    <span className="block text-xs text-gray-200">
                      Latest Offers
                    </span>
                  </div>
                </div>
              </Link>

              <Link to="/cart">
                <div className="flex items-center space-x-2">
                  <FaShoppingCart className="text-2xl" />
                  <div>
                    <span className="block text-sm text-white">Cart({cartItems.length})</span>
                    <span className="block text-xs text-gray-200">
                      Add items
                    </span>
                  </div>
                </div>
              </Link>

              <Link to="/pre-order">
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-2xl" />
                  <div>
                    <span className="block text-sm text-white">Pre-Order</span>
                    <span className="block text-xs text-gray-200">
                      Order Today
                    </span>
                  </div>
                </div>
              </Link>
                <Link to='/login'>
                <div    className="flex items-center space-x-2">
              
              <FaUser className="text-2xl" />
              <div  className="cursor-pointer">
                <span className="block text-sm text-white">Account</span>
                <span className="block text-xs text-gray-200">
                  Register or Login
                </span>
              </div>
            </div></Link>
    
            </div>

            {/* Mobile (sm) Bottom Navigation Menu */}
            <div className="block md:hidden">
              <PhoneNav />
            </div>
          </nav>
        </div>
      </div>
      {filterProduct.map((product)=>(
        <div  key={product.id} className="  z-[1000]  flex  flex-col items-center " >
            <ul className="  border bg-red-50     p-3 w-80">
   <p className="  text-xl  font-semibold  ">{product.name}</p>
   <p className="   ">{product.category}</p>
  </ul>
   
        </div>

 ))}
     
     
      
    </>
  );
};

export default TopNavbar;
