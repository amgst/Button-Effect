import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Button 1: Sakura Bloom ---
export const SakuraBloomButton = () => {
  const [blooming, setBlooming] = useState(false);

  const petals = [...Array(12)].map((_, i) => ({
    angle: i * 30,
    delay: i * 0.02
  }));

  return (
    <motion.button
      onClick={() => {
        setBlooming(true);
        setTimeout(() => setBlooming(false), 2000);
      }}
      className="relative w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center group"
    >
      <div className="relative z-10 text-pink-400 group-hover:scale-110 transition-transform duration-300">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m3 4.5V15m4.5-3a4.5 4.5 0 1 1-4.5 4.5" />
        </svg>
      </div>

      <AnimatePresence>
        {blooming && petals.map((petal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1, x: 0, y: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: 0, 
              x: Math.cos(petal.angle * (Math.PI / 180)) * 60, 
              y: Math.sin(petal.angle * (Math.PI / 180)) * 60,
              scale: 1,
              rotate: petal.angle + 180
            }}
            transition={{ duration: 1.5, ease: "easeOut", delay: petal.delay }}
            className="absolute w-3 h-3 bg-pink-400"
            style={{ 
              borderRadius: '50% 0 50% 0',
            }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};

// --- Button 2: Neon Lotus ---
export const NeonLotusButton = () => {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      className="relative group"
    >
      <div className={`relative z-20 px-6 py-2 bg-slate-900 border ${active ? 'border-fuchsia-500 text-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.5)]' : 'border-slate-700 text-slate-400'} rounded transition-all duration-500`}>
        LOTUS_MODE
      </div>

      {/* Lotus Petals */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, rotate: i * 60 }}
          animate={{ 
            opacity: active ? 1 : 0, 
            scale: active ? 1.5 : 0.5,
            rotate: i * 60
          }}
          transition={{ duration: 0.8, type: "spring" }}
          className="absolute inset-0 z-10 border border-fuchsia-500/50 rounded-full"
          style={{ transformOrigin: 'center' }}
        />
      ))}
    </button>
  );
};

// --- Button 3: Vine Growth ---
export const VineGrowthButton = () => {
  const [grows, setGrows] = useState(false);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <button
      onClick={() => {
        setGrows(true);
        setTimeout(() => setGrows(false), 2000);
      }}
      className="relative px-8 py-3 bg-emerald-950/30 text-emerald-400 border border-emerald-800 rounded-lg overflow-hidden"
    >
      <span className="relative z-10">GROW</span>
      
      {/* SVG Overlay for vines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50" preserveAspectRatio="none">
        <motion.path
          d="M0,30 Q20,10 40,30 T80,30 T120,30"
          fill="none"
          stroke="#34d399"
          strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate={grows ? "visible" : "hidden"}
        />
        <motion.path
          d="M0,10 Q30,40 60,10 T120,10"
          fill="none"
          stroke="#34d399"
          strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate={grows ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        />
      </svg>
    </button>
  );
};