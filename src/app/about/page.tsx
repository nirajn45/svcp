"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const [currentManagement, setCurrentManagement] = useState(0)

  const managementTeam = [
    {
      name: "Sh. Ashwani Kumar Garg",
      position: "Chairman",
      image: "/placeholder.svg?height=600&width=500",
      message:
        "As Chairman of SVCP, I welcome you at SVCP Campus- one of the most innovative, dynamic and vibrant campus offering a wide range of undergraduate and postgraduate courses. At SVCP, we are guided by a mission to deliver education that transcends textbooks and transforms lives. I believe that true education shapes character, builds intellect, and instills the courage to lead. Our focus is on holistic education, preparing students for the challenges of a globalized world. With each passing year, we strengthen our resolve to create a legacy of excellence that empowers generations. Our commitment to excellence is reflected in the diverse student body, including foreign exchange students, enriching our campus culture.",
    },
    {
      name: "Sh. Ashok Kumar Garg",
      position: "President",
      image: "/placeholder.svg?height=600&width=500",
      message:
        "Education is the foundation of transformation. At SVCP, we strive to create a nurturing environment where young minds are encouraged to innovate, lead, and serve. Our commitment to academic rigor, discipline, and personal development enables students to emerge as responsible professionals ready to meet global standards.",
    },
    {
      name: "Er. Vishal Garg",
      position: "Director Secretarial & Administration",
      image: "/placeholder.svg?height=600&width=500",
      message:
        "Efficient administration forms the backbone of a successful institution. We have an ecosystem in our college that values structure, discipline, and transparency. In the field of pharmacy, where accuracy and accountability are non-negotiable, our administrative foundation reflects these principles. We ensure that students experience a well-managed academic journey—supported by policies that promote fairness, respect, and responsibility at every level.",
    },
    {
      name: "Er. Sahil Garg",
      position: "Project Director",
      image: "/placeholder.svg?height=600&width=500",
      message:
        "Our commitment is to make quality pharmaceutical education affordable and purposeful. At our institution, from advanced laboratories to digitally enabled classrooms, every facility has been crafted to foster innovation and hands-on learning, helping students become confident, capable professionals in a rapidly advancing pharmaceutical world.",
    },
    {
      name: "Mr. Ankur Gupta",
      position: "Director Corporate Affairs",
      image: "/placeholder.svg?height=600&width=500",
      message:
        "Industry exposure is the bridge between education and employment. At SVCP, we strive to build partnerships that bring industry into the classroom and our students into the corporate world. Through internships, guest lectures, and career-oriented training, we ensure our students gain the practical insights and soft skills required to lead in a competitive world. We don't just prepare students for jobs—we prepare them for lifelong careers.",
    },
    {
      name: "Adv. Shubham Garg",
      position: "Director Placements",
      image: "/placeholder.svg?height=600&width=500",
      message:
        "Our responsibility goes beyond classroom education—it's about ensuring every student finds a path to a successful career. We work tirelessly to connect students with leading pharma companies, hospitals, and research institutions. Through career guidance, training modules, and placement drives, we help students translate their learning into impactful, purpose-driven careers.",
    },
  ]

  const nextManagement = () => {
    setCurrentManagement((prev) => (prev + 1) % managementTeam.length)
  }

  const prevManagement = () => {
    setCurrentManagement((prev) => (prev - 1 + managementTeam.length) % managementTeam.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 h-full w-2 bg-gradient-to-b from-[#fea700] to-yellow-500"></div>
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 -rotate-90 text-[#fea700] font-bold text-xs tracking-widest">
          ABOUT US
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-white animate-slide-left max-w-3xl">
            <div className="inline-flex items-center bg-[#fea700]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <GraduationCap className="h-5 w-5 text-[#fea700] mr-2" />
              <span className="text-[#fea700] font-semibold text-sm">Excellence in Education</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              About <span className="text-[#fea700]">SVCP</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Learn about our history, mission, and unwavering commitment to excellence in pharmaceutical education
            </p>
          </div>
        </div>
      </section>

      {/* About SVCP */}
      <section className="py-12 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="animate-slide-left">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="SVCP Campus"
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#fea700] text-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">2005</div>
                    <div className="text-xs">Established</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="inline-flex items-center bg-[#fea700]/10 px-4 py-2 rounded-full mb-4">
                <Target className="h-4 w-4 text-[#fea700] mr-2" />
                <span className="text-[#fea700] font-semibold text-sm">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About <span className="text-[#fea700]">SVCP</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#fea700] to-yellow-500 rounded mb-6"></div>

              <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                <p>
                  Swami Vivekanand College of Pharmacy (SVCP), located in Banur, Punjab, is a premier institute under
                  the Swami Vivekanand Group of Institutes (SVGOI). Established in 2005 and approved by the Pharmacy
                  Council of India (PCI), SVCP is affiliated with IKGPTU and PSBTE.
                </p>
                <p>
                  SVCP is the oldest college of pharmacy in the region to offer undergraduate and postgraduate pharmacy
                  courses. The Institute is committed to delivering value-based education through innovative teaching
                  methods, strong emphasis on research, and hands-on training.
                </p>
                <p>
                  With modern infrastructure, experienced faculty, and an industry-oriented curriculum, we prepare
                  students for dynamic careers in the global pharmaceutical landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-[#fea700]/10 px-4 py-2 rounded-full mb-4">
              <Eye className="h-4 w-4 text-[#fea700] mr-2" />
              <span className="text-[#fea700] font-semibold text-sm">Our Foundation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vision & <span className="text-[#fea700]">Mission</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our guiding principles that shape the future of pharmaceutical education and innovation
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fea700] to-yellow-500 rounded mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#fea700] to-orange-400"></div>
              <CardContent className="p-8 relative">
                <div className="absolute top-6 right-6 opacity-10">
                  <Eye className="h-16 w-16 text-[#fea700]" />
                </div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-[#fea700]/20 to-orange-100 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="h-8 w-8 text-[#fea700]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
                    <div className="w-12 h-0.5 bg-[#fea700] rounded mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-600 text-base leading-relaxed relative z-10">
                  To be globally recognized as a center of excellence in pharmaceutical education, research, and
                  innovation, while fostering ethical values and global competencies in future healthcare professionals
                  for serving the society.
                </p>
                <div className="mt-6 flex items-center text-[#fea700] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <div className="ml-2 w-6 h-6 rounded-full bg-[#fea700]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#fea700]"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission Card */}
            <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up overflow-hidden" style={{ animationDelay: "0.2s" }}>
              <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <CardContent className="p-8 relative">
                <div className="absolute top-6 right-6 opacity-10">
                  <Target className="h-16 w-16 text-blue-500" />
                </div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
                    <div className="w-12 h-0.5 bg-blue-500 rounded mt-1"></div>
                  </div>
                </div>
                <ul className="text-gray-600 text-base leading-relaxed space-y-3 relative z-10">
                  <li className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#fea700] to-orange-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span>To inspire and empower students to become globally competent pharmacy professionals.</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span>To provide state-of-the-art infrastructure and research facilities for academic growth.</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span>To bridge the gap between academia and industry through experiential learning.</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span>To promote a culture of ethics, responsibility, and innovation in healthcare.</span>
                  </li>
                </ul>
                <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Goals</span>
                  <div className="ml-2 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Management Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-[#fea700]/10 px-4 py-2 rounded-full mb-4">
              <GraduationCap className="h-4 w-4 text-[#fea700] mr-2" />
              <span className="text-[#fea700] font-semibold text-sm">Leadership Excellence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Desk of <span className="text-[#fea700]">Management</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">Meet our visionary leadership team</p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fea700] to-yellow-500 rounded mx-auto mt-6"></div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
              {/* Image Side */}
              <div className="animate-slide-left">
                <div className="relative group">
                  <img
                    src={managementTeam[currentManagement].image || "/placeholder.svg"}
                    alt={managementTeam[currentManagement].name}
                    className="w-full h-[500px] object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900">{managementTeam[currentManagement].name}</h3>
                    <p className="text-[#fea700] font-semibold text-sm">{managementTeam[currentManagement].position}</p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="animate-slide-up">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl shadow-lg">
                  <div className="mb-6">
                    <div className="inline-flex items-center bg-[#fea700]/10 px-3 py-1 rounded-full mb-3">
                      <span className="text-[#fea700] font-semibold text-xs">Message</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {managementTeam[currentManagement].position}'s Message
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#fea700] to-yellow-500 rounded"></div>
                  </div>

                  <blockquote className="text-gray-600 text-base leading-relaxed italic border-l-4 border-[#fea700] pl-4">
                    "{managementTeam[currentManagement].message}"
                  </blockquote>

                  <div className="mt-8 flex items-center justify-between">
                    <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg">
                      <p className="font-bold text-gray-900 text-sm">{managementTeam[currentManagement].name}</p>
                      <p className="text-[#fea700] text-sm">{managementTeam[currentManagement].position}</p>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        onClick={prevManagement}
                        variant="outline"
                        size="sm"
                        className="border-[#fea700] text-[#fea700] hover:bg-[#fea700] hover:text-white bg-transparent transition-all duration-300"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={nextManagement}
                        variant="outline"
                        size="sm"
                        className="border-[#fea700] text-[#fea700] hover:bg-[#fea700] hover:text-white bg-transparent transition-all duration-300"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {managementTeam.map((member, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentManagement(index)}
                  className={`group relative transition-all duration-300 ${
                    currentManagement === index ? "w-12" : "w-3"
                  }`}
                >
                  <div
                    className={`h-3 rounded-full transition-all duration-300 ${
                      currentManagement === index 
                        ? "bg-gradient-to-r from-[#fea700] to-orange-400" 
                        : "bg-gray-300 group-hover:bg-gray-400"
                    }`}
                  ></div>
                  {currentManagement === index && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                      {member.position}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="animate-slide-left">
              <div className="relative group">
                <img
                  src="/placeholder.svg?height=500&width=400"
                  alt="Prof. (Dr.) Sanjeev Mittal"
                  className="w-full h-[500px] object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-[#fea700]/20 to-orange-100 p-4 rounded-2xl mr-4">
                    <GraduationCap className="h-8 w-8 text-[#fea700]" />
                  </div>
                  <div>
                    <div className="inline-flex items-center bg-[#fea700]/10 px-3 py-1 rounded-full mb-2">
                      <span className="text-[#fea700] font-semibold text-xs">Academic Leadership</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Principal's Message</h3>
                    <p className="text-[#fea700] font-semibold text-sm">Prof. (Dr.) Sanjeev Mittal</p>
                  </div>
                </div>

                <div className="text-gray-600 text-base leading-relaxed space-y-4 border-l-4 border-[#fea700] pl-6">
                  <p>
                    "Since 2005, as one of the pioneering educational groups in Punjab, SVCP has established a strong
                    brand identity in the field of pharmaceutical education. India's pharmaceutical sector is growing
                    fast, creating thousands of employment opportunities annually."
                  </p>
                  <p>
                    "At SVCP, we believe that every successful academic experience is backed by seamless operations. Our
                    systems are designed to reduce barriers and enhance the focus on learning, providing students and
                    faculty with efficient, transparent, and tech-enabled support."
                  </p>
                  <p>
                    "We regularly organize academic and extracurricular initiatives, including conferences, seminars,
                    workshops, guest lectures, and cultural activities to enhance intellectual growth and personality
                    development."
                  </p>
                </div>

                <div className="mt-6 flex items-center text-[#fea700] font-semibold text-sm">
                  <span>Read Full Message</span>
                  <div className="ml-2 w-6 h-6 rounded-full bg-[#fea700]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#fea700]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
