import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center">
          {/* Heading + Paragraph */}
          <div className="mb-6">
            <h2 className="border-l-4 border-[#fea700] text-3xl pl-4 md:text-4xl font-bold text-gray-900 mb-3">
              Affiliated <span className="text-[#fea700]">University</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Swami Vivekanand College of Pharmacy is{" "}
              <span className="font-bold">
                affiliated to I.K. Gujral Punjab Technical University (IKGPTU),
                Jalandhar.
              </span>
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "-Affiliation Letter 2021-22",
                link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhWwkBp1X8c7IBZyYbRd8MGlO2DUFtnKVSjPJW",
                color: "#fea700",
              },
              {
                name: "-Affiliation Letter 2022-23",
                link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhFvr6a6cpIAKRQlHguGwMsWTLz6OxPaYJdBjZ",
                color: "#f59e0b",
              },
              {
                name: "-Affiliation Letter 2023-24",
                link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhFQGsSgcpIAKRQlHguGwMsWTLz6OxPaYJdBjZ",
                color: "#ea580c",
              },
              {
                name: "-Affiliation Letter 2024-25",
                link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhMCaPGrSLfWmjN8kvzCgeG15rVcP9uqSyJhA4",
                color: "#d97706",
              },
              {
                name: "-Affiliation Letter 2025-26",
                link: "https://sm7p82l93d.ufs.sh/f/zpMFlB41AFrhUhjpM4ELDPe7fJQ0dYxH6AGR5kbzZvLr2T8m",
                color: "#d97706",
              },
            ].map((course, index) => (
              <Card
                key={course.name}
                className="border-0 shadow-md transition-all duration-300 hover:shadow-lg animate-slide-up bg-white overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className="h-1"
                  style={{ backgroundColor: course.color }}
                ></div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    SVCP{course.name}
                  </h3>
                  <Button
                    asChild={!!course.link}
                    disabled={!course.link}
                    className={`w-full text-sm py-2 ${
                      course.link
                        ? "bg-[#fea700] hover:bg-[#e6960a] text-white"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {course.link ? (
                      <Link
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    ) : (
                      <span>
                        Coming Soon <ArrowRight className="ml-2 h-3 w-3" />
                      </span>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
