import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import GitHubIcon from '../icons/GitHubIcon';
import { personalInfo } from '../../data/portfolio';

const navLinks = [
  { label: 'About',    href: '#about'          },
  { label: 'Skills',   href: '#skills'         },
  { label: 'Projects', href: '#projects'       },
  { label: 'Certs',    href: '#certifications' },
  { label: 'Contact',  href: '#contact'        },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled ? 'rgba(250,250,248,0.90)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 var(--border)' : 'none',
      }}
    >
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
                  background: isActive ? 'var(--violet-light)' : 'transparent',
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--bg-cream)'; }}}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.background = 'transparent'; }}}
              >
                {link.label}
              </a>
            );
          })}

          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="btn btn-primary"
            style={{ marginLeft: '0.75rem', padding: '0.5rem 1.1rem', fontSize: '0.875rem' }}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            onClick={e => e.stopPropagation()}
            style={{
              background: 'rgba(250,250,248,0.97)',
              backdropFilter: 'blur(16px)',
              borderTop: '1px solid var(--border)',
              padding: '0.75rem 1.5rem 1.25rem',
              display: 'flex', flexDirection: 'column', gap: '0.25rem',
            }}
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => scrollTo(e, link.href)}
                style={{
                  padding: '0.65rem 0.875rem',
                  borderRadius: 10,
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: active === link.href.replace('#','') ? 'var(--violet)' : 'var(--text)',
                  background: active === link.href.replace('#','') ? 'var(--violet-light)' : 'transparent',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '0.5rem', justifyContent: 'center' }}
            >
              <GitHubIcon size={16} /> GitHub
            </a>
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
  );
}
