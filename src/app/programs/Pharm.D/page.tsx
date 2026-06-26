"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  Clock,
  GraduationCap,
  Target,
  Users,
  Building2,
  ShieldCheck,
  Microscope,
  Search,
  FlaskConical,
  Briefcase,
  FileText,
  Activity,
  Award,
  Settings,
  Factory,
  Store,
  Stethoscope,
  HeartPulse,
  Truck,
  BookOpen
} from "lucide-react";
import LabCarousel from "@/components/LabCarousel";

const PharmDPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    viewport: { once: true },
  };

  const quickInfo = [
    { icon: Clock, label: "Duration", value: "6 Years" },
    { icon: GraduationCap, label: "Program Name", value: "Pharm.D" },
    { icon: Target, label: "Mode of Admission", value: "Merit / Entrance" },
  ];

  const careerRoles = [
    {
      title: "Drug Inspector",
      desc: "Ensure compliance with pharmaceutical regulations and standards to protect public health.",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Academicians",
      desc: "Contribute to the academic field by teaching and conducting research in pharmacy.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Retail Pharmacist",
      desc: "Dispense medications and provide pharmaceutical care to patients in retail settings.",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Medical Writer",
      desc: "Communicate scientific and medical information through writing for various audiences.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const highlights = [
    {
      title: "Research-oriented study",
      icon: Microscope,
      desc: "Research-oriented study with comprehensive understanding.",
    },
    {
      title: "State-of-the-art facilities",
      icon: Building2,
      desc: "State-of-the-art facilities and laboratories for practical training and research.",
    },
    {
      title: "In-depth exploration",
      icon: Search,
      desc: "In-depth exploration of pharmaceutical medicine and disease treatment.",
    },
    {
      title: "Research skills",
      icon: Activity,
      desc: "Development and nurturing of research skills.",
    },
    {
      title: "Academic contribution",
      icon: BookOpen,
      desc: "Contribution to the academic field through teaching and research.",
    },
    {
      title: "Practical training",
      icon: FlaskConical,
      desc: "Practical training in retail pharmacy settings.",
    },
  ];

  // Labs data moved to LabCarousel component

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ── Section 1: Hero ──────────────────────────────────────── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhhrZgRC0vYTA0HQ4lC3zruVx5eGqtm7IhsDcX"
            alt="Pharm.D Hero"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Doctor of <span className="text-[#F59E0B]">Pharmacy</span> (Pharm.D)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-200 font-medium leading-relaxed"
          >
            A six year Doctorate Degree program offering research based understanding of pharmaceutical medicine.
          </motion.p>
        </div>
      </section>

      {/* ── Section 2: Program Overview ───────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#F59E0B]/10 rounded-full">
                <span className="text-[#F59E0B] font-bold text-sm uppercase tracking-widest">
                  Program Overview
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] leading-tight">
                The Foundation of Your <br />
                <span className="text-[#F59E0B]">Pharmacy Career</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#F59E0B] rounded-full" />
              
              <div className="space-y-4 max-h-[350px] overflow-y-auto scrollbar-thin pr-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  The Doctor of Pharmacy program is a research oriented study of various significant areas of pharmacy which are designed to provide an in-depth and comprehensive understanding of these areas. The Faculty of Pharmacy offers a six year Doctorate Degree program in Pharmacy which seeks to impart within the students a specialised research based understanding of pharmaceutical medicine and explore other avenues in the field.
                </p>
                <p>
                  The scope of this program includes the purpose of diagnosing the various causes of diseases and the manner and methods through which they can be treated. Beyond merely the treatment protocols and procedure, the field of pharmacy also explores various forms of practical research which can be utilised as a way of eradicating disease causing virus and curbing their spread for the welfare of humanity.
                </p>
                <p>
                  As a way of providing the highest form of practical training to the students, the Faculty of Pharmacy is equipped with state of the art facilities and laboratories for research and novel innovations. The program provides a comprehensive approach to the study of pharmacy which provides a platform for the students and faculties to innovate and patent novel treatment modalities.
                </p>
                <p>
                  The program goes on to develop and nurture the research skills and abilities of the students as a way of producing a reliable and credible knowledge base in the scope of pharmacy.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-4 bg-[#F59E0B]/10 rounded-[2rem] blur-xl group-hover:bg-[#F59E0B]/20 transition-all duration-500" />
              <div className="relative w-full h-auto md:h-[600px] min-h-[400px] rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhrwPkBrCkcMe4PHQjrnhKWmptfdGlJ6Rybu0E"
                  alt="Pharm.D Overview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Quick Info ───────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {quickInfo.map((info, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group border border-gray-100 flex flex-col justify-center min-h-[220px]"
              >
                <div className="bg-[#0F4C81]/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F59E0B]/10 transition-colors">
                  <info.icon className="w-8 h-8 text-[#0F4C81] group-hover:text-[#F59E0B] transition-colors" />
                </div>
                <h4 className="text-gray-500 font-bold text-sm uppercase tracking-widest mb-2">
                  {info.label}
                </h4>
                <p className="text-lg md:text-xl font-bold text-[#0F4C81]">
                  {info.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div {...fadeInUp} className="mt-12 text-center max-w-3xl mx-auto">
             <p className="text-gray-600 font-medium">
               Admission is typically based on merit or entrance exams conducted by the institution. Candidates must apply through the designated admission portal.
             </p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Major Tracks ───────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-6">
              Program&apos;s <span className="text-[#F59E0B]">Major Tracks</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto" />
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {[
              { name: "Process Control", icon: Settings },
              { name: "Manufacturing", icon: Factory },
              { name: "Quality Control", icon: ShieldCheck },
              { name: "Retail/Wholesale Pharmacy Outlet", icon: Store },
              { name: "Clinical Pharmacist", icon: Stethoscope },
              { name: "Hospital Pharmacy Director", icon: Building2 },
              { name: "Hospital Staff Pharmacist", icon: Users },
              { name: "Medical Writer", icon: FileText },
              { name: "Pharmaceutical Advisor", icon: Target },
              { name: "Medical Safety Physician", icon: HeartPulse },
              { name: "Supply Logistics leader", icon: Truck },
              { name: "Drug Safety Associate", icon: Activity },
            ].map((track, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#F59E0B] transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[140px]"
              >
                <div className="bg-[#0F4C81] w-10 h-10 rounded-lg flex items-center justify-center mb-3 text-white shadow-md">
                  <track.icon className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-[#0F4C81] text-sm md:text-base leading-snug">
                  {track.name}
                </h5>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 5: Eligibility ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-12">
              Eligibility <span className="text-[#F59E0B]">Criteria</span>
            </h2>
            <div className="space-y-6 border-l-4 border-[#F59E0B] pl-8 py-2">
              <p className="text-xl text-gray-700 leading-relaxed text-justify">
                All those candidates who have passed 10+2 examination from a board recognized or established by Central/State Government through a legislation with Physics and Chemistry as compulsory subjects along with Mathematics or Biology subject.
              </p>
              <div className="flex items-center gap-4 py-2">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="font-bold text-[#F59E0B] text-xl">OR</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed text-justify">
                All those candidates who have passed D.Pharm. course from an institution approved by the Pharmacy Council of India under section 12 of The Pharmacy Act.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 6: Affiliation ────────────────────────────────── */}
      <section className="py-16 bg-[#0F4C81] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-12">
            Affiliations & Approval
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 min-w-[300px] max-w-sm"
            >
              <Building2 className="w-10 h-10 text-[#F59E0B] mx-auto mb-4" />
              <h4 className="text-xl font-bold leading-relaxed">
                Affiliated To Swami Vivekanand College of Pharmacy affiliated from IKGPTU, Jalandhar
              </h4>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 min-w-[300px] max-w-sm flex flex-col justify-center"
            >
              <Award className="w-10 h-10 text-[#F59E0B] mx-auto mb-4" />
              <h4 className="text-xl font-bold">Approved by PCI</h4>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 7: Downloads ──────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeInUp} className="mb-12">
            <h3 className="text-3xl font-bold text-[#0F4C81] mb-4">Downloads</h3>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a
              variants={fadeInUp}
              href="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh7pE2OuMuQUA1JMyv94GFVdat0Kq5BHxILhDm"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#F59E0B] hover:bg-[#d97706] text-white px-8 py-4 rounded-lg shadow-md transition-all duration-300 font-bold text-lg"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              Fee Structure PDF
            </motion.a>
            <motion.a
              variants={fadeInUp}
              href="https://uploadthing.com/dashboard/dubeychandan413-personal-team/sm7p82l93d/files?page=0&pageSize=10"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#F59E0B] hover:bg-[#d97706] text-white px-8 py-4 rounded-lg shadow-md transition-all duration-300 font-bold text-lg"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              Brochure
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Section 8: Career Roles ───────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[#F59E0B] font-bold text-sm uppercase tracking-widest block mb-4">
              Career Prospects
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-6">
              Future <span className="text-[#F59E0B]">Career Roles</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto" />
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {careerRoles.map((role, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative h-80 rounded-xl overflow-hidden group shadow-md"
              >
                <Image
                  src={role.image}
                  alt={role.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h4 className="text-white font-bold text-2xl mb-2">
                    {role.title}
                  </h4>
                  <p className="text-gray-200 font-medium leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 9: Program Highlights ────────────────────────── */}
      <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center gap-4"
              >
                <div className="bg-[#F59E0B]/10 w-14 h-14 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-[#0F4C81] font-bold text-lg leading-snug">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 10: Laboratories Carousel ────────────────────── */}
      <LabCarousel />
      
      {/* CTA Footer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0F4C81]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#F59E0B]/5 rounded-full blur-3xl" />
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F4C81] mb-8 relative z-10">
              Ready to start your <br />
              <span className="text-[#F59E0B]">Pharmacy Journey?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-12 max-w-xl mx-auto relative z-10">
              Join Swami Vivekanand College of Pharmacy and build a successful
              career in the healthcare world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <a
                href="/contact"
                className="bg-[#0F4C81] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-blue-900 transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                Inquire Now
              </a>
              <a
                href="/admission/admissionProcess"
                className="bg-white text-[#0F4C81] border-2 border-[#0F4C81] px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                Admission Process
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PharmDPage;
