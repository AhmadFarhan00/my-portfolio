// src/data/portfolioData.ts

export const personalInfo = {
  name: "Ahmad Farhan",
  role: "Full-Stack Web & Mobile Developer",
  birthPlace: "Lubuk Alung, Padang Pariaman",
  birthDate: "6 November 2007",
  location: "Panyabungan, Mandailing Natal, Sumatera Utara",
  tagline:
    "Merancang arsitektur web modern dan aplikasi mobile lintas platform yang skalabel, aman, dan berorientasi pada solusi bisnis nyata.",
  bio: "Lahir di Lubuk Alung, Padang Pariaman pada 6 November 2007, saya adalah seorang Full-Stack Web & Mobile Developer yang berdedikasi dalam membangun ekosistem digital berkinerja tinggi. Berbekal latar belakang pendidikan teknik serta pengalaman langsung menangani infrastruktur digital institusi pendidikan hingga sektor korporasi, saya terbiasa mengubah kebutuhan operasional yang kompleks menjadi aplikasi yang efisien, responsif, dan mudah digunakan.",
  aboutDetails: [
    "Saya memiliki keahlian mendalam dalam pengembangan aplikasi end-to-end menggunakan ekosistem JavaScript/TypeScript modern (Next.js, React) untuk platform web, serta Flutter & Dart untuk pengembangan aplikasi mobile Android/iOS yang mulus.",
    "Dalam setiap proyek yang dikerjakan, saya tidak hanya berfokus pada estetika antarmuka (UI/UX), tetapi juga pada integritas data, keamanan autentikasi, serta efisiensi arsitektur backend menggunakan Supabase dan PostgreSQL.",
    "Rekam jejak saya mencakup perancangan dan implementasi sistem produksi yang digunakan secara aktif setiap hari—mulai dari digitalisasi sistem manajemen sekolah (absensi real-time dan pengolahan nilai akademik) hingga platform profil dan katalog digital untuk perusahaan perdagangan serta logistik.",
  ],
  github: "https://github.com/AhmadFarhan00",
  email: "mailto:programerr.f.a@gmail.com",
  emailText: "programerr.f.a@gmail.com", // 1. Tambahkan teks email polos di sini
  whatsapp: "https://wa.me/6281274411106", // Sesuaikan nomor WA kamu
  instagram: "https://instagram.com/farhannmjw", // Sesuaikan username IG kamu
  linkedin: "https://linkedin.com/in/ahmadfarhan-dev",
};

export const experiences = [
  {
    period: "2026 - Sekarang",
    role: "Full-Stack Developer & IT Infrastructure Operator",
    organization: "Yayasan Pendidikan Islam Adnani",
    description:
      "Bertanggung jawab penuh atas arsitektur, pengembangan, dan pemeliharaan ekosistem digital institusi. Membangun website profil resmi sekolah, merancang sistem manajemen penilaian akademik siswa, serta mengembangkan sistem presensi guru terintegrasi berbasis web dan aplikasi mobile.",
    highlights: ["Next.js", "Flutter", "Supabase", "System Architecture"],
  },
  {
    period: "2026",
    role: "Freelance Web Developer",
    organization: "RECIMA Maju Jaya Sukses (Perdagangan & Logistik)",
    description:
      "Merancang dan mengembangkan Company Profile serta Katalog Digital interaktif untuk mendukung operasional pemasaran komoditas pertanian dan layanan logistik perusahaan agar tampil kredibel di pasar B2B maupun B2C.",
    highlights: ["Next.js", "TypeScript", "Tailwind CSS", "SEO Optimization"],
  },
];

export const skills = [
  { name: "Next.js", category: "Frontend & Full-Stack" },
  { name: "React", category: "Frontend Library" },
  { name: "TypeScript", category: "Programming Language" },
  { name: "Tailwind CSS", category: "Modern Styling" },
  { name: "Supabase", category: "Backend & Database" },
  { name: "Flutter", category: "Cross-Platform Mobile" },
  { name: "Dart", category: "Mobile Language" },
];

export const projects = [
  {
    title: "Ekosistem Absensi Guru Terintegrasi (Web & Mobile)",
    description:
      "Solusi presensi digital komprehensif yang menghubungkan aplikasi mobile Flutter untuk pencatatan kehadiran guru di lapangan dengan dashboard administrasi berbasis Next.js untuk pemantauan real-time, validasi lokasi/waktu, dan rekapitulasi laporan otomatis.",
    techStack: ["Next.js", "Flutter", "Dart", "Supabase"],
    link: "#",
    github: "https://github.com/AhmadFarhan00",
  },
  {
    title: "Portal Web Resmi & Sistem Informasi Sekolah",
    description:
      "Website resmi institusi pendidikan Yayasan Pendidikan Islam Adnani yang dirancang dengan performa tinggi dan SEO optimal. Menyajikan profil lembaga, publikasi berita kegiatan, informasi akademik, serta pusat layanan informasi digital bagi siswa dan wali murid.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://ypiadnani.or.id",
    github: "https://github.com/AhmadFarhan00/Adnani-website",
  },
  {
    title: "Sistem Manajemen & Analitik Penilaian Siswa",
    description:
      "Platform manajemen akademik berbasis cloud yang mempermudah tenaga pendidik dalam menginput, mengolah, dan menganalisis nilai evaluasi siswa secara terstruktur, akurat, dan terhindar dari kesalahan kalkulasi manual.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    link: "#",
    github: "https://github.com/AhmadFarhan00",
  },
  {
    title: "Company Profile & Katalog Digital Perdagangan & Logistik",
    description:
      "Platform digital korporat untuk perusahaan perdagangan komoditas dan logistik (RECIMA Maju Jaya Sukses). Dilengkapi katalog produk interaktif, detail spesifikasi komoditas, serta saluran komunikasi langsung untuk mempermudah kemitraan bisnis.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/AhmadFarhan00",
  },
];
