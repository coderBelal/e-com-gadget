import { useState, useEffect } from "react"; 
import { IoReorderThreeOutline, IoCloseOutline  } from "react-icons/io5"; 
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; 
import axios from "axios";
import { motion } from 'framer-motion'; 

const BottomNav = () => {   
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [activeItem, setActiveItem] = useState(null);   
  const [isMobileView, setIsMobileView] = useState(false);   
  const [isScrolled, setIsScrolled] = useState(false); 
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://gadgets-server.vercel.app/api/v4/category');
        setCategories(response.data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch Subcategories when Category is selected
  const fetchSubcategories = async (categoryId) => {
    try {
      const response = await axios.get(
        `https://gadgets-server.vercel.app/api/v4/subCategory/category/${categoryId}`
      );
      setSubcategories(response.data.data);
    } catch (err) {
      console.error('Error fetching subcategories:', err);
    }
  };

  // Fetch Brands when Subcategory is selected
  const fetchBrands = async (subCategoryId) => {
    try {
      const response = await axios.get(
        `https://gadgets-server.vercel.app/api/v4/brand/subcat/${subCategoryId}`
      );
      setBrands(response.data.data);
    } catch (err) {
      console.error('Error fetching brands:', err);
    }
  };


  const toggleMenu = () => setShowMenu(!showMenu);

 

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

  const handleScroll = () => {     
    if (window.scrollY > 50) {       
      setIsScrolled(true);     
    } else {       
      setIsScrolled(false);     
    }   
  };    

  useEffect(() => {     
    handleResize();     
    window.addEventListener("resize", handleResize);     
    window.addEventListener("scroll", handleScroll);     
    return () => {       
      window.removeEventListener("resize", handleResize);       
      window.removeEventListener("scroll", handleScroll);     
    };   
  }, []);    

  return (
    <div
      className={`fixed lg:top-14 top-3 left-0 w-full z-[500] p-2 transition-all duration-300 ${
        isMobileView
          ? "lg:gradient-bg" // Small screens always have gradient background
          : isScrolled
          ? "bg-none lg:bg-white lg:bg-opacity-20 text-black lg:backdrop-blur-md shadow-md" // Large and medium screens scroll effect
          : "gradient-bg"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Mobile & Tablet Screen */}
        <div className="flex justify-between md:hidden">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="gradient-bg text-white px-2 py-2 rounded-md"
      >
        {showMenu ? (
          <IoCloseOutline size={20} />
        ) : (
          <IoReorderThreeOutline size={20} />
        )}
      </button>
    </div>
        {isMobileView && (
        <div className="relative bg-white">
        {/* Top Menu for Desktop */}
        <div className="hidden lg:flex justify-between bg-gray-900 text-white py-3 px-6">
          {categories.map((category) => (
            <div
              key={category._id}
              className="group relative cursor-pointer"
              onMouseEnter={() => fetchSubcategories(category._id)}
            >
              <span className="px-4 py-2 hover:bg-gray-700">{category.name}</span>
  
              {/* Subcategories */}
              {subcategories?.length > 0 && (
                <div className="absolute top-full left-0 bg-gray-800 w-48 shadow-lg hidden group-hover:block">
                  {subcategories?.map((subcategory) => (
                    <div
                      key={subcategory._id}
                      onMouseEnter={() => fetchBrands(subcategory._id)}
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    >
                      {subcategory.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
  
        {/* Brands Dropdown */}
        {brands?.length > 0 && (
          <div className="absolute top-[100%] left-[200px] bg-gray-700 w-48 shadow-lg">
            {brands?.map((brand) => (
              <div key={brand._id} className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
                {brand.name}
              </div>
            ))}
          </div>
        )}
  
        {/* Mobile Menu */}
        <div>
          {/* <button
            onClick={toggleMenu}
            className="block lg:hidden bg-gray-900 text-white p-3"
          >
            Menu
          </button> */}
  
          <div
            className={`fixed top-[60px] left-0 h-full w-2/3 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
              showMenu ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col p-4 space-y-4">
              {categories.map((item, index) => (
                <div key={index} className="w-full">
                  <div
                    onClick={() => toggleItem(index)}
                    className="hover:bg-gray-700 px-2 py-1 cursor-pointer flex justify-between items-center"
                  >
                    <span>{item.name}</span>
                    <span>
                      {activeItem === index ? <FiChevronUp /> : <FiChevronDown />}
                    </span>
                  </div>
                  {activeItem === index && (
                    <div className="bg-gray-800 text-gray-300 p-2 rounded">
                      {subcategories.map((subcategory) => (
                        <div
                          key={subcategory._id}
                          className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                          onClick={() => fetchBrands(subcategory._id)}
                        >
                          {subcategory.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        )}

   

<div className="hidden lg:block">
<div className="relative bg-white">
      {/* Top Menu */}
      <div className="flex justify-between text-sm bg-gray-900 text-white py-1 px-3 space-x-3">
        {categories.map((category) => (
          <div
            key={category._id}
            className="group relative cursor-pointer"
            onMouseEnter={() => {
              fetchSubcategories(category._id);
              setActiveCategory(category._id); // Set active category
              setSubcategories([]); // Reset subcategories
              setBrands([]); // Reset brands
            }}
          >
            <span className="px-1 py-1 text-sm hover:bg-gray-700">{category.name}</span>

            {/* Subcategories */}
            {activeCategory === category._id && subcategories.length > 0 && (
              <motion.div
                className="absolute top-full left-0 bg-gray-800 w-48 shadow-lg group-hover:block"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {subcategories.map((subcategory) => (
                  <div
                    key={subcategory._id}
                    onMouseEnter={() => {
                      fetchBrands(subcategory._id);
                      setActiveSubcategory(subcategory._id); // Set active subcategory
                    }}
                    className="px-3 py-2 hover:bg-gray-700 cursor-pointer"
                  >
                    {subcategory.name}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Brands Dropdown */}
      {brands.length > 0 && activeSubcategory && (
        <motion.div
          className="absolute top-[100%] left-[200px] bg-gray-700 w-48 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {brands.map((brand) => (
            <div key={brand._id} className="px-3 py-1 hover:bg-gray-600 cursor-pointer">
              {brand.name}
            </div>
          ))}
        </motion.div>
      )}
    </div>
</div>

      </div>
    </div>
  );
};

export default BottomNav;
