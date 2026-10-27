"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck, FileText, ExternalLink, ChevronRight,
  Users, Phone, Mail, User, AlertCircle, HeartHandshake, CheckCircle2
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
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true },
};

// ── Committee Members Data ───────────────────────────────────────────────────
const committeeMembers = [
  {
    sNo: 1,
    category: "Presiding Officer",
    type: "presiding",
    name: "Dr. Swikriti",
    designation: "Professor & HOD",
    contact: "9781949789",
  },
  {
    sNo: 2,
    category: "Teaching Faculty Member",
    type: "teaching",
    name: "Mr. Anshu Gupta",
    designation: "Associate Professor",
    contact: "9417141755",
  },
  {
    sNo: 3,
    category: "Teaching Faculty Member",
    type: "teaching",
    name: "Ms. Eshna Bhatt",
    designation: "Assistant Professor",
    contact: "9877497736",
  },
  {
    sNo: 4,
    category: "Non-Teaching Faculty Member",
    type: "non-teaching",
    name: "Ms. Rupinder Kaur",
    designation: "Admission Counsellor",
    contact: "7087421722",
  },
  {
    sNo: 5,
    category: "Non-Teaching Faculty Member",
    type: "non-teaching",
    name: "Ms. Jyotsna Duggal",
    designation: "HR Manager",
    contact: "7888744295",
  },
  {
    sNo: 6,
    category: "Non-Govt. Organization (NGO)",
    type: "ngo",
    name: "Mr. Manpreet Singh Brar",
    designation: "Representative, Abroad Educares, Zirakpur",
    contact: "9417431947",
  },
  {
    sNo: 7,
    category: "Student Representative*",
    type: "student",
    name: "Ms. Garima",
    designation: "B. Pharmacy 3rd Year",
    contact: "6230366976",
  },
  {
    sNo: 8,
    category: "Student Representative*",
    type: "student",
    name: "Mr. Nishikant Singh",
    designation: "B. Pharmacy 4th Year",
    contact: "8730800904",
  },
];

const categoryStyles: Record<string, { badge: string; border: string }> = {
  presiding:    { badge: "bg-[#0F4C81] text-white", border: "border-l-4 border-[#0F4C81]" },
  teaching:     { badge: "bg-[#F59E0B] text-white", border: "border-l-4 border-[#F59E0B]" },
  "non-teaching": { badge: "bg-teal-700 text-white", border: "border-l-4 border-teal-700" },
  ngo:          { badge: "bg-purple-700 text-white", border: "border-l-4 border-purple-700" },
  student:      { badge: "bg-emerald-700 text-white", border: "border-l-4 border-emerald-700" },
};

export default function ICCPage() {
  const pdfUrl = "/documents/Internal%20Complaints%20Committee%202026-27.pdf";

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased">
      {/* ── HERO BANNER ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0F4C81] overflow-hidden">
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
            <span className="text-[#F59E0B]">Internal Complaints Committee</span>
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
                <ShieldCheck className="w-8 h-8 text-[#F59E0B]" />
              </div>
              <div>
                <span className="inline-flex items-center gap-2 bg-[#F59E0B]/20 border border-[#F59E0B]/30 text-[#F59E0B] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  POSH Act 2013 & UGC Compliant
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  Internal Complaints
                  <span className="block text-[#F59E0B]">Committee (ICC)</span>
                </h1>
                <p className="text-white/70 text-sm mt-2">
                  Session <span className="text-white font-semibold">2026–27</span> &nbsp;·&nbsp; Ref: <span className="text-white font-semibold">SVCP/CELL/2026/111</span> &nbsp;·&nbsp; Dated: <span className="text-white font-semibold">21/07/2026</span>
                </p>
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="shrink-0"
            >
              <motion.a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                className="inline-flex items-center gap-3 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 text-sm group"
              >
                <FileText className="w-5 h-5" />
                View Official ICC PDF
                <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── NOTICE STRIP ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <motion.div {...fadeInUp} className="flex items-start gap-4">
            <div className="w-1 min-h-[56px] bg-[#0F4C81] rounded-full shrink-0 mt-1" />
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <h2 className="text-sm font-bold text-[#0F4C81] uppercase tracking-wide">Official Office Order</h2>
                <span className="bg-blue-50 text-[#0F4C81] text-xs font-semibold px-2.5 py-0.5 rounded">
                  Ref: SVCP/CELL/2026/111
                </span>
                <span className="text-gray-500 text-xs">Dated: 21/07/2026</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-5xl">
                As per the guidelines of UGC and the <strong>Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013</strong>, 
                the Internal Complaints Committee (ICC) has been constituted for the academic session <strong>2026–27</strong> to ensure a safe, gender-sensitive, and equitable environment across the campus.
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
              <motion.div {...fadeInUp}>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-5 h-5 text-[#0F4C81]" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                      Composition of Internal Complaints Committee (2026–27)
                    </h2>
                    <div className="w-14 h-1 bg-[#F59E0B] rounded-full mt-2" />
                  </div>
                </div>

                {/* Desktop Table */}
                <div className="hidden sm:block rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#0F4C81] text-white">
                        <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-wider w-14">Sr.</th>
                        <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-wider">Name & Designation</th>
                        <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-wider">Category</th>
                        <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-wider w-40">Contact No.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                      {committeeMembers.map((m) => {
                        const s = categoryStyles[m.type];
                        return (
                          <motion.tr
                            key={m.sNo}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: m.sNo * 0.04 }}
                            className={`transition-colors duration-200 hover:bg-gray-50 ${s.border}`}
                          >
                            <td className="px-5 py-4 font-black text-[#0F4C81] text-base">{m.sNo}</td>
                            <td className="px-5 py-4">
                              <p className="font-bold text-gray-900 text-sm">{m.name}</p>
                              <p className="text-gray-500 text-xs mt-0.5">{m.designation}</p>
                            </td>
                            <td className="px-5 py-4">
                              <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold ${s.badge}`}>
                                {m.category}
                              </span>
                            </td>
                            <td className="px-5 py-4 font-semibold text-[#0F4C81]">
                              <a href={`tel:${m.contact}`} className="flex items-center gap-1.5 hover:text-[#d97706] transition-colors">
                                <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                                <span>{m.contact}</span>
                              </a>
                            </td>
                          </motion.tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="sm:hidden space-y-3">
                  {committeeMembers.map((m) => {
                    const s = categoryStyles[m.type];
                    return (
                      <div key={m.sNo} className={`rounded-xl border border-gray-200 overflow-hidden bg-white p-4 shadow-sm ${s.border}`}>
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-[#0F4C81] text-white font-bold text-xs flex items-center justify-center">
                              {m.sNo}
                            </span>
                            <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${s.badge}`}>
                              {m.category}
                            </span>
                          </div>
                        </div>
                        <h4 className="font-bold text-gray-900 text-base">{m.name}</h4>
                        <p className="text-gray-500 text-xs mb-3">{m.designation}</p>
                        <a href={`tel:${m.contact}`} className="inline-flex items-center gap-2 text-xs font-bold text-[#0F4C81] bg-blue-50 px-3 py-1.5 rounded-lg">
                          <Phone className="w-3 h-3 text-[#F59E0B]" />
                          <span>{m.contact}</span>
                        </a>
                      </div>
                    );
                  })}
                </div>

                {/* Note from PDF */}
                <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p>
                    <strong>* Special Provision:</strong> The student representatives shall only be called whenever a matter is related to students.
                  </p>
                </div>
              </motion.div>

              {/* Roles & Responsibilities */}
              <motion.div {...fadeInUp} className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 sm:p-8">
                <h3 className="text-xl font-bold text-[#0F4C81] mb-4">
                  Mandate & Responsibilities of ICC
                </h3>
                <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
                    <p>To provide a safe, respectful, and inclusive working and learning environment for all female students, staff, and faculty members.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
                    <p>To receive and adjudicate formal complaints regarding sexual harassment, discrimination, or harassment at workplace/campus in a confidential, fair, and prompt manner.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
                    <p>To conduct gender sensitization programs, seminars, and orientation workshops periodically across all departments.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
                    <p>To recommend appropriate corrective and disciplinary actions in accordance with the POSH Act 2013 and UGC norms.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT: Sidebar ── */}
            <div className="lg:col-span-4 space-y-6">

              {/* Presiding Officer Card */}
              <motion.div {...fadeInUp} className="bg-gradient-to-br from-[#0F4C81] to-[#0a3a63] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <span className="text-[#F59E0B] text-xs uppercase font-bold tracking-wider">Presiding Officer</span>
                  <h3 className="text-xl font-black mt-1">Dr. Swikriti</h3>
                  <p className="text-white/70 text-xs mb-4">Professor & HOD, SVCP</p>
                  <div className="pt-4 border-t border-white/20 space-y-2">
                    <a href="tel:9781949789" className="flex items-center gap-2 text-sm text-white/90 hover:text-white font-bold">
                      <Phone className="w-4 h-4 text-[#F59E0B]" />
                      <span>+91 97819 49789</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* POSH Act Note */}
              <motion.div {...fadeInUp} className="bg-white rounded-2xl border border-gray-200 shadow-md p-6">
                <h4 className="font-bold text-[#0F4C81] text-base mb-2">Statutory Reference</h4>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  The committee is constituted in compliance with the <strong>Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013</strong> and the <strong>UGC (Prevention, prohibition and redressal of sexual harassment of women employees and students in higher educational institutions) Regulations, 2015</strong>.
                </p>
                <div className="bg-gray-50 rounded-xl p-3 text-[11px] text-gray-500 space-y-1">
                  <div><strong>Session:</strong> 2026–27</div>
                  <div><strong>Notice Ref:</strong> SVCP/CELL/2026/111</div>
                  <div><strong>Date of Issue:</strong> 21/07/2026</div>
                </div>
              </motion.div>

              {/* Download PDF */}
              <motion.div {...fadeInUp}>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#0F4C81] hover:bg-[#0a3a63] text-white font-bold px-5 py-4 rounded-xl shadow-md transition-all duration-300 group w-full"
                >
                  <FileText className="w-5 h-5 text-[#F59E0B]" />
                  <span className="flex-1 text-sm">Download ICC 2026-27 PDF</span>
                  <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </motion.div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
