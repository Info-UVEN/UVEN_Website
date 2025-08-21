import { Quicksand } from 'next/font/google'; //importing fonts from google fonts

const quicksand = Quicksand({
  subsets: ['latin'], //means the font will only load basic Latin characters (A–Z, a–z, numbers, punctuation).
  weight: ['500'], // pick the weights you need
});


export default function Navbar() {
  return (
    <nav className={`flex flex-row w-full px-[5%] py-[0.8%] box-border bg-white text-[1.4rem] ${quicksand.className}`}>
      {/* px -> padding x-axis : left + right, py -> padding y-axis : top + bottom */}
      
      <div className="w-2/5"> {/* width:40% */}
        <img src="/logo.png" alt="Logo" className="w-1/4" />
      </div>

      <div className="flex flex-row justify-evenly items-center w-3/5">
        <p><a href="/" className="no-underline text-[#1C7A63]">Home</a></p>
        <p><a href="/about" className="no-underline text-[#1C7A63]">About</a></p>
        <p><a href="/services" className="no-underline text-[#1C7A63]">Services</a></p>
        <p><a href="/sectors" className="no-underline text-[#1C7A63]">Sectors</a></p>
        <p><a href="/projects" className="no-underline text-[#1C7A63]">Projects</a></p>
        <p><a href="/contact" className="no-underline text-[#1C7A63]">Contact</a></p>
      </div>
    </nav>
  );
}

// NavBar and Footer exist in components and not in app because 
// they don't navigate to a new page 
// Ex: /about -> app/about/page.js
// /navbar -> app/navbar.js does'nt make sense 
// Navbar and footer are to be displayed in all the pages so it is imported as a component 
// in app/page.js -> /