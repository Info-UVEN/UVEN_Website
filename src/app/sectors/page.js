"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import sectorsData from './sectorsData.js';
import { Public_Sans, Prompt } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300"], // choose what weights you need
});

const petch = Prompt({
  subsets: ["latin"],
  weight: ["400"], // pick what you need
  variable: "--font-chakra",
});


export default function SectorsScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  // Update active index based on scroll inside right column
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sections = container.querySelectorAll(".sector-section");
      let current = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        if (rect.top <= containerRect.top + containerRect.height / 2) {
          current = index;
        }
      });
      setActiveIndex(current);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-black">
      {/* Left Sticky Image */}
      <div className="w-full lg:w-1/2 lg:sticky lg:top-20 h-[calc(100vh-80px)] flex items-center justify-center p-10">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={sectorsData[activeIndex].img}
            alt={sectorsData[activeIndex].title}
            width={400}
            height={500}
            className="rounded-lg object-cover max-h-full max-w-full shadow-lg"
          />
        </div>
      </div>

      {/* Right Scrollable Content with full screen snapping */}
      <div
        ref={scrollRef}
        className={`w-full ${publicSans.className} lg:w-1/2 h-[calc(100vh-80px)] overflow-y-scroll snap-y snap-mandatory mt-8 mr-8`}
      >
        {sectorsData.map((sector, index) => (
          <section
            key={index}
            className="sector-section h-[calc(100vh-80px)] flex flex-col justify-start p-10 snap-start"
          >
            <h2 className={`text-3xl font-bold text-gray-300 ${petch.className}`}>
              {sector.title}
            </h2>
            <ul className="mt-5 text-lg text-gray-500 leading-relaxed space-y-4 list-disc pl-5">
              {sector.desc.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </section>

        ))}
      </div>
    </div>
  );
}
