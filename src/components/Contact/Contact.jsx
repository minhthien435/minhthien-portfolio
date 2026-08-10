import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { contact, personalInfo } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const reveal = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const reduced = useReducedMotion();

  return (
    <section id="contact" aria-label="Contact" style={{ background: 'var(--bg-cream)' }}>
      <div className="divider" />
      <div className="container section-gap">
        <motion.div
          variants={reveal}
          initial={reduced ? false : 'hidden'}
          whileInView={reduced ? false : 'visible'}
          viewport={{ once: true }}
          style={{
            maxWidth: 600, margin: '0 auto', textAlign: 'center',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem',
          }}
        >
          {/* Wave emoji */}
          <motion.div
            animate={reduced ? {} : { rotate: [0, 14, -8, 14, 0], transition: { duration: 2, repeat: Infinity, delay: 1 } }}
            style={{ fontSize: '3rem', display: 'inline-block' }}
            aria-hidden="true"
          >
            👋
          </motion.div>

          {/* Heading */}
          <div>
            <p className="section-eyebrow" style={{ justifyContent: 'center' }}>Get In Touch</p>
            <h2 className="headline" style={{ marginTop: '0.5rem' }}>Let's Connect</h2>
            <p style={{ color: 'var(--text-2)', marginTop: '0.75rem', lineHeight: 1.8, fontSize: '1rem' }}>
              {contact.message}
            </p>
          </div>

          {/* Contact card */}
          <div style={{
            width: '100%',
            background: 'var(--bg-white)',
            border: '1.5px solid var(--border)',
            borderRadius: 'var(--r-xl)',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-sm)',
          }}>
            {/* GitHub contact row */}
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--r-lg)',
                background: '#1C1917',
                textDecoration: 'none',
                color: 'white',
                transition: 'transform 0.2s',
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <GitHubIcon size={20} color="white" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 700, fontSize: '0.9375rem', marginBottom: '0.1rem' }}>GitHub</p>
                <p style={{ opacity: 0.55, fontSize: '0.8125rem' }}>github.com/{personalInfo.githubHandle}</p>
              </div>
              <span style={{ marginLeft: 'auto', opacity: 0.4, fontSize: '1rem' }}>↗</span>
            </motion.a>

            {/* Note */}
            <div style={{
              padding: '0.875rem 1rem',
              borderRadius: 'var(--r-md)',
              background: 'var(--violet-light)',
              border: '1.5px solid var(--violet-mid)',
              textAlign: 'center',
            }}>
              <p style={{ color: 'var(--violet)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                💬 Open to connect via{' '}
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, color: 'var(--violet)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  GitHub
                </a>{' '}
                or DMs. Always happy to chat about frontend development!
              </p>
            </div>
          </div>

          {/* CTA */}
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
            style={{ fontSize: '1rem', padding: '0.875rem 2.25rem' }}
          >
            <GitHubIcon size={18} /> View My GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
