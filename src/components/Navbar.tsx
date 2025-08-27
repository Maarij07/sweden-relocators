'use client';

import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import colors from '@/styles/colors.json';
import ServicesDropdown from './ServicesDropdown';
import HousingDropdown from './HousingDropdown';
import AssessmentDropdown from './AssessmentDropdown';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHousingOpen, setIsHousingOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.services-dropdown') && !target.closest('.services-button')) {
        setIsServicesOpen(false);
      }
      if (!target.closest('.housing-dropdown') && !target.closest('.housing-button')) {
        setIsHousingOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md"
      style={{
        backgroundColor: isScrolled 
          ? '#ffffffcc' // white with 80% opacity
          : '#ffffff' // pure white
      }}
    >
      <div className="px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-1.5">
          {/* EU Stars Circle */}
          <div className="relative w-8 h-8">
            <div 
              className="absolute inset-0 border-2 rounded-full"
              style={{borderColor: colors.colors.primary.yellow[400]}}
            ></div>
            {/* Stars around the circle */}
            <div className="absolute inset-1 flex items-center justify-center">
              <div 
                style={{fontSize: '9px', color: colors.colors.primary.yellow[400]}}
              >★★★</div>
            </div>
          </div>
          <div className="text-base font-bold" style={{color: '#374151'}}>
            SWEDEN <span style={{color: colors.colors.primary.yellow[400]}}>RELOCATORS</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="#" 
            className="transition-colors font-medium text-sm"
            style={{
              color: '#374151'
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.colors.primary.yellow[400]}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#374151'}
          >
            NEW IN SWEDEN
          </a>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className="services-button flex items-center space-x-1 transition-colors font-medium text-sm"
              style={{color: '#000000'}}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.colors.primary.yellow[400]}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#000000'}
            >
              <span>SERVICES</span>
              <ChevronDownIcon className="w-3 h-3" style={{color: '#000000'}} />
            </button>
            <div className="services-dropdown">
              <ServicesDropdown 
                isOpen={isServicesOpen}
                onClose={() => setIsServicesOpen(false)}
              />
            </div>
          </div>

          <a 
            href="#" 
            className="transition-colors font-medium text-sm"
            style={{color: '#374151'}}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.colors.primary.yellow[400]}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#374151'}
          >
            ABOUT
          </a>

          {/* Housing Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHousingOpen(true)}
            onMouseLeave={() => setIsHousingOpen(false)}
          >
            <button
              className="housing-button flex items-center space-x-1 transition-colors font-medium text-sm"
              style={{color: '#000000'}}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.colors.primary.yellow[400]}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#000000'}
            >
              <span>HOUSING</span>
              <ChevronDownIcon className="w-3 h-3" style={{color: '#000000'}} />
            </button>
            <div className="housing-dropdown">
              <HousingDropdown 
                isOpen={isHousingOpen}
                onClose={() => setIsHousingOpen(false)}
              />
            </div>
          </div>

          {/* Assessment Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsAssessmentOpen(true)}
            onMouseLeave={() => setIsAssessmentOpen(false)}
          >
            <button
              className="assessment-button flex items-center space-x-1 transition-colors font-medium text-sm"
              style={{color: '#000000'}}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.colors.primary.yellow[400]}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#000000'}
            >
              <span>ASSESSMENT</span>
              <ChevronDownIcon className="w-3 h-3" style={{color: '#000000'}} />
            </button>
            <div className="assessment-dropdown">
              <AssessmentDropdown 
                isOpen={isAssessmentOpen}
                onClose={() => setIsAssessmentOpen(false)}
              />
            </div>
          </div>

          <a 
            href="#" 
            className="transition-colors font-medium text-sm"
            style={{color: '#374151'}}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.colors.primary.yellow[400]}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#374151'}
          >
            CONTACT
          </a>
        </div>

        {/* Right side with language selector and buttons */}
        <div className="flex items-center space-x-3">
          {/* Language Selector */}
          <div 
            className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg transition-colors duration-200 cursor-pointer"
            style={{
              backgroundColor: '#f9fafb',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: '#d1d5db'
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.borderColor = colors.colors.primary.yellow[400]}
            onMouseLeave={(e) => (e.target as HTMLElement).style.borderColor = '#d1d5db'}
          >
            <div className="flex items-center space-x-1.5">
              <div 
                className="w-3.5 h-2.5 relative rounded-sm"
                style={{
                  background: `linear-gradient(to bottom, ${colors.colors.accent.red[500]}, ${colors.colors.accent.red[600]})`
                }}
              >
                <div 
                  className="w-full h-0.5 absolute top-0.5 rounded-sm"
                  style={{backgroundColor: colors.colors.text.white}}
                ></div>
              </div>
              <span 
                className="text-xs font-medium"
                style={{color: '#374151'}}
              >English</span>
              <ChevronDownIcon 
                className="w-3 h-3" 
                style={{color: '#6b7280'}}
              />
            </div>
          </div>
          
          <button 
            className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium text-xs transition-all duration-300 inline-flex items-center relative overflow-hidden group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            onMouseEnter={(e) => {
              const gradientOverlay = (e.target as HTMLElement).querySelector('.gradient-overlay') as HTMLElement;
              if (gradientOverlay) {
                gradientOverlay.style.opacity = '1';
                gradientOverlay.style.transform = 'translateX(0%)';
              }
            }}
            onMouseLeave={(e) => {
              const gradientOverlay = (e.target as HTMLElement).querySelector('.gradient-overlay') as HTMLElement;
              if (gradientOverlay) {
                gradientOverlay.style.opacity = '0';
                gradientOverlay.style.transform = 'translateX(-100%)';
              }
            }}
          >
            {/* Gradient overlay animation */}
            <div 
              className="gradient-overlay absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 transition-all duration-300"
              style={{ transform: 'translateX(-100%)' }}
            />
            
            {/* Button text with relative z-index */}
            <span className="relative z-10">
              Book An Appointment
            </span>
          </button>
          
          <button 
            className="font-medium text-xs px-3 py-1.5 rounded-lg transition-colors duration-200"
            style={{
              color: '#374151',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: '#d1d5db'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = colors.colors.primary.yellow[400];
              (e.target as HTMLElement).style.borderColor = colors.colors.primary.yellow[400];
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = '#374151';
              (e.target as HTMLElement).style.borderColor = '#d1d5db';
            }}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
