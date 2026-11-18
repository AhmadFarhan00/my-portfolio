"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl tracking-wide text-blue-400">
          Farhan.dev
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
          <Link href="#about" className="hover:text-blue-400 transition">
            Tentang
          </Link>
          <Link href="#skills" className="hover:text-blue-400 transition">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-blue-400 transition">
            Proyek
          </Link>
          <Link href="#contact" className="hover:text-blue-400 transition">
            Kontak
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-slate-300">
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Tentang
          </Link>
          <Link
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Proyek
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
}
