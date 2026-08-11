import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
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
          className="github-card"
          style={{
            background: 'var(--bg-white)',
            border: '1.5px solid var(--border)',
            borderRadius: 'var(--r-xl)',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {/* Left */}
          <div className="github-profile" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {/* Real GitHub avatar */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -3 }}
              style={{
                width: 72, height: 72,
                borderRadius: '50%',
                flexShrink: 0,
                boxShadow: 'var(--shadow-md)',
                overflow: 'hidden',
              }}
            >
              <img
                src={`https://github.com/${personalInfo.githubHandle}.png`}
                alt={`${personalInfo.githubHandle} GitHub avatar`}
                width={72}
                height={72}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
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
          <div className="github-actions" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ fontSize: '0.9375rem' }}
            >
              <GitHubIcon size={17} />
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

      <style>{`
        @media (max-width: 640px) {
          .github-card {
            padding: 1.5rem !important;
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .github-profile {
            flex-direction: column !important;
            text-align: center !important;
          }
          .github-profile .tag {
            justify-content: center;
          }
          .github-actions {
            flex-direction: column !important;
            width: 100%;
          }
          .github-actions .btn {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
