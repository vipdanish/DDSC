
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
      className={`${isVisible ? 'opacity-100' : 'opacity-0'} fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
        theme === 'light' ? 'bg-white text-gray-800 hover:bg-gray-100' : 'bg-gray-800 text-white hover:bg-gray-700'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTopButton;
