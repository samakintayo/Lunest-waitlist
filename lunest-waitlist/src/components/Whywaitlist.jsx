import React from "react";
import JoinCard from "./JoinCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Whywaitlist = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-blue-700 text-3xl sm:text-4xl font-medium font-['aeonik'] text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-200">
          Why Join the Waitlist?
        </h2>
        <p className="text-black text-lg sm:text-2xl mt-3 font-['aeonik']">
          Early access means:
        </p>
      </div>

      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        modules={[Pagination]}
        className="w-full"
      >
     
          {/* Card content */}
          <SwiperSlide>
            <JoinCard
              title="Exclusive Launch Offers"
              imgSrc="/assets/character-1.png"
              bgColor="bg-red-100"
              bgSrc1="/assets/card-bg1.svg"
              bgsrc2="/assets/card-bg2.svg"
            />
          </SwiperSlide>
      
        <SwiperSlide>
          <JoinCard
            title="Early Bird Benefits"
            imgSrc="/assets/character-2.png"
            bgColor="bg-violet-100"
            bgSrc1="/assets/Vector2b.svg"
            bgsrc2="/assets/Vector2a.svg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <JoinCard
            title="Priority Access"
            imgSrc="/assets/character-3.png"
            bgColor="bg-green-100"
            bgSrc1="/assets/vector3b.svg"
            bgsrc2="/assets/Vector3a.png"
          />
        </SwiperSlide>

        <SwiperSlide>
          <JoinCard
            title="Special Recognition"
            imgSrc="/assets/character-4.png"
            bgColor="bg-indigo-100"
            bgSrc1="/assets/vector4b.svg"
            bgsrc2="/assets/vector4a.svg"
          />
        </SwiperSlide>
      </Swiper>

      <div className="mt-10 flex justify-center">
        <a href="/waitlist" className="flex items-center font-['aeonik'] gap-2 px-6 py-3 rounded-full border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition">
          Join the Waitlist
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Whywaitlist;
