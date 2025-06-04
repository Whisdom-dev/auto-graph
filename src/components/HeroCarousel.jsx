import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.webp";

const HeroCarousel = () => {
  return (
    <div className="w-full">
      <Swiper navigation modules={[Navigation]} loop={true} className="mySwiper">
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-center h-[80vh] w-3/4">
            {/* Left Image */}
            <div className="flex-1 h-full">
              <img src={img1} alt="Style 1" className="h-full w-3/4 object-contain" />
            </div>

            {/* Center Content */}
            <div className="flex-1 flex flex-col items-center justify-center text-center bg-white px-4 py-8">
              <div className="rotate-45 bg-black text-white px-4 py-2 text-xl font-semibold mb-4">
                <div className="-rotate-45">new arrivals</div>
              </div>
              <p className="tracking-widest text-gray-600 text-sm mb-4">AFFORDABLE FASHION</p>
              <button className="bg-red-400 text-white px-6 py-2 rounded hover:bg-red-500 transition">
                SHOP NOW
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 h-full">
              <img src={img2} alt="Style 2" className="h-full w-full object-contain" />
            </div>
          </div>
        </SwiperSlide>

        {/* Add more <SwiperSlide> components here for more slides */}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
