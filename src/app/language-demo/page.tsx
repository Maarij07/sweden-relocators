'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import colors from '@/styles/colors.json';
import LanguageDropdown from '@/components/LanguageDropdown';

interface Language {
  code: string;
  name: string;
  flagComponent: React.ReactNode;
}

// Minimalist flag for demo
const MinimalUKFlag = () => (
  <div className="w-4 h-4 rounded-sm overflow-hidden relative border border-gray-300">
    <div className="absolute inset-0 bg-blue-600"></div>
    <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(47% 0, 53% 0, 53% 100%, 47% 100%)' }}></div>
    <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(0 47%, 0 53%, 100% 53%, 100% 47%)' }}></div>
    <div className="absolute inset-0 bg-red-500" style={{ clipPath: 'polygon(49% 0, 51% 0, 51% 100%, 49% 100%)' }}></div>
    <div className="absolute inset-0 bg-red-500" style={{ clipPath: 'polygon(0 49%, 0 51%, 100% 51%, 100% 49%)' }}></div>
  </div>
);

export default function LanguageDemo() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    code: 'en',
    name: 'English',
    flagComponent: <MinimalUKFlag />
  });

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{ 
              color: colors.colors.text.primary,
              fontFamily: 'var(--font-barlow), Barlow, system-ui, sans-serif'
            }}
          >
            Minimalist Language Selector
          </h1>
          <p 
            className="text-lg"
            style={{ color: colors.colors.text.secondary }}
          >
            Clean, simple design inspired by minimalist.cc principles
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Current Design */}
          <div 
            className="bg-white p-8 rounded-2xl border"
            style={{ 
              borderColor: colors.colors.grey[200],
              boxShadow: colors.colors.shadows.z8
            }}
          >
            <h2 
              className="text-xl font-semibold mb-6"
              style={{ color: colors.colors.text.primary }}
            >
              Minimalist Language Dropdown
            </h2>
            
            <div className="flex justify-center">
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 px-4 py-3 border rounded-lg transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor: colors.colors.background.paper,
                    color: colors.colors.text.primary,
                    borderColor: colors.colors.grey[200],
                    fontSize: '14px',
                    minWidth: '160px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.colors.action.hover;
                    e.currentTarget.style.borderColor = colors.colors.grey[300];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.colors.background.paper;
                    e.currentTarget.style.borderColor = colors.colors.grey[200];
                  }}
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                >
                  <div className="flex-shrink-0">
                    {selectedLanguage.flagComponent}
                  </div>
                  <span className="font-medium">{selectedLanguage.name}</span>
                  <motion.div
                    animate={{ 
                      rotate: isLanguageOpen ? 180 : 0 
                    }}
                    transition={{ 
                      duration: 0.15,
                      ease: "easeInOut"
                    }}
                  >
                    <ChevronDownIcon 
                      className="w-3 h-3" 
                      style={{ color: colors.colors.text.secondary }} 
                    />
                  </motion.div>
                </button>
                
                <LanguageDropdown 
                  isOpen={isLanguageOpen}
                  onClose={() => setIsLanguageOpen(false)}
                  selectedLanguage={selectedLanguage}
                  onLanguageSelect={setSelectedLanguage}
                />
              </div>
            </div>
          </div>

          {/* Design Principles */}
          <div 
            className="bg-white p-8 rounded-2xl border"
            style={{ 
              borderColor: colors.colors.grey[200],
              boxShadow: colors.colors.shadows.z8
            }}
          >
            <h2 
              className="text-xl font-semibold mb-6"
              style={{ color: colors.colors.text.primary }}
            >
              Design Principles
            </h2>
            
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div 
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: colors.colors.primary.main }}
                ></div>
                <div>
                  <strong style={{ color: colors.colors.text.primary }}>Clean Typography:</strong>
                  <p style={{ color: colors.colors.text.secondary, fontSize: '14px' }}>
                    14px font size with consistent spacing
                  </p>
                </div>
              </li>
              
              <li className="flex items-start space-x-3">
                <div 
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: colors.colors.primary.main }}
                ></div>
                <div>
                  <strong style={{ color: colors.colors.text.primary }}>Subtle Shadows:</strong>
                  <p style={{ color: colors.colors.text.secondary, fontSize: '14px' }}>
                    Light shadows for depth without distraction
                  </p>
                </div>
              </li>
              
              <li className="flex items-start space-x-3">
                <div 
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: colors.colors.primary.main }}
                ></div>
                <div>
                  <strong style={{ color: colors.colors.text.primary }}>Geometric Flags:</strong>
                  <p style={{ color: colors.colors.text.secondary, fontSize: '14px' }}>
                    Simple rectangular flags with clean borders
                  </p>
                </div>
              </li>
              
              <li className="flex items-start space-x-3">
                <div 
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: colors.colors.primary.main }}
                ></div>
                <div>
                  <strong style={{ color: colors.colors.text.primary }}>Smooth Transitions:</strong>
                  <p style={{ color: colors.colors.text.secondary, fontSize: '14px' }}>
                    120ms animations with subtle easing
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Features */}
        <div 
          className="bg-white p-8 rounded-2xl border"
          style={{ 
            borderColor: colors.colors.grey[200],
            boxShadow: colors.colors.shadows.z8
          }}
        >
          <h2 
            className="text-xl font-semibold mb-6 text-center"
            style={{ color: colors.colors.text.primary }}
          >
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div 
                className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: colors.colors.background.neutral }}
              >
                <span style={{ color: colors.colors.primary.main }}>🎨</span>
              </div>
              <h3 
                className="font-semibold mb-2"
                style={{ color: colors.colors.text.primary }}
              >
                Minimalist Design
              </h3>
              <p 
                style={{ 
                  color: colors.colors.text.secondary,
                  fontSize: '14px'
                }}
              >
                Clean, uncluttered interface that focuses on usability
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: colors.colors.background.neutral }}
              >
                <span style={{ color: colors.colors.primary.main }}>⚡</span>
              </div>
              <h3 
                className="font-semibold mb-2"
                style={{ color: colors.colors.text.primary }}
              >
                Smooth Interactions
              </h3>
              <p 
                style={{ 
                  color: colors.colors.text.secondary,
                  fontSize: '14px'
                }}
              >
                Fluid animations and hover states for better UX
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: colors.colors.background.neutral }}
              >
                <span style={{ color: colors.colors.primary.main }}>🌍</span>
              </div>
              <h3 
                className="font-semibold mb-2"
                style={{ color: colors.colors.text.primary }}
              >
                10 Languages
              </h3>
              <p 
                style={{ 
                  color: colors.colors.text.secondary,
                  fontSize: '14px'
                }}
              >
                Support for multiple languages with clear indicators
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
