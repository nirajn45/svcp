"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", course: "", message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="hero-bg min-h-[80vh] flex items-center relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.shiksha.com/mediadata/images/1746170353phpCC94lo.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="absolute top-0 right-0 h-full w-2 bg-gradient-to-b from-orange-400 to-yellow-500 z-10"></div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 -rotate-90 text-orange-400 font-bold text-sm tracking-widest z-10">
          CONTACT US
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-white animate-slide-left max-w-4xl relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Get in touch with us for admissions, course information, and any
              inquiries about your academic journey
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;re here to help you with your academic journey. Reach
                out to us for admissions, course information, or any other
                queries.
              </p>
            </div>

            <div className="space-y-6">
              <Card
                className="card-hover animate-slide-up border-0 shadow-lg"
                style={{ animationDelay: "0.1s" }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">1800-120-1200</p>
                      <p className="text-gray-600">01762-507 888/222</p>
                      <p className="text-gray-600">+91-94652 33333</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="card-hover animate-slide-up border-0 shadow-lg"
                style={{ animationDelay: "0.2s" }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">Principal@svcp.org.in</p>
                      <p className="text-gray-600">hod@svcp.org.in</p>
                      <p className="text-gray-600">hr@svcp.org.in</p>
                      <p className="text-gray-600">registrar@svcp.org.in</p>
                      <p className="text-gray-600">iqac@svcp.org.in</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="card-hover animate-slide-up border-0 shadow-lg"
                style={{ animationDelay: "0.3s" }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        Swami Vivekanand College of Pharmacy
                        <br />
                        Chandigarh Patiala National Highway
                        <br />
                        Village- Ramnagar Near Banur
                        <br />
                        Tehsil- Rajpura, District- Patiala, Punjab
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="card-hover animate-slide-up border-0 shadow-lg"
                style={{ animationDelay: "0.4s" }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Office Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM
                      </p>
                      <p className="text-gray-600">
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="course"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Course of Interest
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="">Select a course</option>
                      <option value="bpharmacy">B.Pharmacy</option>
                      <option value="mpharmacy">M.Pharmacy</option>
                      <option value="pharmd">Pharm.D</option>
                      <option value="dpharmacy">D.Pharmacy</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your message or inquiry"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-3 text-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <Card className="animate-slide-up border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
              <CardTitle className="text-2xl">Find Us</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96 rounded-b-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.6174268276504!2d76.66908327536477!3d30.530636974682338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feda785d2ec5f%3A0x634727519e9f636!2sSwami%20Vivekanand%20Group%20of%20Institutes!5e1!3m2!1sen!2sin!4v1755540421357!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
