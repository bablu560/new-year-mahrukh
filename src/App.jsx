import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import LoveMessage from './components/LoveMessage';
import Memories from './components/Memories';
import OurPromise from './components/OurPromise';
import Countdown from './components/Countdown';
import FinalLoveNote from './components/FinalLoveNote';
import BackgroundEffects from './components/BackgroundEffects';
import MusicPlayer from './components/MusicPlayer';
import Proposal from './components/Proposal';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

function App() {
  const [stage, setStage] = useState('countdown'); // 'countdown', 'proposal', 'celebration'
  const [clickEffects, setClickEffects] = useState([]);

  const handleTimerComplete = () => {
    setStage('proposal');
  };

  const handleProposalAccept = () => {
    setStage('celebration');
    triggerFireworks();
  };

  const triggerFireworks = () => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  };

  const handleGlobalClick = (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
    const id = Date.now();
    setClickEffects((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => setClickEffects((prev) => prev.filter(eff => eff.id !== id)), 1000);
  };

  return (
    <div className="App" style={{ minHeight: '100vh', position: 'relative' }} onClick={handleGlobalClick}>
      <BackgroundEffects />
      <MusicPlayer />

      <main style={{ position: 'relative', zIndex: 10, width: '100%', overflowX: 'hidden' }}>
        <AnimatePresence mode="wait">
          {stage === 'countdown' && (
            <motion.div
              key="countdown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Countdown onComplete={handleTimerComplete} />
            </motion.div>
          )}

          {stage === 'proposal' && (
            <motion.div
              key="proposal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <Proposal onAccept={handleProposalAccept} />
            </motion.div>
          )}

          {stage === 'celebration' && (
            <motion.div
              key="celebration"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Hero />
              <LoveMessage />
              <OurPromise />
              <Memories />
              <FinalLoveNote />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Click Hearts */}
      <AnimatePresence>
        {clickEffects.map((effect) => (
          <motion.div
            key={effect.id}
            initial={{ opacity: 1, scale: 0, x: effect.x, y: effect.y }}
            animate={{ opacity: 0, scale: 2, y: effect.y - 100 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'fixed',
              pointerEvents: 'none',
              color: 'var(--color-warm-red)',
              fontSize: '2rem',
              zIndex: 9999,
              top: 0, left: 0,
              transform: 'translate(-50%, -50%)'
            }}
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default App;
