import { motion } from 'framer-motion';
import { Milestone, CheckCircle2 } from 'lucide-react';
import ieltsLogo from '../../assets/ielts-logo.png';
import fptLogo from '../../assets/fpt-logo.png';
import todoIcon from '../../assets/todo-icon.png';
import eparkingLogo from '../../assets/eparking-logo.png';
import jamwaveLogo from '../../assets/jamwave-logo.jpg';

const milestones = [
  {
    id: 1,
    date: 'December 2023',
    phase: 'Global Foundation',
    title: 'IELTS 6.0 Achieved',
    image: ieltsLogo,
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    borderColor: 'border-amber-500/40 hover:border-amber-400',
    phaseColor: 'text-amber-400',
    nodeGlow: 'bg-gradient-to-r from-amber-400 to-rose-500 shadow-[0_0_20px_rgba(251,191,36,0.5)]',
    tags: ['English Proficiency', 'Communication', 'Global Mindset'],
    bullets: [
      'Achieved an IELTS overall score of 6.0, establishing strong English communication skills',
      'Read and write technical engineering documentation with confidence',
      'Prepared academic baseline for software engineering at university',
    ],
  },
  {
    id: 2,
    date: 'September 2024 – Present',
    phase: 'Academic Journey',
    title: 'FPT University — Software Engineering',
    image: fptLogo,
    gradient: 'from-violet-500 via-purple-500 to-indigo-600',
    borderColor: 'border-violet-500/40 hover:border-violet-400',
    phaseColor: 'text-violet-400',
    nodeGlow: 'bg-gradient-to-r from-violet-500 to-indigo-500 shadow-[0_0_20px_rgba(139,92,246,0.5)]',
    tags: ['Software Engineering', 'Algorithms', 'Databases', 'Web Architecture'],
    bullets: [
      'Enrolled in Bachelor of Information Technology at FPT University',
      'Mastered core computer science foundations, algorithms, and software design patterns',
      'Formed deep specialization in modern Frontend Engineering and React ecosystem',
    ],
  },
  {
    id: 3,
    date: 'May 2026',
    phase: 'First Frontend App',
    title: 'Todo App with CRUD & Local Storage',
    image: todoIcon,
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    borderColor: 'border-cyan-500/40 hover:border-cyan-400',
    phaseColor: 'text-cyan-400',
    nodeGlow: 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]',
    tags: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Local Storage'],
    bullets: [
      'Built a full-featured task management web application from scratch',
      'Implemented reactive filtering, state persistence with Local Storage, and clean DOM manipulation',
      'Laid robust JavaScript programming foundations',
    ],
  },
  {
    id: 4,
    date: 'June 2026 – July 2026',
    phase: 'Team Collaboration',
    title: 'eParking Management System',
    image: eparkingLogo,
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-600',
    borderColor: 'border-fuchsia-500/40 hover:border-fuchsia-400',
    phaseColor: 'text-fuchsia-400',
    nodeGlow: 'bg-gradient-to-r from-fuchsia-500 to-rose-500 shadow-[0_0_20px_rgba(236,72,153,0.5)]',
    tags: ['ReactJS', 'Tailwind CSS', 'Axios', 'REST API', 'ANPR'],
    bullets: [
      'Engineered responsive customer and admin UI for smart automated parking with ANPR',
      'Integrated RESTful backend APIs with Axios and managed complex booking workflows',
      'Collaborated effectively in a team environment using Git & GitHub workflows',
    ],
  },
  {
    id: 5,
    date: 'August 2026 – Present',
    phase: 'Advanced Engineering',
    title: 'JamWave – Music Streaming Platform',
    image: jamwaveLogo,
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    borderColor: 'border-emerald-500/40 hover:border-emerald-400',
    phaseColor: 'text-emerald-400',
    nodeGlow: 'bg-gradient-to-r from-emerald-400 to-teal-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]',
    tags: ['ReactJS', 'Zustand', 'Web Audio API', 'AI Integration'],
    bullets: [
      'Developed Spotify-inspired music streaming application with 2,400+ tracks',
      'Architected custom audio player engine with Zustand global state management',
      'Integrated natural language AI music assistant for smart recommendations',
    ],
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-28 px-4 md:px-8 bg-stone-950 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-violet-500/20 via-cyan-500/20 to-rose-500/20 border border-violet-500/40 text-violet-300 text-xs font-mono mb-3 shadow-md">
            <Milestone className="w-3.5 h-3.5 text-cyan-400" />
            <span>CAREER STORY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-rose-400">
              Journey
            </span>
          </h2>
          <p className="text-stone-400 text-sm md:text-base max-w-2xl leading-relaxed font-light">
            From my first English milestone to building real-world web applications — a story of continuous learning and growth.
          </p>
        </div>

        {/* Alternating Zig-Zag Timeline */}
        <div className="relative">
          {/* Central Vertical Spine Line with multi-color neon gradient */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-amber-400 via-violet-500 via-cyan-400 via-fuchsia-500 to-emerald-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] opacity-70" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={item.id} className="relative flex items-center">
                  {/* Glowing Node at center with custom color */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-stone-950 border-2 border-white/20 flex items-center justify-center z-20 shadow-xl transition-all duration-300">
                    <div className={`w-3.5 h-3.5 rounded-full ${item.nodeGlow} animate-pulse`} />
                  </div>

                  {/* Milestone Card with colorful border and accent glow */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className={`w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 ${
                      isEven ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    <div className={`p-6 md:p-8 rounded-3xl bg-stone-900/80 border ${item.borderColor} backdrop-blur-xl shadow-2xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden`}>
                      {/* Colorful corner light */}
                      <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${item.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-25 transition-opacity`} />

                      <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-stone-800/80 relative z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-stone-950 border border-white/10 p-2 flex items-center justify-center shrink-0 shadow-md">
                            <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                          </div>
                          <div>
                            <span className={`text-xs font-mono font-bold uppercase tracking-wider block ${item.phaseColor}`}>
                              {item.phase}
                            </span>
                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <span className="text-xs font-mono font-bold text-stone-200 bg-stone-950 px-3 py-1 rounded-full border border-white/10 shrink-0 shadow-sm">
                          {item.date}
                        </span>
                      </div>

                      {/* Bullets */}
                      <div className="space-y-2 mb-6 relative z-10">
                        {item.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-stone-300 font-light">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 relative z-10">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono text-stone-300 bg-stone-950/90 border border-white/10 shadow-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
