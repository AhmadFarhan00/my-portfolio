import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">
        Tech Stack & Keahlian
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-800/50 border border-slate-700/60 px-5 py-3 rounded-xl flex items-center hover:border-blue-500/50 hover:bg-slate-800 transition cursor-default group"
          >
            <span className="font-medium text-slate-200 group-hover:text-white transition">
              {skill.name}
            </span>
            <span className="text-[10px] uppercase tracking-wider bg-slate-900 text-blue-400 px-2 py-1 rounded-md ml-3 border border-slate-700">
              {skill.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
