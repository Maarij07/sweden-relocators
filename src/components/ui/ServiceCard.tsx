'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  hoverColor: string;
  icon: ReactNode;
  delay?: number;
}

export function ServiceCard({ title, description, hoverColor, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden h-full group cursor-pointer"
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-6 lg:p-8 text-center flex flex-col h-full">
        {/* Profile Image */}
        <div className="mb-6">
          <motion.div 
            className={`w-16 h-16 mx-auto rounded-full bg-white border-2 border-gray-200 overflow-hidden flex items-center justify-center shadow-sm`}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              boxShadow: `0 20px 25px -5px ${hoverColor}`,
              borderColor: '#9ca3af'
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + 0.5
              }}
            >
              {icon}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="flex-grow flex flex-col">
          <motion.h3 
            className="text-xl font-bold text-gray-900 mb-3"
            whileHover={{ color: hoverColor.replace('rgba(', '').replace(', 0.3)', '') }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: delay + 0.3 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>
        
        {/* Button */}
        <motion.button 
          className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors w-auto mt-auto relative overflow-hidden group"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "#1f2937"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.span
            className="relative z-10"
            animate={{
              x: [0, 2, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay
            }}
          >
            View Details
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
}
