import { motion } from 'framer-motion';
import { Github, Star } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const reveal = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function GitHubSection() {
  const reduced = useReducedMotion();

  return (
    <section id="github" aria-label="GitHub" style={{ background: 'var(--bg-cream)' }}>
      <div className="divider" />
      <div className="container section-gap-sm">
        <motion.div
          variants={reveal}
          initial={reduced ? false : 'hidden'}
          whileInView={reduced ? false : 'visible'}
          viewport={{ once: true }}
          style={{
            background: 'var(--bg-white)',
            border: '1.5px solid var(--border)',
            borderRadius: 'var(--r-xl)',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {/* Left */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {/* GitHub avatar placeholder */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -3 }}
              style={{
                width: 72, height: 72,
                borderRadius: '50%',
                background: '#1C1917',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <Github size={34} color="white" />
            </motion.div>
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.25rem', color: 'var(--text)', marginBottom: '0.2rem' }}>
                @{personalInfo.githubHandle}
              </p>
              <p style={{ color: 'var(--text-2)', fontSize: '0.9rem' }}>
                Frontend projects, practice repos, and open source exploration.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.625rem', flexWrap: 'wrap' }}>
                <span className="tag tag-violet" style={{ fontSize: '0.75rem' }}>ReactJS Projects</span>
                <span className="tag tag-gray" style={{ fontSize: '0.75rem' }}>Active</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ fontSize: '0.9375rem' }}
            >
              <Github size={17} />
              View My GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={`${personalInfo.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Star size={15} />
              Repositories
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
