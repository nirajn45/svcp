"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  Clock,
  GraduationCap,
  FlaskConical,
  Target,
  Users,
  Building2,
  Award,
  Microscope,
  BookOpen,
  Briefcase,
  PenTool,
  ShieldCheck,
  Stethoscope,
  Lightbulb
} from "lucide-react";
import LabCarousel from "@/components/LabCarousel";

const MPharmacyPharmacologyPage = () => {
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
    { icon: Clock, label: "Program Duration", value: "2 Years (4 Semesters)" },
    { icon: GraduationCap, label: "Program Name", value: "M.Pharmacy (Pharmacology)" },
    { icon: Target, label: "Mode of Admission", value: "Merit / Entrance" },
  ];

  const careerOpportunities = [
    { name: "Pharmacologist", icon: Microscope },
    { name: "Clinical Research Associate", icon: Stethoscope },
    { name: "Drug Safety Associate", icon: ShieldCheck },
    { name: "Medical Writer", icon: PenTool },
    { name: "Academician", icon: BookOpen },
    { name: "Research Scientist", icon: FlaskConical },
  ];

  const whyChooseUs = [
    {
      title: "Advanced Facilities",
      icon: FlaskConical,
      desc: "Advanced laboratory facilities",
    },
    {
      title: "Expert Faculty",
      icon: Users,
      desc: "Experienced and qualified faculty",
    },
    {
      title: "Research Focus",
      icon: Microscope,
      desc: "Research-oriented curriculum",
    },
    {
      title: "Industry Exposure",
      icon: Briefcase,
      desc: "Industry and academic exposure",
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      desc: "Focus on innovation and drug development",
    },
  ];

  // Labs data moved to LabCarousel component

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ── Section 1: Hero ──────────────────────────────────────── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh828LhARenX6T59r23ZpxCBGgclahA0EvsHbM"
            alt="M.Pharmacy Hero"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            M.Pharmacy <span className="text-[#F59E0B]">(Pharmacology)</span> – 2 Years
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-200 font-medium leading-relaxed"
          >
            Provide advanced knowledge and research skills in drug action, toxicity, and therapeutic applications.
          </motion.p>
        </div>
      </section>

      {/* ── Section 2: Program Overview & About the Course ─────────── */}
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
                About the <span className="text-[#F59E0B]">Course</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#F59E0B] rounded-full" />
              <div className="space-y-6 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  The M.Pharmacy in Pharmacology at Swami Vivekanand College of Pharmacy is a postgraduate program designed to provide advanced knowledge and research skills in drug action, toxicity, and therapeutic applications. The course focuses on modern pharmacological principles, experimental techniques, and clinical research, preparing students for careers in academia, research, and the pharmaceutical industry.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  The program offers in-depth training in Experimental Pharmacology, Clinical Pharmacology, Toxicology Studies, Pharmacological Screening Methods, Research Methodology and Biostatistics.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  Students gain hands-on experience through laboratory work, seminars, and a research dissertation in the final year.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-4 bg-[#F59E0B]/10 rounded-[2rem] blur-xl group-hover:bg-[#F59E0B]/20 transition-all duration-500" />
              <div className="relative w-full min-h-[400px] h-full rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhvcSolmGgGwo3JxX8yq7AePjFnLpUlsDumk4H"
                  alt="Pharmacy Students"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
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

      {/* ── Section 4: Career Opportunities ───────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-6">
              Career <span className="text-[#F59E0B]">Opportunities</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Graduates can pursue careers as:
            </p>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto" />
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {careerOpportunities.map((track, idx) => (
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
                {track.name === "Research Scientist" && (
                   <p className="text-xs text-gray-500 mt-2">in pharmaceutical industries and research organizations</p>
                )}
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
              Eligibility Criteria <span className="text-[#F59E0B]">for Admission</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Candidates seeking admission to the M.Pharmacy (Pharmacology) program must fulfill the following criteria:
            </p>
            <div className="space-y-4 border-l-4 border-[#F59E0B] pl-8 py-2">
              <div className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-3 bg-[#F59E0B] rounded-full"></div>
                <p className="text-xl text-gray-700 leading-relaxed text-justify">
                  Must have passed B.Pharmacy from a recognized university.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-3 bg-[#F59E0B] rounded-full"></div>
                <p className="text-xl text-gray-700 leading-relaxed text-justify">
                  Should have secured minimum 55% marks in B.Pharmacy
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-3 bg-[#F59E0B] rounded-full"></div>
                <p className="text-xl text-gray-700 leading-relaxed text-justify">
                  Admission will be granted as per the norms of PCI, State Government, and affiliated university.
                </p>
              </div>
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
              <h4 className="text-xl font-bold">Approved by PCI</h4>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 7: Why Choose This Course? ────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-6">
              Why Choose <span className="text-[#F59E0B]">This Course?</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto" />
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="bg-[#F59E0B]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <p className="text-gray-700 font-bold leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 8: Laboratories Carousel ────────────────────── */}
      <LabCarousel />
    </div>
  );
};

export default MPharmacyPharmacologyPage;
