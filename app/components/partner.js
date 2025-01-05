"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

function Partner() {
  const [slidesPerView, setSlidesPerView] = useState(2); // Default for mobile devices

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(5); // Show 5 slides per view on large screens (lg+)
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(3); // Show 3 slides per view on medium screens (md)
      } else {
        setSlidesPerView(2); // Show 2 slides per view on small screens (sm)
      }
    };

    updateSlidesPerView(); // Update on initial render

    // Update slides per view when window is resized
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <div className="container mx-auto text-center py-10">
      <p className="text-sm text-gray-500">
        <span className="hidden md:inline-block">&lt;</span> Trusted by{" "}
        <span className="font-bold text-orange-500">Technologies You Use</span>{" "}
        <span className="hidden md:inline-block">&gt;</span>
      </p>

      <div className="mt-8 flex justify-center">
        <Swiper
          spaceBetween={10} // Small space between the slides
          slidesPerView={slidesPerView}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="flex justify-center"
        >
          <SwiperSlide>
            <img
              src="/images/partner/google_cloud.svg"
              alt="Google Cloud"
              className="w-32 h-10 object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/partner/chatgpt.png"
              alt="ChatGpt"
              className="w-32 h-10 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/partner/hostinger.png"
              alt="Hostinger"
              className="w-32 h-10 object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/partner/firebase.png"
              alt="Firebase"
              className="w-32 h-10 object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/partner/mongodb.png"
              alt="MongoDB"
              className="w-32 h-10 object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/partner/sanity.png"
              alt="Sanity"
              className="w-32 h-10 object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/partner/react.png"
              alt="React JS"
              className="w-32 h-10 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/partner/android.svg"
              alt="Android"
              className="w-32 h-10 object-contain"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Partner;
