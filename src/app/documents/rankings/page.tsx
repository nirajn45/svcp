"use client";

import React from "react";
import Link from "next/link";
import { Award, FileText, ExternalLink, ShieldCheck, Download, ChevronRight, TrendingUp, Users, DollarSign, Lightbulb, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function RankingsPage() {
  const nirfPdfUrl = "/documents/nirf-2026.pdf";

  const intakeData = [
    { program: "UG [4 Years Program(s)]", intake: 100, enrolled: 399, male: 288, female: 111 },
    { program: "PG [2 Years Program(s)]", intake: 15, enrolled: 28, male: 10, female: 18 },
    { program: "PG [6 Years / Pharm.D]", intake: 30, enrolled: 65, male: 42, female: 23 },
  ];

  const placementStats = [
    {
      level: "UG [4-Year] Pharmacy",
      graduates: "86 Students",
      placed: "62 Placed",
      higherStudies: "24 Selected for Higher Studies",
      medianSalary: "₹4,30,000 (4.30 LPA)",
    },
    {
      level: "PG [2-Year] Pharmacy",
      graduates: "14 Students",
      placed: "14 Placed",
      higherStudies: "0",
      medianSalary: "₹4,90,000 (4.90 LPA)",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-[#0F4C81] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </li>
            <li>
              <span className="text-gray-500">Institutional Rankings</span>
            </li>
            <li>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </li>
            <li className="font-semibold text-[#0F4C81]" aria-current="page">
              NIRF 2026
            </li>
          </ol>
        </nav>

        {/* Header Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-12 mb-10 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#F59E0B]/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0F4C81]/10 text-[#0F4C81] mb-4">
                <TrendingUp className="w-4 h-4 text-[#0F4C81]" />
                <span>Ministry of Education, Govt. of India • NIRF ID: IR-P-C-10272</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F4C81] tracking-tight mb-4">
                National Institutional <span className="text-[#F59E0B]">Ranking</span> Framework (NIRF)
              </h1>
              <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mb-6" />
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Swami Vivekanand College of Pharmacy participates in the National Institutional Ranking
                Framework (NIRF) under the Ministry of Education, Government of India. Below is our complete
                institution data captured for <strong>NIRF 2026 (Pharmacy Discipline)</strong>.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <a
                href={nirfPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm whitespace-nowrap active:scale-95"
              >
                <FileText className="w-5 h-5" />
                <span>Open NIRF 2026 PDF</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={nirfPdfUrl}
                download
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-[#0F4C81] font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all duration-300 text-sm whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-[#F59E0B]" />
                <span>Download Document</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-[#0F4C81]/10 p-2.5 rounded-lg text-[#0F4C81]">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-gray-500 uppercase">Total Students</span>
            </div>
            <p className="text-3xl font-black text-[#0F4C81]">492</p>
            <p className="text-xs text-gray-500 mt-1">399 UG + 28 PG + 65 Pharm.D</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-[#F59E0B]/10 p-2.5 rounded-lg text-[#F59E0B]">
                <DollarSign className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-gray-500 uppercase">PG Median Package</span>
            </div>
            <p className="text-3xl font-black text-gray-900">₹4.90 L</p>
            <p className="text-xs text-gray-500 mt-1">UG Median: ₹4.30 LPA</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-purple-50 p-2.5 rounded-lg text-purple-600">
                <Lightbulb className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-gray-500 uppercase">Patents Published</span>
            </div>
            <p className="text-3xl font-black text-purple-700">5</p>
            <p className="text-xs text-gray-500 mt-1">Calendar Year 2024</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-emerald-50 p-2.5 rounded-lg text-emerald-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-gray-500 uppercase">Accessible Campus</span>
            </div>
            <p className="text-3xl font-black text-emerald-700">&gt;80%</p>
            <p className="text-xs text-gray-500 mt-1">Lifts, ramps & friendly toilets</p>
          </div>
        </div>

        {/* Detailed Data Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Table 1: Intake & Strength */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-[#0F4C81] px-6 py-4 text-white">
              <h3 className="font-bold text-base">Sanctioned Intake & Student Strength</h3>
              <p className="text-xs text-white/70">From official NIRF 2026 data submission</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 border-b border-gray-200">
                    <th className="px-5 py-3">Academic Program</th>
                    <th className="px-5 py-3">Approved Intake</th>
                    <th className="px-5 py-3">Total Enrolled</th>
                    <th className="px-5 py-3">Gender (M/F)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {intakeData.map((d, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-5 py-3.5 font-bold text-gray-900">{d.program}</td>
                      <td className="px-5 py-3.5 font-semibold text-[#0F4C81]">{d.intake}</td>
                      <td className="px-5 py-3.5 font-semibold text-gray-800">{d.enrolled}</td>
                      <td className="px-5 py-3.5 text-gray-600">{d.male} M / {d.female} F</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50/50 font-bold text-[#0F4C81]">
                    <td className="px-5 py-3.5">Total Institution Strength</td>
                    <td className="px-5 py-3.5">145</td>
                    <td className="px-5 py-3.5">492</td>
                    <td className="px-5 py-3.5">340 M / 152 F</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 2: Placement & Higher Studies */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-[#0F4C81] px-6 py-4 text-white">
              <h3 className="font-bold text-base">Placement & Higher Studies (2024–25)</h3>
              <p className="text-xs text-white/70">Salary statistics and student progression</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 border-b border-gray-200">
                    <th className="px-5 py-3">Program Level</th>
                    <th className="px-5 py-3">Graduated & Placed</th>
                    <th className="px-5 py-3">Median Salary</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {placementStats.map((p, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-5 py-4 font-bold text-gray-900">
                        {p.level}
                        <span className="block text-xs font-normal text-gray-500 mt-0.5">{p.higherStudies}</span>
                      </td>
                      <td className="px-5 py-4 text-gray-700">
                        <span className="font-semibold">{p.placed}</span>
                        <span className="text-xs text-gray-500 block">out of {p.graduates}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-block bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-md text-xs">
                          {p.medianSalary}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 px-6 py-4 border-b border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
              <FileText className="w-4 h-4 text-[#0F4C81]" />
              <span>Official NIRF 2026 Document Preview</span>
            </div>
            <a
              href={nirfPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#0F4C81] hover:bg-[#0c3d68] transition-colors"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#F59E0B]" />
            </a>
          </div>

          <div className="w-full bg-gray-100 min-h-[700px] flex items-center justify-center">
            <iframe
              src={nirfPdfUrl}
              title="NIRF 2026 Document"
              className="w-full min-h-[750px] border-0"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
