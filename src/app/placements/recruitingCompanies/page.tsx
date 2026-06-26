"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp, Users, Award, Star,
  Building2, Target, Zap, ArrowRight, CheckCircle2,
  MapPin, Laptop, Heart, Factory, Briefcase,
  Search, ShieldAlert, CheckSquare, GraduationCap,
  Layers, Smile, Network
} from "lucide-react";

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
  whileInView: { transition: { staggerChildren: 0.1 } },
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

// ─── Logo Component with grayscale effects and fallbacks ────────────────────
function RecruiterLogo({ name, logo }: { name: string; logo?: string }) {
  const [imgError, setImgError] = useState(false);
  
  // Calculate initials for fallback
  const initials = name
    .replace(/^(M\/s|Pvt\.?|Ltd\.?|Pvt\sLtd|Group|of|Companies)\s+/i, "")
    .split(/\s+/)
    .map(word => word[0])
    .filter(char => /[a-zA-Z]/.test(char))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (imgError || !logo) {
    return (
      <div className="w-16 h-16 rounded-lg bg-gray-50 border border-gray-200 text-gray-400 font-bold flex items-center justify-center text-sm shadow-inner shrink-0 uppercase group-hover:bg-[#0F4C81]/10 group-hover:border-[#0F4C81]/20 group-hover:text-[#0F4C81] transition-all duration-300">
        {initials || "RC"}
      </div>
    );
  }

  return (
    <div className="w-full h-16 flex items-center justify-center relative px-2">
      <img
        src={logo}
        alt={name}
        onError={() => setImgError(true)}
        className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 opacity-75 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 shrink-0"
      />
    </div>
  );
}

export default function RecruitingCompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const heroStats = [
    { num: 2200, suffix: "+", label: "Recruiting Companies", decimals: 0 },
    { num: 95, suffix: "%+", label: "Placement Rate", decimals: 0 },
    { num: 60, suffix: " LPA", label: "Highest Package", decimals: 0 },
    { num: null, suffix: "Pan India", label: "Recruiter Network", decimals: 0 },
  ];

  const recruiters = [
    { name: "Digital Vision", logo: "/company logo/digital_eye.png" },
    { name: "Archtech Intelligence", logo: "/company logo/artech intelligence.png" },
    { name: "Mwidm India Pvt Ltd", logo: "/company logo/mwidm india.png" },
    { name: "Genotics Pharmaceuticals", logo: "/company logo/geonotics pharmaceuticals.png" },
    { name: "Cadila Pharmaceutics", logo: "/company logo/cardila-logo.png" },
    { name: "Amcare Super Specialty Hospital", logo: "/company logo/amcare super speciality hospital.png" },
    { name: "Selmon Remedics Pvt Ltd", logo: "/company logo/semlon.png" },
    { name: "Himachal Terpene Products", logo: "/company logo/Himachal Terepene Products.jpg" },
    { name: "Higgs Healthcare", logo: "/company logo/higgs healthcare.png" },
    { name: "M/s Zeon Lifesciences", logo: "/company logo/zeon lifesciences.webp" },
    { name: "Mits Healthcare Pvt. Ltd.", logo: "/company logo/mits.png" },
    { name: "Macleods Pharmaceuticals", logo: "/company logo/Macleods Pharmaceuticals.jpeg" },
    { name: "Pharmaceuticals Limited" },
    { name: "Jap Tap Sewa Hospital", logo: "/company logo/jap tap sewa hospital.png" },
    { name: "Sanify Healthcare", logo: "/company logo/sanify healthcare.webp" },
    { name: "Ziqitza Healthcare", logo: "/company logo/ziqitza healthcare.png" },
    { name: "Aishwarya Group" },
    { name: "HealthPlix Technologies Private Limited", logo: "/company logo/HealthPlix Technologies.jpg" },
    { name: "IDS INFOTECH LTD", logo: "/company logo/ids infotech.webp" },
    { name: "Ayuth Veda", logo: "/company logo/ayouth_veda.webp" },
    { name: "HealthPlix Technologies Private Limited", logo: "/company logo/HealthPlix Technologies.jpg" },
    { name: "Alembic Pharmaceuticals Limited", logo: "/company logo/alembic pharmaceuticals.png" },
    { name: "Tirupati Group of Companies", logo: "/company logo/tirupati_groupofcompanies_logo.jpg" }
  ];

  const chooseReasons = [
    { title: "Industry Ready Students", desc: "Students are rigorously trained in standard workflows, professional toolkits, and dynamic clinical guidelines.", icon: GraduationCap },
    { title: "Strong Technical Foundation", desc: "SVGOI curriculum places a strong emphasis on core scientific, pharmaceutical, and technology theory and practice.", icon: CheckSquare },
    { title: "Professional Skill Development", desc: "Active personality development, mock hiring bootcamps, and professional business communication labs.", icon: Smile },
    { title: "Internship & Practical Exposure", desc: "Mandatory clinical practices, pharmaceutical lab visits, and collaborative projects with top firms.", icon: Layers },
    { title: "Corporate Connect Programs", desc: "Regular guest lectures, industry seminars, and active direct interaction with corporate recruiters.", icon: Network },
    { title: "Placement Training Ecosystem", desc: "Structured, year-round corporate training programs ensuring students are polished for hiring rounds.", icon: Target },
  ];

  const filteredRecruiters = recruiters.filter((rec) =>
    rec.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden text-gray-800 font-sans antialiased">

      {/* ── SECTION 1: BANNER IMAGE ───────────────────────────────────────── */}
      <section className="w-full bg-white" id="banner">
        <div className="w-full">
          <img
            src="/banner/Recruiting Companies.jpeg"
            alt="Recruiting Companies Banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* ── SECTION 2: RECRUITER NETWORK OVERVIEW ───────────────────────── */}
      <section className="py-20 bg-white" id="network-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest mb-3">
                Partnership Scope
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0F4C81] mb-6 tracking-tight leading-tight">
                Trusted By Industry Leaders
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                SVGOI continuously collaborates with renowned healthcare organizations to create career opportunities for students. These partnerships strengthen industry-academia relationships and provide students with practical exposure, internships, placements, and professional development opportunities.
              </p>
            </motion.div>

            {/* Right: Infographic / Statistics cards */}
            <motion.div
              variants={fadeInRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {[
                { title: "Healthcare Network", value: "2200+", desc: "Recruiters hiring across multiple states and medical fields." },
                { title: "Continuous Drives", value: "350+", desc: "Companies visiting the campus annually for recruitment." },
                { title: "Direct Engagements", value: "100%", desc: "Direct industry exposure via mock interviews and training." },
                { title: "Highest Package", value: "60 LPA", desc: "Record salary packages offered to outstanding students." }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-[#0F4C81]/30 transition-all duration-300"
                >
                  <p className="text-2xl font-black text-[#F59E0B] mb-2">{card.value}</p>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{card.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">{card.desc}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: RECRUITING COMPANIES SHOWCASE ───────────────────── */}
      <section className="py-20 bg-[#F8FAFC] border-t border-b border-gray-200" id="showcase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest mb-3 block">
              Corporate Directory
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0F4C81] mb-3 tracking-tight">
              Our Recruiting Partners
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Organizations that trust SVGOI talent.
            </p>
          </motion.div>

          {/* Search Bar Block */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
            <div className="relative w-full max-w-lg mx-auto">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Recruiters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-[#0F4C81] focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Recruiter Adjacent Grid Layout inspired by screenshot */}
          <motion.div
            layout
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden"
          >
            {filteredRecruiters.length > 0 ? (
              filteredRecruiters.map((rec, idx) => (
                <motion.div
                  layout
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white p-6 flex flex-col items-center justify-center min-h-[150px] hover:bg-gray-50 transition-colors duration-200 group cursor-pointer"
                >
                  <RecruiterLogo name={rec.name} logo={rec.logo} />
                  <p className="text-[11px] font-bold text-gray-700 mt-4 text-center px-1 leading-snug group-hover:text-[#0F4C81] transition-colors">
                    {rec.name}
                  </p>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full bg-white py-16 flex flex-col items-center justify-center text-center">
                <ShieldAlert className="w-12 h-12 text-[#F59E0B] mb-4" />
                <h3 className="font-bold text-gray-900 text-lg">No Recruiting Partners Found</h3>
                <p className="text-gray-500 text-sm mt-1">Try tweaking your search keywords.</p>
              </div>
            )}
          </motion.div>

        </div>
      </section>

      {/* ── SECTION 5: WHY COMPANIES RECRUIT FROM SVGOI ───────────────── */}
      <section className="py-20 bg-white" id="why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest mb-3 block">
              Strategic Advantages
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0F4C81] mb-3 tracking-tight">
              Why Recruiters Choose SVGOI
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] rounded-full mx-auto mt-4" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {chooseReasons.map((reason, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6, boxShadow: "0 15px 30px rgba(0,0,0,0.06)" }}
                className="bg-[#F8FAFC] border border-gray-200 rounded-lg p-6 md:p-8 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center mb-6 shrink-0 group-hover:scale-105 transition-transform">
                  <reason.icon className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 tracking-tight group-hover:text-[#0F4C81] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── SECTION 6: RECRUITER PARTNERSHIP STATS ─────────────────────── */}
      <section className="py-24 bg-[#071C3D] text-white relative overflow-hidden" id="stats">
        {/* Glow Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-10 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { num: 2200, suffix: "+", label: "Recruiting Companies" },
              { num: 350, suffix: "+", label: "Companies Visiting Every Year" },
              { num: 12000, suffix: "+", label: "Student Careers Supported" },
              { num: 60, suffix: " LPA", label: "Highest Package" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 text-center transition-all duration-300"
              >
                <p className="text-3xl md:text-5xl font-black text-[#F59E0B] mb-3">
                  <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                </p>
                <p className="text-xs md:text-sm font-semibold text-gray-300 mt-1 uppercase tracking-wider leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 7: CORPORATE RELATIONS CTA ─────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81] via-[#0b3560]/95 to-[#071C3D]" />
        
        {/* Glow & floating shapes */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/20 backdrop-blur-md border border-[#F59E0B]/30 px-5 py-2 rounded-full mb-8 shadow-sm">
              <Zap className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
              <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest">Connect Internationally</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              Building Strong <br className="hidden md:inline" />
              Industry Partnerships
            </h2>

            <p className="text-blue-100 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              SVGOI continues to strengthen relationships with leading organizations across India, creating meaningful opportunities for student growth, internships, and placements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/placements/placementAchievements"
                whileHover={{ scale: 1.02, y: -2 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-8 py-4 rounded-lg shadow-lg shadow-[#F59E0B]/20 transition-all duration-300 text-sm tracking-wider uppercase"
              >
                Explore Placements
              </motion.a>
              <motion.a
                href="/placements/placementActivities"
                whileHover={{ scale: 1.02, y: -2 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 text-sm tracking-wider uppercase"
              >
                Corporate Connect
              </motion.a>
              <motion.a
                href="mailto:placements@svgoi.in"
                whileHover={{ scale: 1.02, y: -2 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0F4C81] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg shadow-md transition-all duration-300 text-sm tracking-wider uppercase"
              >
                Become A Recruiting Partner
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
