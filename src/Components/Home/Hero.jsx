import { FaSearch } from "react-icons/fa";
import banner9 from "/images/compressed-banner/banner-9.jpg";

import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    setCurrentSlide(activeIndex);
  };
  const handleSlideClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="w-full h-[80vh] relative ">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        modules={[Autoplay, EffectCube]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        onSlideChange={handleSlideChange}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className={`w-full h-full`}>
            <div className="slide-1 w-full h-full bg-linear-to-r from-primary to-transparent relative">
              {/* this div is for overlay manage */}
              <div className="w-full h-full bg-linear-to-r from-primary from-10% to-transparent opacity-70 absolute top-0 left-0"></div>
              {/* Image section */}
              <img src={banner9} alt="banner1" className="w-full h-full" />
              {/* Text and Input field Section */}
              <div className="w-[50%] h-full flex flex-col gap-5 justify-center items-start pl-24 absolute top-0 left-0">
                <h1 className="text-5xl text-secondary font-bold">
                  2727+ Online <br /> Courses from the <br /> Best Tutors three
                </h1>
                {/* Input Box and serch icon */}
                <div className="w-full relative">
                  <input
                    type="text"
                    name="courseName"
                    placeholder="What do you want to learn"
                    id=""
                    className=" p-3 w-full text-secondary text-lg bg-primary"
                  />
                  <FaSearch className="absolute right-4 top-5"></FaSearch>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`w-full h-full`}>
            <div className="slide-1 w-full h-full bg-linear-to-r from-primary to-transparent relative">
              {/* this div is for overlay manage */}
              <div className="w-full h-full bg-linear-to-r from-primary from-10% to-transparent opacity-70 absolute top-0 left-0"></div>
              {/* Image section */}
              <img src={banner9} alt="banner1" className="w-full h-full" />
              {/* Text and Input field Section */}
              <div className="w-[50%] h-full flex flex-col gap-5 justify-center items-start pl-24 absolute top-0 left-0">
                <h1 className="text-5xl text-secondary font-bold">
                  2727+ Online <br /> Courses from the <br /> Best Tutors three
                </h1>
                {/* Input Box and serch icon */}
                <div className="w-full relative">
                  <input
                    type="text"
                    name="courseName"
                    placeholder="What do you want to learn"
                    id=""
                    className=" p-3 w-full text-secondary text-lg bg-primary"
                  />
                  <FaSearch className="absolute right-4 top-5"></FaSearch>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`w-full h-full`}>
            <div className="slide-1 w-full h-full bg-linear-to-r from-primary to-transparent relative">
              {/* this div is for overlay manage */}
              <div className="w-full h-full bg-linear-to-r from-primary from-10% to-transparent opacity-70 absolute top-0 left-0"></div>
              {/* Image section */}
              <img src={banner9} alt="banner1" className="w-full h-full" />
              {/* Text and Input field Section */}
              <div className="w-[50%] h-full flex flex-col gap-5 justify-center items-start pl-24 absolute top-0 left-0">
                <h1 className="text-5xl text-secondary font-bold">
                  2727+ Online <br /> Courses from the <br /> Best Tutors three
                </h1>
                {/* Input Box and serch icon */}
                <div className="w-full relative">
                  <input
                    type="text"
                    name="courseName"
                    placeholder="What do you want to learn"
                    id=""
                    className=" p-3 w-full text-secondary text-lg bg-primary"
                  />
                  <FaSearch className="absolute right-4 top-5"></FaSearch>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="slide-manager w-[35%] h-[20%] flex items-center gap-2 absolute bottom-2 right-4 z-50">
        <div
          onClick={() => handleSlideClick(0)}
          className={`w-full h-full ${
            currentSlide === 0 && "border-5 border-secondary"
          }`}
        >
          <img src={banner9} alt="Banner Image" className={`w-full h-full `} />
        </div>
        <div
          onClick={() => handleSlideClick(1)}
          className={`w-full h-full ${
            currentSlide === 1 && "border-5 border-secondary"
          }`}
        >
          <img src={banner9} alt="Banner Image" className={`w-full h-full `} />
        </div>
        <div
          onClick={() => handleSlideClick(2)}
          className={`w-full h-full ${
            currentSlide === 2 && "border-5 border-secondary"
          }`}
        >
          <img src={banner9} alt="Banner Image" className={`w-full h-full `} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
