 
import {   FaGift, FaShoppingCart, FaEnvelope, FaUser } from "react-icons/fa";
const PhoneNav = () => {
  return (
    <div> 
                <div className="md:hidden fixed bottom-0 left-0 w-full bg-black   z-50     shadow-lg ">
            <div className="flex justify-around items-center py-2">
              <div className="flex flex-col items-center">
                <FaGift className="text-white text-xl" />
                <span className="text-xs  ">Offers</span>
              </div>
              <div className="flex flex-col items-center">
                <FaShoppingCart className="text-white text-xl" />
                <span className="text-xs ">Cart(0)</span>
              </div>
              <div className="flex flex-col items-center">
                <FaEnvelope className="text-white text-xl" />
                <span className="text-xs ">Pre-Order</span>
              </div>
              <div className="flex flex-col items-center">
                <FaUser className="text-white text-xl" />
                <span className="text-xs  ">Account</span>
              </div>
            </div>
          </div>
    </div>
  )
}

export default PhoneNav