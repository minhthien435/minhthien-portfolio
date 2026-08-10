import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, X, ChevronRight } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import ProjectModal from './ProjectModal';

const reveal = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
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
      className="project-card"
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

        {/* Project "screenshot" — illustrative UI */}
        <div style={{ height: 220, padding: '1.25rem', position: 'relative', overflow: 'hidden' }}>
          {/* Simulated UI grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '0.75rem', height: '100%', opacity: 0.85 }}>
            {/* Sidebar */}
            <div style={{ background: 'rgba(124,58,237,0.15)', borderRadius: 10, padding: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ width: '80%', height: 8, borderRadius: 4, background: 'var(--violet)', opacity: 0.7 }} />
              {[1,2,3,4,5].map(i => (
                <div key={i} style={{ width: `${60 + i*8}%`, height: 6, borderRadius: 4, background: 'rgba(255,255,255,0.15)' }} />
              ))}
            </div>
            {/* Main content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* Stats row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.5rem' }}>
                {[['var(--violet)','Slots','128'],['#06B6D4','Available','84'],['#10B981','Booked','44']].map(([c,l,v]) => (
                  <div key={l} style={{ background: `rgba(255,255,255,0.06)`, borderRadius: 8, padding: '0.625rem', borderLeft: `3px solid ${c}` }}>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', marginBottom: '0.2rem' }}>{l}</div>
                    <div style={{ color: 'white', fontWeight: 700, fontSize: '1rem', fontFamily: 'monospace' }}>{v}</div>
                  </div>
                ))}
              </div>
              {/* Parking grid */}
              <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 4 }}>
                {Array.from({length:32}).map((_,i) => (
                  <div key={i} style={{
                    borderRadius: 3, aspectRatio:'1',
                    background: i % 3 === 0 ? 'rgba(124,58,237,0.6)' : i % 5 === 0 ? 'rgba(16,185,129,0.5)' : 'rgba(255,255,255,0.08)',
                  }} />
                ))}
              </div>
            </div>
          </div>

          {/* Live badge */}
          <div style={{
            position: 'absolute', top: '1rem', right: '1rem',
            background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.4)',
            borderRadius: 'var(--r-full)', padding: '0.25rem 0.65rem',
            fontSize: '0.72rem', fontWeight: 700, color: '#34D399',
            display: 'flex', alignItems: 'center', gap: '0.3rem',
          }}>
            <span style={{ width:5, height:5, borderRadius:'50%', background:'#34D399', animation:'pulse-ring 2s infinite' }} />
            LIVE
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
            <Github size={15} /> GitHub
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
      className="project-card"
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
      {/* Icon block */}
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: '#0E7490', marginBottom: '1.25rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.5rem',
      }}>
        ✅
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
          <Github size={14} /> GitHub
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
