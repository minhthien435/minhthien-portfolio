import { useScrollAnimation, useMultiScrollAnimation } from '../../hooks/useScrollAnimation';
import { certifications } from '../../data/portfolio';

function CourseLogo() {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: '0.5rem',
        background: 'rgba(0,86,210,0.12)',
        border: '1px solid rgba(0,86,210,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
        <path d="M11 0L0 6l4 2.18v5.82l7 3.27 7-3.27v-5.82L20 8.18V6L11 0zm5.73 6L11 9.09 5.27 6 11 2.91 16.73 6zM11 13.18L6 10.71V7.82l5 2.73 5-2.73v2.89l-5 2.47z" fill="#0056D2"/>
      </svg>
    </div>
  );
}

export default function Certifications() {
  const headRef = useScrollAnimation();
  const gridRef = useMultiScrollAnimation();

  return (
    <section id="certifications" aria-label="Certifications" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="section-divider" />
      <div className="section-wrapper">
        {/* Header */}
        <div ref={headRef} className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Courses and specializations completed through online learning platforms.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              className={`card reveal reveal-delay-${i + 1}`}
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              {/* Top row: logo + platform */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <CourseLogo />
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#60a5fa',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {cert.platform}
                  </span>
                </div>
                {/* Completion badge */}
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '0.2rem 0.55rem',
                    borderRadius: 99,
                    background: 'rgba(74,222,128,0.08)',
                    color: '#4ade80',
                    border: '1px solid rgba(74,222,128,0.2)',
                  }}
                >
                  Completed
                </span>
              </div>

              {/* Cert name */}
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.45,
                  flex: 1,
                }}
              >
                {cert.name}
              </h3>

              {/* Footer */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--color-border-subtle)',
                }}
              >
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                    {cert.institution}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.1rem' }}>
                    {cert.completed}
                  </p>
                </div>
                {/* No fake URLs - show institution shield */}
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '0.4rem',
                    background: 'rgba(99,102,241,0.08)',
                    border: '1px solid var(--color-border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
