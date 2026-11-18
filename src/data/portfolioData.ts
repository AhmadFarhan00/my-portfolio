// src/data/portfolioData.ts

export const personalInfo = {
  name: "Ahmad Farhan",
  role: "Full-Stack Web & Mobile Developer",
  bio: "Full-Stack Developer berpengalaman membangun solusi digital nyata, mulai dari sistem absensi guru berbasis web (Next.js) & mobile (Flutter), website profil sekolah, sistem manajemen penilaian siswa, hingga Company Profile & Katalog Digital untuk perusahaan perdagangan dan logistik.",
  location: "Indonesia",
  github: "https://github.com/AhmadFarhan00",
  email: "mailto:emailkamu@example.com",
  whatsapp: "https://wa.me/6281234567890", // Pastikan nomor WA sudah sesuai
  instagram: "https://instagram.com/usernamekamu", // Pastikan username IG sudah sesuai
};

export const skills = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Supabase", category: "Backend" },
  { name: "Flutter", category: "Mobile" },
  { name: "Dart", category: "Mobile" },
];

export const projects = [
  {
    title: "Sistem Absensi Guru (Web & Mobile)",
    description:
      "Ekosistem presensi dan rekapitulasi kehadiran guru secara real-time yang terintegrasi antara dashboard admin berbasis web dan aplikasi mobile.",
    techStack: ["Next.js", "Flutter", "Dart", "Supabase"],
    link: "#",
    github: "https://github.com/AhmadFarhan00",
  },
  {
    title: "Website Resmi Sekolah",
    description:
      "Portal informasi akademik, profil institusi pendidikan, publikasi berita kegiatan, dan sistem penerimaan informasi bagi siswa maupun orang tua.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/AhmadFarhan00/Adnani-website",
  },
  {
    title: "Sistem Manajemen Penilaian Siswa",
    description:
      "Aplikasi web untuk pengelolaan nilai akademik, pengolahan rapor digital, dan pemantauan perkembangan evaluasi belajar siswa secara terstruktur.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    link: "#",
    github: "https://github.com/AhmadFarhan00",
  },
  {
    title: "Company Profile & Katalog Digital",
    description:
      "Website profil perusahaan perdagangan dan logistik komoditas yang dilengkapi katalog produk interaktif serta informasi layanan distribusi.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/AhmadFarhan00",
  },
];
