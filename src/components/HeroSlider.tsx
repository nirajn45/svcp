"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhSui28QgkXizDmJxT0aBjLVsUr63F7G4Oev5K",
  "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhDzzoGIXngp296noYJjdXKVt8bBP4eQvShacs",
  "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhDz96jQ6ngp296noYJjdXKVt8bBP4eQvShacs",
  "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh3wvK7sXWcBCPbjL5ves4TuYMKaSJxRA8NGUp",
  "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhDzJW1Mcngp296noYJjdXKVt8bBP4eQvShacs",
  "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhSVF7x6gkXizDmJxT0aBjLVsUr63F7G4Oev5K",
];

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[calc(70vh-55px)] md:h-[calc(75vh-55px)]">

      {/* 🔥 CUSTOM ARROWS */}
      <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-md hover:bg-[#F59E0B] hover:text-white transition-all duration-300 cursor-pointer">
        <ChevronLeft className="w-8 h-8" />
      </div>

      <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-md hover:bg-[#F59E0B] hover:text-white transition-all duration-300 cursor-pointer">
        <ChevronRight className="w-8 h-8" />
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        speed={900}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop
        className="w-full h-full"
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i} className="w-full h-full relative overflow-hidden">
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover object-center"
            />
            {/* subtle cinematic overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}