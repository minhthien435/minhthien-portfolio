import { motion } from 'framer-motion';
import robot3D from '../assets/robot-mascot-3d.png';

/**
 * 3D Developer Robot Mascot
 * Premium 3D claymation aesthetic robot character with glowing accents.
 */
export default function Mascot({ size = 340, className = '', compact = false }) {
  return (
    <motion.div
      className={className}
      animate={compact ? { y: [0, -6, 0] } : { y: [0, -12, 0] }}
      transition={{ duration: compact ? 4.5 : 3.8, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        display: 'inline-flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
      }}
      aria-hidden="true"
    >
      {/* Soft background radial glow */}
      <div
        style={{
          position: 'absolute',
          width: '75%',
          height: '75%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.18) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 75%)',
          filter: 'blur(24px)',
          zIndex: 0,
        }}
      />

      {/* 3D Robot Image */}
      <img
        src={robot3D}
        alt="Cute 3D Developer Robot"
        style={{
          width: size,
          height: 'auto',
          maxWidth: '100%',
          display: 'block',
          position: 'relative',
          zIndex: 1,
          filter: 'drop-shadow(0 16px 32px rgba(28, 25, 23, 0.12))',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Floating speech bubble badge */}
      {!compact && (
        <motion.div
          animate={{ y: [0, -5, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          style={{
            position: 'absolute',
            top: '4%',
            right: '-4%',
            zIndex: 2,
            background: 'var(--bg-white)',
            border: '1.5px solid var(--border-md)',
            borderRadius: 'var(--r-full)',
            padding: '0.4rem 0.9rem',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--violet)', fontFamily: "'Space Grotesk', sans-serif" }}>
            let's build! 🚀
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}
