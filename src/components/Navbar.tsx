'use client';

import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import colors from '@/styles/colors.json';
import ServicesDropdown from './ServicesDropdown';
import HousingDropdown from './HousingDropdown';
import AssessmentDropdown from './AssessmentDropdown';
import LanguageDropdown from './LanguageDropdown';

interface Language {
  code: string;
  name: string;
  flagComponent: React.ReactNode;
}

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHousingOpen, setIsHousingOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Minimalist flags for navbar button - consistent sizing
  const createNavbarFlag = (flagType: string) => {
    const flagProps = {
      className: "w-3.5 h-3.5 rounded-sm overflow-hidden relative border border-gray-300"
    };
    
    switch(flagType) {
      case 'en':
        return (
          <div {...flagProps}>
            <div className="absolute inset-0 bg-blue-600"></div>
            <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(47% 0, 53% 0, 53% 100%, 47% 100%)' }}></div>
            <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(0 47%, 0 53%, 100% 53%, 100% 47%)' }}></div>
            <div className="absolute inset-0 bg-red-500" style={{ clipPath: 'polygon(49% 0, 51% 0, 51% 100%, 49% 100%)' }}></div>
            <div className="absolute inset-0 bg-red-500" style={{ clipPath: 'polygon(0 49%, 0 51%, 100% 51%, 100% 49%)' }}></div>
          </div>
        );
      case 'de':
        return (
          <div {...flagProps}>
            <div className="h-1 bg-black"></div>
            <div className="h-1.5 bg-red-600"></div>
            <div className="h-1 bg-yellow-400"></div>
          </div>
        );
      case 'da':
        return (
          <div {...flagProps}>
            <div className="absolute inset-0 bg-red-600"></div>
            <div className="absolute left-1 top-0 w-0.5 h-full bg-white"></div>
            <div className="absolute left-0 top-1.5 w-full h-0.5 bg-white"></div>
          </div>
        );
      case 'sv':
        return (
          <div {...flagProps}>
            <div className="absolute inset-0 bg-blue-500"></div>
            <div className="absolute left-1 top-0 w-0.5 h-full bg-yellow-400"></div>
            <div className="absolute left-0 top-1.5 w-full h-0.5 bg-yellow-400"></div>
          </div>
        );
      case 'es':
        return (
          <div {...flagProps}>
            <div className="h-0.5 bg-red-600"></div>
            <div className="h-2.5 bg-yellow-400"></div>
            <div className="h-0.5 bg-red-600"></div>
          </div>
        );
      case 'ar':
        return (
          <div {...flagProps}>
            <div className="h-1 bg-green-600"></div>
            <div className="h-1.5 bg-white"></div>
            <div className="h-1 bg-black"></div>
          </div>
        );
      case 'fa':
        return (
          <div {...flagProps}>
            <div className="h-1 bg-green-600"></div>
            <div className="h-1.5 bg-white"></div>
            <div className="h-1 bg-red-600"></div>
          </div>
        );
      case 'el':
        return (
          <div {...flagProps}>
            <div className="absolute inset-0 bg-white">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-0.5 bg-blue-600" style={{ marginTop: `${i * 3.5}px` }}></div>
              ))}
            </div>
            <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-blue-600"></div>
          </div>
        );
      case 'ur':
        return (
          <div {...flagProps}>
            <div className="absolute inset-0 bg-green-600"></div>
            <div className="absolute left-0 top-0 w-1 h-full bg-white"></div>
            <div className="absolute left-0.5 top-1 w-1.5 h-1.5 flex items-center justify-center text-white text-xs">☪</div>
          </div>
        );
      case 'pa':
        return (
          <div {...flagProps}>
            <div className="h-1 bg-orange-500"></div>
            <div className="h-1.5 bg-white"></div>
            <div className="h-1 bg-green-600"></div>
          </div>
        );
      default:
        return createNavbarFlag('en');
    }
  };

  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    code: 'en',
    name: 'English',
    flagComponent: createNavbarFlag('en')
  });
  
  // Handle language selection to update navbar flag
  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage({
      ...language,
      flagComponent: createNavbarFlag(language.code)
    });
  };

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
      if (!target.closest('.assessment-dropdown') && !target.closest('.assessment-button')) {
        setIsAssessmentOpen(false);
      }
      if (!target.closest('.language-dropdown') && !target.closest('.language-button')) {
        setIsLanguageOpen(false);
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
      <div className="max-w-7xl mx-auto pl-0 pr-4 sm:pr-6 py-4 flex items-center justify-between" style={{ paddingRight: '1.5rem' }}>
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/sweden-logo.jpg?v=2" 
            alt="Sweden Relocators" 
            className="h-16 w-auto object-contain"
            loading="eager"
            style={{
              maxHeight: '64px',
              height: 'auto',
              imageRendering: 'crisp-edges',
              filter: 'brightness(1.05) contrast(1.08) saturate(1.1)', // Enhanced for better visibility
              border: 'none',
              boxShadow: 'none',
              outline: 'none',
              background: 'transparent'
            }}
          />
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="#" 
            className="nav-link font-medium text-sm"
          >
            NEW IN SWEDEN
          </a>
          
          {/* Services Dropdown */}
          <div 
            className="relative nav-dropdown-container"
            onMouseEnter={() => {
              setIsServicesOpen(true);
              setIsHousingOpen(false);
              setIsAssessmentOpen(false);
            }}
            onMouseLeave={() => {
              setIsServicesOpen(false);
            }}
          >
            <button
              className="services-button nav-dropdown-button flex items-center space-x-1 font-medium text-sm cursor-pointer"
            >
              <span>SERVICES</span>
              <motion.div
                animate={{ 
                  rotate: isServicesOpen ? 180 : 0 
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeInOut"
                }}
              >
                <ChevronDownIcon className="w-3 h-3" />
              </motion.div>
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
            className="nav-link font-medium text-sm"
          >
            ABOUT
          </a>

          {/* Housing Dropdown */}
          <div 
            className="relative nav-dropdown-container"
            onMouseEnter={() => {
              setIsHousingOpen(true);
              setIsServicesOpen(false);
              setIsAssessmentOpen(false);
            }}
            onMouseLeave={() => {
              setIsHousingOpen(false);
            }}
          >
            <button
              className="housing-button nav-dropdown-button flex items-center space-x-1 font-medium text-sm cursor-pointer"
            >
              <span>HOUSING</span>
              <motion.div
                animate={{ 
                  rotate: isHousingOpen ? 180 : 0 
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeInOut"
                }}
              >
                <ChevronDownIcon className="w-3 h-3" />
              </motion.div>
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
            className="relative nav-dropdown-container"
            onMouseEnter={() => {
              setIsAssessmentOpen(true);
              setIsServicesOpen(false);
              setIsHousingOpen(false);
            }}
            onMouseLeave={() => {
              setIsAssessmentOpen(false);
            }}
          >
            <button
              className="assessment-button nav-dropdown-button flex items-center space-x-1 font-medium text-sm cursor-pointer"
            >
              <span>ASSESSMENT</span>
              <motion.div
                animate={{ 
                  rotate: isAssessmentOpen ? 180 : 0 
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeInOut"
                }}
              >
                <ChevronDownIcon className="w-3 h-3" />
              </motion.div>
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
            className="nav-link font-medium text-sm"
          >
            CONTACT
          </a>
        </div>

        {/* Right side with language selector and buttons */}
        <div className="flex items-center space-x-3">
          {/* Language Selector */}
          <div className="relative">
            <button 
              className="language-button flex items-center justify-center px-2.5 py-1.5 border rounded-lg transition-all duration-200 cursor-pointer font-medium text-xs h-9"
              style={{
                backgroundColor: colors.colors.background.paper,
                color: colors.colors.text.primary,
                borderColor: colors.colors.grey[200],
                borderWidth: '1px',
                borderStyle: 'solid',
                width: '40px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.colors.action.hover;
                e.currentTarget.style.borderColor = colors.colors.grey[300];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.colors.background.paper;
                e.currentTarget.style.borderColor = colors.colors.grey[200];
              }}
              onClick={() => {
                setIsLanguageOpen(!isLanguageOpen);
                setIsServicesOpen(false);
                setIsHousingOpen(false);
                setIsAssessmentOpen(false);
              }}
              title={`Selected Language: ${selectedLanguage.name}`}
            >
              <div className="flex-shrink-0">
                {selectedLanguage.flagComponent}
              </div>
            </button>
            <div className="language-dropdown">
              <LanguageDropdown 
                isOpen={isLanguageOpen}
                onClose={() => setIsLanguageOpen(false)}
                selectedLanguage={selectedLanguage}
                onLanguageSelect={handleLanguageSelect}
              />
            </div>
          </div>
          
          <button 
            className="bg-black text-white px-3.5 py-1.5 border rounded-lg font-medium text-xs transition-colors duration-200 hover:bg-gray-700 cursor-pointer h-9"
            style={{
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'black'
            }}
          >
            Book Appointment
          </button>
          
          <button 
            className="nav-login-button font-medium text-xs px-3.5 py-1.5 border rounded-lg transition-colors duration-200 cursor-pointer h-9"
            style={{
              borderWidth: '1px',
              borderStyle: 'solid'
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
