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
                  Mr. Ashwani Garg
                </h2>
                <p className="text-gray-500">Chairman</p>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify text-lg">
                I welcome every aspiring achiever to the Swami Vivekanand Group of Institutions. Today SVGOI has become a dream place to provide valuable educational experience to students, from different cultures and backgrounds. I am delighted to see the contributions, the students, faculty, and management of SVGOI have been making towards the overall success of students across the world. We have an interactive curriculum made to provide definite learning solutions in the field of Scientific studies, Medical studies, Arts, Business & Engineering. In this world known as a global village, all boundaries and the national borders are gradually becoming more transparent. Our international collaborations have helped students to form unlimited opportunities of global exposure for our students, to excel in their careers. So join your hands with SVGOI and be future-ready.
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
                src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh1d9NYriaMNURpZ8YFcWvKyC34PT2BHsjXEIA"
                alt="Mr. Ashwani Garg"
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