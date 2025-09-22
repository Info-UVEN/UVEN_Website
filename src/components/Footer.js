import { Linkedin, Instagram, Facebook } from "lucide-react";
import { Kantumruy_Pro } from 'next/font/google'; // importing fonts from google fonts

const kantumruy_Pro = Kantumruy_Pro({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Footer() {
  return (
    <footer className={`box-border p-8 text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.3rem] bg-[#f8f8f8] ${kantumruy_Pro.className}`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-col lg:flex-row justify-evenly items-center gap-6 lg:gap-0">
          {/* Top: © and Icons */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-center md:text-left">
            {/* Copyright text */}
            <div>
              <p>&copy; {new Date().getFullYear()} UVEN. All rights reserved.</p>
            </div>

            {/* Social media links */}
            <div className="flex space-x-6 text-[#1C7A63] justify-center">
              <a 
                href="https://linkedin.com/company/uven" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/uven" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com/uven" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-5 text-center md:text-left">
            <a href="/terms" className="hover:text-[#1C7A63] transition-colors duration-200 whitespace-nowrap">
              Terms and Conditions
            </a>
            <span className="mx-2 hidden sm:inline">|</span>
            <a href="/privacy" className="hover:text-[#1C7A63] transition-colors duration-200 whitespace-nowrap">
              Privacy Policy
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
