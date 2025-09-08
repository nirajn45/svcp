import React from "react";

const Page = () => {
  return (
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
                Discover our journey of excellence in pharmaceutical education and our commitment to shaping future healthcare professionals.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm text-justify">
                Swami Vivekanand College of Pharmacy (SVCP), established in 2005, stands as a premier institution under the Swami Vivekanand Group of Institutes (SVGOI). We are committed to delivering value-based education through innovative teaching methods and hands-on training.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm text-justify">
                As the oldest college of pharmacy in the region, we offer comprehensive undergraduate and postgraduate programs approved by the Pharmacy Council of India (PCI) and affiliated with IKGPTU and PSBTE.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm text-justify">
                Our modern infrastructure, experienced faculty, and industry-oriented curriculum prepare students for dynamic careers in the global pharmaceutical landscape, ensuring they meet the evolving demands of healthcare.
              </p>
            </div>
          </div>

          {/* Right Half - Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwMGSR1MjKT8yFRprHYOzIulXWf1a7xAmCbPhw"
              alt="SVCP Campus"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
