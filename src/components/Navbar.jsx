import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import useNavScroll from '../hooks/useNavScroll';

const NAV_LINKS = [
  { label: 'About',        to: 'about' },
  { label: 'Education',    to: 'education' },
  { label: 'Projects',     to: 'projects' },
  { label: 'Skills',       to: 'skills' },
  { label: 'Achievements', to: 'achievements' },
  { label: 'Activities',   to: 'activities' },
  { label: 'Contact',      to: 'contact' },
];

const SCROLL_PROPS = {
  smooth: 'easeInOutQuart',
  duration: 800,
  offset: -80,
  spy: true,
  activeClass: 'nav-active',
};

/** @param {{ personal: { initials: string } }} props */
const Navbar = ({ personal }) => {
  const scrolled  = useNavScroll(80);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* ── Main Bar ─────────────────────────────── */}
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
          background:     scrolled ? 'rgba(22,14,40,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)'           : 'none',
          borderBottom:   scrolled ? '1px solid rgba(93,45,158,0.3)' : '1px solid transparent',
        }}
      >
        <div
          className="container-custom"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px' }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ boxShadow: '0 0 14px rgba(139,63,200,0.55)' }}
            style={{
              width: '36px', height: '36px',
              border: '1.5px solid var(--aura-violet)',
              borderRadius: '6px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', flexShrink: 0,
              transition: 'box-shadow 0.2s',
            }}
          >
            <span className="font-display" style={{ color: 'var(--aura-violet)', fontSize: '14px', letterSpacing: '0.04em' }}>
              {personal.initials}
            </span>
          </motion.div>

          {/* Desktop links */}
          <nav className="hidden md:flex" style={{ gap: '28px', alignItems: 'center' }} aria-label="Primary navigation">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                {...SCROLL_PROPS}
                style={{
                  fontFamily: 'Sora', fontSize: '13.5px', fontWeight: 400,
                  color: 'var(--text-muted)', textDecoration: 'none', cursor: 'pointer',
                  transition: 'color 0.2s', position: 'relative', paddingBottom: '2px',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.classList.contains('nav-active'))
                    e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', padding: '4px', display: 'flex' }}
          >
            <FiMenu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Overlay ───────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: 'var(--bg-deep)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
            }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              style={{
                position: 'absolute', top: '18px', right: '24px',
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--text-primary)', padding: '8px', display: 'flex',
              }}
            >
              <FiX size={24} />
            </button>

            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }} aria-label="Mobile navigation">
              {NAV_LINKS.map(({ label, to }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.35, ease: 'easeOut' }}
                >
                  <Link
                    to={to}
                    {...SCROLL_PROPS}
                    onClick={() => setOpen(false)}
                    style={{
                      fontFamily: 'Sora', fontSize: '1.5rem', fontWeight: 500,
                      color: 'var(--text-primary)', textDecoration: 'none',
                      cursor: 'pointer', transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--aura-violet)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
