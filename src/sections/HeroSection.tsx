import { ArrowRight, FileText, Mail, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import Hero3D from '../components/Hero3D';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Glow Orbs in background */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Development & Backend Opportunities</span>
            </div>

            {/* Name and Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase font-sans">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold font-mono text-gradient-violet-cyan">
                {PERSONAL_INFO.role}
              </h2>
            </div>

            {/* Main Headline */}
            <h3 className="text-2xl sm:text-3xl font-medium text-slate-100 leading-snug max-w-2xl">
              "{PERSONAL_INFO.headline}"
            </h3>

            {/* Supporting Bio */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl font-sans">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold text-sm transition-all shadow-lg shadow-violet-600/25 active:scale-95 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download="Sumit_Kumar_Shah_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-semibold text-sm transition-all border border-white/15 active:scale-95"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Quick Specs */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>
                <span>•</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-slate-300" />
                  <span>LinkedIn</span>
                </a>
                <span>•</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-300" />
                  <span>Email</span>
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-slate-400">
                <Terminal className="w-4 h-4 text-violet-400" />
                <span>DTU '24 • C# .NET 8 • PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Right 3D Visual Experience */}
          <div className="lg:col-span-5 w-full h-full min-h-[350px]">
            <div className="w-full h-full glass-panel rounded-3xl border border-white/10 shadow-2xl p-2 relative overflow-hidden group">
              {/* Subtle top indicator bar inside container */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#0b0c10]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-mono text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>System Topology Preview</span>
              </div>

              {/* 3D Scene */}
              <Hero3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
