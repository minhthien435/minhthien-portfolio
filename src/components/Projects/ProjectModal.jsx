import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';

export default function ProjectModal({ project, onClose }) {
  const boxRef = useRef(null);
  const titleId = `modal-title-${project.id}`;

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const box = boxRef.current;

    const esc = (e) => e.key === 'Escape' && onClose();

    const trap = (e) => {
      if (e.key !== 'Tab' || !box) return;
      const focusables = box.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', esc);
    document.addEventListener('keydown', trap);
    document.body.style.overflow = 'hidden';
    box?.focus();

    return () => {
      document.removeEventListener('keydown', esc);
      document.removeEventListener('keydown', trap);
      document.body.style.overflow = '';
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus();
      }
    };
  }, [onClose, project.id]);

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <motion.div
        ref={boxRef}
        className="modal-box"
        tabIndex={-1}
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            width: 36, height: 36, borderRadius: '50%',
            background: 'var(--bg-cream)', border: '1.5px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'var(--text-2)',
          }}
        >
          <X size={16} />
        </motion.button>

        {/* Header */}
        <div style={{ paddingRight: '2.5rem', marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.625rem' }}>
            <span className="tag tag-violet" style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {project.type}
            </span>
            <span style={{ color: 'var(--text-3)', fontSize: '0.8125rem', display: 'flex', alignItems: 'center' }}>
              {project.period}
            </span>
          </div>
          <h2
            id={titleId}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 'clamp(1.25rem, 3vw, 1.625rem)', color: 'var(--text)', marginBottom: '0.25rem', letterSpacing: '-0.03em' }}
          >
            {project.name}
          </h2>
          <p style={{ color: 'var(--violet)', fontWeight: 600, fontSize: '0.875rem' }}>
            Role: {project.role}
          </p>
        </div>

        {/* Overview */}
        <section style={{ marginBottom: '1.5rem' }}>
          <h3 style={sh}>Overview</h3>
          <p style={{ color: 'var(--text-2)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
            {project.description}
          </p>
        </section>

        {/* My Contribution */}
        <section style={{ marginBottom: '1.5rem' }}>
          <h3 style={sh}>My Contribution</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.myContribution.map(item => (
              <li key={item} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--violet-light)', border: '1.5px solid var(--violet-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--violet)', display: 'block' }} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Project Features */}
        <section style={{ marginBottom: '1.5rem' }}>
          <h3 style={sh}>
            Project Features{' '}
            <span style={{ color: 'var(--text-3)', fontWeight: 400, fontSize: '0.78rem', textTransform: 'none', letterSpacing: 0 }}>
              (team-built overall)
            </span>
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.features.map(f => (
              <span key={f} className="tag tag-gray" style={{ fontSize: '0.8rem' }}>{f}</span>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section style={{ marginBottom: '1.75rem' }}>
          <h3 style={sh}>Tech Stack</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {project.techStack.map(t => (
              <span key={t} className="tag tag-violet">{t}</span>
            ))}
          </div>
        </section>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', borderTop: '1.5px solid var(--border)', paddingTop: '1.5rem' }}>
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
          {project.hasLiveDemo && (
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
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

const sh = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: '0.8125rem',
  color: 'var(--text)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: '0.75rem',
  paddingBottom: '0.375rem',
  borderBottom: '1.5px solid var(--border)',
};
