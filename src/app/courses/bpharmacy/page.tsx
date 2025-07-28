import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Award, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function BPharmacyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Link>
          </Button>
        </div>

        {/* Course Header */}
        <div className="gradient-bg text-white rounded-lg p-8 mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">B.Pharmacy</h1>
          <p className="text-xl text-blue-100 mb-6">Bachelor of Pharmacy</p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>4 Years</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>Affiliated to IKGPTU, Jalandhar</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span>Approved by PCI</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About the Course */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl">About The Course</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Bachelor of Pharmacy or B.Pharm course is a four-year undergraduate programme. In this course,
                  students are imparted comprehensive knowledge about the pharmaceutical industry, which largely deals
                  with the development, production and marketing of drugs/medicines. It is closely related to medical
                  science.
                </p>
              </CardContent>
            </Card>

            {/* Career Prospects */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="text-2xl">Career Prospects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  The pharmaceutical industry in India opens up wide range of career opportunities for the young
                  aspirants. After B. Pharmacy course, students are offered various employment opportunities in the
                  government and public sector. They can open their own pharmacy stores by registering themselves under
                  State Pharmacy Council.
                </p>
                <p className="text-gray-600 mb-4">
                  After doing B.Pharm course, one can also go into the field of pharmaceutical consulting, education and
                  academia, industrial pharmacy, medical publishing or research and development in pharmaceutical
                  industry.
                </p>
                <h4 className="font-semibold text-gray-900 mb-3">Job opportunities include:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Pharmacist",
                    "Drug Therapist",
                    "Hospital Drug Coordinator",
                    "Health Inspector",
                    "Preparing Prescription to Patients",
                    "Drug Inspector",
                    "Chemical / Drug Technician",
                    "Research Officer",
                    "Pathological Lab",
                    "R&D",
                    "Scientist",
                    "Bio-tech Industries",
                  ].map((career, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Award className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{career}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Eligibility */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle className="text-2xl">Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    • Must have passed 10+2 examination by a respective state/central government authorities recognized
                    as equivalent to 10+2 examination by the Association of Indian Universities (AIU)
                  </li>
                  <li>• English as one of the subjects</li>
                  <li>
                    • Physics, Chemistry, Mathematics (P.C.M) and/or Biology (P.C.B/P.C.M.B.) as optional subjects
                    individually
                  </li>
                  <li>
                    • Any other qualification approved by the Pharmacy Council of India as equivalent to any of the
                    above examinations
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>Quick Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Duration</h4>
                  <p className="text-gray-600">4 Years</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Affiliations & Approval</h4>
                  <p className="text-gray-600">Affiliated To IKGPTU, Jalandhar</p>
                  <p className="text-gray-600">Approved by PCI</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mode of Admission</h4>
                  <p className="text-gray-600">Merit or entrance exams conducted by the institution</p>
                </div>
              </CardContent>
            </Card>

            {/* Download Fee Structure */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fee Structure</h3>
                <p className="text-gray-600 mb-6">Download detailed fee structure for B.Pharmacy program</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Fee Structure
                </Button>
              </CardContent>
            </Card>

            {/* Apply Now */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Apply?</h3>
                <p className="text-gray-600 mb-6">Start your journey in pharmaceutical sciences with us.</p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
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
