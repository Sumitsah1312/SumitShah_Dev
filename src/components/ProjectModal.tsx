import { X, Server, Lock, CheckCircle2, Cpu } from 'lucide-react';
import type { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#12141d] border border-white/15 shadow-2xl shadow-violet-900/30 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-cyan-400 mb-2">
          <span>{project.organization}</span>
          <span>•</span>
          <span>{project.year}</span>
          <span>•</span>
          <span className="text-violet-400">{project.role}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {project.title} — <span className="text-slate-300 font-normal">{project.subtitle}</span>
        </h3>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-violet-950/60 text-violet-300 border border-violet-700/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Notice for private project */}
        {project.isPrivate && (
          <div className="flex items-center gap-3 p-3.5 mb-6 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-300 text-xs">
            <Lock className="w-4 h-4 shrink-0 text-amber-400" />
            <span>
              <strong>Private Enterprise Project:</strong> Proprietary client IP developed at {project.organization}. Code repository and internal deployment links are restricted.
            </span>
          </div>
        )}

        {/* Visual Concept / Architecture Overview Box */}
        <div className="p-5 mb-6 rounded-xl bg-[#0b0c10] border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400">
            <Cpu className="w-4 h-4" />
            <span>Visual Concept & Architectural Overview</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {project.visualConcept}
          </p>
        </div>

        {/* Key Engineering Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-gradient-to-br from-violet-900/20 to-cyan-900/20 border border-white/10 text-center"
              >
                <span className="text-xs font-mono text-cyan-300 font-semibold block">{metric}</span>
              </div>
            ))}
          </div>
        )}

        {/* Key Engineering Contributions */}
        <div className="mb-6 space-y-3">
          <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
            Technical Implementation & Contributions
          </h4>
          <ul className="space-y-2.5">
            {project.contributions.map((contribution, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Highlights */}
        <div className="mb-6 space-y-3">
          <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
            System Design & Deep-Dive Mechanics
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.architectureHighlights.map((arch, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#161824] border border-white/10 hover:border-violet-500/40 transition-colors"
              >
                <h5 className="text-xs font-bold text-violet-300 mb-1.5 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-cyan-400" />
                  {arch.title}
                </h5>
                <p className="text-xs text-slate-400 leading-normal">{arch.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
