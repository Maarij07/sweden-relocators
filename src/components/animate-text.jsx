'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// Animation variants for character-by-character text animation
const varContainer = () => ({
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
});

const varCharacter = () => ({
  initial: { 
    y: 80, 
    opacity: 0,
    rotateX: -90,
    scale: 0.8
  },
  animate: { 
    y: 0, 
    opacity: 1,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
});

const varWord = () => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03,
    },
  },
});

export function AnimateText({ 
  text, 
  component = 'h2',
  className = '',
  variant = 'character', // 'character', 'word', 'line'
  once = true,
  amount = 0.3,
  stagger = 0.05,
  ...other 
}) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once, amount });

  useEffect(() => {
    if (isInView) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [controls, isInView]);

  const Component = motion[component] || motion.div;

  if (variant === 'character') {
    return (
      <Component
        ref={ref}
        initial="initial"
        animate={controls}
        variants={varContainer()}
        className={className}
        {...other}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={varCharacter()}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Component>
    );
  }

  if (variant === 'word') {
    return (
      <Component
        ref={ref}
        initial="initial"
        animate={controls}
        variants={varContainer()}
        className={className}
        {...other}
      >
        {text.split(' ').map((word, wordIndex) => (
          <motion.span
            key={`${word}-${wordIndex}`}
            variants={varWord()}
            style={{ display: 'inline-block', marginRight: '0.3em' }}
          >
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={`${char}-${charIndex}`}
                variants={varCharacter()}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </Component>
    );
  }

  // Default line animation
  return (
    <Component
      ref={ref}
      initial="initial"
      animate={controls}
      variants={varCharacter()}
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
      transition={{ duration: 0.8, ease: "easeOut" }}
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
        variant="character"
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
