import { motion } from 'framer-motion';
import { GraduationCap, Target, Globe, Sparkles } from 'lucide-react';
import { personalInfo, aboutText, careerObjective } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import Mascot from '../../mascot/Mascot';

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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
          gap: '1rem',
        }}>

          {/* Cell 1 — Bio (large, spans 2 cols) */}
          <BentoCell
            delay={0}
            style={{
              gridColumn: 'span 2',
              background: 'var(--bg-white)',
              border: '1.5px solid var(--border)',
              borderRadius: 'var(--r-xl)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              position: 'relative',
            }}
          >
            {/* Mini mascot sticker */}
            <div className="about-mascot" style={{ position: 'absolute', top: '1.25rem', right: '1.5rem', opacity: 0.9, pointerEvents: 'none' }}>
              <Mascot size={72} compact />
            </div>

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
              <div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.125rem', color: 'var(--text)' }}>
                  {personalInfo.name}
                </h3>
                <p style={{ color: 'var(--violet)', fontWeight: 600, fontSize: '0.875rem' }}>
                  {personalInfo.careerDirection} · Student
                </p>
              </div>
            </div>
            <p style={{ color: 'var(--text-2)', lineHeight: 1.8, fontSize: '1rem' }}>
              {aboutText}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="tag tag-violet">ReactJS</span>
              <span className="tag tag-cyan">JavaScript</span>
              <span className="tag tag-yellow">HTML / CSS</span>
            </div>
          </BentoCell>

          {/* Cell 2 — University card (1 col) */}
          <BentoCell
            delay={0.1}
            style={{
              background: 'var(--violet)',
              borderRadius: 'var(--r-xl)',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              color: 'white',
              minHeight: 180,
            }}
          >
            <GraduationCap size={28} color="rgba(255,255,255,0.7)" />
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>
                FPT University
              </p>
              <p style={{ fontSize: '0.8125rem', opacity: 0.75 }}>Software Engineering</p>
              <p style={{ fontSize: '0.75rem', opacity: 0.6, marginTop: '0.25rem' }}>{personalInfo.educationPeriod}</p>
            </div>
          </BentoCell>

          {/* Cell 3 — Career goal */}
          <BentoCell
            delay={0.15}
            style={{
              background: 'var(--yellow)',
              borderRadius: 'var(--r-xl)',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 160,
            }}
          >
            <Target size={24} color="#92400E" />
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.9375rem', color: '#78350F', marginBottom: '0.25rem' }}>
                Career Goal
              </p>
              <p style={{ fontSize: '0.8125rem', color: '#92400E', lineHeight: 1.5 }}>
                Frontend Developer — seeking internship to grow with real-world projects.
              </p>
            </div>
          </BentoCell>

          {/* Cell 4 — English */}
          <BentoCell
            delay={0.2}
            style={{
              background: 'var(--cyan-light)',
              border: '1.5px solid #A5F3FC',
              borderRadius: 'var(--r-xl)',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 160,
            }}
          >
            <Globe size={24} color="#0E7490" />
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.5rem', color: '#0E7490' }}>
                IELTS 6.0
              </p>
              <p style={{ fontSize: '0.8125rem', color: '#0E7490', opacity: 0.8 }}>English Proficiency</p>
            </div>
          </BentoCell>

          {/* Cell 5 — Internship seeking */}
          <BentoCell
            delay={0.25}
            style={{
              gridColumn: 'span 2',
              background: 'var(--bg-white)',
              border: '1.5px solid var(--border)',
              borderRadius: 'var(--r-xl)',
              padding: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: 'var(--green-light)', border: '1.5px solid #A7F3D0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Sparkles size={20} color="#065F46" />
              </div>
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
                  Currently Looking For
                </p>
                <p style={{ color: 'var(--text-2)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  A <strong>Frontend Developer Internship</strong> where I can contribute, learn from senior developers, and work on real-world products.
                </p>
                <ul style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {careerObjective.reasons.map(r => (
                    <li key={r} style={{ listStyle: 'none' }}>
                      <span className="tag tag-green" style={{ fontSize: '0.75rem' }}>✓ {r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </BentoCell>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .bento-override { grid-template-columns: 1fr !important; }
          #about [style*="grid-column: span 2"] { grid-column: span 1 !important; }
          .about-mascot { display: none !important; }
        }
      `}</style>
    </section>
  );
}
