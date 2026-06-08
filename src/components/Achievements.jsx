import { motion } from 'framer-motion';
import { FiAward, FiBook, FiZap } from 'react-icons/fi';
import SectionWrapper from '../shared/SectionWrapper';
import AnimatedTitle from '../shared/AnimatedTitle';

const ICON_MAP = { award: FiAward, book: FiBook, zap: FiZap };

/* ── Achievement Card ──────────────────────────── */
const AchievementCard = ({ achievement, index }) => {
  const Icon = ICON_MAP[achievement.icon] || FiAward;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 14px 48px rgba(109,40,217,0.18)' }}
      style={{
        background: 'var(--bg-shadow)',
        borderTop: '3px solid var(--aura-violet)',
        borderRadius: '0 0 10px 10px',
        padding: '26px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transition: 'box-shadow 0.3s',
      }}
    >
      <Icon size={26} color="var(--aura-violet)" />

      <h3 style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: '0.98rem', color: 'var(--silver-blade)', lineHeight: 1.4 }}>
        {achievement.title}
      </h3>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Sora', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          {achievement.issuer}
        </span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--mist-lavender)' }}>
          {achievement.date}
        </span>
      </div>

      <div style={{ height: '1px', background: 'rgba(93,45,158,0.2)' }} />

      <p style={{ fontFamily: 'Sora', fontWeight: 300, fontSize: '0.855rem', color: 'var(--text-muted)', lineHeight: 1.75, flex: 1 }}>
        {achievement.description}
      </p>

      {achievement.certUrl && (
        <a
          href={achievement.certUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'Sora', fontSize: '0.83rem',
            color: 'var(--aura-violet)', textDecoration: 'none',
            marginTop: 'auto',
            display: 'inline-flex', alignItems: 'center', gap: '4px',
            transition: 'text-decoration 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
          onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}
        >
          {achievement.icon === "zap"
  ? "View Profile →"
  : "View Certificate →"}
        </a>
      )}
    </motion.div>
  );
};

/* ── Achievements ──────────────────────────────── */
/** @param {{ achievements: Array }} props */
const Achievements = ({ achievements }) => {
  return (
    <SectionWrapper id="achievements" bgColor="var(--bg-void)">
      <AnimatedTitle text="ACHIEVEMENTS" />
      <div className="section-separator" />

      <p style={{
        fontFamily: 'Sora', fontStyle: 'italic', fontSize: '0.98rem',
        color: 'var(--text-muted)', marginTop: '-28px', marginBottom: '40px',
      }}>
        Victories forged in silence.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
        gap: '24px',
      }}>
        {achievements.map((a, i) => (
          <AchievementCard key={i} achievement={a} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
