
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} fixed bottom-6 right-6 p-4 rounded-full shadow-xl transition-all duration-300 z-50 group ${
        theme === 'light' 
          ? 'bg-white text-blue-600 hover:bg-blue-50 border border-blue-200 shadow-blue-100' 
          : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5 group-hover:scale-110 transition-transform" />
    </button>
  );
};

export default ScrollToTopButton;
