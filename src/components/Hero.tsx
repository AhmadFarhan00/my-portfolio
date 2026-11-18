"use client";
import { useState } from "react"; // 1. Import useState untuk fitur buka-tutup
import Image from "next/image";
import { personalInfo } from "../data/portfolioData";
import { Code2, Mail, Terminal, BarChart2, MessageCircle } from "lucide-react"; // 2. Tambah icon sosmed
import { motion } from "framer-motion";

export default function Hero() {
  // 3. State untuk mengontrol menu kontak (terbuka atau tertutup)
  const [showContact, setShowContact] = useState(false);

  return (
    <section
      id="about"
      className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative"
    >
      {/* KIRI: Teks & Tombol */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs font-medium text-slate-300 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for Hire / Projects
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          Halo, saya <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        <h2 className="text-2xl font-semibold text-slate-300">
          {personalInfo.role}
        </h2>
        <p className="text-slate-400 max-w-lg text-lg leading-relaxed">
          {personalInfo.bio}
        </p>

        {/* === TOMBOL AKSI === */}
        <div className="flex flex-wrap gap-4 pt-4">
          {/* Tombol Hubungi Saya (Dropdown) */}
          <div className="relative">
            <button
              onClick={() => setShowContact(!showContact)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            >
              <Mail className="w-5 h-5" /> Hubungi Saya
            </button>

            {/* Menu Pop-up Kontak */}
            {showContact && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-3 bg-slate-900/90 border border-slate-700 p-2 rounded-xl shadow-2xl flex flex-col gap-1 w-52 z-50 backdrop-blur-md"
              >
                <a
                  href={personalInfo.email}
                  className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-lg text-sm text-slate-200 hover:text-white transition group"
                >
                  <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />{" "}
                  Email
                </a>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-lg text-sm text-slate-200 hover:text-white transition group"
                >
                  <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />{" "}
                  WhatsApp
                </a>
                {/* BARU */}
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-lg text-sm text-slate-200 hover:text-white transition group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
              </motion.div>
            )}
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900/50 hover:bg-slate-800 text-white px-6 py-3 rounded-xl border border-slate-700 transition-all backdrop-blur-sm"
          >
            <Code2 className="w-5 h-5" /> GitHub
          </a>
        </div>
      </motion.div>

      {/* KANAN: Foto Profil & Elemen Melayang */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 relative flex justify-center items-center z-10"
      >
        <div className="relative w-72 h-72 sm:w-80 sm:h-80">
          {/* Cincin Cahaya */}
          <div className="absolute inset-0 rounded-full border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.3)] animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute inset-2 rounded-full border border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]"></div>

          {/* Bingkai Foto Tengah (Pastikan foto-farhan.jpg sudah ada di folder public) */}
          <div className="absolute inset-6 bg-[#0c1222] rounded-full overflow-hidden border-2 border-slate-700 z-10 flex items-center justify-center">
            {/* Hapus blok <Image> ini kalau belum ada foto, ganti pakai teks sementara */}
            <Image
              src="/farhan.jpg"
              alt="Foto Profil"
              width={300}
              height={300}
              className="w-full h-full object-cover scale-105"
              priority
            />
          </div>

          {/* Ikon Melayang */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-6 z-20 bg-slate-900/80 p-3 rounded-xl border border-slate-700 backdrop-blur-md shadow-lg shadow-cyan-500/20"
          >
            <Code2 className="w-6 h-6 text-cyan-400" />
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -right-8 z-20 bg-slate-900/80 p-3 rounded-xl border border-slate-700 backdrop-blur-md shadow-lg"
          >
            <Terminal className="w-6 h-6 text-purple-400" />
          </motion.div>
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 -right-4 z-20 bg-slate-900/80 p-3 rounded-xl border border-slate-700 backdrop-blur-md shadow-lg shadow-green-500/20"
          >
            <BarChart2 className="w-6 h-6 text-green-400" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
