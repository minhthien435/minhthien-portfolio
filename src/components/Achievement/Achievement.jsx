import { motion } from 'framer-motion';
import { Award, Sparkles, Trophy, ShieldAlert, HeartHandshake } from 'lucide-react';
import { achievement } from '../../data/portfolio';

export default function Achievement() {
  return (
    <section id="achievement" className="py-20 px-4 md:px-8 bg-stone-950 text-white relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-stone-900/90 border border-amber-500/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(245,158,11,0.1)] relative overflow-hidden"
        >
          {/* Ambient Amber Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            {/* Holographic Trophy Badge */}
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 p-[2px] shadow-[0_0_30px_rgba(251,191,36,0.3)] shrink-0 flex items-center justify-center">
              <div className="w-full h-full bg-stone-950 rounded-[22px] flex items-center justify-center">
                <Trophy className="w-9 h-9 text-amber-400 animate-pulse" />
              </div>
            </div>

            {/* Achievement Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {achievement.medal}
                </span>
                <span className="text-xs font-mono text-stone-400">
                  {achievement.organizer} // {achievement.date}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-black text-white mb-2">
                {achievement.event}
              </h3>

              <p className="text-stone-300 text-xs md:text-sm leading-relaxed font-light">
                {achievement.note}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
