"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-linear-to-br from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-stretch">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent bg-white p-6 md:p-10 rounded-2xl shadow-md border-l-4 border-[#F59E0B] pl-8 flex flex-col"
          >
            <div className="space-y-6 py-2">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F4C81] leading-tight">
                Guiding Excellence: Leadership Behind the Scenes
              </h1>
              <div className="w-16 h-1 bg-[#F59E0B] rounded-full"></div>
              <div>
                <h2 className="text-xl font-bold text-[#F59E0B]">
                  Mr. Ashok Garg
                </h2>
                <p className="text-gray-500">President</p>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify text-lg">
                SVGOI has experienced remarkable growth in recent years, earning widespread acclaim for its rapid advancement. Our journey from inception to our current standing is a testament to our unwavering dedication, exceptional faculty, and enriching learning environment. With a focus on quality education, we offer diverse programs affiliated with both national and international universities. We celebrate the achievements of our faculty, staff, and partners, employing modern teaching methods that empower students to realize their full potential. Emphasizing hands-on experience over mere theoretical knowledge, SVGOI is dedicated to providing practical solutions and fostering intellectual brilliance through research and development. Let's collaborate in building a skilled society together.
              </p>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full max-h-[70vh]"
          >
            <div className="h-full">
              <img
                src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhnyZSu0N5Zky0Lh3eQpjSbmYWMEdFsGT7R86C"
                alt="Mr. Ashok Garg"
                className="w-full h-full object-cover object-[center_25%] rounded-2xl shadow-xl border border-gray-200 hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Page;