"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import {
  TrendingUp, Users, Award, Star,
  Building2, Target, Zap, ArrowRight, CheckCircle,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.13 } },
  viewport: { once: true },
};

// ─── Data ──────────────────────────────────────────────────────────────────────
const companiesData = [
  { year: "2022", value: 260 },
  { year: "2023", value: 285 },
  { year: "2024", value: 315 },
  { year: "2025", value: 320 },
  { year: "2026", value: 350 },
];

const highestPackageData = [
  { year: "2022", value: 19 },
  { year: "2023", value: 28 },
  { year: "2024", value: 45 },
  { year: "2025", value: 50 },
  { year: "2026", value: 60 },
];

const avgPackageData = [
  { year: "2022", value: 3.5 },
  { year: "2023", value: 3.5 },
  { year: "2024", value: 4.8 },
  { year: "2025", value: 5.5 },
  { year: "2026", value: 5.8 },
];

const recruiters = [
  "Sun Pharma", "Cipla", "Dr. Reddy's", "Lupin", "Zydus", "Alkem", "Torrent",
  "Glenmark", "Intas", "Mankind", "Abbott", "Pfizer", "Novartis", "Wockhardt",
  "Aurobindo", "Cadila", "Emcure", "IPCA", "Jubilant", "Elder Pharma",
];

const studentPlacements = [
  { name: "Rohit Verma", year: "2024", company: "Alembic", logo: "/company logo/alembic pharmaceuticals.png", package: "3.5 LPA", image: "/placement achievements/Rohit verma.jpeg", featured: true },
  { name: "Rahul", year: "2024", company: "Alembic", logo: "/company logo/alembic pharmaceuticals.png", package: "3.5 LPA", image: "/placement achievements/Rahul.jpeg" },
  { name: "Mohit Bawa", year: "2024", company: "Alembic", logo: "/company logo/alembic pharmaceuticals.png", package: "3.5 LPA", image: "/placement achievements/mohit bawa.jpeg" },
  { name: "Anmol Sharma", year: "2024", company: "Alembic", logo: "/company logo/alembic pharmaceuticals.png", package: "3.5 LPA", image: "/placement achievements/anmol sharma.jpeg" },
  { name: "Jyoti Kumari", year: "2026", company: "Brandz", logo: "", package: "2.64 LPA", image: "/placement achievements/Jyoti kumari.jpeg" },
  { name: "Anmol Sharma", year: "2026", company: "United Laboratories", logo: "/company logo/united laboratories.png", package: "3 LPA", image: "/placement achievements/anmol sharma2.jpeg" },
  { name: "Abuzar Khan", year: "2026", company: "Patiala Heart Institute", logo: "/company logo/patiala heart institute.png", package: "2.24 LPA", image: "/placement achievements/Abuzar khan.jpeg" },
  { name: "Aryan Yadav", year: "2026", company: "Vitalframe Therapies (Chandigarh)", logo: "/company logo/vitalframe.jpg", package: "2.64 LPA", image: "/placement achievements/Aryan.jpeg" }
];

const metrics = [
  { icon: Building2, num: 350, suffix: "+", label: "Companies Visited", color: "#F59E0B", decimals: 0 },
  { icon: Award, num: 60, suffix: " LPA", label: "Highest Package", color: "#10B981", decimals: 0 },
  { icon: TrendingUp, num: 5.8, suffix: " LPA", label: "Average Package", color: "#3B82F6", decimals: 1 },
  { icon: Users, num: 2200, suffix: "+", label: "Recruiting Companies", color: "#8B5CF6", decimals: 0 },
  { icon: CheckCircle, num: 100, suffix: "%", label: "Placement Support", color: "#F59E0B", decimals: 0 },
  { icon: Target, num: null, suffix: "", label: "Focused Training", color: "#EF4444", decimals: 0 },
];

const analyticsSummary = [
  { label: "Companies Visited (2026)", num: 350, suffix: "+", decimals: 0, icon: Building2, gradient: "from-[#F59E0B]/10 to-[#F59E0B]/5", border: "border-[#F59E0B]/30", iconBg: "bg-[#F59E0B]/10", iconColor: "text-[#F59E0B]" },
  { label: "Highest Package (2026)", num: 60, suffix: " LPA", decimals: 0, icon: Award, gradient: "from-emerald-500/10 to-emerald-500/5", border: "border-emerald-400/30", iconBg: "bg-emerald-500/10", iconColor: "text-emerald-500" },
  { label: "Average Package (2026)", num: 5.8, suffix: " LPA", decimals: 1, icon: TrendingUp, gradient: "from-blue-500/10 to-blue-500/5", border: "border-blue-400/30", iconBg: "bg-blue-500/10", iconColor: "text-blue-500" },
];



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

// ─── Custom Tooltip ───────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label, unit }: { active?: boolean; payload?: { value: number }[]; label?: string; unit?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-xl px-4 py-3">
        <p className="text-xs font-bold text-gray-500 mb-1">{label}</p>
        <p className="text-xl font-extrabold text-[#0F4C81]">{payload[0].value}{unit || ""}</p>
      </div>
    );
  }
  return null;
};

// ─── Placed Students Helper Components ────────────────────────────────────────
function CompanyLogo({ name, logo }: { name: string; logo?: string }) {
  const [error, setError] = useState(false);
  const initials = name
    .split(" ")
    .map(w => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (error || !logo) {
    return (
      <div className="w-10 h-10 rounded-full bg-[#0F4C81]/10 border border-[#0F4C81]/25 text-[#0F4C81] font-bold flex items-center justify-center text-xs shadow-sm shrink-0">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={logo}
      alt={name}
      onError={() => setError(true)}
      className="w-10 h-10 rounded-full object-contain border border-gray-100 p-1 bg-white shrink-0 shadow-sm"
    />
  );
}

function StudentImage({ name, src }: { name: string; src?: string }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="w-full h-full bg-gray-100 text-gray-400 flex items-center justify-center">
        <Users className="w-8 h-8 text-gray-300" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setError(true)}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PlacementAchievementsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">

      {/* ── SECTION 1: BANNER IMAGE ───────────────────────────────────────── */}
      <section className="w-full bg-white" id="banner">
        <div className="w-full">
          <img
            src="/banner/Achievement.jpeg"
            alt="Placement Achievements Banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* ── SECTION 3: ANALYTICS DASHBOARD ───────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-4">
            <p className="text-sm font-bold text-[#F59E0B] uppercase tracking-widest mb-3">Placement Analytics</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Year-Wise Placement Volume &amp; Package Trends
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mb-1">
              A transparent view of placement growth, recruiter participation, and salary trends based on Training &amp; Placement Cell records.
            </p>
            <p className="text-xs text-gray-400 italic">* Data reflects the placement records currently shared by the Training &amp; Placement Cell.</p>
          </motion.div>

          {/* Analytics Summary Cards */}
          <motion.div variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12 mb-14">
            {analyticsSummary.map((card, i) => (
              <motion.div key={i} variants={fadeInUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                className={`bg-gradient-to-br ${card.gradient} border ${card.border} rounded-lg p-7 flex items-center gap-5 transition-all duration-300`}>
                <div className={`${card.iconBg} w-14 h-14 rounded-lg flex items-center justify-center shrink-0`}>
                  <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-extrabold text-[#0F4C81]">
                    <AnimatedCounter target={card.num} suffix={card.suffix} decimals={card.decimals} />
                  </p>
                  <p className="text-sm font-semibold text-gray-600 mt-0.5">{card.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts Grid */}
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Bar Chart – Companies Visited */}
            <motion.div {...fadeInUp}
              className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F4C81] text-lg">Companies Visited</h3>
                  <p className="text-xs text-gray-400">Year-wise recruiter count</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={companiesData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }} barSize={28}>
                  <defs>
                    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FCD34D" stopOpacity={0.85} />
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity={0.65} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" fill="url(#barGrad)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Line Chart – Highest Package */}
            <motion.div {...fadeInUp} transition={{ delay: 0.15 }}
              className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F4C81] text-lg">Highest Package</h3>
                  <p className="text-xs text-gray-400">LPA — Year-wise peak offer</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={highestPackageData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <Tooltip content={<CustomTooltip unit=" LPA" />} />
                  <Line type="monotone" dataKey="value" stroke="#F59E0B" strokeWidth={3} dot={{ fill: "#F59E0B", r: 5, strokeWidth: 2, stroke: "#fff" }} activeDot={{ r: 7 }} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Area Chart – Avg Package */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F4C81] text-lg">Average Package</h3>
                  <p className="text-xs text-gray-400">LPA — Year-wise average CTC</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={avgPackageData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <Tooltip content={<CustomTooltip unit=" LPA" />} />
                  <Area type="monotone" dataKey="value" stroke="#2563EB" strokeWidth={3} fill="url(#areaGrad)" dot={{ fill: "#2563EB", r: 5, strokeWidth: 2, stroke: "#fff" }} activeDot={{ r: 7 }} />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ── NEW SECTION: OUR PLACED STUDENTS ──────────────────────────────── */}
      <section className="py-20 bg-white" id="placed-students">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest bg-[#F59E0B]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F4C81] mb-4">
              Our Placed Students
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Celebrating the achievements of students who have successfully secured placements with leading organizations across healthcare, pharmaceutical, and industry sectors.
            </p>
          </motion.div>

          {/* Responsive Slider / Grid using Swiper */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true, el: ".placed-swiper-pagination" }}
              className="pb-16"
            >
              {studentPlacements.map((student, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className={`bg-white rounded-3xl border ${student.featured ? 'border-2 border-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.15)]' : 'border-gray-100'} hover:border-[#F59E0B] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex overflow-hidden h-[290px] w-full group`}>
                    
                    {/* Left: Student Info */}
                    <div className="w-1/2 p-6 flex flex-col justify-between min-w-0">
                      <div>
                        {student.featured ? (
                          <span className="bg-[#F59E0B] text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2.5 inline-block">
                            Top Highlight
                          </span>
                        ) : (
                          <span className="bg-[#0F4C81]/10 text-[#0F4C81] text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2.5 inline-block">
                            Placed Student
                          </span>
                        )}
                        
                        <h3 className="text-lg font-bold text-gray-900 tracking-tight truncate">{student.name}</h3>
                        <p className="text-xs text-gray-400 font-medium mb-2">Class of {student.year}</p>
                        
                        {/* Company Row */}
                        <div className="flex items-center gap-2 mb-3">
                          <CompanyLogo name={student.company} logo={student.logo} />
                          <span className="text-xs font-semibold text-gray-700 leading-tight truncate">{student.company}</span>
                        </div>

                        {/* Package */}
                        <div className="mb-2">
                          <p className="text-[9px] uppercase font-bold text-gray-400 tracking-widest">Package</p>
                          <p className="text-2xl font-black bg-gradient-to-r from-[#0F4C81] to-[#F59E0B] bg-clip-text text-transparent leading-none mt-1">
                            {student.package}
                          </p>
                        </div>
                      </div>

                      {/* Success Tags */}
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="text-[8px] font-bold bg-[#0F4C81]/5 text-[#0F4C81] px-2 py-0.5 rounded uppercase">
                          {student.year} Batch
                        </span>
                        <span className="text-[8px] font-bold bg-[#F59E0B]/10 text-[#F59E0B] px-2 py-0.5 rounded uppercase truncate max-w-[80px]" title={student.company}>
                          {student.company}
                        </span>
                      </div>
                    </div>

                    {/* Right: Student Image covering the entire right half */}
                    <div className="w-1/2 relative bg-gray-50 h-full overflow-hidden shrink-0">
                      <StudentImage name={student.name} src={student.image} />
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom pagination bullets */}
            <div className="placed-swiper-pagination flex justify-center gap-2 mt-4" />
          </motion.div>

        </div>
      </section>

      {/* ── Custom Swiper Bullet Styling ──────────────────────────────────── */}
      <style>{`
        .placed-swiper-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: rgba(15, 76, 129, 0.2);
          opacity: 1;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
        .placed-swiper-pagination .swiper-pagination-bullet-active {
          width: 24px;
          background-color: #F59E0B !important;
        }
      `}</style>

      {/* ── SECTION 4: METRICS GRID ───────────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-4">
              Placement Success <span className="text-[#F59E0B]">Metrics</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto" />
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {metrics.map((m, i) => (
              <motion.div key={i} variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300"
                  style={{ background: `${m.color}15` }}>
                  <m.icon className="w-6 h-6 transition-colors duration-300" style={{ color: m.color }} />
                </div>
                <p className="text-xl font-extrabold text-[#0F4C81]">
                  {m.num !== null
                    ? <AnimatedCounter target={m.num} suffix={m.suffix} decimals={m.decimals} />
                    : <span>Industry</span>}
                </p>
                <p className="text-xs font-semibold text-gray-500 mt-1 leading-snug">{m.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 6: CTA ───────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81] via-[#1a5fa0] to-[#0a3560]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/3 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/20 backdrop-blur-md border border-[#F59E0B]/30 px-5 py-2 rounded-full mb-8">
              <Zap className="w-4 h-4 text-[#F59E0B]" />
              <span className="text-[#F59E0B] font-semibold text-sm">Career Excellence</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Success Story <span className="text-[#F59E0B]">Starts Here</span>
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Join a learning environment focused on skills, industry exposure, and career excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="/placements/aboutPlacements"
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#F59E0B]/30 transition-all duration-300">
                Explore Placements <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a href="/admission/admissionProcess"
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300">
                Apply Now <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
