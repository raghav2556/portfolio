import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { data } from './data/portfolioData';

import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import About       from './components/About';
import Education   from './components/Education';
import Projects    from './components/Projects';
import Skills      from './components/Skills';
import Achievements from './components/Achievements';
import Activities  from './components/Activities';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

import CustomCursor from './shared/CustomCursor';
import Toast        from './shared/Toast';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [toast,   setToast]   = useState(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4200);
  };

  return (
    <>
      {/* ── Loading Curtain ──────────────────── */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="curtain"
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.85, ease: [0.87, 0, 0.13, 1], delay: 0.25 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'var(--bg-void)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1,    opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="font-display"
              style={{
                fontSize: '5.5rem',
                color: 'var(--aura-violet)',
                letterSpacing: '0.1em',
                textShadow: '0 0 50px rgba(139,63,200,0.7)',
              }}
            >
              {data.personal.initials}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Scroll Progress Bar ──────────────── */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, var(--cursed-purple), var(--aura-violet))',
          transformOrigin: '0% 50%',
          scaleX,
          zIndex: 9998,
        }}
      />

      <CustomCursor />
      <main>
        <Navbar      personal={data.personal} />
        <Hero        personal={data.personal} />
        <About       personal={data.personal} stats={data.stats} />
        <Education   education={data.education} />
        <Projects    projects={data.projects} />
        <Skills      skills={data.skills} />
        <Achievements achievements={data.achievements} />
        <Activities  activities={data.activities} />
        <Contact     contact={data.contact} personal={data.personal} onToast={showToast} />
        <Footer      personal={data.personal} />
      </main>

      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </>
  );
};

export default App;
