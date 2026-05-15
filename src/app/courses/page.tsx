"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Users, Award, ArrowRight, GraduationCap, FlaskConical, Microscope } from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      id: "bpharmacy",
      name: "B.Pharmacy",
      fullName: "Bachelor of Pharmacy",
      duration: "4 Years",
      eligibility: "10+2 with PCM/PCB",
      description:
        "Comprehensive undergraduate program covering pharmaceutical sciences, drug discovery, development, and healthcare.",
      highlights: ["Industry Internships", "Research Projects", "Clinical Training", "Modern Laboratories"],
      color: "#F59E0B",
      icon: GraduationCap,
    },
    {
      id: "mpharmacy",
      name: "M.Pharmacy",
      fullName: "Master of Pharmacy (Pharmaceutics)",
      duration: "2 Years",
      eligibility: "B.Pharmacy degree",
      description: "Advanced postgraduate program focusing on specialized pharmaceutical research and development.",
      highlights: ["Research Excellence", "Advanced Techniques", "Publication Opportunities", "Industry Connect"],
      color: "#F59E0B",
      icon: Award,
    },
    {
      id: "pharmd",
      name: "Pharm.D",
      fullName: "Doctor of Pharmacy",
      duration: "6 Years",
      eligibility: "10+2 with PCM/PCB",
      description: "Professional doctorate program emphasizing clinical pharmacy practice and patient care.",
      highlights: ["Clinical Practice", "Hospital Rotations", "Patient Counseling", "Healthcare Leadership"],
      color: "#F59E0B",
      icon: Users,
    },
    {
      id: "dpharmacy",
      name: "D.Pharmacy",
      fullName: "Diploma in Pharmacy",
      duration: "2 Years",
      eligibility: "10+2 with PCM/PCB",
      description: "Foundational program providing essential pharmaceutical knowledge and practical skills.",
      highlights: ["Quick Entry", "Practical Training", "Community Focus", "Professional Skills"],
      color: "#F59E0B",
      icon: BookOpen,
    },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const },
  }

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15,
      },
    },
    viewport: { once: true },
  }

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Hero Section */}
      <section className="relative h-[60vh] text-white overflow-hidden group flex items-center">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" as const }}
            src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhO3zVPGrVkH31mdhcPLXwlWeNI6y5R04MUoDf" 
            alt="courses background"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/80 to-black/40"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center bg-[#F59E0B]/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-[#F59E0B]/30 shadow-sm">
              <GraduationCap className="h-5 w-5 text-[#F59E0B] mr-2" />
              <span className="text-[#F59E0B] font-semibold text-sm">Premium Education</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
              Our <span className="text-[#F59E0B]">Courses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              Comprehensive pharmaceutical education programs designed to meet the evolving demands of healthcare and
              prepare students for successful careers in the pharmaceutical industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-[#F59E0B]/10 px-4 py-2 rounded-full mb-4">
              <BookOpen className="h-4 w-4 text-[#F59E0B] mr-2" />
              <span className="text-[#F59E0B] font-semibold text-sm">Academic Excellence</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-6 tracking-tight">
              Academic <span className="text-[#F59E0B]">Programs</span>
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Choose from our comprehensive range of pharmacy programs, each designed to provide specialized knowledge
              and practical skills for your career advancement.
            </p>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto mt-6"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {courses.map((course) => {
              const Icon = course.icon
              return (
                <motion.div key={course.id} variants={fadeInUp}>
                  <Card
                    className="group border border-gray-100 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white rounded-2xl overflow-hidden h-full flex flex-col"
                  >
                    <div className="h-1.5 bg-[#F59E0B] transition-all duration-300 group-hover:h-2"></div>
                    <CardHeader className="bg-gradient-to-br from-white to-gray-50/50 group-hover:from-gray-50 group-hover:to-white transition-all duration-300 pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-xl bg-[#0F4C81]/5 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:bg-[#F59E0B]/10">
                            <Icon className="h-6 w-6 text-[#0F4C81] group-hover:text-[#F59E0B] transition-colors duration-300" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-bold text-[#0F4C81] group-hover:text-[#F59E0B] transition-colors tracking-tight">{course.name}</CardTitle>
                            <p className="text-gray-500 text-sm font-medium mt-1">{course.fullName}</p>
                          </div>
                        </div>
                        <div
                          className="px-3 py-1.5 rounded-lg text-white text-xs font-bold shadow-sm bg-[#0F4C81]"
                        >
                          {course.duration}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-2 flex-grow flex flex-col">
                      <div className="flex flex-wrap gap-3 mb-5">
                        <div className="flex items-center space-x-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg">
                          <Clock className="h-4 w-4 text-[#F59E0B]" />
                          <span className="text-xs font-semibold text-gray-600">{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg">
                          <BookOpen className="h-4 w-4 text-[#F59E0B]" />
                          <span className="text-xs font-semibold text-gray-600">{course.eligibility}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">{course.description}</p>

                      <div className="mb-8">
                        <h4 className="font-bold text-[#0F4C81] mb-3 text-sm uppercase tracking-wide">Key Highlights</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {course.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 shrink-0"></div>
                              <span className="text-sm font-medium text-gray-600 leading-tight">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button asChild className="w-full bg-[#F59E0B] hover:bg-[#d97706] text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 font-bold h-12">
                        <Link href={`/programs/${course.name === "M.Pharmacy" ? "M.Pharmacy-Pharmacology" : course.name}`}>
                          Learn More <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Research & Innovation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-[#F59E0B]/10 px-4 py-2 rounded-full mb-4">
              <FlaskConical className="h-4 w-4 text-[#F59E0B] mr-2" />
              <span className="text-[#F59E0B] font-semibold text-sm">Innovation Hub</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-6 tracking-tight">
              Research & <span className="text-[#F59E0B]">Innovation</span>
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Cutting-edge research facilities and opportunities that drive pharmaceutical innovation and discovery
            </p>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto mt-6"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Advanced Research Labs",
                description:
                  "State-of-the-art laboratories equipped with modern instruments for pharmaceutical research and drug development.",
                icon: FlaskConical,
                image: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhSVF7x6gkXizDmJxT0aBjLVsUr63F7G4Oev5K",
              },
              {
                title: "Clinical Research",
                description:
                  "Comprehensive clinical research programs focusing on drug safety, efficacy, and patient care optimization.",
                icon: Microscope,
                image: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhCjksPJAdUZEkx3JDvuRN8tSP2f5hLGVgpz7y",
              },
              {
                title: "Industry Collaboration",
                description:
                  "Strong partnerships with pharmaceutical companies for research projects and technology transfer initiatives.",
                icon: Award,
                image: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhJQYAi2Oymi2th8Iu3GUzrRV70wBqXWOvsblk",
              },
            ].map((facility, index) => {
              const Icon = facility.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card
                    className="group border border-gray-100 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white rounded-2xl overflow-hidden h-full flex flex-col"
                  >
                    <div className="relative overflow-hidden h-56">
                      <img
                        src={facility.image || "/placeholder.svg"}
                        alt={facility.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2.5 rounded-xl shadow-sm">
                        <Icon className="h-5 w-5 text-[#F59E0B]" />
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md shadow-sm">
                        <span className="text-xs font-bold text-[#0F4C81] tracking-wide uppercase">Research</span>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-[#0F4C81] mb-3 group-hover:text-[#F59E0B] transition-colors tracking-tight">{facility.title}</h3>
                      <p className="text-gray-500 leading-relaxed text-sm flex-grow">{facility.description}</p>
                      <div className="mt-6 flex items-center text-[#F59E0B] font-bold text-sm group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-1.5" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-[#F59E0B]/10 px-4 py-2 rounded-full mb-4">
              <Users className="h-4 w-4 text-[#F59E0B] mr-2" />
              <span className="text-[#F59E0B] font-semibold text-sm">Modern Facilities</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F4C81] mb-6 tracking-tight">
              World-Class <span className="text-[#F59E0B]">Infrastructure</span>
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Modern facilities and infrastructure designed to support comprehensive pharmaceutical education and
              research
            </p>
            <div className="w-24 h-1.5 bg-[#F59E0B] rounded-full mx-auto mt-6"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Modern Laboratories",
                description:
                  "Well-equipped labs with latest instruments and technology for hands-on learning and research.",
                icon: BookOpen,
                image: "https://www.sviet.ac.in/Courses/pharmacy/pharm/lab/practical.jpg",
                stats: "15+ Labs",
              },
              {
                title: "Digital Library",
                description:
                  "Comprehensive digital library with access to latest pharmaceutical literature and research databases.",
                icon: Award,
                image: "https://images.shiksha.com/mediadata/images/1674026405phpPWWGmA.jpeg",
                stats: "10,000+ Books",
              },
              {
                title: "Smart Classrooms",
                description:
                  "Technology-enabled classrooms with modern audio-visual equipment for interactive learning.",
                icon: Users,
                image: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh3GpffcXWcBCPbjL5ves4TuYMKaSJxRA8NGUp",
                stats: "20+ Rooms",
              },
            ].map((facility, index) => {
              const Icon = facility.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card
                    className="group border border-gray-100 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white rounded-2xl overflow-hidden h-full flex flex-col"
                  >
                    <div className="relative overflow-hidden h-56">
                      <img
                        src={facility.image || "/placeholder.svg"}
                        alt={facility.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2.5 rounded-xl shadow-sm">
                        <Icon className="h-5 w-5 text-[#F59E0B]" />
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-md shadow-sm">
                        <span className="text-xs font-bold tracking-wide uppercase">{facility.stats}</span>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-[#0F4C81] mb-3 group-hover:text-[#F59E0B] transition-colors tracking-tight">{facility.title}</h3>
                      <p className="text-gray-500 leading-relaxed text-sm flex-grow">{facility.description}</p>
                      <div className="mt-6 flex items-center text-[#F59E0B] font-bold text-sm group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                        <span>Explore</span>
                        <ArrowRight className="h-4 w-4 ml-1.5" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="text-center mt-16 flex justify-center"
          >
            <Button asChild size="lg" className="bg-[#F59E0B] hover:bg-[#d97706] text-white px-10 py-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-bold text-lg">
              <Link href="/infrastructure">
                Explore Infrastructure <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
