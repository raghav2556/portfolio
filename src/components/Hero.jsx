import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiChevronDown } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

/** @param {{ personal: Object }} props */
const Hero = ({ personal }) => {
  const heroRef   = useRef(null);

  const nameLetters = personal.name.split('');

  return (
      <section
      ref={heroRef}
      id="hero"
      className="noise-overlay"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: 'var(--bg-void)' }}
    >

      {/* Content */}
      <div
        className="container-custom"
        style={{ position: 'relative', zIndex: 2, paddingTop: '110px', paddingBottom: '80px', width: '100%' }}
      >
        <div className="hero-grid">

          {/* ── Left: Text ─────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Overline */}
            <motion.p
              className="font-code"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ color: 'var(--text-muted)', fontSize: '13px' }}
            >
              &lt; Crafted in the Dark /&gt;
            </motion.p>

            {/* Name — letter by letter */}
            <div
              className="font-display"
              aria-label={personal.name}
              style={{
                fontSize: 'clamp(3.8rem, 9vw, 8.5rem)',
                color: 'var(--text-primary)',
                textShadow: '0 0 80px rgba(109,40,217,0.12)',
                lineHeight: 1,
                letterSpacing: '0.02em',
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              <motion.h1
 initial={{opacity:0,y:40}}
 animate={{opacity:1,y:0}}
 transition={{duration:0.8}}
>
  {personal.name}
</motion.h1>
            </div>

            {/* Role */}
            <motion.p
              className="cursor-blink"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              style={{
                fontFamily: 'Sora', fontWeight: 500,
                fontSize: 'clamp(0.95rem, 2.2vw, 1.3rem)',
                color: 'var(--aura-violet)',
              }}
            >
              {personal.title}
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              style={{
                fontFamily: 'Sora', fontWeight: 300,
                fontSize: '0.97rem', color: 'var(--text-muted)',
                lineHeight: 1.85, maxWidth: '480px',
              }}
            >
              {personal.heroDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.5 }}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '4px' }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link to="projects" smooth="easeInOutQuart" duration={800} offset={-80} className="btn-primary" style={{ cursor: 'pointer' }}>
                  View My Work
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <a href="/resume.pdf" download className="btn-secondary">
                  <FiDownload size={15} /> Download Resume
                </a>
              </motion.div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              style={{ display: 'flex', gap: '22px', marginTop: '4px' }}
            >
              {[
                { Icon: FiGithub,   href: personal.github,              label: 'GitHub' },
                { Icon: FiLinkedin, href: personal.linkedin,            label: 'LinkedIn' },
                { Icon: SiLeetcode, href: personal.leetcode,            label: 'LeetCode' },
                { Icon: FiMail,     href: `mailto:${personal.email}`,   label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  whileHover={{ y: -3, color: 'var(--aura-violet)' }}
                  style={{ color: 'var(--text-muted)', transition: 'color 0.2s', textDecoration: 'none', display: 'flex' }}
                >
                  <Icon size={19} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Profile Image ────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.85, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{ position: 'relative', width: 'min(340px, 82vw)', aspectRatio: '4/5' }}>
              {/* Glow */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute', inset: '-24px',
                  background: 'radial-gradient(ellipse at center, rgba(109,40,217,0.28), transparent 70%)',
                  filter: 'blur(40px)', borderRadius: '50%', zIndex: 0,
                }}
              />
              <img
                src={personal.photo}
                alt={`${personal.name} — profile photo`}
                className="clip-polygon"
                loading="eager"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center top',
                  position: 'relative', zIndex: 1,
                  boxShadow: '0 0 60px rgba(109,40,217,0.22)',
                  display: 'block',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        to="about"
        smooth="easeInOutQuart"
        duration={800}
        offset={-80}
        aria-label="Scroll to About section"
        style={{
          position: 'absolute', bottom: '28px', left: '50%',
          transform: 'translateX(-50%)', zIndex: 2,
          cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          textDecoration: 'none',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'var(--text-muted)' }}
        >
          <FiChevronDown size={20} />
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
