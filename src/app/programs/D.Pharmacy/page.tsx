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
  Settings,
  Factory,
  Store,
  ShieldCheck,
} from "lucide-react";
import LabCarousel from "@/components/LabCarousel";

const DPharmacyPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const },
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
    { icon: Clock, label: "Duration", value: "2 Years" },
    { icon: GraduationCap, label: "Program Name", value: "Diploma in Pharmacy" },
    { icon: Target, label: "Mode of Admission", value: "Merit / Entrance" },
  ];

  const careerRoles = [
    {
      title: "Pharmacy Technician",
      desc: "Assist pharmacists in dispensing medications and managing pharmacy operations.",
      image: "/images/dpharm/career_tech.png",
    },
    {
      title: "Drug Store Manager",
      desc: "Oversee the day-to-day operations of a pharmacy, including inventory management and customer service.",
      image: "/images/dpharm/drug_manager.png",
    },
    {
      title: "Hospital Pharmacist",
      desc: "Provide pharmaceutical care to patients in hospital settings, including dispensing medications and monitoring drug therapy.",
      image: "/images/dpharm/hospital_pharmacist.png",
    },
    {
      title: "Retail/Wholesale Pharmacist",
      desc: "Manage retail or wholesale pharmacy operations, including dispensing medications and counseling patients.",
      image: "/images/dpharm/retail_pharmacist.png",
    },
  ];

  const highlights = [
    {
      title: "Practical Training",
      icon: FlaskConical,
      desc: "Hands-on experience in pharmaceutical operations.",
    },
    {
      title: "Industry Exposure",
      icon: Briefcase,
      desc: "Internship opportunities in retail and hospital pharmacy settings.",
    },
    {
      title: "Skill Development",
      icon: Target,
      desc: "Enhance skills in drug dispensing and patient care.",
    },
    {
      title: "Career Opportunities",
      icon: GraduationCap,
      desc: "Pathways to employment in various pharmacy sectors.",
    },
  ];

  // Labs data moved to LabCarousel component

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ── Section 1: Hero ──────────────────────────────────────── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhhqLZO0vYTA0HQ4lC3zruVx5eGqtm7IhsDcXg"
            alt="D.Pharmacy Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Diploma in <span className="text-[#F59E0B]">Pharmacy</span> (D.Pharm)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-200 font-medium leading-relaxed"
          >
            Build your career in pharmaceutical sciences with practical knowledge
            and industry exposure.
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
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  The 2-year Diploma in Pharmacy program under Swami Vivekanand
                  College of Pharmacy is a comprehensive and compact qualification
                  for understanding the basics of Human Physiology, Disease,
                  Therapeutic Compounds & drugs in use, their pharmacology &
                  formulations, drug store management and Pharmaceutical
                  Jurisprudence.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  The course provides the minimum essential qualification to get
                  registered as a Pharmacist in India & operate Retail/Wholesale &
                  Community Pharmacy and to get employed as Hospital Pharmacist.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-[#F59E0B]/10 rounded-[2rem] blur-xl group-hover:bg-[#F59E0B]/20 transition-all duration-500" />
              <img
                src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhSNd9EsgkXizDmJxT0aBjLVsUr63F7G4Oev5K"
                alt="Pharmacy Students"
                className="relative w-full rounded-2xl shadow-lg object-cover hover:scale-[1.02] transition-transform duration-500"
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
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {[
              { name: "Process Control", icon: Settings },
              { name: "Manufacturing", icon: Factory },
              { name: "Quality Control", icon: ShieldCheck },
              { name: "Medical Representative", icon: Users },
              { name: "Retail/Wholesale Pharmacy Outlet", icon: Store },
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
                Candidate shall have passed 10+2 examination conducted by the
                respective state/central government authorities recognized as
                equivalent to 10+2 examination by the Association of Indian
                Universities (AIU) with English as one of the subjects and
                Physics, Chemistry, Mathematics (P.C.M) and or Biology
                (P.C.B/P.C.M.B.) as optional subjects individually.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed text-justify">
                Any other qualification approved by the Pharmacy Council of India
                as equivalent to any of the above examinations.
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
              <h4 className="text-xl font-bold">Affiliated To IKGPTU, Jalandhar</h4>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 min-w-[280px]"
            >
              <Award className="w-10 h-10 text-[#F59E0B] mx-auto mb-4" />
              <h4 className="text-xl font-bold">Approved by AICTE</h4>
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
              SVIET Brochure
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Section 8: Career Roles ───────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
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
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-[#F59E0B]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <h4 className="text-[#0F4C81] text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 10: Laboratories Carousel ────────────────────── */}
      <LabCarousel />
    </div>
  );
};

export default DPharmacyPage;
