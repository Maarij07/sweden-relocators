'use client';

import Navbar from "@/components/Navbar";
import { motion, useTransform } from 'framer-motion';
import { useScrollProgress, useTransformY } from '@/hooks/use-scroll-progress';
import { HeroBackground } from '@/components/hero-background';
import { MotionContainer, MotionViewport } from '@/components/animate';
import { varFade } from '@/components/animate/variants/fade';
import { AnimateText, AnimateGradientText } from '@/components/animate-text';

// Animated component for individual elements
function AnimatedDiv({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={varFade({ distance: 24 }).inUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
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
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Main content */}
      <main className="bg-white">
        {/* Parallax Hero Section */}
        <section 
          ref={scroll.elementRef}
          className="relative overflow-hidden min-h-screen flex items-center justify-center"
        >
          <motion.div
            style={{ opacity }}
            className="w-full h-full flex flex-col relative"
          >
            {/* Animated Background */}
            <HeroBackground />
            
            {/* Hero Content */}
            <div className="flex-1 flex items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl w-full">
                <MotionContainer animate className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left Content */}
                  <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                    {/* Animated subtitle */}
                    <motion.div style={{ y: y1 }}>
                      <AnimatedDiv>
                        <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase leading-relaxed">
                          RELOCATION & IMMIGRATION SOLUTIONS FOR INDIVIDUALS, FAMILIES,<br />
                          EMPLOYEES, AND COMPANIES
                        </p>
                      </AnimatedDiv>
                    </motion.div>
                    
                    {/* Animated title with gradient text */}
                    <motion.div style={{ y: y2 }}>
                      <AnimatedDiv>
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                          Relocate To{' '}
                          <motion.span
                            className="inline-block bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent font-bold"
                            animate={{ 
                              backgroundPosition: ['0% center', '200% center', '0% center']
                            }}
                            transition={{
                              duration: 4,
                              ease: 'linear',
                              repeat: Infinity
                            }}
                            style={{
                              backgroundSize: '200% 200%'
                            }}
                          >
                            Sweden
                          </motion.span>
                          <br />
                          <span className="text-gray-700">With Expert Advice</span>
                        </h1>
                      </AnimatedDiv>
                    </motion.div>
                    
                    {/* Animated description */}
                    <motion.div style={{ y: y3 }}>
                      <AnimatedDiv>
                        <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                          We offer complete relocation services to our worldwide clients including residence & 
                          work permits, home finding, school pre-search, integration, and setting-in services.
                        </p>
                      </AnimatedDiv>
                    </motion.div>
                    
                    {/* Animated buttons */}
                    <motion.div style={{ y: y4 }}>
                      <AnimatedDiv>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                          <motion.button 
                            className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium text-sm hover:bg-gray-800 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Our Services
                          </motion.button>
                          <motion.button 
                            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium text-sm hover:bg-gray-50 transition-all duration-300 border-2 border-gray-900 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Book an Appointment
                          </motion.button>
                        </div>
                      </AnimatedDiv>
                    </motion.div>
                  </div>
                  
                  {/* Right Content - Animated Image */}
                  <motion.div style={{ y: y5 }} className="relative">
                    <AnimatedDiv>
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                        {/* Simulated image background */}
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
                          
                          {/* Animated play button */}
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
                          
                          {/* Floating elements */}
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
                    </AnimatedDiv>
                  </motion.div>
                </MotionContainer>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-gray-50 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-10 -right-10 w-96 h-96 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-15"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-10"
              animate={{
                scale: [1, 1.3, 1],
                x: [-20, 20, -20],
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <motion.div 
            className="max-w-7xl mx-auto text-center relative z-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Header */}
            <div className="mb-16">
              <motion.p 
                className="text-gray-500 font-medium text-sm tracking-wide uppercase mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                WE EMPOWER YOUR SKILLS TO SUCCEED IN SWEDEN!
              </motion.p>
              <motion.h2 
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Legal Relocation Solutions For Worldwide Clients
              </motion.h2>
            </div>
            
            {/* Service Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Family Reunification Card */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden h-full group cursor-pointer"
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1,
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
                      className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <svg 
                        className="w-8 h-8 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow flex flex-col">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-3"
                      whileHover={{ color: "#2563eb" }}
                      transition={{ duration: 0.2 }}
                    >
                      Family Reunification
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      Family reunification is a recognized reason for the immigration of family members to a country where one or more family members already have legal status. If a person or an EU citizen has a permanent residence permit or is an EU long-term resident in Sweden with special protection, then they may have the right to invite their family to that country.
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
                        ease: "easeInOut"
                      }}
                    >
                      View Details
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Visitor Visa Card */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden h-full group cursor-pointer"
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
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
                      className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-600 overflow-hidden flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: -5,
                        boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.svg 
                        className="w-8 h-8 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </motion.svg>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow flex flex-col">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-3"
                      whileHover={{ color: "#a855f7" }}
                      transition={{ duration: 0.2 }}
                    >
                      Visitor Visa
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      For visiting Sweden for a short period you will need a visit visa. Visiting for a short tour, meeting your relatives, visiting friends, or business meetings. You need to consider a short visit to Sweden, which is called the Schengen agreement. Sweden is part of the Schengen agreement. Some non-EU countries because it is also part of the Schengen agreement.
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
                        delay: 0.3
                      }}
                    >
                      View Details
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Work Permit Card */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden h-full group cursor-pointer"
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
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
                      className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-400 to-teal-600 overflow-hidden flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.svg 
                        className="w-8 h-8 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </motion.svg>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow flex flex-col">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-3"
                      whileHover={{ color: "#059669" }}
                      transition={{ duration: 0.2 }}
                    >
                      Work Permit
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Currently, every EU country has a different process for issuing work permits to nationals of non-EU countries. Addressing this issue, the European Commission began work in 1999 on developing an EU-wide process for the issuance of work permits. If you are searching for work in Sweden for a work permit, you must have received an official offer of employment from a Swedish employer.
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
                        delay: 0.6
                      }}
                    >
                      View Details
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Two-Section Content Layout */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* First Section - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
              {/* Image */}
              <div className="relative">
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
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
                    EU RESIDENCE CARD
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Family Reunification
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
                  <p>
                    In the European Union (EU), the right to family reunification is protected by the EU&apos;s Charter of Fundamental Rights. The EU has established a common set of rules for family reunification for third-country nationals (non-EU citizens) who are living in an EU Member State. These rules are set out in the Family Reunification Directive (2003/86/EC).
                  </p>
                  <p>
                    According to the Directive, the EU Member States must facilitate the reunification of third-country nationals with their spouse and minor children in their territory. The EU Member States have some discretion in determining the conditions for family reunification, but in general, the process must be efficient, transparent, and non-discriminatory.
                  </p>
                </div>
                
                <button className="inline-flex items-center text-gray-900 font-medium text-sm hover:text-gray-700 transition-all duration-300 group border border-gray-300 px-3 py-2 rounded-md hover:border-gray-400 hover:shadow-sm">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Second Section - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div className="space-y-6 lg:order-1">
                <div>
                  <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
                    SOFTWARE BASE SOLUTION
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Apply Online Now
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
                  <p>
                    In the European Union (EU), the right to family reunification is protected by the EU&apos;s Charter of Fundamental Rights. The EU has established a common set of rules for family reunification for third-country nationals (non-EU citizens) who are living in an EU Member State. These rules are set out in the Family Reunification Directive (2003/86/EC).
                  </p>
                  <p>
                    According to the Directive, the EU Member States must facilitate the reunification of third-country nationals with their spouse and minor children in their territory. The EU Member States have some discretion in determining the conditions for family reunification, but in general, the process must be efficient, transparent, and non-discriminatory.
                  </p>
                  <p>
                    The third-country national must be legally resident in an EU Member State and must be able to support his or her family members financially and provide them with adequate accommodation. The family members must also not be a threat to public security or public health.
                  </p>
                </div>
                
                <button className="inline-flex items-center text-gray-900 font-medium text-sm hover:text-gray-700 transition-all duration-300 group border border-gray-300 px-3 py-2 rounded-md hover:border-gray-400 hover:shadow-sm">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Image */}
              <div className="relative lg:order-2">
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
                        {/* Interface elements */}
                        <div className="absolute bottom-4 left-4 right-4 h-8 bg-gray-700 rounded flex items-center justify-center">
                          <div className="w-24 h-2 bg-gray-500 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative plant element */}
                  <div className="absolute -top-4 -right-4 w-16 h-20 bg-green-400 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Relocating to Sweden Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* First Section - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
              {/* Image */}
              <div className="relative">
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
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
                    COMPLETE ONLINE PORTAL & APP BASE SOLUTION
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Relocating To Sweden?
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
                  <p>
                    Moving abroad is an exciting yet stressful task. People migrate to different countries because of many reasons. People move to other countries to pursue better job opportunities, better education systems, better living standards, health systems or due to their belief - Faith, Family, Future.
                  </p>
                  <p>
                    We provide a wide range of services to individuals, families, and companies to relocate their employees to Sweden.
                  </p>
                  <p>
                    Visa and Immigration services: We can assist with the application process for various types of visas, including work visas, student visas, and family reunification visas. They can also provide guidance on immigration laws and regulations, and help with the documentation required for the application process.
                  </p>
                </div>
                
                <button className="inline-flex items-center text-gray-900 font-medium text-sm hover:text-gray-700 transition-all duration-300 group border border-gray-300 px-3 py-2 rounded-md hover:border-gray-400 hover:shadow-sm">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Second Section - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
              {/* Content */}
              <div className="space-y-6 lg:order-1">
                <div>
                  <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
                    STEP-BY-STEP ASSISTANCE
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Departure-Arrival Services
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
                  <p>
                    <strong>Housing and accommodation services:</strong> We can help find suitable housing for the individual or family, including rental properties or purchasing a home. They can also provide advice on local neighborhoods and the cost of living in the new country.
                  </p>
                  <p>
                    <strong>School and education services:</strong> For families with children, we assist with the enrollment process for local schools, and provide information on educational systems and curriculums.
                  </p>
                  <p>
                    <strong>Cultural and language services:</strong> We can provide information and resources on the culture, customs, and language of the new country, and may offer language classes or cultural training.
                  </p>
                  <p>
                    <strong>Legal services:</strong> We can help with the legal aspects of the move, such as tax and financial advice, and can provide guidance on local laws and regulations.
                  </p>
                </div>
                
                <button className="inline-flex items-center text-gray-900 font-medium text-sm hover:text-gray-700 transition-all duration-300 group border border-gray-300 px-3 py-2 rounded-md hover:border-gray-400 hover:shadow-sm">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Image */}
              <div className="relative lg:order-2">
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
                        {/* Interface elements */}
                        <div className="absolute bottom-4 left-4 right-4 h-8 bg-gray-700 rounded flex items-center justify-center">
                          <div className="w-24 h-2 bg-gray-500 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative plant element */}
                  <div className="absolute -top-4 -right-4 w-16 h-20 bg-green-400 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
            
            {/* Fifth Section - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
              {/* Image */}
              <div className="relative">
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
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
                    WORK PERMIT & EXTENSIONS
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Applying For Work Permit?
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
                  <p>
                    <strong>We will help you with preparing permit applications</strong>
                  </p>
                  <p>
                    Whether you are a Swedish company or a foreign employer which is facing problems with working permits inside Sweden We have easy solutions for you. You won't be wasting enough time on how to apply for a Swedish work permit. We will do it for you easily and conveniently. You will not have to wait for 12 months in case of incorrect or incomplete applications. Our company will do it for you in good time. Download our app and discuss your case directly with our team.
                  </p>
                </div>
                
                <button className="inline-flex items-center text-gray-900 font-medium text-sm hover:text-gray-700 transition-all duration-300 group border border-gray-300 px-3 py-2 rounded-md hover:border-gray-400 hover:shadow-sm">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Sixth Section - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
              {/* Content */}
              <div className="space-y-6 lg:order-1">
                <div>
                  <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
                    BUSINESS & INVESTMENT SOLUTIONS
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Business In Sweden
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
                  <p>
                    If you are planning to invest in Sweden, you might need to apply for the residence permit
                  </p>
                  <p>
                    We have a complete solution for all your problems while starting a new business or opening a franchise of your existing business in Sweden. Our company will deliver the service of providing the resident permit that will align with your plan easily. You will need a detailed plan for your business, a bank statement that shows that you have enough capital to invest in your business along with other documents. Our company shall you can support your family and yourself while staying in Sweden during the first two years. Don't forget to use our Assessment tool to find out more.
                  </p>
                </div>
                
                <button className="inline-flex items-center text-gray-900 font-medium text-sm hover:text-gray-700 transition-all duration-300 group border border-gray-300 px-3 py-2 rounded-md hover:border-gray-400 hover:shadow-sm">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Image */}
              <div className="relative lg:order-2">
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
                        {/* Interface elements */}
                        <div className="absolute bottom-4 left-4 right-4 h-8 bg-gray-700 rounded flex items-center justify-center">
                          <div className="w-24 h-2 bg-gray-500 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative plant element */}
                  <div className="absolute -top-4 -right-4 w-16 h-20 bg-green-400 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
            
            {/* Seventh Section - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="relative">
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
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
                    EOR & PAYROLL SERVICES
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    EOR & Payroll Services
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
                  <p>
                    Welcome to Sweden Relocators, your reliable partner for seamless global expansion. Our advanced Employer of Record (EOR) services simplify the process of growing your workforce internationally, helping you overcome common challenges with ease.
                  </p>
                  <p>
                    <strong>How Payroll Services Work:</strong><br />
                    Global Expansion Made Simple: With our EOR solutions, we manage all aspects of employment, including compliance with local laws, employee contracts, and payroll, allowing you to focus on your business operations without the administrative burden.
                  </p>
                  <p>
                    <strong>Accurate Salary Processing:</strong><br />
                    We ensure timely and precise salary payments for your employees, considering local tax, benefits, and tax obligations, thereby maintaining payroll accuracy.
                  </p>
                  <p>
                    <strong>Tax Compliance:</strong><br />
                    Our experts are well-versed in the latest tax regulations and ensure that your operations stay compliant, helping you avoid fines and penalties.
                  </p>
                  <p>
                    <strong>Benefit Administration:</strong><br />
                    We take care of administering employee benefits, from healthcare to retirement plans, ensuring that the process is efficient for both you and your employees.
                  </p>
                </div>
                
                <button className="inline-flex items-center text-gray-900 font-medium text-sm hover:text-gray-700 transition-all duration-300 group border border-gray-300 px-3 py-2 rounded-md hover:border-gray-400 hover:shadow-sm">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Experienced Team Provide Relocation Services */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Main Why Choose Us Section */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 lg:mb-28">
              {/* Left Content - Image */}
              <div className="relative lg:order-1">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  {/* Simulated laptop/desktop with video call interface */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
                    <div className="w-4/5 h-4/5 bg-gray-900 rounded-lg relative overflow-hidden shadow-2xl">
                      {/* Screen content simulation - Zoom/Teams interface */}
                      <div className="w-full h-full bg-blue-50 relative">
                        {/* Top bar */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center justify-center">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Video call grid */}
                        <div className="absolute inset-8 top-12 grid grid-cols-3 gap-1">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-md flex items-center justify-center relative overflow-hidden">
                              {i === 0 && (
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-teal-600 font-bold text-sm">S</span>
                                  </div>
                                </div>
                              )}
                              {i !== 0 && (
                                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                                  <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                  </svg>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        
                        {/* Bottom toolbar */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                            </svg>
                          </div>
                          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                            </svg>
                          </div>
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.68.28-.53 0-.96-.43-.96-.96V9C2.54 9 1.5 7.96 1.5 6.5S2.54 4 4 4s2.5 1.04 2.5 2.5c0 .34-.07.66-.18.96C7.83 6.82 9.86 6.5 12 6.5s4.17.32 5.68.96c-.11-.3-.18-.62-.18-.96C17.5 5.04 18.54 4 20 4s2.5 1.04 2.5 2.5S21.46 9 20 9v5.89c0 .53-.43.96-.96.96-.25 0-.5-.1-.68-.28-.79-.73-1.68-1.36-2.66-1.85-.33-.16-.56-.51-.56-.9V9.72C14.15 9.25 12.6 9 12 9z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative plant element */}
                  <div className="absolute -top-4 -right-4 w-20 h-24 bg-green-400 rounded-full opacity-60 blur-sm"></div>
                </div>
              </div>
              
              {/* Right Content */}
              <div className="space-y-6 lg:order-2">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Why Choose Us?
                  </h2>
                  <div className="space-y-1 mb-6">
                    <h3 className="text-lg font-semibold text-teal-600">
                      Experienced Team Provide
                    </h3>
                    <h3 className="text-lg font-semibold text-teal-600">
                      Relocation Services
                    </h3>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    We are here to provide you complete Relocation Services, 
                    including Housing, Eira School, Visa Services, Registration 
                    Social Benefits, Language School, Integration activities etc.
                  </p>
                </div>
                
                {/* Progress Bars */}
                <div className="space-y-4">
                  {/* Business Permit */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-900">Business Permit</span>
                      <span className="text-sm font-bold text-gray-900">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-teal-500 h-2.5 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  
                  {/* Work Permit */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-900">Work Permit</span>
                      <span className="text-sm font-bold text-gray-900">73%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: '73%'}}></div>
                    </div>
                  </div>
                  
                  {/* Family Reunification */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-900">Family Reunification</span>
                      <span className="text-sm font-bold text-gray-900">29%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{width: '29%'}}></div>
                    </div>
                  </div>
                  
                  {/* Study In Sweden */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-900">Study in Sweden</span>
                      <span className="text-sm font-bold text-gray-900">29%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{width: '29%'}}></div>
                    </div>
                  </div>
                </div>
                
                {/* Read More Button */}
                <div className="pt-2">
                  <button className="inline-flex items-center text-gray-900 font-medium text-sm hover:text-gray-700 transition-all duration-300 group border border-gray-300 px-3 py-2 rounded-md hover:border-gray-400 hover:shadow-sm">
                    Read More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Home Loans Section - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 lg:mb-28">
              {/* Content */}
              <div className="space-y-6 lg:order-1">
                <div>
                  <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
                    INSTANT HOUSING SOLUTIONS
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Home Loans &<br />Secure Home Rental Solutions
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-6">
                  <p>
                    The first crucial step when relocating to Sweden is the right home for you and your family. We provide instant housing solutions with our housing partner companies. You can find the apartment or rent out your apartment by providing information on our Housing Solutions page.
                  </p>
                </div>
                
                <button className="inline-flex items-center text-gray-900 font-medium text-sm hover:text-gray-700 transition-all duration-300 group border border-gray-300 px-3 py-2 rounded-md hover:border-gray-400 hover:shadow-sm">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Image */}
              <div className="relative lg:order-2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  {/* Simulated laptop/desktop with video call interface */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
                    <div className="w-4/5 h-4/5 bg-gray-900 rounded-lg relative overflow-hidden shadow-2xl">
                      {/* Screen content simulation - Zoom/Teams interface */}
                      <div className="w-full h-full bg-blue-50 relative">
                        {/* Top bar */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center justify-center">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Video call grid */}
                        <div className="absolute inset-8 top-12 grid grid-cols-3 gap-1">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-md flex items-center justify-center relative overflow-hidden">
                              {i === 0 && (
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-teal-600 font-bold text-sm">S</span>
                                  </div>
                                </div>
                              )}
                              {i !== 0 && (
                                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                                  <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                  </svg>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        
                        {/* Bottom toolbar */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                            </svg>
                          </div>
                          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                            </svg>
                          </div>
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.68.28-.53 0-.96-.43-.96-.96V9C2.54 9 1.5 7.96 1.5 6.5S2.54 4 4 4s2.5 1.04 2.5 2.5c0 .34-.07.66-.18.96C7.83 6.82 9.86 6.5 12 6.5s4.17.32 5.68.96c-.11-.3-.18-.62-.18-.96C17.5 5.04 18.54 4 20 4s2.5 1.04 2.5 2.5S21.46 9 20 9v5.89c0 .53-.43.96-.96.96-.25 0-.5-.1-.68-.28-.79-.73-1.68-1.36-2.66-1.85-.33-.16-.56-.51-.56-.9V9.72C14.15 9.25 12.6 9 12 9z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative plant element */}
                  <div className="absolute -top-4 -right-4 w-20 h-24 bg-green-400 rounded-full opacity-60 blur-sm"></div>
                </div>
              </div>
            </div>
            
            {/* Legal Services Section - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 lg:mb-28">
              {/* Image */}
              <div className="relative lg:order-1">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  {/* Simulated laptop/desktop with video call interface */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
                    <div className="w-4/5 h-4/5 bg-gray-900 rounded-lg relative overflow-hidden shadow-2xl">
                      {/* Screen content simulation - Zoom/Teams interface */}
                      <div className="w-full h-full bg-blue-50 relative">
                        {/* Top bar */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center justify-center">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Video call grid */}
                        <div className="absolute inset-8 top-12 grid grid-cols-3 gap-1">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-md flex items-center justify-center relative overflow-hidden">
                              {i === 0 && (
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-teal-600 font-bold text-sm">S</span>
                                  </div>
                                </div>
                              )}
                              {i !== 0 && (
                                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                                  <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                  </svg>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        
                        {/* Bottom toolbar */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                            </svg>
                          </div>
                          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                            </svg>
                          </div>
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.68.28-.53 0-.96-.43-.96-.96V9C2.54 9 1.5 7.96 1.5 6.5S2.54 4 4 4s2.5 1.04 2.5 2.5c0 .34-.07.66-.18.96C7.83 6.82 9.86 6.5 12 6.5s4.17.32 5.68.96c-.11-.3-.18-.62-.18-.96C17.5 5.04 18.54 4 20 4s2.5 1.04 2.5 2.5S21.46 9 20 9v5.89c0 .53-.43.96-.96.96-.25 0-.5-.1-.68-.28-.79-.73-1.68-1.36-2.66-1.85-.33-.16-.56-.51-.56-.9V9.72C14.15 9.25 12.6 9 12 9z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative plant element */}
                  <div className="absolute -top-4 -right-4 w-20 h-24 bg-green-400 rounded-full opacity-60 blur-sm"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6 lg:order-2">
                <div>
                  <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
                    PROFESSIONAL LEGAL SERVICES BY LAWYERS
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    We Can Provide Lawyers For Legal Issues
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-6">
                  <p>
                    The universe in which people live is full of actions and decisions considered as right and wrong. Legal services are defined as services related to government laws or legal issues such as providing legal advice, filing a case, defending against criminal charges, etc., which lawyers provided. We are working with different individuals lawyers and law firms where they can provide you solutions to your ongoing issues.
                  </p>
                </div>
                
                <button className="inline-flex items-center text-gray-900 font-medium text-sm hover:text-gray-700 transition-all duration-300 group border border-gray-300 px-3 py-2 rounded-md hover:border-gray-400 hover:shadow-sm">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* AU Pair Section - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div className="space-y-6 lg:order-1">
                <div>
                  <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
                    AU PAIR SERVICES FOR NORDIC FAMILIES
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Solutions For Host Families &<br />AU Pair
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-6">
                  <p>
                    An Au Pair is a young person living abroad with a Host Family and taking care of the children for accommodation and pocket money.
                  </p>
                  <p>
                    The Au Pair program is an international cultural exchange that gives the possibility to young people to spend some time abroad, learn more about a different culture, improve their skills in a foreign language in exchange for help with duties related to childcare. The term "au pair" from French means "on equal terms", signifying that Au Pair and Host Family treat each other as equal.
                  </p>
                </div>
                
                <button className="inline-flex items-center text-gray-900 font-medium text-sm hover:text-gray-700 transition-all duration-300 group border border-gray-300 px-3 py-2 rounded-md hover:border-gray-400 hover:shadow-sm">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Image */}
              <div className="relative lg:order-2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  {/* Simulated laptop/desktop with video call interface */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
                    <div className="w-4/5 h-4/5 bg-gray-900 rounded-lg relative overflow-hidden shadow-2xl">
                      {/* Screen content simulation - Zoom/Teams interface */}
                      <div className="w-full h-full bg-blue-50 relative">
                        {/* Top bar */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center justify-center">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Video call grid */}
                        <div className="absolute inset-8 top-12 grid grid-cols-3 gap-1">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-md flex items-center justify-center relative overflow-hidden">
                              {i === 0 && (
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-teal-600 font-bold text-sm">S</span>
                                  </div>
                                </div>
                              )}
                              {i !== 0 && (
                                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                                  <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                  </svg>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        
                        {/* Bottom toolbar */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                            </svg>
                          </div>
                          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                            </svg>
                          </div>
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.68.28-.53 0-.96-.43-.96-.96V9C2.54 9 1.5 7.96 1.5 6.5S2.54 4 4 4s2.5 1.04 2.5 2.5c0 .34-.07.66-.18.96C7.83 6.82 9.86 6.5 12 6.5s4.17.32 5.68.96c-.11-.3-.18-.62-.18-.96C17.5 5.04 18.54 4 20 4s2.5 1.04 2.5 2.5S21.46 9 20 9v5.89c0 .53-.43.96-.96.96-.25 0-.5-.1-.68-.28-.79-.73-1.68-1.36-2.66-1.85-.33-.16-.56-.51-.56-.9V9.72C14.15 9.25 12.6 9 12 9z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative plant element */}
                  <div className="absolute -top-4 -right-4 w-20 h-24 bg-green-400 rounded-full opacity-60 blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            {/* Header with Animated Text */}
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 font-medium text-xs lg:text-sm tracking-wide uppercase mb-3">
                  YOUR NEXT VISA APPLICATION IS ONLINE CLICK!
                </p>
              </motion.div>
              
              <AnimateText
                text="We Prepare Visa Applications & Send Worldwide Via DHL"
                component="h2"
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                variant="character"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 text-base">
                  Submit to Embassy or Nearest FedEx Office
                </p>
              </motion.div>
            </div>
            
            {/* Process Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Sign Up Card */}
              <motion.div 
                className="bg-green-200 rounded-2xl p-6 text-left relative overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
              >
                {/* Green icon badge */}
                <motion.div 
                  className="absolute top-6 left-6 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </motion.div>
                
                
                <motion.div 
                  className="pt-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3"
                    whileHover={{ color: '#059669' }}
                  >
                    Sign Up
                  </motion.h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    You can signup on our website and book an appointment or write us in Message section on My Page!
                  </p>
                </motion.div>
              </motion.div>
              
              {/* Upload Documents Card */}
              <motion.div 
                className="bg-pink-200 rounded-2xl p-6 text-left relative overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: -5,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
              >
                {/* Pink icon badge */}
                <motion.div 
                  className="absolute top-6 left-6 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </motion.div>
                
                
                <motion.div 
                  className="pt-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3"
                    whileHover={{ color: '#be185d' }}
                  >
                    Upload Documents
                  </motion.h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    In next step go to My Page and upload all necessary documents.
                  </p>
                </motion.div>
              </motion.div>
              
              {/* File Preparation Process Card */}
              <motion.div 
                className="bg-yellow-200 rounded-2xl p-6 text-left relative overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
              >
                {/* Yellow icon badge */}
                <motion.div 
                  className="absolute top-6 left-6 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                  </svg>
                </motion.div>
                
                
                <motion.div 
                  className="pt-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3"
                    whileHover={{ color: '#ca8a04' }}
                  >
                    File Preparation Process
                  </motion.h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    One of our experienced Consultant will contact you and prepare your visa file and book your appointment at embassy or Garry&apos;s/FedEx office.
                  </p>
                </motion.div>
              </motion.div>
              
              {/* Download or DHL Card */}
              <motion.div 
                className="bg-blue-200 rounded-2xl p-6 text-left relative overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: -5,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
              >
                {/* Blue icon badge */}
                <motion.div 
                  className="absolute top-6 left-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M5,20H19V18H5M19,9H15L13,7H9V9H19M19,3H5C3.89,3 3,3.89 3,5V15A2,2 0 0,0 5,17H19A2,2 0 0,0 21,15V5C21,3.89 20.1,3 19,3Z"/>
                  </svg>
                </motion.div>
                 
                <motion.div 
                  className="pt-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3"
                    whileHover={{ color: '#1d4ed8' }}
                  >
                    Download or DHL
                  </motion.h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Once file is completed we will upload on your portal and send you via DHL. All you need to do is to submit to closest Embassy or Garry&apos;s Visa Services office.
                  </p>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Apply Now Button with Animations */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium text-sm transition-all duration-300 inline-flex items-center relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ 
                  scale: 0.95,
                  y: 0
                }}
                animate={{
                  boxShadow: [
                    "0 4px 15px rgba(0, 0, 0, 0.1)",
                    "0 6px 20px rgba(0, 0, 0, 0.15)",
                    "0 4px 15px rgba(0, 0, 0, 0.1)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Gradient overlay animation */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Button text with relative z-index */}
                <motion.span 
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  Apply Now
                </motion.span>
                
                {/* Animated arrow icon */}
                <motion.svg 
                  className="w-4 h-4 ml-2 relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ 
                    x: 3,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  animate={{
                    x: [0, 2, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
                
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-white opacity-0"
                  animate={{
                    opacity: [0, 0.1, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Blog Corner Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                BLOG CORNER
              </motion.p>
              <motion.h2 
                className="text-3xl lg:text-4xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                In Your Inbox News
              </motion.h2>
            </motion.div>
            
            {/* News Section */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-lg font-semibold text-gray-900 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                News
              </motion.h3>
              
              {/* Animated News Items */}
              <div className="divide-y divide-gray-100">
                {/* News Item 1 */}
                <motion.div 
                  className="flex items-start gap-4 group cursor-pointer py-6 first:pt-0 relative"
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 120 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 3,
                    x: 8,
                    transition: { duration: 0.3, type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center relative"
                      whileHover={{
                        background: "linear-gradient(135deg, #f97316, #dc2626, #ea580c)"
                      }}
                    >
                      <motion.svg 
                        className="w-8 h-8 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ 
                          rotate: [0, 5, -5, 0] 
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="flex-1 min-w-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <motion.h4 
                        className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2"
                        whileHover={{ color: '#f97316' }}
                      >
                        The Future of Renewable Energy: Innovations and Challenges Ahead
                      </motion.h4>
                      <motion.span 
                        className="text-xs text-gray-500 whitespace-nowrap ml-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                      >
                        12 Jun 2022
                      </motion.span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.
                    </p>
                  </motion.div>
                </motion.div>
                
                {/* News Item 2 */}
                <motion.div 
                  className="flex items-start gap-4 group cursor-pointer py-6"
                  initial={{ opacity: 0, scale: 0.85, rotateY: 12 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 110 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: -4,
                    x: 10,
                    transition: { duration: 0.3, type: "spring", stiffness: 280 }
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: -8,
                      transition: { duration: 0.3, type: "spring", stiffness: 350 }
                    }}
                  >
                    <motion.div 
                      className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center"
                      whileHover={{
                        background: "linear-gradient(135deg, #a855f7, #3b82f6, #8b5cf6)"
                      }}
                    >
                      <motion.svg 
                        className="w-8 h-8 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ 
                          scale: [1, 1.1, 1] 
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.2,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="flex-1 min-w-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <motion.h4 
                        className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2"
                        whileHover={{ color: '#8b5cf6' }}
                      >
                        Exploring the Impact of Artificial Intelligence on Modern Healthcare
                      </motion.h4>
                      <motion.span 
                        className="text-xs text-gray-500 whitespace-nowrap ml-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                      >
                        11 Feb 2022
                      </motion.span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The aroma of freshly brewed coffee filled the air, awakening my senses.
                    </p>
                  </motion.div>
                </motion.div>
                
                {/* News Item 3 */}
                <motion.div 
                  className="flex items-start gap-4 group cursor-pointer py-6"
                  initial={{ opacity: 0, scale: 0.88, rotateY: -8 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 130 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.04,
                    rotateY: 6,
                    x: 12,
                    transition: { duration: 0.3, type: "spring", stiffness: 320 }
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center"
                      whileHover={{
                        background: "linear-gradient(135deg, #fbbf24, #f97316, #fb923c)"
                      }}
                    >
                      <motion.svg 
                        className="w-8 h-8 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ 
                          rotate: [0, -5, 5, 0] 
                        }}
                        transition={{ 
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: -360,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="flex-1 min-w-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <motion.h4 
                        className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2"
                        whileHover={{ color: '#f97316' }}
                      >
                        Climate Change and Its Effects on Global Food Security
                      </motion.h4>
                      <motion.span 
                        className="text-xs text-gray-500 whitespace-nowrap ml-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                      >
                        10 Sep 2022
                      </motion.span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      She eagerly opened the gift, her eyes sparkling with excitement.
                    </p>
                  </motion.div>
                </motion.div>
                
                {/* News Item 4 */}
                <motion.div 
                  className="flex items-start gap-4 group cursor-pointer py-6"
                  initial={{ opacity: 0, scale: 0.92, rotateY: 10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.75, delay: 0.4, type: "spring", stiffness: 125 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.01,
                    rotateY: -2,
                    x: 6,
                    transition: { duration: 0.3, type: "spring", stiffness: 310 }
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center"
                      whileHover={{
                        background: "linear-gradient(135deg, #10b981, #3b82f6, #06b6d4)"
                      }}
                    >
                      <motion.svg 
                        className="w-8 h-8 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ 
                          y: [0, -3, 0, 3, 0] 
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.2,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="flex-1 min-w-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <motion.h4 
                        className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2"
                        whileHover={{ color: '#10b981' }}
                      >
                        The Rise of Remote Work: Benefits Challenges and Future Trends
                      </motion.h4>
                      <motion.span 
                        className="text-xs text-gray-500 whitespace-nowrap ml-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                      >
                        09 Aug 2022
                      </motion.span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The old oak tree stood tall and majestic, its branches swaying gently in the breeze.
                    </p>
                  </motion.div>
                </motion.div>
                
                {/* News Item 5 */}
                <motion.div 
                  className="flex items-start gap-4 group cursor-pointer py-6"
                  initial={{ opacity: 0, scale: 0.94, rotateY: -12 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 115 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 8,
                    x: 14,
                    transition: { duration: 0.3, type: "spring", stiffness: 290 }
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center"
                      whileHover={{
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)"
                      }}
                    >
                      <motion.svg 
                        className="w-8 h-8 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ 
                          scale: [1, 0.9, 1.1, 1] 
                        }}
                        transition={{ 
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                        whileHover={{ 
                          rotate: -360,
                          scale: 1.2,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="flex-1 min-w-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <motion.h4 
                        className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2"
                        whileHover={{ color: '#8b5cf6' }}
                      >
                        Understanding Blockchain Technology: Beyond Cryptocurrency
                      </motion.h4>
                      <motion.span 
                        className="text-xs text-gray-500 whitespace-nowrap ml-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                      >
                        05 Apr 2022
                      </motion.span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The children giggled with joy as they ran through the sprinklers on a hot summer day.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Animated View All Link */}
            <motion.div 
              className="text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="inline-flex items-center text-gray-900 font-bold text-sm hover:text-gray-700 transition-colors group relative"
                whileHover={{ 
                  scale: 1.05,
                  x: 5
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View all</span>
                <motion.svg 
                  className="w-4 h-4 ml-2 relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{
                    x: [0, 3, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    x: 8,
                    transition: { duration: 0.2 }
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
                
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gray-900"
                  initial={{ width: 0 }}
                  whileHover={{ width: "70%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>
        </section>


        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 lg:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Logo and Description */}
              <div className="lg:col-span-1">
                {/* Logo */}
                <div className="flex items-center space-x-2 mb-4">
                  {/* Green Logo Icon */}
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  We are Relocation Services Provider Company which deals with all sort of legal relocation to Sweden. We offers quality guidance, effective advice and provides information to our clients to settle down to the country.
                </p>
                
                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Useful Links */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-4 tracking-wider">USEFUL LINKS</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">About us</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Contact us</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Services</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Gallery</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Blogs</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">FAQS</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Testimonials</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Terms and Condition</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
              
              {/* Legal */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-4 tracking-wider">LEGAL</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Terms and condition</a></li>
                  <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Privacy policy</a></li>
                </ul>
              </div>
              
              {/* Contact */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-4 tracking-wider">CONTACT</h3>
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm">info@swedenrelocators.se</p>
                  <p className="text-gray-300 text-sm">+46 723 276 276</p>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <p className="underline">Amiralsgatan 86E 214 37</p>
                    <p>Malmö, Sweden</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-gray-700 mt-12 pt-6">
              <p className="text-gray-400 text-sm">© All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
