import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionWrapper from '../shared/SectionWrapper';
import AnimatedTitle from '../shared/AnimatedTitle';
import useCountUp from '../hooks/useCountUp';

/* ── Stat Card ─────────────────────────────────── */
const StatCard = ({ value, label }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const count  = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      whileHover={{ borderColor: 'rgba(139,63,200,0.55)' }}
      style={{
        background: 'var(--bg-deep)',
        border: '1px solid rgba(93,45,158,0.25)',
        borderRadius: '12px',
        padding: '22px 16px',
        textAlign: 'center',
        transition: 'border-color 0.3s',
      }}
    >
      <p
        className="font-display"
        style={{
          fontSize: '3.2rem',
          color: 'var(--aura-violet)',
          lineHeight: 1,
          marginBottom: '8px',
          textShadow: inView ? '0 0 24px rgba(139,63,200,0.35)' : 'none',
          transition: 'text-shadow 0.4s',
        }}
      >
        {count}
      </p>
      <p
        style={{
          fontFamily: 'Sora', fontSize: '11px',
          color: 'var(--text-muted)',
          textTransform: 'uppercase', letterSpacing: '0.12em',
        }}
      >
        {label}
      </p>
    </motion.div>
  );
};

/* ── About ─────────────────────────────────────── */
/** @param {{ personal: Object, stats: Array }} props */
const About = ({ personal, stats }) => {
  return (
    <SectionWrapper id="about" bgColor="var(--bg-void)">
      <AnimatedTitle text="ABOUT ME" />
      <div className="section-separator" />

      <div className="about-grid">

        {/* Right — Text + Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '22px', justifyContent: 'center' }}
        >
          <p
            style={{
              fontFamily: 'Sora', fontWeight: 300,
              fontSize: '1rem', color: 'var(--text-primary)',
              lineHeight: 1.9,
            }}
          >
            {personal.bio}
          </p>

          <blockquote
            style={{
              borderLeft: '4px solid var(--aura-violet)',
              paddingLeft: '20px',
              fontFamily: 'Sora',
              fontStyle: 'italic',
              fontSize: '1.08rem',
              color: 'var(--text-primary)',
              lineHeight: 1.7,
            }}
          >
            {personal.pullQuote}
          </blockquote>

          {/* Stats row */}
          <div className="stats-grid">
            {stats.map((s, i) => (
              <StatCard key={i} value={s.value} label={s.label} />
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
