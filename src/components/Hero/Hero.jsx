import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, FileText, Sparkles, Code2, Globe, Cpu, Award } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { personalInfo } from '../../data/portfolio';
import MagneticButton from '../Common/MagneticButton';
import photoMinhLe from '../../assets/minhle-photo.jpg';
import mascot3D from '../../assets/robot-mascot-3d.png';

const ROLES = ['Frontend Developer Intern', 'React Specialist', 'UI/UX Craftsman', 'Creative Web Creator'];

export default function Hero({ onOpenCv }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showMascot, setShowMascot] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;
    if (!isDeleting) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 75);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 md:px-8 bg-stone-950 overflow-hidden"
    >
      {/* Dynamic Background Cyber Grid & Rich Multi-Color Beams */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-violet-600/25 to-indigo-600/25 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-[450px] h-[450px] bg-gradient-to-bl from-cyan-500/25 to-emerald-500/25 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Column: Kinetic Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Main Kinetic Headline with vibrant gradient */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08] mb-4">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 via-fuchsia-400 to-rose-400 drop-shadow-[0_0_35px_rgba(139,92,246,0.35)]">
              {personalInfo.name}
            </span>
          </h1>

          {/* Typewriter Subtitle Role */}
          <div className="flex items-center gap-2.5 text-lg sm:text-xl md:text-2xl font-mono text-stone-300 mb-6">
            <span className="text-stone-400">I am a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 font-extrabold">
              {displayed}
            </span>
            <span className="inline-block w-2 h-6 bg-cyan-400 animate-pulse ml-0.5 shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
          </div>

          {/* Bio Description */}
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8 font-light">
            {personalInfo.description}
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <MagneticButton>
              <button
                onClick={() => scrollTo('#projects')}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 text-white font-bold text-sm tracking-wide shadow-[0_0_35px_rgba(124,58,237,0.45)] transition-all hover:scale-105"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={onOpenCv}
                className="flex items-center gap-2 px-7 py-4 rounded-full bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-violet-500/40 hover:border-violet-400 font-semibold text-sm transition-all hover:scale-105 shadow-lg"
              >
                <FileText className="w-4 h-4 text-violet-400" />
                <span>View Full CV</span>
              </button>
            </MagneticButton>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-stone-900/90 hover:bg-stone-800 border border-stone-700 hover:border-cyan-400 text-stone-300 hover:text-white transition-all hover:scale-110 shadow-lg"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Live Metric Badges Bar with rich color gradients */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-stone-800/80">
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-violet-950/60 to-stone-900/80 border border-violet-500/30 hover:border-violet-400 transition-all shadow-md">
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">
                FPT Uni
              </div>
              <div className="text-xs text-violet-300 font-mono mt-0.5 font-semibold">Software Eng</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan-950/60 to-stone-900/80 border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-md">
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                3+ Projects
              </div>
              <div className="text-xs text-cyan-300 font-mono mt-0.5 font-semibold">React & JS</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-950/60 to-stone-900/80 border border-amber-500/30 hover:border-amber-400 transition-all shadow-md">
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                IELTS 6.0
              </div>
              <div className="text-xs text-amber-300 font-mono mt-0.5 font-semibold">Global Certified</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-rose-950/60 to-stone-900/80 border border-rose-500/30 hover:border-rose-400 transition-all shadow-md">
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">
                3 Certs
              </div>
              <div className="text-xs text-rose-300 font-mono mt-0.5 font-semibold">Coursera Verified</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Holographic 3D Interactive Profile & Mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          {/* Main Visual Container */}
          <div className="relative w-72 sm:w-80 md:w-96 aspect-square rounded-3xl p-1 bg-gradient-to-tr from-violet-600 via-cyan-400 via-fuchsia-500 to-rose-500 shadow-[0_0_60px_rgba(124,58,237,0.4)] group">
            <div className="w-full h-full rounded-[22px] overflow-hidden bg-stone-950 relative flex items-center justify-center">
              <img
                src={showMascot ? mascot3D : photoMinhLe}
                alt="Minh Le"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-60" />

              {/* Switch Avatar Mode Button */}
              <button
                onClick={() => setShowMascot(!showMascot)}
                className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-stone-900/90 hover:bg-stone-800 border border-cyan-400/40 backdrop-blur-md text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg transition-all hover:scale-105"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{showMascot ? 'View Real Photo' : 'View 3D Mascot'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div
        onClick={() => scrollTo('#about')}
        className="mt-12 flex flex-col items-center gap-2 text-stone-400 hover:text-cyan-400 cursor-pointer transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase font-semibold">DISCOVER PROFILE</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </div>
    </section>
  );
}
