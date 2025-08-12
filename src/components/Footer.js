export default function Footer() {
  return (
    <footer className="box-border p-8 font-body text-[1.2rem]">
      <div className="container mx-auto">
        <div className="flex flex-row md:flex-row justify-evenly items-center">
          {/* Copyright text */}
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} UVEN. All rights reserved.</p>
          </div>
          
          {/* Social media links */}
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/company/uven" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300"
            >
              <img 
                src="/linkedin-icon.png" 
                alt="LinkedIn" 
                className="h-6 w-6"
              />
            </a>
            <a 
              href="https://instagram.com/uven" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300"
            >
              <img 
                src="/instagram-icon.png" 
                alt="Instagram" 
                className="h-6 w-6"
              />
            </a>
            <a 
              href="https://facebook.com/uven" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300"
            >
              <img 
                src="/facebook-icon.png" 
                alt="Facebook" 
                className="h-6 w-6"
              />
            </a>
          </div>

                    {/* Legal links */}
          <div className="flex flex-row md:flex-row justify-between gap-5 items-center">
            <a 
              href="/terms" 
              className="hover:underline transition duration-300"
            >
              Terms and Conditions 
            </a>
            <span>|</span>
            <a 
              href="/privacy" 
              className="hover:underline transition duration-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


// NavBar and Footer exist in components and not in app because 
// they don't navigate to a new page 
// Ex: /about -> app/about/page.js
// /navbar -> app/navbar.js does'nt make sense 
// Navbar and footer are to be displayed in all the pages so it is imported as a component 
// in app/page.js -> /