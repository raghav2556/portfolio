import { useState, useEffect } from 'react';

/**
 * Detects whether the page has scrolled past a given threshold.
 * @param {number} threshold - pixel distance from top (default 80)
 * @returns {boolean}
 */
const useNavScroll = (threshold = 80) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handle, { passive: true });
    handle();
    return () => window.removeEventListener('scroll', handle);
  }, [threshold]);

  return scrolled;
};

export default useNavScroll;
