"use client";

import React from "react";
import Link from "next/link";
import { Award, FileText, ExternalLink, ShieldCheck, Download, ChevronRight, CheckCircle2, Building, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const approvedCourses = [
  {
    course: "B.Pharm",
    fullName: "Bachelor of Pharmacy",
    intake: 100,
    examiningAuthority: "The Registrar, I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar",
    decision: "Approved for conduct of 1st year for 100 admissions for 2026-2027",
    state: "IKGPTU",
  },
  {
    course: "D.Pharm",
    fullName: "Diploma in Pharmacy",
    intake: 60,
    examiningAuthority: "The Secretary, Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), Chandigarh",
    decision: "Approved for conduct of 1st year for 60 admissions for 2026-2027",
    state: "PSBTE & IT",
  },
  {
    course: "Pharm.D",
    fullName: "Doctor of Pharmacy",
    intake: 30,
    examiningAuthority: "The Registrar, I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar",
    decision: "Approved for 30 admissions in 1st year & conduct of 5th year for 30 students for 2026-2027",
    state: "IKGPTU",
  },
  {
    course: "M.Pharm (Pharmacology)",
    fullName: "Master of Pharmacy - Pharmacology",
    intake: 15,
    examiningAuthority: "The Registrar, I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar",
    decision: "Approved for conduct of 1st year for 15 admissions for 2026-2027",
    state: "IKGPTU",
  },
  {
    course: "M.Pharm (Pharmaceutics)",
    fullName: "Master of Pharmacy - Pharmaceutics",
    intake: 15,
    examiningAuthority: "The Registrar, I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar",
    decision: "Approved for conduct of 1st year for 15 admissions for 2026-2027",
    state: "IKGPTU",
  },
];

export default function PCIPage() {
  const pciPdfUrl = "/documents/pci-approval-letter-2026-27.pdf";

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
              <span className="text-gray-500">Approvals & Affiliations</span>
            </li>
            <li>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </li>
            <li className="font-semibold text-[#0F4C81]" aria-current="page">
              PCI Approval Letter
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
                <ShieldCheck className="w-4 h-4 text-[#0F4C81]" />
                <span>Statutory Regulatory Approval • Institute Code: PCI-2443</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F4C81] tracking-tight mb-4">
                Pharmacy Council of India <span className="text-[#F59E0B]">(PCI)</span> Approval
              </h1>
              <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mb-6" />
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Swami Vivekanand College of Pharmacy (SVCP), Banur, Patiala is approved by the
                Pharmacy Council of India (PCI), New Delhi under Institute Code <strong>PCI-2443</strong> (Decision Letter dated <strong>14 Apr 2026</strong>),
                sanctioning a total intake of <strong>220 Seats</strong> across diploma, undergraduate, postgraduate, and Pharm.D programs for academic session <strong>2026–2027</strong>.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <a
                href={pciPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm whitespace-nowrap active:scale-95"
              >
                <FileText className="w-5 h-5" />
                <span>Open Approval PDF</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={pciPdfUrl}
                download
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-[#0F4C81] font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all duration-300 text-sm whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-[#F59E0B]" />
                <span>Download Document</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="bg-[#0F4C81]/10 p-3.5 rounded-xl text-[#0F4C81] shrink-0">
              <Award className="w-6 h-6 text-[#0F4C81]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">PCI Institute Code</h3>
              <p className="text-xl font-bold text-[#0F4C81]">PCI-2443</p>
              <p className="text-xs text-gray-500 mt-1">Pharmacy Council of India</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="bg-[#F59E0B]/10 p-3.5 rounded-xl text-[#F59E0B] shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Academic Session</h3>
              <p className="text-xl font-bold text-gray-900">2026–2027</p>
              <p className="text-xs text-gray-500 mt-1">Letter Dated 14 Apr 2026</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="bg-emerald-50 p-3.5 rounded-xl text-emerald-600 shrink-0">
              <GraduationCap className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Total Approved Seats</h3>
              <p className="text-xl font-bold text-emerald-700">220 Intake</p>
              <p className="text-xs text-gray-500 mt-1">Across 5 Program Tracks</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="bg-purple-50 p-3.5 rounded-xl text-purple-600 shrink-0">
              <Building className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Affiliating Bodies</h3>
              <p className="text-base font-bold text-gray-900">IKGPTU & PSBTE</p>
              <p className="text-xs text-gray-500 mt-1">Punjab University & State Board</p>
            </div>
          </div>
        </div>

        {/* Approved Courses Table Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-12"
        >
          <div className="bg-gradient-to-r from-[#0F4C81] to-[#0c3d68] px-6 py-5 text-white flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <div>
              <h2 className="text-xl font-bold">Approved Pharmacy Courses & Sanctioned Intake (2026–27)</h2>
              <p className="text-white/70 text-xs mt-1">Official Decision Details from Pharmacy Council of India</p>
            </div>
            <span className="bg-[#F59E0B] text-white font-bold text-xs px-3 py-1 rounded-full self-start sm:self-auto">
              Total 220 Seats
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                  <th className="px-6 py-4">Course</th>
                  <th className="px-6 py-4">Approved Intake (2026-27)</th>
                  <th className="px-6 py-4">Affiliating / Examining Authority</th>
                  <th className="px-6 py-4">Decision Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {approvedCourses.map((c, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-bold text-[#0F4C81] text-base block">{c.course}</span>
                      <span className="text-gray-500 text-xs">{c.fullName}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 font-bold rounded-lg text-sm">
                        {c.intake} Seats
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700 text-xs sm:text-sm">
                      <p className="font-medium">{c.examiningAuthority}</p>
                    </td>
                    <td className="px-6 py-4 text-xs">
                      <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Approved
                      </span>
                      <p className="text-gray-500 mt-1 text-[11px]">{c.decision}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

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
              <span>Official PCI Approval Letter Document Preview</span>
            </div>
            <a
              href={pciPdfUrl}
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
              src={pciPdfUrl}
              title="PCI Approval Letter 2026-27"
              className="w-full min-h-[750px] border-0"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
