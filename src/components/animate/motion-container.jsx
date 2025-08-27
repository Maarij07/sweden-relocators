'use client';

import { motion } from 'framer-motion';

// Container animation variants
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Motion container component that automatically staggers child animations
export function MotionContainer({ animate, action = false, children, ...other }) {
  if (action) {
    return (
      <motion.div
        initial={false}
        animate={animate ? 'animate' : 'initial'}
        variants={containerVariants}
        {...other}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={containerVariants}
      {...other}
    >
      {children}
    </motion.div>
  );
}

// Alternative MotionViewport for scroll-triggered animations
export function MotionViewport({ children, ...other }) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true, margin: '-20px' }}
      variants={containerVariants}
      {...other}
    >
      {children}
    </motion.div>
  );
}
