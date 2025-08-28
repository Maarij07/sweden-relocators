'use client';

import { motion } from 'framer-motion';
import { varFade } from '@/components/animate';

interface ContentSectionProps {
  subtitle: string;
  title: string;
  content: string[];
  imagePosition: 'left' | 'right';
  className?: string;
}

export function ContentSection({ subtitle, title, content, imagePosition, className = "" }: ContentSectionProps) {
  const imageComponent = (
    <motion.div 
      variants={varFade(imagePosition === 'left' ? 'inLeft' : 'inRight', { distance: 24 })}
      className={`relative ${imagePosition === 'right' ? 'lg:order-2' : ''}`}
    >
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
        {/* Simulated laptop/desktop image */}
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
          <div className="w-4/5 h-4/5 bg-gray-800 rounded-lg relative overflow-hidden">
            {/* Screen content simulation */}
            <div className="w-full h-full bg-blue-600 relative">
              {/* Video call interface simulation */}
              <div className="absolute inset-4 grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-gray-300 rounded-md flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                  </div>
                ))}
              </div>
              {/* Green notification badge */}
              <div className="absolute top-6 left-6 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative plant element */}
        <div className="absolute -top-4 -right-4 w-16 h-20 bg-green-400 rounded-full opacity-60"></div>
      </div>
    </motion.div>
  );

  const contentComponent = (
    <div className={`space-y-6 ${imagePosition === 'right' ? 'lg:order-1' : ''}`}>
      <motion.div
        variants={varFade('inUp', { distance: 24 })}
      >
        <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
          {subtitle}
        </p>
        <h2 
          className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </motion.div>
      
      <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
        {content.map((paragraph, index) => (
          <motion.p 
            key={index} 
            variants={varFade('inUp', { distance: 24 })}
            dangerouslySetInnerHTML={{ __html: paragraph }} 
          />
        ))}
      </div>
      
      <motion.button 
        variants={varFade('inUp', { distance: 24 })}
        className="inline-flex items-center text-gray-900 font-medium text-sm hover:text-gray-700 transition-all duration-300 group border border-gray-300 px-3 py-2 rounded-md hover:border-gray-400 hover:shadow-sm"
      >
        Read More
        <motion.svg 
          className="w-4 h-4 ml-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          whileHover={{ 
            rotate: 180,
            x: 4
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </motion.svg>
      </motion.button>
    </div>
  );

  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24 ${className}`}>
      {imagePosition === 'left' ? (
        <>
          {imageComponent}
          {contentComponent}
        </>
      ) : (
        <>
          {contentComponent}
          {imageComponent}
        </>
      )}
    </div>
  );
}
