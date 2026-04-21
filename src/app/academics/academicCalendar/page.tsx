"use client";

import React from "react";
import { Calendar, Download, Eye } from "lucide-react";
import { motion } from "framer-motion";

const Page = () => {
  const calendarData = [
    {
      title: "Academic Calendar for Session 2025-2026",
      link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhTvMy9BpKlkFuAROSjc63sigMztyCVdIZ9nE7",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="border-l-4 border-[#F59E0B] pl-4">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0F4C81]">
              Academic Calendar
            </h1>
            <p className="text-gray-500 mt-2 text-lg">
              Download and view the academic schedules for the upcoming sessions.
            </p>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {calendarData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-8 border border-gray-100 group"
            >
              <div className="flex flex-wrap items-center justify-between gap-6">
                {/* Left Side: Icon + Title */}
                <div className="flex items-center gap-5">
                  <div className="bg-[#0F4C81]/10 p-4 rounded-xl group-hover:bg-[#0F4C81]/20 transition-colors">
                    <Calendar className="h-7 w-7 text-[#0F4C81]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>

                {/* Right Side: Button */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F59E0B] hover:bg-[#d97706] text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Eye className="h-5 w-5" />
                  View / Download
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Info Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center text-gray-500 text-sm italic"
        >
          * Dates are subject to change based on university and government directives.
        </motion.p>
      </div>
    </div>
  );
};

export default Page;