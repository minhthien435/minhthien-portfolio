import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, ChevronRight, Check, Plus, Play, Pause } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { projects } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import ProjectModal from './ProjectModal';
import eparkingPreview from '../../assets/eparking-preview.png';
import eparkingVideo from '../../assets/Projects.mp4';

const reveal = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/* Track the mouse position as CSS custom props for the spotlight glow */
const handleSpotlight = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
};

/* ── Featured Project (eParking) ── */
function FeaturedProject({ project, onOpenModal }) {
  const reduced = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <motion.div
      variants={reveal}
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? false : 'visible'}
      viewport={{ once: true, margin: '-40px' }}
      className="project-card spotlight-card"
      onMouseMove={handleSpotlight}
      style={{
        background: 'var(--bg-white)',
        border: '1.5px solid var(--border)',
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Browser mockup header */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1C1917 0%, #292524 100%)',
          padding: '0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Browser chrome bar */}
        <div style={{ padding: '0.875rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E' }} />
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }} />
          </div>
          <div style={{
            flex: 1, margin: '0 0.75rem',
            background: 'rgba(255,255,255,0.07)', borderRadius: 6,
            padding: '0.3rem 0.75rem', fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span>eparking-v1.vercel.app</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.68rem', color: '#34D399', fontWeight: 600 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34D399', animation: 'pulse-ring 2s infinite' }} />
              Live Demo Video
            </span>
          </div>
          <ExternalLink size={13} color="rgba(255,255,255,0.3)" />
        </div>

        {/* Video Player Container */}
        <div
          style={{
            height: 320,
            position: 'relative',
            overflow: 'hidden',
            background: '#0F0E17',
            cursor: 'pointer',
          }}
          onClick={() => onOpenModal(project)}
        >
          <video
            src={eparkingVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
            }}
          />

          {/* Top Glass Badge */}
          <div style={{
            position: 'absolute', top: '1rem', right: '1rem',
            padding: '0.35rem 0.75rem', borderRadius: 99,
            background: 'rgba(15, 14, 23, 0.65)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: 'white', fontSize: '0.72rem', fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          }}>
            <span>🎬 Auto Play</span>
          </div>
        </div>
      </div>

      {/* Project info */}
      <div style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
              <span className="tag tag-violet" style={{ fontSize: '0.72rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                ★ Featured
              </span>
              <span className="tag tag-gray" style={{ fontSize: '0.72rem' }}>{project.type}</span>
              <span style={{ color: 'var(--text-3)', fontSize: '0.78rem' }}>{project.period}</span>
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.25rem', color: 'var(--text)' }}>
              {project.name}
            </h3>
            <p style={{ color: 'var(--violet)', fontWeight: 600, fontSize: '0.8125rem', marginTop: '0.2rem' }}>
              Role: {project.role}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenModal(project)}
            style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'var(--violet-light)', border: '1.5px solid var(--violet-mid)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'var(--violet)',
            }}
          >
            <ArrowUpRight size={16} />
          </motion.button>
        </div>

        <p style={{ color: 'var(--text-2)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {project.techStack.map(t => (
            <span key={t} className="tag tag-violet" style={{ fontSize: '0.78rem' }}>{t}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
          <motion.a
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <ExternalLink size={15} /> Live Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <GitHubIcon size={15} /> GitHub
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpenModal(project)}
            className="btn btn-ghost"
            style={{ marginLeft: 'auto' }}
          >
            Details <ChevronRight size={14} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Secondary Project (Todo App) ── */
function SecondaryProject({ project, onOpenModal }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={reveal}
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? false : 'visible'}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: 0.15 }}
      className="project-card spotlight-card"
      onMouseMove={handleSpotlight}
      whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
      style={{
        background: 'var(--bg-white)',
        border: '1.5px solid var(--border)',
        borderRadius: 'var(--r-xl)',
        padding: '1.75rem',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      onClick={() => onOpenModal(project)}
    >
      <div>
        {/* macOS Style Mini App Window */}
        <div style={{
          background: 'var(--bg-cream)',
          border: '1.5px solid var(--border)',
          borderRadius: 14,
          overflow: 'hidden',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
        }}>
          {/* App Header */}
          <div style={{
            padding: '0.5rem 0.75rem',
            background: 'rgba(255,255,255,0.6)',
            borderBottom: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FF5F57' }} />
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FEBC2E' }} />
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#28C840' }} />
            </div>
            <span style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--text-3)', fontFamily: 'monospace' }}>
              TaskFlow Pro
            </span>
            <div style={{ width: 30 }} />
          </div>

          {/* App Body Preview */}
          <div style={{ padding: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {/* Task Add Bar */}
            <div style={{ display: 'flex', gap: '0.375rem', alignItems: 'center' }}>
              <div style={{
                flex: 1, height: 26, borderRadius: 8,
                background: 'var(--bg-white)', border: '1px solid var(--border)',
                padding: '0 0.5rem', display: 'flex', alignItems: 'center',
                fontSize: '0.68rem', color: 'var(--text-3)',
              }}>
                Add a new task...
              </div>
              <div style={{
                width: 26, height: 26, borderRadius: 8, background: 'var(--violet)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Plus size={13} color="white" strokeWidth={3} />
              </div>
            </div>

            {/* Task Items */}
            {[
              { label: 'Create responsive UI components', tag: 'UI/UX', color: 'violet' },
              { label: 'Implement state & Local Storage', tag: 'Logic', color: 'cyan' },
              { label: 'Task filtering & CRUD operations', tag: 'Features', color: 'yellow' },
            ].map(t => (
              <div key={t.label} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0.4rem 0.625rem', borderRadius: 8,
                background: 'var(--bg-white)',
                border: '1px solid var(--border)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: 15, height: 15, borderRadius: '50%', flexShrink: 0,
                    background: 'var(--violet-light)', border: '1.5px solid var(--violet-mid)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Check size={9} color="var(--violet)" strokeWidth={3.5} />
                  </div>
                  <span style={{ fontSize: '0.73rem', fontWeight: 500, color: 'var(--text-2)' }}>
                    {t.label}
                  </span>
                </div>
                <span className={`tag tag-${t.color}`} style={{ fontSize: '0.62rem', padding: '0.1rem 0.45rem' }}>
                  {t.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Meta info */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.625rem' }}>
          <span className="tag tag-cyan" style={{ fontSize: '0.72rem' }}>{project.type}</span>
          <span style={{ color: 'var(--text-3)', fontSize: '0.78rem' }}>{project.period}</span>
        </div>

        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.25rem', color: 'var(--text)', marginBottom: '0.4rem' }}>
          {project.name}
        </h3>
        <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {project.techStack.map(t => (
            <span key={t} className="tag tag-gray" style={{ fontSize: '0.78rem' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }} onClick={e => e.stopPropagation()}>
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
          style={{ fontSize: '0.8125rem' }}
        >
          <GitHubIcon size={14} /> GitHub
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.04 }}
          onClick={() => onOpenModal(project)}
          className="btn btn-ghost"
          style={{ fontSize: '0.8125rem', marginLeft: 'auto' }}
        >
          View Details →
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const reduced = useReducedMotion();

  const featured = projects.find(p => p.featured);
  const secondary = projects.filter(p => !p.featured);

  return (
    <section id="projects" aria-label="Projects" style={{ background: 'var(--bg-cream)' }}>
      <div className="divider" />
      <div className="container section-gap">
        {/* Header */}
        <motion.div
          variants={reveal}
          initial={reduced ? false : 'hidden'}
          whileInView={reduced ? false : 'visible'}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}
        >
          <div>
            <p className="section-eyebrow">What I've Built</p>
            <h2 className="headline" style={{ marginTop: '0.5rem' }}>Projects</h2>
          </div>
          <p style={{ color: 'var(--text-2)', fontSize: '0.9375rem', maxWidth: 360 }}>
            Real projects I've built to practice and demonstrate my frontend skills.
          </p>
        </motion.div>

        {/* Editorial layout: featured large + secondary smaller */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {featured && <FeaturedProject project={featured} onOpenModal={setSelected} />}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {secondary.map(p => (
              <SecondaryProject key={p.id} project={p} onOpenModal={setSelected} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

