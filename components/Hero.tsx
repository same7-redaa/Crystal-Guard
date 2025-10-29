import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const slides = [
  '/hero1.png',
  '/hero2.png'
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();
  
  useEffect(() => {
    const slideInterval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 7000); // Auto-scroll every 7 seconds

    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, []);

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden rounded-b-lg" 
    >
      {/* Background Images Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide})` }}
          aria-hidden={index !== currentIndex}
        />
      ))}

      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-20 -mt-20">
        <div className="w-full text-center">
          <h1 className="font-title text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            {t('hero.subtitle')}
          </p>
          <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            {t('hero.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;