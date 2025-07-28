import Link from "next/link"
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
      color: "#fea700",
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
      color: "#f59e0b",
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
      color: "#ea580c",
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
      color: "#d97706",
      icon: BookOpen,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] text-white overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumGkFk3XIoeyaO1d7xYQMuBsK0zrR9WmSiLvEN" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative w-full h-full flex items-center py-12 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center bg-[#fea700]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <GraduationCap className="h-5 w-5 text-[#fea700] mr-2" />
                <span className="text-[#fea700] font-semibold text-sm">Premium Education</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-slide-left">
                Our <span className="text-[#fea700]">Courses</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed animate-slide-left mb-6">
                Comprehensive pharmaceutical education programs designed to meet the evolving demands of healthcare and
                prepare students for successful careers in the pharmaceutical industry.
              </p>
              <div className="flex gap-4 animate-slide-left">
                <Button className="bg-[#fea700] hover:bg-[#e6960a] text-white px-6 py-3">
                  Explore Programs
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 bg-transparent"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#fea700]/10 px-4 py-2 rounded-full mb-4">
              <BookOpen className="h-4 w-4 text-[#fea700] mr-2" />
              <span className="text-[#fea700] font-semibold text-sm">Academic Excellence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic <span className="text-[#fea700]">Programs</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Choose from our comprehensive range of pharmacy programs, each designed to provide specialized knowledge
              and practical skills for your career advancement.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fea700] to-yellow-500 rounded mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon
              return (
                <Card
                  key={course.id}
                  className="group border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-slide-up bg-white overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="h-1 bg-gradient-to-r transition-all duration-300 group-hover:h-2" style={{ background: `linear-gradient(90deg, ${course.color}, ${course.color}80)` }}></div>
                  <CardHeader className="bg-gradient-to-br from-white to-gray-50 group-hover:from-gray-50 group-hover:to-white transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-all duration-300" style={{ backgroundColor: `${course.color}15` }}>
                          <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" style={{ color: course.color }} />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">{course.name}</CardTitle>
                          <p className="text-gray-600 text-sm">{course.fullName}</p>
                        </div>
                      </div>
                      <div
                        className="px-3 py-1 rounded-full text-white text-xs font-semibold shadow-sm"
                        style={{ backgroundColor: course.color }}
                      >
                        {course.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1 rounded-full">
                        <Clock className="h-3 w-3" style={{ color: course.color }} />
                        <span className="text-xs font-medium text-gray-600">{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1 rounded-full">
                        <BookOpen className="h-3 w-3" style={{ color: course.color }} />
                        <span className="text-xs font-medium text-gray-600">{course.eligibility}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">{course.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {course.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: course.color }}></div>
                            <span className="text-xs text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="w-full text-white group-hover:shadow-lg transition-all duration-300" style={{ backgroundColor: course.color }}>
                      <Link href={`/courses/${course.id}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research & Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#fea700]/10 px-4 py-2 rounded-full mb-4">
              <FlaskConical className="h-4 w-4 text-[#fea700] mr-2" />
              <span className="text-[#fea700] font-semibold text-sm">Innovation Hub</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research & <span className="text-[#fea700]">Innovation</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Cutting-edge research facilities and opportunities that drive pharmaceutical innovation and discovery
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fea700] to-yellow-500 rounded mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Research Labs",
                description:
                  "State-of-the-art laboratories equipped with modern instruments for pharmaceutical research and drug development.",
                icon: FlaskConical,
                image: "/placeholder.svg?height=300&width=400",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                title: "Clinical Research",
                description:
                  "Comprehensive clinical research programs focusing on drug safety, efficacy, and patient care optimization.",
                icon: Microscope,
                image: "/placeholder.svg?height=300&width=400",
                gradient: "from-green-500 to-teal-600"
              },
              {
                title: "Industry Collaboration",
                description:
                  "Strong partnerships with pharmaceutical companies for research projects and technology transfer initiatives.",
                icon: Award,
                image: "/placeholder.svg?height=300&width=400",
                gradient: "from-[#fea700] to-red-500"
              },
            ].map((facility, index) => {
              const Icon = facility.icon
              return (
                <Card
                  key={index}
                  className="group border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-slide-up bg-white overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${facility.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm">
                      <Icon className="h-5 w-5 text-[#fea700]" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-gray-700">Research</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#fea700] transition-colors">{facility.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{facility.description}</p>
                    <div className="mt-4 flex items-center text-[#fea700] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#fea700]/10 px-4 py-2 rounded-full mb-4">
              <Users className="h-4 w-4 text-[#fea700] mr-2" />
              <span className="text-[#fea700] font-semibold text-sm">Modern Facilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class <span className="text-[#fea700]">Infrastructure</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Modern facilities and infrastructure designed to support comprehensive pharmaceutical education and
              research
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fea700] to-yellow-500 rounded mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Laboratories",
                description:
                  "Well-equipped labs with latest instruments and technology for hands-on learning and research.",
                icon: BookOpen,
                image: "/placeholder.svg?height=300&width=400",
                stats: "15+ Labs",
                color: "bg-blue-500"
              },
              {
                title: "Digital Library",
                description:
                  "Comprehensive digital library with access to latest pharmaceutical literature and research databases.",
                icon: Award,
                image: "/placeholder.svg?height=300&width=400",
                stats: "10,000+ Books",
                color: "bg-green-500"
              },
              {
                title: "Smart Classrooms",
                description:
                  "Technology-enabled classrooms with modern audio-visual equipment for interactive learning.",
                icon: Users,
                image: "/placeholder.svg?height=300&width=400",
                stats: "20+ Rooms",
                color: "bg-purple-500"
              },
            ].map((facility, index) => {
              const Icon = facility.icon
              return (
                <Card
                  key={index}
                  className="group border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-slide-up bg-white overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm">
                      <Icon className="h-5 w-5 text-[#fea700]" />
                    </div>
                    <div className={`absolute bottom-4 left-4 ${facility.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {facility.stats}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#fea700] transition-colors">{facility.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{facility.description}</p>
                    <div className="mt-4 flex items-center text-[#fea700] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                      <span>Explore</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#fea700] hover:bg-[#e6960a] text-white px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/infrastructure">
                Explore Infrastructure <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
