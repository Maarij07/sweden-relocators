'use client';

import { useRef, useState } from 'react';
import { useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

// Hook to track scroll progress and create parallax effects
export function useScrollProgress() {
  const elementRef = useRef(null);
  const { scrollY } = useScroll();
  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollY, 'change', (scrollHeight) => {
    let heroHeight = 0;

    if (elementRef.current) {
      heroHeight = elementRef.current.offsetHeight;
    }

    const scrollPercent = Math.floor((scrollHeight / heroHeight) * 100);

    if (scrollPercent >= 100) {
      setPercent(100);
    } else {
      setPercent(Math.floor(scrollPercent));
    }
  });

  return { elementRef, percent, scrollY };
}

// Hook to create transform Y values with physics-based spring animation
export function useTransformY(value, distance) {
  const physics = {
    mass: 0.1,
    damping: 20,
    stiffness: 300,
    restDelta: 0.001,
  };

  return useSpring(useTransform(value, [0, 1], [0, distance]), physics);
}

// Hook to create opacity based on scroll
export function useScrollOpacity(scrollY, maxScroll = 1) {
  return useTransform(
    scrollY,
    [0, maxScroll],
    [1, 0]
  );
}
