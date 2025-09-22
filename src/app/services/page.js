"use client";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export default function ServicesPage() {
  return (
    <div className={`w-full bg-gray-100 ${montserrat.className} pt-16 md:pt-20`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left Section - Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-auto show-on-phone-portrait hide-on-small-landscape hide-on-portrait-tablets">
          <Image
            src="/services/leftBG.jpg"
            alt="Services Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Section - Services */}
        <div className="w-full bg-white flex flex-col justify-center p-6 sm:p-10 md:p-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 sm:mb-10">
            SERVICES
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {/* Service 01 */}
            <div>
              <h3 className="font-bold text-base sm:text-lg md:text-lg text-gray-800">
                HVAC Design
              </h3>
              <p className="text-gray-600 mt-1 sm:mt-2 md:mt-2 text-sm sm:text-base md:text-base">
                Concept, load calculations, ventilation, smoke management,
                equipment selection, ducting & piping design, shop drawings, and
                as-built documentation.
              </p>
              <hr className="mt-3 sm:mt-4 border-gray-300" />
            </div>

            {/* Service 02 */}
            <div>
              <h3 className="font-bold text-base sm:text-lg md:text-lg text-gray-800">
                Plumbing & Fire Fighting
              </h3>
              <p className="text-gray-600 mt-1 sm:mt-2 md:mt-2 text-sm sm:text-base md:text-base">
                Water supply, drainage, fire safety systems, UPC/IPC compliance,
                shop drawings, and final as-built designs for seamless execution.
              </p>
              <hr className="mt-3 sm:mt-4 border-gray-300" />
            </div>

            {/* Service 03 */}
            <div>
              <h3 className="font-bold text-base sm:text-lg md:text-lg text-gray-800">
                Electrical High & Low Current
              </h3>
              <p className="text-gray-600 mt-1 sm:mt-2 md:mt-2 text-sm sm:text-base md:text-base">
                Lighting, panel boards, cable trays, single-line diagrams, and
                BOQs with seamless integration across high & low voltage systems.
              </p>
              <hr className="mt-3 sm:mt-4 border-gray-300" />
            </div>

            {/* Service 04 */}
            <div>
              <h3 className="font-bold text-base sm:text-lg md:text-lg text-gray-800">
                Civil & Architectural QS
              </h3>
              <p className="text-gray-600 mt-1 sm:mt-2 md:mt-2 text-sm sm:text-base md:text-base">
                Quantity surveying, materials take-off, BOQ preparation, cost
                optimization, procurement packaging, and tender stage validation.
              </p>
              <hr className="mt-3 sm:mt-4 border-gray-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Media Queries */}
      <style jsx>{`
        /* Show image only on phone portrait */
        @media (max-width: 767px) and (orientation: portrait) {
          .show-on-phone-portrait {
            display: block !important;
            height: 250px !important;
          }
        }

        /* Small devices landscape: hide image on all small phones */
        @media (max-width: 1024px) and (orientation: landscape) {
          .hide-on-small-landscape {
            display: none !important;
          }
          h1 {
            font-size: 1.6rem !important;
          }
          h3 {
            font-size: 0.85rem !important;
          }
          p {
            font-size: 0.75rem !important;
          }
          hr {
            margin-top: 0.4rem !important;
            margin-bottom: 0.4rem !important;
          }
        }

        /* Portrait tablets: iPad mini, Surface Pro, Asus Zenbook, Galaxy A51/71 */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
          .hide-on-portrait-tablets {
            display: none !important;
          }
          h1 {
            font-size: 2rem !important;
          }
          h3 {
            font-size: 1rem !important;
          }
          p {
            font-size: 0.9rem !important;
          }
        }

        /* Reduce navbar gap */
        div.pt-20 {
          padding-top: 4rem !important;
        }
      `}</style>
    </div>
  );
}
