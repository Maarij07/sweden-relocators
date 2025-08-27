'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// Simple fade animation variants
const fadeVariants = {
  initial: { 
    opacity: 0,
    y: 20
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function AnimateText({ 
  text, 
  component = 'h2',
  className = '',
  variant = 'fade', // simplified to just 'fade'
  once = true,
  amount = 0.3,
  delay = 0,
  ...other 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const Component = motion[component] || motion.div;

  return (
    <Component
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeVariants}
      transition={{ delay }}
      className={className}
      {...other}
    >
      {text}
    </Component>
  );
}

// Gradient text animation component
export function AnimateGradientText({ 
  text,
  gradient = ['#3B82F6', '#8B5CF6', '#EC4899'],
  component = 'h2',
  className = '',
  ...other
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }} // 2x faster (0.8 / 2)
      viewport={{ once: true, amount: 0.3 }}
    >
      <AnimateText
        text={text}
        component={component}
        className={`bg-gradient-to-r from-[${gradient[0]}] via-[${gradient[1]}] to-[${gradient[2]}] bg-clip-text text-transparent font-bold ${className}`}
        style={{
          backgroundImage: `linear-gradient(45deg, ${gradient.join(', ')})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        variant="fade"
        {...other}
      />
    </motion.div>
  );
}

// Typewriter effect component
export function AnimateTypewriter({ 
  text,
  component = 'h2',
  className = '',
  speed = 50, // milliseconds per character
  ...other
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [isInView, text, speed]);

  const Component = motion[component] || motion.div;

  return (
    <Component
      ref={ref}
      className={`${className} ${isComplete ? 'typing-complete' : 'typing'}`}
      {...other}
    >
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="border-r-2 border-current ml-1"
        >
          |
        </motion.span>
      )}
    </Component>
  );
}
