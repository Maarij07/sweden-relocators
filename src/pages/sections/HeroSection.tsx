'use client';

import { motion, useTransform } from 'framer-motion';
import { useScrollProgress, useTransformY } from '@/hooks/use-scroll-progress';
import { HeroBackground } from '@/components/hero-background';
import { MotionContainer } from '@/components/animate';
import { AnimatedDiv } from '@/components/ui/AnimatedDiv';

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
      className="relative overflow-hidden min-h-screen lg:h-screen lg:max-h-screen flex items-center justify-center"
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
                      className="inline-block bg-gradient-to-r from-green-600 via-orange-500 to-green-600 bg-clip-text text-transparent font-bold"
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
                    <span className="text-gray-700">With Expert Advice</span>
                  </h1>
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
                    <motion.button 
                      className="bg-gradient-to-r from-green-600 to-teal-500 text-white px-8 py-4 rounded-lg font-medium text-sm hover:from-green-700 hover:to-teal-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 10px 25px rgba(0, 167, 111, 0.25)",
                        y: -2
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      Our Services
                    </motion.button>
                    <motion.button 
                      className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium text-sm hover:bg-gray-50 transition-all duration-300 border-2 border-green-600 shadow-lg hover:border-green-700"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                        y: -2
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book an Appointment
                    </motion.button>
                  </div>
                </motion.div>
              </div>
              
              {/* Right Content - Enhanced Animated Image */}
              <motion.div 
                style={{ y: y5 }} 
                className="relative"
                {...motionProps}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                  {/* Enhanced animated background */}
                  <motion.div 
                    className="w-full h-full bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 relative"
                    animate={{
                      background: [
                        'linear-gradient(45deg, #f97316, #ef4444, #a855f7)',
                        'linear-gradient(45deg, #ef4444, #a855f7, #f97316)',
                        'linear-gradient(45deg, #a855f7, #f97316, #ef4444)',
                        'linear-gradient(45deg, #f97316, #ef4444, #a855f7)'
                      ]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-800/30 to-orange-800/40"></div>
                    
                    {/* Enhanced animated play button */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                        animate={{ 
                          boxShadow: [
                            '0 0 0 0 rgba(20, 184, 166, 0.7)',
                            '0 0 0 20px rgba(20, 184, 166, 0)',
                            '0 0 0 0 rgba(20, 184, 166, 0)'
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeOut'
                        }}
                      >
                        <svg className="w-8 h-8 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </motion.div>
                    </motion.div>
                    
                    {/* Enhanced floating elements */}
                    <div className="absolute inset-0">
                      <motion.div 
                        className="absolute top-6 left-6 w-20 h-4 bg-white/20 rounded"
                        animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <motion.div 
                        className="absolute top-6 right-6 w-16 h-4 bg-white/20 rounded"
                        animate={{ x: [10, -10, 10], y: [5, -5, 5] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="space-y-3">
                          <motion.div 
                            className="w-4/5 h-3 bg-white/25 rounded"
                            animate={{ opacity: [0.25, 0.5, 0.25] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                          <motion.div 
                            className="w-3/5 h-3 bg-white/25 rounded"
                            animate={{ opacity: [0.25, 0.5, 0.25] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                          />
                          <motion.div 
                            className="w-2/3 h-3 bg-white/25 rounded"
                            animate={{ opacity: [0.25, 0.5, 0.25] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </MotionContainer>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
