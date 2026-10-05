import { useState } from 'react';
import { Layers, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { ProjectItem } from '../types';
import ProjectModal from '../components/ProjectModal';
import ArchitectureDiagram from '../components/ArchitectureDiagram';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#0e1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>Featured Software Engineering Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Production & Enterprise <span className="text-gradient-violet-cyan">Backend Systems</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            Detailed breakdown of production backend platforms, multi-tenant API engines, financial reporting systems, and automated PDF/QR generation tools built using .NET 8 and PostgreSQL.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-violet-500/40 glass-panel-hover flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-cyan-400 font-semibold">{project.organization}</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">{project.year}</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-sans">
                    {project.title}
                  </h3>
                  <p className="text-xs text-violet-400 font-mono mt-0.5">{project.subtitle}</p>
                </div>

                {/* Visual Concept Box */}
                <div className="p-3.5 rounded-xl bg-[#0b0c10] border border-white/10 text-xs text-slate-300 leading-relaxed font-mono space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold block">
                    Architecture Concept:
                  </span>
                  <span>{project.visualConcept}</span>
                </div>

                {/* Key Metrics */}
                {project.metrics && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-[11px] font-mono rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                {/* Key Contribution Snippets */}
                <ul className="space-y-2 text-xs text-slate-300">
                  {project.contributions.slice(0, 3).map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-slate-400">
                      +{project.stack.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-4">
                {project.isPrivate ? (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-400">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Private Project</span>
                  </span>
                ) : (
                  <span className="text-xs font-mono text-slate-400">Public Demo</span>
                )}

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Architecture Diagram Component */}
        <ArchitectureDiagram />

        {/* Modal for detailed case study */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
}
