import React, { useState, useEffect } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";  // React Icons for arrows

const BottomNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false); // State to track screen size

  const menuItems = [
    { title: "Phones & Tablets", content: "Details about Phones & Tablets." },
    { title: "Laptop & Desktop", content: "Details about Laptop & Desktop." },
    { title: "Sound Equipment", content: "Details about Sound Equipment." },
    { title: "Power & Accessories", content: "Details about Power & Accessories." },
    { title: "Fitness & Wearable", content: "Details about Fitness & Wearable." },
    { title: "Peripherals", content: "Details about Peripherals." },
    { title: "Cover & Glass", content: "Details about Cover & Glass." },
    { title: "Smart Electronics", content: "Details about Smart Electronics." },
    { title: "Used Device", content: "Details about Used Device." },
    { title: "Blog", content: "Details about Blog." },
  ];

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };


  const handleResize = () => {
    if (window.innerWidth >= 1024) {  
      setIsMobileView(false);
      setShowMenu(false);  
    } else {
      setIsMobileView(true);
    }
  };
 
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-black p-6">
      <div className="bg-black mx-auto max-w-7xl">
      
        <div className="flex justify-between p-2 md:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="bg-gray-800 text-white px-4 py-2 rounded-md"
          >
            <IoReorderThreeOutline />
          </button>
        </div>
        {isMobileView && showMenu && (
          <div className="bg-gray-800 text-white w-1/2 fixed top-0 right-0 h-full shadow-lg transition-transform duration-300 ease-in-out z-10">
            <div className="flex flex-col items-start p-4 space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} className="w-full">
                  <div
                    onClick={() => toggleItem(index)}
                    className="hover:bg-gray-700 px-2 py-1 cursor-pointer flex justify-between items-center"
                  >
                    {/* Gradient text for mobile */}
                    <span  >
                      {item.title}
                    </span>
                    <span>
                      {activeItem === index ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </span>
                  </div>
                  {activeItem === index && (
                    <div className="bg-gray-900 text-gray-300 p-2 rounded">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Large Screen */}
        {/* Large Screen */}
<div className="hidden lg:flex justify-evenly bg-black py-4">
  {menuItems.map((item, index) => (
    <div
      key={index}
      className="group relative flex flex-col items-center cursor-pointer"
    >
      {/* Menu Item Title */}
      <span className="text-white font-medium hover:text-gray-300 transition-colors duration-200">
        {item.title}
      </span>

      {/* Tooltip/Content */}
      <div className="absolute bottom-0 translate-y-[150%] opacity-0 group-hover:opacity-100 group-hover:translate-y-[100%] bg-gray-800 text-white text-sm text-center px-4 py-2 rounded shadow-lg transition-transform duration-300 ease-in-out z-10">
        {item.content}
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default BottomNav;
