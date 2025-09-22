//SERVER SIDE COMPONENTS - Code runs on the server (Node.js in Next.js).
//All files in app/ are server components by default.
//Allowed: async/await for data fetching (fetch, DB queries), 
//passing data to children, 
//rendering static/dynamic HTML.
//Not Allowed : React Hooks

//CLIENT SIDE COMPONENTS - Code runs in the browser ( handles interactivity (clicks, typing, animations))
//Becomes a client component if you put "use client"; at the top of the file.
//Allowed: React hooks (useState, useEffect, useRef), 
//event handlers (onClick, onChange), 
//browser APIs.
//Not allowed: Direct server-only operations like DB queries (but you can pass data down as props).

"use client";

import Image from "next/image";
import sectorsData from "./sectorsData.js";
import { Montserrat, Public_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "800"] });
const petch = Public_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Sectors() {
  return (
    <div className="bg-white pt-24 pb-12 flex flex-col items-center">
    <h1
      className={`${montserrat.className} text-center font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-normal text-[#252525] mb-10`}
    >
      SECTORS
    </h1>

      <div className="grid gap-8 px-6 md:px-12 lg:px-16 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full">
        {sectorsData.map((sector, index) => (
          <div
            key={index}
            className="bg-white shadow-lg overflow-hidden flex flex-col max-w-sm mx-auto"
          >
            {/* Fixed image height for square-like shape */}
            <div className="relative w-full h-48">
              <Image
                src={sector.img}
                alt={sector.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h2
                className={`${montserrat.className} text-xl sm:text-xl md:text-xl text-[#252525] mb-3`}
              >
                {sector.title}
              </h2>
              <ul className="text-[#252525] text-sm sm:text-base leading-relaxed space-y-1 list-disc pl-5 flex-1">
                {sector.desc.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


//Each HTML tag (<div>, <button>, <h1>) becomes a DOM element.
//n React, you normally don’t touch DOM elements directly. React handles them for you.
