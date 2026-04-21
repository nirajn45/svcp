"use client";

import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <section className="py-16 md:py-20 bg-linear-to-br from-white to-orange-50/30">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <motion.h2
                className="border-l-4 border-[#F59E0B] text-3xl md:text-4xl font-bold text-gray-900 pl-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About <span className="text-[#F59E0B]">SRNRMECT</span>
              </motion.h2>
              <motion.p
                className="text-gray-700 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                The <span className="font-semibold text-[#0F4C81]">Shri Raghunath Rai Memorial Educational & Charitable Trust (Regd.)</span> was established on <span className="font-semibold text-[#0F4C81]">29 September 2003</span> as a non-government trust in <span className="font-semibold text-[#0F4C81]">Mohali (SAS Nagar), Punjab</span>, under the Societies Registration Act. It focuses on <span className="font-semibold text-[#0F4C81]">education, literacy, and vocational training</span>, particularly serving areas all over the Punjab.
              </motion.p>
            </div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img
                src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhmMegZalDScLQPBuAt5h3kTeNqXa79jFEGKnb"
                alt="SVCP Campus"
                className="rounded-2xl shadow-lg w-full max-w-md object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Page;
