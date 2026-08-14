import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { certifications } from '../../data/portfolio';

const certThemes = [
  {
    gradient: 'from-violet-500 via-purple-500 to-indigo-600',
    border: 'border-violet-500/40 hover:border-violet-400',
    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    iconColor: 'text-violet-400',
    glow: 'from-violet-600/20',
  },
  {
    gradient: 'from-cyan-500 via-teal-500 to-emerald-600',
    border: 'border-cyan-500/40 hover:border-cyan-400',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    iconColor: 'text-cyan-400',
    glow: 'from-cyan-600/20',
  },
  {
    gradient: 'from-amber-400 via-yellow-500 to-orange-600',
    border: 'border-amber-500/40 hover:border-amber-400',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    iconColor: 'text-amber-400',
    glow: 'from-amber-600/20',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 md:px-8 bg-stone-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-violet-600/10 via-cyan-500/10 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-amber-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-3 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400">
              Certifications
            </span>
          </h2>
          <p className="text-stone-400 text-sm md:text-base max-w-2xl leading-relaxed font-light">
            Online courses and specializations completed through Coursera.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const theme = certThemes[index % certThemes.length];

            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`p-8 rounded-3xl bg-stone-900/80 border ${theme.border} backdrop-blur-xl flex flex-col justify-between group shadow-xl transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${theme.glow} to-transparent rounded-full blur-2xl group-hover:opacity-100 transition-opacity`} />

                <div>
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className={`p-3 rounded-2xl bg-stone-950 border border-white/10 ${theme.iconColor} shadow-md`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${theme.badge} shadow-sm`}>
                      {cert.completed}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-bold text-stone-400 mb-1.5 relative z-10">{cert.institution}</div>
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors relative z-10">
                    {cert.name}
                  </h3>
                </div>

                <div className="pt-6 border-t border-stone-800/80 flex items-center justify-between relative z-10">
                  <span className="text-xs font-mono text-stone-400">Platform: <strong className="text-stone-200">{cert.platform}</strong></span>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
