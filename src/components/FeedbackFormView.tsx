"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  Users, 
  Award, 
  Briefcase,
  BookOpen,
  ExternalLink, 
  ChevronRight, 
  ShieldCheck, 
  Info,
  RefreshCw,
  FileCheck
} from "lucide-react";

interface FeedbackFormViewProps {
  type: "student" | "parent" | "alumni" | "employer" | "faculty";
  title: string;
  subtitle: string;
  description: string;
  formUrl: string;
  embedUrl: string;
}

const feedbackTabs = [
  {
    type: "student",
    label: "Student Feedback",
    href: "/feedback/student",
    icon: GraduationCap,
  },
  {
    type: "parent",
    label: "Parent Feedback",
    href: "/feedback/parent",
    icon: Users,
  },
  {
    type: "alumni",
    label: "Alumni Feedback",
    href: "/feedback/alumni",
    icon: Award,
  },
  {
    type: "employer",
    label: "Employer Feedback",
    href: "/feedback/employer",
    icon: Briefcase,
  },
  {
    type: "faculty",
    label: "Faculty Feedback",
    href: "/feedback/faculty",
    icon: BookOpen,
  },
];

export default function FeedbackFormView({
  type,
  title,
  subtitle,
  description,
  formUrl,
  embedUrl,
}: FeedbackFormViewProps) {
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReload = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/40 via-white to-gray-50/60 py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Breadcrumb Navigation ───────────────────────────────── */}
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
              <span className="text-gray-500">Feedback</span>
            </li>
            <li>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </li>
            <li className="font-semibold text-[#0F4C81]" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        {/* ── Category Switcher Tabs ──────────────────────────────── */}
        <div className="mb-8 bg-white p-1.5 rounded-xl border border-gray-200 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5">
            {feedbackTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.type === type;
              return (
                <Link
                  key={tab.type}
                  href={tab.href}
                  className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-[#0F4C81] text-white shadow-md font-semibold"
                      : "text-gray-700 hover:bg-gray-100 hover:text-[#0F4C81]"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#F59E0B]" : "text-gray-500"}`} />
                  <span>{tab.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ── Page Header Section ──────────────────────────────────── */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-200/80 shadow-md mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0F4C81]/10 text-[#0F4C81] mb-4">
            <FileCheck className="w-3.5 h-3.5 text-[#0F4C81]" />
            <span>Swami Vivekanand College of Pharmacy • Feedback Portal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F4C81] tracking-tight mb-3">
            {title}
          </h1>
          <div className="w-20 h-1.5 bg-[#F59E0B] rounded-full mb-4" />

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl">
            {description}
          </p>

          {/* ── Fallback Notice & Action Box ────────────────────────── */}
          <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-blue-50/60 p-4 sm:p-5 rounded-xl border border-blue-100">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#0F4C81] mt-0.5 shrink-0" />
              <div className="text-xs sm:text-sm text-gray-700">
                <p className="font-semibold text-[#0F4C81] mb-0.5">
                  Responsive Google Form View
                </p>
                <p>
                  You can submit your responses directly below. If the embedded form is blocked by browser restrictions or Google login requirements, please click the button to open it in a new tab.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white bg-[#0F4C81] hover:bg-[#0c3d68] shadow hover:shadow-md transition-all text-sm w-full sm:w-auto"
              >
                <span>Open Feedback Form</span>
                <ExternalLink className="w-4 h-4 text-[#F59E0B]" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Form Container Card ─────────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden mb-12">
          {/* Card Top Utility Bar */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 px-4 sm:px-6 py-3.5 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Official Google Form • Secure & Confidential Submission</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReload}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 transition-colors"
                title="Reload embedded form"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reload</span>
              </button>

              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-[#0F4C81] hover:text-[#0c3d68] bg-white hover:bg-blue-50 border border-blue-200 transition-colors"
              >
                <span>Open Feedback Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Iframe Frame */}
          <div className="relative w-full bg-gray-50 flex flex-col items-center justify-center min-h-[750px] sm:min-h-[850px] lg:min-h-[1000px]">
            {isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm p-6 text-center">
                <div className="w-10 h-10 border-4 border-[#0F4C81] border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-gray-800 font-semibold text-base mb-1">
                  Loading {title}...
                </p>
                <p className="text-gray-500 text-xs sm:text-sm max-w-sm mb-4">
                  Please wait while the form is fetched from Google Forms.
                </p>
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium text-[#0F4C81] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
                >
                  <span>Open Feedback Form directly</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            <iframe
              key={iframeKey}
              src={embedUrl}
              title={`${title} - Swami Vivekanand College of Pharmacy`}
              className="w-full border-0 min-h-[750px] sm:min-h-[850px] lg:min-h-[1000px]"
              onLoad={() => setIsLoading(false)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            >
              Loading feedback form...
            </iframe>
          </div>

          {/* Card Bottom Fallback Banner */}
          <div className="bg-gray-50 p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Having trouble filling the form inside this page?
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Some mobile browsers or restricted network settings block iframe submissions. You can always open the form directly.
              </p>
            </div>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white bg-[#0F4C81] hover:bg-[#0c3d68] shadow-sm transition-all text-sm shrink-0"
            >
              <span>Open Feedback Form</span>
              <ExternalLink className="w-4 h-4 text-[#F59E0B]" />
            </a>
          </div>
        </div>

        {/* ── Institution Quality Commitment Note ─────────────────── */}
        <div className="text-center text-xs text-gray-500 max-w-2xl mx-auto space-y-1">
          <p>
            Swami Vivekanand College of Pharmacy (SVCP), Banur, Patiala, Punjab
          </p>
          <p>
            Approved by PCI (PCI-2443) • Affiliated to I.K. Gujral Punjab Technical University
          </p>
          <p className="text-gray-400">
            Feedback responses are strictly utilized for internal academic and institutional quality enhancement.
          </p>
        </div>
      </div>
    </div>
  );
}
