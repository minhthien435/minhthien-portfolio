import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Download, ExternalLink, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export default function CvModal({ isOpen, onClose }) {
  const boxRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/85 backdrop-blur-2xl -z-10"
      />

      {/* Modal Container */}
      <motion.div
        ref={boxRef}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl h-[90vh] bg-stone-900 border border-white/10 rounded-3xl flex flex-col shadow-2xl overflow-hidden text-white"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">My CV — {personalInfo.name}</h3>
              <span className="text-xs font-mono text-cyan-400">{personalInfo.title}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.cvUrl}
              download={personalInfo.cvFilename}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-stone-950 shadow-md transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF iframe viewer */}
        <div className="flex-1 w-full h-full bg-stone-950">
          <iframe
            src={`${personalInfo.cvUrl}#toolbar=0`}
            title="Curriculum Vitae Preview"
            className="w-full h-full border-none"
          />
        </div>
      </motion.div>
    </div>
  );
}
