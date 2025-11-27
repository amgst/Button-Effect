import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Button 1: Supernova ---
export const SupernovaButton = () => {
  const [explode, setExplode] = useState(false);

  return (
    <motion.button
      onClick={() => {
        setExplode(true);
        setTimeout(() => setExplode(false), 1000);
      }}
      className="relative px-8 py-3 bg-slate-900 border border-yellow-500/50 text-yellow-500 font-bold uppercase tracking-widest rounded-full group overflow-hidden"
    >
      <span className="relative z-10 group-hover:text-white transition-colors">Ignite</span>
      
      {/* Central Flash */}
      <AnimatePresence>
        {explode && (
          <motion.div 
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 20, opacity: 0 }}
            className="absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-100 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-yellow-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </motion.button>
  );
};

// --- Button 2: Constellation ---
export const ConstellationButton = () => {
  const [hovered, setHovered] = useState(false);

  const stars = [
    { x: 20, y: 20 }, { x: 80, y: 30 }, { x: 50, y: 70 }, 
    { x: 30, y: 50 }, { x: 70, y: 80 }
  ];

  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-32 h-16 bg-[#050b14] border border-slate-800 rounded-lg overflow-hidden"
    >
      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {stars.map((star, i) => (
           stars.map((star2, j) => {
             if (i >= j) return null;
             return (
               <motion.line 
                 key={`${i}-${j}`}
                 x1={`${star.x}%`} y1={`${star.y}%`}
                 x2={`${star2.x}%`} y2={`${star2.y}%`}
                 stroke="white"
                 strokeWidth="0.5"
                 initial={{ opacity: 0, pathLength: 0 }}
                 animate={{ opacity: hovered ? 0.2 : 0, pathLength: hovered ? 1 : 0 }}
                 transition={{ duration: 0.5 }}
               />
             )
           })
        ))}
      </svg>

      {/* Stars */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
          className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_4px_white]"
          style={{ left: `${star.x}%`, top: `${star.y}%` }}
        />
      ))}

      <span className="relative z-10 text-xs font-mono text-slate-400">CONNECT</span>
    </motion.button>
  );
};

// --- Button 3: Warp Speed ---
export const WarpSpeedButton = () => {
  const [warping, setWarping] = useState(false);

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setWarping(true)}
      onMouseLeave={() => setWarping(false)}
      className="relative px-8 py-3 bg-black border border-white/20 text-white font-bold italic tracking-tighter overflow-hidden rounded-full"
    >
      <span className="relative z-10 mix-blend-difference">HYPERDRIVE</span>

      {/* Star Streaks */}
      <AnimatePresence>
        {warping && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: -200, opacity: 1 }}
            transition={{ 
              duration: 0.4, 
              repeat: Infinity, 
              delay: Math.random() * 0.2, 
              ease: "linear" 
            }}
            className="absolute top-1/2 h-[1px] bg-white w-20"
            style={{ 
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px white'
            }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};