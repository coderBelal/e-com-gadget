 
import {   FaGift, FaShoppingCart, FaEnvelope, FaUser } from "react-icons/fa";
const PhoneNav = () => {
  return (
    <div> 
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
    </div>
  )
}

export default PhoneNav