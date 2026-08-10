import { useScrollAnimation, useMultiScrollAnimation } from '../../hooks/useScrollAnimation';
import { skills } from '../../data/portfolio';

const categoryIcons = {
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  layers: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  git: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.609-.406-.537-.537-.676-1.33-.399-1.999L7.096 3.87.45 10.517c-.6.605-.6 1.586 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
    </svg>
  ),
  globe: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
};

// Skill tag colors (subtle, no fake progress)
const tagColors = {
  'HTML5': { bg: 'rgba(234,88,12,0.1)', color: '#fb923c', border: 'rgba(234,88,12,0.2)' },
  'CSS3': { bg: 'rgba(37,99,235,0.1)', color: '#60a5fa', border: 'rgba(37,99,235,0.2)' },
  'JavaScript (ES6+)': { bg: 'rgba(234,179,8,0.1)', color: '#fbbf24', border: 'rgba(234,179,8,0.2)' },
  'ReactJS': { bg: 'rgba(6,182,212,0.1)', color: '#22d3ee', border: 'rgba(6,182,212,0.2)' },
  'Bootstrap': { bg: 'rgba(139,92,246,0.1)', color: '#a78bfa', border: 'rgba(139,92,246,0.2)' },
  'Tailwind CSS': { bg: 'rgba(20,184,166,0.1)', color: '#2dd4bf', border: 'rgba(20,184,166,0.2)' },
  'React Router': { bg: 'rgba(244,63,94,0.1)', color: '#fb7185', border: 'rgba(244,63,94,0.2)' },
  'Axios': { bg: 'rgba(99,102,241,0.1)', color: '#818cf8', border: 'rgba(99,102,241,0.2)' },
  'Git': { bg: 'rgba(234,88,12,0.1)', color: '#f97316', border: 'rgba(234,88,12,0.2)' },
  'GitHub': { bg: 'rgba(148,163,184,0.08)', color: '#94a3b8', border: 'rgba(148,163,184,0.2)' },
  'English – IELTS 6.0': { bg: 'rgba(16,185,129,0.1)', color: '#34d399', border: 'rgba(16,185,129,0.2)' },
};

const defaultTag = { bg: 'var(--color-accent-dim)', color: 'var(--color-accent-hover)', border: 'rgba(99,102,241,0.2)' };

export default function Skills() {
  const headRef = useScrollAnimation();
  const gridRef = useMultiScrollAnimation();

  return (
    <section id="skills" aria-label="Technical Skills" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="section-divider" />
      <div className="section-wrapper">
        {/* Header */}
        <div ref={headRef} className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">What I Work With</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies I've learned and am actively using to build web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`card reveal reveal-delay-${i + 1}`}
              style={{ padding: '1.5rem' }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '0.6rem',
                    background: 'var(--color-accent-dim)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)',
                    flexShrink: 0,
                  }}
                >
                  {categoryIcons[group.icon]}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: '0.9375rem',
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.2,
                  }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skill tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.items.map((skill) => {
                  const colors = tagColors[skill] || defaultTag;
                  return (
                    <span
                      key={skill}
                      style={{
                        padding: '0.3rem 0.7rem',
                        borderRadius: 99,
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        background: colors.bg,
                        color: colors.color,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          style={{
            textAlign: 'center',
            color: 'var(--color-text-muted)',
            fontSize: '0.8125rem',
            marginTop: '2rem',
            fontStyle: 'italic',
          }}
        >
          Continuously learning and growing — always adding new skills.
        </p>
      </div>
    </section>
  );
}
