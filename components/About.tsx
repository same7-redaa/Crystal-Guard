import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckIcon } from './icons/CheckIcon';
import { TargetIcon } from './icons/TargetIcon';

const About: React.FC = () => {
  const { t } = useLanguage();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: videoRef, isVisible: videoVisible } = useScrollAnimation({ threshold: 0.3 });
  
  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden rounded-t-lg rounded-b-lg">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/1.png')" }}
      ></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gray-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div ref={textRef} className={`order-2 md:order-1 scroll-reveal-left ${textVisible ? 'revealed' : ''}`}>
            <h2 className="font-title text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t('about.title')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mb-6 rounded-full"></div>
            
            {/* Description with Icons */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white mt-1 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <CheckIcon />
                </div>
                <p className="text-gray-700 leading-relaxed text-lg flex-1 transition-all duration-300 group-hover:text-gray-900">
                  {t('about.description1')}
                </p>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white mt-1 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <TargetIcon />
                </div>
                <p className="text-gray-700 leading-relaxed text-lg flex-1 transition-all duration-300 group-hover:text-gray-900">
                  {t('about.description2')}
                </p>
              </div>
            </div>
          </div>
          <div ref={videoRef} className={`order-1 md:order-2 scroll-reveal-right ${videoVisible ? 'revealed' : ''}`}>
            <div className="rounded-2xl overflow-hidden relative aspect-square shadow-2xl shadow-gray-900/10 border-2 border-red-600 transition-all duration-300 hover:scale-105 hover:shadow-3xl group">
              <video 
                src="/vedio.mp4" 
                autoPlay 
                loop 
                muted 
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                aria-label="Crystal Guard protective film demonstration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;