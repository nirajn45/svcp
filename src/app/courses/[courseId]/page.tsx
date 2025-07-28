import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Award, ArrowLeft, Download, Users, Target } from "lucide-react"
import Link from "next/link"

const courseDetails = {
  bpharmacy: {
    name: "B.Pharmacy",
    fullName: "Bachelor of Pharmacy",
    duration: "4 Years (8 Semesters)",
    eligibility: "10+2 with Physics, Chemistry, Mathematics/Biology",
    color: "#fea700",
    description:
      "The Bachelor of Pharmacy (B.Pharmacy) is a comprehensive 4-year undergraduate program designed to provide students with in-depth knowledge of pharmaceutical sciences, drug development, and healthcare systems.",
    curriculum: [
      "Pharmaceutical Chemistry",
      "Pharmacology",
      "Pharmaceutics",
      "Pharmacognosy",
      "Clinical Pharmacy",
      "Hospital Pharmacy",
      "Community Pharmacy",
      "Pharmaceutical Jurisprudence",
    ],
    careerOpportunities: [
      "Hospital Pharmacist",
      "Community Pharmacist",
      "Pharmaceutical Industry",
      "Drug Regulatory Affairs",
      "Research & Development",
      "Academic Career",
    ],
  },
  mpharmacy: {
    name: "M.Pharmacy",
    fullName: "Master of Pharmacy (Pharmaceutics)",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Pharmacy degree with minimum 55% marks",
    color: "#f59e0b",
    description:
      "The Master of Pharmacy (M.Pharmacy) is an advanced 2-year postgraduate program focusing on specialized areas of pharmaceutical sciences and research methodologies.",
    curriculum: [
      "Advanced Pharmaceutical Chemistry",
      "Clinical Research",
      "Drug Design & Development",
      "Pharmaceutical Analysis",
      "Regulatory Affairs",
      "Pharmacovigilance",
      "Research Methodology",
      "Dissertation Work",
    ],
    careerOpportunities: [
      "Research Scientist",
      "Quality Control Manager",
      "Regulatory Affairs Officer",
      "Clinical Research Associate",
      "Academic Researcher",
      "Pharmaceutical Consultant",
    ],
  },
  pharmd: {
    name: "Pharm.D",
    fullName: "Doctor of Pharmacy",
    duration: "6 Years (Including Internship)",
    eligibility: "10+2 with Physics, Chemistry, Biology",
    color: "#ea580c",
    description:
      "The Doctor of Pharmacy (Pharm.D) is a professional doctorate program focusing on clinical pharmacy practice, patient care, and healthcare leadership.",
    curriculum: [
      "Clinical Pharmacology",
      "Therapeutics",
      "Patient Counseling",
      "Clinical Pharmacy Practice",
      "Hospital Pharmacy Management",
      "Pharmacoeconomics",
      "Clinical Research",
      "Clerkship Rotations",
    ],
    careerOpportunities: [
      "Clinical Pharmacist",
      "Hospital Pharmacy Director",
      "Pharmaceutical Care Specialist",
      "Drug Information Specialist",
      "Healthcare Consultant",
      "Academic Clinical Faculty",
    ],
  },
  dpharmacy: {
    name: "D.Pharmacy",
    fullName: "Diploma in Pharmacy",
    duration: "2 Years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics/Biology",
    color: "#d97706",
    description:
      "The Diploma in Pharmacy (D.Pharmacy) is a foundational 2-year program providing essential knowledge and practical skills in pharmaceutical practice and community pharmacy.",
    curriculum: [
      "Pharmaceutical Chemistry",
      "Pharmacognosy",
      "Pharmacology",
      "Pharmaceutics",
      "Community Pharmacy",
      "Hospital Pharmacy",
      "Drug Store Management",
      "Pharmaceutical Jurisprudence",
    ],
    careerOpportunities: [
      "Community Pharmacist",
      "Drug Store Manager",
      "Pharmaceutical Sales",
      "Medical Representative",
      "Drug Inspector",
      "Quality Control Assistant",
    ],
  },
}

interface PageProps {
  params: Promise<{ courseId: string }>
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { courseId } = await params
  const course = courseDetails[courseId as keyof typeof courseDetails]

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] text-white overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumGkFk3XIoeyaO1d7xYQMuBsK0zrR9WmSiLvEN" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative w-full h-full flex items-center py-12 bg-black bg-opacity-60">
          <div className="w-10/12 mx-auto">
            <div className="max-w-4xl">
              <div className="mb-8">
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  <Link href="/courses">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Courses
                  </Link>
                </Button>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-left">
                <span style={{ color: course.color }}>{course.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed animate-slide-left mb-6">
                {course.fullName}
              </p>
              <div className="flex flex-wrap gap-6 animate-slide-left">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" style={{ color: course.color }} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" style={{ color: course.color }} />
                  <span>Affiliated to IKGPTU, Jalandhar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5" style={{ color: course.color }} />
                  <span>Approved by PCI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="border-0 shadow-lg animate-slide-up bg-white">
              <CardHeader>
                <div className="border-l-4 pl-4" style={{ borderColor: course.color }}>
                  <CardTitle className="text-2xl">Program Overview</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">{course.description}</p>
              </CardContent>
            </Card>

            {/* Curriculum */}
            <Card className="border-0 shadow-lg animate-slide-up bg-white" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="border-l-4 pl-4" style={{ borderColor: course.color }}>
                  <CardTitle className="text-2xl">Curriculum Highlights</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.curriculum.map((subject, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <BookOpen className="h-4 w-4 flex-shrink-0" style={{ color: course.color }} />
                      <span className="text-gray-700">{subject}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Opportunities */}
            <Card className="border-0 shadow-lg animate-slide-up bg-white" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <div className="border-l-4 pl-4" style={{ borderColor: course.color }}>
                  <CardTitle className="text-2xl">Career Opportunities</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.careerOpportunities.map((career, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg"
                      style={{ backgroundColor: `${course.color}10` }}
                    >
                      <Award className="h-4 w-4 flex-shrink-0" style={{ color: course.color }} />
                      <span className="text-gray-700">{career}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="border-0 shadow-lg animate-slide-up bg-white" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="border-l-4 pl-4" style={{ borderColor: course.color }}>
                  <CardTitle>Quick Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Duration</h4>
                  <p className="text-gray-600">{course.duration}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Eligibility</h4>
                  <p className="text-gray-600">{course.eligibility}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mode</h4>
                  <p className="text-gray-600">Full-time</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Affiliations & Approval</h4>
                  <p className="text-gray-600">Affiliated To IKGPTU, Jalandhar</p>
                  <p className="text-gray-600">Approved by PCI</p>
                </div>
              </CardContent>
            </Card>

            {/* Download Fee Structure */}
            <Card className="border-0 shadow-lg animate-slide-up bg-white" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 mx-auto mb-4" style={{ color: course.color }} />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fee Structure</h3>
                <p className="text-gray-600 mb-6">Download detailed fee structure for {course.name} program</p>
                <Button className="w-full text-white" style={{ backgroundColor: course.color }}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Fee Structure
                </Button>
              </CardContent>
            </Card>

            {/* Apply Now */}
            <Card className="border-0 shadow-lg animate-slide-up bg-white" style={{ animationDelay: "0.5s" }}>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4" style={{ color: course.color }} />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Apply?</h3>
                <p className="text-gray-600 mb-6">Start your journey in pharmaceutical sciences with us.</p>
                <Button asChild className="w-full text-white" style={{ backgroundColor: course.color }}>
                  <Link href="/contact">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
