"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          ServiceApp
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>

          <Link href="/book" className="text-gray-700 hover:text-gray-900">
            Book Service
          </Link>

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
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700"
            >
              Home
            </Link>

            <Link
              href="/book"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700"
            >
              Book Service
            </Link>

            <a
              href="tel:1234567890"
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
