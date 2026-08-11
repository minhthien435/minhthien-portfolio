import { motion } from 'framer-motion';
import { achievement } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const reveal = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Achievement() {
  const reduced = useReducedMotion();

  return (
    <section id="achievement" aria-label="Achievement" style={{ background: 'var(--bg)' }}>
      <div className="divider" />
      <div className="container section-gap-sm">
        <motion.div
          variants={reveal}
          initial={reduced ? false : 'hidden'}
          whileInView={reduced ? false : 'visible'}
          viewport={{ once: true }}
          style={{ marginBottom: '1.5rem' }}
        >
          <p className="section-eyebrow">Beyond Code</p>
          <h2 className="headline" style={{ marginTop: '0.5rem' }}>Achievement</h2>
        </motion.div>

        <motion.div
          variants={reveal}
          initial={reduced ? false : 'hidden'}
          whileInView={reduced ? false : 'visible'}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -3, boxShadow: 'var(--shadow-md)' }}
          style={{
            maxWidth: 720,
            width: '100%',
            background: 'var(--bg-white)',
            border: '1.5px solid var(--border)',
            borderRadius: 'var(--r-xl)',
            padding: '1.5rem',
            display: 'flex',
            gap: '1.25rem',
            alignItems: 'flex-start',
            boxShadow: 'var(--shadow-sm)',
            transition: 'box-shadow 0.25s, transform 0.25s',
          }}
        >
          {/* Medal */}
          <motion.div
            animate={reduced ? {} : { scale: [1, 1.05, 1], rotate: [-2, 2, -2] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 56, height: 56,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #FEF9C3 0%, #FEF08A 100%)',
              border: '1.5px solid #FDE68A',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.75rem',
              flexShrink: 0,
              boxShadow: '0 4px 12px rgba(252,211,77,0.3)',
            }}
          >
            🥈
          </motion.div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>
                {achievement.medal} — {achievement.event}
              </h3>
              <span style={{
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--r-full)',
                background: 'var(--yellow-light)', border: '1.5px solid #FDE68A',
                fontSize: '0.72rem', fontWeight: 700, color: '#92400E',
                flexShrink: 0,
              }}>
                {achievement.date}
              </span>
            </div>
            <p style={{ color: 'var(--violet)', fontWeight: 600, fontSize: '0.8125rem', marginBottom: '0.375rem' }}>
              {achievement.organizer}
            </p>
            <p style={{ color: 'var(--text-3)', fontSize: '0.8125rem', fontStyle: 'italic' }}>
              {achievement.note}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
