import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Users, Award, ArrowRight, FileCheck, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Stakeholder Feedback | Swami Vivekanand College of Pharmacy",
  description:
    "Feedback portal for students, parents, and alumni of Swami Vivekanand College of Pharmacy (SVCP). Share your feedback to assist our ongoing quality enhancement.",
};

const feedbackOptions = [
  {
    title: "Student Feedback",
    href: "/feedback/student",
    icon: GraduationCap,
    description:
      "Share your experiences and feedback regarding curriculum delivery, teaching quality, laboratory facilities, and overall student support.",
    badge: "Students",
    externalUrl: "https://forms.gle/MyTNbF732K3rtwC29",
  },
  {
    title: "Parent Feedback",
    href: "/feedback/parent",
    icon: Users,
    description:
      "Share your observations and suggestions regarding your ward's holistic development, campus discipline, safety, and faculty support.",
    badge: "Parents",
    externalUrl: "https://forms.gle/LnDoNNSaujRbQtVLA",
  },
  {
    title: "Alumni Feedback",
    href: "/feedback/alumni",
    icon: Award,
    description:
      "Provide valuable industry perspective to strengthen pharmaceutical curriculum relevance, technical skills, and placement preparedness.",
    badge: "Alumni",
    externalUrl: "https://forms.gle/GCNVfVRZiRnkcWnC7",
  },
];

export default function FeedbackPortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/40 via-white to-gray-50/60 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0F4C81]/10 text-[#0F4C81] mb-4">
            <FileCheck className="w-4 h-4 text-[#0F4C81]" />
            <span>Swami Vivekanand College of Pharmacy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F4C81] tracking-tight mb-4">
            Stakeholder <span className="text-[#F59E0B]">Feedback</span> Portal
          </h1>
          <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto mb-6" />

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            At SVCP, we actively seek constructive feedback from our students, parents, and esteemed alumni to foster continuous improvement in teaching, infrastructure, research, and holistic education.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {feedbackOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                className="bg-white rounded-2xl border border-gray-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#0F4C81]/40"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-[#0F4C81] flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-[#0F4C81] group-hover:text-[#F59E0B] transition-colors" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-200/60">
                      {option.badge}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#0F4C81] transition-colors mb-3">
                    {option.title}
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {option.description}
                  </p>
                </div>

                <div className="px-6 pb-6 pt-0 space-y-2.5">
                  <Link
                    href={option.href}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-white bg-[#0F4C81] hover:bg-[#0c3d68] shadow transition-colors text-sm"
                  >
                    <span>View Feedback Page</span>
                    <ArrowRight className="w-4 h-4 text-[#F59E0B] group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={option.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium text-gray-600 hover:text-[#0F4C81] hover:bg-gray-100 transition-colors"
                  >
                    <span>Open Feedback Form</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Note */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 text-center max-w-2xl mx-auto text-sm text-gray-600">
          <p className="font-semibold text-[#0F4C81] mb-1">
            Internal Quality Assurance Cell (IQAC) Initiative
          </p>
          <p className="text-xs text-gray-500">
            All submitted feedback is reviewed by the IQAC committee for regular academic and administrative enhancements.
          </p>
        </div>
      </div>
    </div>
  );
}
