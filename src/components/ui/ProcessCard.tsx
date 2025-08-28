'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ProcessCardProps {
  title: string;
  description: string;
  backgroundColor: string;
  iconColor: string;
  hoverColor: string;
  icon: ReactNode;
  delay?: number;
}

export function ProcessCard({ 
  title, 
  description, 
  backgroundColor, 
  iconColor, 
  hoverColor, 
  icon, 
  delay = 0 
}: ProcessCardProps) {
  return (
    <motion.div 
      className={`${backgroundColor} rounded-2xl p-6 text-left relative overflow-hidden cursor-pointer group`}
      initial={{ opacity: 0, scale: 0.8, rotateY: delay % 2 === 0 ? -15 : 15 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        rotateY: delay % 2 === 0 ? 5 : -5,
        transition: { duration: 0.3, type: "spring", stiffness: 300 }
      }}
    >
      {/* Icon badge */}
      <motion.div 
        className={`absolute top-6 left-6 w-12 h-12 ${iconColor} rounded-full flex items-center justify-center`}
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.5 }
        }}
      >
        {icon}
      </motion.div>
      
      <motion.div 
        className="pt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
      >
        <motion.h3 
          className="text-xl font-bold text-gray-900 mb-3"
          whileHover={{ color: hoverColor }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}
