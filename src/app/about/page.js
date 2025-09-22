"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export default function About() {
  return (
    <main className="relative w-full">
      {/* Universal Grid for Landscape + Desktop */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 w-full min-h-screen landscape:grid-cols-2">
        {/* Left Section - Text */}
        <div className="flex flex-col justify-center bg-white px-6 sm:px-10 md:px-14 lg:px-20 py-16">
          <h1
            className={`${montserrat.className} font-extrabold text-4xl md:text-5xl lg:text-6xl text-black mb-6`}
          >
            ABOUT US
          </h1>

          <ul
            className={`${montserrat.className} space-y-4 md:space-y-4 lg:space-y-5 text-base md:text-lg lg:text-xl text-gray-800`}
          >
            <li>• 20+ Years of Presence, serving multiple industries worldwide</li>
            <li>• Operations across 5+ Nations with local expertise</li>
            <li>• Successfully Delivered 100+ Projects, exceeding client expectations</li>
            <li>• 50+ Experts on Board with specialized skills in various domains</li>
            <li>• Client-Centric Approach ensuring personalized solutions</li>
            <li>• Innovative Solutions leveraging cutting-edge technology</li>
          </ul>
        </div>

        {/* Right Section - Image */}
        <div className="relative w-full h-screen">
          <Image
            src="/about/rightBG.jpg"
            alt="About Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Portrait Mobile Layout - Image on top */}
      <div className="sm:hidden landscape:hidden w-full flex flex-col items-center justify-center">
        {/* Image Section */}
        <div className="w-full h-64 relative">
          <Image
            src="/about/rightBG.jpg"
            alt="About Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="w-full bg-white p-6">
          <h1
            className={`${montserrat.className} font-extrabold text-2xl text-black mb-6 text-center`}
          >
            ABOUT US
          </h1>

          <ul
            className={`${montserrat.className} space-y-3 text-base text-gray-800 text-left`}
          >
            <li>• 20+ Years of Presence, serving multiple industries worldwide</li>
            <li>• Operations across 5+ Nations with local expertise</li>
            <li>• Successfully Delivered 100+ Projects, exceeding client expectations</li>
            <li>• 50+ Experts on Board with specialized skills in various domains</li>
            <li>• Client-Centric Approach ensuring personalized solutions</li>
            <li>• Innovative Solutions leveraging cutting-edge technology</li>
            <li>• Commitment to Quality and continuous improvement</li>
          </ul>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Portrait phones */
        @media (max-width: 768px) and (orientation: portrait) {
          h1 {
            font-size: 1.8rem;
          }
          ul {
            font-size: 1.05rem;
          }
        }

        /* Landscape phones (small + mid-size) */
        @media (max-width: 896px) and (orientation: landscape) {
          h1 {
            font-size: 1.3rem; /* smaller heading */
          }
          ul {
            font-size: 0.85rem; /* smaller bullet text */
          }
          ul li {
            margin-bottom: 0.35rem; /* reduce gap between bullets */
          }
        }
      `}</style>
    </main>
  );
}
