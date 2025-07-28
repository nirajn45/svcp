import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Swami Vivekanand College of Pharmacy</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Promoted By: Shri Raghunath Rai Memorial Educational & Charitable Trust
            </p>
            <p className="text-gray-300 mb-4 text-sm">
              Chandigarh Patiala-National Highway, Village- Ramnagar Near Banur, Tehsil- Rajpura, District- Patiala
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="https://uj.servergi.com:8079/ISIMSVIET/login" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Student ERP Login
                </a>
              </li>
              <li>
                <a href="https://uj.servergi.com:8079/SIMWEBSVIET/Login" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Faculty ERP Login
                </a>
              </li>
            </ul>
          </div>

          {/* Committees */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Committees</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  SC/ST Committee
                </a>
              </li>
              <li>
                <a href="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumZaZfSp8nLS41ZsWrz2yX9qNdG5vVC7FuBlfa" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Anti-Ragging Committee
                </a>
              </li>
              <li>
                <a href="" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Grievance Redressal Committee
                </a>
              </li>
              <li>
                <a href="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumin6L7sfb2az8t64xBvVQ3dyjGgHlh7Y0fDTo" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Internal Complaint Committee
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Women Helpline
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Women Grievances Cell
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <div>
                  <p className="text-gray-300 text-sm">1800-120-1200</p>
                  <p className="text-gray-300 text-sm">01762-507 888/222</p>
                  <p className="text-gray-300 text-sm">+91-94652 33333</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">info@sviet.org.in</p>
                  <p className="text-gray-300 text-sm">admission@sviet.org.in</p>
                  <p className="text-gray-300 text-sm">hr@sviet.org.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  Chandigarh Patiala National Highway, Village- Ramnagar Near Banur, Tehsil- Rajpura, District- Patiala,
                  Punjab
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2024 Swami Vivekanand College of Pharmacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
