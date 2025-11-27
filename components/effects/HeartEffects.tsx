import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Button 1: Digital Pulse ---
export const DigitalPulseButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.button
      onClick={() => setLiked(!liked)}
      className="relative w-14 h-14 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center overflow-hidden"
    >
      <motion.div
        animate={liked ? {
          scale: [1, 1.4, 1, 1.4, 1],
        } : { scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <svg 
          className={`w-8 h-8 transition-colors duration-300 ${liked ? 'text-red-500 fill-red-500' : 'text-slate-500'}`} 
          viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </motion.div>

      {/* EKG Line */}
      {liked && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <motion.path
            d="M0 12 H 5 L 8 4 L 14 20 L 17 12 H 24"
            fill="none"
            stroke="red"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </svg>
      )}
    </motion.button>
  );
};

// --- Button 2: Love Circuit ---
export const LoveCircuitButton = () => {
  const [active, setActive] = useState(false);
  
  return (
    <button
      onClick={() => {
         setActive(true);
         setTimeout(() => setActive(false), 2000);
      }}
      className="relative px-8 py-3 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/10 transition-colors"
    >
       <span className="relative z-10 font-bold tracking-widest">CONNECT</span>
       
       <AnimatePresence>
         {active && (
           <>
            <motion.div 
               initial={{ width: 0 }} 
               animate={{ width: '100%' }} 
               exit={{ opacity: 0 }}
               className="absolute top-0 left-0 h-[1px] bg-red-500" 
            />
            <motion.div 
               initial={{ height: 0 }} 
               animate={{ height: '100%' }} 
               exit={{ opacity: 0 }}
               className="absolute top-0 right-0 w-[1px] bg-red-500" 
               transition={{ delay: 0.2 }}
            />
            <motion.div 
               initial={{ width: 0 }} 
               animate={{ width: '100%' }} 
               exit={{ opacity: 0 }}
               className="absolute bottom-0 right-0 h-[1px] bg-red-500" 
               style={{ transformOrigin: 'right' }}
               transition={{ delay: 0.4 }}
            />
            <motion.div 
               initial={{ height: 0 }} 
               animate={{ height: '100%' }} 
               exit={{ opacity: 0 }}
               className="absolute bottom-0 left-0 w-[1px] bg-red-500" 
               style={{ transformOrigin: 'bottom' }}
               transition={{ delay: 0.6 }}
            />
           </>
         )}
       </AnimatePresence>
    </button>
  );
};

// --- Button 3: Hologram Heart ---
export const HologramHeartButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={{ scale: 0.95 }}
      className="relative w-20 h-20 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center group"
    >
      <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Glitch layers */}
      <motion.div 
        animate={hovered ? { x: [-2, 2, -1, 0], opacity: [0.5, 0.8, 0.5] } : {}}
        transition={{ repeat: Infinity, duration: 0.2 }}
        className="absolute text-cyan-400 opacity-50"
      >
        <HeartIcon />
      </motion.div>
      
      <motion.div 
        animate={hovered ? { x: [2, -2, 1, 0], opacity: [0.5, 0.8, 0.5] } : {}}
        transition={{ repeat: Infinity, duration: 0.3 }}
        className="absolute text-red-500 opacity-50"
      >
        <HeartIcon />
      </motion.div>

      <div className="relative z-10 text-white">
        <HeartIcon />
      </div>
    </motion.button>
  );
};

const HeartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);
