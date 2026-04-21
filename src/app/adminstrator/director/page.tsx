"use client";

import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="bg-linear-to-br from-white to-blue-50/30">
      {/* ── Section 1: Director Academics ─────────────────────── */}
      <section className="py-20 px-4 md:px-8 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-stretch">
            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent bg-white p-8 md:p-12 rounded-2xl shadow-md border-l-4 border-[#F59E0B] pl-8 flex flex-col"
            >
              <div className="space-y-6 py-2">
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F4C81] leading-tight">
                    Academic Vision & Leadership
                  </h1>
                  <div className="w-16 h-1 bg-[#F59E0B] rounded-full"></div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#F59E0B]">
                    Prof. (Dr.) Sanjeev Saini
                  </h2>
                  <p className="text-gray-500 font-medium text-lg">
                    Director Academics
                  </p>
                </div>

                <div className="text-gray-700 leading-relaxed text-justify space-y-4 text-base md:text-lg">
                  <p>
                    Modern education must go beyond preparing students for
                    jobs—it should equip them for lifelong learning, leadership,
                    and meaningful contributions to society. Guided by this
                    belief, Swami Vivekanand College of Pharmacy (SVCP) has
                    built an academic ecosystem where knowledge meets
                    innovation, and values shape vision.
                  </p>
                  <p>
                    At Swami Vivekanand College of Pharmacy (SVCP), our vision
                    goes beyond delivering academic content—we are committed to
                    creating an environment where innovation, critical thinking,
                    and lifelong learning flourish. Since our establishment in
                    2005, we have embraced the evolving demands of industry and
                    society, designing academic programs that are practical,
                    relevant, and future-ready.
                  </p>
                  <p>
                    Our academic philosophy places students at the heart of
                    every initiative. Through well-structured curricular,
                    outcome-based teaching, and the integration of modern
                    technology, we equip our learners with the knowledge and
                    skills needed to excel in a competitive global landscape.
                    Our faculty members, serving as mentors and role models,
                    guide students to cultivate professional competence
                    alongside integrity and social responsibility.
                  </p>
                  <p>
                    We complement classroom learning with experiential
                    opportunities—ranging from research projects and industrial
                    training to seminars, cultural fests, and global
                    collaborations—ensuring a well-rounded growth experience.
                  </p>
                  <p>
                    At SVCP, education is not merely about degrees; it is about
                    transforming potential into achievement. We remain
                    dedicated to producing graduates who are not only job-ready
                    but also future leaders, innovators, and change-makers in
                    their chosen fields.
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
                  src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrha88JJvVC8K1GnFqt93VfM5zvdpiEZWeNRxrI"
                  alt="Prof. (Dr.) Sanjeev Saini"
                  className="w-full h-full object-cover object-[center_25%] rounded-2xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Director Research ─────────────────────── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-stretch">
            {/* Image Side (Left for Reverse Layout) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full max-h-[70vh] order-2 lg:order-1"
            >
              <div className="h-full">
                <img
                  src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhQxXsU3Z5AsUYfVXRHTrao4PIwMJvymjhq0tk"
                  alt="Prof. (Dr.) Ashok Kumar Tiwary"
                  className="w-full h-full object-cover object-[center_25%] rounded-2xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Text Side (Right for Reverse Layout) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent bg-white p-8 md:p-12 rounded-2xl shadow-md border-l-4 border-[#F59E0B] pl-8 flex flex-col order-1 lg:order-2"
            >
              <div className="space-y-6 py-2">
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F4C81] leading-tight text-right lg:text-left">
                    Research & Development
                  </h1>
                  <div className="w-16 h-1 bg-[#F59E0B] rounded-full ml-auto lg:ml-0"></div>
                </div>

                <div className="text-right lg:text-left">
                  <h2 className="text-2xl font-bold text-[#F59E0B]">
                    Prof. (Dr.) Ashok Kumar Tiwary
                  </h2>
                  <p className="text-gray-500 font-medium text-lg">
                    Director Research
                  </p>
                  <p className="text-gray-400 text-sm italic">
                    Swami Vivekanand College of Pharmacy
                  </p>
                </div>

                <div className="text-gray-700 leading-relaxed text-justify space-y-4 text-base md:text-lg">
                  <p>
                    At Swami Vivekanand College of Pharmacy, research is
                    regarded as a vital component of academic excellence and
                    innovation. We encourage our students and faculty to
                    actively engage in scientific inquiry that addresses
                    healthcare challenges and contributes to society.
                  </p>
                  <p>
                    Our institution promotes a research-driven environment
                    through quality publications, funded projects, patents, and
                    interdisciplinary collaboration. We strive to nurture
                    critical thinking and innovation among budding pharmacy
                    professionals.
                  </p>
                  <p>
                    With modern facilities and dedicated mentorship, we aim to
                    develop competent researchers with global perspectives. I
                    warmly welcome all aspiring students to become part of this
                    journey of knowledge and discovery.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;