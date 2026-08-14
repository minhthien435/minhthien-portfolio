import { motion } from 'framer-motion';
import { Sparkles, ArrowUp, Code } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { personalInfo } from '../../data/portfolio';
import BrandLogo from '../Common/BrandLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 border-t border-stone-900 py-12 px-4 md:px-8 text-stone-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <BrandLogo className="w-9 h-9" showText={true} />
        </div>

        {/* Center Tech Stack */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
          <Code className="w-3.5 h-3.5 text-cyan-400" />
          <span>React 19 + GSAP + Tailwind CSS + Lenis</span>
        </div>

        {/* Right GitHub & Back to top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>@{personalInfo.githubHandle}</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-cyan-400 transition-colors border border-stone-800"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
