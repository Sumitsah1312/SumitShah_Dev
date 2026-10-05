import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('submitted');
      // Create mailto fallback link automatically
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || 'Inquiry regarding Software Development Role'
      )}&body=${encodeURIComponent(
        `Hi Sumit,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0e1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Call to Action & Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have a problem <span className="text-gradient-violet-cyan">worth solving?</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              I am actively seeking backend, full-stack, and software engineering opportunities. Whether you have a challenging technical problem, scalable system to build, or team position to fill, feel free to reach out.
            </p>

            {/* Direct Details Cards */}
            <div className="space-y-4 pt-4">
              {/* Email card */}
              <div className="p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-violet-600/20 text-violet-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-white hover:text-cyan-400 transition-colors font-mono"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  aria-label="Copy email"
                >
                  {copiedType === 'email' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone card */}
              <div className="p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-600/20 text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Phone / WhatsApp</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-white hover:text-cyan-400 transition-colors font-mono"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  aria-label="Copy phone"
                >
                  {copiedType === 'phone' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl glass-panel border border-white/10 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-600/20 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                  <span className="text-sm font-bold text-white font-mono">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Configurable Profile Links */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono border border-white/10 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-slate-400 mb-6 font-mono">
              Direct form trigger using default mail client integration.
            </p>

            {status === 'submitted' ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-white">Opening Email Client...</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Your mail client has been launched with your pre-filled message to{' '}
                  <strong className="text-cyan-300">{PERSONAL_INFO.email}</strong>.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-xs font-mono text-cyan-400 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 mb-1 block">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c10] border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 mb-1 block">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c10] border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 mb-1 block">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Software Development Role / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c10] border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 mb-1 block">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your team, role opportunity, or project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c10] border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold text-sm transition-all shadow-lg shadow-violet-600/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Preparing Email...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
