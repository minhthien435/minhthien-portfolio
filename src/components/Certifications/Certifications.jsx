import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const reveal = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const certColors = ['violet', 'cyan', 'yellow'];
const certBg = {
  violet: { bg: 'var(--violet-light)', border: 'var(--violet-mid)', text: 'var(--violet)', accentBg: 'var(--violet)' },
  cyan:   { bg: 'var(--cyan-light)',   border: '#A5F3FC',           text: '#0E7490',       accentBg: '#06B6D4' },
  yellow: { bg: 'var(--yellow-light)', border: '#FDE68A',           text: '#92400E',       accentBg: '#F59E0B' },
};

export default function Certifications() {
  const reduced = useReducedMotion();

  return (
    <section id="certifications" aria-label="Certifications" style={{ background: 'var(--bg)' }}>
      <div className="divider" />
      <div className="container section-gap">
        {/* Header */}
        <motion.div
          variants={reveal}
          initial={reduced ? false : 'hidden'}
          whileInView={reduced ? false : 'visible'}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem' }}
        >
          <p className="section-eyebrow">Credentials</p>
          <h2 className="headline" style={{ marginTop: '0.5rem' }}>Certifications</h2>
          <p style={{ color: 'var(--text-2)', marginTop: '0.5rem', maxWidth: 460, fontSize: '1rem' }}>
            Online courses and specializations completed through Coursera.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {certifications.map((cert, i) => {
            const color = certColors[i % 3];
            const theme = certBg[color];

            return (
              <motion.div
                key={cert.name}
                variants={reveal}
                initial={reduced ? false : 'hidden'}
                whileInView={reduced ? false : 'visible'}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
                style={{
                  background: 'var(--bg-white)',
                  border: `1.5px solid ${theme.border}`,
                  borderRadius: 'var(--r-xl)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'box-shadow 0.25s, transform 0.25s',
                }}
              >
                {/* Top bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  {/* Coursera + icon */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 10,
                      background: theme.bg, border: `1.5px solid ${theme.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Award size={18} color={theme.text} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.8rem', color: theme.text }}>
                        {cert.platform}
                      </p>
                      <p style={{ fontSize: '0.72rem', color: 'var(--text-3)' }}>
                        Online Course
                      </p>
                    </div>
                  </div>
                  {/* Completed badge */}
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 'var(--r-full)',
                    background: 'var(--green-light)',
                    border: '1.5px solid #A7F3D0',
                    fontSize: '0.7rem', fontWeight: 700,
                    color: '#065F46',
                  }}>
                    ✓ Done
                  </span>
                </div>

                {/* Cert name */}
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text)', lineHeight: 1.45, flex: 1 }}>
                  {cert.name}
                </h3>

                {/* Footer */}
                <div style={{ paddingTop: '0.75rem', borderTop: '1.5px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--text-2)' }}>
                      {cert.institution}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-3)', marginTop: '0.1rem' }}>
                      {cert.completed}
                    </p>
                  </div>
                  {/* View Credential — no fake URL, links to Coursera search */}
                  <a
                    href="https://www.coursera.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ fontSize: '0.75rem', padding: '0.3rem 0.75rem' }}
                  >
                    View Credential ↗
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
