import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  FlaskConical,
  Library,
  Presentation,
  Building2,
  Dumbbell,
  Coffee,
  Home,
  Bus,
  CreditCard,
} from "lucide-react"

export default function InfrastructurePage() {
  const facilities = [
    {
      title: "Classrooms",
      description:
        "SVCP offers well-furnished and fully ventilated classrooms designed to create a focused academic environment. The classrooms are spacious and equipped with projectors, audio-visual aids, and ergonomic seating.",
      icon: BookOpen,
      image: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwEsVAedRN98Yq5oMVpl3Pis7wxueh1Ofb0XF4",
      color: "orange",
    },
    {
      title: "Laboratories",
      description:
        "State-of-the-art laboratories fully equipped with modern apparatus and instruments, ensuring hands-on training in Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, and more.",
      icon: FlaskConical,
      image: "https://www.sviet.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDSC00544.6e2a8f2f.jpg&w=3840&q=75",
      color: "yellow",
    },
    {
      title: "Library",
      description:
        "Rich and resourceful library stocked with national and international books, journals, periodicals, and research publications. Digital library facility available for e-learning.",
      icon: Library,
      image: "https://www.sviet.ac.in/_next/static/media/library.50145328.jpg",
      color: "orange",
    },
    {
      title: "Auditorium & Seminar Halls",
      description:
        "Fully air-conditioned auditorium and well-equipped seminar halls hosting guest lectures, workshops, conferences, and cultural activities with multimedia technology.",
      icon: Presentation,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbhVI3vRMU4HWzZXf-A_HEgiuwKFsXAqdFKQ&s",
      color: "yellow",
    },
    {
      title: "Hospital Association",
      description:
        "Strong ties with reputed hospitals for Pharm.D and clinical training. Students receive practical exposure through hospital visits, internships, and live patient case studies.",
      icon: Building2,
      image: "https://pbs.twimg.com/media/FFHXqMJVQAEolEB.jpg:large",
      color: "orange",
    },
    {
      title: "Sports & Gymnasium",
      description:
        "Spacious playgrounds for cricket, football, basketball, and other sports, along with a modern gymnasium for health and fitness promoting holistic development.",
      icon: Dumbbell,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8YvPyGAfHWYK8PWNpGGbiV6Z0XkoqV-3iw&s",
      color: "yellow",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
<section
  className="relative h-[80vh] flex items-center justify-center bg-cover  "
  style={{
    backgroundImage:
      "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url('https://in5cdn.npfs.co/uploads/template/5151/3958/publish/images/DSC_6822-1-1536x1001.jpg')",
  }}
>
  <div className="absolute top-0 right-0 h-full w-2 bg-gradient-to-b from-[#fea700] to-yellow-500"></div>
  <div className="absolute top-1/2 right-6 transform -translate-y-1/2 -rotate-90 text-[#fea700] font-bold text-xs tracking-widest">
    INFRASTRUCTURE
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="text-white animate-slide-left max-w-3xl">
      <div className="inline-flex items-center bg-[#fea700]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
        <Building2 className="h-5 w-5 text-[#fea700] mr-2" />
        <span className="text-[#fea700] font-semibold text-sm">World-Class Facilities</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        Infrastructure & <span className="text-[#fea700]">Facilities</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
        World-class facilities designed to support your academic journey and holistic development
      </p>
    </div>
  </div>
</section>


      {/* Facilities Grid */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center bg-[#fea700]/10 px-4 py-2 rounded-full mb-4">
              <FlaskConical className="h-4 w-4 text-[#fea700] mr-2" />
              <span className="text-[#fea700] font-semibold text-sm">Premium Infrastructure</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#fea700]">Facilities</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
              State-of-the-art facilities designed to provide the best learning environment for pharmaceutical education
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fea700] to-yellow-500 rounded mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon
              const colorClasses = {
                orange: { bg: "bg-[#fea700]", light: "bg-[#fea700]/10", text: "text-[#fea700]" },
                yellow: { bg: "bg-yellow-500", light: "bg-yellow-100", text: "text-yellow-600" }
              }
              const colors = colorClasses[facility.color as keyof typeof colorClasses]
              
              return (
                <Card
                  key={index}
                  className="group border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-slide-up overflow-hidden bg-white"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className={`absolute top-4 left-4 ${colors.bg} p-2.5 rounded-xl shadow-sm`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-gray-700">Premium</span>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-[#fea700] transition-colors">{facility.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed text-sm">{facility.description}</p>
                    <div className="mt-4 flex items-center text-[#fea700] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                      <span>Explore</span>
                      <div className="ml-1 w-4 h-4 rounded-full bg-[#fea700]/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#fea700]"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center bg-[#fea700]/10 px-4 py-2 rounded-full mb-4">
              <Coffee className="h-4 w-4 text-[#fea700] mr-2" />
              <span className="text-[#fea700] font-semibold text-sm">Student Amenities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Campus <span className="text-[#fea700]">Life</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
              Comprehensive amenities to ensure a comfortable and enriching campus experience
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fea700] to-yellow-500 rounded mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cafeteria",
                description: "Hygienic and spacious cafeteria serving healthy and nutritious meals",
                icon: Coffee,
                color: "orange",
                stats: "24/7 Open"
              },
              {
                title: "Hostel Accommodation",
                description: "Separate, secure hostels for boys and girls with 24x7 security",
                icon: Home,
                color: "yellow",
                stats: "500+ Beds"
              },
              {
                title: "Transportation",
                description: "Fleet of buses covering major routes for comfortable travel",
                icon: Bus,
                color: "orange",
                stats: "15+ Routes"
              },
              {
                title: "ATM Facility",
                description: "On-campus ATM facility for daily banking needs",
                icon: CreditCard,
                color: "yellow",
                stats: "24/7 Access"
              },
            ].map((facility, index) => {
              const Icon = facility.icon
              const colorClasses = {
                orange: { bg: "bg-[#fea700]", light: "bg-[#fea700]/10", text: "text-[#fea700]", statsBg: "bg-[#fea700]" },
                yellow: { bg: "bg-yellow-500", light: "bg-yellow-100", text: "text-yellow-600", statsBg: "bg-yellow-500" }
              }
              const colors = colorClasses[facility.color as keyof typeof colorClasses]
              
              return (
                <Card
                  key={index}
                  className="group border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-slide-up text-center bg-white"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <div className={`${colors.light} p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-8 w-8 ${colors.text}`} />
                      </div>
                      <div className={`absolute -top-2 -right-2 ${colors.statsBg} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                        {facility.stats}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#fea700] transition-colors">{facility.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{facility.description}</p>
                    <div className="mt-4 flex items-center justify-center text-[#fea700] font-semibold text-sm group-hover:translate-y-1 transition-transform duration-300">
                      <span>Learn More</span>
                      <div className="ml-1 w-4 h-4 rounded-full bg-[#fea700]/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#fea700]"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center bg-[#fea700]/20 px-4 py-2 rounded-full mb-4">
              <Building2 className="h-4 w-4 text-[#fea700] mr-2" />
              <span className="text-[#fea700] font-semibold text-sm">By The Numbers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Infrastructure <span className="text-[#fea700]">Statistics</span>
            </h2>
            <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
              Our extensive infrastructure supports thousands of students in their academic journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50,000+", label: "Sq. Ft. Campus", icon: Building2 },
              { number: "25+", label: "Laboratories", icon: FlaskConical },
              { number: "15,000+", label: "Library Books", icon: Library },
              { number: "500+", label: "Hostel Beds", icon: Home },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="bg-[#fea700]/20 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#fea700]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{stat.number}</h3>
                    <p className="text-gray-300 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
