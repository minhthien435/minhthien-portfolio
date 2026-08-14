import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Read saved scroll position immediately
    const savedY = Number(sessionStorage.getItem('portfolio-scroll-y') || 0);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Immediately sync position if already scrolled down
    if (savedY > 80) {
      window.scrollTo(0, savedY);
      lenis.scrollTo(savedY, { immediate: true });
    }

    // Sync Lenis scroll with GSAP ScrollTrigger and track scroll position
    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      sessionStorage.setItem('portfolio-scroll-y', Math.round(e.scroll || window.scrollY));
    });

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  return <div className="smooth-scroll-wrapper">{children}</div>;
}
