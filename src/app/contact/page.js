'use client';
import { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // for success/failure message

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch (error) {
      setStatus("Failed to send. Try again.");
    }

    // Clear status message after 3 seconds
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <main className="relative w-full min-h-screen flex justify-center lg:justify-end lg:pt-20 pt-0">
      {/* Left-side image only on laptops (lg+) */}
      <div className="absolute inset-y-0 hidden lg:flex items-center" style={{ left: '7%' }}>
        <img
          src="/contact/LEFTBg.png"
          alt="Contact Left"
          className="h-[500px] w-auto object-contain"
        />
      </div>

      {/* Right-side container */}
      <div className="relative z-10 w-full lg:w-3/5 px-4 lg:px-0 lg:pr-12 flex flex-col justify-center items-center text-center">
        {/* Title */}
        <h1
          className={`${montserrat.className} font-bold tracking-[0.05em] drop-shadow-lg mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a]`}
          style={{ lineHeight: '1.2' }}
        >
          CONTACT US
        </h1>

        {/* Tagline */}
        <p className={`${montserrat.className} text-gray-700 mb-6 text-sm sm:text-base`}>
          Get in touch with us for innovative solutions and inquiries
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg rounded-xl shadow-lg p-5 sm:p-6 flex flex-col gap-4"
          style={{ backgroundColor: "#ffffff" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 sm:py-3 outline-none rounded-md text-sm sm:text-base border border-gray-300 bg-gray-50"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 sm:py-3 outline-none rounded-md text-sm sm:text-base border border-gray-300 bg-gray-50"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-3 py-2 sm:py-3 outline-none rounded-md text-sm sm:text-base border border-gray-300 bg-gray-50"
          />
          <button
            type="submit"
            className="w-full py-2 sm:py-3 rounded-md font-medium transition duration-200 hover:scale-[1.02]"
            style={{ backgroundColor: "#047857", color: "white", border: "1px solid #065f46" }}
          >
            Submit
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className="mt-4 text-sm font-medium text-[#047857]">{status}</p>
        )}

        {/* Contact details highlighted below form */}
        <div className="mt-8 font-medium flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2">
            <span className={`${montserrat.className}`}>Nagarbhavi - 2nd stage, Bengaluru, Karnataka, India</span>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <span className={`${montserrat.className}`}>+91 99999999999</span>
          </div>
        </div>
      </div>

      {/* Fix heading for landscape phones */}
      <style jsx>{`
        @media (max-width: 1024px) and (orientation: landscape) {
          main > div.relative {
            margin-top: 3rem; /* move down to avoid navbar overlap */
          }
        }
      `}</style>
    </main>
  );
}
