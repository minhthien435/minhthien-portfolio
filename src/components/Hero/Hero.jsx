import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { personalInfo } from '../../data/portfolio';
import PersonalAvatar from '../Avatar/PersonalAvatar';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } } },
  item: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  },
};

const ROLES = ['Frontend Developer', 'React Developer', 'UI Enthusiast', 'Web Creator'];

export default function Hero() {
  const reduced = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);

  useEffect(() => {
    // Trigger portal opening animation right after mount
    const timer = setTimeout(() => setPortalOpen(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (reduced) { setDisplayed(ROLES[0]); return; }
    const currentRole = ROLES[roleIndex];
    let timeout;
    if (!isDeleting) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex, reduced]);

  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      aria-label="Hero Portal"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* ── PORTAL ENTRANCE ANIMATION OVERLAY (Cinematic 1.25s opening) ── */}
      {!reduced && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 50,
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
        >
          {/* Left Curtain Panel */}
          <motion.div
            initial={{ x: '0%' }}
            animate={{ x: portalOpen ? '-105%' : '0%' }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.25 }}
            style={{
              position: 'absolute',
              top: 0, left: 0, bottom: 0,
              width: '50.5%',
              background: 'var(--bg-cream)',
              borderRight: '2px solid var(--border-md)',
              boxShadow: '20px 0 50px rgba(0,0,0,0.18)',
            }}
          />

          {/* Right Curtain Panel */}
          <motion.div
            initial={{ x: '0%' }}
            animate={{ x: portalOpen ? '105%' : '0%' }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.25 }}
            style={{
              position: 'absolute',
              top: 0, right: 0, bottom: 0,
              width: '50.5%',
              background: 'var(--bg-cream)',
              borderLeft: '2px solid var(--border-md)',
              boxShadow: '-20px 0 50px rgba(0,0,0,0.18)',
            }}
          />

          {/* Travelling Accent Dots */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex', gap: '16px', zIndex: 52,
          }}>
            <motion.div
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: portalOpen ? -280 : 0, opacity: portalOpen ? 0 : 1 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              style={{
                width: 14, height: 14, borderRadius: '50%',
                background: 'var(--violet)',
                boxShadow: '0 0 20px var(--violet)',
              }}
            />
            <motion.div
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: portalOpen ? 280 : 0, opacity: portalOpen ? 0 : 1 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              style={{
                width: 14, height: 14, borderRadius: '50%',
                background: 'var(--cyan)',
                boxShadow: '0 0 20px var(--cyan)',
              }}
            />
          </div>

          {/* Split Portal Wordmark */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 53,
          }}>
            <motion.div
              initial={{ opacity: 1, scale: 1, letterSpacing: '0em' }}
              animate={{
                opacity: portalOpen ? 0 : 1,
                scale: portalOpen ? 1.35 : 1,
                letterSpacing: portalOpen ? '-0.05em' : '0em',
              }}
              transition={{ duration: 1.15, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
              style={{
                display: 'flex', gap: '0.5em',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 8vw, 6.5rem)',
                textTransform: 'uppercase',
                color: 'var(--text)',
              }}
            >
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: portalOpen ? '-50vw' : '0vw' }}
                transition={{ duration: 1.25, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                style={{ display: 'inline-block' }}
              >
                My
              </motion.span>
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: portalOpen ? '50vw' : '0vw' }}
                transition={{ duration: 1.25, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                style={{ display: 'inline-block', color: 'var(--violet)' }}
              >
                Portfolio<span style={{ color: 'var(--yellow)' }}>.</span>
              </motion.span>
            </motion.div>
          </div>
        </div>
      )}

      {/* Background shapes & ambient particles */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Large cream circle */}
        <div style={{
          position: 'absolute', top: '5%', right: '-8%',
          width: 520, height: 520, borderRadius: '50%',
          background: 'var(--bg-cream)', border: '1px solid var(--border)',
          zIndex: 0,
        }} />
        {/* Small violet circle */}
        <div style={{
          position: 'absolute', bottom: '15%', left: '3%',
          width: 160, height: 160, borderRadius: '50%',
          background: 'var(--violet-light)',
          zIndex: 0,
        }} />
        {/* Yellow blob */}
        <div style={{
          position: 'absolute', top: '20%', left: '12%',
          width: 80, height: 80, borderRadius: '50%',
          background: 'var(--yellow-light)',
          zIndex: 0,
        }} />

        {/* Grid dots pattern */}
        <svg style={{ position: 'absolute', top: 80, left: 0, opacity: 0.35 }} width="300" height="300" viewBox="0 0 300 300">
          {Array.from({ length: 10 }).map((_, r) =>
            Array.from({ length: 10 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 30 + 15} cy={r * 30 + 15} r="2" fill="var(--border-md)" />
            ))
          )}
        </svg>

        {/* Floating star */}
        <motion.div
          animate={{ rotate: [0, 20, -5, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '14%', left: '38%', fontSize: '2rem', color: 'var(--yellow)', zIndex: 1 }}
        >
          ★
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -15, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ position: 'absolute', top: '32%', right: '6%', fontSize: '1.25rem', color: 'var(--cyan)', zIndex: 1 }}
        >
          ✦
        </motion.div>

        {/* Floating particles */}
        {[
          { top: '8%', left: '22%', size: 6, delay: 0, dur: 6, color: 'var(--violet)' },
          { top: '75%', left: '18%', size: 8, delay: 1.2, dur: 7, color: 'var(--cyan)' },
          { top: '55%', left: '60%', size: 5, delay: 2, dur: 5, color: 'var(--yellow)' },
          { top: '25%', left: '80%', size: 7, delay: 0.5, dur: 8, color: 'var(--violet)' },
          { top: '88%', left: '72%', size: 5, delay: 3, dur: 6, color: 'var(--green)' },
          { top: '40%', left: '5%', size: 4, delay: 1.5, dur: 9, color: 'var(--rose)' },
          { top: '65%', left: '45%', size: 6, delay: 2.5, dur: 7, color: 'var(--cyan)' },
          { top: '15%', left: '55%', size: 9, delay: 0.8, dur: 10, color: 'var(--yellow)' },
        ].map((p, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: p.top, left: p.left,
              width: p.size, height: p.size,
              borderRadius: '50%',
              background: p.color,
              opacity: 0.45,
              animation: `particle-float ${p.dur}s ease-in-out ${p.delay}s infinite`,
              zIndex: 0,
            }}
          />
        ))}
      </div>

      {/* Hero Main Content */}
      <div className="container" style={{ position: 'relative', zIndex: 5, paddingTop: '2rem', paddingBottom: '3rem' }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) auto',
          gap: '2.5rem',
          alignItems: 'center',
        }}>
          {/* Text side */}
          <motion.div
            className="hero-text-col"
            variants={stagger.container}
            initial={reduced ? false : 'hidden'}
            animate={reduced ? false : 'show'}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}
          >
            

            {/* Name */}
            <motion.div variants={stagger.item}>
              <h1 className="display" style={{ color: 'var(--text)' }}>
                Minh{' '}
                <span className="gradient-text">Le</span>
                <br />
                <span
                  style={{
                    fontSize: 'clamp(1.125rem, 3vw, 1.625rem)',
                    fontWeight: 500,
                    color: 'var(--violet)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.4,
                    display: 'block',
                    marginTop: '0.5rem',
                    minHeight: '2em',
                  }}
                >
                  {displayed}<span className="typing-cursor">|</span>
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={stagger.item}
              style={{
                fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
                color: 'var(--text-2)',
                lineHeight: 1.75,
                maxWidth: 500,
              }}
            >
              {personalInfo.description}
            </motion.p>

            {/* Tech stack line */}
            <motion.div
              variants={stagger.item}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}
            >
              {['ReactJS', 'JavaScript', 'HTML/CSS'].map((s) => (
                <span key={s} className="tag tag-violet" style={{ fontSize: '0.8rem' }}>{s}</span>
              ))}
              <span style={{ color: 'var(--text-3)', fontSize: '0.8rem' }}>+more</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="hero-cta-row"
              variants={stagger.item}
              style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo('#projects')}
                className="btn btn-primary"
              >
                View Projects <ArrowRight size={16} />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass"
              >
                <GitHubIcon size={16} /> GitHub
              </motion.a>
            </motion.div>

            {/* University note */}
            <motion.p
              variants={stagger.item}
              style={{ fontSize: '0.8125rem', color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <span>🎓</span>
              {personalInfo.status} · {personalInfo.university}
            </motion.p>
          </motion.div>

          {/* Personal Avatar Card */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.9 }}
            animate={reduced ? false : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            className="mascot-col"
          >
            <PersonalAvatar size={320} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to About"
        initial={reduced ? false : { opacity: 0 }}
        animate={reduced ? false : { opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          background: 'var(--bg-white)',
          border: '1.5px solid var(--border)',
          borderRadius: 'var(--r-full)',
          padding: '0.5rem 0.75rem',
          cursor: 'pointer',
          color: 'var(--text-3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)',
          animation: 'float 2.5s ease-in-out infinite',
          zIndex: 6,
        }}
        className="hero-scroll-indicator"
      >
        <ChevronDown size={18} />
      </motion.button>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            text-align: center;
          }
          .hero-text-col {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .hero-cta-row {
            justify-content: center !important;
          }
          .mascot-col { order: -1; margin-bottom: 0.5rem; }
          .mascot-col svg { width: 100% !important; max-width: 210px; height: auto !important; }
        }

        @media (max-width: 560px) {
          .mascot-col svg { max-width: 160px; }
          .hero-grid { gap: 1rem !important; }
          .hero-cta-row .btn { flex: 1; justify-content: center; min-width: 0; }
        }

        @media (max-width: 380px) {
          .mascot-col { display: none !important; }
        }

        @media (max-height: 640px) {
          .hero-scroll-indicator { display: none; }
        }
      `}</style>
    </section>
  );
}
