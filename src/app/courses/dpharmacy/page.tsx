import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Award, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function DPharmacyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">D.Pharmacy</h1>
          <p className="text-xl text-blue-100 mb-6">Diploma in Pharmacy</p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>2 Years</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>Affiliated to PSBTE, Punjab</span>
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
                <p className="text-gray-600 text-lg leading-relaxed">
                  Diploma in pharmacy is a two-year diploma program that introduces students to the fundamental concepts
                  of pharmaceutical sciences. It is designed to train students for entry-level roles in pharmacy
                  practice and is the minimum qualification to become a registered pharmacist in India.
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
                  Pharmaceutical industry is very large one and India too has vast as well as growing pharmaceutical
                  industry. The number of hospitals, clinics and nursing homes are continuously increasing, so is the
                  demand of professionals of this field. One have reasonably good career in pharmacy. One can not only
                  do job but also can own pharmacy or chemists and druggists shop to stock and sell medicines and
                  dispense medicines according to doctor&apos;s prescription.
                </p>
              </CardContent>
            </Card>

            {/* Eligibility */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle className="text-2xl">Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Passed 10+2 examination with Physics and Chemistry as compulsory subjects and Biology/Mathematics as
                  optional subjects. Equivalent qualifications recognized by PCI are also accepted.
                </p>
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
                  <p className="text-gray-600">2 Years</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Affiliations & Approval</h4>
                  <p className="text-gray-600">Affiliated To PSBTE, Punjab</p>
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
                <p className="text-gray-600 mb-6">Download detailed fee structure for D.Pharmacy program</p>
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
                <p className="text-gray-600 mb-6">Start your career in pharmacy with our diploma program.</p>
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
