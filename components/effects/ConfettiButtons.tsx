import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Button 1: Cyber Burst ---
export const CyberBurstButton = () => {
  const [clicked, setClicked] = useState(false);

  const particles = [...Array(20)].map((_, i) => ({
    x: (Math.random() - 0.5) * 300,
    y: (Math.random() - 0.5) * 300,
    rotate: Math.random() * 360,
    scale: Math.random(),
    color: Math.random() > 0.5 ? '#06b6d4' : '#f472b6' // Cyan or Pink
  }));

  return (
    <div className="relative">
      <AnimatePresence>
        {clicked && particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
            animate={{ x: p.x, y: p.y, opacity: 0, scale: p.scale, rotate: p.rotate }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 w-2 h-2"
            style={{ backgroundColor: p.color }}
          />
        ))}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setClicked(true);
          setTimeout(() => setClicked(false), 800);
        }}
        className="px-6 py-3 bg-white text-black font-bold uppercase tracking-wider skew-x-[-10deg] hover:skew-x-[-20deg] transition-transform"
      >
        Party_Mode
      </motion.button>
    </div>
  );
};

// --- Button 2: Glass Shatter ---
export const GlassShatterButton = () => {
  const [shattered, setShattered] = useState(false);

  // Create a grid of shards
  const shards = [...Array(16)].map((_, i) => ({
    id: i,
    x: (i % 4) * 25,
    y: Math.floor(i / 4) * 25,
  }));

  const handleShatter = () => {
    setShattered(true);
    setTimeout(() => setShattered(false), 2000);
  };

  return (
    <div className="relative w-32 h-12 cursor-pointer" onClick={handleShatter}>
      {!shattered ? (
        <motion.div 
          className="w-full h-full bg-slate-800 flex items-center justify-center border border-slate-600 text-slate-200 font-bold"
          layoutId="glass-btn"
        >
          BREAK
        </motion.div>
      ) : (
        <div className="w-full h-full relative">
          {shards.map((shard) => (
            <motion.div
              key={shard.id}
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{ 
                x: (Math.random() - 0.5) * 100, 
                y: (Math.random() - 0.5) * 100 + 50, // Fall down
                rotate: Math.random() * 90,
                opacity: 0 
              }}
              transition={{ duration: 0.8 }}
              className="absolute bg-slate-700 border border-slate-500"
              style={{ 
                left: `${shard.x}%`, 
                top: `${shard.y}%`, 
                width: '25%', 
                height: '25%' 
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// --- Button 3: Pixel Rain ---
export const PixelRainButton = () => {
  const [raining, setRaining] = useState(false);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        setRaining(true);
        setTimeout(() => setRaining(false), 1500);
      }}
      className="relative px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg overflow-hidden"
    >
      <span className="relative z-10">PIXELATE</span>
      
      <AnimatePresence>
        {raining && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -50, x: Math.random() * 150 }}
            animate={{ y: 60 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: Math.random() * 0.5, ease: "linear" }}
            className="absolute top-0 w-1 h-3 bg-white/50"
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};