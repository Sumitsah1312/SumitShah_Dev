import { Cpu, Terminal, Database, Shield, Layout, Wrench, Binary, Check } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

const GROUP_ICONS: Record<string, any> = {
  'Programming Languages': Terminal,
  'Backend & Frameworks': Cpu,
  'Databases & Storage': Database,
  'Architecture & Security': Shield,
  'Frontend & UI': Layout,
  'Tools & Development Workflows': Wrench,
  'Computer Science Fundamentals': Binary,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-[#0e1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Cpu className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical <span className="text-gradient-violet-cyan">Skills & Expertise</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            Structured skill categories highlighting core backend mastery, database tuning, architecture principles, and client integration technologies.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => {
            const Icon = GROUP_ICONS[group.category] || Cpu;
            return (
              <div
                key={group.category}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-violet-500/40 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-violet-600/10 text-cyan-400 border border-violet-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white font-sans">{group.category}</h3>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed font-sans">
                    {group.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                          skill.isPrimary
                            ? 'bg-violet-950/80 text-cyan-300 border border-violet-700/50 font-semibold'
                            : 'bg-white/5 text-slate-300 border border-white/10 hover:border-white/20'
                        }`}
                      >
                        <Check className={`w-3 h-3 ${skill.isPrimary ? 'text-cyan-400' : 'text-slate-400'}`} />
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-slate-400 ml-1"></span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
