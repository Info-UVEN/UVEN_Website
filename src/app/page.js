"use client";

import { useRouter } from "next/navigation";
import { Montserrat } from "next/font/google";
import { Search, X } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover sm:bg-cover bg-contain bg-no-repeat bg-center 
                  [background-image:url('/home/bgSM.png')] sm:[background-image:url('/home/bg.png')]"
      />


      {/* Overlay */}
      <div
        className={`relative flex flex-col items-center justify-center text-center flex-grow px-4 ${montserrat.className} 
                    max-[440px]:px-2 max-[440px]:text-center`}
      >
        {/* Heading */}
        <h1
          className="font-extrabold mt-3 sm:mt-5 
                    text-[2rem] sm:text-[clamp(2.3rem,6vw,4rem)] md:text-[clamp(2.5rem,5vw,6rem)] lg:text-[clamp(3rem,4vw,7rem)] 
                    tracking-[0.2em] text-black drop-shadow-lg sm:max-w-[80%]"
        >
          UNITED VENTURES
        </h1>

        <p
          className="mt-3 sm:mt-5 
                    text-[1.1rem] sm:text-[clamp(1.2rem,3.5vw,1.6rem)] md:text-[clamp(1.3rem,2.5vw,2.2rem)] lg:text-[clamp(1.4rem,2vw,3rem)] 
                    tracking-[0.4em] text-black drop-shadow-lg mb-16 sm:mb-20 md:mb-28 sm:max-w-[80%] max-w-[90%]"
        >
          ENGINEERING SERVICES
        </p>



        {/* Bottom Search Bar */}
        <div className="absolute bottom-0 w-full flex justify-center">
          <div className="w-full bg-[#065f46] flex items-center justify-center py-6 sm:py-5 px-2 sm:px-6">
            <div className="flex items-center bg-white rounded-full shadow-md px-4 py-3 w-full max-w-lg">
              <Search size={20} className="text-gray-500 mr-3 sm:mr-3" />
              <span className="flex-1 text-gray-700 text-sm sm:text-base md:text-base max-[440px]:text-xs">
                www.uven.co.in
              </span>
              <X size={20} className="text-gray-500 ml-3 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
