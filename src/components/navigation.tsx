"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setOpenSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "",
      subItems: [
        { name: "About SVCP", href: "/about/aboutsvcp" },
        { name: "About SVGOI", href: "/about/aboutsvgoi" },
        { name: "About SRNRMECT", href: "/about/aboutSRNRMECT" },
        {
          name: "Affiliated College / Affiliating University",
          href: "/about/AffiliatedCollege",
        },
      ],
    },
    {
      name: "Administration",
      href: "",
      subItems: [
        { name: "Chairman", href: "/adminstrator/chairman" },
        { name: "President", href: "/adminstrator/president" },
        { name: "Director", href: "/adminstrator/director" },
        { name: "Principal", href: "/adminstrator/principal" },
        { name: "Registrar", href: "/adminstrator/registrar" },
      ],
    },
    {
      name: "Academics",
      href: "",
      subItems: [
        { name: "Academic Calendar", href: "/academics/academicCalendar" },
        { name: "Syllabus", href: "/academics/syllabus" },
        { name: "Time Table", href: "/academics/timeTable" },
      ],
    },
    {
      // here i want to classify it in diploma ->d.pharmacy, under graduation ->b.pharma and pharma d, post graduation->m.pharmacy
      name: "Programs",
      href: "",
      subItems: [
        { name: "D.Pharmacy", href: "/programs/D.Pharmacy" },
        { name: "B.Pharmacy", href: "/programs/B.Pharmacy" },
        { name: "Pharm.D", href: "/programs/Pharm.D" },
        { name: "M.Pharmacy", href: "/programs/M.Pharmacy" },
      ],
    },
    {
      name: "Admission",
      href: "",
      subItems: [
        { name: "Course Offered", href: "/courses" },
        { name: "Brochure", href: "/admission/brochure" },
        {
          name: "Admission Process and guidelines",
          href: "/admission/admissionProcess",
        },
        { name: "Fee Structure", href: "/admission/feeStructure" },
      ],
    },
    { name: "IQAC", href: "/academics/iqac" },
    { name: "Research", href: "/research" },

    {
      name: "Placement",
      href: "",
      subItems: [
        { name: "About Placements", href: "/placements/aboutPlacements" },
        { name: "Placement Training", href: "/placements/placementTraining" },
        {
          name: "Placement Achievements",
          href: "/placements/placementAchievements",
        },
        {
          name: "Placement Activities",
          href: "/placements/placementActivities",
        },
        {
          name: "Recruiting Companies",
          href: "/placements/recruitingCompanies",
        },
      ],
    },

    {
      name: "Committees",
      href: "",
      subItems: [
        {
          name: "Internal Complaint Committee",
          href: "/committees/internalComplaint",
        },
        { name: "Anti Ragging Cell ", href: "/committees/antiRagging" },
        {
          name: "Student Grievance Redressal Committee (SGRC)",
          href: "/committees/student",
        },
      ],
    },
    {
      name: "Activities",
      href: "",
      subItems: [
        { name: "Cultural Activities", href: "/activities/culturalActivities" },
        {
          name: "Curricular & Co-curricular Activities ",
          href: "/activities/curricular",
        },
        { name: "NSS", href: "/activities/Nss" },
        { name: "NCC", href: "/activities/Ncc" },
        {
          name: "Departmental Activities",
          href: "/activities/departmentalActivities",
        },
      ],
    },
    {
      name: "NIRF",
      href: "",
      subItems: [
        { name: "NIRF 2026", href: "/nirf-2026.pdf" },
      ],
    },
    { name: "Contact", href: "/contact" },
    { name: "Feedback", href: "/feedback" },
  ];

  return (
    <nav className="bg-white shadow-lg top-0 z-[9999] relative" ref={navRef}>
      {/* 🔹 Banner Section */}
      <div className="w-full bg-gradient-to-r from-white to-blue-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Left Logo - SVCP */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center md:justify-start"
            >
              <img
                src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhdSiWj2HNcorLp7Ez8OqsCkgfTIJDU12B5yix"
                alt="SVCP Logo"
                className="h-12 md:h-16 object-contain bg-white p-2 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Center Text */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center flex-1"
            >
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#0F4C81] tracking-wide">
                SWAMI VIVEKANAND COLLEGE OF <span className="text-[#F59E0B]">PHARMACY</span>
              </h2>
              <div className="space-y-1 mt-1">
                <p className="text-sm md:text-base text-gray-600">
                  Approved by <span className="font-semibold text-[#0F4C81]">Pharmacy Council of India - PCI-2443</span>, Government of Punjab.
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  Affiliated to <span className="font-semibold text-[#0F4C81]">I.K. Gujral Punjab Technical University, Jalandhar</span>
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  Promoted by: Shri Raghu Nath Rai Memorial Educational & Charitable Trust
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  Established Year : <span className="font-semibold">2005</span>
                </p>
              </div>
            </motion.div>

            {/* Right Logos - IKGPTU & PCI */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center md:justify-end gap-6"
            >
              <img
                src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh5wFBbeWeAb4xUsD2HtiI9zBhMYVnRZFPdLrQ"
                alt="PCI Logo"
                className="h-12 md:h-16 object-contain bg-white p-2 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhhqqNrz0vYTA0HQ4lC3zruVx5eGqtm7IhsDcX"
                alt="IKGPTU Logo"
                className="h-12 md:h-16 object-contain bg-white p-2 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* 🔹 Navigation Tabs */}
      <div className="bg-[#0F4C81] w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-center items-center h-14">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center justify-center space-x-1">
                {navItems.map((item, index) =>
                  item.subItems ? (
                    <div key={item.name} className="relative group">
                      <button className="flex items-center space-x-1 text-white hover:text-yellow-400 hover:bg-white/10 px-3 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap rounded-md">
                        <span>{item.name}</span>
                        <ChevronDown className="h-3 w-3" />
                      </button>
                      {/* Dropdown */}
                      <div className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-xl rounded-md z-[9999] border border-gray-100 min-w-[200px]">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0F4C81] whitespace-nowrap"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-yellow-400 hover:bg-white/10 px-3 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap rounded-md"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-yellow-400 focus:outline-none p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 max-h-[70vh] overflow-y-auto">
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                {navItems.map((item, index) =>
                  item.subItems ? (
                    <div key={item.name}>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="flex justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 items-center"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transform transition-transform ${
                            openSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openSubmenu === index && (
                        <div className="ml-4 space-y-1 border-l border-gray-200 pl-2 my-1">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>

  );
}
