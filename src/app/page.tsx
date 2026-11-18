import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    // 1. Ubah warna background utama jadi biru super gelap (#070b14)
    <main className="min-h-screen bg-[#070b14] relative overflow-hidden text-slate-200">
      {/* 2. Tambahkan Background Effects (Cahaya & Lantai Grid) di sini */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Glow Kanan Atas (Ungu) */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-fuchsia-600/20 blur-[120px] rounded-full"></div>
        {/* Glow Kiri Tengah (Biru/Cyan) */}
        <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-cyan-600/20 blur-[120px] rounded-full"></div>

        {/* Lantai Kotak-kotak 3D (Perspective Grid) yang dipanggil dari globals.css */}
        <div className="absolute bottom-0 w-full h-[60vh] bg-grid-pattern perspective-grid border-t border-cyan-900/30"></div>
      </div>

      {/* 3. Bungkus semua komponen dengan relative z-10 agar posisinya di atas background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
