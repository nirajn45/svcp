"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const labs = [
  {
    name: "Research Lab",
    desc: "Conduct research activities related to pharmaceuticals.",
    image: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhBnJUD2Mud4gJR58THKbIQfUZarPY2nLjVtEe",
  },
  {
    name: "Practical Lab",
    desc: "Engage in hands-on practical experiments and learning.",
    image: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhNHZuQIzLPBF2lpUHSbiJz36vD58Tat1fEhG9",
  },
  {
    name: "QA Lab",
    desc: "Perform quality assurance tests and analysis.",
    image: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhfWAADIFxK4JFqQODBl0s6A2YzcVa1CPeTMyh",
  },
  {
    name: "Pharma Chemistry Lab",
    desc: "Explore pharmaceutical chemistry and compound synthesis.",
    image: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhNAPxfwzLPBF2lpUHSbiJz36vD58Tat1fEhG9",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const LabCarousel = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header Row */}
        <div className="flex items-end justify-between mb-10">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F4C81]">
              Laboratories
            </h2>
            <p className="text-gray-500 mt-2 text-lg">
              Where Theories{" "}
              <span className="text-[#F59E0B] font-semibold">Meet Fun</span>
            </p>
          </motion.div>
          {/* Custom Nav Buttons */}
          <div className="flex gap-3">
            <button className="lab-prev w-11 h-11 flex items-center justify-center bg-[#F59E0B] hover:bg-[#d97706] text-white rounded-md shadow transition-colors duration-200">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="lab-next w-11 h-11 flex items-center justify-center bg-[#F59E0B] hover:bg-[#d97706] text-white rounded-md shadow transition-colors duration-200">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation={{ prevEl: ".lab-prev", nextEl: ".lab-next" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {labs.map((lab, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg group hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                  {/* Image */}
                  <Image
                    src={lab.image}
                    alt={lab.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/60 transition-colors duration-500 z-10" />
                  {/* Content */}
                  <div className="absolute bottom-8 left-8 flex gap-4 items-start z-20">
                    {/* Accent line */}
                    <div className="w-1 h-10 bg-[#F59E0B] rounded-full shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-semibold text-white leading-tight">
                        {lab.name}
                      </h3>
                      <p className="text-white/90 text-base max-w-xs mt-2 leading-relaxed">
                        {lab.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default LabCarousel;
