import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, ChevronRight, Check, Plus } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { projects } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import ProjectModal from './ProjectModal';
import eparkingPreview from '../../assets/eparking-preview.png';

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
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        onClick={() => onOpenModal(project)}
        style={{
          background: 'linear-gradient(135deg, #1C1917 0%, #292524 100%)',
          padding: '0',
          cursor: 'pointer',
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
            color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace',
          }}>
            eparking-v1.vercel.app
          </div>
          <ExternalLink size={13} color="rgba(255,255,255,0.3)" />
        </div>

        {/* Project Real Screenshot */}
        <div style={{ height: 260, position: 'relative', overflow: 'hidden' }}>
          <img
            src={eparkingPreview}
            alt="eParking Management System Interface"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top left',
              display: 'block',
              transition: 'transform 0.4s ease',
            }}
          />

          {/* Live badge overlay */}
          <div style={{
            position: 'absolute', top: '1rem', right: '1rem',
            background: 'rgba(16,185,129,0.9)', border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: 'var(--r-full)', padding: '0.25rem 0.75rem',
            fontSize: '0.72rem', fontWeight: 700, color: '#FFFFFF',
            display: 'flex', alignItems: 'center', gap: '0.35rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            backdropFilter: 'blur(4px)',
          }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#FFFFFF', animation:'pulse-ring 2s infinite' }} />
            LIVE DEMO
          </div>
        </div>
      </motion.div>

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

/* ── Secondary Project (TodoApp) ── */
function SecondaryProject({ project, onOpenModal }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={reveal}
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? false : 'visible'}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: 0.15 }}
      className="spotlight-card"
      onMouseMove={handleSpotlight}
      whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
      style={{
        background: 'var(--cyan-light)',
        border: '1.5px solid #A5F3FC',
        borderRadius: 'var(--r-xl)',
        padding: '1.75rem',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow 0.25s',
      }}
      onClick={() => onOpenModal(project)}
    >
      {/* Mini app mockup */}
      <div style={{
        background: 'rgba(255,255,255,0.72)',
        border: '1.5px solid #A5F3FC',
        borderRadius: 14,
        padding: '0.875rem',
        marginBottom: '1.25rem',
        display: 'flex', flexDirection: 'column', gap: '0.5rem',
      }}>
        {/* Input row */}
        <div style={{ display: 'flex', gap: '0.375rem' }}>
          <div style={{
            flex: 1, height: 22, borderRadius: 7,
            background: 'rgba(14,116,144,0.1)', border: '1px solid rgba(14,116,144,0.25)',
          }} />
          <div style={{
            width: 44, height: 22, borderRadius: 7, background: '#0E7490',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Plus size={12} color="white" strokeWidth={3} />
          </div>
        </div>

        {/* Task rows */}
        {[
          { label: 'Build portfolio UI', done: true },
          { label: 'Integrate React Hooks', done: true },
          { label: 'Responsive Layouts', done: true },
        ].map(t => (
          <div key={t.label} style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.375rem 0.625rem', borderRadius: 8,
            background: 'rgba(255,255,255,0.75)',
            border: '1px solid rgba(14,116,144,0.12)',
          }}>
            <div style={{
              width: 14, height: 14, borderRadius: '50%', flexShrink: 0,
              background: '#0E7490',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Check size={9} color="white" strokeWidth={3.5} />
            </div>
            <span style={{
              fontSize: '0.72rem', fontWeight: 500,
              color: '#0E7490',
            }}>
              {t.label}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.625rem' }}>
        <span className="tag tag-cyan" style={{ fontSize: '0.72rem' }}>{project.type}</span>
        <span style={{ color: '#0E7490', fontSize: '0.75rem', opacity: 0.7 }}>{project.period}</span>
      </div>

      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.125rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
        {project.name}
      </h3>
      <p style={{ color: '#0E7490', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
        {project.shortDesc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
        {project.techStack.map(t => (
          <span key={t} className="tag tag-cyan" style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.5)' }}>{t}</span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }} onClick={e => e.stopPropagation()}>
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
          style={{ fontSize: '0.8125rem' }}
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
          <p style={{ color: 'var(--text-2)', fontSize: '0.9375rem', maxWidth: 360, textAlign: 'right' }}>
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
