"use client";

import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-linear-to-br from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-stretch">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent bg-white p-6 md:p-10 rounded-2xl shadow-md border-l-4 border-[#F59E0B] pl-8 flex flex-col"
          >
            <div className="space-y-6 py-2">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F4C81] leading-tight">
                Academic Management & Registrar Services
              </h1>
              <div className="w-16 h-1 bg-[#F59E0B] rounded-full"></div>
              <div>
                <h2 className="text-xl font-bold text-[#F59E0B]">
                  Mr. Satish Sharma
                </h2>
                <p className="text-gray-500">Registrar</p>
              </div>
              <div className="text-gray-700 leading-relaxed text-justify text-lg space-y-4">
                <p>
                  Swami Vivekanand College of Pharmacy, an institution
                  committed to academic excellence, innovation, and holistic
                  development of students.
                </p>
                <p>
                  At SVCP, we nurture future pharmacists with strong
                  professional ethics, scientific knowledge, and practical
                  skills, enabling them to contribute effectively to the
                  healthcare sector. Guided by the vision of Swami Vivekanand
                  Ji, we strive to instill values of discipline, dedication,
                  and service to society.
                </p>
                <p>
                  Our dedicated faculty, modern infrastructure, well-equipped
                  laboratories, and a student-centric environment provide the
                  perfect platform for young minds to excel in academics,
                  research, and co-curricular activities. We aim to empower
                  students not only to achieve professional success but also to
                  become responsible citizens who can make a positive
                  difference in the community.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full max-h-[70vh]"
          >
            <div className="h-full">
              <img
                src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhXQ5qFNdBwxYedrOI4V6qGjbEHDLtgCS7MiyN"
                alt="Mr. Satish Sharma"
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