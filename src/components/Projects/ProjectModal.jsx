import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Check, Sparkles, Layers, Cpu, Play } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import eparkingVideo from '../../assets/Projects.mp4';
import jamwaveVideo from '../../assets/JamWave.mp4';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const projectVideo =
    project.id === 'eparking' ? eparkingVideo : project.id === 'jamwave' ? jamwaveVideo : null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-950/80 backdrop-blur-xl -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-stone-900 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-white max-h-[90vh] overflow-y-auto"
        >
          {/* Top Gradient Accent */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-violet-500 via-cyan-400 to-rose-500" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Embedded Video Walkthrough if available */}
          {projectVideo && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-stone-950 mb-6 border border-stone-800 shadow-lg">
              <video
                src={projectVideo}
                autoPlay
                loop
                muted
                controls
                playsInline
                className="w-full h-full max-h-[460px] object-contain bg-black"
              />
            </div>
          )}

          {/* Header */}
          <div className="mb-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
              {project.type} // {project.period}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{project.name}</h3>
            <p className="text-stone-300 text-sm sm:text-base mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-stone-950 border border-stone-800 text-violet-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Features & Personal Contribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* My Contributions */}
            <div className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800">
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                <span>My Contributions</span>
              </h4>
              <ul className="space-y-2 text-xs text-stone-300">
                {project.myContribution?.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Features */}
            <div className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800">
              <h4 className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                <span>Core Features</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-300 max-h-48 overflow-y-auto pr-1">
                {project.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Sparkles className="w-3 h-3 text-violet-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-800">
            <div className="flex items-center gap-3">
              {project.hasLiveDemo && project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-stone-950 font-bold text-xs shadow-lg transition-all"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-all border border-stone-700"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs text-stone-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
