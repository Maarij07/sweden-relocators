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
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {/* Main Card */}
      <div 
        className={`relative rounded-xl shadow-md hover:shadow-xl border-2 transition-all duration-300 h-full flex flex-col group overflow-hidden ${backgroundColor}`}
        style={{
          borderColor: hoverColor + '25'
        }}
      >
        
        {/* Enhanced background overlay */}
        <div 
          className="absolute inset-0 opacity-8 group-hover:opacity-12 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${hoverColor}12, ${hoverColor}05, transparent 70%)`
          }}
        />
        
        <div className="p-6 flex flex-col h-full relative z-10">
          {/* Icon Container */}
          <motion.div 
            className="mb-5"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="text-center">
              <div 
                className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl shadow-lg"
                style={{
                  background: `linear-gradient(145deg, ${hoverColor}15, ${hoverColor}08)`,
                  border: `2px solid ${hoverColor}25`,
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Top highlight */}
                <div 
                  className="absolute top-1.5 left-1.5 right-1.5 h-2 rounded-t-xl opacity-30"
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)`
                  }}
                />
                
                <div className="relative z-10">
                  {icon}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="flex-grow flex flex-col text-center relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {description}
            </p>
          </motion.div>
          
        </div>
        
      </div>
    </motion.div>
  );
}
