import { motion } from 'framer-motion';
import SectionWrapper from '../shared/SectionWrapper';
import AnimatedTitle from '../shared/AnimatedTitle';

/* ── Activity Card ─────────────────────────────── */
const ActivityCard = ({ activity, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ borderLeftColor: 'var(--aura-violet)' }}
    style={{
      display: 'flex',
      background: 'var(--bg-void)',
      borderLeft: '4px solid var(--cursed-purple)',
      borderRadius: '0 10px 10px 0',
      padding: '22px 24px',
      gap: '20px',
      alignItems: 'flex-start',
      transition: 'border-left-color 0.3s',
    }}
  >
    {/* Left info */}
    <div style={{ minWidth: '170px', flexShrink: 0 }}>
      <p style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: '0.95rem', color: 'var(--silver-blade)', marginBottom: '5px', lineHeight: 1.3 }}>
        {activity.org}
      </p>
      <p style={{ fontFamily: 'Sora', fontWeight: 400, fontSize: '0.83rem', color: 'var(--aura-violet)', marginBottom: '5px' }}>
        {activity.role}
      </p>
      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--text-muted)' }}>
        {activity.period}
      </p>
    </div>

    {/* Divider */}
    <div style={{ width: '1px', background: 'rgba(93,45,158,0.3)', alignSelf: 'stretch', flexShrink: 0 }} />

    {/* Description */}
    <p style={{ fontFamily: 'Sora', fontWeight: 300, fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
      {activity.description}
    </p>
  </motion.div>
);

/* ── Activities ────────────────────────────────── */
/** @param {{ activities: Array }} props */
const Activities = ({ activities }) => {
  return (
    <SectionWrapper id="activities" bgColor="var(--bg-shadow)">
      <AnimatedTitle text="ACTIVITIES" />
      <div className="section-separator" />

      <p style={{
        fontFamily: 'Sora', fontStyle: 'italic', fontSize: '0.98rem',
        color: 'var(--text-muted)', marginTop: '-28px', marginBottom: '40px',
      }}>
        Beyond the Code
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {activities.map((a, i) => (
          <ActivityCard key={i} activity={a} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Activities;
