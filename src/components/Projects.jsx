import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionWrapper from '../shared/SectionWrapper';
import AnimatedTitle from '../shared/AnimatedTitle';

const ALL_CATEGORIES = ['All', 'Web', 'Other'];

/* ── Project Card ──────────────────────────────── */
const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4, delay: index * 0.07 }}
    whileHover={{
      y: -8,
      boxShadow: '0 20px 60px rgba(109,40,217,0.22)',
      borderColor: 'rgba(139,63,200,0.55)',
    }}
    style={{
      background: 'var(--bg-shadow)',
      border: '1px solid rgba(93,45,158,0.25)',
      borderRadius: '10px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '380px',
      transition: 'border-color 0.3s',
    }}
  >
    {/* Thumbnail */}
    <div style={{ height: '195px', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
      {project.thumbnail ? (
        <>
          <img
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 55%, var(--bg-shadow) 100%)',
          }} />
        </>
      ) : (
        <div style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(135deg, var(--cursed-indigo), var(--cursed-purple))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span className="font-display" style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.12)', letterSpacing: '0.05em' }}>
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}
    </div>

    {/* Body */}
    <div style={{ padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
        <h3 style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: '1.05rem', color: 'var(--silver-blade)', lineHeight: 1.3 }}>
          {project.title}
        </h3>
        <span style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
          color: 'var(--aura-violet)', background: 'rgba(139,63,200,0.1)',
          padding: '2px 9px', borderRadius: '20px', whiteSpace: 'nowrap', flexShrink: 0,
        }}>
          {project.category}
        </span>
      </div>

      <p style={{
        fontFamily: 'Sora', fontWeight: 400,
        fontSize: '0.855rem', color: 'var(--text-muted)',
        lineHeight: 1.7, flex: 1,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
      }}>
        {project.description}
      </p>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        {project.tech.map((t) => (
          <span key={t} style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
            color: 'var(--mist-lavender)', background: 'rgba(45,26,94,0.5)',
            border: '1px solid rgba(93,45,158,0.4)',
            borderRadius: '4px', padding: '3px 9px',
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
        {project.githubUrl && (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ borderColor: 'var(--aura-violet)', color: 'var(--aura-violet)' }}
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              fontFamily: 'Sora', fontSize: '0.8rem', fontWeight: 500,
              color: 'var(--text-muted)', textDecoration: 'none',
              border: '1px solid rgba(139,63,200,0.35)', borderRadius: '6px',
              padding: '5px 12px', transition: 'all 0.2s',
            }}
          >
            <FiGithub size={13} /> Code
          </motion.a>
        )}
        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ borderColor: 'var(--aura-violet)', color: 'var(--aura-violet)' }}
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              fontFamily: 'Sora', fontSize: '0.8rem', fontWeight: 500,
              color: 'var(--text-muted)', textDecoration: 'none',
              border: '1px solid rgba(139,63,200,0.35)', borderRadius: '6px',
              padding: '5px 12px', transition: 'all 0.2s',
            }}
          >
            <FiExternalLink size={13} /> Live
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

/* ── Projects ──────────────────────────────────── */
/** @param {{ projects: Array }} props */
const Projects = ({ projects }) => {
  const [active, setActive] = useState('All');

  const filtered = projects.filter(
    (p) => active === 'All' || p.category === active
  );

  return (
    <SectionWrapper id="projects" bgColor="var(--bg-void)">
      <AnimatedTitle text="PROJECTS" />
      <div className="section-separator" />

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {ALL_CATEGORIES.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            style={{
              fontFamily: 'Sora', fontSize: '0.85rem', fontWeight: 500,
              padding: '7px 20px', borderRadius: '8px', cursor: 'pointer',
              border: active === cat ? 'none' : '1px solid var(--cursed-indigo)',
              background: active === cat ? 'var(--cursed-purple)' : 'transparent',
              color: active === cat ? 'var(--text-primary)' : 'var(--text-muted)',
              transition: 'all 0.2s',
            }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '24px',
          }}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Projects;
