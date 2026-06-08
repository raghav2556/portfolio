import { useState, useEffect, useRef } from 'react';

/**
 * Animates a number from 0 to its target value.
 * @param {string|number} end   - target value (may include suffix like '+')
 * @param {boolean}       trigger - starts counting when true
 * @param {number}        duration - ms (default 1500)
 * @returns {string}
 */
const useCountUp = (end, trigger, duration = 1500) => {
  const [count, setCount] = useState('0');
  const raf = useRef(null);

  useEffect(() => {
    if (!trigger) return;

    const numStr  = String(end).replace(/[^0-9.]/g, '');
    const suffix  = String(end).replace(/[0-9.]/g, '');
    const target  = parseFloat(numStr);

    if (isNaN(target)) { setCount(String(end)); return; }

    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      setCount(`${Math.round(target * eased)}${suffix}`);
      if (progress < 1) raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [end, trigger, duration]);

  return count;
};

export default useCountUp;
