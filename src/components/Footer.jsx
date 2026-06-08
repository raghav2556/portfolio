import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

/** @param {{ personal: Object }} props */
const Footer = ({ personal }) => {
  const year = new Date().getFullYear();

  const SOCIALS = [
    { Icon: FiGithub,   href: personal.github,              label: 'GitHub' },
    { Icon: FiLinkedin, href: personal.linkedin,            label: 'LinkedIn' },
    { Icon: SiLeetcode, href: personal.leetcode,            label: 'LeetCode' },
    { Icon: FiMail,     href: `mailto:${personal.email}`,   label: 'Email' },
  ];

  return (
    <footer style={{
      background: 'var(--bg-shadow)',
      borderTop: '1px solid var(--scar-mark)',
      padding: '44px 24px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="font-display"
          style={{ color: 'var(--silver-blade)', fontSize: '1.45rem', letterSpacing: '0.07em', marginBottom: '8px' }}
        >
          {personal.name.toUpperCase()}
        </p>

        <p style={{ fontFamily: 'Sora', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '22px' }}>
          Built with React &amp; passion — © {year} {personal.name}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '22px' }}>
          {SOCIALS.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              aria-label={label}
              whileHover={{ y: -3 }}
              style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--aura-violet)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
