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
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {/* Main Card */}
      <div className="relative rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 h-full group overflow-hidden bg-white">
        
        <div className="p-8 flex flex-col h-full">
          {/* Icon Container */}
          <motion.div 
            className="mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-xl shadow-md bg-gray-50 border border-gray-100">
                {/* Icon */}
                <div className="relative z-10">
                  {icon}
                </div>
                
                {/* Subtle shine effect */}
                <div className="absolute top-2 left-2 right-2 h-3 rounded-t-lg opacity-20 bg-gradient-to-r from-transparent via-white to-transparent" />
              </div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="flex-grow flex flex-col text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
              {description}
            </p>
          </motion.div>
          
          {/* Professional CTA */}
          <div className="mt-auto flex justify-center">
            <button 
              className="bg-black text-white px-3.5 py-1.5 border rounded-lg font-medium text-xs transition-colors duration-200 hover:bg-gray-700 cursor-pointer h-9"
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'black',
                color: 'white'
              }}
            >
              Learn More
            </button>
          </div>
          
        </div>
        
      </div>
    </motion.div>
  );
}
