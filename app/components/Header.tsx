"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900">  
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="italic text-xl font-bold text-white">
          Bismi Electrical & Plumbing
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {/* <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link> */}

          <a
            href="https://wa.me/918667697839?text=Hi%20*Bismi%20Electrical%20and%20Plumbing*,%0AMy%20Name%20is:%0A%0AI%20need%20electrician%20or%20plumber%20service%20for%20me.%0A%0APlease%20contact%20me.%0AThank%20you."
            target="_blank"
            className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700"
          >
            💬 Book on WhatsApp
          </a>


          <a
            href="tel:8667697839"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            📞 Call Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {/* <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700"
            >
              Home
            </Link> */}



            <a
              href="https://wa.me/918667697839?text=Hi%20*SparkFlow%20Services*,%0AMy%20Name%20is:%0A%0AI%20need%20electrician%20or%20plumber%20service%20for%20me.%0A%0APlease%20contact%20me.%0AThank%20you."
              target="_blank"
              className="bg-green-600 text-white text-center py-2 rounded"
            >
              💬 Book on WhatsApp
            </a>


            <a
              href="tel:8667697839"
              className="bg-green-600 text-white text-center py-2 rounded"
            >
              📞 Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
