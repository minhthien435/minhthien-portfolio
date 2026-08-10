import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { honors } from '../../data/portfolio';

export default function Honors() {
  const ref = useScrollAnimation();

  return (
    <section id="honors" aria-label="Honors and Awards">
      <div className="section-divider" />
      <div className="section-wrapper" style={{ padding: '4rem 1.5rem' }}>
        <div ref={ref} className="reveal">
          {/* Compact header */}
          <div style={{ marginBottom: '1.75rem' }}>
            <p className="section-label">Recognition</p>
            <h2
              style={{
                fontWeight: 800,
                fontSize: 'clamp(1.375rem, 3vw, 1.75rem)',
                color: 'var(--color-text-primary)',
              }}
            >
              Honors & Awards
            </h2>
          </div>

          {/* Award cards — intentionally compact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 680 }}>
            {honors.map((honor, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  padding: '1.25rem',
                  borderRadius: '0.875rem',
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border-subtle)',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border-subtle)'; }}
              >
                {/* Medal icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '0.625rem',
                    background: 'linear-gradient(135deg, rgba(192,192,192,0.2) 0%, rgba(148,163,184,0.1) 100%)',
                    border: '1px solid rgba(192,192,192,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                  }}
                >
                  🥈
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text-primary)' }}>
                      {honor.medal} — {honor.event}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--color-text-muted)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: 99,
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--color-border-subtle)',
                        flexShrink: 0,
                      }}
                    >
                      {honor.date}
                    </span>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.8125rem', marginBottom: '0.3rem' }}>
                    {honor.competition} · {honor.organizer}
                  </p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', fontStyle: 'italic' }}>
                    {honor.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
