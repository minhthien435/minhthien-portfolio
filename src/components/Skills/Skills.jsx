import { motion } from 'framer-motion';
import { Code2, Wrench, Zap } from 'lucide-react';
import { skills } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const reveal = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const tagVariants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

const groups = [
  {
    key: 'frontend',
    label: 'Frontend',
    icon: <Code2 size={20} />,
    iconBg: 'var(--violet-light)',
    iconColor: 'var(--violet)',
    borderColor: 'var(--violet-mid)',
    description: 'Technologies I build interfaces with',
  },
  {
    key: 'tools',
    label: 'Tools & Workflow',
    icon: <Wrench size={20} />,
    iconBg: 'var(--cyan-light)',
    iconColor: '#0E7490',
    borderColor: '#A5F3FC',
    description: 'Tools I use in my development workflow',
  },
  {
    key: 'learning',
    label: 'Currently Learning',
    icon: <Zap size={20} />,
    iconBg: 'var(--yellow-light)',
    iconColor: '#92400E',
    borderColor: '#FDE68A',
    description: "Technologies I'm actively picking up",
  },
];

export default function Skills() {
  const reduced = useReducedMotion();

  return (
    <section id="skills" aria-label="Technical Skills" style={{ background: 'var(--bg)' }}>
      <div className="divider" />
      <div className="container section-gap">
        {/* Header */}
        <motion.div
          variants={reveal}
          initial={reduced ? false : 'hidden'}
          whileInView={reduced ? false : 'visible'}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem' }}
        >
          <p className="section-eyebrow">What I Work With</p>
          <h2 className="headline" style={{ marginTop: '0.5rem' }}>Skills</h2>
          <p style={{ color: 'var(--text-2)', marginTop: '0.5rem', maxWidth: 480, fontSize: '1rem' }}>
            Technologies I use to build web applications — organized by what I know and what I'm learning.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {groups.map((group, gi) => {
            const items = skills[group.key];
            const isLearning = group.key === 'learning';

            return (
              <motion.div
                key={group.key}
                variants={reveal}
                initial={reduced ? false : 'hidden'}
                whileInView={reduced ? false : 'visible'}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: gi * 0.1 }}
                style={{
                  background: 'var(--bg-white)',
                  border: `1.5px solid ${group.borderColor}`,
                  borderRadius: 'var(--r-xl)',
                  padding: '1.75rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Learning badge */}
                {isLearning && (
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    style={{
                      position: 'absolute', top: '1.25rem', right: '1.25rem',
                      background: 'var(--yellow)',
                      border: '1.5px solid #FDE68A',
                      borderRadius: 'var(--r-full)',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.72rem', fontWeight: 700,
                      color: '#78350F',
                      display: 'flex', alignItems: 'center', gap: '0.3rem',
                    }}
                  >
                    <Zap size={11} /> In Progress
                  </motion.div>
                )}

                {/* Group header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: group.iconBg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: group.iconColor,
                    flexShrink: 0,
                  }}>
                    {group.icon}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>
                      {group.label}
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', marginTop: '0.1rem' }}>
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <motion.div
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.05 } },
                    hidden: {},
                  }}
                  initial={reduced ? false : 'hidden'}
                  whileInView={reduced ? false : 'visible'}
                  viewport={{ once: true }}
                >
                  {items.map((skill) => {
                    const color = skill.color || 'gray';
                    return (
                      <motion.span
                        key={skill.name}
                        variants={tagVariants}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className={`tag tag-${color} skill-tag`}
                        style={{ fontSize: '0.875rem', padding: '0.4rem 0.9rem' }}
                      >
                        {isLearning && <span style={{ opacity: 0.7 }}>🌱</span>}
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <p style={{ textAlign: 'center', color: 'var(--text-3)', fontSize: '0.8125rem', marginTop: '1.75rem', fontStyle: 'italic' }}>
          No fake progress bars — skills grow through consistent practice and real projects.
        </p>
      </div>
    </section>
  );
}
