import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Sparkles, Terminal, Code2 } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { personalInfo } from '../../data/portfolio';
import MagneticButton from '../Common/MagneticButton';

export default function GitHubSection() {
  return (
    <section id="github" className="py-20 px-4 md:px-8 bg-stone-950 text-white relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-10 rounded-3xl bg-stone-900/70 border border-stone-800 hover:border-cyan-500/40 backdrop-blur-xl shadow-2xl transition-all duration-300 relative overflow-hidden"
        >
          {/* Header row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-md">
                <img
                  src={`https://github.com/${personalInfo.githubHandle}.png`}
                  alt={personalInfo.githubHandle}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white">@{personalInfo.githubHandle}</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Active Dev
                  </span>
                </div>
                <p className="text-xs text-stone-400 font-mono mt-1">Open Source & Project Repositories</p>
              </div>
            </div>

            <MagneticButton>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold border border-stone-700 hover:border-cyan-400 transition-all hover:scale-105"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>Follow on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>
          </div>

          {/* GitHub Commit Activity Heatmap Simulation */}
          <div className="pt-8">
            <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Continuous Code Activity Stream</span>
              </div>
              <span className="hidden sm:inline-block">2024 – 2026 Commit Pipeline</span>
            </div>

            {/* Simulated Heatmap Blocks */}
            <div className="grid grid-cols-12 sm:grid-cols-24 gap-1.5 p-4 rounded-2xl bg-stone-950 border border-stone-800/80">
              {Array.from({ length: 48 }).map((_, i) => {
                const levels = ['bg-stone-900', 'bg-emerald-950/80', 'bg-emerald-700', 'bg-emerald-500', 'bg-cyan-400'];
                const level = levels[i % 5];

                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-sm ${level} transition-all hover:scale-125 cursor-pointer`}
                    title={`Active Activity Period #${i + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
