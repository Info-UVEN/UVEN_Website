import { Linkedin, Instagram, Facebook } from "lucide-react";
import { Kantumruy_Pro } from 'next/font/google'; //importing fonts from google fonts

const kantumruy_Pro = Kantumruy_Pro({
  subsets: ['latin'], //means the font will only load basic Latin characters (A–Z, a–z, numbers, punctuation).
  weight: ['400'], // pick the weights you need
});

export default function Footer() {
  return (
    <footer className={`box-border p-8 text-[1.3rem] ${kantumruy_Pro.className}`}>
      <div className="container mx-auto">
        <div className="flex flex-row md:flex-row justify-evenly items-center">
          {/* Copyright text */}
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} UVEN. All rights reserved.</p>
          </div>
          
          {/* Social media links */}
          <div className="flex space-x-6 text-[#1C7A63]">
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

          {/* Legal links */}
          <div className="flex flex-row md:flex-row justify-between gap-5 items-center">
            <a 
              href="/terms" 
            >
              Terms and Conditions 
            </a>
            <span>|</span>
            <a 
              href="/privacy" 
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
