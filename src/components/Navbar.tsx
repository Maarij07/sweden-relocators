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
  // Create flag image using flagcdn API
  const createNavbarFlag = (flagCode: string) => {
    // Map language codes to country codes for flagcdn
    const countryCodeMap: Record<string, string> = {
      'en': 'gb', // English -> Great Britain
      'de': 'de', // German -> Germany
      'da': 'dk', // Danish -> Denmark
      'sv': 'se', // Swedish -> Sweden
      'es': 'es', // Spanish -> Spain
      'ar': 'sa', // Arabic -> Saudi Arabia (or could use 'ae' for UAE)
      'fa': 'ir', // Persian -> Iran
      'el': 'gr', // Greek -> Greece
      'ur': 'pk', // Urdu -> Pakistan
      'pa': 'in', // Punjabi -> India
    };

    const countryCode = countryCodeMap[flagCode] || 'gb';
    
    return (
      <img 
        src={`https://flagcdn.com/h20/${countryCode}.png`}
        alt={`${flagCode} flag`}
        className="w-6 h-4 rounded-sm object-cover border border-gray-300"
        loading="lazy"
      />
    );
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
            className="h-10 sm:h-12 w-auto object-contain"
            loading="eager"
            style={{
              maxHeight: '48px',
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
            className="bg-black text-white px-3 py-1.5 border rounded-lg font-medium text-xs transition-colors duration-200 hover:bg-gray-700 cursor-pointer h-9"
            style={{
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'black'
            }}
          >
            Book An Appointment
          </button>
          
          <button 
            className="nav-login-button font-medium text-xs px-3.5 py-1.5 border rounded-lg transition-colors duration-200 cursor-pointer h-9"
            style={{
              borderWidth: '1px',
              borderStyle: 'solid'
            }}
            onClick={() => {
              window.open('https://pages.nordicrelocators.com/dashboard', '_blank');
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
