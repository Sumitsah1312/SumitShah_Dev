import { GraduationCap, Award, Code, Users, CheckCircle2 } from 'lucide-react';
import { EDUCATION, ACHIEVEMENTS } from '../data/portfolioData';

const ACHIEVEMENT_ICONS: Record<string, any> = {
  Code: Code,
  Award: Award,
  Users: Users,
};

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & <span className="text-gradient-violet-cyan">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Card Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider font-bold">
              Degree & Institution
            </h3>

            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden space-y-4"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-violet-600/15 text-violet-400 border border-violet-500/20">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                      <p className="text-xs font-mono text-cyan-400">{edu.location}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {edu.period}
                  </span>
                </div>

                <div className="space-y-1">
                  <h5 className="text-base font-semibold text-slate-100">{edu.degree}</h5>
                  <p className="text-sm font-mono font-bold text-gradient-violet-cyan">{edu.gpa}</p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Academic & Community Highlights
                  </span>
                  <ul className="space-y-2">
                    {edu.achievements.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Key Achievements Grid Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider font-bold">
              Key Engineering Milestones
            </h3>

            <div className="space-y-4">
              {ACHIEVEMENTS.map((item, idx) => {
                const Icon = ACHIEVEMENT_ICONS[item.iconName] || Award;
                return (
                  <div
                    key={idx}
                    className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-violet-500/40 glass-panel-hover flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-cyan-600/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-white">{item.title}</h4>
                        {item.metric && (
                          <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-violet-950/80 text-violet-300 border border-violet-700/50">
                            {item.metric}
                          </span>
                        )}
                      </div>
                      {item.organization && (
                        <p className="text-xs font-mono text-slate-400">{item.organization}</p>
                      )}
                      <p className="text-xs text-slate-300 leading-relaxed pt-1">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
