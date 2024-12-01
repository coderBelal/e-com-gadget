import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ResponsiveSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="    ">    <div className=" lg:mt-24   lg:top-0 max-w-7xl mx-auto p-8">
    {/* Carousel Section */}
    <div className="lg:flex lg:justify-between lg:items-center lg:gap-6">
      {/* Side Images for Large Screens */}
    

      {/* Main Carousel */}
      <div className=" mt-32 lg:mt-12 md:mt-16  h-64 sm:h-80 md:h-96 lg:h-[500px] lg:w-3/5">
        <Slider {...sliderSettings}>
          <div className="h-full flex justify-center items-center">
            <img
              src="https://i.postimg.cc/L8RJmnRc/i-Phone-16-Series-4-2800.jpg" // Replace with Acer Aspire 3 image
              alt="Acer Aspire 3"
              className="h-full object-cover"
            />
          </div>
          <div className="h-full flex justify-center items-center">
            <img
              src="https://i.postimg.cc/L8RJmnRc/i-Phone-16-Series-4-2800.jpg" // Replace with Galaxy Buds 3 image
              alt="Galaxy Buds 3"
              className="h-full object-cover"
            />
          </div>
          <div className="h-full flex justify-center items-center">
            <img
              src="https://i.postimg.cc/L8RJmnRc/i-Phone-16-Series-4-2800.jpg" // Replace with Apple Watch image
              alt="Apple Watch Series 10"
              className="h-full object-cover"
            />
          </div>
        </Slider>
      </div>

      {/* Side Images for Large Screens */}
      <div className="hidden lg:flex lg:flex-col lg:gap-4 lg:w-1/4">
        <div className="flex justify-center items-center">
          <img
            src="https://i.postimg.cc/28nqp4pd/Galaxy-Buds-3-1431.jpg" // Replace with Galaxy Buds 3 image
            alt="Galaxy Buds 3"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://i.postimg.cc/L8Tn528n/Watch-Series-10-Nov-5395.jpg" // Replace with Apple Watch image
            alt="Apple Watch"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>

    {/* Additional Sections for Small and Medium Screens */}
    <div className="grid grid-cols-2 gap-4 mt-8 lg:hidden">
      <div className="flex justify-center items-center">
        <img
          src="https://i.postimg.cc/28nqp4pd/Galaxy-Buds-3-1431.jpg" // Replace with Galaxy Buds 3 image
          alt="Galaxy Buds 3"
          className="w-4/5   md:w-3/4 h-auto"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="https://i.postimg.cc/L8Tn528n/Watch-Series-10-Nov-5395.jpg" // Replace with Apple Watch image
          alt="Apple Watch"
          className="w-4/5 md:w-3/4 h-auto"
        />
      </div>
    </div>
  </div></div>

  );
};

export default ResponsiveSlider;
