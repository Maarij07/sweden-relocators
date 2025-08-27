'use client';

import { motion } from 'framer-motion';

// Animated background dots
const DotsPattern = () => (
  <motion.div
    className="absolute inset-0 opacity-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.2 }}
    transition={{ duration: 2 }}
  >
    <div className="absolute inset-0" style={{
      backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
      backgroundSize: '50px 50px'
    }} />
  </motion.div>
);

// Floating circles
const FloatingCircles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-blue-200/30"
        style={{
          width: 120 + i * 40,
          height: 120 + i * 40,
          left: `${10 + i * 10}%`,
          top: `${5 + i * 8}%`,
        }}
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8 + i * 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

// Animated lines
const AnimatedLines = () => (
  <div className="absolute inset-0">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
        style={{
          width: '200%',
          left: '-50%',
          top: `${20 + i * 15}%`,
          rotate: `${i * 15}deg`,
        }}
        animate={{
          x: [-100, 100, -100],
        }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    ))}
  </div>
);

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background gradient - White base */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Dots pattern */}
      <DotsPattern />
      
      {/* Floating circles */}
      <FloatingCircles />
      
      {/* Animated lines */}
      <AnimatedLines />
      
      {/* Overlay gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />
    </div>
  );
}
