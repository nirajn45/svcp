"use client";

import React from "react";
import { BookOpen, ExternalLink, Download } from "lucide-react";
import { motion } from "framer-motion";

const Page = () => {
  const syllabusData = [
    {
      name: "B. Pharmacy",
      link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh23uTAtBQhouO4sXci71GvtEdxUSqLIHy5RYD",
      description: "Bachelor of Pharmacy comprehensive curriculum and academic standards.",
    },
    {
      name: "Pharm. D",
      link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhjbb4LqwhdkBm8nFfQrTuisZUhM6xGP7pgqWK",
      description: "Doctor of Pharmacy professional course details and clinical training modules.",
    },
    {
      name: "M. Pharm. Pharmaceutics",
      link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh2dkuJTBQhouO4sXci71GvtEdxUSqLIHy5RYD",
      description: "Master of Pharmacy in Pharmaceutics specialization syllabus.",
    },
    {
      name: "M. Pharm. Pharmacology",
      link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhVKI0tHPEQ4cRHYwiyedFPC60nBahSDLMGk1J",
      description: "Master of Pharmacy in Pharmacology advanced research and studies curriculum.",
    },
    {
      name: "D. Pharmacy",
      link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh20VrYnBQhouO4sXci71GvtEdxUSqLIHy5RYD",
      description: "Diploma in Pharmacy fundamental courses and professional guidelines.",
    },
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F4C81]">
              Syllabus
            </h1>
            <p className="text-gray-500 mt-3 text-lg max-w-2xl">
              Access the detailed curriculum and academic structure for all our pharmaceutical programs.
            </p>
          </div>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {syllabusData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* Icon */}
                <div className="bg-[#F59E0B]/10 p-4 rounded-2xl inline-block mb-6 group-hover:bg-[#F59E0B]/20 transition-colors duration-300">
                  <BookOpen className="h-8 w-8 text-[#F59E0B]" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#0F4C81] mb-3 group-hover:text-[#F59E0B] transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] text-white font-bold py-3.5 px-6 rounded-xl hover:bg-[#d97706] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 group/btn"
              >
                <span>View / Download Syllabus</span>
                <ExternalLink className="h-5 w-5 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Informational Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 text-center text-gray-500 max-w-3xl mx-auto shadow-sm"
        >
          <p className="text-sm md:text-base italic italic">
            Note: All syllabus links are provided by the university and are subject to periodic updates. Please ensure you are referencing the correct academic session.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;