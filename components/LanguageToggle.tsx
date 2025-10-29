import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 text-sm font-medium transform hover:scale-110 hover:rotate-3 hover:shadow-lg active:scale-95"
      aria-label={`Switch to ${language === 'ar' ? 'English' : 'Arabic'}`}
    >
      <span className={`font-semibold transition-all duration-300 transform ${language === 'ar' ? 'rotate-0' : 'rotate-180'}`}>
        {language === 'ar' ? 'EN' : 'ع'}
      </span>
    </button>
  );
};

export default LanguageToggle;