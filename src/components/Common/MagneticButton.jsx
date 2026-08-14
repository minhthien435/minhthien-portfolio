import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  onClick,
  ...props
}) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el) return;

    let xTo = gsap.quickTo(el, 'x', { duration: 0.8, ease: 'power3.out' });
    let yTo = gsap.quickTo(el, 'y', { duration: 0.8, ease: 'power3.out' });

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);

      xTo(relX * strength);
      yTo(relY * strength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <div
      ref={buttonRef}
      onClick={onClick}
      className={`inline-block cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
