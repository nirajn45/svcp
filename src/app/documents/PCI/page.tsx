"use client";

import React from "react";
import Link from "next/link";
import { Award, FileText, ExternalLink, ShieldCheck, Download, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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
                <span>Statutory Regulatory Approval • PCI-2443</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F4C81] tracking-tight mb-4">
                Pharmacy Council of India <span className="text-[#F59E0B]">(PCI)</span> Approval
              </h1>
              <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mb-6" />
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Swami Vivekanand College of Pharmacy (SVCP), Banur, Patiala is duly approved by the
                Pharmacy Council of India (PCI), New Delhi under Institute Code <strong>PCI-2443</strong>,
                for conducting diploma, undergraduate, and postgraduate pharmaceutical courses.
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

        {/* Details Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="bg-[#0F4C81]/10 p-3.5 rounded-xl text-[#0F4C81] shrink-0">
              <Award className="w-6 h-6 text-[#0F4C81]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">PCI Code</h3>
              <p className="text-sm font-semibold text-[#0F4C81]">PCI-2443</p>
              <p className="text-xs text-gray-500 mt-1">Pharmacy Council of India, New Delhi</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="bg-[#F59E0B]/10 p-3.5 rounded-xl text-[#F59E0B] shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Academic Session</h3>
              <p className="text-sm font-semibold text-gray-800">2026–2027</p>
              <p className="text-xs text-gray-500 mt-1">Official Approval Letter on Record</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="bg-emerald-50 p-3.5 rounded-xl text-emerald-600 shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Affiliation</h3>
              <p className="text-sm font-semibold text-gray-800">IKGPTU & PSBTE</p>
              <p className="text-xs text-gray-500 mt-1">I.K. Gujral Punjab Technical University</p>
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
