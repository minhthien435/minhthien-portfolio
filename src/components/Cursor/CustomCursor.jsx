import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring-smoothed ring position
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 22, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 22, mass: 0.5 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const checkHover = (e) => {
      const el = e.target;
      const isInteractive =
        el.closest('a, button, [role="button"], input, select, textarea, [tabindex]') !== null ||
        el.closest('.project-card, .skill-tag') !== null;
      setHovered(isInteractive);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', checkHover);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
    };
  }, [mouseX, mouseY, visible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Dot — follows cursor precisely */}
      <motion.div
        className="custom-cursor-dot"
        style={{ x: mouseX, y: mouseY, opacity: visible ? 1 : 0 }}
        animate={{ scale: hovered ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
      />
      {/* Ring — follows with spring lag */}
      <motion.div
        className={`custom-cursor-ring ${hovered ? 'hovered' : ''}`}
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
