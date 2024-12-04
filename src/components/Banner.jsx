



import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
 

const ResponsiveSlider = () => {
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  return (
<section className="w-[95%] lg:mt-24 lg:top-0 md:w-11/12 mx-auto py-5  md:h-[445px] overflow-hidden">
{/* Main Container */}
<div className="grid grid-cols-1 md:flex gap-2">
  {/* Left banner */}

  <Slider {...settings} className='md:w-8/12'>
  <div className="relative">
  <img
src="https://i.postimg.cc/L8RJmnRc/i-Phone-16-Series-4-2800.jpg" // Replace with your image path
alt="MacBook Promotion"
style={{ height: "auto", width: "100%" }}
className="md:h-[400px] w-full object-cover object-center"
/>

    
    <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
    
    </div>
  </div>
  <div className="relative">
  <img
src="https://i.postimg.cc/L8RJmnRc/i-Phone-16-Series-4-2800.jpg" // Replace with your image path
alt="MacBook Promotion"
style={{ height: "auto", width: "100%" }}
className="md:h-[400px] w-full object-cover object-center"
/>

    <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
     
    </div>
  </div>
  <div className="relative">
  <img
src="https://i.postimg.cc/L8RJmnRc/i-Phone-16-Series-4-2800.jpg" // Replace with your image path
alt="MacBook Promotion"
style={{ height: "auto", width: "100%" }}
className="md:h-[400px] w-full object-cover object-center"
/>

    <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
     
    </div>
  </div>
  </Slider>
  {/* Right-side banners */}
  <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0 md:ml-12 ml-0 md:w-3/12 md:py-8 py-0">
    {/* Top right banner */}
    <div className="relative h-[100px] md:h-[196px]">
    <img
      src="https://i.postimg.cc/28nqp4pd/Galaxy-Buds-3-1431.jpg" // Replace with your image path
      alt="MacBook Promotion"
       className="h-[100px] md:h-[196px] w-full object-center object-cover"
      
    />
      {/* <div className="absolute inset-0 flex items-center justify-center p-4 text-white">
        <h2 className="text-2xl font-bold">Order Online Now!</h2>
      </div> */}
    </div>

    {/* Bottom right banner */}
    <div className="relative h-[100px] md:h-[196px]">
    <img
      src="https://i.postimg.cc/28nqp4pd/Galaxy-Buds-3-1431.jpg" // Replace with your image path
      alt="MacBook Promotion"
       className="h-[100px] md:h-[195px] w-full object-cover object-center"
      
    />
      <div className="absolute inset-0 flex items-center justify-center p-4 text-white  bg-opacity-70 ">
    
      </div>
    </div>
  </div>
</div>
</section> 

);
};

export default ResponsiveSlider;
