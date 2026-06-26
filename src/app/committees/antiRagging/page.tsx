"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert, FileText, ExternalLink, ChevronRight,
  Users, AlertTriangle, CheckCircle2, ClipboardList,
  BookOpen, Scale, Gavel, X
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
  { sNo: 1, name: "Dr. Manish Goswami", designation: "Principal",                       role: "Committee Convener",    roleType: "convener" },
  { sNo: 2, name: "Dr. Swikriti",       designation: "Professor",                        role: "Committee Coordinator", roleType: "coordinator" },
  { sNo: 3, name: "Dr. Damit Kumar",    designation: "Associate Professor",              role: "Member",                roleType: "member" },
  { sNo: 4, name: "Ms. Priya",          designation: "Assistant Professor",              role: "Member",                roleType: "member" },
  { sNo: 5, name: "Ms. Diksha Soni",    designation: "Assistant Professor",              role: "Member",                roleType: "member" },
  { sNo: 6, name: "Mr. Mani Ram",       designation: "Hostel Warden (Boys)",             role: "Member",                roleType: "member" },
  { sNo: 7, name: "Ms. Pushpa Goyal",   designation: "Hostel Warden (Girls)",            role: "Member",                roleType: "member" },
];

const punishments = [
  "Cancellation of admission",
  "Suspension from attending classes",
  "Withholding / withdrawing scholarship, fellowship and other benefits",
  "Debarring from appearing in any test, examination or other evaluation process",
  "Withholding results",
  "Debarring from representing the institution in any regional, national or international meet, tournament, youth festival, etc.",
  "Suspension / expulsion from the hostel",
  "Rustication from the institution for a period as may be determined by appropriate authority",
  "Expulsion from the institution and consequent debarring from admission to any other institution",
];

const roleStyles: Record<string, { badge: string; row: string }> = {
  convener:   { badge: "bg-[#0F4C81] text-white",        row: "bg-[#0F4C81]/5 border-l-4 border-[#0F4C81]" },
  coordinator:{ badge: "bg-[#F59E0B] text-white",         row: "bg-amber-50 border-l-4 border-[#F59E0B]" },
  member:     { badge: "bg-gray-100 text-gray-700",       row: "bg-white" },
};

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AntiRaggingPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased">

      {/* ── HERO BANNER ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0F4C81] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,white,transparent_60%)]" />
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-[#F59E0B]/10 blur-3xl" />

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
            <span className="text-[#F59E0B]">Anti-Ragging Committee</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-start gap-5"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-500/20 border border-red-400/30 flex items-center justify-center shrink-0 shadow-lg">
                <ShieldAlert className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <span className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Zero Tolerance Policy
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  Anti-Ragging
                  <span className="block text-[#F59E0B]">Committee</span>
                </h1>
                <p className="text-white/60 text-sm mt-2">
                  Effective from <span className="text-white font-semibold">10th February, 2026</span> &nbsp;·&nbsp; Academic Session <span className="text-white font-semibold">2025–26</span>
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-3 shrink-0"
            >
              <motion.a
                href="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhiZ0cjDoDX9oCEJ5eNzMc3t4BSZxbduIQWKOT"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-5 py-3.5 rounded-xl shadow-lg transition-all duration-300 text-sm group"
              >
                <FileText className="w-4 h-4" />
                Committee PDF
                <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              </motion.a>
              <motion.a
                href="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhDz9sXh4ngp296noYJjdXKVt8bBP4eQvShacs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-5 py-3.5 rounded-xl transition-all duration-300 text-sm group"
              >
                <ClipboardList className="w-4 h-4" />
                Anti-Ragging Affidavit
                <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── NOTICE STRIP ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <motion.div {...fadeInUp} className="flex items-start gap-4">
            <div className="w-1 min-h-[56px] bg-red-500 rounded-full shrink-0 mt-1" />
            <div>
              <h2 className="text-sm font-bold text-red-600 uppercase tracking-wide mb-1.5">Official Notice</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-5xl">
                This is to inform all that as per the UGC guidelines, the Anti-Ragging Committee has been established
                w.e.f <strong>10th February, 2026</strong>. The revised composition of the committee for academic session
                2025–26 is mentioned below.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT: TWO-COLUMN ─────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">

            {/* ── LEFT: Committee Table + Meeting Image ── */}
            <div className="lg:col-span-8 space-y-10">

              {/* Committee Table */}
              <motion.div {...fadeInUp}>
                <div className="flex items-center gap-3 mb-5">
                  <Users className="w-5 h-5 text-[#0F4C81]" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-gray-900">Revised Composition of Anti-Ragging Committee</h2>
                    <div className="w-14 h-1 bg-[#F59E0B] rounded-full mt-2" />
                  </div>
                </div>

                {/* Desktop Table */}
                <div className="hidden sm:block rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#0F4C81] text-white">
                        <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-wider w-14">Sr.</th>
                        <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-wider">Name</th>
                        <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-wider">Designation</th>
                        <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-wider w-52">Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                      {committeeMembers.map((m) => {
                        const s = roleStyles[m.roleType];
                        return (
                          <motion.tr
                            key={m.sNo}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: m.sNo * 0.05 }}
                            className={`transition-colors duration-200 hover:bg-gray-50 ${s.row}`}
                          >
                            <td className="px-5 py-4 font-black text-[#0F4C81] text-base">{m.sNo}</td>
                            <td className="px-5 py-4 font-bold text-gray-900">{m.name}</td>
                            <td className="px-5 py-4 text-gray-500">{m.designation}</td>
                            <td className="px-5 py-4">
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
                    const s = roleStyles[m.roleType];
                    return (
                      <div key={m.sNo} className={`rounded-xl border border-gray-200 overflow-hidden ${m.roleType !== "member" ? "border-l-4" : ""} ${m.roleType === "convener" ? "border-l-[#0F4C81]" : m.roleType === "coordinator" ? "border-l-[#F59E0B]" : ""}`}>
                        <div className="flex items-center gap-3 px-4 py-3 bg-white">
                          <span className="w-7 h-7 rounded-full bg-[#0F4C81] text-white font-black text-xs flex items-center justify-center shrink-0">{m.sNo}</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-gray-900 text-sm">{m.name}</p>
                            <p className="text-gray-500 text-xs">{m.designation}</p>
                          </div>
                          <span className={`px-2.5 py-1 rounded-md text-xs font-bold shrink-0 ${s.badge}`}>{m.role}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Meeting Image */}
              <motion.div {...fadeInUp}>
                <div className="flex items-center gap-3 mb-5">
                  <BookOpen className="w-5 h-5 text-[#0F4C81]" />
                  <div>
                    <h2 className="text-xl font-black text-gray-900">Anti-Ragging Committee Meeting</h2>
                    <div className="w-14 h-1 bg-[#F59E0B] rounded-full mt-2" />
                  </div>
                </div>
                <div
                  className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 cursor-zoom-in group"
                  onClick={() => setLightboxOpen(true)}
                >
                  <img
                    src="/images/antiraggingMeeting.jpg"
                    alt="Anti-Ragging Committee Meeting"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-bold text-sm">Anti-Ragging Committee Meeting — SVCP</p>
                    <p className="text-white/70 text-xs mt-0.5">Click to enlarge</p>
                  </div>
                  {/* Corner badge */}
                  <div className="absolute top-4 right-4 bg-[#0F4C81]/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10">
                    Official Meeting
                  </div>
                </div>
              </motion.div>

            </div>

            {/* ── RIGHT: Policy Sidebar ── */}
            <div className="lg:col-span-4 space-y-6">

              {/* Zero Tolerance Card */}
              <motion.div
                {...fadeInUp}
                className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden"
              >
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-black uppercase tracking-wide mb-2">Zero Tolerance Policy</h3>
                  <p className="text-red-100 text-xs leading-relaxed">
                    Swami Vivekanand College of Pharmacy has a <strong className="text-white">zero tolerance policy</strong> towards
                    ragging. This practice will be curbed by the administration at all costs.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-red-200 text-[11px] leading-relaxed">
                      Interrogation of freshers, instigation to rag, threatening and ill-treatment will be treated
                      as acts of ragging. Ragging is a serious offence which will result in disciplinary action
                      including <strong className="text-white">rustication</strong>.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Punishment List */}
              <motion.div
                {...fadeInUp}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
              >
                <div className="bg-[#0F4C81] px-5 py-4 flex items-center gap-3">
                  <Gavel className="w-4 h-4 text-[#F59E0B]" />
                  <h3 className="text-white font-black text-sm uppercase tracking-wider">Possible Punishments</h3>
                </div>
                <div className="p-5 space-y-3">
                  {punishments.map((p, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.05 }}
                      className="flex items-start gap-3 group"
                    >
                      <span className="w-5 h-5 rounded-full bg-red-100 border border-red-200 text-red-600 font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-red-500 group-hover:text-white transition-colors duration-200">
                        {i + 1}
                      </span>
                      <p className="text-gray-600 text-xs leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                        {p}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Action to Curb Ragging */}
              <motion.div
                {...fadeInUp}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
              >
                <div className="bg-[#F59E0B] px-5 py-4 flex items-center gap-3">
                  <Scale className="w-4 h-4 text-white" />
                  <h3 className="text-white font-black text-sm uppercase tracking-wider">Action to Curb Ragging</h3>
                </div>
                <div className="p-5 space-y-4">
                  <p className="text-gray-600 text-xs leading-relaxed">
                    The <strong className="text-gray-800">Anti-Ragging Committee</strong> serves as the Advisory Committee
                    for building and preserving a culture of ragging-free environment on campus.
                  </p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    The <strong className="text-gray-800">Anti-Ragging Squad</strong> works under its supervision, checking
                    hostels, buses, canteens, classrooms, and other student congregation areas for any ragging incidents,
                    while educating students on the menace and related punishments.
                  </p>
                  {[
                    "Designs strategies and action plans to curb ragging",
                    "Handles all reported and observed ragging cases",
                    "Educates students on ragging menace and punishments",
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-xs leading-relaxed">{pt}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Download Buttons */}
              <motion.div {...fadeInUp} className="space-y-3">
                <a
                  href="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhiZ0cjDoDX9oCEJ5eNzMc3t4BSZxbduIQWKOT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#0F4C81] hover:bg-[#0a3a63] text-white font-bold px-5 py-4 rounded-xl shadow-md transition-all duration-300 group w-full"
                >
                  <FileText className="w-5 h-5 text-[#F59E0B]" />
                  <span className="flex-1 text-sm">Anti-Ragging Committee PDF</span>
                  <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhDz9sXh4ngp296noYJjdXKVt8bBP4eQvShacs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white hover:bg-gray-50 border-2 border-[#0F4C81] text-[#0F4C81] font-bold px-5 py-4 rounded-xl shadow-sm transition-all duration-300 group w-full"
                >
                  <ClipboardList className="w-5 h-5 text-[#F59E0B]" />
                  <span className="flex-1 text-sm">Anti-Ragging Affidavit</span>
                  <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ── HELPLINE BANNER ─────────────────────────────────────────────────── */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="relative bg-gradient-to-r from-[#0F4C81] via-[#0a3a63] to-[#0F4C81] rounded-3xl overflow-hidden px-8 sm:px-12 py-10 shadow-2xl"
          >
            <div className="absolute -top-10 -left-10 w-52 h-52 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-400/30 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-7 h-7 text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-black text-lg">UGC Anti-Ragging Helpline</h3>
                <p className="text-white/60 text-sm mt-1">
                  If you witness or experience ragging, report it immediately. Your complaint is confidential and will be acted upon.
                </p>
              </div>
              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 font-black text-xl px-5 py-3 rounded-xl">
                  1800-180-5522
                </div>
                <p className="text-white/40 text-xs">UGC Toll-Free Helpline</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTBOX ────────────────────────────────────────────────────────── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src="/images/antiraggingMeeting.jpg"
            alt="Anti-Ragging Committee Meeting"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}
