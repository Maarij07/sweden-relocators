'use client';

import { motion, AnimatePresence } from 'framer-motion';
import colors from '@/styles/colors.json';

interface Language {
  code: string;
  name: string;
  flagComponent: React.ReactNode;
}

interface LanguageDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguage: Language;
  onLanguageSelect: (language: Language) => void;
}

// Create flag component using flagcdn API
const createFlagComponent = (languageCode: string) => {
  // Map language codes to country codes for flagcdn
  const countryCodeMap: Record<string, string> = {
    'en': 'gb', // English -> Great Britain
    'de': 'de', // German -> Germany
    'da': 'dk', // Danish -> Denmark
    'sv': 'se', // Swedish -> Sweden
    'es': 'es', // Spanish -> Spain
    'ar': 'sa', // Arabic -> Saudi Arabia
    'fa': 'ir', // Persian -> Iran
    'el': 'gr', // Greek -> Greece
    'ur': 'pk', // Urdu -> Pakistan
    'pa': 'in', // Punjabi -> India
  };

  const countryCode = countryCodeMap[languageCode] || 'gb';
  
  return (
    <img 
      src={`https://flagcdn.com/h20/${countryCode}.png`}
      alt={`${languageCode} flag`}
      className="w-7 h-5 rounded-sm object-cover border border-gray-200"
      loading="lazy"
    />
  );
};

const languages: Language[] = [
  { code: 'en', name: 'English', flagComponent: createFlagComponent('en') },
  { code: 'de', name: 'German', flagComponent: createFlagComponent('de') },
  { code: 'da', name: 'Danish', flagComponent: createFlagComponent('da') },
  { code: 'sv', name: 'Swedish', flagComponent: createFlagComponent('sv') },
  { code: 'es', name: 'Spanish', flagComponent: createFlagComponent('es') },
  { code: 'ar', name: 'Arabic', flagComponent: createFlagComponent('ar') },
  { code: 'fa', name: 'Persian', flagComponent: createFlagComponent('fa') },
  { code: 'el', name: 'Greek', flagComponent: createFlagComponent('el') },
  { code: 'ur', name: 'Urdu', flagComponent: createFlagComponent('ur') },
  { code: 'pa', name: 'Punjabi', flagComponent: createFlagComponent('pa') },
];

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  isOpen,
  onClose,
  selectedLanguage,
  onLanguageSelect,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ 
            opacity: 0, 
            y: -4, 
            scale: 0.98,
            transformOrigin: "top right"
          }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transformOrigin: "top right"
          }}
          exit={{ 
            opacity: 0, 
            y: -4, 
            scale: 0.98,
            transformOrigin: "top right"
          }}
          transition={{ 
            duration: 0.12, 
            ease: [0.16, 1, 0.3, 1]
          }}
          className="absolute top-full right-0 mt-1 w-80 border border-gray-100 rounded-lg overflow-hidden"
          style={{
            backgroundColor: '#ffffff',
            zIndex: 1000,
            boxShadow: colors.colors.shadows.z8
          }}
        >
          <div className="p-2 grid grid-cols-2 gap-1">
            {languages.map((language, index) => (
              <button
                key={language.code}
                onClick={() => {
                  onLanguageSelect(language);
                  onClose();
                }}
                className="flex items-center w-full px-3 py-2 text-left transition-all duration-150 rounded-md"
                style={{
                  fontSize: '13px',
                  color: colors.colors.text.primary,
                  backgroundColor: 'transparent',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.colors.action.hover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div className="flex-shrink-0 mr-2">
                  {language.flagComponent}
                </div>
                <span className="font-medium truncate flex-1">
                  {language.name}
                </span>
                {selectedLanguage.code === language.code && (
                  <div 
                    className="ml-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#374151' }}
                  ></div>
                )}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguageDropdown;
