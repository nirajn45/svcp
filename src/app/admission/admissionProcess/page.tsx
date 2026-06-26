"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import {
  ArrowRight,
  GraduationCap,
  Users,
  Globe,
  Award,
  Briefcase,
  DollarSign,
  Lightbulb,
  Library,
  Laptop,
  Activity,
  User,
  FileText,
  Upload,
  CreditCard,
  CheckCircle2,
  MapPin,
  Trophy,
  Shield,
  Star
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AdmissionProcessPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.15 },
    },
    viewport: { once: true },
  };

  const stats = [
    { title: "Faculties Available Every Year", value: "250+" },
    { title: "Acres Campus", value: "25+" },
    { title: "Global Alumni Reach", value: "25000+" },
    { title: "International Students Present", value: "1000+" },
    { title: "National & International Awards Ranking", value: "25+" },
    { title: "Companies Visit Per Year", value: "350+" },
    { title: "Placed Students In 250+ Companies", value: "5000+" },
    { title: "Scholarship Programs", value: "100%" },
    { title: "Entrepreneurship Funding", value: "45 Lacs+" },
  ];

  const procedureSteps = [
    "Visit sviet.ac.in and complete the online application form for admission.",
    "Upon submission, you will receive a confirmation email containing your unique Application ID.",
    "Prepare for and appear in the SVIET-EEE (Entrance Exam Eligibility Test-cum-Scholarship Exam)",
    "Check the SVIET website or your email for the announcement of SVIET-EEE results and your name on the merit list",
    "Shortlisted candidates will undergo an English language proficiency test.",
    "Participate in group discussions or personal interviews to assess interpersonal skills and subject knowledge.",
    "Depending on the course, additional tests may be conducted to assess specific skills.",
    "Carry all original mark sheets and essential credentials for verification",
    "Upon successful completion of tests and interviews, receive a provisional offer letter from SVIET.",
    "Complete the fee payment as per instructions in the offer letter.",
    "Receive the final offer letter along with a unique Student PRN.",
    "Submit all original documents as per the requirements mentioned in the offer letter.",
    "Welcome to SVIET! to begin your academic journey.",
  ];

  const programs = [
    {
      title: "Undergraduate",
      image: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhO4y9UjrVkH31mdhcPLXwlWeNI6y5R04MUoDf",
    },
    {
      title: "Postgraduate",
      image: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh7YIZATMuQUA1JMyv94GFVdat0Kq5BHxILhDm",
    },
    {
      title: "Diploma",
      image: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhTFq1cqpKlkFuAROSjc63sigMztyCVdIZ9nE7",
    },
  ];

  const opportunities = [
    { title: "cutting edge laboratories", icon: Laptop },
    { title: "central library", icon: Library },
    { title: "research laboratories", icon: Globe },
    { title: "scholarship opportunities", icon: DollarSign },
    { title: "sports facilities", icon: Activity },
    { title: "industrial collaboration", icon: Briefcase },
  ];

  const chartPath = [
    { title: "milestone placement packages", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" },
    { title: "we are international", image: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhgHPY5v3JVCLwfND1Kh2G0c3Os5jeIpda8rQb" },
    { title: "academic excellence", image: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhXAEf7OdBwxYedrOI4V6qGjbEHDLtgCS7MiyN" },
    { title: "vibrant campus life", image: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh1MsQNgiaMNURpZ8YFcWvKyC34PT2BHsjXEIA" },
    { title: "innovation hub", image: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhARwxPfa7BzrVQZhD3kvCHiqYFMcSnbelw1IT" },
  ];

  const guidelines = [
    { title: "Personal Profile", icon: User },
    { title: "Academic Profile", icon: GraduationCap },
    { title: "Upload Documents", icon: Upload },
    { title: "Payment of Application Fees", icon: CreditCard },
  ];

  const scholarships = [
    "academic merit based scholarship",
    "sports scholarship",
    "defence scholarship",
    "economically weaker sections scholarship",
    "represented at state level scholarship",
    "child defence personal scholarship",
    "defense scholarship",
    "single girl child scholarship",
  ];

  return (
    <div className="min-h-screen bg-[#f9fafb] overflow-hidden">
      {/* ── SECTION 1: HERO / BANNER ────────────────────────────────── */}
      <section className="relative h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://media.getmyuni.com/azure/college-images-test/swami-vivekanand-institute-of-engineering-technology-sviet-patiala/student-life-e301dcc46c59ed90d23789fe67006d11.jpg"
            alt="Campus"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/80 to-black/40 z-10" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Admissions at <span className="text-[#F59E0B]">SVIET</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#F59E0B] font-bold mb-4"
          >
            Simplified, Compehensive & Transparent
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed"
          >
            We are delighted that you are considering joining our institution, known for its academic excellence and vibrant community.
          </motion.p>
        </div>
      </section>

      {/* ── SECTION 2: SVGOI EXPERIENCE (STATS) ─────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fadeInUp} className="lg:col-span-4 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F4C81]">SVGOI Experience</h2>
              <div className="w-20 h-1.5 bg-[#F59E0B] rounded-full" />
              <p className="text-gray-600 leading-relaxed text-justify">
                Experience a world of opportunities at SVGOI, where we boast a vibrant campus spanning over 25 acres and house a diverse faculty of over 250 professionals. With a global alumni network exceeding 25,000 and over 1,000 international students, we&apos;ve garnered recognition through 25+ national and international awards.
              </p>
              <button className="bg-[#F59E0B] hover:bg-[#d97706] text-white px-8 py-3 rounded-lg font-bold shadow-md hover:shadow-xl transition-all duration-300 flex items-center group">
                Apply Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 text-center flex flex-col justify-center min-h-[160px]"
                >
                  <h3 className="text-3xl font-extrabold text-[#F59E0B] mb-2">{stat.value}</h3>
                  <p className="text-sm font-semibold text-[#0F4C81]">{stat.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ADMISSION PROCEDURE ──────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-4">Admission Procedure</h2>
            <p className="text-xl font-semibold text-[#F59E0B]">Simplified and Comprehensive</p>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto mt-6" />
          </motion.div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#0F4C81]/20 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {procedureSteps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative flex flex-col md:flex-row items-center justify-between"
                  >
                    {/* Left Content */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right pr-0 md:pr-12 order-2 md:order-1' : 'md:text-left pl-0 md:pl-12 order-2 md:order-3 md:hidden'}`}>
                      {isEven && (
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow mt-6 md:mt-0">
                          <h4 className="text-[#F59E0B] font-bold text-lg mb-2">Step {idx + 1}</h4>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Center Circle */}
                    <div className="absolute md:static left-0 top-0 md:transform-none z-10 w-12 h-12 bg-[#F59E0B] rounded-full border-4 border-white shadow-lg flex items-center justify-center order-1 md:order-2">
                      <span className="text-white font-bold">{idx + 1}</span>
                    </div>

                    {/* Right Content */}
                    <div className={`w-full md:w-5/12 ${!isEven ? 'md:text-left pl-16 md:pl-12 order-2 md:order-3' : 'md:text-right pr-0 md:pr-12 order-2 md:order-1 md:hidden'}`}>
                      {!isEven && (
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow mt-6 md:mt-0">
                          <h4 className="text-[#F59E0B] font-bold text-lg mb-2">Step {idx + 1}</h4>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      )}
                      {/* Mobile view rendering for even items (since they are hidden in the right block on desktop) */}
                      {isEven && (
                         <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow mt-6 md:mt-0 ml-16 md:hidden">
                          <h4 className="text-[#F59E0B] font-bold text-lg mb-2">Step {idx + 1}</h4>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: OUR PROGRAMS (SLIDER) ───────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-4">Our Programs</h2>
            <p className="text-xl font-semibold text-[#F59E0B]">A Place Where We Nuture, Grow, Explore & Learn from The Best</p>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="pb-16"
            >
              {programs.map((prog, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity group-hover:opacity-90" />
                    <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-300 group-hover:-translate-y-2">
                      <h3 className="text-white text-3xl font-bold capitalize drop-shadow-md">
                        {prog.title}
                      </h3>
                      <div className="w-12 h-1 bg-[#F59E0B] mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: UNLOCKING OPPORTUNITIES ──────────────────────── */}
      <section className="py-20 bg-[#0F4C81] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Unlocking Opportunities at SVGOI</h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              SVGOI opens doors to growth, innovation, and career success through hands-on experience and industry partnerships.
            </p>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto mt-6" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {opportunities.map((opp, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative h-64 bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer border border-white/20 hover:border-[#F59E0B] transition-colors"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transform transition-transform duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:animate-bounce">
                    <opp.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold capitalize drop-shadow-md">
                    {opp.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 6: CHART YOUR PATH ─────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-6">
              Chart Your Path To Success To <span className="text-[#F59E0B]">SVIET</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              At SVIET, we believe in empowering students to transform aspirations into achievements. With a commitment to academic excellence, cutting-edge infrastructure, and a nurturing environment, we provide the perfect launchpad for your ambitions.
            </p>
            <button className="bg-[#F59E0B] hover:bg-[#d97706] text-white px-8 py-3 rounded-lg font-bold shadow-md hover:shadow-xl transition-all duration-300">
              Apply Now
            </button>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {chartPath.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-[#0F4C81]/80 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <h3 className="text-white text-2xl font-bold capitalize transform transition-transform duration-500 group-hover:scale-110 drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 7: WHY CHOOSE SVGOI ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#F59E0B]/10 rounded-[2rem] blur-xl z-0" />
              <div className="relative rounded-2xl shadow-xl w-full h-[400px] overflow-hidden z-10">
                <Image
                  src="https://media.getmyuni.com/azure/college-images-test/swami-vivekanand-institute-of-engineering-technology-sviet-patiala/student-life-e301dcc46c59ed90d23789fe67006d11.jpg"
                  alt="Why choose SVGOI"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81]">
                Why choose <span className="text-[#F59E0B]">SVGOI</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#F59E0B] rounded-full" />
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                At SVGOI, we don&apos;t just educate—we <span className="text-[#F59E0B] font-bold">inspire, nurture, and empower</span>. With a focus on holistic development, industry-aligned curricula, and state-of-the-art facilities, we create an environment where students can unlock their true potential.
              </p>
              <button className="bg-[#0F4C81] hover:bg-[#0c3c66] text-white px-8 py-3 rounded-lg font-bold shadow-md hover:shadow-xl transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: ADMISSION GUIDELINES ───────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-4">Admission Guidelines</h2>
            <p className="text-xl font-semibold text-[#F59E0B]">Simplified and Comprehensive</p>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto mt-6" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {guidelines.map((guide, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:border-[#F59E0B] hover:shadow-xl transition-all duration-300 text-center group flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#0F4C81]/5 group-hover:bg-[#F59E0B] rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <guide.icon className="w-8 h-8 text-[#0F4C81] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-bold text-[#0F4C81] group-hover:text-[#F59E0B] transition-colors">
                  {guide.title}
                </h4>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            {...fadeInUp}
            className="text-center text-gray-600 font-medium text-lg"
          >
            Ensure compliance with these guidelines to facilitate a smooth admission process.
          </motion.p>
        </div>
      </section>

      {/* ── SECTION 9: SCHOLARSHIPS (SLIDER) ──────────────────────── */}
      <section className="py-20 bg-[#0F4C81] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">SVGOI Scholarships</h2>
            <p className="text-xl text-[#F59E0B] font-semibold">Essential Financial Support Securing Your Academic Future</p>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="pb-16"
            >
              {scholarships.map((scholarship, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-[#F59E0B] hover:bg-white/20 transition-all duration-300 text-center h-[250px] flex flex-col justify-center items-center group">
                    <Trophy className="w-12 h-12 text-[#F59E0B] mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-bold capitalize leading-snug">
                      {scholarship}
                    </h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionProcessPage;
