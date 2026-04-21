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
                  Dr. Manish Goswami
                </h2>
                <p className="text-gray-500">Principal, SVCP</p>
              </div>
              <div className="text-gray-700 leading-relaxed text-justify space-y-4 text-lg">
                <p>
                  Our institution, inspired by the ideals of Swami Vivekanand Ji, is dedicated to nurturing competent, compassionate, and ethical pharmacy professionals who can contribute meaningfully to society and the healthcare sector.
                </p>
                <p>
                  At SVCP, we believe that education goes beyond classrooms. Along with academic excellence, we focus on research, innovation, and skill development to prepare our students for the dynamic global pharmaceutical industry. Our state-of-the-art laboratories, well-stocked library, experienced faculty, and vibrant learning environment ensure that every student has the right platform to explore, learn, and excel.
                </p>
                <p>
                  We encourage our students to imbibe not only professional knowledge but also values of integrity, discipline, and social responsibility. Through co-curricular and extracurricular activities, we strive to shape well-rounded individuals who can adapt to challenges and emerge as leaders in their chosen fields.
                </p>
              </div>
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
                src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhx7s1aJTqPzmp1ofYAyVMtEcFNh9bBkJs2Z6j"
                alt="Dr. Manish Goswami"
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