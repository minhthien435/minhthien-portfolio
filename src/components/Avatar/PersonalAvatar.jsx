import { motion } from 'framer-motion';
import minhlePhoto from '../../assets/minhle-photo.jpg';

export default function PersonalAvatar({ size = 320, className = '' }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateY(${x / 20}deg) rotateX(${-y / 20}deg) scale(1.03)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
  };

  return (
    <div
      className={`personal-avatar-wrapper ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Outer Glowing Breathing Ring */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: -10,
          borderRadius: 32,
          background: 'linear-gradient(135deg, var(--violet), var(--cyan), var(--yellow))',
          opacity: 0.7,
          filter: 'blur(18px)',
          animation: 'pulse-ring 4s ease-in-out infinite alternate',
          zIndex: 0,
        }}
      />

      {/* Main Glass Portrait Card */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          aspectRatio: '3/4',
          borderRadius: 26,
          overflow: 'hidden',
          background: 'var(--bg-white)',
          border: '2px solid var(--border-md)',
          boxShadow: 'var(--shadow-lg)',
          transition: 'transform 0.2s ease-out, box-shadow 0.3s ease',
          cursor: 'pointer',
        }}
      >
        {/* Original Portrait Photo with Full Night Background */}
        <img
          src={minhlePhoto}
          alt="Minh Le — Frontend Developer"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            display: 'block',
          }}
        />

        {/* Ambient Dark Gradient Bottom Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15,14,23,0.85) 0%, rgba(15,14,23,0.25) 45%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        

        {/* Bottom Overlay Label */}
        <div style={{
          position: 'absolute',
          bottom: '1.25rem',
          left: '1.25rem',
          right: '1.25rem',
          zIndex: 3,
          color: 'white',
        }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: '1.25rem',
            lineHeight: 1.2,
            textShadow: '0 2px 8px rgba(0,0,0,0.6)',
          }}>
            Minh Le
          </p>
          <p style={{
            fontSize: '0.8125rem',
            color: 'rgba(255,255,255,0.9)',
            fontWeight: 500,
            marginTop: '0.15rem',
            textShadow: '0 1px 4px rgba(0,0,0,0.5)',
          }}>
            Software Engineering Student · FPT University
          </p>
        </div>
      </motion.div>
    </div>
  );
}
