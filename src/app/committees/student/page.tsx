"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare, FileText, ExternalLink, ChevronRight,
  Users, Shield, BookOpen, CheckCircle2, Star, User,
  Download, Eye, RefreshCw, ShieldCheck, Info
} from "lucide-react";

// ── Google Form URLs ─────────────────────────────────────────────────────────
const GOOGLE_FORM_PUBLIC_URL = "https://forms.gle/jWKguiWTSLT7okwG9";
const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfa6248PDyCiqnh1AG3454AnzcetJd6Bd1GPwASiouiLg7U-g/viewform?embedded=true";

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
      { name: "Mr. Sarabjeet Singh", designation: "Dean - Student Welfare" },
    ],
  },
  {
    sNo: 2,
    composition: "Senior Faculty Members",
    compositionType: "faculty",
    members: [
      { name: "Dr. Swikriti",       designation: "Professor" },
      { name: "Dr. Meenakshi Rana", designation: "Associate Professor" },
      { name: "Dr. Damit Kumar",    designation: "Associate Professor" },
    ],
  },
  {
    sNo: 3,
    composition: "Students as Members",
    compositionType: "student",
    members: [
      { name: "Mr. Nishikant Singh", designation: "B. Pharmacy 4th Year" },
      { name: "Mr. Shubh Kumar",     designation: "B. Pharmacy 4th Year" },
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
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Smooth auto-scroll when visiting via #student-complaint-form or #complaint-form
  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash === "#student-complaint-form" || hash === "#complaint-form") {
        const el = document.getElementById("student-complaint-form") || document.getElementById("complaint-form");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Delay slightly to ensure component layout has stabilized
    const timer = setTimeout(scrollToSection, 150);
    window.addEventListener("hashchange", scrollToSection);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToSection);
    };
  }, []);

  const handleReloadForm = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

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
                  Academic Session 2026–27
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  Student Grievance
                  <span className="block text-[#F59E0B]">Redressal Committee</span>
                </h1>
                <p className="text-white/70 text-sm mt-2 font-medium tracking-wide">
                  SGRC &nbsp;·&nbsp; As per UGC Regulations 2018 &nbsp;·&nbsp; Ref: SVCP/CELL/2026/112 (Dated 22/07/2026)
                </p>
              </div>
            </motion.div>

            {/* PDF Button */}
            <motion.a
              href="/documents/Student%20Grievance%20Redressal%20Committee%202026-27.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ scale: 1.04, y: -2 }}
              className="inline-flex items-center gap-3 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 text-sm shrink-0 group"
            >
              <FileText className="w-5 h-5" />
              View SGRC 2026-27 PDF
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
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <h2 className="text-sm font-bold text-[#0F4C81] uppercase tracking-wide">Official Office Order</h2>
                <span className="bg-blue-50 text-[#0F4C81] text-xs font-semibold px-2.5 py-0.5 rounded">
                  Ref: SVCP/CELL/2026/112
                </span>
                <span className="text-gray-500 text-xs">Dated: 22/07/2026</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-5xl">
                The following composition of the Student Grievance Redressal Committee has been approved as per{" "}
                <strong className="text-gray-800">UGC (Grievance Redressal of Students) Regulations, 2018</strong> for
                the academic session <strong>2026–27</strong> to develop a responsive and accountable attitude among all students
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
                      Composition of SGRC — 2026–27
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
                        { step: "02", title: "Submit Written Complaint", desc: "Submit a written complaint to the SGRC Chairperson, submit online below, or drop it in the grievance box.", color: "bg-[#F59E0B]" },
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
                    { label: "Session",    value: "2026–27" },
                    { label: "Order Ref",  value: "SVCP/CELL/2026/112" },
                    { label: "Chairperson", value: "Mr. Sarabjeet Singh" },
                    { label: "Total Members", value: "6" },
                  ].map((item, i) => (
                    <div key={i} className={`flex justify-between items-center py-3 ${i < 4 ? "border-b border-white/10" : ""}`}>
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
                  href="/documents/Student%20Grievance%20Redressal%20Committee%202026-27.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#0F4C81] hover:bg-[#0a3a63] text-white font-bold px-5 py-4 rounded-xl shadow-md transition-all duration-300 group w-full"
                >
                  <FileText className="w-5 h-5 text-[#F59E0B]" />
                  <span className="flex-1 text-sm">Download SGRC 2026-27 PDF</span>
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

      {/* ── 1. GOOGLE COMPLAINT FORM SECTION ─────────────────────────────────── */}
      <section
        id="student-complaint-form"
        className="scroll-mt-24 py-16 bg-white border-t border-gray-200/70 relative"
      >
        {/* Secondary anchor for backwards compatibility */}
        <span id="complaint-form" className="scroll-mt-24 sr-only" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div {...fadeInUp} className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0F4C81]/10 text-[#0F4C81] mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0F4C81]" />
              <span>Online Grievance Submission Portal</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
                  Student Complaint Form
                </h2>
                <div className="w-16 h-1.5 bg-[#F59E0B] rounded-full mt-2" />
                <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
                  Students can submit their grievance directly online to the Student Grievance Redressal Committee using the official Google Complaint Form below.
                  All grievances submitted are confidential and reviewed promptly as per UGC regulations.
                </p>
              </div>

              {/* Alternative Button */}
              <div className="shrink-0">
                <a
                  href={GOOGLE_FORM_PUBLIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0F4C81] hover:bg-[#0a3a63] text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm group"
                >
                  <span>Open Complaint Form</span>
                  <ExternalLink className="w-4 h-4 text-[#F59E0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Instructions / Notice Banner */}
          <motion.div
            {...fadeInUp}
            className="mb-6 bg-blue-50/70 border border-blue-100 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#0F4C81] mt-0.5 shrink-0" />
              <div className="text-xs sm:text-sm text-gray-700">
                <p className="font-semibold text-[#0F4C81] mb-0.5">
                  Online Complaint Submission
                </p>
                <p>
                  You can fill out and submit your complaint directly below. If your browser restricts embedded forms or Google account cookies, click the button to open the form in a new tab.
                </p>
              </div>
            </div>
            <a
              href={GOOGLE_FORM_PUBLIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C81] hover:text-[#F59E0B] transition-colors whitespace-nowrap"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Clean White Form Container */}
          <motion.div
            {...fadeInUp}
            className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden"
          >
            {/* Card Toolbar */}
            <div className="bg-white px-4 sm:px-6 py-3.5 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Official SGRC Google Form • Confidential & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleReloadForm}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 shadow-sm transition-colors"
                  title="Reload embedded form"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reload Form</span>
                </button>
                <a
                  href={GOOGLE_FORM_PUBLIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#0F4C81] hover:text-white bg-white hover:bg-[#0F4C81] border border-[#0F4C81]/30 hover:border-[#0F4C81] shadow-sm transition-all"
                >
                  <span>Open Complaint Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Responsive Iframe Frame (Clean White Background) */}
            <div className="relative w-full bg-white flex flex-col items-center justify-center min-h-[850px] sm:min-h-[950px] lg:min-h-[1050px]">
              {isLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm p-6 text-center">
                  <div className="w-10 h-10 border-4 border-[#0F4C81] border-t-transparent rounded-full animate-spin mb-4" />
                  <p className="text-gray-800 font-semibold text-base mb-1">
                    Loading Student Complaint Form...
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm max-w-sm mb-4">
                    Please wait while the form is fetched from Google Forms.
                  </p>
                  <a
                    href={GOOGLE_FORM_PUBLIC_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-[#0F4C81] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
                  >
                    <span>Open Complaint Form directly</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </a>
                </div>
              )}

              <iframe
                key={iframeKey}
                src={GOOGLE_FORM_EMBED_URL}
                title="Student Complaint Form - Swami Vivekanand College of Pharmacy"
                className="w-full bg-white border-0 min-h-[850px] sm:min-h-[950px] lg:min-h-[1050px]"
                onLoad={() => setIsLoading(false)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              >
                Loading complaint form...
              </iframe>
            </div>

            {/* Bottom Fallback Notice */}
            <div className="bg-white p-4 sm:p-5 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <p className="text-sm font-bold text-gray-800">
                  Having trouble submitting inside the page?
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Some browser restrictions or network settings may affect embedded forms. You can open and submit the form directly in a new browser tab.
                </p>
              </div>
              <a
                href={GOOGLE_FORM_PUBLIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0F4C81] hover:bg-[#0a3a63] text-white font-bold px-5 py-2.5 rounded-xl shadow-md transition-all text-xs shrink-0"
              >
                <span>Open Complaint Form</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#F59E0B]" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. OFFICIAL COMPLAINT FORM PDF SECTION ───────────────────────────── */}
      <section id="complaint-pdf" className="py-16 bg-[#F8FAFC] border-t border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div {...fadeInUp} className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F59E0B]/10 text-amber-800 mb-3 border border-[#F59E0B]/20">
              <FileText className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Official Printable Document</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
                  Official Complaint Form
                </h2>
                <div className="w-16 h-1.5 bg-[#F59E0B] rounded-full mt-2" />
                <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
                  Students who wish to submit a physical written grievance may view or download the official SVCP Complaint Form PDF.
                  Print the form, complete the required details, and submit it directly to the SGRC Chairperson or the Grievance Box.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="/documents/Complaint%20Form.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0a3a63] text-white font-bold px-5 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm group"
                >
                  <Eye className="w-4 h-4 text-[#F59E0B]" />
                  <span>View Complaint Form PDF</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="/documents/Complaint%20Form.pdf"
                  download="Complaint Form.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-5 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm group"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Download Complaint Form PDF</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* In-Page Responsive PDF Viewer */}
          <motion.div
            {...fadeInUp}
            className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden mb-8"
          >
            {/* Viewer Top Toolbar */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 px-4 sm:px-6 py-3.5 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-900">Complaint Form.pdf</p>
                  <p className="text-[11px] text-gray-500">Official SVCP Student Grievance Redressal Form</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/documents/Complaint%20Form.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#0F4C81] hover:text-white bg-white hover:bg-[#0F4C81] border border-[#0F4C81]/30 transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>View PDF</span>
                </a>
                <a
                  href="/documents/Complaint%20Form.pdf"
                  download="Complaint Form.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#F59E0B] hover:bg-[#d97706] transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-white" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* PDF Viewport */}
            <div className="relative w-full bg-gray-100 flex flex-col items-center justify-center min-h-[600px] sm:min-h-[750px] lg:min-h-[850px]">
              <object
                data="/documents/Complaint%20Form.pdf"
                type="application/pdf"
                className="w-full min-h-[600px] sm:min-h-[750px] lg:min-h-[850px]"
              >
                <iframe
                  src="/documents/Complaint%20Form.pdf#toolbar=1"
                  title="Official SVCP Complaint Form PDF"
                  className="w-full min-h-[600px] sm:min-h-[750px] lg:min-h-[850px] border-0"
                >
                  <div className="p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
                    <FileText className="w-16 h-16 text-gray-400 mb-4" />
                    <p className="text-gray-800 font-bold text-base mb-1">
                      PDF Preview
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm max-w-md mb-6">
                      Your browser does not support inline PDF viewing. Please use the options below to view or download the Complaint Form PDF.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <a
                        href="/documents/Complaint%20Form.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#0F4C81] text-white font-bold px-5 py-2.5 rounded-xl text-xs"
                      >
                        <Eye className="w-4 h-4 text-[#F59E0B]" />
                        <span>View Complaint Form PDF</span>
                      </a>
                      <a
                        href="/documents/Complaint%20Form.pdf"
                        download="Complaint Form.pdf"
                        className="inline-flex items-center gap-2 bg-[#F59E0B] text-white font-bold px-5 py-2.5 rounded-xl text-xs"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Complaint Form PDF</span>
                      </a>
                    </div>
                  </div>
                </iframe>
              </object>
            </div>

            {/* Viewer Bottom Footer Bar */}
            <div className="bg-gray-50 px-5 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Document: <code className="bg-gray-200 px-1.5 py-0.5 rounded text-gray-800 font-mono text-[11px]">/documents/Complaint Form.pdf</code></span>
              </span>
              <div className="flex items-center gap-3 font-medium">
                <a
                  href="/documents/Complaint%20Form.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0F4C81] hover:underline"
                >
                  View Complaint Form PDF
                </a>
                <span>•</span>
                <a
                  href="/documents/Complaint%20Form.pdf"
                  download="Complaint Form.pdf"
                  className="font-bold text-[#F59E0B] hover:underline"
                >
                  Download Complaint Form PDF
                </a>
              </div>
            </div>
          </motion.div>

          {/* Submission Guidelines Cards */}
          <motion.div
            {...fadeInUp}
            className="grid sm:grid-cols-3 gap-4"
          >
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-[#0F4C81]/10 text-[#0F4C81] font-black text-sm flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Download & Print</h4>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                  Download the official Complaint Form PDF and print a clear physical copy.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] font-black text-sm flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Fill in Details</h4>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                  Provide your name, roll number, course, contact info, and clear grievance details.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-black text-sm flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Submit to Committee</h4>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                  Submit to the SGRC Chairperson (Mr. Sarabjeet Singh) or drop in the Grievance Box.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────────────────── */}
      <section className="pb-16 pt-8 bg-[#F8FAFC]">
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
                  Submit your grievance in writing to the Chairperson, use the online form above, or drop it at the institute's grievance box.
                </p>
              </div>
              <motion.a
                href="/documents/Student%20Grievance%20Redressal%20Committee%202026-27.pdf"
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
