'use client';

import { motion, useTransform } from 'framer-motion';
import { useScrollProgress, useTransformY } from '@/hooks/use-scroll-progress';
import { HeroBackground } from '@/components/hero-background';
import { MotionContainer } from '@/components/animate';

const motionProps = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function HeroSection() {
  // Parallax scroll effects
  const scroll = useScrollProgress();
  const distance = scroll.percent;
  
  const y1 = useTransformY(scroll.scrollY, distance * -7);
  const y2 = useTransformY(scroll.scrollY, distance * -6);
  const y3 = useTransformY(scroll.scrollY, distance * -5);
  const y4 = useTransformY(scroll.scrollY, distance * -4);
  const y5 = useTransformY(scroll.scrollY, distance * -3);
  
  const opacity = useTransform(
    scroll.scrollY,
    [0, 1],
    [1, Number((1 - scroll.percent / 100).toFixed(1))]
  );


  return (
    <section 
      ref={scroll.elementRef}
      className="relative overflow-hidden min-h-screen lg:h-screen lg:max-h-screen flex items-center justify-center pt-24 lg:pt-28"
    >
      <motion.div
        style={{ opacity }}
        className="w-full h-full flex flex-col relative lg:fixed lg:max-h-inherit transition-opacity duration-300"
      >
        {/* Animated Background */}
        <HeroBackground />
        
        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-7xl w-full">
            <MotionContainer animate className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                {/* Animated subtitle with enhanced motion */}
                <motion.div 
                  style={{ y: y1 }}
                  {...motionProps}
                >
                  <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase leading-relaxed">
                    RELOCATION & IMMIGRATION SOLUTIONS FOR INDIVIDUALS, FAMILIES,<br />
                    EMPLOYEES, AND COMPANIES
                  </p>
                </motion.div>
                
                {/* Enhanced animated title with improved gradient animation */}
                <motion.div 
                  style={{ y: y2 }}
                  {...motionProps}
                >
                  <h1 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                    
                    Relocate To{' '}
                    <motion.span
                      className="inline-block bg-gradient-to-r "
                      animate={{ backgroundPosition: '200% center' }}
                      transition={{
                        duration: 20,
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                      style={{
                        backgroundSize: '400%',
                      }}
                    >
                      Sweden
                    </motion.span>
                    <br />
                    With Expert Advice                 </h1>
                </motion.div>
                
                {/* Enhanced animated description */}
                <motion.div 
                  style={{ y: y3 }}
                  {...motionProps}
                >
                  <p className="text-gray-600 text-sm lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                    We offer complete relocation services to our worldwide clients including residence & 
                    work permits, home finding, school pre-search, integration, and setting-in services.
                  </p>
                </motion.div>
                
                {/* Enhanced animated buttons with improved animations */}
                <motion.div 
                  style={{ y: y4 }}
                  {...motionProps}
                >
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                    <button 
                      className="bg-black text-white px-8 py-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-gray-800"
                    >
                      <svg 
                        className="w-5 h-5" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      Our Services
                    </button>
                    <button 
                      className="bg-white text-black border border-gray-300 px-8 py-4 rounded-lg font-medium text-sm flex items-center justify-center transition-all duration-200 hover:border-black"
                    >
                      Book an Appointment
                    </button>
                  </div>
                </motion.div>
              </div>
              
              {/* Right Content - Enhanced Animated Image */}
              <motion.div 
                style={{ y: y5 }} 
                className="relative"
                {...motionProps}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                  {/* Professional placeholder background */}
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative">
                    
                    {/* Subtle decorative elements */}
                    <div className="absolute top-6 left-6 w-16 h-1 bg-blue-200 rounded-full opacity-60"></div>
                    <div className="absolute top-9 left-6 w-12 h-1 bg-blue-300 rounded-full opacity-40"></div>
                    <div className="absolute bottom-6 right-6 w-20 h-1 bg-yellow-200 rounded-full opacity-60"></div>
                    <div className="absolute bottom-9 right-6 w-14 h-1 bg-yellow-300 rounded-full opacity-40"></div>
                    
                    {/* Central content area */}
                    <div className="text-center space-y-4">
                      {/* Subtle play button */}
                      <motion.div 
                        className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 cursor-pointer mx-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="w-8 h-8 text-gray-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </motion.div>
                      
                      {/* Placeholder text */}
                      <div className="space-y-2">
                        <p className="text-gray-600 font-medium text-sm">Watch Our Introduction</p>
                        <p className="text-gray-400 text-xs">Video coming soon</p>
                      </div>
                    </div>
                    
                    {/* Corner accent - subtle Swedish flag colors */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-yellow-400/10 to-transparent rounded-tr-full"></div>
                  </div>
                </div>
              </motion.div>
            </MotionContainer>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
