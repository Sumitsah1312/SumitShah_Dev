import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import EducationSection from './sections/EducationSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [hasResumePdf, setHasResumePdf] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if /resume.pdf exists on server
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => {
        setHasResumePdf(res.ok);
      })
      .catch(() => {
        setHasResumePdf(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f3f4f6] font-sans selection:bg-violet-600/30 selection:text-cyan-300">
      {/* Resume missing alert banner for local dev setup guidance */}
      {hasResumePdf === false && (
        <div className="bg-gradient-to-r from-violet-950 via-indigo-900 to-violet-950 text-cyan-300 text-xs font-mono py-2 px-4 text-center border-b border-violet-700/50 sticky top-0 z-50 flex items-center justify-center gap-2">
          <span>💡 Note: Place your resume PDF at <code className="bg-black/40 px-1.5 py-0.5 rounded text-white">public/resume.pdf</code> to enable direct one-click PDF downloads.</span>
        </div>
      )}

      {/* Global Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
