import { motion } from 'framer-motion';
import { GraduationCap, Target, Globe, Sparkles, CheckCircle2, BookOpen, Compass } from 'lucide-react';
import { personalInfo, aboutText, careerObjective } from '../../data/portfolio';
import fptCampus from '../../assets/fpt-campus.jpg';
import fptLogo from '../../assets/fpt-logo.png';
import ieltsLogo from '../../assets/ielts-logo.png';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-stone-950 text-white relative overflow-hidden">
      {/* Background ambient colorful lighting */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-gradient-to-tr from-violet-600/20 to-fuchsia-600/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/40 text-violet-400 dark:text-violet-300 text-xs font-mono mb-3 shadow-sm">
            <span>WHO I AM</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-rose-400">
              Me
            </span>
          </h2>
        </div>

        {/* BENTO GRID WITH VIBRANT COLORS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Bio & Philosophy (Col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 p-8 rounded-3xl bg-stone-900/80 border border-violet-500/30 hover:border-violet-400 backdrop-blur-xl shadow-2xl flex flex-col justify-between relative overflow-hidden group transition-all duration-300"
          >
            {/* Colorful top-corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-violet-600/25 via-fuchsia-600/15 to-transparent rounded-full blur-3xl group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white shadow-lg">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Developer Bio & Mission</h3>
                    <span className="text-xs font-mono text-violet-600 dark:text-violet-300 font-semibold">Building for real human value</span>
                  </div>
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 shadow-sm">
                  {personalInfo.status}
                </span>
              </div>

              <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-6 font-light relative z-10">
                {aboutText}
              </p>
            </div>

            <div className="pt-6 border-t border-stone-800/80 flex flex-wrap items-center gap-2 relative z-10">
              <span className="text-xs font-mono text-stone-400 mr-2 font-bold">Core Focus:</span>
              <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-violet-500/10 border border-violet-500/30 text-violet-700 dark:text-violet-300 shadow-sm">
                Responsive Design
              </span>
              <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 shadow-sm">
                React Architecture
              </span>
              <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 shadow-sm">
                Clean Codebase
              </span>
            </div>
          </motion.div>

          {/* Card 2: FPT University (Col 5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 rounded-3xl overflow-hidden border border-orange-500/30 hover:border-orange-400 relative group flex flex-col justify-end min-h-[320px] shadow-2xl transition-all duration-300"
          >
            {/* Campus Image */}
            <img
              src={fptCampus}
              alt="FPT University Campus"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/30" />

            {/* Content */}
            <div className="relative p-6 md:p-8 z-10 text-white">
              <div className="flex items-center gap-3 mb-3">
                <img src={fptLogo} alt="FPT Logo" className="w-10 h-10 object-contain rounded-xl bg-white/20 p-1 backdrop-blur-md shadow-md border border-white/20" />
                <div>
                  <h4 className="text-lg font-black !text-white drop-shadow-md">{personalInfo.university}</h4>
                  <span className="text-xs text-orange-400 font-mono font-bold drop-shadow-sm">{personalInfo.educationPeriod}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900/90 border border-orange-500/30 backdrop-blur-md shadow-lg">
                <div className="text-[11px] text-orange-400 font-mono uppercase tracking-wider font-bold">Academic Track</div>
                <div className="text-sm font-bold text-white">{personalInfo.degree}</div>
                <div className="text-xs text-stone-300 mt-0.5">Major: <span className="text-cyan-400 font-semibold">{personalInfo.major}</span></div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: IELTS & Communication (Col 5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 p-7 rounded-3xl bg-stone-900/80 border border-amber-500/30 hover:border-amber-400 backdrop-blur-xl shadow-2xl flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-stone-950 shadow-md">
                    <Globe className="w-5 h-5 font-bold" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">English Proficiency</h4>
                    <span className="text-xs font-mono text-amber-600 dark:text-amber-300 font-semibold">Global Communication</span>
                  </div>
                </div>
                <img src={ieltsLogo} alt="IELTS" className="h-7 object-contain" />
              </div>

              <div className="my-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between shadow-inner">
                <div>
                  <span className="text-xs font-mono text-amber-700 dark:text-amber-200 block font-semibold">Overall Band Score</span>
                  <span className="text-3xl font-black text-amber-500 drop-shadow-sm">
                    {personalInfo.english}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-500/15 px-3.5 py-1.5 rounded-full border border-amber-500/30 shadow-sm">
                  B2 Certified
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed relative z-10 font-light">
              Capable of reading technical engineering documentation, collaborating in multicultural teams, and writing clean, standardized documentation.
            </p>
          </motion.div>

          {/* Card 4: Career Objective & Internship Quest (Col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-7 p-7 rounded-3xl bg-stone-900/80 border border-cyan-500/30 hover:border-cyan-400 backdrop-blur-xl shadow-2xl flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-cyan-500 to-teal-400 text-stone-950 shadow-md">
                    <Target className="w-5 h-5 font-bold" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Career Goal & Internship</h4>
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-300 font-semibold">{careerObjective.lookingFor}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3 relative z-10">
                {careerObjective.reasons.map((reason, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-cyan-500/5 dark:bg-stone-950/70 border border-cyan-500/20 hover:border-cyan-500/40 flex items-start gap-2.5 text-xs text-stone-300 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-xs font-mono text-cyan-600 dark:text-cyan-300 flex items-center gap-2 pt-2 relative z-10 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping" />
              <span>Target: {careerObjective.goal}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
