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

// Minimalist Flag Components - Simple geometric representations
const UKFlag = () => (
  <div className="w-5 h-5 rounded-sm overflow-hidden relative border border-gray-200">
    <div className="absolute inset-0 bg-blue-600"></div>
    <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(47% 0, 53% 0, 53% 100%, 47% 100%)' }}></div>
    <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(0 47%, 0 53%, 100% 53%, 100% 47%)' }}></div>
    <div className="absolute inset-0 bg-red-500" style={{ clipPath: 'polygon(49% 0, 51% 0, 51% 100%, 49% 100%)' }}></div>
    <div className="absolute inset-0 bg-red-500" style={{ clipPath: 'polygon(0 49%, 0 51%, 100% 51%, 100% 49%)' }}></div>
  </div>
);

const GermanFlag = () => (
  <div className="w-5 h-5 rounded-sm overflow-hidden border border-gray-200">
    <div className="h-1.5 bg-black"></div>
    <div className="h-2 bg-red-600"></div>
    <div className="h-1.5 bg-yellow-400"></div>
  </div>
);

const DanishFlag = () => (
  <div className="w-5 h-5 rounded-sm overflow-hidden relative border border-gray-200">
    <div className="absolute inset-0 bg-red-600"></div>
    <div className="absolute left-1.5 top-0 w-0.5 h-full bg-white"></div>
    <div className="absolute left-0 top-2 w-full h-0.5 bg-white"></div>
  </div>
);

const SwedishFlag = () => (
  <div className="w-5 h-5 rounded-sm overflow-hidden relative border border-gray-200">
    <div className="absolute inset-0 bg-blue-500"></div>
    <div className="absolute left-1.5 top-0 w-0.5 h-full bg-yellow-400"></div>
    <div className="absolute left-0 top-2 w-full h-0.5 bg-yellow-400"></div>
  </div>
);

const SpanishFlag = () => (
  <div className="w-5 h-5 rounded-sm overflow-hidden border border-gray-200">
    <div className="h-1 bg-red-600"></div>
    <div className="h-3 bg-yellow-400"></div>
    <div className="h-1 bg-red-600"></div>
  </div>
);

const ArabicFlag = () => (
  <div className="w-5 h-5 rounded-sm overflow-hidden border border-gray-200">
    <div className="h-1.5 bg-green-600"></div>
    <div className="h-2 bg-white"></div>
    <div className="h-1.5 bg-black"></div>
  </div>
);

const PersianFlag = () => (
  <div className="w-5 h-5 rounded-sm overflow-hidden border border-gray-200">
    <div className="h-1.5 bg-green-600"></div>
    <div className="h-2 bg-white"></div>
    <div className="h-1.5 bg-red-600"></div>
  </div>
);

const GreekFlag = () => (
  <div className="w-5 h-5 rounded-sm overflow-hidden relative border border-gray-200">
    <div className="absolute inset-0 bg-white">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-0.5 bg-blue-600" style={{ marginTop: `${i * 4}px` }}></div>
      ))}
    </div>
    <div className="absolute top-0 left-0 w-2 h-2 bg-blue-600"></div>
  </div>
);

const UrduFlag = () => (
  <div className="w-5 h-5 rounded-sm overflow-hidden relative border border-gray-200">
    <div className="absolute inset-0 bg-green-600"></div>
    <div className="absolute left-0 top-0 w-1.5 h-full bg-white"></div>
    <div className="absolute left-0.5 top-1.5 w-2 h-2 flex items-center justify-center text-white text-xs">☪</div>
  </div>
);

const PunjabiFlag = () => (
  <div className="w-5 h-5 rounded-sm overflow-hidden border border-gray-200">
    <div className="h-1.5 bg-orange-500"></div>
    <div className="h-2 bg-white"></div>
    <div className="h-1.5 bg-green-600"></div>
  </div>
);

const languages: Language[] = [
  { code: 'en', name: 'English', flagComponent: <UKFlag /> },
  { code: 'de', name: 'German', flagComponent: <GermanFlag /> },
  { code: 'da', name: 'Danish', flagComponent: <DanishFlag /> },
  { code: 'sv', name: 'Swedish', flagComponent: <SwedishFlag /> },
  { code: 'es', name: 'Spanish', flagComponent: <SpanishFlag /> },
  { code: 'ar', name: 'Arabic', flagComponent: <ArabicFlag /> },
  { code: 'fa', name: 'Persian', flagComponent: <PersianFlag /> },
  { code: 'el', name: 'Greek', flagComponent: <GreekFlag /> },
  { code: 'ur', name: 'Urdu', flagComponent: <UrduFlag /> },
  { code: 'pa', name: 'Punjabi', flagComponent: <PunjabiFlag /> },
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
