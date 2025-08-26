'use client';

import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import colors from '@/styles/colors.json';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHousingOpen, setIsHousingOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md shadow-sm"
      style={{
        backgroundColor: isScrolled 
          ? `${colors.colors.background.slate[900]}cc` // 80% opacity
          : colors.colors.background.slate[900],
        borderBottom: isScrolled 
          ? `1px solid ${colors.colors.border.slate[700]}80` // 50% opacity
          : 'none'
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
          <div className="text-base font-bold" style={{color: colors.colors.text.white}}>
            SWEDEN <span style={{color: colors.colors.primary.yellow[400]}}>RELOCATORS</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="#" 
            className="transition-colors font-medium text-sm"
            style={{
              color: colors.colors.text.gray[200],
              ':hover': { color: colors.colors.primary.yellow[400] }
            }}
            onMouseEnter={(e) => e.target.style.color = colors.colors.primary.yellow[400]}
            onMouseLeave={(e) => e.target.style.color = colors.colors.text.gray[200]}
          >
            NEW IN SWEDEN
          </a>
          
          {/* Services Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 transition-colors font-medium text-sm"
              style={{color: colors.colors.text.gray[200]}}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onMouseEnter={(e) => e.target.style.color = colors.colors.primary.yellow[400]}
              onMouseLeave={(e) => e.target.style.color = colors.colors.text.gray[200]}
            >
              <span>SERVICES</span>
              <ChevronDownIcon className="w-3 h-3" />
            </button>
          </div>

          <a 
            href="#" 
            className="transition-colors font-medium text-sm"
            style={{color: colors.colors.text.gray[200]}}
            onMouseEnter={(e) => e.target.style.color = colors.colors.primary.yellow[400]}
            onMouseLeave={(e) => e.target.style.color = colors.colors.text.gray[200]}
          >
            ABOUT
          </a>

          {/* Housing Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 transition-colors font-medium text-sm"
              style={{color: colors.colors.text.gray[200]}}
              onClick={() => setIsHousingOpen(!isHousingOpen)}
              onMouseEnter={(e) => e.target.style.color = colors.colors.primary.yellow[400]}
              onMouseLeave={(e) => e.target.style.color = colors.colors.text.gray[200]}
            >
              <span>HOUSING</span>
              <ChevronDownIcon className="w-3 h-3" />
            </button>
          </div>

          {/* Assessment Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 transition-colors font-medium text-sm"
              style={{color: colors.colors.text.gray[200]}}
              onClick={() => setIsAssessmentOpen(!isAssessmentOpen)}
              onMouseEnter={(e) => e.target.style.color = colors.colors.primary.yellow[400]}
              onMouseLeave={(e) => e.target.style.color = colors.colors.text.gray[200]}
            >
              <span>ASSESSMENT</span>
              <ChevronDownIcon className="w-3 h-3" />
            </button>
          </div>

          <a 
            href="#" 
            className="transition-colors font-medium text-sm"
            style={{color: colors.colors.text.gray[200]}}
            onMouseEnter={(e) => e.target.style.color = colors.colors.primary.yellow[400]}
            onMouseLeave={(e) => e.target.style.color = colors.colors.text.gray[200]}
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
              backgroundColor: colors.colors.background.slate[800],
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: colors.colors.border.slate[600]
            }}
            onMouseEnter={(e) => e.target.style.borderColor = colors.colors.primary.yellow[400]}
            onMouseLeave={(e) => e.target.style.borderColor = colors.colors.border.slate[600]}
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
                style={{color: colors.colors.text.gray[200]}}
              >English</span>
              <ChevronDownIcon 
                className="w-3 h-3" 
                style={{color: colors.colors.text.gray[400]}}
              />
            </div>
          </div>
          
          <button 
            className="px-4 py-1.5 rounded-full font-semibold text-xs transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(to right, ${colors.colors.primary.yellow[400]}, ${colors.colors.primary.yellow[500]})`,
              color: colors.colors.background.slate[900]
            }}
            onMouseEnter={(e) => {
              e.target.style.background = `linear-gradient(to right, ${colors.colors.primary.yellow[500]}, #d97706)`;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = `linear-gradient(to right, ${colors.colors.primary.yellow[400]}, ${colors.colors.primary.yellow[500]})`;
            }}
          >
            Book An Appointment
          </button>
          
          <button 
            className="font-medium text-xs px-3 py-1.5 rounded-lg transition-colors duration-200"
            style={{
              color: colors.colors.text.gray[200],
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: colors.colors.border.slate[600]
            }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.colors.primary.yellow[400];
              e.target.style.borderColor = colors.colors.primary.yellow[400];
            }}
            onMouseLeave={(e) => {
              e.target.style.color = colors.colors.text.gray[200];
              e.target.style.borderColor = colors.colors.border.slate[600];
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
