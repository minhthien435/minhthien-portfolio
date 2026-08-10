import { useEffect, useRef } from 'react';
import { personalInfo } from '../../data/portfolio';

export default function Hero() {
  const titleRef = useRef(null);

  // Stagger animation on mount
  useEffect(() => {
    const items = document.querySelectorAll('.hero-animate');
    items.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 180 + i * 130);
    });
  }, []);

  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Hero section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 1.5rem',
      }}
    >
      {/* Animated background blobs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '8%',
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)',
            animation: 'blobFloat 8s ease-in-out infinite',
            filter: 'blur(2px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(129,140,248,0.10) 0%, transparent 70%)',
            animation: 'blobFloat 11s ease-in-out infinite reverse',
            filter: 'blur(2px)',
          }}
        />
        {/* Grid dot pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(rgba(99,102,241,0.12) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            maskImage:
              'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: 760,
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Available badge */}
        <div className="hero-animate" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 1rem',
              borderRadius: 99,
              border: '1px solid rgba(99,102,241,0.3)',
              background: 'rgba(99,102,241,0.08)',
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: 'var(--color-accent-hover)',
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#4ade80',
                animation: 'pulse-glow 2s infinite',
                display: 'inline-block',
              }}
            />
            Open to Frontend Developer Internship
          </span>
        </div>

        {/* Name */}
        <h1
          ref={titleRef}
          className="hero-animate"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
            marginBottom: '0.5rem',
          }}
        >
          Hi, I'm{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #818cf8 0%, #6366f1 50%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Minh Le
          </span>
        </h1>

        {/* Title */}
        <p
          className="hero-animate mono"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            fontWeight: 500,
            color: 'var(--color-accent)',
            marginBottom: '1rem',
            letterSpacing: '0.02em',
          }}
        >
          {personalInfo.title}
        </p>

        {/* Subtitle */}
        <p
          className="hero-animate"
          style={{
            fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
            color: 'var(--color-text-secondary)',
            marginBottom: '0.75rem',
          }}
        >
          {personalInfo.subtitle}
        </p>

        {/* Description */}
        <p
          className="hero-animate"
          style={{
            fontSize: 'clamp(0.875rem, 1.8vw, 1rem)',
            color: 'var(--color-text-muted)',
            maxWidth: 520,
            margin: '0 auto 2.5rem',
            lineHeight: 1.8,
          }}
        >
          {personalInfo.description}
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-animate"
          style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => handleScroll('#projects')}
            className="btn-primary"
            style={{ fontSize: '0.9375rem', padding: '0.7rem 1.6rem' }}
          >
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="8" x2="13" y2="8"/><polyline points="9,4 13,8 9,12"/>
            </svg>
          </button>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: '0.9375rem', padding: '0.7rem 1.6rem' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>
          <button
            onClick={() => handleScroll('#contact')}
            className="btn-outline"
            style={{ fontSize: '0.9375rem', padding: '0.7rem 1.6rem' }}
          >
            Contact Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="hero-animate"
          style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}
        >
          <button
            onClick={() => handleScroll('#about')}
            aria-label="Scroll to About section"
            style={{
              background: 'transparent',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 99,
              padding: '0.4rem 0.65rem',
              cursor: 'pointer',
              color: 'var(--color-text-muted)',
              animation: 'fadeInUp 1.5s ease infinite alternate',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="9" y1="3" x2="9" y2="15"/><polyline points="5,11 9,15 13,11"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
