import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { useNotification } from "./context/NotificationContext";
import { IoIosArrowForward } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import CartSidebar from "./pages/CartSidebar";
import { Swiper, SwiperSlide } from "swiper/react";
 
const Product = () => {
  const companies = [
    {
      name: "Apple",
      phones: [
        {
          id: 1,
          title: "Phone A1",
          description: "Description for Phone A1",
          price: 300,
          image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
        },
        {
          id: 2,
          title: "Phone A2",
          description: "Description for Phone A2",
          price: 350,
          image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
        },
        {
          id: 3,
          title: "Phone A1",
          description: "Description for Phone A1",
          price: 300,
          image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
        },
        {
          id: 4,
          title: "Phone A2",
          description: "Description for Phone A2",
          price: 350,
          image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
        },
      ],
    },
    {
      name: "Samsung",
      phones: [
        {
          id: 3,
          title: "Phone B1",
          description: "Description for Phone B1",
          price: 400,
          image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
        },
        {
          id: 4,
          title: "Phone B2",
          description: "Description for Phone B2",
          price: 450,
          image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
        },
      ],
    },
    {
      name: "Redmi",
      phones: [
        {
          id: 3,
          title: "Phone B1",
          description: "Description for Phone B1",
          price: 400,
          image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
        },
        {
          id: 4,
          title: "Phone B2",
          description: "Description for Phone B2",
          price: 450,
          image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
        },
      ],
    },
    {
      name: "Infinix",
      phones: [
        {
          id: 3,
          title: "Phone B1",
          description: "Description for Phone B1",
          price: 400,
          image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
        },
        {
          id: 4,
          title: "Phone B2",
          description: "Description for Phone B2",
          price: 450,
          image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
        },
      ],
    },
 
    {
      name: "Oppo",
      phones: [
        {
          id: 3,
          title: "Phone B1",
          description: "Description for Phone B1",
          price: 400,
          image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
        },
        {
          id: 4,
          title: "Phone B2",
          description: "Description for Phone B2",
          price: 450,
          image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
        },
      ],
    },
    {
      name: "Realme",
      phones: [
        {
          id: 3,
          title: "Phone B1",
          description: "Description for Phone B1",
          price: 400,
          image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
        },
        {
          id: 4,
          title: "Phone B2",
          description: "Description for Phone B2",
          price: 450,
          image: "https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg",
        },
      ],
    },
 
 
 
  ];
  
  const { addToCart } = useContext(CartContext);
  const { showNotification } = useNotification();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    showNotification(`${product.title} has been added to your cart!`);
    openCart();
  };

  return (
    <div className="py-4 p-2 lg:p-0 md:p-0 mt-10 mx-auto max-w-7xl">
    <div className="mb-4 text-center">
      <h2 className="lg:text-3xl text-lg uppercase font-bold gradient-text">
 Top Brands
      </h2>
      <p className="text-gray-300 text-xs">
        Check out our exclusive products available for you.
      </p>
    </div>

    {/* Tab Section */}
    <div className="mb-6 flex justify-center">
      <Swiper
        spaceBetween={10} 
        slidesPerView={3}  
        breakpoints={{
          640: {
            slidesPerView: 3,  
          },
          1024: {
            slidesPerView: 6,  
          },
        }}
        className="  w-full"  
      >
        {companies.map((company) => (
          <SwiperSlide key={company.name}>
            <button
              className={`px-3 lg:text-base text-sm py-2 font-semibold rounded-lg shadow-md w-full ${
                selectedCompany.name === company.name
                  ? "gradient-bg text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCompany(company)}
            >
              {company.name}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    {/* Products Section */}
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {selectedCompany.phones.map((product) => (
        <div
          key={product.id}
          data-aos="fade-up"
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
          <div className="mt-4 flex gap-10 justify-between items-center">
            <p className="font-semibold text-white">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
    <CartSidebar isOpen={isCartOpen} closeSidebar={closeCart} />
  </div>
  );
};

export default Product;
