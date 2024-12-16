import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import {
  AiOutlineTablet,
  AiOutlineLaptop,
  AiOutlineAudio,
  AiOutlineUsb,
} from "react-icons/ai";
import { BsWatch, BsHeadphones, BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";

const categories = [
  { icon: <AiOutlineTablet size={30} />, name: "Phones & Tablets", link: "phone-tabs" },
  { icon: <AiOutlineLaptop size={30} />, name: "MacBook", link: "mac-book" },
  { icon: <AiOutlineAudio size={30} />, name: "Hubs & Docks", link: "hub-docs" },
  { icon: <BsWatch size={30} />, name: "Smart Watch", link: "smart-watch" },
  { icon: <BsHeadphones size={30} />, name: "Overhead Headphones", link: "headphone" },
  { icon: <AiOutlineUsb size={30} />, name: "Power Adapter", link: "power-adaptor" },
  { icon: <BsPhone size={30} />, name: "Cover & Glass", link: "cover-glass" },
];

const FeaturedCategories = () => {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-bold gradient-text text-center mb-4">
        FEATURED CATEGORIES
      </h2>
      <p className="text-center mb-8 text-gray-300">
        Get your desired product from our featured categories
      </p>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}  
        breakpoints={{
          640: { slidesPerView: 3 }, 
          1024: { slidesPerView: 5 },
        }}
        autoplay={{
          delay: 2000,  
          disableOnInteraction: false,  
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <Link to={`/${category.link}`}>
              <div
                data-aos="zoom-in"
                className="flex flex-col items-center justify-center group h-28 w-full border border-[#1C212A] shadow-md hover:shadow-lg p-4 text-white bg-[#0C111A] rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br from-[#1C212A] to-[#0F141D]"
              >
                {/* Icon */}
                <span className="transition-transform duration-300 ease-in-out group-hover:scale-125 text-[#A1A9B7]">
                  {category.icon}
                </span>
                {/* Name */}
                <p className="mt-2 text-center text-xs font-medium group-hover:text-gray-100">
                  {category.name}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedCategories;
