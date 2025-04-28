import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';
import Button from './ui/Button';
import content from '../data/content.json';
import { scrollToCallToAction } from '../util/ScrollUtils';

const { title } = content.siteInfo;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md backdrop-brightness-150 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Code2 className="h-8 w-8 text-blue-600 mr-2" />
          <span className={`font-bold text-xl ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
            {title}
          </span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Syllabus', 'Bonuses', 'About', 'FAQs'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button size="sm" onClick={scrollToCallToAction}>Join Waitlist</Button>
      </div>
    </header>
  );
};

export default Header;