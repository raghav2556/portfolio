import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionWrapper from '../shared/SectionWrapper';
import AnimatedTitle from '../shared/AnimatedTitle';

/* ── Single Skill Bar ──────────────────────────── */
const SkillBar = ({ skill, index }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <div ref={ref} style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          {skill.icon && (
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
              alt={skill.name}
              width="17" height="17"
              loading="lazy"
              style={{ objectFit: 'contain', flexShrink: 0 }}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          )}
          <span style={{ fontFamily: 'Sora', fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
            {skill.name}
          </span>
        </div>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-muted)' }}>
          {skill.level}%
        </span>
      </div>

      {/* Track */}
      <div style={{ height: '5px', borderRadius: '3px', background: 'var(--scar-mark)', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: inView ? `${skill.level}%` : '0%' }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.06 }}
          style={{
            height: '100%', borderRadius: '3px',
            background: 'linear-gradient(90deg, var(--cursed-purple), var(--aura-violet))',
          }}
        />
      </div>
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
          gap: '48px 56px',
        }}
      >
        {skills.map((cat, ci) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
          >
            {/* Category header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
              <div style={{ width: '4px', height: '18px', background: 'var(--aura-violet)', borderRadius: '2px', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px',
                color: 'var(--aura-violet)', textTransform: 'uppercase', letterSpacing: '0.16em',
              }}>
                {cat.category}
              </span>
            </div>

            {cat.items.map((skill, si) => (
              <SkillBar key={skill.name} skill={skill} index={si} />
            ))}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
