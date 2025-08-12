import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// NavBar and Footer exist in components and not in app because 
// they don't navigate to a new page 
// Ex: /about -> app/about/page.js
// /navbar -> app/navbar.js does'nt make sense 
// Navbar and footer are to be displayed in all the pages so it is imported as a component 
// in app/page.js -> /