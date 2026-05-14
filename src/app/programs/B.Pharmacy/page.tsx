"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Clock,
  GraduationCap,
  CheckCircle,
  Award,
  FlaskConical,
  Briefcase,
  Target,
  Users,
  Building2,
  ShieldCheck,
  Microscope,
  Search,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import LabCarousel from "@/components/LabCarousel";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BPharmacyPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    viewport: { once: true },
  };

  const quickInfo = [
    { icon: Clock, label: "Duration", value: "4 Years" },
    { icon: GraduationCap, label: "Program Name", value: "Bachelor of Pharmacy (B.Pharm)" },
    { icon: Target, label: "Mode of Admission", value: "Merit / Entrance" },
  ];

  const careerRoles = [
    {
      title: "R&D Scientist",
      desc: "Conduct research and development in pharmaceuticals.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Drug Inspector",
      desc: "Inspect and regulate quality and safety of drugs.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Quality Assurance",
      desc: "Ensure compliance with pharmaceutical standards.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Pharmacist",
      desc: "Dispense medicines and guide patients.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const highlights = [
    {
      title: "Practical Exposure",
      icon: FlaskConical,
      desc: "",
    },
    {
      title: "Industry Internship",
      icon: Briefcase,
      desc: "",
    },
    {
      title: "Professional Networking",
      icon: Users,
      desc: "",
    },
    {
      title: "Research Opportunities",
      icon: Microscope,
      desc: "",
    },
  ];

  // Labs data moved to LabCarousel component

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ── Section 1: Hero ──────────────────────────────────────── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh4iAgYY97IwqhQYWRfotLV0Ni3UKHJOFkn2uZ"
            alt="B.Pharmacy Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Bachelor of <span className="text-[#F59E0B]">Pharmacy</span> (B.Pharm)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-200 font-medium leading-relaxed"
          >
            Build a strong foundation in pharmaceutical sciences with research, innovation, and clinical exposure.
          </motion.p>
        </div>
      </section>

      {/* ── Section 2: Program Overview ───────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#F59E0B]/10 rounded-full">
                <span className="text-[#F59E0B] font-bold text-sm uppercase tracking-widest">
                  Program Overview
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] leading-tight">
                The Foundation of Your <br />
                <span className="text-[#F59E0B]">Pharmacy Career</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#F59E0B] rounded-full" />
              
              <div className="space-y-4 max-h-[350px] overflow-y-auto scrollbar-thin pr-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  In SVGOI, SVCP is a pioneer institution in the field of Pharmaceutical Education and Research in Punjab since 2005. The Institute comprises of every element desired for the academic and professional excellence. Our mission is to build leaders through holistic, transformative, and innovative learning in the pharmaceutical sector. Bachelor of Pharmacy is a 4 Year Graduate program program in which students study the methods and process of formulating dosage forms and dispensing of medicines.
                </p>
                <h4 className="font-bold text-[#0F4C81] text-lg mt-4 mb-2">Scope of Course</h4>
                <p>
                  After B. Pharmacy course, students are offered various employment opportunities in the government and public sector. They can open their own pharmacy stores by registering themselves under State Pharmacy Council. Students can find equal jobs in both public and private sectors such as Technical Pharmacy, Clinical Pharmacy, Medical Dispensing Store, Health Centers, and Food & Drug Administration among others.
                </p>
                <p>
                  Practicing pharmacists will have the opportunity to review the case notes or prescriptions in their practice setting and able to identify and resolve the drug related problems. This will ensure the improved patient care and decreases the unnecessary health care expenditure.
                </p>
                <p>
                  B. Pharmacy graduates have opportunity to provide various patient care services to improve the patient’s health in community settings through counselling, health screening services, and other education programs.
                </p>
                <p>
                  In hospital settings, pharmacists can ensure appropriate dispensing, education to patient, and provide all hospital pharmacy services including clinical pharmacy services such as drug information and ADR reporting.
                </p>
                <p>
                  Candidate can go for higher studies after completing graduation in pharmacy. He/She can pursue M. Pharmacy or Pharm. D degrees.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-4 bg-[#F59E0B]/10 rounded-[2rem] blur-xl group-hover:bg-[#F59E0B]/20 transition-all duration-500" />
              <img
                src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh1HIOXAiaMNURpZ8YFcWvKyC34PT2BHsjXEIA"
                alt="Pharmacy Overview"
                className="relative w-full h-full min-h-[400px] rounded-2xl shadow-lg object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Quick Info ───────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {quickInfo.map((info, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group border border-gray-100"
              >
                <div className="bg-[#0F4C81]/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F59E0B]/10 transition-colors">
                  <info.icon className="w-8 h-8 text-[#0F4C81] group-hover:text-[#F59E0B] transition-colors" />
                </div>
                <h4 className="text-gray-500 font-bold text-sm uppercase tracking-widest mb-2">
                  {info.label}
                </h4>
                <p className="text-xl md:text-2xl font-bold text-[#0F4C81]">
                  {info.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Major Tracks ───────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-6">
              Major <span className="text-[#F59E0B]">Tracks</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto" />
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { name: "Customs Officer", icon: ShieldCheck },
              { name: "Analytical Chemist", icon: FlaskConical },
              { name: "Drug Inspector", icon: Search },
              { name: "Drug Analyst", icon: Microscope },
            ].map((track, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#F59E0B] transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[160px]"
              >
                <div className="bg-[#0F4C81] w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white shadow-lg">
                  <track.icon className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-[#0F4C81] text-sm md:text-base leading-snug">
                  {track.name}
                </h5>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 5: Eligibility ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-12">
              Eligibility <span className="text-[#F59E0B]">Criteria</span>
            </h2>
            <div className="space-y-8 border-l-4 border-[#F59E0B] pl-8 py-2">
              <p className="text-xl text-gray-700 leading-relaxed text-justify">
                Must have passed 10+2 examination by a respective state/central government authorities recognized as equivalent to 10+2 examination by the Association of Indian Universities (AIU) with English as one of the subjects and (P.C.M) and or Biology (P.C.B/P.C.M.B.) as optional subjects individually. Any other qualification approved by the Pharmacy Council of India as equivalent to any of the above examinations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 6: Affiliation ────────────────────────────────── */}
      <section className="py-16 bg-[#0F4C81] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-12">
            Affiliation & Approvals
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 min-w-[280px]"
            >
              <Building2 className="w-10 h-10 text-[#F59E0B] mx-auto mb-4" />
              <h4 className="text-xl font-bold">Affiliated to IKGPTU, Jalandhar</h4>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 min-w-[280px]"
            >
              <Award className="w-10 h-10 text-[#F59E0B] mx-auto mb-4" />
              <h4 className="text-xl font-bold">Approved by PCI</h4>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 7: Downloads ──────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeInUp} className="mb-12">
            <h3 className="text-3xl font-bold text-[#0F4C81] mb-4">Downloads</h3>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a
              variants={fadeInUp}
              href="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh7pE2OuMuQUA1JMyv94GFVdat0Kq5BHxILhDm"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#F59E0B] hover:bg-[#d97706] text-white px-8 py-4 rounded-lg shadow-md transition-all duration-300 font-bold text-lg"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              Fee Structure
            </motion.a>
            <motion.a
              variants={fadeInUp}
              href="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhay584yVC8K1GnFqt93VfM5zvdpiEZWeNRxrI"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#F59E0B] hover:bg-[#d97706] text-white px-8 py-4 rounded-lg shadow-md transition-all duration-300 font-bold text-lg"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              Brochure
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Section 8: Career Roles ───────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[#F59E0B] font-bold text-sm uppercase tracking-widest block mb-4">
              Career Prospects
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-6">
              Future <span className="text-[#F59E0B]">Career Roles</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto" />
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {careerRoles.map((role, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative h-80 rounded-xl overflow-hidden group shadow-md"
              >
                <img
                  src={role.image}
                  alt={role.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h4 className="text-white font-bold text-2xl mb-2">
                    {role.title}
                  </h4>
                  <p className="text-gray-200 font-medium leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 9: Program Highlights ────────────────────────── */}
      <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex items-center gap-4"
              >
                <div className="bg-[#F59E0B]/10 w-14 h-14 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <div>
                  <h4 className="text-[#0F4C81] text-lg font-bold">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 10: Laboratories Carousel ────────────────────── */}
      <LabCarousel />
      
      {/* CTA Footer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0F4C81]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#F59E0B]/5 rounded-full blur-3xl" />
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F4C81] mb-8 relative z-10">
              Ready to start your <br />
              <span className="text-[#F59E0B]">Pharmacy Journey?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-12 max-w-xl mx-auto relative z-10">
              Join Swami Vivekanand College of Pharmacy and build a successful
              career in the healthcare world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <a
                href="/contact"
                className="bg-[#0F4C81] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-blue-900 transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                Inquire Now
              </a>
              <a
                href="/admission/admissionProcess"
                className="bg-white text-[#0F4C81] border-2 border-[#0F4C81] px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                Admission Process
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BPharmacyPage;