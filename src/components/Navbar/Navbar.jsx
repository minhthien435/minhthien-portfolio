import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUp, Sun, Moon, FileText } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { personalInfo } from '../../data/portfolio';
import { useTheme } from '../../hooks/useTheme';

const navLinks = [
  { label: 'About',    href: '#about'          },
  { label: 'Skills',   href: '#skills'         },
  { label: 'Projects', href: '#projects'       },
  { label: 'Certs',    href: '#certifications' },
  { label: 'Contact',  href: '#contact'        },
];

export default function Navbar({ onOpenCv }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('');
  const [showTop,  setShowTop]    = useState(false);
  const { isDark, toggleTheme }   = useTheme();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      setShowTop(window.scrollY > 600);
      const ids = navLinks.map(l => l.href.replace('#', ''));
      let cur = '';
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuOpen]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled ? 'var(--bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 var(--border)' : 'none',
      }}
    >
      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />

      <nav
        className="container"
        style={{
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.625rem' }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 38, height: 38,
              borderRadius: 10,
              background: 'var(--violet)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: '0.875rem',
              color: 'white',
              boxShadow: '0 4px 12px rgba(124,58,237,0.3)',
            }}
          >
            ML
          </motion.div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'var(--text)', letterSpacing: '-0.02em' }}>
            Minh Le
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.125rem' }} className="desktop-nav">
          {navLinks.map(link => {
            const isActive = active === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={e => scrollTo(e, link.href)}
                style={{
                  position: 'relative',
                  padding: '0.4rem 0.875rem',
                  borderRadius: 'var(--r-full)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: isActive ? 'var(--violet)' : 'var(--text-2)',
                  transition: 'color 0.2s',
                  zIndex: 1,
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--text)'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-2)'; }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'var(--violet-light)',
                      border: '1.5px solid var(--violet-mid)',
                      borderRadius: 'var(--r-full)',
                      zIndex: -1,
                    }}
                  />
                )}
                {link.label}
              </a>
            );
          })}

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9, rotate: 15 }}
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              marginLeft: '0.5rem',
              width: 36, height: 36, borderRadius: 10,
              background: isDark ? 'var(--violet-light)' : 'var(--bg-cream)',
              border: '1.5px solid var(--border-md)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: isDark ? 'var(--violet)' : 'var(--text-2)',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            <motion.div
              key={isDark ? 'moon' : 'sun'}
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.div>
          </motion.button>

          {/* CV Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenCv}
            className="btn btn-outline"
            style={{ marginLeft: '0.5rem', padding: '0.45rem 0.95rem', fontSize: '0.85rem', position: 'relative' }}
          >
            <FileText size={15} />
            CV
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: 'var(--violet)',
              boxShadow: '0 0 8px var(--violet)',
              display: 'inline-block',
            }} />
          </motion.button>

          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="btn btn-primary"
            style={{ marginLeft: '0.35rem', padding: '0.5rem 1.1rem', fontSize: '0.875rem' }}
          >
            <GitHubIcon size={15} />
            GitHub
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="hamburger-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={e => { e.stopPropagation(); setMenuOpen(v => !v); }}
          style={{
            display: 'none',
            background: 'var(--bg-cream)',
            border: '1.5px solid var(--border)',
            borderRadius: 10, padding: '0.4rem',
            cursor: 'pointer', color: 'var(--text)',
          }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </nav>

      {/* Mobile menu — full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: 'var(--bg)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Menu header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid var(--border)',
            }}>
              {/* Logo in menu */}
              <a
                href="#"
                onClick={e => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.625rem' }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'var(--violet)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: '0.875rem', color: 'white',
                }}>
                  ML
                </div>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'var(--text)', letterSpacing: '-0.02em' }}>
                  Minh Le
                </span>
              </a>
              {/* Close button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                style={{
                  background: 'var(--bg-cream)', border: '1.5px solid var(--border)',
                  borderRadius: 10, padding: '0.4rem',
                  cursor: 'pointer', color: 'var(--text)',
                  display: 'flex', alignItems: 'center',
                }}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Nav links — centered, staggered */}
            <nav style={{
              flex: 1, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '0.25rem',
            }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={e => scrollTo(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.12 + i * 0.06,
                  }}
                  whileHover={{ x: 6 }}
                  style={{
                    padding: '0.75rem 2rem',
                    borderRadius: 12,
                    fontSize: '1.5rem',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    textDecoration: 'none',
                    color: active === link.href.replace('#', '') ? 'var(--violet)' : 'var(--text)',
                    background: active === link.href.replace('#', '') ? 'var(--violet-light)' : 'transparent',
                    width: '100%',
                    maxWidth: 280,
                    textAlign: 'center',
                    transition: 'background 0.2s',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.12 + navLinks.length * 0.06 }}
              style={{
                padding: '1.25rem 1.5rem 2rem',
                borderTop: '1px solid var(--border)',
                display: 'flex', flexDirection: 'column', gap: '0.75rem',
              }}
            >
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                style={{
                  padding: '0.75rem 1rem', borderRadius: 12,
                  border: '1.5px solid var(--border)',
                  background: 'var(--bg-cream)',
                  color: 'var(--text)', fontSize: '0.9375rem', fontWeight: 500,
                  cursor: 'pointer', display: 'flex', alignItems: 'center',
                  gap: '0.5rem', justifyContent: 'center',
                }}
              >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
              {/* CV Button */}
              <button
                onClick={() => { setMenuOpen(false); onOpenCv(); }}
                className="btn btn-outline"
                style={{ justifyContent: 'center' }}
              >
                <FileText size={16} /> View CV
              </button>
              {/* GitHub CTA */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ justifyContent: 'center' }}
              >
                <GitHubIcon size={16} /> GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      <style>{`
        @media (max-width: 700px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </motion.header>

    {/* Back to top - Positioned fixed to bottom right of viewport */}
    <motion.button
      className={`back-to-top ${showTop ? 'visible' : ''}`}
      aria-label="Back to top"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={18} />
    </motion.button>
    </>
  );
}
