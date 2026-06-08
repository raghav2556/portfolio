import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../shared/SectionWrapper';
import AnimatedTitle from '../shared/AnimatedTitle';

/* ── Responsive hook ───────────────────────────── */
const useIsMobile = () => {
  const [mobile, setMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const h = () => setMobile(window.innerWidth < 768);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return mobile;
};

/* ── Card Content ──────────────────────────────── */
const CardContent = ({ entry, align = 'left' }) => (
  <div style={{ textAlign: align === 'right' ? 'right' : 'left' }}>
    <p style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: '1rem', color: 'var(--silver-blade)', marginBottom: '6px' }}>
      {entry.institution}
    </p>
    <p style={{ fontFamily: 'Sora', fontWeight: 400, fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
      {entry.degree}{entry.field ? ` in ${entry.field}` : ''}
    </p>
    <div style={{
      display: 'flex', gap: '8px', flexWrap: 'wrap',
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      alignItems: 'center',
    }}>
      <span style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: '12px',
        color: 'var(--aura-violet)', background: 'rgba(139,63,200,0.1)',
        padding: '2px 10px', borderRadius: '4px',
      }}>
        {entry.years}
      </span>
      {entry.grade && (
        <span style={{ fontFamily: 'Sora', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          {entry.grade}
        </span>
      )}
    </div>
  </div>
);

/* ── Entry Row ─────────────────────────────────── */
const TimelineEntry = ({ entry, index, isMobile }) => {
  // Even → card on left (desktop) | Odd → card on right (desktop)
  // Mobile → all cards on right
  const showLeft  = !isMobile && index % 2 === 0;
  const showRight = isMobile  || index % 2 !== 0;

  const cardStyle = {
    background: 'var(--bg-void)',
    border: '1px solid rgba(93,45,158,0.25)',
    borderRadius: '10px',
    padding: '20px 22px',
    transition: 'border-color 0.3s',
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '44px 1fr' : '1fr 56px 1fr',
        alignItems: 'start',
        marginBottom: '28px',
      }}
    >
      {/* Left slot (desktop only) */}
      {!isMobile && (
        <div style={{ paddingRight: '20px', paddingTop: '10px' }}>
          {showLeft && (
            <motion.div
              whileHover={{ borderColor: 'rgba(139,63,200,0.55)' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              style={cardStyle}
            >
              <CardContent entry={entry} align="right" />
            </motion.div>
          )}
        </div>
      )}

      {/* Spine + Node */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          animate={{
            boxShadow: [
              '0 0 0px rgba(139,63,200,0)',
              '0 0 14px rgba(139,63,200,0.75)',
              '0 0 0px rgba(139,63,200,0)',
            ],
          }}
          transition={{ duration: 2.2, repeat: Infinity }}
          style={{
            width: '13px', height: '13px',
            borderRadius: '50%',
            border: '2px solid var(--aura-violet)',
            background: 'var(--bg-shadow)',
            flexShrink: 0,
            marginTop: '10px',
          }}
        />
      </div>

      {/* Right slot */}
      <div style={{ paddingLeft: isMobile ? '14px' : '20px', paddingTop: '10px' }}>
        {showRight && (
          <motion.div
            whileHover={{ borderColor: 'rgba(139,63,200,0.55)' }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            style={cardStyle}
          >
            <CardContent entry={entry} align="left" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

/* ── Education ─────────────────────────────────── */
/** @param {{ education: Array }} props */
const Education = ({ education }) => {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id="education" bgColor="var(--bg-shadow)">
      <AnimatedTitle text="EDUCATION" />
      <div className="section-separator" />

      <div style={{ position: 'relative', marginTop: '40px' }}>
        {/* Spine line */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: isMobile ? '20px' : '50%',
            top: 0, bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, var(--cursed-indigo), var(--cursed-purple))',
            transform: isMobile ? 'none' : 'translateX(-50%)',
          }}
        />

        {education.map((entry, i) => (
          <TimelineEntry key={i} entry={entry} index={i} isMobile={isMobile} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
