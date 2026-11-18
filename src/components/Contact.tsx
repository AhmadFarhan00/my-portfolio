import { Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 max-w-3xl mx-auto text-center text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">
        Mari Berkolaborasi
      </h2>
      <p className="text-slate-300 mb-10 text-lg leading-relaxed">
        Punya ide proyek, pertanyaan, atau sekadar ingin menyapa? Saya selalu
        terbuka untuk diskusi teknologi, pengembangan aplikasi web/mobile, dan
        peluang kerja sama.
      </p>
      <a
        href={personalInfo.email}
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full transition font-semibold text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
      >
        <Mail className="w-6 h-6" /> Kirim Email
      </a>
    </section>
  );
}
