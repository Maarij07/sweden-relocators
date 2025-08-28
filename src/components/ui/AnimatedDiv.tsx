'use client';

import { motion } from 'framer-motion';
import { varFade } from '@/components/animate/variants/fade';

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedDiv({ children, className = "" }: AnimatedDivProps) {
  return (
    <motion.div
      variants={varFade({ distance: 24 }).inUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}
