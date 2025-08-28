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
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      <div className="p-6 lg:p-8 text-center flex flex-col h-full">
        {/* Profile Image */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 border-2 border-gray-200 overflow-hidden flex items-center justify-center shadow-sm">
            <div>
              {icon}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
            {description}
          </p>
        </div>
        
        {/* Button */}
        <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium text-sm w-auto mt-auto relative overflow-hidden group inline-flex items-center justify-center gap-2">
          <span className="relative z-10">
            View Details
          </span>
          <motion.svg 
            className="w-4 h-4 relative z-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            whileHover={{ 
              x: 4
            }}
            transition={{ 
              duration: 0.2,
              ease: "easeOut"
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </button>
      </div>
    </motion.div>
  );
}
