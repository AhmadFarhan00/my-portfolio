import { projects } from "../data/portfolioData";
import { ExternalLink, FolderGit2 } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Proyek Pilihan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800/50 border border-slate-700/60 p-6 rounded-xl flex flex-col justify-between hover:border-blue-500/50 transition"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <FolderGit2 className="w-8 h-8 text-blue-400" />
                <div className="flex gap-3">
                  <a
                    href={item.github}
                    className="text-slate-400 hover:text-white"
                  >
                    <FolderGit2 className="w-5 h-5" />
                  </a>
                  <a
                    href={item.link}
                    className="text-slate-400 hover:text-white"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {item.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-slate-900/80 text-blue-300 text-xs px-2.5 py-1 rounded-md border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
