'use client';

// ----------------------------------------------------------------------

export const varAlpha = (color, opacity = 1) => `rgba(${color}, ${opacity})`;

// ----------------------------------------------------------------------

const transitions = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0.0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  sharp: [0.4, 0, 0.6, 1],
};

const transitionEnter = {
  duration: 0.64,
  ease: transitions.easeInOut,
};

const transitionExit = {
  duration: 0.48,
  ease: transitions.easeInOut,
};

// ----------------------------------------------------------------------

export const varFade = (direction = 'in', options) => {
  const distance = options?.distance || 120;
  const durationIn = options?.durationIn || 0.64;
  const durationOut = options?.durationOut || 0.48;
  const easeIn = options?.easeIn || transitions.easeInOut;
  const easeOut = options?.easeOut || transitions.easeInOut;

  const fadeIn = {
    initial: {},
    animate: { opacity: 1, transition: { duration: durationIn, ease: easeIn } },
    exit: { opacity: 0, transition: { duration: durationOut, ease: easeOut } },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0, transition: { duration: durationIn, ease: easeIn } },
    exit: { opacity: 0, y: distance, transition: { duration: durationOut, ease: easeOut } },
  };

  const fadeInDown = {
    initial: { opacity: 0, y: -distance },
    animate: { opacity: 1, y: 0, transition: { duration: durationIn, ease: easeIn } },
    exit: { opacity: 0, y: -distance, transition: { duration: durationOut, ease: easeOut } },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -distance },
    animate: { opacity: 1, x: 0, transition: { duration: durationIn, ease: easeIn } },
    exit: { opacity: 0, x: -distance, transition: { duration: durationOut, ease: easeOut } },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: distance },
    animate: { opacity: 1, x: 0, transition: { duration: durationIn, ease: easeIn } },
    exit: { opacity: 0, x: distance, transition: { duration: durationOut, ease: easeOut } },
  };

  return {
    in: fadeIn,
    inUp: fadeInUp,
    inDown: fadeInDown,
    inLeft: fadeInLeft,
    inRight: fadeInRight,
  }[direction];
};

// ----------------------------------------------------------------------

export const varSlide = (direction, options) => {
  const distance = options?.distance || 160;
  const durationIn = options?.durationIn || 0.64;
  const durationOut = options?.durationOut || 0.48;
  const easeIn = options?.easeIn || transitions.easeInOut;
  const easeOut = options?.easeOut || transitions.easeInOut;

  const slideInUp = {
    initial: { y: distance },
    animate: { y: 0, transition: { duration: durationIn, ease: easeIn } },
    exit: { y: distance, transition: { duration: durationOut, ease: easeOut } },
  };

  const slideInDown = {
    initial: { y: -distance },
    animate: { y: 0, transition: { duration: durationIn, ease: easeIn } },
    exit: { y: -distance, transition: { duration: durationOut, ease: easeOut } },
  };

  const slideInLeft = {
    initial: { x: -distance },
    animate: { x: 0, transition: { duration: durationIn, ease: easeIn } },
    exit: { x: -distance, transition: { duration: durationOut, ease: easeOut } },
  };

  const slideInRight = {
    initial: { x: distance },
    animate: { x: 0, transition: { duration: durationIn, ease: easeIn } },
    exit: { x: distance, transition: { duration: durationOut, ease: easeOut } },
  };

  return {
    inUp: slideInUp,
    inDown: slideInDown,
    inLeft: slideInLeft,
    inRight: slideInRight,
  }[direction];
};

// ----------------------------------------------------------------------

export const varZoom = (direction, options) => {
  const durationIn = options?.durationIn || 0.64;
  const durationOut = options?.durationOut || 0.48;
  const easeIn = options?.easeIn || transitions.easeInOut;
  const easeOut = options?.easeOut || transitions.easeInOut;

  const zoomIn = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: durationIn, ease: easeIn } },
    exit: { scale: 0, opacity: 0, transition: { duration: durationOut, ease: easeOut } },
  };

  const zoomOut = {
    initial: { scale: 1, opacity: 1 },
    animate: { scale: 0, opacity: 0, transition: { duration: durationIn, ease: easeIn } },
    exit: { scale: 1, opacity: 1, transition: { duration: durationOut, ease: easeOut } },
  };

  return {
    in: zoomIn,
    out: zoomOut,
  }[direction];
};

// ----------------------------------------------------------------------

export const varRotate = (direction, options) => {
  const durationIn = options?.durationIn || 0.64;
  const durationOut = options?.durationOut || 0.48;
  const easeIn = options?.easeIn || transitions.easeInOut;
  const easeOut = options?.easeOut || transitions.easeInOut;

  const rotateIn = {
    initial: { opacity: 0, rotate: -360 },
    animate: { opacity: 1, rotate: 0, transition: { duration: durationIn, ease: easeIn } },
    exit: { opacity: 0, rotate: -360, transition: { duration: durationOut, ease: easeOut } },
  };

  return {
    in: rotateIn,
  }[direction];
};

// ----------------------------------------------------------------------

export const varScale = (direction, options) => {
  const durationIn = options?.durationIn || 0.64;
  const durationOut = options?.durationOut || 0.48;
  const easeIn = options?.easeIn || transitions.easeInOut;
  const easeOut = options?.easeOut || transitions.easeInOut;

  const scaleX = {
    initial: { scaleX: 0, opacity: 0 },
    animate: { scaleX: 1, opacity: 1, transition: { duration: durationIn, ease: easeIn } },
    exit: { scaleX: 0, opacity: 0, transition: { duration: durationOut, ease: easeOut } },
  };

  const scaleY = {
    initial: { scaleY: 0, opacity: 0 },
    animate: { scaleY: 1, opacity: 1, transition: { duration: durationIn, ease: easeIn } },
    exit: { scaleY: 0, opacity: 0, transition: { duration: durationOut, ease: easeOut } },
  };

  return {
    inX: scaleX,
    inY: scaleY,
  }[direction];
};
