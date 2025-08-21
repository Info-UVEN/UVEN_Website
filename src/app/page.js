"use client";

import BlurText from "../components/BlurText";
import { Source_Code_Pro ,Quicks, Quicksandand, Quicksand} from "next/font/google";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const sourceCodePro = Source_Code_Pro({
  subsets : ["latin"],
  weight : ["600"]
});

const quicksand = Quicksand({
  subsets : ["latin"],
  weight :["500"]
});

export default function HomePage() {
  const [showTagline, setShowTagline] = useState(false);

  // Show tagline only after user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setShowTagline(true);
      window.removeEventListener("scroll", handleScroll); // show only once
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      {/* Company Name with Blur Effect */}
      <BlurText
        text="UNITED VENTURES ENGINEERING CONSULTANCY"
        delay={700}
        initial={{opacity:0}}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className={`text-[3rem] text-center ${sourceCodePro.className}`}
      />

      {/* Tagline (hidden until scroll) */}
      {showTagline && (
        <motion.p
          className={`mt-5 text-[1.5rem] text-[#1C7A63] text-center font-light ${quicksand.className}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7, ease: "easeOut" }}
        >
          Sustainable Solutions for a Better Tomorrow
        </motion.p>
      )}
    </main>
  );
}
