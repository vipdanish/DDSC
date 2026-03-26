
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Button
        size="icon"
        className={`rounded-full h-12 w-12 shadow-lg ${
          theme === 'light' 
            ? 'bg-white text-gray-800 hover:bg-gray-50' 
            : 'bg-secondary text-white hover:bg-secondary/80'
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ScrollToTop;
