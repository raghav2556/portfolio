import { motion } from 'framer-motion';

/**
 * Splits a title string into individual letters and animates each
 * upward when scrolled into view.
 * @param {{ text: string, className?: string }} props
 */
const AnimatedTitle = ({ text, className = '' }) => {
  const letters = text.split('');

  return (
    <h2
      className={`font-display ${className}`}
      style={{
        color: 'var(--silver-blade)',
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        lineHeight: 1,
        letterSpacing: '0.06em',
        display: 'flex',
        flexWrap: 'wrap',
      }}
      aria-label={text}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: i * 0.04, ease: 'easeOut' }}
          style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </h2>
  );
};

export default AnimatedTitle;
