import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ShieldIcon } from './icons/ShieldIcon';
import { SunIcon } from './icons/SunIcon';
import { SparkleIcon } from './icons/SparkleIcon';
import { WrenchIcon } from './icons/WrenchIcon';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title }) => (
  <div className="text-center flex flex-col items-center group">
    <div className="w-24 h-24 rounded-full border-2 border-red-500/30 flex items-center justify-center bg-red-500/5 mb-4 transition-all duration-300 hover:border-red-500 hover:bg-red-500/10 text-red-600 group-hover:scale-110 group-hover:shadow-lg group-hover:-translate-y-2">
      {icon}
    </div>
    <h3 className="font-body text-lg font-semibold text-gray-900 transition-all duration-300 group-hover:text-red-600">{title}</h3>
  </div>
);

const Features: React.FC = () => {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, visibleItems } = useStaggeredAnimation(4, 150);
  
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden rounded-t-lg rounded-b-lg">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/1.png')" }}
      ></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gray-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className={`text-center mb-16 scroll-reveal ${titleVisible ? 'revealed' : ''}`}>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {t('features.title')}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            {t('features.subtitle')}
          </p>
        </div>
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className={`stagger-item ${visibleItems.has(0) ? 'revealed' : ''}`}>
            <FeatureItem icon={<ShieldIcon />} title={t('features.items.invisible')} />
          </div>
          <div className={`stagger-item ${visibleItems.has(1) ? 'revealed' : ''}`}>
            <FeatureItem icon={<SunIcon />} title={t('features.items.resistant')} />
          </div>
          <div className={`stagger-item ${visibleItems.has(2) ? 'revealed' : ''}`}>
            <FeatureItem icon={<SparkleIcon />} title={t('features.items.maintenance')} />
          </div>
          <div className={`stagger-item ${visibleItems.has(3) ? 'revealed' : ''}`}>
            <FeatureItem icon={<WrenchIcon />} title={t('features.items.installation')} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;