"use client";

import Link from "next/link";
import {
  ArrowRight,
  Users,
  BookOpen,
  Award,
  Building,
  Star,
  TrendingUp,
  Globe,
  Lightbulb,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const stats = [
    { icon: Calendar, number: "2005", label: "Established", bgWhite: true },
    { icon: BookOpen, number: "4", label: "Programs", bgWhite: false },
    { icon: Award, number: "19+", label: "Years Experience", bgWhite: true },
    {
      icon: Building,
      number: "100%",
      label: "Placement Support",
      bgWhite: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-[80vh] text-white overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source
            src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumGkFk3XIoeyaO1d7xYQMuBsK0zrR9WmSiLvEN"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative w-full h-full flex items-center py-12 bg-black/20 bg-opacity-50">
          <div className="w-10/12 mx-auto flex flex-wrap items-center">
            <div className="w-full  py-12">
              <p className="text-2xl lg:text-4xl font-bold w-4/5 mb-3 pb-3 animate-slide-left">
                Empowering Pharma Excellence Since 2005: A Trusted Name in
                Education.
              </p>
              <p className="text-md lg:text-lg font-semibold mt-3 mb-3 pb-3 animate-slide-left">
                SVCP, under SVGOI’s visionary leadership, blends academics,
                research, and holistic growth in pharmaceutical sciences.
              </p>
              <div className="flex gap-3 flex-wrap animate-slide-left">
                <Link href="https://admission.sviet.ac.in/">
                  <button className="bg-[#fea700] cursor-pointer text-white text-xl px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-[#e6960a]">
                    Apply Now
                  </button>
                </Link>
                <Link href="/SVIET-Brochure-2025.pdf">
                  <button className="bg-[#fea700] cursor-pointer text-white text-xl px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-[#e6960a]">
                    Download Brochure
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Redesigned */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Left Half - Institute Information */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="border-l-4 border-[#fea700] text-3xl pl-4 md:text-4xl font-bold text-gray-900 mb-3">
                  About <span className="text-[#fea700]">SVCP</span>
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Discover our journey of excellence in pharmaceutical education
                  and our commitment to shaping future healthcare professionals.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm">
                  Swami Vivekanand College of Pharmacy (SVCP), established in
                  2005, stands as a premier institution under the Swami
                  Vivekanand Group of Institutes (SVGOI). We are committed to
                  delivering value-based education through innovative teaching
                  methods and hands-on training.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  As the oldest college of pharmacy in the region, we offer
                  comprehensive undergraduate and postgraduate programs approved
                  by the Pharmacy Council of India (PCI) and affiliated with
                  IKGPTU and PSBTE.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Our modern infrastructure, experienced faculty, and
                  industry-oriented curriculum prepare students for dynamic
                  careers in the global pharmaceutical landscape, ensuring they
                  meet the evolving demands of healthcare.
                </p>
              </div>
            </div>

            {/* Right Half - Stats Cards */}
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card
                      key={index}
                      className={`border-0 shadow-md transition-all duration-300 hover:shadow-lg ${
                        stat.bgWhite
                          ? "bg-white text-gray-900"
                          : "bg-[#fea700] text-white"
                      }`}
                    >
                      <CardContent className="p-4 text-center">
                        <Icon
                          className={`h-8 w-8 mx-auto mb-2 ${
                            stat.bgWhite ? "text-[#fea700]" : "text-white"
                          }`}
                        />
                        <h3 className="text-2xl font-bold mb-1">
                          {stat.number}
                        </h3>
                        <p
                          className={`font-medium text-sm ${
                            stat.bgWhite ? "text-gray-600" : "text-white/90"
                          }`}
                        >
                          {stat.label}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SVCP Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="border-l-4 border-[#fea700] pl-4 text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why Choose <span className="text-[#fea700]">SVCP</span>?
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Discover what makes us a symbol of academic excellence and
              innovation in pharmaceutical education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                title: "Academic Excellence",
                description:
                  "Quality education with innovative teaching methods and strong research emphasis",
              },
              {
                icon: Globe,
                title: "Global Standards",
                description:
                  "Education aligned with international standards and global healthcare challenges",
              },
              {
                icon: TrendingUp,
                title: "Career Growth",
                description:
                  "Strong industry partnerships ensuring excellent placement opportunities",
              },
              {
                icon: Lightbulb,
                title: "Innovation Hub",
                description:
                  "State-of-the-art facilities fostering research and innovation in pharmaceutical sciences",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-md transition-all duration-300 hover:shadow-lg animate-slide-up bg-white"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-5 text-center">
                    <div className="bg-[#fea700]/10 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#fea700]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="border-l-4 border-[#fea700] pl-4 text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-[#fea700]">Courses</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Comprehensive pharmacy education programs designed to meet
              evolving healthcare demands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                name: "B.Pharmacy",
                fullName: "Bachelor of Pharmacy",
                duration: "4 Years",
                description:
                  "Comprehensive undergraduate program covering pharmaceutical sciences, drug development, and healthcare systems.",
                highlights: [
                  "Industry Internships",
                  "Research Projects",
                  "Clinical Training",
                  "Modern Labs",
                ],
                link: "/courses/bpharmacy",
                color: "#fea700",
              },
              {
                name: "M.Pharmacy",
                fullName: "Master of Pharmacy (Pharmaceutics)",
                duration: "2 Years",
                description:
                  "Advanced postgraduate program focusing on specialized pharmaceutical research and development.",
                highlights: [
                  "Research Excellence",
                  "Advanced Techniques",
                  "Publication Opportunities",
                  "Industry Connect",
                ],
                link: "/courses/mpharmacy",
                color: "#f59e0b",
              },
              {
                name: "Pharm.D",
                fullName: "Doctor of Pharmacy",
                duration: "6 Years",
                description:
                  "Professional doctorate program emphasizing clinical pharmacy practice and patient care.",
                highlights: [
                  "Clinical Practice",
                  "Hospital Rotations",
                  "Patient Counseling",
                  "Healthcare Leadership",
                ],
                link: "/courses/pharmd",
                color: "#ea580c",
              },
              {
                name: "D.Pharmacy",
                fullName: "Diploma in Pharmacy",
                duration: "2 Years",
                description:
                  "Foundational program providing essential pharmaceutical knowledge and practical skills.",
                highlights: [
                  "Quick Entry",
                  "Practical Training",
                  "Community Focus",
                  "Professional Skills",
                ],
                link: "/courses/dpharmacy",
                color: "#d97706",
              },
            ].map((course, index) => (
              <Card
                key={course.name}
                className="border-0 shadow-md transition-all duration-300 hover:shadow-lg animate-slide-up bg-white overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className="h-1"
                  style={{ backgroundColor: course.color }}
                ></div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {course.name}
                      </h3>
                      <p className="text-gray-600 text-xs">{course.fullName}</p>
                    </div>
                    <Badge className="bg-[#fea700]/10 text-[#fea700] border-[#fea700]/20 text-xs">
                      {course.duration}
                    </Badge>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {course.description}
                  </p>

                  <div className="mb-5">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                      Key Highlights:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {course.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#fea700] rounded-full"></div>
                          <span className="text-xs text-gray-600">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-[#fea700] hover:bg-[#e6960a] text-white text-sm py-2"
                  >
                    <Link href={course.link}>
                      Explore Course <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#fea700] hover:bg-[#e6960a] text-white px-6 py-3"
            >
              <Link href="/courses">
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section - Redesigned */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="border-l-4 border-[#fea700] pl-4 text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-[#fea700]">Achievements</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Celebrating milestones that reflect our commitment to excellence
              and student success
            </p>
          </div>

          <div className="mb-6">
            <p className="text-base text-gray-700 leading-relaxed">
              Our achievements are a testament to the dedication of our faculty,
              the hard work of our students, and our unwavering commitment to
              pharmaceutical education excellence. These milestones inspire us
              to continue pushing boundaries and setting new standards in
              healthcare education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                number: "104",
                label: "NIRF Ranking 2021",
                description: "Recognized among top institutions",
                icon: Award,
                color: "#fea700",
              },
              {
                number: "1000+",
                label: "Students Graduated",
                description: "Successfully placed in leading companies",
                icon: Users,
                color: "#f59e0b",
              },
              {
                number: "50+",
                label: "Industry Partners",
                description: "Strong network for placements",
                icon: Building,
                color: "#ea580c",
              },
            ].map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-md transition-all duration-300 hover:shadow-lg animate-slide-up bg-white group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-4 text-center relative overflow-hidden">
                    <div
                      className="absolute top-0 left-0 w-full h-1 transition-all duration-300 group-hover:h-2"
                      style={{ backgroundColor: achievement.color }}
                    ></div>
                    <div
                      className="p-2 rounded-full w-10 h-10 mx-auto mb-3 flex items-center justify-center"
                      style={{ backgroundColor: `${achievement.color}15` }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{ color: achievement.color }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {achievement.number}
                    </h3>
                    <Badge
                      className="mb-2 text-white border-0 text-xs"
                      style={{ backgroundColor: achievement.color }}
                    >
                      {achievement.label}
                    </Badge>
                    <p className="text-gray-600 text-xs">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="border-l-4 border-[#fea700] pl-4 text-3xl md:text-4xl font-bold mb-3">
              Our <span className="text-[#fea700]">Recruiters</span>
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              Leading pharmaceutical companies and healthcare organizations that
              trust our graduates
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <Card
                key={i}
                className="bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-300 hover:bg-white/10 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <img
                    src={`/placeholder.svg?height=60&width=100&query=pharmaceutical company logo ${i}`}
                    alt={`Recruiter ${i}`}
                    className="w-full h-12 object-contain filter brightness-0 invert"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
