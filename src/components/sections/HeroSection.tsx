'use client';

import { MotionContainer } from '@/components/animate';

const motionProps = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden min-h-screen lg:h-screen lg:max-h-screen flex items-center justify-center pt-24 lg:pt-28 bg-white"
    >
      {/* Gradient Wave Background from Bottom */}
      <div
        className="absolute pointer-events-none bottom-0 left-0 right-0"
        style={{
          width: '100%',
          height: '500px',
          opacity: 1,
          background: 'linear-gradient(180deg, rgba(13, 94, 175, 0) 0%, rgba(0, 167, 111, 0.15) 40%, rgba(0, 167, 111, 0.25) 100%)',
          borderRadius: '0 0 100% 100% / 0 0 25% 25%',
          zIndex: 1
        }}
      />
      
      <div className="w-full h-full flex flex-col relative transition-opacity duration-300">
        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-7xl w-full">
            <MotionContainer animate className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-3 space-y-6 lg:space-y-8 text-center lg:text-left relative z-10">
                {/* Title */}
                <div {...motionProps}>
                  <h1 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                    Relocate To Sweden
                    <br />
                    <span className="text-blue-600">With an Expert Advise</span>
                  </h1>
                </div>
                
                {/* Description */}
                <div {...motionProps}>
                  <p className="text-gray-600 text-sm lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                    We provide comprehensive relocation and immigration support for individuals, employees, and companies covering residence permits, housing, school placements, and integration all seamlessly managed through our secure web and mobile platform across Sweden, Denmark, and the wider Nordic region.
                  </p>
                </div>
                
                {/* Buttons */}
                <div {...motionProps}>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                    <button 
                      className="bg-black text-white px-8 py-3 rounded font-medium text-sm flex items-center justify-center transition-colors duration-200 hover:bg-gray-800"
                    >
                      Our Services
                    </button>
                    <button 
                      className="bg-black text-white px-8 py-3 rounded font-medium text-sm flex items-center justify-center transition-colors duration-200 hover:bg-gray-800"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Hero Video */}
              <div 
                className="lg:col-span-2 relative z-10"
                {...motionProps}
              >
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-xl border border-gray-200">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    playsInline
                    controls
                    poster="/sweden-logo.jpg"
                  >
                    <source src="https://swedenrelocators.se/videos/hero_video.mp4" type="video/mp4" />
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative">
                      <div className="text-center space-y-4">
                        <div 
                          className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 cursor-pointer mx-auto"
                        >
                          <svg className="w-8 h-8 text-gray-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <div className="space-y-2">
                          <p className="text-gray-600 font-medium text-sm">Video not supported</p>
                          <p className="text-gray-400 text-xs">Please update your browser</p>
                        </div>
                      </div>
                    </div>
                  </video>
                  
                  {/* Optional overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                </div>
              </div>
            </MotionContainer>
          </div>
        </div>
      </div>
    </section>
  );
}