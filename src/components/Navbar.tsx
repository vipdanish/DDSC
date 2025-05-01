
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img src="/ndc-logo.svg" alt="NDC Logo" className="h-10 w-auto" />
            <span className="ml-3 text-xl font-bold text-white">NextGen Developer Club</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#why-join" className="text-gray-300 hover:text-white transition-colors">Why Join</a>
            <a href="#events" className="text-gray-300 hover:text-white transition-colors">Events</a>
            <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
            <a href="#partners" className="text-gray-300 hover:text-white transition-colors">Partners</a>
          </nav>
          <Button className="btn-primary">Join Now</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
