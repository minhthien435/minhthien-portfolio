import { useState } from 'react';
import { projects } from '../../data/portfolio';
import { useScrollAnimation, useMultiScrollAnimation } from '../../hooks/useScrollAnimation';
import ProjectModal from './ProjectModal';

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function ProjectCard({ project, onOpenModal }) {
  return (
    <div
      className="card"
      style={{
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        cursor: 'pointer',
        height: '100%',
      }}
      onClick={() => onOpenModal(project)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.name}`}
      onKeyDown={(e) => e.key === 'Enter' && onOpenModal(project)}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span
            style={{
              display: 'inline-block',
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
        </div>
        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', flexShrink: 0 }}>
          {project.period}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3
          style={{
            fontWeight: 800,
            fontSize: '1.125rem',
            color: 'var(--color-text-primary)',
            marginBottom: '0.4rem',
            lineHeight: 1.3,
          }}
        >
          {project.name}
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600 }}>
          Role: {project.role}
        </p>
      </div>

      {/* Description */}
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, flex: 1 }}>
        {project.shortDesc}
      </p>

      {/* Top features */}
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        {project.features.slice(0, 4).map((f) => (
          <li
            key={f}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.4rem',
              fontSize: '0.8125rem',
              color: 'var(--color-text-muted)',
            }}
          >
            <span style={{ color: 'var(--color-accent)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
            {f}
          </li>
        ))}
        {project.features.length > 4 && (
          <li style={{ fontSize: '0.8125rem', color: 'var(--color-accent)', fontStyle: 'italic' }}>
            +{project.features.length - 4} more features...
          </li>
        )}
      </ul>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-chip">{tech}</span>
        ))}
      </div>

      {/* Buttons */}
      <div
        style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <GithubIcon /> GitHub
        </a>
        {project.hasLiveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}
          >
            <ExternalIcon /> Live Demo
          </a>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); onOpenModal(project); }}
          className="btn-ghost"
          style={{ marginLeft: 'auto' }}
        >
          View Details →
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const headRef = useScrollAnimation();
  const gridRef = useMultiScrollAnimation();

  return (
    <section id="projects" aria-label="Projects">
      <div className="section-divider" />
      <div className="section-wrapper">
        {/* Header */}
        <div ref={headRef} className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A collection of projects I've worked on to develop my frontend skills.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, i) => (
            <div key={project.id} className={`reveal reveal-delay-${i + 1}`} style={{ height: '100%' }}>
              <ProjectCard project={project} onOpenModal={setSelectedProject} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
