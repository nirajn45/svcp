"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { 
  Award, 
  TrendingUp, 
  Lightbulb, 
  GraduationCap, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Briefcase, 
  Users, 
  Target, 
  CheckCircle2, 
  Play
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ── VIEWPORT ANIMATED COUNTER COMPONENTS ───────────────────────────────────

function AnimatedCounter({ value, duration = 1800 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/,/g, "").match(/\d+/)?.[0] || "0", 10);
  const suffix = value.replace(/[\d,]/g, "");

  useEffect(() => {
    let start = 0;
    const end = numericValue;
    if (end === 0) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * end);
      setCount(current);
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [numericValue, duration]);

  const formattedCount = value.includes(",") ? count.toLocaleString() : count.toString();
  return <span>{formattedCount}{suffix}</span>;
}

function ViewportCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className="font-extrabold text-4xl sm:text-5xl text-[#F59E0B] tracking-tight">
      {hasIntersected ? <AnimatedCounter value={value} /> : <span>0</span>}
    </span>
  );
}

// ── DATA FOR SECTIONS ──────────────────────────────────────────────────────

const stats = [
  { value: "3,000+", label: "Offer Letters" },
  { value: "50 LPA", label: "Highest Package Offered" },
  { value: "12,000+", label: "Dreams Fulfilled" },
  { value: "350+", label: "Companies Visited Per Year" }
];

const visionCards = [
  {
    icon: Award,
    title: "Maximum Opportunities",
    text: "“To create maximum opportunities for the students for their bright future.”"
  },
  {
    icon: TrendingUp,
    title: "Employable Graduates",
    text: "“To develop employable and market ready graduates who can be an asset for the industry and can play a pivotal role in nation building.”"
  },
  {
    icon: GraduationCap,
    title: "Professional Skill Development",
    text: "“To equip students with relevant professional skills in order to guide them towards bright careers with sincerity, honesty, and hard work.”"
  },
  {
    icon: Lightbulb,
    title: "Maximum Opportunities",
    text: "“To create maximum opportunities for students for their bright future.”"
  }
];

const testimonials = [
  {
    quote: "“Great learning experience and the college provided me with the opportunities needed. Truly outstanding and really really thankful for the support”",
    name: "Rohit Verma",
    role: "SDE",
    avatar: "/placement achievements/Rohit verma.jpeg"
  },
  {
    quote: "“It have broadened my horizons and helped me advance my career. The college and management is incredibly supportive towards their students and also providing great learning experience for all”",
    name: "Rahul",
    role: "System Engineer",
    avatar: "/placement achievements/Rahul.jpeg"
  },
  {
    quote: "“The program provided me with the skills and knowledge needed to excel in the field of Medicine. Highly recommended!”",
    name: "Mohit Bawa",
    role: "Software Engineer",
    avatar: "/placement achievements/mohit bawa.jpeg"
  },
  {
    quote: "“The instructors are top-notch and the curriculum is well-structured. I feel well-prepared for my career in Pharmacy.”",
    name: "Jyoti Kumari",
    role: "Software Developer",
    avatar: "/placement achievements/Jyoti kumari.jpeg"
  }
];

export default function AboutPlacementsPage() {
  const [shubhamScroll, setShubhamScroll] = useState(false);
  const [manikScroll, setManikScroll] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15
      }
    },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      
      {/* ── SECTION 1: BANNER IMAGE ───────────────────────────────────────── */}
      <section className="w-full bg-white" id="banner">
        <div className="w-full">
          <Image
            src="/banner/About Placements.jpeg"
            alt="About Placements Banner"
            width={1920}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>


      {/* ── SECTION 2: IMPECCABLE PLACEMENTS ─────────────────────────────── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              {...fadeInUp}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-[#0F4C81]/5 rounded-full">
                <span className="text-[#0F4C81] font-bold text-xs uppercase tracking-widest">
                  Placements Department
                </span>
              </div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F4C81] tracking-tight">
                  Impeccable <span className="text-[#F59E0B]">Placements</span>
                </h2>
                <div className="w-20 h-1.5 bg-[#F59E0B] rounded-full mt-4" />
              </div>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-700 leading-relaxed italic">
                "Bridging the gap between industry & Academia"
              </h4>

              <div className="space-y-4 text-gray-600 leading-relaxed text-base text-justify">
                <p>
                  At SVIET, the Placement department constantly keeps working towards bridging the gap between industry & Academia. Our endeavor is to keep the needs of the industry perspective and in turn make the learning more pragmatic and applicable.
                </p>
                <p>
                  The placement activities are for the students and by the students. SVGOI has been successful in adding more and more companies in the list of its recruiters in last few years.
                </p>
                <p className="font-medium text-gray-800 border-l-4 border-[#0F4C81] pl-4 bg-gray-50 py-3 rounded-r-xl">
                  The Training and placement cell of SVGOI strives for converting every student in to a 100% employable asset while they are pursuing their education with us and endeavors for accomplishing the concept – “One Person One Job.”
                </p>
              </div>
            </motion.div>

            {/* Right Collage/Image */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              {/* Premium Glow Aura Behind */}
              <div className="absolute -inset-4 bg-[#0F4C81]/5 rounded-[2.5rem] blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                <Image 
                  src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhWwQwn28c7IBZyYbRd8MGlO2DUFtnKVSjPJWq" 
                  alt="Impeccable Placements Collage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#F59E0B] p-2 rounded-lg">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-200 font-bold uppercase tracking-wider">Campus Drives</p>
                      <p className="font-semibold">Future Ready Professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PLACEMENT VIDEOS ────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Decorative Grid Background Pattern */}
        <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(#0F4C81_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F4C81] mb-4">
              Placement <span className="text-[#F59E0B]">Success Stories</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Hear directly from our brilliant achievers who secured premium placements in top corporations.
            </p>
            <div className="w-24 h-1 bg-[#F59E0B] rounded-full mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { 
                url: "https://www.youtube.com/embed/0Uj5juV2Ik0?si=pSPedn0L9dYzzbfN", 
                title: "Placement Success Story 1" 
              },
              { 
                url: "https://www.youtube.com/embed/9Nb9t09ea0w?si=Gc8nTGKpHigYmEPx", 
                title: "Placement Success Story 2" 
              }
            ].map((video, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.15 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-200/50 hover:scale-[1.02] transition-transform duration-300 aspect-video group"
              >
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: OUR VISION (SLIDER) ─────────────────────────────────── */}
      <section className="py-24 bg-[#001B49] text-white relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header row with Navigation Buttons */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div {...fadeInUp}>
              <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
                Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold">
                Our <span className="text-[#F59E0B]">Vision</span>
              </h2>
              <p className="text-gray-300 mt-2 text-base sm:text-lg">
                Best Campus Experience, Best Placements and Best Culture
              </p>
            </motion.div>

            {/* Custom Nav Buttons */}
            <motion.div 
              {...fadeInUp}
              className="flex gap-3 shrink-0"
            >
              <button className="vision-prev w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-[#F59E0B] text-white rounded-full transition-all duration-300 border border-white/20 hover:border-[#F59E0B] cursor-pointer shadow-md group">
                <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button className="vision-next w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-[#F59E0B] text-white rounded-full transition-all duration-300 border border-white/20 hover:border-[#F59E0B] cursor-pointer shadow-md group">
                <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          </div>

          {/* Swiper Slider */}
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
              navigation={{ prevEl: ".vision-prev", nextEl: ".vision-next" }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="w-full py-4 overflow-visible"
            >
              {visionCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <SwiperSlide key={idx} className="h-auto">
                    <div className="bg-white text-gray-900 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-xl border border-gray-100 flex flex-col justify-between min-h-[260px] h-full relative overflow-hidden group">
                      {/* Subtle accent border on hover */}
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-[#F59E0B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      
                      <div>
                        {/* Dynamic Floating Icon */}
                        <div className="bg-[#0F4C81]/10 p-3 rounded-2xl w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-[#0F4C81] transition-colors duration-300">
                          <Icon className="w-7 h-7 text-[#0F4C81] group-hover:text-white transition-colors duration-300" />
                        </div>

                        <h3 className="text-xl font-bold text-[#0F4C81] mb-4">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm italic font-medium">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: OUR MISSION ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 rounded-3xl shadow-2xl overflow-hidden min-h-[550px] border border-gray-100 bg-white">
            
            {/* Left Content Column */}
            <motion.div 
              {...fadeInUp}
              className="p-8 sm:p-16 flex flex-col justify-center space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-[#F59E0B]/10 rounded-full w-fit">
                <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest">
                  Driving Excellence
                </span>
              </div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F4C81] tracking-tight">
                  Our <span className="text-[#F59E0B]">Mission</span>
                </h2>
                <p className="text-gray-500 mt-2 text-sm sm:text-base font-medium">
                  Best Campus Experience, Best Placements and Best Culture
                </p>
                <div className="w-16 h-1 bg-[#F59E0B] rounded-full mt-4" />
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed text-justify text-base">
                <p>
                  The organization aims to fortify its bonds with industries through robust campus connections, fostering mutually beneficial relationships. It seeks to cultivate enduring partnerships with businesses, facilitating meaningful student placements.
                </p>
                <p>
                  Additionally, the organization is committed to offering comprehensive guidance for the holistic development of students and job seekers, ensuring their preparedness for professional endeavors.
                </p>
              </div>
            </motion.div>

            {/* Right Image Column */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative min-h-[300px] lg:min-h-full"
            >
              <Image 
                src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhWewVem8c7IBZyYbRd8MGlO2DUFtnKVSjPJWq" 
                alt="Our Mission Students Collaborating" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* High Contrast Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white z-10 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-12 bg-[#F59E0B] rounded-full" />
                  <div>
                    <h5 className="font-bold text-lg text-[#F59E0B]">Cultivating Enduring Partnerships</h5>
                    <p className="text-sm text-gray-200">Enabling global growth through placement networks.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: PLACEMENT CELL TEAM ────────────────────────────────── */}
      <section className="py-24 bg-gray-50 relative border-b border-gray-100">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F4C81]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0F4C81] font-bold text-xs uppercase tracking-widest block mb-2">
              Leadership & Coordination
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F4C81] mb-4">
              Placement Cell <span className="text-[#F59E0B]">Team</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Meet the dedicated minds bridging academic excellence with corporate opportunities.
            </p>
            <div className="w-20 h-1 bg-[#F59E0B] rounded-full mx-auto mt-4" />
          </motion.div>

          {/* Leaders Grid (Two Side-by-Side Boxes) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Box 1: Adv. Shubham Garg */}
            <motion.div
              {...fadeInUp}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-[600px] hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Top 50%: Image */}
              <div className="relative h-1/2 w-full overflow-hidden">
                <Image
                  src="/images/placements/shubham-sir.avif"
                  alt="Adv. Shubham Garg"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: "center 22%" }}
                />
              </div>

              {/* Bottom 50%: Text & Button */}
              <div className="p-6 sm:p-8 h-1/2 flex flex-col justify-between bg-white">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F4C81]">Adv. Shubham Garg</h3>
                  <p className="text-xs bg-[#F59E0B]/10 text-[#F59E0B] font-bold px-2 py-0.5 rounded-full inline-block">
                    Director — Placements
                  </p>
                </div>

                {/* Text Container */}
                <div className="flex-1 my-3 overflow-hidden relative">
                  <div className={`text-gray-600 text-sm sm:text-base italic leading-relaxed text-justify h-full pr-1 ${shubhamScroll ? 'overflow-y-auto' : 'overflow-hidden'}`}>
                    <p>
                      "Our goal is to provide strong placement opportunities and meaningful corporate exposure to students. Over the years, the Training & Placement Cell has successfully connected students with reputed organizations across multiple industries."
                    </p>
                    <p className="mt-3">
                      "We focus on building industry-ready professionals by aligning academic learning with practical skills, ensuring students are well-prepared to meet evolving career demands."
                    </p>
                  </div>
                  {!shubhamScroll && (
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                  )}
                </div>

                {/* Button Container */}
                <div className="pt-2 border-t border-gray-100 flex justify-between items-center shrink-0">
                  <button
                    onClick={() => setShubhamScroll(!shubhamScroll)}
                    className="text-[#0F4C81] hover:text-[#F59E0B] font-bold text-xs uppercase tracking-wider flex items-center gap-1 transition-colors focus:outline-none"
                  >
                    {shubhamScroll ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Box 2: Er. Manik Dhiman */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-[600px] hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Top 50%: Image */}
              <div className="relative h-1/2 w-full overflow-hidden">
                <Image
                  src="/images/placements/manik.png"
                  alt="Er. Manik Dhiman"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom 50%: Text & Button */}
              <div className="p-6 sm:p-8 h-1/2 flex flex-col justify-between bg-white">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F4C81]">Er. Manik Dhiman</h3>
                  <p className="text-xs bg-[#F59E0B]/10 text-[#F59E0B] font-bold px-2 py-0.5 rounded-full inline-block">
                    Placements Operations Executive
                  </p>
                </div>

                {/* Text Container */}
                <div className="flex-1 my-3 overflow-hidden relative">
                  <div className={`text-gray-600 text-sm sm:text-base italic leading-relaxed text-justify h-full pr-1 ${manikScroll ? 'overflow-y-auto' : 'overflow-hidden'}`}>
                    <p>
                      "I, Manik Dhiman, am currently working as Placement Operation Executive at Swami Vivekanand Group of Institution. I am responsible for coordinating placement activities, managing student recruitment drives, and maintaining strong industry connections for career opportunities. My role includes organizing campus placements, conducting training sessions, and assisting students in career guidance and interview preparation."
                    </p>
                    <p className="mt-3">
                      "At SVCP, students are provided with excellent placement opportunities through collaborations with reputed companies and industry partners. The institution focuses on enhancing employability skills through aptitude training, technical workshops, internships, and personality development programs. Regular industrial interactions, seminars, and expert sessions help students stay aligned with current industry requirements. The dedicated placement cell continuously works towards providing maximum career opportunities and ensuring successful professional growth for students."
                    </p>
                  </div>
                  {!manikScroll && (
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                  )}
                </div>

                {/* Button Container */}
                <div className="pt-2 border-t border-gray-100 flex justify-between items-center shrink-0">
                  <button
                    onClick={() => setManikScroll(!manikScroll)}
                    className="text-[#0F4C81] hover:text-[#F59E0B] font-bold text-xs uppercase tracking-wider flex items-center gap-1 transition-colors focus:outline-none"
                  >
                    {manikScroll ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Other Members Without Photos */}
          <div className="mt-16">
            <motion.div {...fadeInUp} className="text-center mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F4C81]">T&P Officers & Coordinators</h3>
              <p className="text-gray-500 text-sm mt-1">Supporting hands executing daily placement operations</p>
              <div className="w-12 h-1 bg-[#F59E0B] rounded-full mx-auto mt-2" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Ms. Ekta Mahajan", role: "Training & Placement Officer" },
                { name: "Ms. Sapna Sood", role: "Placement Coordinator" },
                { name: "Ms. Daizy Sharma", role: "Training & Placement Coordinator" },
              ].map((member, idx) => (
                <motion.div
                  key={idx}
                  {...fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="bg-[#0F4C81]/10 p-3 rounded-xl group-hover:bg-[#0F4C81] transition-colors duration-300 shrink-0">
                    <Users className="w-6 h-6 text-[#0F4C81] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F4C81] text-base leading-tight group-hover:text-[#F59E0B] transition-colors duration-300">
                      {member.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: TESTIMONIALS ───────────────────────────────────────── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0F4C81] font-bold text-xs uppercase tracking-widest block mb-2">
              Student Journeys
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F4C81] mb-4">
              Our Students <span className="text-[#F59E0B]">Speak</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Our Reviews Speak for Us
            </p>
            <div className="w-20 h-1 bg-[#F59E0B] rounded-full mx-auto mt-4" />
          </motion.div>

          {/* Testimonials Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 }
              }}
              className="w-full pb-16"
            >
              {testimonials.map((t, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between relative group">
                    {/* Big Quote Icon */}
                    <div className="absolute top-8 right-8 opacity-10 text-[#0F4C81] group-hover:scale-110 transition-transform duration-300">
                      <Quote className="w-16 h-16" />
                    </div>

                    <div className="space-y-6">
                      {/* Quote Content */}
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base italic">
                        {t.quote}
                      </p>

                      <hr className="border-gray-100" />

                      {/* Profile Details */}
                      <div className="flex items-center gap-4">
                        <Image 
                          src={t.avatar} 
                          alt={t.name}
                          width={56}
                          height={56}
                          className="w-14 h-14 rounded-full object-cover shrink-0 aspect-square border-2 border-[#0F4C81]/20 shadow-md animate-none"
                        />
                        <div>
                          <h4 className="font-bold text-[#0F4C81] text-base sm:text-lg leading-tight">
                            {t.name}
                          </h4>
                          <span className="text-xs bg-[#F59E0B]/10 text-[#F59E0B] font-bold px-2 py-0.5 rounded-full mt-1 inline-block">
                            {t.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL PREMIUM CTA FOOTER ───────────────────────────────────────── */}
      <section className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div 
            {...fadeInUp} 
            className="bg-[#001B49] p-12 sm:p-20 rounded-[3.5rem] shadow-2xl text-white relative overflow-hidden"
          >
            <div className="absolute -top-10 -left-10 w-44 h-44 bg-[#0F4C81]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#F59E0B]/10 rounded-full blur-3xl" />
            
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 relative z-10 leading-tight">
              Ready to Accelerate Your <br />
              <span className="text-[#F59E0B]">Career Pathway?</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-xl mx-auto relative z-10 leading-relaxed">
              Step into an ecosystem backed by stellar connections, modern skill training, and consistent campus hiring.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <a
                href="/contact"
                className="bg-[#F59E0B] hover:bg-[#d97706] text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-center"
              >
                Inquire Placements
              </a>
              <a
                href="/placements/placementTraining"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-center"
              >
                Explore Training Program
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
