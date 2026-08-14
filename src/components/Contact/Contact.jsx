import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, FileText, Send, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { contact, personalInfo } from '../../data/portfolio';
import MagneticButton from '../Common/MagneticButton';

export default function Contact({ onOpenCv }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      personalInfo.email
    )}&su=${encodeURIComponent('Frontend Developer Internship Inquiry — Minh Le')}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-28 px-4 md:px-8 bg-stone-950 text-white relative">
      {/* Dynamic ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-violet-600/15 via-cyan-500/15 to-rose-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-700/40 text-violet-300 text-xs font-mono mb-4 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>GET IN TOUCH</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          Let's{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-rose-400">
            Connect
          </span>
        </h2>

        <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12 font-light">
          Interested in working together or discussing a project? Feel free to get in touch.
        </p>

        {/* Contact Terminal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-stone-900/80 border border-stone-800 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-stone-950/80 border border-stone-800/80 mb-8">
            <div className="flex items-center gap-3 text-left">
              <div className="p-3 rounded-xl bg-violet-600/20 text-violet-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-stone-400 block">Direct Email Channel</span>
                <span className="text-sm sm:text-base font-mono font-bold text-white selection:bg-cyan-500">
                  {personalInfo.email}
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                copied
                  ? 'bg-emerald-500 text-stone-950 shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <button
                onClick={handleSendEmail}
                className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold text-sm tracking-wide shadow-xl hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>Compose via Gmail</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={onOpenCv}
                className="flex items-center gap-2 px-6 py-4 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-semibold text-sm transition-all hover:scale-105"
              >
                <FileText className="w-4 h-4 text-violet-400" />
                <span>View Full CV (PDF)</span>
              </button>
            </MagneticButton>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-300 hover:text-white transition-all hover:scale-110"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
