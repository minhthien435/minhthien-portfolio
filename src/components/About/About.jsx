import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo, aboutText, careerObjective } from '../../data/portfolio';

export default function About() {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section id="about" aria-label="About Me">
      <div className="section-divider" />
      <div className="section-wrapper">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Avatar + info card */}
          <div ref={leftRef} className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Avatar placeholder */}
            <div
              style={{
                width: '100%',
                maxWidth: 300,
                aspectRatio: '4/5',
                borderRadius: '1.25rem',
                background: 'linear-gradient(135deg, #1a2040 0%, #0d1427 100%)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative circles */}
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 180, height: 180, borderRadius: '50%',
                background: 'rgba(99,102,241,0.08)',
              }} />
              <div style={{
                position: 'absolute', bottom: -30, left: -30,
                width: 140, height: 140, borderRadius: '50%',
                background: 'rgba(99,102,241,0.06)',
              }} />
              {/* Initials avatar */}
              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '1rem',
                  zIndex: 1,
                }}
              >
                ML
              </div>
              <p style={{ color: 'var(--color-text-primary)', fontWeight: 700, fontSize: '1.125rem', zIndex: 1 }}>
                {personalInfo.name}
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', zIndex: 1 }}>
                {personalInfo.careerDirection}
              </p>
            </div>

            {/* Info chips */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'University', value: personalInfo.university },
                { label: 'Major', value: personalInfo.major },
                { label: 'Period', value: personalInfo.educationPeriod },
                { label: 'English', value: personalInfo.english },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.6rem 0.875rem',
                    borderRadius: '0.6rem',
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border-subtle)',
                    gap: '1rem',
                  }}
                >
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem', fontWeight: 500, flexShrink: 0 }}>
                    {label}
                  </span>
                  <span style={{ color: 'var(--color-text-primary)', fontSize: '0.8125rem', fontWeight: 600, textAlign: 'right' }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div ref={rightRef} className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <p className="section-label">Who I Am</p>
              <h2 className="section-title">About Me</h2>
            </div>

            <p
              style={{
                color: 'var(--color-text-secondary)',
                lineHeight: 1.85,
                fontSize: '1rem',
              }}
            >
              {aboutText}
            </p>

            {/* Career Objective */}
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '0.875rem',
                border: '1px solid var(--color-border)',
                background: 'var(--color-accent-dim)',
              }}
            >
              <p
                style={{
                  color: 'var(--color-accent-hover)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                🎯 Currently Looking For
              </p>
              <p style={{ color: 'var(--color-text-primary)', fontWeight: 600, marginBottom: '0.875rem' }}>
                {careerObjective.lookingFor}
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {careerObjective.reasons.map((r) => (
                  <li
                    key={r}
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.875rem',
                      display: 'flex',
                      gap: '0.5rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, flexShrink: 0 }}>›</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub Profile
              </a>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
