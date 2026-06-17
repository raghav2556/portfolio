import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionWrapper from '../shared/SectionWrapper';
import AnimatedTitle from '../shared/AnimatedTitle';

/* ── Single Skill Item ─────────────────────────── */
const SkillBar = ({ skill }) => {
  const ref = useRef(null);
  useInView(ref, { once: true, margin: '-20px' });

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '18px',
      }}
    >
      {skill.icon && (
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
          alt={skill.name}
          width="18"
          height="18"
          loading="lazy"
          style={{ objectFit: 'contain', flexShrink: 0 }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      )}

      <span
        style={{
          fontFamily: 'Sora',
          fontWeight: 500,
          fontSize: '0.9rem',
          color: 'var(--text-primary)',
        }}
      >
        {skill.name}
      </span>
    </div>
  );
};

/* ── Skills ────────────────────────────────────── */
/** @param {{ skills: Array }} props */
const Skills = ({ skills }) => {
  return (
    <SectionWrapper id="skills" bgColor="var(--bg-shadow)">
      <AnimatedTitle text="SKILLS" />
      <div className="section-separator" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '32px',
        }}
      >
        {skills.map((cat, ci) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            whileHover={{ y: -4 }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '18px',
              padding: '24px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              height: '100%',
            }}
          >
            {/* Category Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  width: '4px',
                  height: '18px',
                  background: 'var(--aura-violet)',
                  borderRadius: '2px',
                  flexShrink: 0,
                }}
              />

              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11.5px',
                  color: 'var(--aura-violet)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                }}
              >
                {cat.category}
              </span>
            </div>

            {/* Skills List */}
            <div>
              {cat.items.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;