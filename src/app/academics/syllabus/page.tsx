"use client";

import React from "react";
import { BookOpen, ExternalLink, Download, Sparkles, Cpu, Award, CheckCircle2, ChevronRight, Layers, FileText } from "lucide-react";
import { motion } from "framer-motion";

const Page = () => {
  const syllabusData = [
    {
      name: "B. Pharmacy (NEP-2020 Scheme 2026)",
      link: "/documents/B.Pharm_Syllabus_2026_NEP2020.pdf",
      description: "Latest PCI curriculum aligned with NEP 2020 featuring AI/ML in Pharmacy, Python & 193 Total Credits.",
      highlight: true,
      badge: "New NEP-2020",
    },
    {
      name: "B. Pharmacy (2017 Onwards)",
      link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh23uTAtBQhouO4sXci71GvtEdxUSqLIHy5RYD",
      description: "Bachelor of Pharmacy comprehensive PCI curriculum and academic regulations.",
      highlight: false,
    },
    {
      name: "Pharm. D",
      link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhjbb4LqwhdkBm8nFfQrTuisZUhM6xGP7pgqWK",
      description: "Doctor of Pharmacy 6-year professional course curriculum and clinical ward rounds.",
      highlight: false,
    },
    {
      name: "M. Pharm. Pharmaceutics",
      link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh2dkuJTBQhouO4sXci71GvtEdxUSqLIHy5RYD",
      description: "Master of Pharmacy in Pharmaceutics specialization curriculum & dissertation guidelines.",
      highlight: false,
    },
    {
      name: "M. Pharm. Pharmacology",
      link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhVKI0tHPEQ4cRHYwiyedFPC60nBahSDLMGk1J",
      description: "Master of Pharmacy in Pharmacology advanced research & molecular biology studies.",
      highlight: false,
    },
    {
      name: "D. Pharmacy",
      link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh20VrYnBQhouO4sXci71GvtEdxUSqLIHy5RYD",
      description: "Diploma in Pharmacy 2-year fundamental pharmaceutical curriculum and ER regulations.",
      highlight: false,
    },
  ];

  const nepSemesters = [
    { sem: "Sem I", credits: 21 },
    { sem: "Sem II", credits: 26 },
    { sem: "Sem III", credits: 25 },
    { sem: "Sem IV", credits: 23 },
    { sem: "Sem V", credits: 22 },
    { sem: "Sem VI", credits: 26 },
    { sem: "Sem VII", credits: 26 },
    { sem: "Sem VIII", credits: 24 },
  ];

  return (
    <div className="min-h-screen bg-slate-50/30 py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="border-l-4 border-[#F59E0B] pl-6">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-1">
              Curriculum & Syllabi
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F4C81]">
              Academic Syllabus
            </h1>
            <p className="text-gray-500 mt-3 text-lg max-w-2xl">
              Access the detailed curriculum and semester credit structure for all pharmaceutical programs offered at SVCP.
            </p>
          </div>
        </motion.div>

        {/* Featured NEP 2020 Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-[#0F4C81] via-[#0a3a63] to-[#0F4C81] rounded-3xl p-8 sm:p-10 text-white shadow-xl mb-16 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#F59E0B]/15 blur-3xl" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PCI New Syllabus • NEP 2020 Implementation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
                B.Pharm Curriculum as per NEP 2020
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                The updated Bachelor of Pharmacy curriculum integrates multidisciplinary skill training,
                modern computational tools, Python for pharmaceutical analysis, AI/ML in drug discovery,
                and a mandatory 240-hour industrial internship across a total of <strong>193 Credits</strong>.
              </p>

              {/* Semester Credit Badges */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-2">
                {nepSemesters.map((s, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-2 text-center border border-white/10">
                    <span className="block text-[11px] text-white/70">{s.sem}</span>
                    <span className="text-sm font-bold text-[#F59E0B]">{s.credits} cr</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-white/50 mt-2">Total: 193 Credits across 8 Semesters</p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <a
                href="/documents/B.Pharm_Syllabus_2026_NEP2020.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 text-sm whitespace-nowrap active:scale-95"
              >
                <FileText className="w-5 h-5" />
                <span>View B.Pharm NEP-2020 PDF</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Grid Layout of All Programs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {syllabusData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border ${
                item.highlight ? "border-[#F59E0B] ring-2 ring-[#F59E0B]/20" : "border-gray-100"
              } flex flex-col justify-between`}
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-[#F59E0B]/10 p-4 rounded-2xl inline-block group-hover:bg-[#F59E0B]/20 transition-colors duration-300">
                    <BookOpen className="h-8 w-8 text-[#F59E0B]" />
                  </div>
                  {item.badge && (
                    <span className="bg-[#0F4C81] text-white font-bold text-xs px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0F4C81] mb-3 group-hover:text-[#F59E0B] transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 text-sm ${
                  item.highlight
                    ? "bg-[#F59E0B] hover:bg-[#d97706] text-white"
                    : "bg-[#0F4C81] hover:bg-[#0c3d68] text-white"
                }`}
              >
                <span>View / Download Syllabus</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Informational Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 text-center text-gray-500 max-w-3xl mx-auto shadow-sm"
        >
          <p className="text-xs md:text-sm italic">
            Note: All syllabi conform to Pharmacy Council of India (PCI) regulations and I.K. Gujral Punjab Technical University (IKGPTU) / PSBTE standards.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
