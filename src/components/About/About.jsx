import { motion } from 'framer-motion';
import { GraduationCap, Target, Globe, Sparkles } from 'lucide-react';
import { personalInfo, aboutText, careerObjective } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import Mascot from '../../mascot/Mascot';
import fptCampus from '../../assets/fpt-campus.jpg';

const reveal = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function BentoCell({ children, style = {}, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      variants={reveal}
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? false : 'visible'}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" aria-label="About Me" style={{ background: 'var(--bg-cream)' }}>
      <div className="divider" />
      <div className="container section-gap">
        {/* Header */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginBottom: '2.5rem' }}
        >
          <p className="section-eyebrow">Who I Am</p>
          <h2 className="headline" style={{ marginTop: '0.5rem' }}>About Me</h2>
        </motion.div>

        {/* BENTO GRID */}
        <div className="bento-grid-container">

          {/* Cell 1 — Bio (large, spans 2 cols) */}
          <BentoCell
            delay={0}
            className="bento-span-2"
            style={{
              background: 'var(--bg-white)',
              border: '1.5px solid var(--border)',
              borderRadius: 'var(--r-xl)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Avatar + name row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: 'var(--violet)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800, fontSize: '1.25rem', color: 'white',
                flexShrink: 0,
                boxShadow: 'var(--shadow-violet)',
              }}>
                ML
              </div>
              <div style={{ minWidth: 0 }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.125rem', color: 'var(--text)' }}>
                  {personalInfo.name}
                </h3>
                <p style={{ color: 'var(--violet)', fontWeight: 600, fontSize: '0.8125rem', wordBreak: 'break-word' }}>
                  {personalInfo.careerDirection} · Student
                </p>
              </div>
            </div>
            <p className="bento-bio-text" style={{ color: 'var(--text-2)', lineHeight: 1.7 }}>
              {aboutText}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="tag tag-violet">ReactJS</span>
              <span className="tag tag-cyan">JavaScript</span>
              <span className="tag tag-yellow">HTML / CSS</span>
            </div>
          </BentoCell>

          {/* Cell 2 — FPT University Campus Image Card */}
          <BentoCell
            delay={0.1}
            style={{
              borderRadius: 'var(--r-xl)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1.5px solid var(--border-md)',
            }}
          >
            {/* Background Campus Photo with dark gradient overlay */}
            <img
              src={fptCampus}
              alt="FPT University Campus"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                zIndex: 0,
                transition: 'transform 0.5s ease',
              }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(15,10,30,0.88) 0%, rgba(15,10,30,0.45) 60%, rgba(15,10,30,0.2) 100%)',
              zIndex: 1,
            }} />

            {/* Top Row: Icon + Badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 2 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'rgba(255,255,255,0.22)',
                backdropFilter: 'blur(8px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.3)',
              }}>
                <GraduationCap size={20} color="white" />
              </div>
              <span style={{
                fontSize: '0.68rem', fontWeight: 700,
                padding: '0.2rem 0.6rem', borderRadius: 99,
                background: 'rgba(255,255,255,0.25)',
                color: 'white', letterSpacing: '0.04em',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.3)',
              }}>
                2nd Year
              </span>
            </div>

            {/* Bottom Content */}
            <div style={{ zIndex: 2, marginTop: '1.5rem' }}>
              <p style={{
                fontSize: '0.68rem', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                color: 'var(--yellow)', marginBottom: '0.2rem',
              }}>
                FPT UNIVERSITY
              </p>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800, fontSize: '1.25rem',
                color: 'white', lineHeight: 1.2, marginBottom: '0.25rem',
              }}>
                Software Engineering
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                Bachelor of IT · {personalInfo.educationPeriod}
              </p>
            </div>
          </BentoCell>

          {/* Cell 3 — Career goal */}
          <BentoCell
            delay={0.15}
            style={{
              background: 'var(--yellow-light)',
              border: '1.5px solid var(--yellow-border)',
              borderRadius: 'var(--r-xl)',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Target size={24} color="var(--yellow-text)" />
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.9375rem', color: 'var(--yellow-text)', marginBottom: '0.25rem' }}>
                Career Goal
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--yellow-text)', lineHeight: 1.5, opacity: 0.9 }}>
                Frontend Developer — seeking internship to grow with real-world projects.
              </p>
            </div>
          </BentoCell>

          {/* Cell 4 — English */}
          <BentoCell
            delay={0.2}
            style={{
              background: 'var(--cyan-light)',
              border: '1.5px solid var(--cyan-border)',
              borderRadius: 'var(--r-xl)',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Globe size={24} color="var(--cyan-text)" />
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.5rem', color: 'var(--cyan-text)' }}>
                IELTS 6.0
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--cyan-text)', opacity: 0.85 }}>English Proficiency</p>
            </div>
          </BentoCell>

          {/* Cell 5 — Internship seeking */}
          <BentoCell
            delay={0.25}
            className="bento-span-2"
            style={{
              background: 'var(--bg-white)',
              border: '1.5px solid var(--border)',
              borderRadius: 'var(--r-xl)',
              padding: '1.75rem',
            }}
          >
            <div className="bento-looking-for-row">
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: 'var(--green-light)', border: '1.5px solid #A7F3D0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Sparkles size={20} color="#065F46" />
              </div>
              <div style={{ width: '100%', minWidth: 0, overflow: 'hidden' }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text)', marginBottom: '0.5rem', wordBreak: 'break-word' }}>
                  Currently Looking For
                </p>
                <p style={{ color: 'var(--text-2)', fontSize: '0.875rem', lineHeight: 1.7, wordBreak: 'break-word' }}>
                  A <strong>Frontend Developer Internship</strong> where I can contribute, learn from senior developers, and work on real-world products.
                </p>
                <ul style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem', width: '100%' }}>
                  {careerObjective.reasons.map(r => (
                    <li key={r} style={{ listStyle: 'none', maxWidth: '100%' }}>
                      <span className="tag tag-green" style={{ fontSize: '0.75rem', whiteSpace: 'normal', wordBreak: 'break-word', display: 'inline-block' }}>✓ {r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </BentoCell>
        </div>
      </div>

      <style>{`
        .bento-grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .bento-grid-container > div {
          min-width: 0;
          max-width: 100%;
          width: 100%;
          transition: all 0.25s ease;
        }
        .bento-span-2 {
          grid-column: span 2;
        }
        .bento-looking-for-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .bento-bio-text {
          font-size: clamp(0.875rem, 2.5vw, 1rem);
        }
        @media (max-width: 900px) {
          .bento-grid-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem;
          }
        }
        @media (max-width: 640px) {
          .bento-grid-container {
            grid-template-columns: 1fr !important;
            gap: 0.875rem;
          }
          .bento-span-2 {
            grid-column: span 1 !important;
          }
          .bento-grid-container > div {
            min-height: auto !important;
          }
        }
        @media (max-width: 520px) {
          .bento-looking-for-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
        }
        @media (max-width: 480px) {
          .bento-span-2,
          .bento-grid-container > div {
            padding: 1.15rem !important;
          }
        }
      `}</style>
    </section>
  );
}
