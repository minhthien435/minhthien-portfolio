import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Wrench, Zap, Sparkles, Terminal, CheckCircle } from 'lucide-react';
import { skills } from '../../data/portfolio';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend Core',
    icon: Code2,
    color: 'from-violet-500 via-purple-500 to-indigo-600',
    btnBg: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    desc: 'Core interface technologies used to build responsive, accessible, and high-performance web applications.',
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    icon: Wrench,
    color: 'from-cyan-500 via-teal-500 to-blue-600',
    btnBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    desc: 'Version control, code editors, and development workflow systems powering daily productivity.',
  },
  {
    id: 'learning',
    label: 'Active Learning',
    icon: Zap,
    color: 'from-amber-500 via-orange-500 to-rose-600',
    btnBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    desc: 'Technologies actively being explored to broaden full-stack and modern web capabilities.',
  },
];

const skillMeta = {
  HTML5: { level: 'Advanced', percent: 90, gradient: 'from-orange-500 to-rose-500', bg: 'bg-orange-500/15', text: 'text-orange-400', border: 'border-orange-500/30' },
  CSS3: { level: 'Advanced', percent: 88, gradient: 'from-blue-500 to-cyan-400', bg: 'bg-blue-500/15', text: 'text-blue-400', border: 'border-blue-500/30' },
  JavaScript: { level: 'Advanced', percent: 85, gradient: 'from-amber-400 to-yellow-500', bg: 'bg-amber-400/15', text: 'text-amber-300', border: 'border-amber-400/30' },
  ReactJS: { level: 'Proficient', percent: 85, gradient: 'from-cyan-400 to-blue-500', bg: 'bg-cyan-500/15', text: 'text-cyan-300', border: 'border-cyan-500/30' },
  'Tailwind CSS': { level: 'Proficient', percent: 85, gradient: 'from-teal-400 to-cyan-500', bg: 'bg-teal-500/15', text: 'text-teal-300', border: 'border-teal-500/30' },
  Bootstrap: { level: 'Proficient', percent: 80, gradient: 'from-purple-500 to-indigo-600', bg: 'bg-purple-500/15', text: 'text-purple-300', border: 'border-purple-500/30' },
  Git: { level: 'Proficient', percent: 80, gradient: 'from-rose-500 to-orange-500', bg: 'bg-rose-500/15', text: 'text-rose-400', border: 'border-rose-500/30' },
  GitHub: { level: 'Proficient', percent: 82, gradient: 'from-violet-500 to-indigo-600', bg: 'bg-violet-500/15', text: 'text-violet-300', border: 'border-violet-500/30' },
  'VS Code': { level: 'Advanced', percent: 92, gradient: 'from-sky-400 to-blue-600', bg: 'bg-sky-500/15', text: 'text-sky-300', border: 'border-sky-500/30' },
  TypeScript: { level: 'Exploring', percent: 65, gradient: 'from-blue-500 to-indigo-600', bg: 'bg-blue-600/15', text: 'text-blue-300', border: 'border-blue-600/30' },
  'Node.js': { level: 'Exploring', percent: 60, gradient: 'from-emerald-400 to-green-600', bg: 'bg-emerald-500/15', text: 'text-emerald-300', border: 'border-emerald-500/30' },
  'Express.js': { level: 'Exploring', percent: 55, gradient: 'from-fuchsia-500 to-purple-600', bg: 'bg-fuchsia-500/15', text: 'text-fuchsia-300', border: 'border-fuchsia-500/30' },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const currentCategoryData = categories.find((c) => c.id === activeCategory);
  const currentSkills = skills[activeCategory] || [];

  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-stone-950 text-white relative overflow-hidden">
      {/* Colorful Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-fuchsia-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-rose-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-3 shadow-md">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>WHAT I WORK WITH</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-rose-400">
              Skills
            </span>
          </h2>
          <p className="text-stone-400 text-sm md:text-base max-w-2xl leading-relaxed font-light">
            Technologies I use to build web applications — organized by what I know and what I'm learning.
          </p>
        </div>

        {/* Category Filter Tabs with rich color gradients */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-xs md:text-sm font-bold transition-all duration-300 ${
                  isSelected
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] scale-105 border border-white/20`
                    : 'bg-stone-900/80 text-stone-400 border border-stone-800 hover:bg-stone-800 hover:text-white'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/20 text-white' : 'bg-stone-800 text-stone-300'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span>{cat.label}</span>
                <span className="font-mono text-[11px] opacity-75">({skills[cat.id]?.length || 0})</span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-950/40 via-stone-900/60 to-cyan-950/40 border border-white/10 backdrop-blur-md mb-8 flex items-center justify-between shadow-lg">
          <p className="text-stone-200 text-xs md:text-sm font-medium">{currentCategoryData.desc}</p>
          <span className="text-xs font-mono text-cyan-400 hidden sm:inline-block font-semibold">● Verified Skills</span>
        </div>

        {/* Skills Cards Grid with colorful brand styles */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentSkills.map((skill, index) => {
              const meta = skillMeta[skill.name] || {
                level: 'Competent',
                percent: 75,
                gradient: 'from-violet-500 to-cyan-400',
                bg: 'bg-violet-500/15',
                text: 'text-cyan-300',
                border: 'border-cyan-500/30',
              };

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-6 rounded-3xl bg-stone-900/80 border ${meta.border} hover:border-white/40 backdrop-blur-xl transition-all duration-300 group hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 relative overflow-hidden`}
                >
                  {/* Subtle colorful back glow */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${meta.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-25 transition-opacity`} />

                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${meta.gradient} p-[1.5px] shadow-md group-hover:scale-110 transition-transform`}
                      >
                        <div className="w-full h-full bg-stone-950 rounded-[14px] flex items-center justify-center font-black text-sm text-white">
                          {skill.name.slice(0, 2).toUpperCase()}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-extrabold text-white text-base group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h3>
                        <span className={`text-[11px] font-mono font-semibold ${meta.text}`}>{meta.level}</span>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${meta.bg} ${meta.text} ${meta.border} shadow-sm`}
                    >
                      {meta.percent}%
                    </span>
                  </div>

                  {/* Colorful Progress Meter */}
                  <div className="w-full h-2 rounded-full bg-stone-950/80 overflow-hidden border border-white/5 relative z-10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${meta.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.1 }}
                      className={`h-full bg-gradient-to-r ${meta.gradient} rounded-full shadow-sm`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
