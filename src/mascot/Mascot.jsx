import { motion } from 'framer-motion';

/**
 * Developer Mascot — SVG cartoon character
 * Friendly developer with laptop, purple hoodie, subtle personality
 */
export default function Mascot({ size = 320, className = '' }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{ display: 'inline-block' }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Developer mascot illustration"
        role="img"
      >
        {/* ── Body / Chair area ── */}
        {/* Chair / seat */}
        <ellipse cx="160" cy="272" rx="72" ry="14" fill="#E7E5E4" />

        {/* Legs */}
        <rect x="138" y="252" width="14" height="28" rx="7" fill="#57534E" />
        <rect x="168" y="252" width="14" height="28" rx="7" fill="#57534E" />

        {/* Hoodie body */}
        <path
          d="M100 190 Q100 240 110 258 Q130 275 160 276 Q190 275 210 258 Q220 240 220 190 Z"
          fill="#7C3AED"
        />

        {/* Hoodie front pocket */}
        <rect x="140" y="226" width="40" height="28" rx="8" fill="#6D28D9" />

        {/* Arms */}
        {/* Left arm */}
        <path d="M100 195 Q82 210 78 235 Q76 246 88 248 Q98 249 104 238 Q110 224 112 210" fill="#7C3AED" />
        {/* Right arm */}
        <path d="M220 195 Q238 210 242 235 Q244 246 232 248 Q222 249 216 238 Q210 224 208 210" fill="#7C3AED" />

        {/* Hands */}
        <ellipse cx="83" cy="252" rx="13" ry="11" fill="#FDE68A" />
        <ellipse cx="237" cy="252" rx="13" ry="11" fill="#FDE68A" />

        {/* Neck */}
        <rect x="148" y="168" width="24" height="28" rx="8" fill="#FDE68A" />

        {/* Head */}
        <ellipse cx="160" cy="148" rx="52" ry="50" fill="#FDE68A" />

        {/* Hair */}
        <path
          d="M108 135 Q108 90 160 88 Q212 90 212 135"
          fill="#3B2F1E"
        />
        {/* Hair tuft */}
        <path d="M150 88 Q155 72 160 76 Q165 72 170 88" fill="#3B2F1E" />

        {/* Eyes */}
        <ellipse cx="143" cy="148" rx="9" ry="10" fill="white" />
        <ellipse cx="177" cy="148" rx="9" ry="10" fill="white" />
        <circle cx="145" cy="149" r="5.5" fill="#1C1917" />
        <circle cx="179" cy="149" r="5.5" fill="#1C1917" />
        {/* Eye shine */}
        <circle cx="147" cy="147" r="2" fill="white" />
        <circle cx="181" cy="147" r="2" fill="white" />

        {/* Eyebrows — slight "focused" expression */}
        <path d="M134 136 Q143 131 152 136" stroke="#3B2F1E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M168 136 Q177 131 186 136" stroke="#3B2F1E" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Smile */}
        <path d="M148 163 Q160 172 172 163" stroke="#3B2F1E" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Cheek blush */}
        <ellipse cx="130" cy="160" rx="10" ry="7" fill="#FECACA" opacity="0.5" />
        <ellipse cx="190" cy="160" rx="10" ry="7" fill="#FECACA" opacity="0.5" />

        {/* Hoodie front strip */}
        <rect x="155" y="180" width="10" height="50" rx="5" fill="#6D28D9" />

        {/* Laptop base */}
        <rect x="72" y="252" width="176" height="12" rx="6" fill="#D6D3D1" />
        <rect x="78" y="218" width="164" height="40" rx="10" fill="#E7E5E4" />

        {/* Laptop screen */}
        <rect x="84" y="224" width="152" height="30" rx="6" fill="#1C1917" />

        {/* Code on screen */}
        <text x="94" y="237" fontFamily="monospace" fontSize="7" fill="#A78BFA">{'<'}</text>
        <text x="100" y="237" fontFamily="monospace" fontSize="7" fill="#34D399">App</text>
        <text x="116" y="237" fontFamily="monospace" fontSize="7" fill="#A78BFA">{'/'+'>'}</text>
        <rect x="92" y="241" width="30" height="3" rx="1.5" fill="#7C3AED" opacity="0.7" />
        <rect x="92" y="247" width="22" height="3" rx="1.5" fill="#06B6D4" opacity="0.7" />
        <rect x="92" y="241" width="30" height="3" rx="1.5" fill="#7C3AED" opacity="0.7" />
        {/* Cursor blink */}
        <rect x="114" y="247" width="2" height="5" rx="1" fill="#FCD34D" opacity="0.9" />

        {/* ── Doodle decorations ── */}
        {/* Star top-right */}
        <motion.g
          animate={{ rotate: [0, 15, -5, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{ originX: '268px', originY: '58px' }}
        >
          <text x="255" y="72" fontSize="24" fill="#FCD34D">★</text>
        </motion.g>

        {/* Small star top-left */}
        <motion.g
          animate={{ rotate: [0, -10, 5, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ originX: '52px', originY: '96px' }}
        >
          <text x="44" y="104" fontSize="16" fill="#A78BFA">✦</text>
        </motion.g>

        {/* Sparkle right side */}
        <motion.g
          animate={{ opacity: [0.6, 1, 0.6], scale: [0.9, 1, 0.9] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
        >
          <text x="268" y="160" fontSize="14" fill="#06B6D4">✧</text>
        </motion.g>

        {/* Arrow doodle pointing at laptop */}
        <path d="M54 210 Q46 228 60 240" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="4 3" />
        <polygon points="57,242 62,234 66,242" fill="#7C3AED" />

        {/* Speech bubble "let's build!" */}
        <motion.g
          animate={{ y: [0, -4, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        >
          <rect x="218" y="82" width="90" height="32" rx="12" fill="white" stroke="#E7E5E4" strokeWidth="1.5" />
          <polygon points="228,114 234,124 240,114" fill="white" stroke="#E7E5E4" strokeWidth="1.5" />
          <polygon points="229,113 234,122 240,113" fill="white" />
          <text x="228" y="102" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="10" fill="#7C3AED">let's build!</text>
        </motion.g>
      </svg>
    </motion.div>
  );
}
