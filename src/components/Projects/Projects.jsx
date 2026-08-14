import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Check, Play, Pause, FolderGit2, Sparkles, Music, Layers } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { projects } from '../../data/portfolio';
import ProjectModal from './ProjectModal';
import eparkingPreview from '../../assets/eparking-preview.png';
import eparkingVideo from '../../assets/Projects.mp4';
import jamwaveLogo from '../../assets/jamwave-logo.jpg';
import jamwaveVideo from '../../assets/JamWave.mp4';
import todoIcon from '../../assets/todo-icon.png';
import MagneticButton from '../Common/MagneticButton';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEparkingVideoPlaying, setIsEparkingVideoPlaying] = useState(true);
  const [isJamwaveVideoPlaying, setIsJamwaveVideoPlaying] = useState(true);

  const eparking = projects.find((p) => p.id === 'eparking') || projects[0];
  const jamwave = projects.find((p) => p.id === 'jamwave') || projects[1];
  const todo = projects.find((p) => p.id === 'todo') || projects[2];

  const toggleEparkingVideo = (e) => {
    e.stopPropagation();
    const video = document.getElementById('eparking-video-player');
    if (video) {
      if (isEparkingVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsEparkingVideoPlaying(!isEparkingVideoPlaying);
    }
  };

  const toggleJamwaveVideo = (e) => {
    e.stopPropagation();
    const video = document.getElementById('jamwave-video-player');
    if (video) {
      if (isJamwaveVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsJamwaveVideoPlaying(!isJamwaveVideoPlaying);
    }
  };

  return (
    <section id="projects" className="py-28 px-4 md:px-8 bg-stone-950 text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-700/40 text-violet-300 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>WHAT I'VE BUILT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-rose-400">
              Projects
            </span>
          </h2>
          <p className="text-stone-400 text-sm md:text-base max-w-2xl leading-relaxed font-light">
            Real projects I've built to practice and demonstrate my frontend skills.
          </p>
        </div>

        {/* ── PROJECT 1 (Horizontal Full Width): eParking Management System ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 rounded-3xl bg-stone-900/80 border border-stone-800 hover:border-violet-500/40 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-300 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Media Player Window (Col 7) */}
            <div className="lg:col-span-7 bg-stone-950 relative min-h-[320px] lg:min-h-[440px] flex items-center justify-center p-2 sm:p-4 overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-800">
              <video
                id="eparking-video-player"
                src={eparkingVideo}
                poster={eparkingPreview}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full max-h-[440px] object-contain rounded-2xl bg-black"
              />

              {/* Video Controls overlay badge */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between z-10 pointer-events-none">

                <button
                  onClick={toggleEparkingVideo}
                  className="p-2.5 rounded-full bg-stone-950/85 hover:bg-stone-800 text-white border border-white/15 backdrop-blur-md transition-all hover:scale-110 pointer-events-auto shadow-lg"
                >
                  {isEparkingVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-cyan-400" />}
                </button>
              </div>
            </div>

            {/* Right Project Details (Col 5) */}
            <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-violet-400 font-bold uppercase tracking-wider">
                    {eparking.type} // {eparking.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-violet-950 text-violet-300 border border-violet-800/50">
                    Featured
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                  {eparking.name}
                </h3>

                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  {eparking.description}
                </p>

                {/* Key Contribution Highlights */}
                <div className="space-y-2 mb-6">
                  {eparking.myContribution?.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {eparking.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-stone-300 bg-stone-950 border border-stone-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-800">
                {eparking.hasLiveDemo && (
                  <MagneticButton>
                    <a
                      href={eparking.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-stone-950 font-bold text-xs shadow-lg transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </MagneticButton>
                )}

                <MagneticButton>
                  <a
                    href={eparking.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-all"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                </MagneticButton>

                <button
                  onClick={() => setSelectedProject(eparking)}
                  className="ml-auto text-xs text-stone-400 hover:text-cyan-400 font-mono transition-colors"
                >
                  View Details &rarr;
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── PROJECT 2 (Horizontal Full Width): JamWave Music Streaming Platform ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 rounded-3xl bg-stone-900/80 border border-stone-800 hover:border-cyan-500/40 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-300 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Media Player Window (Col 7) */}
            <div className="lg:col-span-7 bg-stone-950 relative min-h-[320px] lg:min-h-[440px] flex items-center justify-center p-2 sm:p-4 overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-800">
              <video
                id="jamwave-video-player"
                src={jamwaveVideo}
                poster={jamwaveLogo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full max-h-[440px] object-contain rounded-2xl bg-black"
              />

              {/* Video Controls overlay badge */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between z-10 pointer-events-none">

                <button
                  onClick={toggleJamwaveVideo}
                  className="p-2.5 rounded-full bg-stone-950/85 hover:bg-stone-800 text-white border border-white/15 backdrop-blur-md transition-all hover:scale-110 pointer-events-auto shadow-lg"
                >
                  {isJamwaveVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-cyan-400" />}
                </button>
              </div>
            </div>

            {/* Right Project Details (Col 5) */}
            <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    {jamwave.type} // {jamwave.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                    2,400+ Tracks & AI
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                  {jamwave.name}
                </h3>

                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  {jamwave.description}
                </p>

                {/* Key Contribution Highlights */}
                <div className="space-y-2 mb-6">
                  {jamwave.myContribution?.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {jamwave.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-stone-300 bg-stone-950 border border-stone-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-800">
                {jamwave.hasLiveDemo && (
                  <MagneticButton>
                    <a
                      href={jamwave.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-stone-950 font-bold text-xs shadow-lg transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </MagneticButton>
                )}

                <MagneticButton>
                  <a
                    href={jamwave.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-all"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                </MagneticButton>

                <button
                  onClick={() => setSelectedProject(jamwave)}
                  className="ml-auto text-xs text-stone-400 hover:text-cyan-400 font-mono transition-colors"
                >
                  View Details &rarr;
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── PROJECT 3 (At the bottom): Todo App ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-10 rounded-3xl bg-stone-900/70 border border-stone-800 hover:border-violet-500/40 backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl transition-all duration-300 group hover:-translate-y-1"
        >
          <div className="flex items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-stone-950 border border-white/10 p-3 overflow-hidden flex items-center justify-center shrink-0">
              <img src={todoIcon} alt={todo.name} className="w-full h-full object-contain" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {todo.name}
                </h3>
                <span className="text-xs font-mono text-stone-400 bg-stone-950 px-3 py-0.5 rounded-full border border-stone-800">
                  {todo.period}
                </span>
              </div>

              <p className="text-stone-300 text-sm max-w-2xl font-light mb-4">
                {todo.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {todo.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono text-stone-400 bg-stone-950 border border-stone-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0 self-end md:self-center">
            <a
              href={todo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-all"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <button
              onClick={() => setSelectedProject(todo)}
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <span>Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
