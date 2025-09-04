"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
        setOpenSubmenu(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
      subItems: [
        { name: "About SVCP", href: "/about/aboutsvcp" },
        { name: "About SVGOI", href: "/about/aboutsvgoi" },
        { name: "About SRNRMECT", href: "/about/aboutSRNRMECT" },
        { name: "Affiliated College / Affiliating University", href: "/about/AffiliatedCollege" },
      ],
    },
    {
      name: "Administration",
      href: "/adminstrator",
      subItems: [
        { name: "Chairman", href: "/adminstrator/chairman" },
        { name: "President", href: "/adminstrator/president" },
        { name: "Director", href: "/adminstrator/director" },
        { name: "Principal", href: "/adminstrator/principal" },
        { name: "Registrar", href: "/adminstrator/registrar" },
      ],
    },
    { name: "Courses", href: "/courses" },
    {
      name: "Academics",
      href: "/academics",
      subItems: [
        { name: "Academic Calendar", href: "/academics/academicCalendar" },
        { name: "IQAC", href: "/academics/iqac" },
        { name: "Syllabus", href: "/academics/syllabus" },
        { name: "Time Table", href: "/academics/timeTable" },
      ],
    },
    { name: "Infrastructure", href: "/infrastructure" },
    {
      name: "Programs",
      href: "/programs",
      subItems: [
        { name: "D.Pharmacy", href: "/programs/D.Pharmacy" },
        { name: "B.Pharmacy", href: "/programs/B.Pharmacy" },
        { name: "Pharm.D", href: "/programs/Pharm.D" },
        { name: "M.Pharmacy", href: "/programs/M.Pharmacy" },
      ],
    },
    {
      name: "Admission",
      href: "/admission",
      subItems: [
        { name: "Course Offered", href: "/admission/courseOffered" },
        { name: "Brochure", href: "/admission/brochure" },
        { name: "Admission Process and guidelines", href: "/admission/admissionProcess" },
        { name: "Fee Structure", href: "/admission/feeStructure" },
      ],
    },
    { name: "Research", href: "/research" },
    {
      name: "Placement",
      href: "/placements",
      subItems: [
        { name: "About Placements", href: "/placements/aboutPlacements" },
        { name: "Placement Training", href: "/placements/placementTraining" },
        { name: "Placement Achievements", href: "/placements/placementAchievements" },
        { name: "Placement Activities", href: "/placements/placementActivities" },
        { name: "Recruiting Companies", href: "/placements/recruitingCompanies" },
      ],
    },
    {
      name: "Facilities",
      href: "/facilities",
      subItems: [
        { name: "ICT Classrooms & LABS", href: "/facilities/ictClassrooms" },
        { name: "Library ", href: "/facilities/library" },
        { name: "Hostel", href: "/facilities/hostel" },
        { name: "Sports ", href: "/facilities/sports" },
        { name: "Counselling Center", href: "/facilities/counsellingCenter" },
      ],
    },
    {
      name: "Committees",
      href: "/committees",
      subItems: [
        { name: "Internal Complaint Committee", href: "/committees/internalComplaint" },
        { name: "Anti Ragging Cell ", href: "/committees/antiRagging" },
        { name: "Student Grievance Redressal Committee (SGRC)", href: "/committees/student" },
      ],
    },
    {
      name: "Alumni",
      href: "/alumni",
      subItems: [
        { name: "Alumni Association with details", href: "/alumni/alumniAssociation" },
        { name: "Alumni Meets ", href: "/alumni/alumniMeets" },
        { name: "Convocation", href: "/alumni/convocation" },
      ],
    },
    {
      name: "Documents",
      href: "/documents",
      subItems: [
        { name: "PCI", href: "/documents/PCI" },
        { name: "Rankings and Information ", href: "/documents/rankings" },
        { name: "BOG Meeting Proceedings", href: "/documents/bogMeeting" },
        { name: "Minutes Academic Council", href: "/documents/minutesAcademic" },
        { name: "Affiliation from University", href: "/documents/affiliation" },
        { name: "Rules and Regulations", href: "/documents/rulesAndRegulations" },
      ],
    },
    {
      name: "Activities",
      href: "/activities",
      subItems: [
        { name: "Cultural Activities", href: "/activities/culturalActivities" },
        { name: "Curricular & Co-curricular Activities ", href: "/activities/curricular" },
        { name: "NSS", href: "/activities/Nss" },
        { name: "NCC", href: "/activities/Ncc" },
        { name: "Departmental Activities", href: "/activities/departmentalActivities" },
      ],
    },
    {
      name: "Picture Gallery",
      href: "/gallery",
      subItems: [
        { name: "Infrastructure", href: "/gallery/infrastructure" },
        { name: "Sports ", href: "/gallery/sports" },
        { name: "Cultural", href: "/gallery/cultural" },
        { name: "National/Internation Day Celebrations", href: "/gallery/national" },
        { name: "Industrial Visits", href: "/gallery/industrialVisits" },
        { name: "Seminars/Workshops/Conferences", href: "/gallery/seminars" },
        { name: "Out reach Activities", href: "/gallery/Outreach" },
        { name: "Library", href: "/gallery/library" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" ref={navRef}>
      {/* 🔹 Banner Section */}
      <div className="flex flex-col items-center py-4 px-2 text-center border-b border-gray-200">
        <div className="flex gap-10 items-center mb-2">
          <img src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumla9Og3u4P3qMiabZeUz87wrEkVfCgNntQHSJ" alt="SVCP Logo" className="h-20 w-auto" />
          <img src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uw5P7EWnPADlNytJvziUwYAZMjFrEn9bXORaHu" alt="PCI Logo" className="h-20 w-auto" />
          <img src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwauOTamwGZoOXnzJfN1LIQeTcxtBpyg7Pb6EH" alt="PTU Logo" className="h-20 w-auto" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-5 mb-2 text-[#fea700]">
          SWAMI VIVEKANAND COLLEGE OF PHARMACY
        </h2>
        <p className="text-sm md:text-base font-medium text-[#016cb6]">Approved by Pharmacy Council of India - PCI-2443, Government of Punjab.</p>
        <p className="text-sm md:text-base font-medium text-[#016cb6]">Affiliated to I.K. Gujral Punjab Technical University, Jalandhar</p>
        <p className="text-sm md:text-base font-medium text-[#016cb6]">Promoted by: Shri Raghu Nath Rai Memorial Educational & Charitable Trust</p>
        <p className="text-sm md:text-base font-medium text-[#016cb6]">Established Year : 2005</p>
      </div>

      {/* 🔹 Navigation Tabs */}
      <div className="max-w-7xl ">
        <div className="flex justify-between items-center h-14">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center w-full">
            <div className="flex justify-between w-full">
              {navItems.map((item, index) =>
                item.subItems ? (
                  <div key={item.name} className="relative group">
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap">
                      <span>{item.name}</span>
                      <ChevronDown className="h-3 w-3" />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md z-50 border border-gray-200 min-w-[200px]">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 whitespace-nowrap"
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
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap"
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
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
    </nav>
  )
}
