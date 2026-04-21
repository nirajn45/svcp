"use client";

import React, { useEffect, useState } from "react";
import { GraduationCap, ChevronLeft, ChevronRight, Building2, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const Page = () => {
  const [currentManagement, setCurrentManagement] = useState(0);

  const managementTeam = [
    {
      name: "Sh. Ashwani Kumar Garg",
      position: "Chairman",
      image:
        "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwIAnMHO767QT5S3R9ugLVAoxje4IGbPqa1Clc",
      message:
        "I welcome every aspiring achiever to the Swami Vivekanand Group of Institutions. Today SVGOI has become a dream place to provide valuable educational experience to students, from different cultures and backgrounds. I am delighted to see the contributions, the students, faculty, and management of SVGOI have been making towards the overall success of students across the world. We have an interactive curriculum made to provide definite learning solutions in the field of Scientific studies, Medical studies, Arts, Business & Engineering. In this world known as a global village, all boundaries and the national borders are gradually becoming more transparent. Our international collaborations have helped students to form unlimited opportunities of global exposure for our students, to excel in their careers. So join your hands with SVGOI and be future-ready.",
    },
    {
      name: "Sh. Ashok Kumar Garg",
      position: "President",
      image:
        "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwRQi3i9XsDGPLe31wMSEvBqibVUpIy7AHKfYT",
      message:
        "SVGOI has experienced remarkable growth in recent years, earning widespread acclaim for its rapid advancement. Our journey from inception to our current standing is a testament to our unwavering dedication, exceptional faculty, and enriching learning environment. With a focus on quality education, we offer diverse programs affiliated with both national and international universities. We celebrate the achievements of our faculty, staff, and partners, employing modern teaching methods that empower students to realize their full potential. Emphasizing hands-on experience over mere theoretical knowledge, SVGOI is dedicated to providing practical solutions and fostering intellectual brilliance through research and development. Let's collaborate in building a skilled society together.",
    },
    {
      name: "Er. Vishal Garg",
      position: "Director Secretarial & Administration",
      image:
        "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwNlR77x0yoU2FaRhrYmBI0dQZTqL1vMlnXJei",
      message:
        "Efficient administration forms the backbone of a successful institution. We have an ecosystem in our college that values structure, discipline, and transparency. In the field of pharmacy, where accuracy and accountability are non-negotiable, our administrative foundation reflects these principles. We ensure that students experience a well-managed academic journey—supported by policies that promote fairness, respect, and responsibility at every level.",
    },
    {
      name: "Er. Sahil Garg",
      position: "Project Director",
      image:
        "https://urbanmelange.com/wp-content/uploads/2024/02/A37I9376-1200x1713.jpg",
      message:
        "Our commitment is to make quality pharmaceutical education affordable and purposeful. At our institution, from advanced laboratories to digitally enabled classrooms, every facility has been crafted to foster innovation and hands-on learning, helping students become confident, capable professionals in a rapidly advancing pharmaceutical world.",
    },
    {
      name: "Mr. Ankur Gupta",
      position: "Director Corporate Affairs",
      image:
        "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwxZa79p4Fz9vfNj7L5miX4SuQMexJhoPwragV",
      message:
        "Industry exposure is the bridge between education and employment. At SVCP, we strive to build partnerships that bring industry into the classroom and our students into the corporate world. Through internships, guest lectures, and career-oriented training, we ensure our students gain the practical insights and soft skills required to lead in a competitive world. We don't just prepare students for jobs—we prepare them for lifelong careers.",
    },
    {
      name: "Adv. Shubham Garg",
      position: "Director Placements",
      image:
        "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwaHStKpwGZoOXnzJfN1LIQeTcxtBpyg7Pb6EH",
      message:
        "Our responsibility goes beyond classroom education—it's about ensuring every student finds a path to a successful career. We work tirelessly to connect students with leading pharma companies, hospitals, and research institutions. Through career guidance, training modules, and placement drives, we help students translate their learning into impactful, purpose-driven careers.",
    },
    {
      name: "Prof. (Dr.) Sanjeev Saini",
      position: "Director Academics",
      image:
        "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uwk7o8CEBEhdiQ1fRaxNIe28lVAgo5KmY6qy3S",
      message:
        "Modern education must go beyond preparing students for jobs—it should equip them for lifelong learning, leadership, and meaningful contributions to society. Guided by this belief, Swami Vivekanand College of Pharmacy (SVCP) has built an academic ecosystem where knowledge meets innovation, and values shape vision. Since our establishment in 2005, we have embraced the evolving demands of industry and society, designing academic programs that are practical, relevant, and future-ready. Our academic philosophy places students at the heart of every initiative. Through well-structured curricular, outcome-based teaching, and the integration of modern technology, we equip our learners with the knowledge and skills needed to excel in a competitive global landscape. Our faculty members, serving as mentors and role models, guide students to cultivate professional competence alongside integrity and social responsibility. We complement classroom learning with experiential opportunities—ranging from research projects and industrial training to seminars, cultural fests, and global collaborations—ensuring a well-rounded growth experience. At SVCP, education is not merely about degrees; it is about transforming potential into achievement. We remain dedicated to producing graduates who are not only job-ready but also future leaders, innovators, and change-makers in their chosen fields.",
    },
    {
      name: "Mr. Himanshu Rao",
      position: "Registrar",
      image:
        "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwzyXzaXLn7CWOjAimtbzX4a35RNgJTxvedhHc",
      message:
        "Swami Vivekanand College of Pharmacy, an institution committed to academic excellence, innovation, and holistic development of students. At SVCP, we nurture future pharmacists with strong professional ethics, scientific knowledge, and practical skills, enabling them to contribute effectively to the healthcare sector. Guided by the vision of Swami Vivekanand Ji, we strive to instill values of discipline, dedication, and service to society. Our dedicated faculty, modern infrastructure, well-equipped laboratories, and a student-centric environment provide the perfect platform for young minds to excel in academics, research, and co-curricular activities. We aim to empower students not only to achieve professional success but also to become responsible citizens who can make a positive difference in the community.",
    },
  ];

  const nextManagement = () => {
    setCurrentManagement((prev) => (prev + 1) % managementTeam.length);
  };

  const prevManagement = () => {
    setCurrentManagement(
      (prev) => (prev - 1 + managementTeam.length) % managementTeam.length
    );
  };

  const member = managementTeam[currentManagement];

  return (
    <>
      {/* ── Hero / About Section ─────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

          {/* Section Label */}
          <div className="flex items-center gap-3 mb-12 opacity-0 translate-y-6 animate-[fadeInUp_0.6s_ease-out_forwards]">
            <span className="h-px flex-1 max-w-10 bg-[#F59E0B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
              Est. 2005
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Text */}
            <div className="flex flex-col justify-center space-y-8 opacity-0 translate-y-6 animate-[fadeInUp_0.6s_ease-out_forwards] animation-delay-[0.2s]">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F4C81] leading-tight mb-4">
                  About{" "}
                  <span className="text-[#F59E0B]">SVCP</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Discover our journey of excellence in pharmaceutical education
                  and our commitment to shaping future healthcare professionals.
                </p>
              </div>

              <div className="w-20 h-1 bg-linear-to-r from-[#F59E0B] to-yellow-300 rounded-full" />

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
                <p>
                  Swami Vivekanand College of Pharmacy (SVCP), established in
                  2005, stands as a premier institution under the Swami
                  Vivekanand Group of Institutes (SVGOI). We are committed to
                  delivering value-based education through innovative teaching
                  methods and hands-on training. As the oldest college of
                  pharmacy in the region, we offer comprehensive undergraduate
                  and postgraduate programs approved by the Pharmacy Council of
                  India (PCI) and affiliated with IKGPTU and PSBTE.
                </p>
                <p>
                  Our modern infrastructure, experienced faculty, and
                  industry-oriented curriculum prepare students for dynamic
                  careers in the global pharmaceutical landscape, ensuring they
                  meet the evolving demands of healthcare.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { icon: Building2, label: "Est. 2005", sub: "Founded" },
                  { icon: Users, label: "1000+", sub: "Alumni" },
                  { icon: Award, label: "PCI", sub: "Approved" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div
                    key={sub}
                    className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#F59E0B]/50 transition-all duration-300"
                  >
                    <Icon className="h-6 w-6 text-[#F59E0B] mx-auto mb-2" />
                    <p className="text-lg font-bold text-[#0F4C81]">{label}</p>
                    <p className="text-sm text-gray-500">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image */}
            <div className="flex justify-center items-center opacity-0 translate-y-6 animate-[fadeInUp_0.6s_ease-out_forwards] animation-delay-[0.4s]">
              <div className="relative group w-full max-w-lg">
                <div className="absolute -inset-2 bg-linear-to-br from-[#F59E0B]/30 to-[#0F4C81]/20 rounded-3xl blur-sm opacity-70 group-hover:opacity-100 transition-all duration-500" />
                <img
                  src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwMGSR1MjKT8yFRprHYOzIulXWf1a7xAmCbPhw"
                  alt="SVCP Campus"
                  className="relative w-full aspect-4/3 rounded-3xl shadow-2xl object-cover object-center hover:scale-105 transition-all duration-500"
                />
                {/* Corner badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#0F4C81] text-white rounded-2xl px-6 py-3 shadow-xl text-sm font-semibold">
                  Premier Pharmacy Institute
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Desk of Management ───────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-linear-to-br from-slate-50 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 translate-y-6 animate-[fadeInUp_0.6s_ease-out_forwards]">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-4">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F4C81] mb-6">
              Desk of{" "}
              <span className="text-[#F59E0B]">Management</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our visionary leadership team
            </p>
            <div className="w-20 h-1 bg-linear-to-r from-[#F59E0B] to-yellow-300 rounded-full mx-auto mt-6" />
          </div>

          <div className="relative opacity-0 translate-y-6 animate-[fadeInUp_0.6s_ease-out_forwards] animation-delay-[0.2s]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentManagement}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"
              >
                {/* Image Side */}
                <div className="w-full h-full">
                  <div className="relative group w-full h-full min-h-100">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover object-center rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent rounded-3xl" />
                    {/* Name badge */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/80">
                      <h3 className="text-xl font-bold text-[#0F4C81]">
                        {member.name}
                      </h3>
                      <p className="text-[#F59E0B] font-semibold text-base mt-1">
                        {member.position}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message Side */}
                <div className="flex flex-col h-full">
                  <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 md:p-10 h-full flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="inline-flex items-center bg-[#F59E0B]/10 px-4 py-2 rounded-full">
                          <span className="text-[#F59E0B] font-bold text-sm uppercase tracking-wider">
                            Message
                          </span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#0F4C81] mb-2">
                        From the {member.position}
                      </h3>
                      <div className="w-12 h-1 bg-[#F59E0B] rounded-full mb-6" />

                      <blockquote className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-[#F59E0B] pl-6 max-h-50 overflow-y-auto pr-2 scrollbar-thin">
                        &quot;{member.message}&quot;
                      </blockquote>
                    </div>

                    {/* Controls */}
                    <div className="mt-8 flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-3">
                        <Button
                          onClick={prevManagement}
                          variant="outline"
                          size="icon"
                          className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white bg-transparent transition-all duration-300 rounded-full h-12 w-12"
                          aria-label="Previous message"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                          onClick={nextManagement}
                          variant="outline"
                          size="icon"
                          className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white bg-transparent transition-all duration-300 rounded-full h-12 w-12"
                          aria-label="Next message"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </div>
                      <span className="text-sm text-gray-400 font-medium">
                        {currentManagement + 1} / {managementTeam.length}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-10 space-x-3">
              {managementTeam.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentManagement(index)}
                  className={`rounded-full transition-all duration-300 ${
                    currentManagement === index
                      ? "w-8 h-3 bg-[#F59E0B]"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Principal's Message ──────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 translate-y-6 animate-[fadeInUp_0.6s_ease-out_forwards]">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-4">
              Academic Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F4C81] mb-6">
              Principal&apos;s{" "}
              <span className="text-[#F59E0B]">Message</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-[#F59E0B] to-yellow-300 rounded-full mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch opacity-0 translate-y-6 animate-[fadeInUp_0.6s_ease-out_forwards] animation-delay-[0.2s]">
            {/* Image */}
            <div className="relative group h-full">
              <div className="absolute -inset-2 bg-linear-to-br from-[#F59E0B]/20 to-[#0F4C81]/10 rounded-3xl blur-sm opacity-60 group-hover:opacity-100 transition-all duration-500" />
              <img
                src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumjPBSQDFEKYdovOsGfC3D9tNMk6nXaAzRVqy0"
                alt="Prof. (Dr.) Sanjeev Mittal"
                className="relative w-full h-full min-h-100 object-cover object-center rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent rounded-3xl" />
              {/* Name overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0F4C81]/90 backdrop-blur-sm text-white p-6 rounded-2xl">
                <p className="font-bold text-xl">Prof. (Dr.) Sanjeev Mittal</p>
                <p className="text-[#F59E0B] text-lg font-medium">Principal, SVCP</p>
              </div>
            </div>

            {/* Content */}
            <div className="h-full flex flex-col">
              <div className="bg-linear-to-br from-gray-50 to-orange-50/40 border border-gray-200 rounded-3xl shadow-lg p-10 md:p-12 h-full flex flex-col justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Icon + Label */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="shrink-0 bg-[#F59E0B]/10 p-4 rounded-2xl">
                    <GraduationCap className="h-8 w-8 text-[#F59E0B]" />
                  </div>
                  <div>
                    <span className="text-sm font-bold uppercase tracking-widest text-[#F59E0B]">
                      From the Principal
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#0F4C81] mt-1">
                      Principal&apos;s Message
                    </h3>
                  </div>
                </div>

                <div className="text-gray-700 text-lg leading-relaxed space-y-6 border-l-4 border-[#F59E0B] pl-8">
                  <p>
                    &quot;Our institution, inspired by the ideals of Swami
                    Vivekanand Ji, is dedicated to nurturing competent,
                    compassionate, and ethical pharmacy professionals who can
                    contribute meaningfully to society and the healthcare
                    sector.&quot;
                  </p>
                  <p>
                    &quot;At SVCP, we believe that education goes beyond
                    classrooms. Along with academic excellence, we focus on
                    research, innovation, and skill development to prepare our
                    students for the dynamic global pharmaceutical industry. Our
                    state-of-the-art laboratories, well-stocked library,
                    experienced faculty, and vibrant learning environment ensure
                    that every student has the right platform to explore, learn,
                    and excel.&quot;
                  </p>
                  <p>
                    &quot;We encourage our students to imbibe not only
                    professional knowledge but also values of integrity,
                    discipline, and social responsibility. Through co-curricular
                    and extracurricular activities, we strive to shape
                    well-rounded individuals who can adapt to challenges and
                    emerge as leaders in their chosen fields.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Page;
