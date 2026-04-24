"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, FileCheck, Download, Users, Lightbulb, Target } from "lucide-react";

const objectives = [
  "To develop a systematic approach for continuous improvement in academic and administrative performance.",
  "To ensure quality in teaching-learning processes, especially in pharmaceutical education and laboratory practices.",
  "To promote research, innovation, and industry-oriented training in the pharmacy field.",
  "To encourage faculty development programs, workshops, and skill enhancement activities.",
  "To establish effective feedback systems from students, alumni, and stakeholders for quality improvement.",
  "To enhance student performance through academic monitoring, remedial classes, and mentoring.",
  "To document and maintain institutional data for accreditation and quality assessment.",
  "To foster collaborations with pharmaceutical industries, hospitals, and research organizations.",
  "To create a quality culture within the institution focused on excellence and continuous growth."
];

const committeeMembers = [
  { sr: "1", composition: "Chairperson", name: "Prof. (Dr.) Manish Goswami", designation: "Principal" },
  { sr: "2", composition: "Teachers", name: "Dr. A. Pandurangan", designation: "Professor" },
  { sr: "", composition: "", name: "Dr. Ashok Kumar Tiwary", designation: "Professor" },
  { sr: "", composition: "", name: "Dr. Swikriti", designation: "Professor" },
  { sr: "", composition: "", name: "Dr. Satbir Kaur", designation: "Professor" },
  { sr: "", composition: "", name: "Mr. Anshu Gupta", designation: "Associate Professor" },
  { sr: "", composition: "", name: "Dr. Damit Kumar", designation: "Associate Professor" },
  { sr: "3", composition: "Management Member", name: "Er. Vishal Garg", designation: "Director Secretarial & Administration, Management Representative" },
  { sr: "4", composition: "Senior Administrative Officers", name: "Adv. Shubham Garg", designation: "Director Training & Placement" },
  { sr: "", composition: "", name: "Er. Ankur Gill", designation: "Director Operations" },
  { sr: "", composition: "", name: "Ms. Tripta Kumari", designation: "Office Superintendent" },
  { sr: "5", composition: "Local Society, Students and Alumni", name: "Mr. Gaurav Garg", designation: "Local Society" },
  { sr: "", composition: "", name: "Ms. Garima", designation: "B. Pharmacy 3rd Semester" },
  { sr: "", composition: "", name: "Mr. Sagnik Roy", designation: "B. Pharmacy 3rd Semester" },
  { sr: "", composition: "", name: "Mr. Lal Krishna Kumar", designation: "Alumnus, B.Pharmacy" },
  { sr: "6", composition: "Nominee from Employers/ Industrialists/ Stakeholders", name: "Mr. Pradeep Sharma", designation: "General Manager, (Katherine & Kyoor Pharmaceuticals)" },
  { sr: "7", composition: "Coordinator", name: "Dr. Meenakshi Rana", designation: "" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const IQACPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-4">
            Internal Quality Assurance Cell (IQAC)
          </h1>
          <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl text-lg leading-relaxed">
            Ensuring continuous quality enhancement through systematic academic and administrative performance monitoring, 
            facilitating a learner-centric environment at SVCP.
          </p>
        </motion.div>

        {/* Section 1: Top PDF Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {/* Card 1 */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 flex items-center gap-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="bg-blue-50 p-4 rounded-xl text-[#0F4C81] group-hover:bg-[#0F4C81] group-hover:text-white transition-colors duration-300">
              <FileCheck size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#0F4C81]">IQAC Constitution / Manual</h3>
              <p className="text-gray-500 text-sm mt-1">Foundational quality guidelines and vision.</p>
            </div>
            <a 
              href="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhUhFfzDtLDPe7fJQ0dYxH6AGR5kbzZvLr2T8m"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F59E0B] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#d97706] transition-colors whitespace-nowrap shadow-sm active:scale-95"
            >
              View PDF
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 flex items-center gap-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="bg-blue-50 p-4 rounded-xl text-[#0F4C81] group-hover:bg-[#0F4C81] group-hover:text-white transition-colors duration-300">
              <Users size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#0F4C81]">Committee / Members List</h3>
              <p className="text-gray-500 text-sm mt-1">Academic & administrative leadership roster.</p>
            </div>
            <a 
              href="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhVK0lGkIEQ4cRHYwiyedFPC60nBahSDLMGk1J"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F59E0B] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#d97706] transition-colors whitespace-nowrap shadow-sm active:scale-95"
            >
              View PDF
            </a>
          </motion.div>
        </motion.div>

        {/* Section 2: Objectives */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="bg-[#F59E0B] w-1.5 h-10 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F4C81]">
              Objectives of the Internal Quality Assurance Cell
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4"
          >
            {objectives.map((obj, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white border border-gray-100 hover:border-[#F59E0B]/40 rounded-xl p-5 shadow-sm transition-all duration-300 group hover:shadow-md flex gap-4 items-start"
              >
                <div className="mt-1.5 p-1 rounded-full bg-orange-50 text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-white transition-colors">
                  <FileText size={14} />
                </div>
                <p className="text-gray-700 text-base leading-relaxed">{obj}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 3: IQAC Committee Table */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-[#F59E0B] w-1.5 h-10 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F4C81]">
                Internal Quality Assurance Cell (IQAC) Committee
              </h2>
            </div>
            <p className="text-gray-500 text-lg ml-6 mt-2">
              The IQAC is hereby reconstituted with the following members for coordinating quality-related activities.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0F4C81] text-white">
                    <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider w-20">Sr. No</th>
                    <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Composition</th>
                    <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Name & Designation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {committeeMembers.map((member, index) => (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="hover:bg-orange-50/50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-gray-600 font-medium">{member.sr}</td>
                      <td className="px-6 py-4 text-gray-800 font-semibold">{member.composition}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-[#0F4C81] font-bold text-lg">{member.name}</span>
                          <span className="text-gray-500 text-sm font-medium">{member.designation}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>


      </div>
    </div>
  );
};

export default IQACPage;