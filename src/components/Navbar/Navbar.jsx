import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUp, FileText, Sparkles } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { personalInfo } from '../../data/portfolio';
import MagneticButton from '../Common/MagneticButton';
import BrandLogo from '../Common/BrandLogo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenCv }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [showTop, setShowTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      setShowTop(window.scrollY > 600);
      const ids = navLinks.map((l) => l.href.replace('#', ''));
      let cur = '';
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-cyan-400 to-rose-500 z-50 origin-left"
        style={{ scaleX: progress }}
      />

      {/* Floating Island Navigation Bar */}
      <header className="fixed top-5 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-2 md:gap-4 px-4 py-2 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-stone-950/85 backdrop-blur-2xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
              : 'bg-stone-900/70 backdrop-blur-xl border border-white/10 shadow-xl'
          }`}
        >
          {/* Brand Logo with Basketball Theme */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="flex items-center gap-2 pl-1 pr-1 group"
          >
            <BrandLogo className="w-8 h-8" showText={false} />
            <span className="text-xs font-bold text-white tracking-tight hidden sm:inline-block group-hover:text-cyan-300 transition-colors">
              {personalInfo.name}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-stone-950/60 p-1 rounded-full border border-white/5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-stone-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-1.5 md:gap-2">
            {/* GitHub Profile Link */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            {/* View CV Trigger */}
            <MagneticButton>
              <button
                onClick={onOpenCv}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md transition-all hover:scale-105"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View CV</span>
              </button>
            </MagneticButton>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 inset-x-4 z-40 rounded-3xl p-6 shadow-2xl md:hidden bg-stone-900/95 border border-white/10 text-white backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="px-4 py-3 rounded-2xl text-sm font-bold transition-colors hover:bg-white/10 text-stone-200"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-stone-800 flex items-center justify-between gap-3">
                <button
                  onClick={onOpenCv}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Scroll To Top Button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-xl hover:scale-110 active:scale-95 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
