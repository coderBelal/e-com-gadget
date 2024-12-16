 
import { FaWhatsapp } from "react-icons/fa";
 
import { FaCodeCompare } from "react-icons/fa6";
import { Link } from "react-router-dom";
const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-16 lg:bottom-6 right-4 flex flex-col space-y-4">
 
    <a
      href="https://wa.me/01568885065"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white p-4 rounded-full shadow-lg 
                hover:shadow-xl hover:scale-105 transition-all duration-300 glow-animation"
    >
      <FaWhatsapp size={24} />
    </a>
    <div>
 
    <Link to="/compare">
  <button className="gradient-bg text-white p-4 rounded-full">
    <FaCodeCompare />
  </button>
</Link>

 
    </div>

  
  </div>
  );
};

export default WhatsAppButton;
