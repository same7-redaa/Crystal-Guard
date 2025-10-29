import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
      { name: t('nav.home'), href: "#" },
      { name: t('nav.about'), href: "#about" },
      { name: t('nav.products'), href: "#products" },
      { name: t('nav.gallery'), href: "#gallery" },
      { name: t('nav.contact'), href: "#contact" }
  ];

  return (
    <header 
      className="fixed top-0 w-full z-50 bg-cover bg-center shadow-lg rounded-b-lg"
      style={{ backgroundImage: "url('https://i.postimg.cc/xTtZ1fZt/Blue-and-Teal-Geometric-Photo-Medical-Facebook-Cover-1.png')" }}
    >
      <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center py-2 md:py-2">
        {/* Logo and Brand Name */}
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center space-x-3 md:space-x-4 rtl:space-x-reverse group">
            <img 
              src="https://i.postimg.cc/RVKcgX7g/adaft-ʿnwan-6.png" 
              alt="Crystal Guard Logo" 
              className="h-12 md:h-16 transition-all duration-300 group-hover:scale-110"
            />
            <span className="font-title text-xl md:text-2xl font-bold self-center whitespace-nowrap transition-all duration-300 group-hover:scale-105">
              <span className="text-red-600">Crystal</span>
              <span className="mx-2 text-black">Guard</span>
            </span>
          </a>
        </div>

        {/* Navigation Links & Mobile Menu Button */}
        <div className="flex items-center gap-4">
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-x-10">
              {navLinks.map((link, index) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-red-600 font-semibold hover:text-black transition-all duration-300 tracking-wider text-lg relative group hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-red-600 focus:outline-none transition-all duration-300 hover:scale-110 hover:rotate-90" aria-label="Toggle menu">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 md:h-8 md:w-8 transition-all duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
            </div>
            
            {/* Language Toggle - Far Right */}
            <LanguageToggle />
        </div>
      </div>

       {/* Mobile Menu Panel */}
       <div className={`md:hidden border-t border-gray-200/50 overflow-hidden transition-all duration-300 ease-in-out ${
         isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
       }`}>
         <nav className="flex flex-col items-center space-y-1 py-2">
           {navLinks.map((link, index) => (
             <a 
               key={link.name} 
               href={link.href} 
               className={`text-red-600 font-semibold text-base hover:text-black transition-all duration-300 py-1 transform ${
                 isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
               }`}
               style={{ 
                 transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' 
               }}
               onClick={() => setIsMenuOpen(false)}
             >
               {link.name}
             </a>
           ))}
         </nav>
       </div>
    </header>
  );
};

export default Header;