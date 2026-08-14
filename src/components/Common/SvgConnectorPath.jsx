import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SvgConnectorPath({ height = 400, className = '' }) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const dot = dotRef.current;
    const svg = svgRef.current;
    if (!path || !svg) return;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    const trigger = ScrollTrigger.create({
      trigger: svg,
      start: 'top 85%',
      end: 'bottom 20%',
      scrub: 1.2,
      onUpdate: (self) => {
        const progress = self.progress;
        const drawLength = pathLength * (1 - progress);
        path.style.strokeDashoffset = `${drawLength}`;

        if (dot) {
          const point = path.getPointAtLength(progress * pathLength);
          dot.setAttribute('cx', point.x);
          dot.setAttribute('cy', point.y);
          dot.style.opacity = progress > 0.02 && progress < 0.98 ? '1' : '0';
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div className={`relative w-full overflow-visible pointer-events-none ${className}`}>
      <svg
        ref={svgRef}
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto opacity-70 dark:opacity-90"
        style={{ minHeight: `${height}px` }}
      >
        <defs>
          <linearGradient id="cyberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background track path */}
        <path
          d="M 100 20 C 300 20, 350 200, 600 200 C 850 200, 900 380, 1100 380"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          className="text-stone-300 dark:text-stone-800"
        />

        {/* Animated draw path */}
        <path
          ref={pathRef}
          d="M 100 20 C 300 20, 350 200, 600 200 C 850 200, 900 380, 1100 380"
          stroke="url(#cyberGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Glowing Head Dot */}
        <circle
          ref={dotRef}
          cx="100"
          cy="20"
          r="6"
          fill="#06B6D4"
          filter="url(#glow)"
          className="transition-opacity duration-300"
          style={{ opacity: 0 }}
        />
      </svg>
    </div>
  );
}
