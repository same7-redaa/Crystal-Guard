import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { TikTokIcon } from './icons/TikTokIcon';
import { SnapchatIcon } from './icons/SnapchatIcon';
import { XIcon } from './icons/XIcon';
import { EmailIcon } from './icons/EmailIcon';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: iconsRef, visibleItems } = useStaggeredAnimation(7, 100);
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  
  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden rounded-t-lg rounded-b-lg">
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
        <div className="max-w-4xl mx-auto text-center">
          <div ref={titleRef} className={`mb-12 scroll-reveal ${titleVisible ? 'revealed' : ''}`}>
            <h2 className="font-title text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {t('contact.title')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Social Media Icons - Centered */}
          <div ref={iconsRef} className="flex flex-wrap justify-center items-center gap-8 mb-16">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/966501234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group flex flex-col items-center transition-all duration-300 hover:scale-110 stagger-item ${visibleItems.has(0) ? 'revealed' : ''}`}
            >
              <div className="w-16 h-16 mb-3 p-4 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-600 flex items-center justify-center group-hover:-translate-y-2">
                <WhatsAppIcon />
              </div>
              <span className="font-semibold text-sm text-gray-700 transition-all duration-300 group-hover:text-green-600">واتساب</span>
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com/crystalguard" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group flex flex-col items-center transition-all duration-300 hover:scale-110 stagger-item ${visibleItems.has(1) ? 'revealed' : ''}`}
            >
              <div className="w-16 h-16 mb-3 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-700 flex items-center justify-center group-hover:-translate-y-2">
                <FacebookIcon />
              </div>
              <span className="font-semibold text-sm text-gray-700 transition-all duration-300 group-hover:text-blue-600">فيسبوك</span>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/crystalguard" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group flex flex-col items-center transition-all duration-300 hover:scale-110 stagger-item ${visibleItems.has(2) ? 'revealed' : ''}`}
            >
              <div className="w-16 h-16 mb-3 p-4 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-purple-700 hover:to-pink-600 flex items-center justify-center group-hover:-translate-y-2">
                <InstagramIcon />
              </div>
              <span className="font-semibold text-sm text-gray-700 transition-all duration-300 group-hover:text-pink-600">انستجرام</span>
            </a>

            {/* TikTok */}
            <a 
              href="https://tiktok.com/@crystalguard" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group flex flex-col items-center transition-all duration-300 hover:scale-110 stagger-item ${visibleItems.has(3) ? 'revealed' : ''}`}
            >
              <div className="w-16 h-16 mb-3 p-4 bg-black text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-800 flex items-center justify-center group-hover:-translate-y-2">
                <TikTokIcon />
              </div>
              <span className="font-semibold text-sm text-gray-700 transition-all duration-300 group-hover:text-gray-900">تيك توك</span>
            </a>

            {/* Snapchat */}
            <a 
              href="https://snapchat.com/add/crystalguard" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group flex flex-col items-center transition-all duration-300 hover:scale-110 stagger-item ${visibleItems.has(4) ? 'revealed' : ''}`}
            >
              <div className="w-16 h-16 mb-3 p-4 bg-yellow-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-yellow-500 flex items-center justify-center group-hover:-translate-y-2">
                <SnapchatIcon />
              </div>
              <span className="font-semibold text-sm text-gray-700 transition-all duration-300 group-hover:text-yellow-600">سناب شات</span>
            </a>

            {/* X (Twitter) */}
            <a 
              href="https://x.com/crystalguard" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group flex flex-col items-center transition-all duration-300 hover:scale-110 stagger-item ${visibleItems.has(5) ? 'revealed' : ''}`}
            >
              <div className="w-16 h-16 mb-3 p-4 bg-black text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-800 flex items-center justify-center group-hover:-translate-y-2">
                <XIcon />
              </div>
              <span className="font-semibold text-sm text-gray-700 transition-all duration-300 group-hover:text-gray-900">إكس</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:info@crystalguard.sa" 
              className={`group flex flex-col items-center transition-all duration-300 hover:scale-110 stagger-item ${visibleItems.has(6) ? 'revealed' : ''}`}
            >
              <div className="w-16 h-16 mb-3 p-4 bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-red-700 flex items-center justify-center group-hover:-translate-y-2">
                <EmailIcon />
              </div>
              <span className="font-semibold text-sm text-gray-700 transition-all duration-300 group-hover:text-red-600">البريد</span>
            </a>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className={`grid md:grid-cols-2 gap-8 max-w-2xl mx-auto scroll-reveal ${infoVisible ? 'revealed' : ''}`}>
            <div className="text-center">
              <h3 className="font-bold text-gray-900 mb-2 text-xl">رقم الهاتف</h3>
              <p className="text-gray-600 text-lg">+966 50 123 4567</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-gray-900 mb-2 text-xl">البريد الإلكتروني</h3>
              <p className="text-gray-600 text-lg">info@crystalguard.sa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;