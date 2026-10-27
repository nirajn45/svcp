"use client";

import React, { useState } from "react";
import { Calendar, Download, Eye, FileText, ExternalLink, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Page = () => {
  const [activeTab, setActiveTab] = useState<"odd" | "even">("odd");

  const calendarData = [
    {
      title: "Academic Calendar for Session 2026-2027 (IKGPTU)",
      link: "/documents/IKGPTU_Academic-Calendar-2026-27.pdf",
      highlight: true,
      ref: "Ref: IKGPTU/DA/1953 (Dated 22/06/2026)",
    },
    {
      title: "Academic Calendar for Session 2025-2026",
      link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhTvMy9BpKlkFuAROSjc63sigMztyCVdIZ9nE7",
      highlight: false,
      ref: "Archive Session",
    },
  ];

  const oddSemesterSchedule = [
    { event: "Commencement of Session / Classes", dates: "15th July, 2026", note: "Academic kickoff for all semesters" },
    { event: "First Mid Semester Examination (MSE-I)", dates: "15/09/2026 to 19/09/2026", note: "Syllabus coverage Assessment I" },
    { event: "Second Mid Semester Examination (MSE-II)", dates: "10/11/2026 to 14/11/2026", note: "Syllabus coverage Assessment II" },
    { event: "End of Teaching", dates: "20th November, 2026", note: "Completion of 100 mandatory working days" },
    { event: "Preparatory Holidays & Practical Exams", dates: "23/11/2026 to 28/11/2026", note: "Internal/External practical evaluations" },
    { event: "End Semester Theory Examinations", dates: "01/12/2026 to 31/12/2026", note: "University examinations" },
    { event: "Winter Vacation", dates: "01/01/2027 to 15/01/2027", note: "Institutional winter recess" },
  ];

  const evenSemesterSchedule = [
    { event: "Commencement of Session / Classes", dates: "18th January, 2027", note: "Even semester academic kickoff" },
    { event: "First Mid Semester Examination (MSE-I)", dates: "15/03/2027 to 20/03/2027", note: "Syllabus coverage Assessment I" },
    { event: "Second Mid Semester Examination (MSE-II)", dates: "26/04/2027 to 30/04/2027", note: "Syllabus coverage Assessment II" },
    { event: "End of Teaching", dates: "7th May, 2027", note: "Completion of 100 mandatory working days" },
    { event: "Preparatory Holidays & Practical Exams", dates: "10/05/2027 to 15/05/2027", note: "Internal/External practical evaluations" },
    { event: "End Semester Theory Examinations", dates: "18/05/2027 to 15/06/2027", note: "University examinations" },
    { event: "Summer Vacation", dates: "16/06/2027 to 15/07/2027", note: "Institutional summer recess" },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="border-l-4 border-[#F59E0B] pl-4">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-1">
              Affiliated to IKGPTU, Jalandhar
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0F4C81]">
              Academic Calendar
            </h1>
            <p className="text-gray-500 mt-2 text-base md:text-lg">
              Official university schedules, teaching calendars, examination dates, and vacation periods.
            </p>
          </div>
        </motion.div>

        {/* Download / View Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-6 mb-14"
        >
          {calendarData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border ${
                item.highlight ? "border-[#F59E0B] ring-1 ring-[#F59E0B]/20" : "border-gray-100"
              } flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="bg-[#0F4C81]/10 p-3 rounded-xl text-[#0F4C81]">
                    <Calendar className="h-6 w-6" />
                  </div>
                  {item.highlight && (
                    <span className="bg-[#F59E0B]/10 text-[#d97706] font-bold text-xs px-3 py-1 rounded-full">
                      Current Session
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mb-6 font-medium">{item.ref}</p>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center px-5 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${
                  item.highlight
                    ? "bg-[#F59E0B] hover:bg-[#d97706] text-white"
                    : "bg-[#0F4C81] hover:bg-[#0c3d68] text-white"
                }`}
              >
                <Eye className="h-4 w-4" />
                <span>View / Download PDF</span>
              </a>
            </div>
          ))}
        </motion.div>

        {/* Interactive Schedule Table for Session 2026-27 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12"
        >
          <div className="bg-[#0F4C81] p-6 sm:p-8 text-white flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-amber-400 text-gray-900 font-bold text-[11px] px-2.5 py-0.5 rounded uppercase tracking-wider">
                  Session 2026–27
                </span>
                <span className="text-white/70 text-xs">Ref: IKGPTU/DA/1953</span>
              </div>
              <h2 className="text-2xl font-black">University Academic Schedule</h2>
              <p className="text-white/70 text-xs mt-1">Official dates issued by I.K. Gujral Punjab Technical University</p>
            </div>

            {/* Semester Tabs */}
            <div className="flex bg-white/10 p-1 rounded-xl self-start sm:self-auto">
              <button
                onClick={() => setActiveTab("odd")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "odd"
                    ? "bg-[#F59E0B] text-white shadow-md"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Odd Semester (Jul–Dec 2026)
              </button>
              <button
                onClick={() => setActiveTab("even")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "even"
                    ? "bg-[#F59E0B] text-white shadow-md"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Even Semester (Jan–Jun 2027)
              </button>
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-700 border-b border-gray-200">
                  <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider w-16">Sr.</th>
                  <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider">Academic Event / Milestone</th>
                  <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider">Scheduled Dates</th>
                  <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {(activeTab === "odd" ? oddSemesterSchedule : evenSemesterSchedule).map((item, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                    <td className="px-6 py-4 font-black text-[#0F4C81]">{idx + 1}</td>
                    <td className="px-6 py-4 font-bold text-gray-900">{item.event}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 font-bold rounded-lg text-xs sm:text-sm">
                        {item.dates}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-xs">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Regulatory Note from PDF */}
          <div className="bg-amber-50/70 p-6 border-t border-amber-100 flex items-start gap-3 text-xs text-amber-900">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Mandatory Academic Norm:</strong> As per University & Pharmacy regulatory guidelines, a minimum of <strong>100 working days</strong> are mandatory per semester for Pharmacy programs prior to preparatory holidays.
            </p>
          </div>
        </motion.div>

        {/* Info Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-gray-500 text-xs italic"
        >
          * All examination and vacation schedules are subject to notifications issued by IKGPTU, Jalandhar.
        </motion.p>
      </div>
    </div>
  );
};

export default Page;
