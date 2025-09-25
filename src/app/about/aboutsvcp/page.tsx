"use client";

import React, { useEffect, useState } from "react";
import { GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const Page = () => {
  const [currentManagement, setCurrentManagement] = useState(0);

  const managementTeam = [
    {
      name: "Sh. Ashwani Kumar Garg",
      position: "Chairman",
      image:
        "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwIAnMHO767QT5S3R9ugLVAoxje4IGbPqa1Clc",
      message:
        "I welcome every aspiring achiever to the Swami Vivekanand Group of Institutions. Today SVGOI has become a dream place to provide valuable educational experience to students, from different cultures and backgrounds. I am delighted to see the contributions, the students, faculty, and management of SVGOI have been making towards the overall success of students across the world. We have an interactive curriculum made to provide definite learning solutions in the field of Scientific studies, Medical studies, Arts, Business & Engineering. In this world known as a global village, all boundaries and the national borders are gradually becoming more transparent. Our international collaborations have helped students to form unlimited opportunities of global exposure for our students, to excel in their careers. So join your hands with SVGOI and be future-ready.",
    },
    {
      name: "Sh. Ashok Kumar Garg",
      position: "President",
      image:
        "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwRQi3i9XsDGPLe31wMSEvBqibVUpIy7AHKfYT",
      message:
        "SVGOI has experienced remarkable growth in recent years, earning widespread acclaim for its rapid advancement. Our journey from inception to our current standing is a testament to our unwavering dedication, exceptional faculty, and enriching learning environment. With a focus on quality education, we offer diverse programs affiliated with both national and international universities. We celebrate the achievements of our faculty, staff, and partners, employing modern teaching methods that empower students to realize their full potential. Emphasizing hands-on experience over mere theoretical knowledge, SVGOI is dedicated to providing practical solutions and fostering intellectual brilliance through research and development. Let's collaborate in building a skilled society together.",
    },
    {
      name: "Er. Vishal Garg",
      position: "Director Secretarial & Administration",
      image:
        "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwNlR77x0yoU2FaRhrYmBI0dQZTqL1vMlnXJei",
      message:
        "Efficient administration forms the backbone of a successful institution. We have an ecosystem in our college that values structure, discipline, and transparency. In the field of pharmacy, where accuracy and accountability are non-negotiable, our administrative foundation reflects these principles. We ensure that students experience a well-managed academic journey—supported by policies that promote fairness, respect, and responsibility at every level.",
    },
    {
      name: "Er. Sahil Garg",
      position: "Project Director",
      image:
        "https://urbanmelange.com/wp-content/uploads/2024/02/A37I9376-1200x1713.jpg",
      message:
        "Our commitment is to make quality pharmaceutical education affordable and purposeful. At our institution, from advanced laboratories to digitally enabled classrooms, every facility has been crafted to foster innovation and hands-on learning, helping students become confident, capable professionals in a rapidly advancing pharmaceutical world.",
    },
    {
      name: "Mr. Ankur Gupta",
      position: "Director Corporate Affairs",
      image:
        "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwxZa79p4Fz9vfNj7L5miX4SuQMexJhoPwragV",
      message:
        "Industry exposure is the bridge between education and employment. At SVCP, we strive to build partnerships that bring industry into the classroom and our students into the corporate world. Through internships, guest lectures, and career-oriented training, we ensure our students gain the practical insights and soft skills required to lead in a competitive world. We don't just prepare students for jobs—we prepare them for lifelong careers.",
    },
    {
      name: "Adv. Shubham Garg",
      position: "Director Placements",
      image:
        "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwaHStKpwGZoOXnzJfN1LIQeTcxtBpyg7Pb6EH",
      message:
        "Our responsibility goes beyond classroom education—it's about ensuring every student finds a path to a successful career. We work tirelessly to connect students with leading pharma companies, hospitals, and research institutions. Through career guidance, training modules, and placement drives, we help students translate their learning into impactful, purpose-driven careers.",
    },
    {
      name: "Prof. (Dr.) Sanjeev Saini",
      position: "Director Academics",
      image:
        "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uwk7o8CEBEhdiQ1fRaxNIe28lVAgo5KmY6qy3S",
      message:
        "Modern education must go beyond preparing students for jobs—it should equip them for lifelong learning, leadership, and meaningful contributions to society. Guided by this belief, Swami Vivekanand College of Pharmacy (SVCP) has built an academic ecosystem where knowledge meets innovation, and values shape vision. Since our establishment in 2005, we have embraced the evolving demands of industry and society, designing academic programs that are practical, relevant, and future-ready. Our academic philosophy places students at the heart of every initiative. Through well-structured curricular, outcome-based teaching, and the integration of modern technology, we equip our learners with the knowledge and skills needed to excel in a competitive global landscape. Our faculty members, serving as mentors and role models, guide students to cultivate professional competence alongside integrity and social responsibility. We complement classroom learning with experiential opportunities—ranging from research projects and industrial training to seminars, cultural fests, and global collaborations—ensuring a well-rounded growth experience. At SVCP, education is not merely about degrees; it is about transforming potential into achievement. We remain dedicated to producing graduates who are not only job-ready but also future leaders, innovators, and change-makers in their chosen fields.",
    },
    {
      name: "Mr. Himanshu Rao",
      position: "Registrar",
      image:
        "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwzyXzaXLn7CWOjAimtbzX4a35RNgJTxvedhHc",
      message:
        "Swami Vivekanand College of Pharmacy, an institution committed to academic excellence, innovation, and holistic development of students. At SVCP, we nurture future pharmacists with strong professional ethics, scientific knowledge, and practical skills, enabling them to contribute effectively to the healthcare sector. Guided by the vision of Swami Vivekanand Ji, we strive to instill values of discipline, dedication, and service to society. Our dedicated faculty, modern infrastructure, well-equipped laboratories, and a student-centric environment provide the perfect platform for young minds to excel in academics, research, and co-curricular activities. We aim to empower students not only to achieve professional success but also to become responsible citizens who can make a positive difference in the community.",
    },
  ];

  const nextManagement = () => {
    setCurrentManagement((prev) => (prev + 1) % managementTeam.length);
  };

  const prevManagement = () => {
    setCurrentManagement(
      (prev) => (prev - 1 + managementTeam.length) % managementTeam.length
    );
  };

  const member = managementTeam[currentManagement];

  return (
    <>
      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Half - Institute Information */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="border-l-4 border-[#fea700] text-3xl pl-4 md:text-4xl font-bold text-gray-900 mb-3">
                  About <span className="text-[#fea700]">SVCP</span>
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Discover our journey of excellence in pharmaceutical education
                  and our commitment to shaping future healthcare professionals.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm text-justify">
                  Swami Vivekanand College of Pharmacy (SVCP), established in
                  2005, stands as a premier institution under the Swami
                  Vivekanand Group of Institutes (SVGOI). We are committed to
                  delivering value-based education through innovative teaching
                  methods and hands-on training. As the oldest college of
                  pharmacy in the region, we offer comprehensive undergraduate
                  and postgraduate programs approved by the Pharmacy Council of
                  India (PCI) and affiliated with IKGPTU and PSBTE.
                </p>

                <p className="text-gray-700 leading-relaxed text-sm text-justify">
                  Our modern infrastructure, experienced faculty, and
                  industry-oriented curriculum prepare students for dynamic
                  careers in the global pharmaceutical landscape, ensuring they
                  meet the evolving demands of healthcare.
                </p>
              </div>
            </div>

            {/* Right Half - Image */}
            <div className="flex justify-center items-center">
              <img
                src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwMGSR1MjKT8yFRprHYOzIulXWf1a7xAmCbPhw"
                alt="SVCP Campus"
                className="rounded-xl aspect-square shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Desk of Management Section */}
      <section className="pt-10 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Desk of <span className="text-[#fea700]">Management</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Meet our visionary leadership team
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fea700] to-yellow-500 rounded mx-auto mt-6"></div>
          </div>

          <div className="relative overflow-hidden min-h-[550px] md:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentManagement}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                {/* Image Side */}
                <div className="w-full h-full">
                  <div className="relative group w-full h-[400px] md:h-[500px]">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover object-center rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                      <h3 className="text-lg font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-[#fea700] font-semibold text-sm">
                        {member.position}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex flex-col justify-center">
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 md:p-8 rounded-xl shadow-lg">
                    <div className="mb-6">
                      <div className="inline-flex items-center bg-[#fea700]/10 px-3 py-1 rounded-full mb-3">
                        <span className="text-[#fea700] font-semibold text-xs uppercase tracking-wider">
                          Message
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        From the {member.position}
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-[#fea700] to-yellow-500 rounded"></div>
                    </div>

                    <blockquote className="text-gray-600 text-base leading-relaxed italic border-l-4 border-[#fea700] pl-4 max-h-[200px] overflow-y-auto pr-2">
                      &quot;{member.message}&quot;
                    </blockquote>

                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex space-x-2">
                        <Button
                          onClick={prevManagement}
                          variant="outline"
                          size="icon"
                          className="border-[#fea700] text-[#fea700] hover:bg-[#fea700] hover:text-white bg-transparent transition-all duration-300 rounded-full"
                          aria-label="Previous message"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                          onClick={nextManagement}
                          variant="outline"
                          size="icon"
                          className="border-[#fea700] text-[#fea700] hover:bg-[#fea700] hover:text-white bg-transparent transition-all duration-300 rounded-full"
                          aria-label="Next message"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {managementTeam.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentManagement(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentManagement === index
                      ? "bg-[#fea700]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
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
                  src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumjPBSQDFEKYdovOsGfC3D9tNMk6nXaAzRVqy0"
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
                      <span className="text-[#fea700] font-semibold text-xs">
                        Academic Leadership
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Principal &apos;s Message
                    </h3>
                    <p className="text-[#fea700] font-semibold text-sm">
                      Prof. (Dr.) Sanjeev Mittal
                    </p>
                  </div>
                </div>

                <div className="text-gray-600 text-base leading-relaxed space-y-4 border-l-4 border-[#fea700] pl-6">
                  <p>
                    &quot;Our institution, inspired by the ideals of Swami
                    Vivekanand Ji, is dedicated to nurturing competent,
                    compassionate, and ethical pharmacy professionals who can
                    contribute meaningfully to society and the healthcare
                    sector.&quot;
                  </p>
                  <p>
                    &quot;At SVCP, we believe that education goes beyond
                    classrooms. Along with academic excellence, we focus on
                    research, innovation, and skill development to prepare our
                    students for the dynamic global pharmaceutical industry. Our
                    state-of-the-art laboratories, well-stocked library,
                    experienced faculty, and vibrant learning environment ensure
                    that every student has the right platform to explore, learn,
                    and excel.&quot;
                  </p>
                  <p>
                    &quot;We encourage our students to imbibe not only
                    professional knowledge but also values of integrity,
                    discipline, and social responsibility. Through co-curricular
                    and extracurricular activities, we strive to shape
                    well-rounded individuals who can adapt to challenges and
                    emerge as leaders in their chosen fields.&quot;
                  </p>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
