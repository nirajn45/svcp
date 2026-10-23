"use client";

import React from "react";
import Link from "next/link";
import { Award, FileText, ExternalLink, ShieldCheck, Download, ChevronRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function RankingsPage() {
  const nirfPdfUrl = "/documents/nirf-2026.pdf";

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
                <span>Ministry of Education, Government of India • NIRF</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F4C81] tracking-tight mb-4">
                National Institutional <span className="text-[#F59E0B]">Ranking</span> Framework (NIRF)
              </h1>
              <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mb-6" />
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Swami Vivekanand College of Pharmacy participates in the National Institutional Ranking
                Framework (NIRF) instituted by the Ministry of Education, Government of India. View our
                official institutional ranking submission data for 2026.
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
