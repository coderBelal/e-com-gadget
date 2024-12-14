import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

const ResponsiveSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section className="w-[95%] lg:mt-24 mx-auto md:py-8 py-4 relative top-14 md:top-0">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-2 shadow-lg overflow-hidden">
        {/* Left Slider */}
        <Slider {...settings} className="md:w-8/12 relative slider-container">
          {[
            "https://i.postimg.cc/L8RJmnRc/i-Phone-16-Series-4-2800.jpg",
            "https://i.postimg.cc/L8RJmnRc/i-Phone-16-Series-4-2800.jpg",
            "https://i.postimg.cc/L8RJmnRc/i-Phone-16-Series-4-2800.jpg",
          ].map((src, index) => (
            <div key={index} className="relative">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full md:h-[410px] object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* Right Banners */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-0 md:w-4/12">
          {/* Top Right Banner */}
          <div className="relative">
            <img
              src="https://i.postimg.cc/28nqp4pd/Galaxy-Buds-3-1431.jpg"
              alt="Galaxy Buds"
              className="h-[100px] md:h-[200px] w-full object-cover"
            />
          </div>
          {/* Bottom Right Banner */}
          <div className="relative">
            <img
              src="https://i.postimg.cc/28nqp4pd/Galaxy-Buds-3-1431.jpg"
              alt="Galaxy Buds Promo"
              className="h-[100px] md:h-[200px] w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Add Custom Styles for Arrows */}
      <style jsx global>{`
        .slider-container .slick-prev,
        .slider-container .slick-next {
          position: absolute;
          top: 50%; /* Center the arrows vertically */
          z-index: 10;
          transform: translateY(-50%);
        }

        .slider-container .slick-prev {
          left: 10px; /* Adjust left position */
        }

        .slider-container .slick-next {
          right: 10px; /* Adjust right position */
        }

        .slider-container .slick-prev:before,
        .slider-container .slick-next:before {
          font-size: 24px;
          color: #fff; /* White color for arrows */
        }
      `}</style>
    </section>
  );
};

export default ResponsiveSlider;
