import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransition({ children }) {
  // Check if user was already scrolled down previously in this session
  const [isDone, setIsDone] = useState(() => {
    if (typeof window === 'undefined') return false;
    const savedY = Number(sessionStorage.getItem('portfolio-scroll-y') || 0);
    return savedY > 80 || window.scrollY > 80 || Boolean(window.location.hash);
  });
  const [curtainOpen, setCurtainOpen] = useState(false);

  useEffect(() => {
    const savedY = Number(sessionStorage.getItem('portfolio-scroll-y') || 0);
    const isScrolled = savedY > 80 || window.scrollY > 80 || Boolean(window.location.hash);

    // If user is scrolled down, skip curtain intro completely
    if (isScrolled) {
      setIsDone(true);
      return;
    }

    // Snappy initial display pause (600ms), then fast smooth split
    const openTimer = setTimeout(() => {
      setCurtainOpen(true);
    }, 600);

    // Cleanup from DOM (1.5s total)
    const doneTimer = setTimeout(() => {
      setIsDone(true);
    }, 1500);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  // Snappy high-end easing
  const snappyEase = [0.76, 0, 0.24, 1];

  return (
    <>
      <AnimatePresence>
        {!isDone && (
          <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden flex items-center justify-center">
            {/* Left Curtain Panel */}
            <motion.div
              initial={{ x: '0%' }}
              animate={{ x: curtainOpen ? '-102%' : '0%' }}
              transition={{ duration: 0.85, ease: snappyEase }}
              style={{ willChange: 'transform' }}
              className="absolute top-0 left-0 bottom-0 w-[50.5%] bg-stone-950 border-r border-violet-500/40 shadow-[20px_0_60px_rgba(0,0,0,0.95)]"
            />

            {/* Right Curtain Panel */}
            <motion.div
              initial={{ x: '0%' }}
              animate={{ x: curtainOpen ? '102%' : '0%' }}
              transition={{ duration: 0.85, ease: snappyEase }}
              style={{ willChange: 'transform' }}
              className="absolute top-0 right-0 bottom-0 w-[50.5%] bg-stone-950 border-l border-cyan-500/40 shadow-[-20px_0_60px_rgba(0,0,0,0.95)]"
            />

            {/* Center Typography: MY PORTFOLIO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{
                opacity: curtainOpen ? 0 : 1,
                scale: curtainOpen ? 1.08 : 1,
                filter: curtainOpen ? 'blur(8px)' : 'blur(0px)',
              }}
              transition={{
                opacity: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                filter: { duration: 0.5, ease: 'easeOut' },
              }}
              style={{ willChange: 'transform, opacity, filter' }}
              className="relative z-10 flex flex-col items-center justify-center text-center px-4 select-none"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: curtainOpen ? 0 : 0.8, y: 0 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-2.5 mb-2.5"
              >
                <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-cyan-400" />
                <span className="text-[11px] font-mono font-bold tracking-[0.3em] uppercase text-cyan-400">
                  WELCOME
                </span>
                <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-cyan-400" />
              </motion.div>

              {/* Title */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-stone-100 to-stone-400 drop-shadow-[0_0_35px_rgba(255,255,255,0.3)]">
                MY PORTFOLIO
              </h1>

              {/* Bottom Light Bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: curtainOpen ? 1.4 : 1, opacity: curtainOpen ? 0 : 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="mt-4 flex items-center gap-2.5"
              >
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-cyan-400 rounded-full" />
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.9)]" />
                <div className="w-12 h-[2px] bg-gradient-to-l from-transparent via-violet-500 to-cyan-400 rounded-full" />
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
