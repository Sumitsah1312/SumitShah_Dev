import { GraduationCap, Server, ShieldCheck, Database, Code } from 'lucide-react';

const CORE_PILLARS = [
  {
    icon: Server,
    title: 'Backend Engineering',
    description: 'Specializing in C# and ASP.NET Core Web APIs, building high-throughput microservices and RESTful API endpoints.',
  },
  {
    icon: Database,
    title: 'Database Architecture',
    description: 'PostgreSQL & SQL Server optimization, EF Core LINQ query tuning, index strategy, and schema migrations.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description: 'ASP.NET Identity, JWT Authentication, Role-Based Access Control (RBAC), and tenant data isolation.',
  },
  {
    icon: Code,
    title: 'Clean Code & SOLID',
    description: 'Applying SOLID design principles, clean modular architecture, and maintainable software patterns.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <GraduationCap className="w-4 h-4" />
            <span>Developer Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="text-gradient-violet-cyan">Sumit Kumar Shah</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Text Content */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white leading-snug">
              Backend Specialist & Software Developer with a Foundation from Delhi Technological University
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              I am a Software Developer holding a B.Tech in Electronics and Communication Engineering from Delhi Technological University (DTU). Over my career, I have focused on engineering robust, high-performance backend systems and business applications.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              My engineering philosophy revolves around building predictable, secure, and maintainable software. At Mash Virtual, I have architected 40+ RESTful APIs, optimized complex PostgreSQL database queries to yield 25–30% performance gains, and built multi-tenant application security frameworks with ASP.NET Identity & JWT.
            </p>

            {/* Quick Education Callout Box */}
            <div className="p-4 rounded-xl bg-[#141724] border border-violet-500/20 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-violet-600/20 text-violet-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Delhi Technological University (DTU)</h4>
                <p className="text-xs text-slate-300 font-mono">B.Tech in Electronics & Communication Engineering (2020 – 2024)</p>
                <p className="text-xs text-cyan-400 font-semibold">CGPA: 8.3 / 10 • General Secretary, Cognitive Minds Society</p>
              </div>
            </div>
          </div>

          {/* Core Pillars Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {CORE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#12141d] border border-white/10 hover:border-violet-500/40 glass-panel-hover transition-all space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white/5 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
