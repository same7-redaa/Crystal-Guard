import React from 'react';
import { TwitterIcon } from './icons/TwitterIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-black text-gray-400 relative overflow-hidden rounded-t-lg">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/2.jpg')" }}
      ></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gray-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <img 
                src="https://i.postimg.cc/RVKcgX7g/adaft-ʿnwan-6.png" 
                alt="Crystal Guard Logo" 
                className="h-12"
              />
              <h3 className="font-title text-2xl font-bold">
                <span className="text-red-600">Crystal</span>
                <span className="mx-2 text-white">Guard</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              {t('footer.tagline')}
            </p>
            <p className="text-gray-400 text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up animation-delay-200">
            <h4 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-red-500 transition-all duration-300 hover:translate-x-2">{t('nav.about')}</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-red-500 transition-all duration-300 hover:translate-x-2">{t('nav.products')}</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-red-500 transition-all duration-300 hover:translate-x-2">{t('nav.gallery')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-500 transition-all duration-300 hover:translate-x-2">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up animation-delay-300">
            <h4 className="text-white font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="hover:text-white transition-colors duration-300">{t('footer.phone')}: +966 50 123 4567</p>
              <p className="hover:text-white transition-colors duration-300">{t('footer.email')}: info@crystalguard.sa</p>
              <p className="hover:text-white transition-colors duration-300">{t('footer.address')}: {t('footer.addressText')}</p>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex space-x-4 rtl:space-x-reverse mb-4 md:mb-0 animate-fade-in-up animation-delay-400">
            <a href="#" className="text-gray-400 hover:text-red-500 transition-all duration-300 p-2 bg-gray-800 rounded-full hover:bg-gray-700 hover:scale-110 hover:-translate-y-1">
              <TwitterIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-all duration-300 p-2 bg-gray-800 rounded-full hover:bg-gray-700 hover:scale-110 hover:-translate-y-1">
              <InstagramIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-all duration-300 p-2 bg-gray-800 rounded-full hover:bg-gray-700 hover:scale-110 hover:-translate-y-1">
              <FacebookIcon />
            </a>
          </div>
          <p className="text-center text-sm text-gray-500">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;