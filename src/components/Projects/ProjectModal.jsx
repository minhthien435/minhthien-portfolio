import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: '0.5rem',
            padding: '0.35rem',
            cursor: 'pointer',
            color: 'var(--color-text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.color = 'var(--color-text-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = 'var(--color-text-secondary)';
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="4" x2="14" y2="14"/><line x1="14" y1="4" x2="4" y2="14"/>
          </svg>
        </button>

        {/* Header */}
        <div style={{ marginBottom: '1.75rem', paddingRight: '2rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <span
              style={{
                padding: '0.2rem 0.6rem',
                borderRadius: 99,
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                background: project.hasLiveDemo ? 'rgba(74,222,128,0.1)' : 'var(--color-accent-dim)',
                color: project.hasLiveDemo ? '#4ade80' : 'var(--color-accent-hover)',
                border: `1px solid ${project.hasLiveDemo ? 'rgba(74,222,128,0.25)' : 'rgba(99,102,241,0.25)'}`,
              }}
            >
              {project.type}
            </span>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem', display: 'flex', alignItems: 'center' }}>
              {project.period}
            </span>
          </div>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 3vw, 1.625rem)',
              color: 'var(--color-text-primary)',
              lineHeight: 1.2,
              marginBottom: '0.3rem',
            }}
          >
            {project.name}
          </h2>
          <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem' }}>
            Role: {project.role}
          </p>
        </div>

        {/* Description */}
        <section style={{ marginBottom: '1.75rem' }}>
          <h3 style={sectionHead}>Overview</h3>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
            {project.description}
          </p>
        </section>

        {/* My Contribution */}
        <section style={{ marginBottom: '1.75rem' }}>
          <h3 style={sectionHead}>My Contribution</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.myContribution.map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  gap: '0.6rem',
                  alignItems: 'flex-start',
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--color-accent)',
                    flexShrink: 0,
                    marginTop: '0.45rem',
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Project Features */}
        <section style={{ marginBottom: '1.75rem' }}>
          <h3 style={sectionHead}>Project Features <span style={{ color: 'var(--color-text-muted)', fontWeight: 400, fontSize: '0.8125rem' }}>(overall — team-built)</span></h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.features.map((f) => (
              <span
                key={f}
                style={{
                  padding: '0.3rem 0.7rem',
                  borderRadius: '0.4rem',
                  fontSize: '0.8rem',
                  color: 'var(--color-text-secondary)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={sectionHead}>Tech Stack</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-chip">{tech}</span>
            ))}
          </div>
        </section>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1.5rem' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>
          {project.hasLiveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const sectionHead = {
  fontWeight: 700,
  fontSize: '0.875rem',
  color: 'var(--color-text-primary)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  marginBottom: '0.75rem',
  paddingBottom: '0.4rem',
  borderBottom: '1px solid var(--color-border-subtle)',
};
