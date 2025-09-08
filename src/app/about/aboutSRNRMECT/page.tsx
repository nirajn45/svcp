import React from "react";

const Page = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Half - Institute Information */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="border-l-4 border-[#fea700] text-3xl pl-4 md:text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-[#fea700]">SRNRMECT</span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mt-6">
                The Shri Raghunath Rai Memorial Educational & Charitable Trust (Regd.) was established on 29 September 2003 as a non-government trust in Mohali (SAS Nagar), Punjab, under the Societies Registration Act. It focuses on education, literacy, and vocational training, particularly serving areas all over the Punjab.
              </p>
            </div>
          </div>

          {/* Right Half - Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMn84SFC2_F7ufJs3MOFPmxtNTQZfThXV3hHzBX-H3JHeUWAMyUpt3xmahuwT1-Xspgbs&usqp=CAU"
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
