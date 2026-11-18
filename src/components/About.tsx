import { personalInfo, experiences } from "../data/portfolioData";
import { Calendar, MapPin, Briefcase, UserCheck } from "lucide-react";

export default function About() {
  return (
    <section
      id="about-detail"
      className="py-20 px-6 max-w-6xl mx-auto text-white relative z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* KOLOM KIRI: Profil & Biodata */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            <UserCheck className="w-4 h-4" /> Profil Profesional
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Mengenal Lebih Dekat
          </h2>

          <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
            {personalInfo.aboutDetails.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Kartu Info Tempat Tanggal Lahir & Domisili */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl flex items-start gap-3.5 backdrop-blur-sm">
              <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                  Tempat, Tanggal Lahir
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-100 mt-0.5">
                  {personalInfo.birthPlace}, {personalInfo.birthDate}
                </p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl flex items-start gap-3.5 backdrop-blur-sm">
              <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                  Domisili Saat Ini
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-100 mt-0.5">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: Pengalaman Kerja & Proyek */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 text-purple-400 font-semibold text-sm uppercase tracking-wider">
            <Briefcase className="w-4 h-4" /> Rekam Jejak
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Pengalaman Utama
          </h3>

          <div className="space-y-6 border-l-2 border-slate-800 pl-6 ml-2">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Titik Timeline */}
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-500 ring-4 ring-[#070b14]"></span>

                <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-1 rounded-full">
                  {exp.period}
                </span>
                <h4 className="text-lg font-bold text-white mt-2">
                  {exp.role}
                </h4>
                <p className="text-sm font-medium text-blue-400 mb-2">
                  {exp.organization}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.highlights.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-slate-900 text-slate-300 px-2.5 py-0.5 rounded-md border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
