import GitHubIcon from '../icons/GitHubIcon';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import Mascot from '../../mascot/Mascot';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1.5px solid var(--border)', padding: '1.75rem 0' }}>
      <div className="container footer-inner">
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <Mascot size={34} compact />
          <p style={{ color: 'var(--text-3)', fontSize: '0.8125rem' }}>
            © {new Date().getFullYear()}{' '}
            <span style={{ color: 'var(--text-2)', fontWeight: 600 }}>Minh Le</span>
            {' '}· All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="footer-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <p className="footer-built-with" style={{ color: 'var(--text-3)', fontSize: '0.8125rem' }}>
            Built with React + Vite
          </p>
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -1 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.35rem',
              color: 'var(--text-2)', fontSize: '0.8125rem',
              textDecoration: 'none',
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--r-full)',
              border: '1.5px solid var(--border)',
              background: 'var(--bg-white)',
              transition: 'color 0.2s, border-color 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--violet)'; e.currentTarget.style.borderColor = 'var(--violet-mid)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
          >
            <GitHubIcon size={14} /> @minhthien435
          </motion.a>
        </div>
      </div>

      <style>{`
        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        @media (max-width: 520px) {
          .footer-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .footer-right {
            justify-content: center;
          }
          .footer-built-with {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
}
