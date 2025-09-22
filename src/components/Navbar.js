"use client";

import { useState } from "react";
import { Quicksand } from "next/font/google";
import { Menu, X } from "lucide-react";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`flex flex-row items-center w-full px-[5%] py-[0.8%] box-border bg-white text-[1.4rem] ${quicksand.className} fixed top-0 left-0 z-50`}
    >
      {/* Logo */}
      <div className="flex items-center w-2/5 sm:w-1/2">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[45%] sm:w-[35%] md:w-[28%] lg:w-[22%]"
        />
      </div>

      {/* Full Menu - only desktop */}
      <div className="hidden xl:flex flex-row justify-evenly items-center w-3/5">
        <a href="/" className="no-underline text-black transition">Home</a>
        <a href="/about" className="no-underline text-black transition">About</a>
        <a href="/services" className="no-underline text-black transition">Services</a>
        <a href="/sectors" className="no-underline text-black transition">Sectors</a>
        <a href="/projects" className="no-underline text-black transition">Projects</a>
        <a href="/contact" className="no-underline text-black transition">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex xl:hidden w-3/5 justify-end">
        {isOpen ? (
          <X className="text-black" size={32} onClick={() => setIsOpen(false)} />
        ) : (
          <Menu className="text-black" size={32} onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Dropdown Menu - Mobile */}
      {isOpen && (
        <div className="fixed top-[4.5rem] left-0 w-full h-screen bg-white shadow-lg flex flex-col items-center gap-5 py-8 xl:hidden z-[9999] text-lg border-t border-gray-200">
          <a href="/" className="no-underline text-black hover:text-[#1C7A63]" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/about" className="no-underline text-black hover:text-[#1C7A63]" onClick={() => setIsOpen(false)}>About</a>
          <a href="/services" className="no-underline text-black hover:text-[#1C7A63]" onClick={() => setIsOpen(false)}>Services</a>
          <a href="/sectors" className="no-underline text-black hover:text-[#1C7A63]" onClick={() => setIsOpen(false)}>Sectors</a>
          <a href="/projects" className="no-underline text-black hover:text-[#1C7A63]" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="/contact" className="no-underline text-black hover:text-[#1C7A63]" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
