"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck, FileText, ExternalLink, ChevronRight,
  Users, Phone, Mail, User, AlertCircle, HeartHandshake, CheckCircle2, Award
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
    name: "Dr. Manish Goswami",
    designation: "Principal",
    role: "Chairperson",
    type: "chair",
  },
  {
    sNo: 2,
    name: "Mr. Satish Sharma",
    designation: "Registrar",
    role: "Co-ordinator",
    type: "coordinator",
  },
  {
    sNo: 3,
    name: "Dr. Deepak Garg",
    designation: "Associate Professor",
    role: "Member",
    type: "member",
  },
  {
    sNo: 4,
    name: "Ms. Eshna Bhatt",
    designation: "Assistant Professor",
    role: "Member",
    type: "member",
  },
  {
    sNo: 5,
    name: "Ms. Diksha Soni",
    designation: "Assistant Professor",
    role: "Member",
    type: "member",
  },
];

const roleStyles: Record<string, { badge: string; border: string }> = {
  chair:       { badge: "bg-[#0F4C81] text-white", border: "border-l-4 border-[#0F4C81]" },
  coordinator: { badge: "bg-[#F59E0B] text-white", border: "border-l-4 border-[#F59E0B]" },
  member:      { badge: "bg-gray-100 text-gray-700", border: "border-l-4 border-gray-200" },
};

export default function SCSTCommitteePage() {
  const pdfUrl = "/documents/SC%20%26%20ST%20AND%20OBC%20COMMITTEE%202026-27.pdf";

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
            <span className="text-[#F59E0B]">SC / ST & OBC Committee</span>
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
                  <Award className="w-3.5 h-3.5" />
                  Equal Opportunity & Social Justice
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  SC & ST and OBC
                  <span className="block text-[#F59E0B]">Committee</span>
                </h1>
                <p className="text-white/70 text-sm mt-2">
                  Session <span className="text-white font-semibold">2026–27</span> &nbsp;·&nbsp; Ref: <span className="text-white font-semibold">SVCP/CELL/2026/114</span> &nbsp;·&nbsp; Dated: <span className="text-white font-semibold">28/07/2026</span>
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
                View Official PDF
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
                  Ref: SVCP/CELL/2026/114
                </span>
                <span className="text-gray-500 text-xs">Dated: 28/07/2026</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-5xl">
                The SC & ST and OBC Committee has been constituted for the academic session <strong>2026–27</strong> to ensure the welfare, equal opportunities, and prompt resolution of grievances for students and staff belonging to Scheduled Castes, Scheduled Tribes, and Other Backward Classes.
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
                      Composition of SC & ST and OBC Committee (2026–27)
                    </h2>
                    <div className="w-14 h-1 bg-[#F59E0B] rounded-full mt-2" />
                  </div>
                </div>

                {/* Desktop Table */}
                <div className="hidden sm:block rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#0F4C81] text-white">
                        <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider w-16">Sr. No</th>
                        <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider">Name</th>
                        <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider">Designation</th>
                        <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider w-44">Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                      {committeeMembers.map((m) => {
                        const s = roleStyles[m.type];
                        return (
                          <motion.tr
                            key={m.sNo}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: m.sNo * 0.05 }}
                            className={`transition-colors duration-200 hover:bg-gray-50 ${s.border}`}
                          >
                            <td className="px-6 py-4 font-black text-[#0F4C81] text-base">{m.sNo}</td>
                            <td className="px-6 py-4 font-bold text-gray-900">{m.name}</td>
                            <td className="px-6 py-4 text-gray-500">{m.designation}</td>
                            <td className="px-6 py-4">
                              <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold ${s.badge}`}>
                                {m.role}
                              </span>
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
                    const s = roleStyles[m.type];
                    return (
                      <div key={m.sNo} className={`rounded-xl border border-gray-200 overflow-hidden bg-white p-4 shadow-sm ${s.border}`}>
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <span className="w-7 h-7 rounded-full bg-[#0F4C81] text-white font-bold text-xs flex items-center justify-center">
                            {m.sNo}
                          </span>
                          <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${s.badge}`}>
                            {m.role}
                          </span>
                        </div>
                        <h4 className="font-bold text-gray-900 text-base">{m.name}</h4>
                        <p className="text-gray-500 text-xs">{m.designation}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Notice contact note */}
                <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#0F4C81] shrink-0 mt-0.5" />
                  <p>
                    <strong>Grievance & Query Point of Contact:</strong> For any query, details or grievance, please contact the Co-ordinator, <strong>Mr. Satish Sharma</strong> (Registrar).
                  </p>
                </div>
              </motion.div>

              {/* Committee Objectives */}
              <motion.div {...fadeInUp} className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 sm:p-8">
                <h3 className="text-xl font-bold text-[#0F4C81] mb-4">
                  Key Objectives & Functions
                </h3>
                <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
                    <p>To ensure the effective implementation of reservation policies and welfare schemes as laid down by the UGC, Central Government, and State Government.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
                    <p>To provide support, guidance, and counseling to students from SC, ST, and OBC communities regarding admissions, scholarships, and academic matters.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
                    <p>To prevent any discrimination or harassment and address grievances in a confidential and time-bound manner.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT: Sidebar ── */}
            <div className="lg:col-span-4 space-y-6">

              {/* Coordinator Card */}
              <motion.div {...fadeInUp} className="bg-gradient-to-br from-[#0F4C81] to-[#0a3a63] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <User className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <span className="text-[#F59E0B] text-xs uppercase font-bold tracking-wider">Committee Co-ordinator</span>
                  <h3 className="text-xl font-black mt-1">Mr. Satish Sharma</h3>
                  <p className="text-white/70 text-xs mb-4">Registrar, SVCP</p>
                  <p className="text-white/80 text-xs pt-3 border-t border-white/20 leading-relaxed">
                    Official contact person for any queries, scholarship guidance, or grievances under the SC, ST, and OBC cell.
                  </p>
                </div>
              </motion.div>

              {/* Notice Metadata */}
              <motion.div {...fadeInUp} className="bg-white rounded-2xl border border-gray-200 shadow-md p-6">
                <h4 className="font-bold text-[#0F4C81] text-base mb-3">Office Order Details</h4>
                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="font-semibold text-gray-500">Ref Number:</span>
                    <span className="font-bold text-gray-900">SVCP/CELL/2026/114</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="font-semibold text-gray-500">Date of Order:</span>
                    <span className="font-bold text-gray-900">28/07/2026</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="font-semibold text-gray-500">Academic Session:</span>
                    <span className="font-bold text-[#0F4C81]">2026–27</span>
                  </div>
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
                  <span className="flex-1 text-sm">Download Committee PDF</span>
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
