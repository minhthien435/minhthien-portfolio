import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/* ─── Timeline Data ─────────────────────────────────────────── */
const milestones = [
  {
    id: 1,
    date: 'December 2023',
    phase: 'Foundation',
    title: 'IELTS 6.0 Achieved',
    icon: '🌐',
    accent: 'cyan',
    tags: ['English', 'Communication'],
    bullets: [
      'Achieved an IELTS overall score of 6.0',
      'First major milestone in developing English communication skills',
      'Prepared myself for university and the technology field',
    ],
  },
  {
    id: 2,
    date: 'September 2024',
    phase: 'University',
    title: 'Started at FPT University',
    icon: '🎓',
    accent: 'violet',
    tags: ['FPT University', 'Software Engineering', 'IT'],
    bullets: [
      'Enrolled in Information Technology at FPT University',
      'Built foundation in programming, databases, and software engineering',
      'Studied web development fundamentals and problem-solving techniques',
    ],
  },
  {
    id: 3,
    date: 'Apr – Jun 2026',
    phase: 'First Project',
    title: 'Todo App — First Frontend Project',
    icon: '⚛️',
    accent: 'yellow',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'ES6+', 'LocalStorage'],
    bullets: [
      'Built my first focused frontend project: a full-featured Todo application',
      'Implemented CRUD operations, task filtering, and Local Storage persistence',
      'Strengthened understanding of frontend fundamentals and how web apps work',
    ],
  },
  {
    id: 4,
    date: 'Jun – Jul 2026',
    phase: 'Real-world Project',
    title: 'eParking Management System',
    icon: '🚗',
    accent: 'green',
    tags: ['ReactJS', 'JavaScript', 'Responsive UI', 'Full Stack'],
    bullets: [
      'Developed a practical parking management system from scratch',
      'Built parking slot management, booking flow, and payment integration',
      'Created responsive user interfaces — a major step from fundamentals to real apps',
    ],
  },
  {
    id: 5,
    date: 'August 2026 – Present',
    phase: 'Featured Project',
    title: 'JamWave – Music Streaming Web Platform',
    icon: '🎵',
    accent: 'violet',
    tags: ['ReactJS', 'Zustand', 'REST APIs', 'Audio Engine', 'AI Integration'],
    bullets: [
      'Built a Spotify-inspired music streaming platform with 2,400+ tracks from external music APIs',
      'Developed a custom audio player with React and Zustand, supporting queue, seeking, volume, and continuous playback',
      'Implemented search, playlists, and liked songs with REST API integration',
      'Integrated an AI music assistant for natural-language music search and recommendations',
    ],
    isCurrent: true,
  },
];

/* ─── Color Map ──────────────────────────────────────────────── */
const colorMap = {
  violet: {
    dot:    'var(--violet)',
    bg:     'var(--violet-light)',
    border: 'var(--violet-mid)',
    text:   'var(--violet)',
    tag:    'tag-violet',
    glow:   'rgba(139,92,246,0.22)',
  },
  cyan: {
    dot:    'var(--cyan)',
    bg:     'var(--cyan-light)',
    border: 'var(--cyan-border)',
    text:   'var(--cyan-text)',
    tag:    'tag-cyan',
    glow:   'rgba(56,189,248,0.22)',
  },
  yellow: {
    dot:    'var(--yellow)',
    bg:     'var(--yellow-light)',
    border: 'var(--yellow-border)',
    text:   'var(--yellow-text)',
    tag:    'tag-yellow',
    glow:   'rgba(251,191,36,0.22)',
  },
  green: {
    dot:    'var(--green)',
    bg:     'var(--green-light)',
    border: 'var(--green-border)',
    text:   'var(--green-text)',
    tag:    'tag-green',
    glow:   'rgba(52,211,153,0.22)',
  },
};


/* ─── Phase Badge ────────────────────────────────────────────── */
const phaseOrder = ['Foundation', 'University', 'First Project', 'Real-world Project', 'Featured Project'];

function PhaseBadge({ phase, accent }) {
  const c = colorMap[accent];
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.3rem',
      padding: '0.2rem 0.65rem',
      borderRadius: 'var(--r-full)',
      background: c.bg,
      border: `1.5px solid ${c.border}`,
      color: c.text,
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
    }}>
      <span style={{
        width: 5, height: 5, borderRadius: '50%',
        background: c.dot, display: 'inline-block',
      }} />
      {phase}
    </span>
  );
}

/* ─── Timeline Card ──────────────────────────────────────────── */
function TimelineCard({ item, isLeft, index }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const c = colorMap[item.accent];

  const variants = {
    hidden: { opacity: 0, x: isLeft ? -40 : 40 },
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={reduced ? {} : variants}
      initial={reduced ? false : 'hidden'}
      animate={inView ? 'visible' : 'hidden'}
      className={`tl-card-wrapper ${isLeft ? 'tl-left' : 'tl-right'}`}
    >
      <motion.div
        whileHover={{ y: -5, boxShadow: `0 16px 48px ${c.glow}, var(--shadow-md)` }}
        transition={{ duration: 0.25 }}
        className="tl-card"
        style={{
          background: 'var(--bg-white)',
          border: `1.5px solid ${c.border}`,
          borderRadius: 'var(--r-xl)',
          padding: '1.75rem',
          boxShadow: 'var(--shadow-sm)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Accent glow strip top-left */}
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: 4, height: '100%',
          background: `linear-gradient(to bottom, ${c.dot}, transparent)`,
          borderRadius: '4px 0 0 4px',
        }} />

        {/* Current pulse ring */}
        {item.isCurrent && (
          <div style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            display: 'flex', alignItems: 'center', gap: '0.375rem',
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--green)', display: 'inline-block',
              boxShadow: '0 0 0 0 var(--green)',
              animation: 'pulse-ring 2s ease-out infinite',
            }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#065F46' }}>Now</span>
          </div>
        )}

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
          {/* Icon */}
          <div style={{
            width: 50, height: 50, borderRadius: 14,
            background: c.bg, border: `1.5px solid ${c.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem', flexShrink: 0,
          }}>
            {item.icon}
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Phase badge */}
            <div style={{ marginBottom: '0.4rem' }}>
              <PhaseBadge phase={item.phase} accent={item.accent} />
            </div>
            {/* Date */}
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: '0.8125rem',
              color: c.text, letterSpacing: '-0.01em',
            }}>
              {item.date}
            </p>
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700, fontSize: '1.0625rem',
          color: 'var(--text)', lineHeight: 1.3,
          marginBottom: '0.875rem',
        }}>
          {item.title}
        </h3>

        {/* Bullet points */}
        <ul style={{
          display: 'flex', flexDirection: 'column', gap: '0.5rem',
          marginBottom: '1.125rem', paddingLeft: 0,
        }}>
          {item.bullets.map((b, i) => (
            <li key={i} style={{
              display: 'flex', gap: '0.625rem', alignItems: 'flex-start',
              listStyle: 'none',
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: '50%',
                background: c.dot, marginTop: '0.45rem', flexShrink: 0,
              }} />
              <span style={{
                color: 'var(--text-2)', fontSize: '0.875rem',
                lineHeight: 1.65,
              }}>
                {b}
              </span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {item.tags.map(t => (
            <span key={t} className={`tag ${c.tag}`} style={{ fontSize: '0.72rem' }}>
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Progress Steps Header ──────────────────────────────────── */
function ProgressSteps() {
  return (
    <div className="tl-progress-steps">
      {phaseOrder.map((phase, i) => (
        <div key={phase} className="tl-step" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <div style={{
            width: 28, height: 28, borderRadius: '50%',
            background: i === phaseOrder.length - 1 ? 'var(--violet)' : 'var(--bg-white)',
            border: `2px solid ${i === phaseOrder.length - 1 ? 'var(--violet)' : 'var(--border-md)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.7rem', fontWeight: 700,
            color: i === phaseOrder.length - 1 ? 'white' : 'var(--text-3)',
          }}>
            {i + 1}
          </div>
          <span style={{
            fontSize: '0.72rem', fontWeight: 600,
            color: i === phaseOrder.length - 1 ? 'var(--violet)' : 'var(--text-3)',
            whiteSpace: 'nowrap',
          }}>
            {phase}
          </span>
          {i < phaseOrder.length - 1 && (
            <div style={{
              flex: 1, height: 1,
              background: 'linear-gradient(to right, var(--border-md), transparent)',
              minWidth: 16,
            }} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
export default function Timeline() {
  const reduced = useReducedMotion();

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="timeline" aria-label="My Journey" style={{ background: 'var(--bg)' }}>
      <div className="divider" />
      <div className="container section-gap">

        {/* ── Section Header ── */}
        <motion.div
          ref={headerRef}
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '2.5rem' }}
        >
          <p className="section-eyebrow">Career Story</p>
          <h2 className="headline" style={{ marginTop: '0.5rem' }}>My Journey</h2>
          <p style={{
            color: 'var(--text-2)', marginTop: '0.75rem',
            maxWidth: 520, fontSize: '1rem', lineHeight: 1.7,
          }}>
            From my first English milestone to building real-world web applications — a story of continuous learning and growth.
          </p>
        </motion.div>

        {/* ── Progress Steps ── */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <ProgressSteps />
        </motion.div>

        {/* ── Timeline Body ── */}
        <div className="tl-body">
          {/* Vertical center line */}
          <div className="tl-line" aria-hidden="true">
            <div className="tl-line-fill" />
          </div>

          {/* Milestone cards */}
          {milestones.map((item, i) => (
            <div key={item.id} className="tl-row">
              {/* Left slot */}
              <div className="tl-slot tl-slot-left">
                {i % 2 === 0 && <TimelineCard item={item} isLeft={true} index={i} />}
              </div>

              {/* Center dot + connector */}
              <div className="tl-center">
                <motion.div
                  className="tl-dot"
                  initial={reduced ? false : { scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 300 }}
                  style={{
                    background: colorMap[item.accent].dot,
                    boxShadow: `0 0 0 4px var(--bg), 0 0 0 6px ${colorMap[item.accent].border}`,
                  }}
                >
                  {item.isCurrent && (
                    <motion.span
                      className="tl-dot-ring"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      style={{ background: colorMap[item.accent].dot }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Right slot */}
              <div className="tl-slot tl-slot-right">
                {i % 2 !== 0 && <TimelineCard item={item} isLeft={false} index={i} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Styles ── */}
      <style>{`
        /* Progress Steps */
        .tl-progress-steps {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          padding: 1rem 1.25rem;
          background: var(--bg-white);
          border: 1.5px solid var(--border);
          border-radius: var(--r-xl);
          box-shadow: var(--shadow-sm);
        }
        .tl-step {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          flex: 1;
          min-width: 0;
        }

        /* Timeline body grid */
        .tl-body {
          position: relative;
        }
        .tl-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0; bottom: 0;
          width: 2px;
          background: var(--border-md);
          border-radius: 2px;
          overflow: hidden;
        }
        .tl-line-fill {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            var(--violet-mid) 8%,
            var(--violet-mid) 92%,
            transparent 100%
          );
        }

        /* Each milestone row */
        .tl-row {
          display: grid;
          grid-template-columns: 1fr 48px 1fr;
          align-items: center;
          gap: 0;
          margin-bottom: 2.5rem;
        }
        .tl-row:last-child {
          margin-bottom: 0;
        }

        .tl-slot {
          padding: 0.5rem 0;
        }
        .tl-slot-left {
          padding-right: 1.75rem;
        }
        .tl-slot-right {
          padding-left: 1.75rem;
        }

        /* Center dot */
        .tl-center {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .tl-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          position: relative;
          flex-shrink: 0;
        }
        .tl-dot-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          opacity: 0.5;
          pointer-events: none;
        }

        /* Card wrapper */
        .tl-card-wrapper {
          width: 100%;
        }
        .tl-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .tl-card:hover {
          transform: translateY(-5px);
        }

        /* ── Tablet: single column ── */
        @media (max-width: 820px) {
          .tl-progress-steps {
            gap: 0.375rem;
            padding: 0.875rem 1rem;
          }
          .tl-step span:last-of-type {
            display: none;
          }
          .tl-line {
            left: 20px;
            transform: none;
          }
          .tl-row {
            grid-template-columns: 40px 1fr;
            grid-template-rows: auto;
            margin-bottom: 1.75rem;
          }
          .tl-center {
            grid-column: 1;
            grid-row: 1;
            align-self: flex-start;
            padding-top: 1.5rem;
          }
          .tl-slot-left,
          .tl-slot-right {
            grid-column: 2;
            grid-row: 1;
            padding-left: 1rem;
            padding-right: 0;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 480px) {
          .tl-progress-steps {
            display: none;
          }
          .tl-line {
            left: 16px;
          }
          .tl-row {
            grid-template-columns: 36px 1fr;
          }
          .tl-slot-left,
          .tl-slot-right {
            padding-left: 0.75rem;
          }
          .tl-card {
            padding: 1.25rem !important;
          }
          .tl-dot {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>
    </section>
  );
}
