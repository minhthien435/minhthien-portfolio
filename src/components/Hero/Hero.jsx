import { motion } from 'framer-motion';
import { ArrowRight, Github, ChevronDown } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import Mascot from '../../mascot/Mascot';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } },
  item: {
    hidden: { opacity: 0, y: 28 },
    show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  },
};

export default function Hero() {
  const reduced = useReducedMotion();

  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  const motionProps = (variant) => reduced
    ? {}
    : { variants: variant, initial: 'hidden', animate: 'show' };

  return (
    <section
      id="hero"
      aria-label="Hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 72,
      }}
    >
      {/* Background shapes */}
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

        {/* Doodle elements */}
        {/* Grid dots pattern */}
        <svg style={{ position: 'absolute', top: 80, left: 0, opacity: 0.35 }} width="300" height="300" viewBox="0 0 300 300">
          {Array.from({ length: 10 }).map((_, r) =>
            Array.from({ length: 10 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 30 + 15} cy={r * 30 + 15} r="2" fill="var(--border-md)" />
            ))
          )}
        </svg>

        {/* Hand-drawn arrow annotation */}
        <svg style={{ position: 'absolute', bottom: '22%', right: '18%', opacity: 0.5 }} width="80" height="60" viewBox="0 0 80 60">
          <path d="M10 50 Q30 10 60 20" stroke="var(--violet)" strokeWidth="2" fill="none" strokeDasharray="5 4" strokeLinecap="round"/>
          <polygon points="54,14 60,22 66,16" fill="var(--violet)" />
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
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '3rem 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) auto',
          gap: '2rem',
          alignItems: 'center',
        }}>
          {/* Text side */}
          <motion.div
            variants={stagger.container}
            initial={reduced ? false : 'hidden'}
            animate={reduced ? false : 'show'}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Available badge */}
            <motion.div variants={stagger.item}>
              <motion.span
                whileHover={{ scale: 1.03 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.4rem 1rem',
                  borderRadius: 'var(--r-full)',
                  background: 'var(--green-light)',
                  border: '1.5px solid #A7F3D0',
                  fontSize: '0.8125rem', fontWeight: 600, color: '#065F46',
                  cursor: 'default',
                }}
              >
                <span style={{
                  width: 7, height: 7, borderRadius: '50%', background: '#10B981',
                  display: 'inline-block', animation: 'pulse-ring 2s infinite',
                }} />
                Open to Internship
              </motion.span>
            </motion.div>

            {/* Name */}
            <motion.div variants={stagger.item}>
              <h1 className="display" style={{ color: 'var(--text)' }}>
                Minh{' '}
                <span className="gradient-text">Le</span>
                <br />
                <span style={{
                  fontSize: 'clamp(1.125rem, 3vw, 1.625rem)',
                  fontWeight: 500,
                  color: 'var(--text-2)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.4,
                  display: 'block',
                  marginTop: '0.5rem',
                }}>
                  Frontend Developer Intern
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

            {/* Stack info line */}
            <motion.div
              variants={stagger.item}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}
            >
              {['ReactJS', 'JavaScript', 'HTML/CSS'].map((s, i) => (
                <span key={s} className="tag tag-violet" style={{ fontSize: '0.8rem' }}>{s}</span>
              ))}
              <span style={{ color: 'var(--text-3)', fontSize: '0.8rem' }}>+more</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
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
                className="btn btn-outline"
              >
                <Github size={16} /> GitHub
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

          {/* Mascot side */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: 40 }}
            animate={reduced ? false : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            className="mascot-col"
          >
            <Mascot size={300} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to About"
        initial={reduced ? false : { opacity: 0 }}
        animate={reduced ? false : { opacity: 1 }}
        transition={{ delay: 1.4 }}
        whileHover={{ scale: 1.1 }}
        style={{
          position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
          background: 'var(--bg-white)',
          border: '1.5px solid var(--border)',
          borderRadius: 'var(--r-full)',
          padding: '0.5rem 0.75rem',
          cursor: 'pointer',
          color: 'var(--text-3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)',
          animation: 'float 2.5s ease-in-out infinite',
        }}
      >
        <ChevronDown size={18} />
      </motion.button>

      <style>{`
        @media (max-width: 720px) {
          .mascot-col { display: none !important; }
        }
      `}</style>
    </section>
  );
}
