import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { EyeIcon } from './icons/EyeIcon';
import { GlossyIcon } from './icons/GlossyIcon';
import { StarIcon } from './icons/StarIcon';
import { FireIcon } from './icons/FireIcon';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, imageUrl, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);
  
  return (
    <div 
      ref={cardRef}
      className={`group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-12 opacity-0'
      } hover:-translate-y-2`}
    >
      {/* Background Image */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Icon Overlay */}
        <div className="absolute top-6 left-6 p-4 bg-white/90 backdrop-blur-sm rounded-2xl group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-lg text-red-600">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="font-title text-2xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {/* Decorative Element */}
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-red-600/10 rounded-full transform group-hover:scale-150 transition-transform duration-500"></div>
    </div>
  );
};

const Products: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  const features = [
    {
      icon: <EyeIcon />,
      title: t('products.items.ultraClear.title'),
      description: t('products.items.ultraClear.description'),
      imageUrl: "/أفلام شفافة فائقة الوضوح.png"
    },
    {
      icon: <GlossyIcon />,
      title: t('products.items.glossy.title'),
      description: t('products.items.glossy.description'),
      imageUrl: "/أفلام لامعة عاكسة.png"
    },
    {
      icon: <StarIcon />,
      title: t('products.items.matte.title'),
      description: t('products.items.matte.description'),
      imageUrl: "/أفلام مطفية أنيقة.png"
    },
    {
      icon: <FireIcon />,
      title: t('products.items.heatResistant.title'),
      description: t('products.items.heatResistant.description'),
      imageUrl: "/أفلام مقاومة للحرارة العالية.png"
    }
  ];

  return (
    <section 
      id="products" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-red-600 relative overflow-hidden rounded-t-lg rounded-b-lg"
    >
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/3.jpg')" }}
      ></div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Animated Header */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isSectionVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="font-title text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('products.title')}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-200 mt-4 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;