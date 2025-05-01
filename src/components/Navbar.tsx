
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

  const handleJoinClick = () => {
    window.open("https://forms.gle/ke3hyQjEtDZWPkyL7", "_blank");
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/1cf4c0d1-cdfb-4d0a-9466-63096565f5d4.png" alt="NDC Logo" className="h-10 w-auto animate-pulse-slow" />
            <span className="text-xl font-bold text-white">NextGen Developer Club</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-ndc-purple after:transition-all after:duration-300">About</a>
            <a href="#why-join" className="text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-ndc-blue after:transition-all after:duration-300">Why Join</a>
            <a href="#benefits" className="text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-ndc-green after:transition-all after:duration-300">Benefits</a>
            <a href="#events" className="text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-ndc-purple after:transition-all after:duration-300">Events</a>
            <a href="#team" className="text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-ndc-blue after:transition-all after:duration-300">Team</a>
            <a href="#partners" className="text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-ndc-green after:transition-all after:duration-300">Partners</a>
          </nav>
          <Button className="btn-primary group" onClick={handleJoinClick}>
            <span className="group-hover:mr-2 transition-all duration-300">Join Now</span>
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
