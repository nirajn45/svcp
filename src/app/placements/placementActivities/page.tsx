"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  TrendingUp, Users, Award, Star,
  Building2, Target, Zap, ArrowRight, CheckCircle2,
  MapPin, BarChart3, ChevronLeft, ChevronRight
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.13 } },
  viewport: { once: true },
};

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = "", decimals = 0, duration = 1000 }: { target: number; suffix?: string; decimals?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setDisplay(target.toFixed(decimals));
        clearInterval(timer);
      } else {
        setDisplay(start.toFixed(decimals));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration, decimals]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function PlacementActivitiesPage() {
  const heroStats = [
    { num: 2200, suffix: "+", label: "Recruiting Partners", decimals: 0 },
    { num: 95, suffix: "%+", label: "Placement Rate", decimals: 0 },
    { num: 60, suffix: " LPA", label: "Highest Package", decimals: 0 },
    { num: null, suffix: "Pan-India", label: "Industry Network", decimals: 0 },
  ];

  const dcaInitiatives = [
    {
      emoji: "📊",
      title: "Skill Development Programs",
      description: "Structured aptitude training, coding bootcamps, soft skills workshops, and communication labs — preparing students for every stage of the hiring process.",
    },
    {
      emoji: "🎯",
      title: "Mock Interview Drives",
      description: "Industry-simulated interview rounds with real recruiters, covering technical, HR, and group discussion rounds across multiple domains.",
    },
    {
      emoji: "🤝",
      title: "Corporate Connect Sessions",
      description: "Live sessions with hiring managers and HR leaders from top companies, giving students direct access to industry insights and career guidance.",
    },
  ];

  const galleryItems = [
    {
      image: "/corporate connect/corporate_connect.avif",
      location: "Pune, Maharashtra",
      title: "Pune Chapter kickoff — Würth IT corporate visit",
      description: "Pune Chapter kickoff — Würth IT corporate visit",
    },
    {
      image: "/corporate connect/corporate_connect1.avif",
      location: "Pune, Maharashtra",
      title: "24/7 Software meet — building talent pipelines",
      description: "24/7 Software meet — building talent pipelines",
    },
    {
      image: "/corporate connect/corp2.avif",
      location: "Pan-India Corporate Drive",
      title: "SVGOI directors with industry leaders",
      description: "SVGOI directors with industry leaders",
    },
    {
      image: "/corporate connect/cc-3.avif",
      location: "Pan-India Corporate Drive",
      title: "Corporate engagement — expanding recruiter network",
      description: "Corporate engagement — expanding recruiter network",
    },
    {
      image: "/corporate connect/cc-4.avif",
      location: "Pan-India Corporate Drive",
      title: "Director-level partnership discussions",
      description: "Director-level partnership discussions",
    },
    {
      image: "/corporate connect/cc-5.avif",
      location: "Pan-India Corporate Drive",
      title: "Fostering meaningful collaborations with corporates",
      description: "Fostering meaningful collaborations with corporates",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden text-gray-800 font-sans antialiased">

      {/* ── SECTION 1: BANNER IMAGE ───────────────────────────────────────── */}
      <section className="w-full bg-white" id="banner">
        <div className="w-full">
          <img
            src="/banner/Placement Activities.jpeg"
            alt="Placement Activities Banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* ── SECTION 2: REAL-WORLD ENGAGEMENT ─────────────────────────────── */}
      <section className="py-20 bg-white" id="real-world">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            {/* Top Text Padding */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-3">
                Real-World Engagement
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                Our strong industry connections ensure that students gain hands-on experience through placement drives, internships, and collaborative initiatives, transforming them into confident professionals ready for real-world challenges.
              </p>
            </div>

            {/* Middle Image - Full Width of Card */}
            <div className="w-full relative">
              <img
                src="/images/placements/industrialExpossure.png"
                alt="Real-World Engagement"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bottom Padding area containing footer words */}
            <div className="px-6 py-5 bg-white border-t border-gray-200 flex justify-between items-center text-xs md:text-sm font-semibold tracking-wider uppercase text-gray-500">
              <span className="text-gray-400">Industrial Exposure</span>
              <span className="text-[#F59E0B] font-bold">Real-world engagement</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: DEPARTMENT OF CORPORATE AFFAIRS & TRAINING ────────── */}
      <section className="py-20 bg-[#F8FAFC]" id="dca">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Left Content Column */}
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:col-span-8 flex flex-col justify-center"
            >
              <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest mb-3">
                Department of Corporate Affairs &amp; Training
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0F4C81] mb-5 leading-tight tracking-tight">
                DCA — Bridging Academia and Industry
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                The Department of Corporate Affairs (DCA) at SVGOI is the engine behind our placement success — designing and executing programs that turn students into workplace-ready professionals before they even graduate.
              </p>
            </motion.div>

            {/* Right: DCA At a Glance Card */}
            <motion.div
              variants={fadeInRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:col-span-4 w-full"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 border-b border-gray-100 pb-3">
                  DCA At a Glance
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-gray-600">Recruiting Partners</span>
                    <span className="text-[#F59E0B] font-bold text-base">
                      <AnimatedCounter target={2200} suffix="+" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium border-t border-gray-100 pt-4">
                    <span className="text-gray-600">Placement Rate</span>
                    <span className="text-[#F59E0B] font-bold text-base">
                      <AnimatedCounter target={95} suffix="%+" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium border-t border-gray-100 pt-4">
                    <span className="text-gray-600">Highest Package</span>
                    <span className="text-[#F59E0B] font-bold text-base">
                      <AnimatedCounter target={60} suffix=" LPA" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── SECTION 4: DCA INITIATIVES ── */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
            id="initiatives"
          >
            {dcaInitiatives.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="text-3xl mb-5">
                    {card.emoji}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0F4C81] transition-colors tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── COMBINED SECTIONS 5 & 6: CORPORATE CONNECT SERIES & GALLERY ── */}
      <section className="py-24 bg-[#071C3D] text-white relative overflow-hidden" id="corporate-connect">
        {/* Glow Background Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Row */}
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:col-span-8 flex flex-col"
            >
              <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest mb-3">
                Corporate Chapters
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
                Corporate Connect Series
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl font-light">
                SVGOI takes a leap forward with the launch of the Corporate Connect Series. Kicking off with the Pune Chapter — over 10+ corporate meetings in 3 days to foster meaningful collaborations and real hiring partnerships.
              </p>
            </motion.div>

            {/* Custom Swiper Navigation Buttons */}
            <motion.div
              variants={fadeInRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:col-span-4 flex justify-end gap-3 mt-6 lg:mt-0"
            >
              <button className="swiper-prev-btn w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F59E0B] hover:border-[#F59E0B] transition-all duration-300 cursor-pointer text-white">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="swiper-next-btn w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F59E0B] hover:border-[#F59E0B] transition-all duration-300 cursor-pointer text-white">
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Swiper Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
              }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
              navigation={{
                nextEl: ".swiper-next-btn",
                prevEl: ".swiper-prev-btn",
              }}
              className="pb-16"
            >
              {galleryItems.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="h-[320px] rounded-lg overflow-hidden group cursor-pointer shadow-xl border border-white/5 flex flex-col bg-[#05162E]">
                    
                    {/* Top 75% Image Space */}
                    <div className="relative h-3/4 w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Dark gradient overlay inside image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      
                      {/* Location Badge */}
                      <div className="absolute bottom-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1 bg-[#F59E0B] text-white text-[10px] font-extrabold px-3 py-1 rounded-md tracking-wider uppercase shadow-md">
                          <MapPin className="w-3.5 h-3.5" /> {item.location}
                        </span>
                      </div>
                    </div>
                    
                    {/* Bottom 25% Text Space */}
                    <div className="h-1/4 w-full py-3 px-4 sm:px-5 flex flex-col justify-center bg-[#0C254C]/50 group-hover:bg-[#0C254C]/80 transition-colors duration-300 border-t border-white/5">
                      <h4 className="text-sm sm:text-base font-bold text-white line-clamp-2 leading-snug group-hover:text-[#F59E0B] transition-colors duration-300 tracking-tight">
                        {item.title}
                      </h4>
                      {item.description && item.description !== item.title && (
                        <p className="text-gray-300 text-xs mt-1 leading-relaxed line-clamp-1 font-light opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Pagination container */}
            <div className="swiper-custom-pagination flex justify-center gap-2 mt-4" />
          </motion.div>

        </div>
      </section>

      {/* ── SECTION 7: INDUSTRY IMPACT CTA ───────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        {/* Navy Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81] via-[#0b3560]/90 to-[#071C3D]" />
        
        {/* Glow & Floating Elements */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/20 backdrop-blur-md border border-[#F59E0B]/30 px-5 py-2 rounded-full mb-8 shadow-sm">
              <Zap className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
              <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest">Industry Impact</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              Building Career Pathways <br className="hidden md:inline" />
              Through <span className="text-[#F59E0B] font-extrabold">Industry Collaboration</span>
            </h2>

            <p className="text-blue-100 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Our directors and placement team actively visit leading companies across India — every handshake is a career pathway for our students.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#real-world"
                whileHover={{ scale: 1.02, y: -2 }}
                className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-8 py-4 rounded-lg shadow-lg shadow-[#F59E0B]/20 transition-all duration-300 text-sm tracking-wider uppercase"
              >
                View Placement Activities
              </motion.a>
              <motion.a
                href="/placements/aboutPlacements"
                whileHover={{ scale: 1.02, y: -2 }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 text-sm tracking-wider uppercase"
              >
                Explore Placements <ArrowRight className="w-5 h-5 animate-pulse" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Custom Swiper Bullet Styling ──────────────────────────────────── */}
      <style>{`
        .swiper-custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: rgba(255, 255, 255, 0.3);
          opacity: 1;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
        .swiper-custom-pagination .swiper-pagination-bullet-active {
          width: 24px;
          background-color: #F59E0B !important;
        }
      `}</style>

    </div>
  );
}
