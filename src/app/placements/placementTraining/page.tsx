"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  Award,
  Briefcase,
  Users,
  Target,
  BookOpen,
  Microscope,
  Compass,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  FileText,
  Activity,
  Settings
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PlacementTrainingPage = () => {
  // Animation presets
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
    viewport: { once: true, margin: "-100px" }
  };

  const floatingTransition = {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const
  };

  // Stats for Hero Section
  const heroStats = [
    { label: "Industry-Oriented Training", color: "#F59E0B" },
    { label: "Interview Readiness", color: "#F59E0B" },
    { label: "Professional Development", color: "#F59E0B" },
    { label: "Career Growth", color: "#F59E0B" }
  ];

  // Training Programs
  const programs = [
    {
      title: "Soft Skills Training",
      desc: "Enhancing communication, teamwork, and interpersonal skills for professional success.",
      icon: Users,
    },
    {
      title: "Technical Skills Development",
      desc: "Hands-on training in core technical areas relevant to industry demands.",
      icon: Settings,
    },
    {
      title: "Aptitude Training",
      desc: "Developing problem-solving and analytical abilities for competitive exams and interviews.",
      icon: Target,
    },
    {
      title: "Interview Preparation",
      desc: "Mock interviews, group discussions, and resume building workshops.",
      icon: FileText,
    },
    {
      title: "Personality Development",
      desc: "Guidance on body language, presentation skills, and workplace etiquette to create a strong professional image.",
      icon: Award,
    }
  ];

  // Industrial Exposure visits (15 items)
  const industrialVisits = [
    {
      title: "Kinvan Private Limited – Himachal Pradesh",
      desc: "Hands-on industry exposure in action! B.Pharmacy students and faculty members from Swami Vivekanand College of Pharmacy, Banur, visited Kinvan Private Limited, Nalagarh (Himachal Pradesh), an API and Biotechnology manufacturing unit, to gain practical insights into pharmaceutical production, quality control, biotechnology processes, and industrial practices.",
      image: "/industrial visits/kinvan.png"
    },
    {
      title: "Patanjali Food & Herbal Park, Haridwar",
      desc: "Hands-on industry learning in action! B.Pharmacy 4th and 6th Semester students from Swami Vivekanand College of Pharmacy, Banur, visited Patanjali Food & Herbal Park, Haridwar, to gain practical exposure to herbal product manufacturing, food processing, quality assurance, and Good Manufacturing Practices (GMP).",
      image: "/industrial visits/patanjali.png"
    },
    {
      title: "Nanoscience & Nanotech centre,  Panjab University, Chandigarh",
      desc: "Innovation and entrepreneurship in action! B.Pharmacy 3rd Semester students and faculty members from Swami Vivekanand College of Pharmacy, Banur, visited the Incubation Unit (RUSA 2.0, Bio-NEST & E-YUVA), Centre for Nanoscience & Nanotechnology, Panjab University, Chandigarh, gaining valuable exposure to startup development, nanotechnology, biotechnology, research innovation, and entrepreneurial opportunities in the pharmaceutical sector.",
      image: "/industrial visits/punjab_university.png"
    },
    {
      title: "Macleods Pharmaceuticals Ltd., Baddi, Himachal Pradesh",
      desc: "Industry exposure in action! B.Pharmacy 3rd Year students and faculty members from Swami Vivekanand College of Pharmacy, Banur, visited Macleods Pharmaceuticals Ltd., Baddi, gaining practical insights into pharmaceutical manufacturing, quality control, GMP practices, research and development, and career opportunities in the pharmaceutical industry.",
      image: "/industrial visits/macleos pharmaceuticals.png"
    },
    {
      title: "Shervotech Pharmaceuticals, Baddi",
      desc: "Learning beyond the classroom! B.Pharmacy 1st Semester students from Swami Vivekanand College of Pharmacy, Banur, visited Shervotech Pharmaceuticals Pvt. Ltd., Baddi, gaining practical exposure to pharmaceutical manufacturing processes, quality assurance systems, GMP practices, and industrial operations.",
      image: "/industrial visits/Shervotech Pharmaceuticals.png"
    }
  ];

  // Timeline Step Data
  const steps = [
    { title: "Skill Assessment", desc: "Diagnostic evaluation of core analytical and verbal skills." },
    { title: "Training Programs", desc: "Structured soft skills, technical, and aptitude workshops." },
    { title: "Mock Interviews", desc: "Simulation drills with feedback from corporate experts." },
    { title: "Industry Exposure", desc: "Real-world visits, internships, and technical seminars." },
    { title: "Placement Opportunities", desc: "Campus interviews and direct placements with corporate leaders." }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      
      {/* ── SECTION 1: BANNER IMAGE ───────────────────────────────────────── */}
      <section className="w-full bg-white" id="banner">
        <div className="w-full">
          <Image
            src="/banner/Placement.jpeg"
            alt="Placement Training Banner"
            width={1920}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>

      {/* ── SECTION 2: TRAINING METHODOLOGY ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              {...fadeInUp} 
              className="space-y-6 lg:max-w-xl"
            >
              <div className="inline-block px-4 py-2 bg-[#0F4C81]/15 text-[#0F4C81] rounded-full font-bold text-xs uppercase tracking-widest">
                Our Blueprint
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0F4C81] leading-tight">
                Training <span className="text-[#F59E0B]">Methodology</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full" />
              
              <div className="space-y-6 mt-8">
                <p className="text-xl font-bold text-gray-700 leading-snug">
                  Structured, practice-oriented programs focused on real-world application and continuous improvement.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed text-justify">
                  At SVGOI, we believe that placement preparation should be a holistic and progressive journey. We introduce corporate readiness modules at every phase of a student's graduation path. By coupling standard academic lessons with experiential mock sessions, industry-expert lectures, and strict performance tracking, we groom candidates who stand out in competitive screening procedures.
                </p>
              </div>
            </motion.div>

            {/* Right Media Display */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative group w-full flex justify-center"
            >
              {/* Decorative behind-element shadow card */}
              <div className="absolute -inset-4 bg-[#F59E0B]/10 rounded-[2.5rem] blur-xl group-hover:bg-[#F59E0B]/20 transition-all duration-500" />
              
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/placements/Training Methodology.JPG"
                  alt="Training and Workshop Session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ── SECTION 3: TRAINING PROGRAMS GRID ────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-[#F59E0B]/10 text-[#F59E0B] rounded-full font-bold text-xs uppercase tracking-widest mb-3">
              Curriculum Segments
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0F4C81] leading-tight">
              Training <span className="text-[#F59E0B]">Programs</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto mt-4" />
          </motion.div>

          {/* Premium Animated Cards Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {programs.map((program: any, idx: number) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(15,76,129,0.12)" }}
                  className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-md flex flex-col justify-between items-start transition-all duration-300 relative overflow-hidden"
                >
                  {/* Subtle accent corner overlay */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#0F4C81]/5 to-transparent group-hover:from-[#F59E0B]/10 transition-colors duration-300 rounded-tr-2xl" />

                  <div className="space-y-6 w-full">
                    {/* Top Icon Badge */}
                    <div className="bg-[#0F4C81]/5 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-[#F59E0B]/10 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[#0F4C81] group-hover:text-[#F59E0B] transition-colors duration-300" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-[#0F4C81] group-hover:text-[#F59E0B] transition-colors duration-300 tracking-tight">
                        {program.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-sm sm:text-base text-justify">
                        {program.desc}
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-100 my-6" />
                  
                  <div className="flex items-center text-xs font-bold text-[#0F4C81] group-hover:translate-x-2 transition-transform duration-300">
                    Explore Details <ArrowRight className="w-4 h-4 ml-1.5 text-[#F59E0B]" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
        </div>
      </section>


      {/* ── SECTION 4: INDUSTRIAL EXPOSURE ───────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#001B4E] text-white relative overflow-hidden">
        
        {/* Swiper Slider Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-20">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <motion.div {...fadeInUp} className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                Industrial Exposure
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#F59E0B] rounded-full shrink-0" />
                <p className="text-[#F59E0B] text-lg font-bold uppercase tracking-widest">
                  Visits, Training, Guidance and a lot more
                </p>
              </div>
            </motion.div>

            {/* Custom Navigation Buttons (Styled yellow bottom-right matching screenshots) */}
            <div className="flex gap-3 shrink-0 self-end">
              <button className="exposure-prev w-12 h-12 flex items-center justify-center bg-[#F59E0B] hover:bg-[#d97706] text-white rounded-md shadow-lg transition-colors duration-200 cursor-pointer">
                <ChevronLeft className="w-6 h-6 stroke-[3]" />
              </button>
              <button className="exposure-next w-12 h-12 flex items-center justify-center bg-[#F59E0B] hover:bg-[#d97706] text-white rounded-md shadow-lg transition-colors duration-200 cursor-pointer">
                <ChevronRight className="w-6 h-6 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* Swiper Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={28}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              navigation={{ prevEl: ".exposure-prev", nextEl: ".exposure-next" }}
              pagination={{ el: ".exposure-pagination", clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 }
              }}
              className="pb-12"
            >
              {industrialVisits.map((visit, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl group border border-white/10 flex flex-col bg-[#0C254C] hover:border-[#F59E0B] hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    
                    {/* Top 50% - Background Image */}
                    <div className="h-1/2 w-full relative overflow-hidden shrink-0">
                      <Image
                        src={visit.image}
                        alt={visit.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Bottom 50% - Text Content */}
                    <div className="h-1/2 w-full p-5 flex flex-col justify-between bg-[#0C254C] border-t border-white/5">
                      <div className="space-y-2.5">
                        <span className="inline-block px-3 py-1 bg-[#F59E0B] text-white text-[9px] font-black uppercase tracking-wider rounded">
                          Industrial Visit
                        </span>
                        <h3 className="text-base font-bold text-white leading-tight tracking-tight line-clamp-2 group-hover:text-[#F59E0B] transition-colors duration-300" title={visit.title}>
                          {visit.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-xs font-light leading-relaxed line-clamp-3 text-justify">
                        {visit.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination dots centered below slider */}
            <div className="exposure-pagination flex justify-center mt-6 gap-2" />
          </motion.div>

        </div>
      </section>


      {/* ── SECTION 5: WHY PLACEMENT TRAINING MATTERS ──────────────────── */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Infographics Column */}
            <div className="lg:col-span-5 space-y-6 relative">
              
              {/* Backlight glow */}
              <div className="absolute inset-0 bg-[#0F4C81]/5 rounded-3xl blur-2xl pointer-events-none" />

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="space-y-6 relative z-10"
              >
                {/* Info Card 1 */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex items-center gap-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-[#0F4C81] w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-white">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-[#0F4C81]">92%</h4>
                    <p className="text-gray-500 font-bold text-xs uppercase tracking-wider">Placement Success Rate</p>
                  </div>
                </motion.div>

                {/* Info Card 2 */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex items-center gap-6 shadow-sm hover:shadow-md transition-all duration-300 lg:translate-x-6"
                >
                  <div className="bg-[#F59E0B] w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-[#0F4C81]">
                    <Lightbulb className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-[#0F4C81]">350+</h4>
                    <p className="text-gray-500 font-bold text-xs uppercase tracking-wider">Corporate Recruiters Yearly</p>
                  </div>
                </motion.div>

                {/* Info Card 3 */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex items-center gap-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-[#0F4C81] w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-white">
                    <Compass className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-[#0F4C81]">100%</h4>
                    <p className="text-gray-500 font-bold text-xs uppercase tracking-wider">Placement Guidance & Mock Drills</p>
                  </div>
                </motion.div>
              </motion.div>

            </div>

            {/* Right Text Column */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-[#F59E0B]/10 text-[#F59E0B] rounded-full font-bold text-xs uppercase tracking-widest">
                Our Competitive Edge
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0F4C81] leading-tight">
                Why Placement <span className="text-[#F59E0B]">Training Matters</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full" />
              
              <div className="space-y-6 mt-8 text-gray-500 text-lg leading-relaxed text-justify">
                <p className="font-bold text-gray-700 leading-snug">
                  Transitioning from academic lessons to corporate environments requires self-assurance, practical competencies, and a well-refined professional demeanor.
                </p>
                <p>
                  Our specialized training modules focus directly on bridging these key preparation divides. We enhance basic employability indexes, strengthen team interpersonal competencies, refine professional dialogue capability, ensure outstanding resume layout patterns, and build absolute interview composure. 
                </p>
                <p>
                  Through intense and repeated drills in live mock classrooms led by seasoned recruiters, our candidates gain structural competence and familiarity with modern aptitude standards. This results in top-tier performance on selection days.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ── SECTION 6: STUDENT SUCCESS JOURNEY ─────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50 border-t border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-2 bg-[#0F4C81]/15 text-[#0F4C81] rounded-full font-bold text-xs uppercase tracking-widest mb-3">
              Grooming Timeline
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0F4C81] leading-tight">
              Student Success <span className="text-[#F59E0B]">Journey</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto mt-4" />
          </motion.div>

          {/* Connected Step Timeline */}
          <div className="relative">
            {/* Central timeline connector line (hidden on mobile, visible on desktop) */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#0F4C81]/10 -translate-y-1/2 hidden lg:block" />

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid lg:grid-cols-5 gap-8 relative z-10"
            >
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center space-y-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-shadow duration-300"
                >
                  {/* Glowing Node Circle */}
                  <div className="w-14 h-14 rounded-full bg-[#0F4C81] text-[#F59E0B] flex items-center justify-center font-black text-xl shadow-lg ring-4 ring-white group-hover:bg-[#F59E0B] group-hover:text-[#0F4C81] transition-colors duration-300 z-20">
                    {idx + 1}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-lg text-[#0F4C81] tracking-tight group-hover:text-[#F59E0B] transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed text-justify">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>


      {/* ── SECTION 7: CALL TO ACTION (CTA) ──────────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-r from-[#0F4C81] via-[#0F4C81]/95 to-[#001B4E] text-white">
        
        {/* Floating light elements */}
        <div className="absolute -top-10 -left-10 w-96 h-96 rounded-full bg-[#F59E0B]/10 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-[#0F4C81]/40 blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 md:px-6 text-center z-20 space-y-8">
          <motion.div {...fadeInUp} className="space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[#F59E0B] text-[#0F4C81] text-xs font-black uppercase tracking-widest rounded-full">
              Embark on Your Career Journey
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Build Your Professional Future <br className="hidden sm:inline" />
              with <span className="text-[#F59E0B]">SVGOI</span>
            </h2>
            <p className="text-gray-200 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Equip yourself with the tools, exposure, and mock feedback needed to stand out during our campus recruitment cycles.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a
              href="/placements/aboutPlacements"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(245,158,11,0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#F59E0B] hover:bg-[#d97706] text-[#0F4C81] text-base font-black rounded-full shadow-lg tracking-wide uppercase transition-all duration-300 cursor-pointer"
            >
              Explore Placements
            </motion.a>
            <motion.a
              href="/admission/admissionProcess"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-white text-white text-base font-black rounded-full hover:bg-white/10 tracking-wide uppercase transition-all duration-300 cursor-pointer"
            >
              Apply Now
            </motion.a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default PlacementTrainingPage;
