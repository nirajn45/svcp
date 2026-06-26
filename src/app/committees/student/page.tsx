"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare, FileText, ExternalLink, ChevronRight,
  Users, Shield, BookOpen, CheckCircle2, Star, User,
} from "lucide-react";

// ── Animation Variants ───────────────────────────────────────────────────────
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

// ── Data ─────────────────────────────────────────────────────────────────────

const committeeMembers = [
  {
    sNo: 1,
    composition: "Chairperson",
    compositionType: "chair",
    members: [
      { name: "Mr. Sarabjeet Singh", designation: "Dean (Student Welfare)" },
    ],
  },
  {
    sNo: 2,
    composition: "Senior Faculty Members",
    compositionType: "faculty",
    members: [
      { name: "Dr. Swikriti",       designation: "Professor" },
      { name: "Dr. Meenakshi Rana", designation: "Associate Professor" },
      { name: "Dr. Damit",          designation: "Associate Professor" },
    ],
  },
  {
    sNo: 3,
    composition: "Students as Members",
    compositionType: "student",
    members: [
      { name: "Mr. Nishikant Singh", designation: "B. Pharmacy 5th Semester" },
      { name: "Mr. Shubh Kumar",     designation: "B. Pharmacy 5th Semester" },
    ],
  },
];

const typeStyles: Record<string, {
  badge: string; row: string; iconBg: string; iconText: string; border: string;
}> = {
  chair:   { badge: "bg-[#0F4C81] text-white",   row: "bg-[#0F4C81]/5",  iconBg: "bg-[#0F4C81]/10", iconText: "text-[#0F4C81]", border: "border-l-4 border-[#0F4C81]" },
  faculty: { badge: "bg-[#F59E0B] text-white",    row: "bg-amber-50/60",  iconBg: "bg-amber-100",    iconText: "text-amber-700", border: "border-l-4 border-[#F59E0B]" },
  student: { badge: "bg-emerald-600 text-white",  row: "bg-emerald-50/60",iconBg: "bg-emerald-100",  iconText: "text-emerald-700", border: "border-l-4 border-emerald-600" },
};

const objectives = [
  { icon: MessageSquare, text: "Develop a responsive and accountable attitude among all students." },
  { icon: Shield,        text: "Maintain a harmonious educational atmosphere in the institute." },
  { icon: BookOpen,      text: "Ensure timely redressal of student grievances as per UGC norms." },
  { icon: CheckCircle2,  text: "Promote transparency, fairness and student welfare at all levels." },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function StudentGrievancePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased">

      {/* ── HERO BANNER ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0F4C81] overflow-hidden">
        {/* Decorative layers */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,white,transparent_60%)]" />
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-[#F59E0B]/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-white/60 text-xs font-medium uppercase tracking-widest mb-6"
          >
            <span>Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Committees</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#F59E0B]">Student Grievance Redressal Committee</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-start gap-5"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F59E0B]/20 border border-[#F59E0B]/30 flex items-center justify-center shrink-0 shadow-lg">
                <MessageSquare className="w-8 h-8 text-[#F59E0B]" />
              </div>
              <div>
                <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
                  Academic Session 2025–26
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  Student Grievance
                  <span className="block text-[#F59E0B]">Redressal Committee</span>
                </h1>
                <p className="text-white/60 text-sm mt-2 font-medium tracking-wide">SGRC &nbsp;·&nbsp; As per UGC Regulations 2018</p>
              </div>
            </motion.div>

            {/* PDF Button */}
            <motion.a
              href="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhzxpbqIo41AFrh79RX5MGYLJuQNHB8i4EamxW"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ scale: 1.04, y: -2 }}
              className="inline-flex items-center gap-3 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 text-sm shrink-0 group"
            >
              <FileText className="w-5 h-5" />
              View Official PDF
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* ── MANDATE STRIP ───────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div {...fadeInUp} className="flex items-start gap-4">
            <div className="w-1 min-h-[60px] bg-[#F59E0B] rounded-full shrink-0 mt-1" />
            <div>
              <h2 className="text-sm font-bold text-[#0F4C81] uppercase tracking-wide mb-1.5">
                About the Committee
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-5xl">
                The following composition of the Student Grievance Redressal Committee has been approved as per{" "}
                <strong className="text-gray-800">UGC (Grievance Redressal of Students) Regulations, 2018</strong> for
                the academic session 2025–26 to develop a responsive and accountable attitude among all the students
                in order to maintain a harmonious educational atmosphere in the institute.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">

            {/* ── LEFT: Committee Table ── */}
            <div className="lg:col-span-8 space-y-10">

              {/* Section Header */}
              <motion.div {...fadeInUp}>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-5 h-5 text-[#0F4C81]" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                      Composition of SGRC — 2025–26
                    </h2>
                    <div className="w-14 h-1 bg-[#F59E0B] rounded-full mt-2" />
                  </div>
                </div>

                {/* ── Desktop Table ── */}
                <div className="hidden sm:block rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#0F4C81] text-white">
                        <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider w-16">S. No.</th>
                        <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider w-60">Composition</th>
                        <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider">Name</th>
                        <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                      {committeeMembers.map((row) => {
                        const s = typeStyles[row.compositionType];
                        return row.members.map((member, mIdx) => (
                          <motion.tr
                            key={`${row.sNo}-${mIdx}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: mIdx * 0.06 }}
                            className={`hover:bg-gray-50 transition-colors duration-200 ${mIdx === 0 ? s.border.split(" ")[0] + " " + s.border.split(" ")[1] : ""}`}
                          >
                            {/* S.No — rowspan on first member */}
                            {mIdx === 0 && (
                              <td className="px-6 py-5 font-black text-[#0F4C81] text-base align-top" rowSpan={row.members.length}>
                                {row.sNo}
                              </td>
                            )}
                            {/* Composition — rowspan on first member */}
                            {mIdx === 0 && (
                              <td className="px-6 py-5 align-top" rowSpan={row.members.length}>
                                <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold ${s.badge}`}>
                                  {row.composition}
                                </span>
                              </td>
                            )}
                            {/* Name */}
                            <td className="px-6 py-5">
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${s.iconBg}`}>
                                  <User className={`w-4 h-4 ${s.iconText}`} />
                                </div>
                                <span className="font-bold text-gray-900">{member.name}</span>
                              </div>
                            </td>
                            {/* Designation */}
                            <td className="px-6 py-5 text-gray-500 text-sm">{member.designation}</td>
                          </motion.tr>
                        ));
                      })}
                    </tbody>
                  </table>
                </div>

                {/* ── Mobile Cards ── */}
                <div className="sm:hidden space-y-4">
                  {committeeMembers.map((row) => {
                    const s = typeStyles[row.compositionType];
                    return (
                      <div
                        key={row.sNo}
                        className={`rounded-2xl border border-gray-200 overflow-hidden shadow-sm ${s.border}`}
                      >
                        {/* Card header */}
                        <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-100">
                          <span className="w-7 h-7 rounded-full bg-[#0F4C81] text-white font-black text-xs flex items-center justify-center shrink-0">
                            {row.sNo}
                          </span>
                          <span className={`px-3 py-1 rounded-md text-xs font-bold ${s.badge}`}>
                            {row.composition}
                          </span>
                        </div>
                        {/* Members */}
                        <div className="divide-y divide-gray-100">
                          {row.members.map((member, mIdx) => (
                            <div key={mIdx} className="flex items-center gap-3 px-4 py-3 bg-white">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${s.iconBg}`}>
                                <User className={`w-4 h-4 ${s.iconText}`} />
                              </div>
                              <div>
                                <p className="font-bold text-gray-900 text-sm">{member.name}</p>
                                <p className="text-gray-500 text-xs mt-0.5">{member.designation}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Grievance Process */}
              <motion.div {...fadeInUp} className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-[#0F4C81] to-[#0a3a63] px-6 py-5">
                  <h3 className="text-white font-black text-base uppercase tracking-wider">
                    How to Submit a Grievance
                  </h3>
                  <p className="text-white/60 text-xs mt-1">Step-by-step process for students</p>
                </div>
                <div className="p-6">
                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#0F4C81] via-[#F59E0B] to-emerald-500 hidden sm:block" />
                    <div className="space-y-5">
                      {[
                        { step: "01", title: "Identify the Grievance", desc: "Document your concern clearly — academic, administrative, or campus-related.", color: "bg-[#0F4C81]" },
                        { step: "02", title: "Submit Written Complaint", desc: "Submit a written complaint to the SGRC Chairperson or drop it in the grievance box.", color: "bg-[#F59E0B]" },
                        { step: "03", title: "SGRC Review", desc: "The committee reviews the grievance within the stipulated timeframe as per UGC norms.", color: "bg-emerald-600" },
                        { step: "04", title: "Resolution & Redressal", desc: "A resolution is communicated to the student and appropriate action is taken.", color: "bg-purple-600" },
                      ].map((s, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="flex items-start gap-4 sm:pl-10"
                        >
                          <div className={`w-9 h-9 rounded-full ${s.color} text-white font-black text-xs flex items-center justify-center shrink-0 shadow-md relative z-10 sm:-ml-10`}>
                            {s.step}
                          </div>
                          <div className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl p-4 flex-1 border border-gray-200">
                            <h4 className="font-bold text-gray-900 text-sm">{s.title}</h4>
                            <p className="text-gray-500 text-xs mt-1 leading-relaxed">{s.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* ── RIGHT: Sidebar ── */}
            <div className="lg:col-span-4 space-y-6">

              {/* Quick Info Card */}
              <motion.div {...fadeInUp} className="bg-[#0F4C81] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Star className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
                  </div>
                  <h3 className="text-base font-black uppercase tracking-wide mb-4">Committee At a Glance</h3>
                  {[
                    { label: "Regulation", value: "UGC 2018" },
                    { label: "Session",    value: "2025–26" },
                    { label: "Chairperson", value: "Mr. Sarabjeet Singh" },
                    { label: "Total Members", value: "6" },
                  ].map((item, i) => (
                    <div key={i} className={`flex justify-between items-center py-3 ${i < 3 ? "border-b border-white/10" : ""}`}>
                      <span className="text-white/60 text-xs font-medium">{item.label}</span>
                      <span className="text-white font-bold text-sm text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Objectives */}
              <motion.div
                variants={stagger}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
              >
                <div className="bg-[#F59E0B] px-5 py-4 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <h3 className="text-white font-black text-sm uppercase tracking-wider">Key Objectives</h3>
                </div>
                <div className="p-5 space-y-4">
                  {objectives.map((obj, i) => {
                    const Icon = obj.icon;
                    return (
                      <motion.div
                        key={i}
                        variants={fadeInUp}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#0F4C81]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0F4C81] transition-colors duration-300">
                          <Icon className="w-4 h-4 text-[#0F4C81] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed mt-1">{obj.text}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Download PDF */}
              <motion.div {...fadeInUp}>
                <a
                  href="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhzxpbqIo41AFrh79RX5MGYLJuQNHB8i4EamxW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#0F4C81] hover:bg-[#0a3a63] text-white font-bold px-5 py-4 rounded-xl shadow-md transition-all duration-300 group w-full"
                >
                  <FileText className="w-5 h-5 text-[#F59E0B]" />
                  <span className="flex-1 text-sm">Download SGRC PDF</span>
                  <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </motion.div>

              {/* UGC Note */}
              <motion.div
                {...fadeInUp}
                className="bg-amber-50 border border-amber-200 rounded-2xl p-5"
              >
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-amber-800 font-bold text-sm mb-1">UGC Regulation Reference</h4>
                    <p className="text-amber-700 text-xs leading-relaxed">
                      Constituted under{" "}
                      <strong>UGC (Grievance Redressal of Students) Regulations, 2018</strong> to ensure
                      fair, transparent and timely resolution of student grievances.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────────────────── */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="relative bg-gradient-to-r from-[#0F4C81] via-[#0a3a63] to-[#0F4C81] rounded-3xl overflow-hidden px-8 sm:px-12 py-10 shadow-2xl"
          >
            <div className="absolute -top-10 -left-10 w-52 h-52 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/20 border border-[#F59E0B]/30 flex items-center justify-center shrink-0">
                <MessageSquare className="w-7 h-7 text-[#F59E0B]" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-black text-xl">Have a Grievance?</h3>
                <p className="text-white/60 text-sm mt-1.5 max-w-xl">
                  The SGRC is committed to addressing all student concerns fairly and promptly.
                  Submit your grievance in writing to the Chairperson or drop it at the institute's grievance box.
                </p>
              </div>
              <motion.a
                href="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhzxpbqIo41AFrh79RX5MGYLJuQNHB8i4EamxW"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-7 py-4 rounded-xl shadow-lg transition-all duration-300 text-sm shrink-0 group"
              >
                <FileText className="w-5 h-5" />
                View SGRC PDF
                <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
