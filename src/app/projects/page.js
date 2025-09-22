"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import projectsData from "./projectsData.js";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function ProjectsPortfolio() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center pt-28 px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 text-center">
        PROJECTS PORTFOLIO
      </h1>

      {projectsData.map((category, catIdx) => (
        <div key={catIdx} className="w-full max-w-[1400px] mb-16">
          {/* Category Heading */}
          <h3
            className={`${montserrat.className} font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mb-10 text-center`}
          >
            {category.category}
          </h3>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center w-full">
            {category.projects.map((proj, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-black rounded-md shadow-md overflow-hidden w-full max-w-xs"
              >
                {/* Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bottom Info Section */}
                <div className="w-full bg-black text-white flex flex-col items-center py-3 px-3">
                  {/* Title */}
                  <h3
                    className={`${montserrat.className} text-base sm:text-sm md:text-base font-medium mb-2 text-center`}
                  >
                    {proj.title}
                  </h3>

                  {/* Location with icon */}
                  {proj.link ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-white"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>{proj.location || "No access"}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-1 text-sm text-white">
                      <MapPin className="w-4 h-4" />
                      <span>{proj.location || "No access"}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="pb-16" />
    </div>
  );
}
