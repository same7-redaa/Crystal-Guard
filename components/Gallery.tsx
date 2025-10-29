import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation({ threshold: 0.2 });

  const galleryImages = [
    {
      src: "/أفلام شفافة فائقة الوضوح.png",
      title: t('gallery.items.kitchen'),
      description: "حماية شفافة للأسطح"
    },
    {
      src: "/أفلام لامعة عاكسة.png",
      title: t('gallery.items.dining'),
      description: "لمعان طبيعي محسن"
    },
    {
      src: "/أفلام مطفية أنيقة.png",
      title: t('gallery.items.bathroom'),
      description: "مظهر مطفي راقي"
    },
    {
      src: "/أفلام مقاومة للحرارة العالية.png",
      title: t('gallery.items.coffee'),
      description: "حماية من الحرارة العالية"
    },
    {
      src: "/hero1.png",
      title: t('gallery.items.marble'),
      description: "أرضية رخامية محمية"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(slideInterval);
  }, [galleryImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="py-12 md:py-18 bg-black relative overflow-hidden rounded-t-lg rounded-b-lg">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/2.jpg')" }}
      ></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gray-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={titleRef} className={`text-center mb-16 scroll-reveal ${titleVisible ? 'revealed' : ''}`}>
          <h2 className="font-title text-4xl md:text-6xl font-bold mb-6 text-white">
            {t('gallery.title')}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Container */}
        <div ref={galleryRef} className={`relative max-w-6xl mx-auto scroll-reveal-scale ${galleryVisible ? 'revealed' : ''}`}>
          {/* Background Blurred Images */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-10' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover filter blur-xl scale-110"
                />
                <div className="absolute inset-0 bg-black/80"></div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-20 p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
              {/* Main Image */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                  <img
                    src={galleryImages[currentIndex].src}
                    alt={galleryImages[currentIndex].title}
                    className="w-full h-96 md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Image Number Indicator */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {currentIndex + 1} / {galleryImages.length}
                </div>
              </div>

              {/* Thumbnails & Info */}
              <div className="space-y-4">
                {/* Thumbnail Navigation */}
                <div className="grid grid-cols-5 gap-3">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`relative overflow-hidden rounded-lg aspect-square transition-all duration-300 transform hover:scale-110 ${
                        index === currentIndex 
                          ? 'ring-4 ring-red-600 scale-110' 
                          : 'ring-2 ring-white/20 hover:ring-white/40'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className={`w-full h-full object-cover transition-all duration-300 ${
                          index === currentIndex ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                        }`}
                      />
                      {index === currentIndex && (
                        <div className="absolute inset-0 bg-red-600/20"></div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div
                    className="h-1 bg-red-600 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${((currentIndex + 1) / galleryImages.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-red-600' 
                    : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;