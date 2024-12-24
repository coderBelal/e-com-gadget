import { IoMdCheckmarkCircleOutline, IoMdHelpCircleOutline, IoMdLock, IoMdPhonePortrait, IoMdRocket } from "react-icons/io";

const Services = () => {
  return (
    <div>
    {/* Service Info Section */}
    <div className="mt-10 md:mt-0 py-8">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
       {/* Service Card 1 - Fast Delivery */}
<div 
  data-aos="zoom-in" 
  className=" flex lg:flex-row flex-col gap-0 md:gap-2 justify-evenly rounded-lg items-center bg-[#0F1012] h-20 transition-all duration-300 lg:p-4 p-2 shadow-lg transform hover:scale-105"
>
  <div className="flex items-center justify-center gradient-bg text-white rounded-full lg:p-3 p-2">
    <IoMdRocket className="lg:text-2xl text-xl" /> {/* Fast Delivery Icon */}
  </div>
  <div className="text-center md:text-left">
    <p className="font-semibold text-sm gradient-text">Fast Delivery</p>
    <p className="text-sm text-white hidden md:block lg:block">Quick and reliable shipping</p>
  </div>
</div>

{/* Service Card 2 - Authentic Product */}
<div 
  data-aos="zoom-in" 
  className="flex lg:flex-row flex-col gap-0md:gap-2 justify-evenly rounded-lg items-center bg-[#0F1012] h-20 transition-all duration-300 lg:p-4 p-2 shadow-lg transform hover:scale-105"
>
  <div className="flex items-center justify-center gradient-bg text-white rounded-full lg:p-3 p-2">
    <IoMdCheckmarkCircleOutline className="lg:text-2xl text-xl" /> {/* Authentic Product Icon */}
  </div>
  <div className="text-center md:text-left">
    <p className="font-semibold text-sm gradient-text">Authentic Product</p>
    <p className="text-sm text-white hidden md:block lg:block">Guaranteed genuine items</p>
  </div>
</div>

{/* Service Card 3 - Secure Payment */}
<div 
  data-aos="zoom-in" 
  className="flex lg:flex-row flex-col gap-0md:gap-2 justify-evenly rounded-lg items-center bg-[#0F1012] h-20 transition-all duration-300 lg:p-4 p-2 shadow-lg transform hover:scale-105"
>
  <div className="flex items-center justify-center gradient-bg text-white rounded-full lg:p-3 p-2">
    <IoMdLock className="lg:text-2xl text-xl" /> {/* Secure Payment Icon */}
  </div>
  <div className="text-center md:text-left">
    <p className="font-semibold text-sm gradient-text">Secure Payment</p>
    <p className="text-sm text-white hidden md:block lg:block">Safe and encrypted payments</p>
  </div>
</div>

{/* Service Card 4 - 24/7 Support */}
<div 
  data-aos="zoom-in" 
  className="flex lg:flex-row flex-col gap-0md:gap-2 justify-evenly rounded-lg items-center bg-[#0F1012] h-20 transition-all duration-300 lg:p-4 p-2 shadow-lg transform hover:scale-105"
>
  <div className="flex items-center justify-center gradient-bg text-white rounded-full lg:p-3 p-2">
    <IoMdHelpCircleOutline className="lg:text-2xl text-xl" /> {/* 24/7 Support Icon */}
  </div>
  <div className="text-center md:text-left">
    <p className="font-semibold text-sm gradient-text">24/7 Support</p>
    <p className="text-sm text-white hidden md:block lg:block">Always here to help</p>
  </div>
</div>


      </div>
    </div>
  </div>
  );
};

export default Services;
