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
          SparkFlow Services
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {/* <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link> */}

          <a
            href="https://wa.me/917010239825?text=Hi%20*SparkFlow%20Services*,%0A%0AMy%20name%20is:%0A%0AI%20need%20electrician/plumber%20service%20in%20my%20area.%0A%0APlease%20contact%20me.%0AThank%20you. "
            target="_blank"
            className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700"
          >
            💬 Book on WhatsApp
          </a>


          <a
            href="tel:1234567890"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            📞 Call Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
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
              href="https://wa.me/917010239825?text=Hi%20*SparkFlow%20Services*,%0A%0AMy%20name%20is:%0A%0AI%20need%20electrician%20or%20plumber%20service%20in%20my%20area.%0A%0APlease%20contact%20me.%0AThank%20you."
              target="_blank"
              className="bg-green-600 text-white text-center py-2 rounded"
            >
              💬 Book on WhatsApp
            </a>


            <a
              href="tel:7010239825"
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
