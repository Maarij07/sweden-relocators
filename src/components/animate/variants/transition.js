// Animation transition configurations
export const varTranExit = (props) => ({
  duration: props?.durationOut || 0.48,
  ease: props?.easeOut || [0.43, 0.13, 0.23, 0.96],
});

export const varTranEnter = (props) => ({
  duration: props?.durationIn || 0.64,
  ease: props?.easeIn || [0.43, 0.13, 0.23, 0.96],
});
