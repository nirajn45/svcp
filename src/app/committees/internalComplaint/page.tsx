"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Phone, FileText, ExternalLink, User, Users, ChevronRight } from "lucide-react";

// ── Data ─────────────────────────────────────────────────────────────────────

const iccMembers = [
  {
    sNo: 1,
    position: "Presiding Officer",
    positionType: "presiding",
    members: [
      { name: "Dr. Swikriti", designation: "Professor & HOD", contact: "9781949789" },
    ],
  },
  {
    sNo: 2,
    position: "Member",
    positionSub: "Teaching Faculty Representatives",
    positionType: "teaching",
    members: [
      { name: "Dr. Satbir Kaur", designation: "Professor", contact: "7015930797" },
      { name: "Mr. Anshu Gupta", designation: "Associate Professor", contact: "9417141755" },
    ],
  },
  {
    sNo: 3,
    position: "Member",
    positionSub: "Non-Teaching Faculty Representatives",
    positionType: "nonteaching",
    members: [
      { name: "Ms. Rupinder Kaur", designation: "Admission Counsellor", contact: "7087421722" },
      { name: "Ms. Jyotsna Duggal", designation: "HR Manager", contact: "7888744295" },
    ],
  },
  {
    sNo: 4,
    position: "Member",
    positionSub: "Non-Govt. Organization",
    positionType: "ngo",
    members: [
      { name: "Mr. Manpreet Singh Brar", designation: "Abroad Educares, Zirakpur", contact: "9417431947" },
    ],
  },
  {
    sNo: 5,
    position: "Member",
    positionSub: "Student Representatives",
    positionType: "student",
    members: [
      { name: "Ms. Garima", designation: "B. Pharmacy 2nd Year", contact: "6230366976" },
      { name: "Mr. Nishikant Singh", designation: "B. Pharmacy 3rd Year", contact: "8730800904" },
    ],
  },
];

const positionColors: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  presiding:   { bg: "bg-[#0F4C81]/8",  text: "text-[#0F4C81]",  border: "border-[#0F4C81]/20", badge: "bg-[#0F4C81] text-white" },
  teaching:    { bg: "bg-blue-50",        text: "text-blue-700",    border: "border-blue-200",      badge: "bg-blue-600 text-white" },
  nonteaching: { bg: "bg-indigo-50",      text: "text-indigo-700",  border: "border-indigo-200",    badge: "bg-indigo-600 text-white" },
  ngo:         { bg: "bg-emerald-50",     text: "text-emerald-700", border: "border-emerald-200",   badge: "bg-emerald-600 text-white" },
  student:     { bg: "bg-amber-50",       text: "text-amber-700",   border: "border-amber-200",     badge: "bg-[#F59E0B] text-white" },
};

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

// ── Page ─────────────────────────────────────────────────────────────────────

export default function InternalComplaintPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased">

      {/* ── HERO BANNER ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0F4C81] overflow-hidden">
        {/* Decorative mesh */}
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
            {/* Left: Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-start gap-5"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F59E0B]/20 border border-[#F59E0B]/30 flex items-center justify-center shrink-0 shadow-lg">
                <Shield className="w-8 h-8 text-[#F59E0B]" />
              </div>
              <div>
                <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
                  Academic Session 2025–26
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  Internal Complaints
                  <span className="block text-[#F59E0B]">Committee (ICC)</span>
                </h1>
              </div>
            </motion.div>

            {/* Right: PDF Button */}
            <motion.a
              href="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhnfUpi1N5Zky0Lh3eQpjSbmYWMEdFsGT7R86C"
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
            <div className="w-1 h-full min-h-[60px] bg-[#F59E0B] rounded-full shrink-0 mt-1" />
            <div>
              <h2 className="text-base font-bold text-[#0F4C81] mb-2 uppercase tracking-wide">
                About the Committee
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-5xl">
                The Internal Complaints Committee is constituted for the Academic Session 2025–26 as per the
                provision of Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal)
                Act 2013, as per the guidelines of UGC. The Committee is committed to providing a healthy
                and congenial atmosphere to all staff and students of the Institute.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TABLE SECTION ───────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <motion.div {...fadeInUp} className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-[#0F4C81]" />
              <span className="text-[#0F4C81] font-bold text-xs uppercase tracking-widest">
                Committee Composition
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
              ICC Members — 2025–26
            </h2>
            <div className="w-16 h-1 bg-[#F59E0B] rounded-full mt-3" />
          </motion.div>

          {/* ── DESKTOP TABLE ─────────────────────────────────────────────── */}
          <motion.div
            {...fadeInUp}
            className="hidden md:block rounded-2xl overflow-hidden shadow-lg border border-gray-200"
          >
            <table className="w-full text-sm">
              {/* Table Head */}
              <thead>
                <tr className="bg-[#0F4C81] text-white">
                  <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider w-16">S. No.</th>
                  <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider w-64">Position in ICC</th>
                  <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider">Name & Designation</th>
                  <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider w-44">Contact No.</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 bg-white">
                {iccMembers.map((row) => {
                  const colors = positionColors[row.positionType];
                  return row.members.map((member, mIdx) => (
                    <motion.tr
                      key={`${row.sNo}-${mIdx}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: mIdx * 0.05 }}
                      className="hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      {/* S.No — only show on first member row */}
                      {mIdx === 0 ? (
                        <td
                          className={`px-6 py-5 font-black text-lg text-[#0F4C81] align-top`}
                          rowSpan={row.members.length}
                        >
                          {row.sNo}
                        </td>
                      ) : null}

                      {/* Position — only show on first member row */}
                      {mIdx === 0 ? (
                        <td
                          className="px-6 py-5 align-top"
                          rowSpan={row.members.length}
                        >
                          <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold ${colors.badge} mb-1`}>
                            {row.position}
                          </span>
                          {row.positionSub && (
                            <p className="text-gray-500 text-xs mt-1 leading-snug">
                              ({row.positionSub})
                            </p>
                          )}
                        </td>
                      ) : null}

                      {/* Name & Designation */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${colors.bg} border ${colors.border}`}>
                            <User className={`w-4 h-4 ${colors.text}`} />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm group-hover:text-[#0F4C81] transition-colors">
                              {member.name}
                            </p>
                            <p className="text-gray-500 text-xs mt-0.5">{member.designation}</p>
                          </div>
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="px-6 py-5">
                        <a
                          href={`tel:${member.contact}`}
                          className="inline-flex items-center gap-2 text-[#0F4C81] hover:text-[#F59E0B] font-semibold text-sm transition-colors duration-200"
                        >
                          <Phone className="w-3.5 h-3.5 shrink-0" />
                          {member.contact}
                        </a>
                      </td>
                    </motion.tr>
                  ));
                })}
              </tbody>
            </table>
          </motion.div>

          {/* ── MOBILE CARDS ──────────────────────────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="md:hidden space-y-4"
          >
            {iccMembers.map((row) => {
              const colors = positionColors[row.positionType];
              return (
                <motion.div
                  key={row.sNo}
                  variants={fadeInUp}
                  className={`rounded-2xl border ${colors.border} ${colors.bg} overflow-hidden shadow-sm`}
                >
                  {/* Card Header */}
                  <div className="px-5 py-4 border-b border-black/5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#0F4C81] text-white font-black text-sm flex items-center justify-center shrink-0">
                        {row.sNo}
                      </span>
                      <div>
                        <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-bold ${colors.badge}`}>
                          {row.position}
                        </span>
                        {row.positionSub && (
                          <p className="text-gray-500 text-[11px] mt-0.5">({row.positionSub})</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Members */}
                  <div className="divide-y divide-black/5">
                    {row.members.map((member, mIdx) => (
                      <div key={mIdx} className="px-5 py-4 flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-white border ${colors.border} mt-0.5`}>
                          <User className={`w-4 h-4 ${colors.text}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-gray-900 text-sm">{member.name}</p>
                          <p className="text-gray-500 text-xs mt-0.5">{member.designation}</p>
                          <a
                            href={`tel:${member.contact}`}
                            className="inline-flex items-center gap-1.5 text-[#0F4C81] font-semibold text-xs mt-2 hover:text-[#F59E0B] transition-colors"
                          >
                            <Phone className="w-3 h-3" />
                            {member.contact}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ── PDF DOWNLOAD CTA ────────────────────────────────────────────────── */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="relative bg-[#0F4C81] rounded-3xl overflow-hidden px-8 sm:px-12 py-10 flex flex-col sm:flex-row items-center gap-6 shadow-2xl"
          >
            {/* Decorative glows */}
            <div className="absolute -top-10 -left-10 w-52 h-52 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex items-center gap-5 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/20 border border-[#F59E0B]/30 flex items-center justify-center shrink-0">
                <FileText className="w-7 h-7 text-[#F59E0B]" />
              </div>
              <div>
                <h3 className="text-white font-black text-lg leading-tight">
                  Official ICC Notification
                </h3>
                <p className="text-white/60 text-sm mt-1">
                  Download the official PDF document of the Internal Complaints Committee constitution for 2025–26.
                </p>
              </div>
            </div>

            <motion.a
              href="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhnfUpi1N5Zky0Lh3eQpjSbmYWMEdFsGT7R86C"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              className="relative inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-7 py-4 rounded-xl shadow-lg transition-all duration-300 text-sm shrink-0 group"
            >
              <FileText className="w-5 h-5" />
              Download PDF
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
