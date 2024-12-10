 
import { AiOutlineTablet, AiOutlineLaptop, AiOutlineAudio, AiOutlineUsb } from "react-icons/ai";
import { BsWatch, BsHeadphones, BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";
 

const categories = [
  { icon: <AiOutlineTablet size={30} />, name: "Phones & Tablets" ,link:'phones-tab' },
  { icon: <AiOutlineLaptop size={30} />, name: "MacBook" ,link:'phones-tab'  },
  { icon: <AiOutlineAudio size={30} />, name: "Hubs & Docks" ,link:'phones-tab'  },
  { icon: <BsWatch size={30} />, name: "Smart Watch",link:'phones-tab'  },
  { icon: <BsHeadphones size={30} />, name: "Overhead Headphones",link:'phones-tab'  },
  { icon: <AiOutlineUsb size={30} />, name: "Power Adapter",link:'phones-tab'  },
 
  { icon: <BsPhone size={30} />, name: "Cover & Glass",link:'phones-tab'  },
  { icon: <AiOutlineTablet size={30} />, name: "Phones & Tablets",link:'phones-tab'  },
  { icon: <AiOutlineLaptop size={30} />, name: "MacBook",link:'phones-tab'  },
  { icon: <AiOutlineAudio size={30} />, name: "Hubs & Docks",link:'phones-tab'  },
  { icon: <BsWatch size={30} />, name: "Smart Watch" },
  { icon: <BsHeadphones size={30} />, name: "Overhead Headphones",link:'phones-tab'  },
  { icon: <AiOutlineUsb size={30} />, name: "Power Adapter",link:'phones-tab'  },
 
  { icon: <BsPhone size={30} />, name: "Cover & Glass",link:'phones-tab'  },
 
 
];

const FeaturedCategories = () => {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold gradient-text text-center mb-4">FEATURED CATEGORIES</h2>
    <p className="text-center mb-8 text-white">
      Get your desired product from featured category
    </p>
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
      {categories.map((category, index) => (
        <Link to={`/${category.link}`} key={index}>
          <div
            data-aos="zoom-in" // AOS zoom-in effect
            className="flex flex-col items-center group justify-center border-[#1C212A] border shadow-sm hover:shadow-md p-4 text-white hover:bg-[#111627] cursor-pointer bg-[#0C111A] rounded-md"
          >
            <span className="transition-transform duration-300 ease-in-out group-hover:scale-125">
              {category.icon}
            </span>
            <p className="mt-2 text-center text-sm font-medium transition-transform duration-300 ease-in-out group-hover:scale-105 gradient-text">
              {category.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
  );
};

export default FeaturedCategories;
