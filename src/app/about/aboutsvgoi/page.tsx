import React from "react";

const Page = () => {
  return (
    <>
      {/* First Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Half - Institute Information */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="border-l-4 border-[#fea700] text-3xl pl-4 md:text-4xl font-bold text-gray-900 mb-3">
                  About <span className="text-[#fea700]">SVGOI</span>
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Swami Vivekanand Group of Institutes, established in 2004, is
                  one of the leading educational groups in North India, located in
                  Banur, Punjab. The group is committed to providing quality
                  education, skill development, and holistic growth to students.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm text-justify">
                  SVGOI houses multiple colleges and departments offering{" "}
                  <span className="font-bold">
                    Engineering, Pharmacy, Management, Computer Applications,
                    Education, Law, Paramedical Sciences, Hotel Management and
                    Polytechnic programs.
                  </span>{" "}
                  The institutes are affiliated with{" "}
                  <span className="font-bold">
                    IKGPTU Jalandhar, MRSPTU Bathinda, PSBTE&IT and Punjabi
                    University Patiala,
                  </span>{" "}
                  and approved by{" "}
                  <span className="font-bold">
                    AICTE, PCI, and other statutory bodies.
                  </span>
                </p>

                <p className="text-gray-700 leading-relaxed text-sm text-justify">
                  The group emphasizes{" "}
                  <span className="font-bold">
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
            <div className="grid grid-cols-2 gap-4">
              {/* Main Large Image */}
              <div className="col-span-2">
                <img
                  src="https://www.sviet.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbannerImage.070729b1.jpg&w=1920&q=75"
                  alt="SVCP Campus"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>

              {/* Two Smaller Images */}
              <div>
                <img
                  src="https://www.sviet.org.in/_next/image?url=%2FHerosection%2F12.jpeg&w=3840&q=75"
                  alt="SVGOI Campus"
                  className="rounded-2xl shadow-md w-full h-40 object-cover"
                />
              </div>
              <div>
                <img
                  src="https://media.licdn.com/dms/image/v2/D5622AQGMNlIF3bFRug/feedshare-shrink_800/feedshare-shrink_800/0/1716264953480?e=2147483647&v=beta&t=SW5XSIq6sdr81MouNa4hePlOhhQM1-aka4kQ4bt3V5g"
                  alt="Students at SVGOI"
                  className="rounded-2xl shadow-md w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section with Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Half - Title & Description */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="border-l-4 border-[#fea700] text-3xl pl-4 md:text-4xl font-bold text-gray-900 mb-3">
                  Our <span className="text-[#fea700]">Gallery</span>
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  A glimpse into our vibrant campus life, modern infrastructure,
                  and student activities at SVGOI.
                </p>
              </div>
            </div>

            {/* Right Half - Gallery Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img
                  src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwjBF7PNYk5fvqY4IeSRsWVaAx69TnoMhpyLgF"
                  alt="Campus View"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div>
                <img
                  src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwFU07M8tMu1UwgfYlpenRs0ZdQEHGLJcr4oth"
                  alt="Classroom"
                  className="rounded-2xl shadow-md w-full h-40 object-cover"
                />
              </div>
              <div>
                <img
                  src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1Uw4zfeAmOBX0faVIbuKU7Ps5zpcOgxlwGjnmJ9"
                  alt="Students"
                  className="rounded-2xl shadow-md w-full h-40 object-cover"
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
