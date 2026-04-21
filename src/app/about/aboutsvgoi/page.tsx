"use client";

import React from "react";

const Page = () => {
  return (
    <>
      {/* First Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Half - Institute Information */}
            <div className="flex flex-col justify-center opacity-0 translate-y-6 animate-[fadeInLeft_0.6s_ease-out_forwards]">
              <div className="mb-8">
                <h2 className="border-l-4 border-[#fea700] text-4xl pl-6 md:text-5xl font-bold text-gray-900 mb-4">
                  About <span className="text-[#fea700]">SVGOI</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Swami Vivekanand Group of Institutes, established in 2004, is
                  one of the leading educational groups in North India, located in
                  Banur, Punjab. The group is committed to providing quality
                  education, skill development, and holistic growth to students.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  SVGOI houses multiple colleges and departments offering{" "}
                  <span className="font-bold text-gray-900">
                    Engineering, Pharmacy, Management, Computer Applications,
                    Education, Law, Paramedical Sciences, Hotel Management and
                    Polytechnic programs.
                  </span>{" "}
                  The institutes are affiliated with{" "}
                  <span className="font-bold text-gray-900">
                    IKGPTU Jalandhar, MRSPTU Bathinda, PSBTE&IT and Punjabi
                    University Patiala,
                  </span>{" "}
                  and approved by{" "}
                  <span className="font-bold text-gray-900">
                    AICTE, PCI, and other statutory bodies.
                  </span>
                </p>

                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  The group emphasizes{" "}
                  <span className="font-bold text-gray-900">
                    academic excellence, industry-oriented training, research &
                    innovation, and co-curricular development.
                  </span>{" "}
                  With modern infrastructure, well-equipped laboratories,
                  libraries, hostels, and strong placement support, SVGOI prepares
                  students for global opportunities.
                </p>
              </div>
            </div>

            {/* Right Half - Image Collage */}
            <div className="grid grid-cols-2 gap-6 opacity-0 translate-y-6 animate-[fadeInRight_0.6s_ease-out_forwards] animation-delay-[0.2s]">
              {/* Main Large Image */}
              <div className="col-span-2">
                <img
                  src="https://www.sviet.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbannerImage.070729b1.jpg&w=1920&q=75"
                  alt="SVCP Campus"
                  className="rounded-3xl shadow-2xl w-full h-62 md:h-75 object-cover hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Two Smaller Images */}
              <div>
                <img
                  src="https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrh282XyUBQhouO4sXci71GvtEdxUSqLIHy5RYD"
                  alt="SVGOI Campus"
                  className="rounded-2xl shadow-xl w-full h-32.5 md:h-37.5 object-cover hover:scale-105 transition-all duration-500"
                />
              </div>
              <div>
                <img
                  src="https://media.licdn.com/dms/image/v2/D5622AQGMNlIF3bFRug/feedshare-shrink_800/feedshare-shrink_800/0/1716264953480?e=2147483647&v=beta&t=SW5XSIq6sdr81MouNa4hePlOhhQM1-aka4kQ4bt3V5g"
                  alt="Students at SVGOI"
                  className="rounded-2xl shadow-xl w-full h-32.5 md:h-37.5 object-cover hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section with Gallery */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Content */}
            <div className="flex flex-col space-y-8 max-w-md opacity-0 translate-y-6 animate-[fadeInLeft_0.6s_ease-out_forwards]">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-[#fea700]">
                  Campus Life
                </span>
                <h2 className="border-l-4 border-[#fea700] text-4xl pl-6 md:text-5xl font-bold text-gray-900 mt-4 mb-4">
                  Our <span className="text-[#fea700]">Gallery</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A glimpse into our vibrant campus life, modern infrastructure,
                  and student activities at SVGOI.
                </p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                From state-of-the-art classrooms to lush green grounds, our
                campus is designed to inspire. Explore the spaces where
                students learn, grow, and create lasting memories.
              </p>

              {/* Highlight Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { value: "20+", label: "Acres Campus" },
                  { value: "15+", label: "Departments" },
                  { value: "10000+", label: "Alumni" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-[#fea700]/50 transition-all duration-300"
                  >
                    <p className="text-2xl font-extrabold text-[#0F4C81]">{value}</p>
                    <p className="text-sm text-gray-500 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image Grid */}
            <div className="grid grid-cols-2 gap-6 opacity-0 translate-y-6 animate-[fadeInRight_0.6s_ease-out_forwards] animation-delay-[0.2s]">
              {/* Top full-width image */}
              <div className="col-span-2">
                <img
                  src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwjBF7PNYk5fvqY4IeSRsWVaAx69TnoMhpyLgF"
                  alt="Campus View"
                  className="w-full h-62 md:h-75 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500"
                />
              </div>
              {/* Bottom two images */}
              <div>
                <img
                  src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwFU07M8tMu1UwgfYlpenRs0ZdQEHGLJcr4oth"
                  alt="Classroom"
                  className="w-full h-37.5 md:h-45 object-cover rounded-2xl shadow-xl hover:scale-105 transition-all duration-500"
                />
              </div>
              <div>
                <img
                  src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uw4zfeAmOBX0faVIbuKU7Ps5zpcOgxlwGjnmJ9"
                  alt="Students"
                  className="w-full h-37.5 md:h-45 object-cover rounded-2xl shadow-xl hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
