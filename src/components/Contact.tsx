import { Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  // Link langsung membuka halaman tulis pesan Gmail di tab baru
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.emailText}`;

  return (
    <section
      id="contact"
      className="py-28 px-6 max-w-3xl mx-auto text-center text-white relative z-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        Mari Berkolaborasi
      </h2>
      <p className="text-slate-300 mb-10 text-lg leading-relaxed">
        Punya ide proyek, kebutuhan sistem aplikasi web/mobile, atau peluang
        kerja sama? Saya selalu terbuka untuk diskusi teknis dan pengembangan
        solusi digital.
      </p>
      <a
        href={gmailComposeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-full transition-all font-semibold text-lg shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] cursor-pointer"
      >
        <Mail className="w-6 h-6" /> Kirim Email
      </a>
    </section>
  );
}
