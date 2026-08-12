import { Mail, Copy, Check, FileText } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '../icons/GitHubIcon';
import { contact, personalInfo } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import Mascot from '../../mascot/Mascot';

const reveal = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact({ onOpenCv }) {
  const reduced = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    // Opens web-based Gmail composer directly in a new tab with pre-filled recipient & subject
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent('Frontend Developer Internship Inquiry — Minh Le Portfolio')}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

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
            maxWidth: 620, margin: '0 auto', textAlign: 'center',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem',
          }}
        >
          {/* Mascot */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.85 }}
            whileInView={reduced ? false : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Mascot size={104} compact />
          </motion.div>

          {/* Heading */}
          <div>
            <p className="section-eyebrow" style={{ justifyContent: 'center' }}>Get In Touch</p>
            <h2 className="headline" style={{ marginTop: '0.5rem' }}>Let's Connect</h2>
            <p style={{ color: 'var(--text-2)', marginTop: '0.75rem', lineHeight: 1.8, fontSize: '1rem' }}>
              {contact.message}
            </p>
          </div>

          {/* Contact card container */}
          <div className="contact-card-container" style={{
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
            {/* Email contact row */}
            <motion.a
              href="#"
              onClick={handleSendEmail}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--r-lg)',
                background: 'var(--violet)',
                textDecoration: 'none',
                color: 'white',
                boxShadow: 'var(--shadow-violet)',
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={20} color="white" />
              </div>
              <div style={{ textAlign: 'left', flex: 1, overflow: 'hidden' }}>
                <p style={{ fontWeight: 700, fontSize: '0.9375rem', marginBottom: '0.1rem' }}>Email Me</p>
                <p style={{ opacity: 0.9, fontSize: '0.85rem', wordBreak: 'break-all', fontFamily: 'monospace' }}>
                  {personalInfo.email}
                </p>
              </div>
              <span style={{ opacity: 0.8, fontSize: '1.1rem' }}>↗</span>
            </motion.a>

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

            {/* Quick Actions */}
            <div className="contact-quick-actions" style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleSendEmail}
                className="btn btn-primary"
                style={{ flex: 1, minWidth: 130, justifyContent: 'center' }}
              >
                <Mail size={16} /> Open Web Gmail
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenCv}
                className="btn btn-outline"
                style={{ flex: 1, minWidth: 110, justifyContent: 'center' }}
              >
                <FileText size={16} /> View CV
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleCopyEmail}
                className="btn btn-ghost"
                style={{ flex: 1, minWidth: 120, justifyContent: 'center' }}
              >
                {copied ? <Check size={16} color="var(--green)" /> : <Copy size={16} />}
                {copied ? 'Copied Email!' : 'Copy Email'}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 520px) {
          .contact-card-container {
            padding: 1.125rem !important;
          }
          .contact-quick-actions {
            flex-direction: column !important;
          }
          .contact-quick-actions .btn {
            width: 100% !important;
            min-width: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
