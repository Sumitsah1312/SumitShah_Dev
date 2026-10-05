import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Briefcase className="w-4 h-4" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional <span className="text-gradient-violet-cyan">Experience</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden"
            >
              {/* Subtle side accent bar */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-violet-500 to-cyan-500" />

              {/* Header Details */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-violet-400 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-violet-950 text-violet-300 border border-violet-800/50">
                      {exp.type}
                    </span>
                    <span>•</span>
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-sans">{exp.role}</h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-violet-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Key Impact Stats Pills */}
              <div className="py-4 flex flex-wrap gap-3">
                {exp.keyHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-950/40 text-cyan-300 border border-cyan-700/40 text-xs font-mono"
                  >
                    <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Bullet Points */}
              <div className="space-y-3 py-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Key Responsibilities & Engineering Accomplishments
                </h4>
                <ul className="space-y-3">
                  {exp.bulletPoints.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips Footer */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Tech Stack:</span>
                </span>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-slate-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
