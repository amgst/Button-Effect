export const CODE_SNIPPETS = {
  p1: `// Atomic Orbit Button
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AtomicOrbitButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {(isHovered || isClicked) && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, rotate: i * 60 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: isClicked ? 2 : 1.2, 
                  rotate: isClicked ? i * 60 + 360 : i * 60 + 180 
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ 
                  duration: isClicked ? 0.8 : 2, 
                  repeat: isClicked ? 0 : Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-full border border-cyan-400/30"
                style={{ borderRadius: '50%' }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 px-8 py-3 bg-slate-900 text-cyan-400 border border-cyan-500/50 rounded-full font-bold uppercase tracking-widest overflow-hidden group"
      >
        <span className="relative z-10 group-hover:text-white transition-colors">Atomic</span>
        <motion.div 
          className="absolute inset-0 bg-cyan-600"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '0%' : '-100%' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        />
      </motion.button>
    </div>
  );
};`,
  p2: `// Quantum Pulse Button
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const QuantumPulseButton = () => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  
  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      className="relative px-8 py-4 bg-transparent text-white border-2 border-violet-500 rounded-lg overflow-hidden group font-mono"
    >
      <span className="relative z-10 flex items-center gap-2">
        <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"/>
        QUANTUM_EXEC
      </span>
      
      <div className="absolute inset-0 bg-violet-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{ width: 500, height: 500, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ 
              left: ripple.x, 
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              borderRadius: '50%',
              backgroundColor: 'rgba(139, 92, 246, 0.4)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />
        ))}
      </AnimatePresence>
    </button>
  );
};`,
  p3: `// Neon Vortex Button
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const NeonVortexButton = () => {
  const [active, setActive] = useState(false);

  return (
    <motion.button
      onClick={() => {
        setActive(true);
        setTimeout(() => setActive(false), 1500);
      }}
      className="relative w-16 h-16 rounded-full flex items-center justify-center bg-slate-900 border border-slate-700"
    >
      <AnimatePresence>
        {active && [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: 0,
              scale: [0, 1.5, 0],
              x: [0, Math.cos(i * 45) * 50],
              y: [0, Math.sin(i * 45) * 50],
              rotate: 360
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_10px_rgba(163,230,53,0.8)]"
          />
        ))}
      </AnimatePresence>

      <div className={\`transition-all duration-300 \${active ? 'scale-90 text-lime-400' : 'text-slate-400'}\`}>
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 21h5v-5" />
        </svg>
      </div>
    </motion.button>
  );
};`,
  p4: `// Data Stream Button
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const DataStreamButton = () => {
  const [streaming, setStreaming] = useState(false);

  return (
    <button
      onClick={() => {
        setStreaming(true);
        setTimeout(() => setStreaming(false), 2000);
      }}
      className="relative px-10 py-3 bg-slate-900 border border-blue-500/30 text-blue-400 font-bold tracking-widest uppercase overflow-hidden"
    >
      <span className="relative z-10 mix-blend-difference">Upload</span>
      
      {streaming && [...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: '-100%', opacity: 0.5 }}
          animate={{ x: '100%', opacity: 0 }}
          transition={{ 
            duration: 0.5 + Math.random() * 0.5, 
            repeat: Infinity,
            delay: i * 0.1,
            ease: "linear"
          }}
          className="absolute left-0 h-[2px] bg-blue-500 w-1/2"
          style={{ top: \`\${20 + i * 15}%\` }}
        />
      ))}
      
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-blue-500"
        initial={{ width: "0%" }}
        animate={{ width: streaming ? "100%" : "0%" }}
        transition={{ duration: 2 }}
      />
    </button>
  );
};`,
  f1: `// Sakura Bloom Button
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
};`,
  f2: `// Neon Lotus Button
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const NeonLotusButton = () => {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      className="relative group"
    >
      <div className={\`relative z-20 px-6 py-2 bg-slate-900 border \${active ? 'border-fuchsia-500 text-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.5)]' : 'border-slate-700 text-slate-400'} rounded transition-all duration-500\`}>
        LOTUS_MODE
      </div>

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
};`,
  f3: `// Vine Growth Button
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
};`,
  c1: `// Cyber Burst Button
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CyberBurstButton = () => {
  const [clicked, setClicked] = useState(false);

  const particles = [...Array(20)].map((_, i) => ({
    x: (Math.random() - 0.5) * 300,
    y: (Math.random() - 0.5) * 300,
    rotate: Math.random() * 360,
    scale: Math.random(),
    color: Math.random() > 0.5 ? '#06b6d4' : '#f472b6'
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
};`,
  c2: `// Glass Shatter Button
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const GlassShatterButton = () => {
  const [shattered, setShattered] = useState(false);

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
                y: (Math.random() - 0.5) * 100 + 50, 
                rotate: Math.random() * 90,
                opacity: 0 
              }}
              transition={{ duration: 0.8 }}
              className="absolute bg-slate-700 border border-slate-500"
              style={{ 
                left: \`\${shard.x}%\`, 
                top: \`\${shard.y}%\`, 
                width: '25%', 
                height: '25%' 
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};`,
  c3: `// Pixel Rain Button
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
};`,
  h1: `// Digital Pulse Button
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
          className={\`w-8 h-8 transition-colors duration-300 \${liked ? 'text-red-500 fill-red-500' : 'text-slate-500'}\`} 
          viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </motion.div>

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
};`,
  h2: `// Love Circuit Button
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
};`,
  h3: `// Hologram Heart Button
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const HologramHeartButton = () => {
  const [hovered, setHovered] = useState(false);

  const HeartIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );

  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={{ scale: 0.95 }}
      className="relative w-20 h-20 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center group"
    >
      <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
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
};`,
  s1: `// Supernova Button
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
};`,
  s2: `// Constellation Button
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {stars.map((star, i) => (
           stars.map((star2, j) => {
             if (i >= j) return null;
             return (
               <motion.line 
                 key={\`\${i}-\${j}\`}
                 x1={\`\${star.x}%\`} y1={\`\${star.y}%\`}
                 x2={\`\${star2.x}%\`} y2={\`\${star2.y}%\`}
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

      {stars.map((star, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
          className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_4px_white]"
          style={{ left: \`\${star.x}%\`, top: \`\${star.y}%\` }}
        />
      ))}

      <span className="relative z-10 text-xs font-mono text-slate-400">CONNECT</span>
    </motion.button>
  );
};`,
  s3: `// Warp Speed Button
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
              top: \`\${Math.random() * 100}%\`,
              boxShadow: '0 0 10px white'
            }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};`,
};