import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export default function CvModal({ isOpen, onClose }) {
  const boxRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement;
    const box = boxRef.current;

    const esc = (e) => e.key === 'Escape' && onClose();

    const trap = (e) => {
      if (e.key !== 'Tab' || !box) return;
      const focusables = box.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', esc);
    document.addEventListener('keydown', trap);
    
    // Prevent background scrolling completely on body & html
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    box?.focus();

    return () => {
      document.removeEventListener('keydown', esc);
      document.removeEventListener('keydown', trap);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      style={{ zIndex: 300, padding: '1rem', overscrollBehavior: 'contain' }}
    >
      <motion.div
        ref={boxRef}
        className="modal-box"
        tabIndex={-1}
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        style={{
          maxWidth: 960,
          width: '100%',
          height: '88vh',
          maxHeight: 900,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 'var(--r-xl)',
          overflow: 'hidden',
          background: 'var(--bg-white)',
          border: '1.5px solid var(--border-md)',
          boxShadow: 'var(--shadow-lg)',
          overscrollBehavior: 'contain',
        }}
      >
        {/* Modal Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.25rem',
            borderBottom: '1.5px solid var(--border)',
            background: 'var(--bg-cream)',
            flexShrink: 0,
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Header Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', minWidth: 0 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'var(--violet-light)',
                border: '1.5px solid var(--violet-mid)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--violet)',
                flexShrink: 0,
              }}
            >
              <FileText size={18} />
            </div>
            <div style={{ minWidth: 0 }}>
              <h2
                id="cv-modal-title"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'var(--text)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  margin: 0,
                }}
              >
                My CV — {personalInfo.name}
              </h2>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-3)', margin: 0 }}>
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            {/* Open in New Tab */}
            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.8125rem' }}
              title="Open PDF in new tab"
            >
              <ExternalLink size={14} />
              <span className="cv-btn-text">Open Tab</span>
            </motion.a>

            {/* Download Button */}
            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.cvUrl}
              download={personalInfo.cvFilename || 'CV_Le_Minh.pdf'}
              className="btn btn-primary"
              style={{ padding: '0.4rem 0.95rem', fontSize: '0.8125rem' }}
              title="Download CV PDF"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </motion.a>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              aria-label="Close CV preview modal"
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'var(--bg-white)',
                border: '1.5px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-2)',
                marginLeft: '0.25rem',
              }}
            >
              <X size={16} />
            </motion.button>
          </div>
        </div>

        {/* Modal Viewer Container */}
        <div
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            background: 'var(--bg)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <iframe
            src={`${personalInfo.cvUrl}#toolbar=1&navpanes=0&view=FitH`}
            title={`CV Preview — ${personalInfo.name}`}
            width="100%"
            height="100%"
            style={{
              border: 'none',
              display: 'block',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 540px) {
          .cv-btn-text { display: none; }
        }
      `}</style>
    </motion.div>
  );
}
