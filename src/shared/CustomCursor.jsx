import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Custom dual-element cursor: small dot + trailing ring.
 * Only activates on pointer:fine devices (desktop/laptop).
 */
const CustomCursor = () => {
  const [visible,   setVisible]   = useState(false);
  const [hovering,  setHovering]  = useState(false);
  const [supported, setSupported] = useState(false);

  const cx = useMotionValue(-200);
  const cy = useMotionValue(-200);

  const rx = useSpring(cx, { stiffness: 180, damping: 22 });
  const ry = useSpring(cy, { stiffness: 180, damping: 22 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;
    setSupported(true);

    const move = (e) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e) => {
      setHovering(
        e.target.closest('a, button, [role="button"], input, textarea, select, label') !== null
      );
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    document.documentElement.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      document.documentElement.style.cursor = '';
    };
  }, [cx, cy, visible]);

  if (!supported || !visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: cx,
          y: cy,
          translateX: '-50%',
          translateY: '-50%',
          width:  hovering ? '18px' : '8px',
          height: hovering ? '18px' : '8px',
          borderRadius: '50%',
          background: 'var(--aura-violet)',
          pointerEvents: 'none',
          zIndex: 10001,
          transition: 'width 0.2s, height 0.2s',
          mixBlendMode: 'difference',
        }}
      />
      {/* Ring */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: rx,
          y: ry,
          translateX: '-50%',
          translateY: '-50%',
          width:  hovering ? '26px' : '34px',
          height: hovering ? '26px' : '34px',
          borderRadius: '50%',
          border: '1.5px solid rgba(139,63,200,0.55)',
          pointerEvents: 'none',
          zIndex: 10000,
          transition: 'width 0.2s, height 0.2s',
        }}
      />
    </>
  );
};

export default CustomCursor;
