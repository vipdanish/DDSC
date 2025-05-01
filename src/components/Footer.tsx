
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-secondary pt-16 pb-10 overflow-hidden">
      {/* Background elements with improved animations */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-60 h-60 rounded-full bg-ndc-purple/30 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-ndc-blue/30 blur-[100px] animate-pulse-slow delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-ndc-green/20 blur-[80px] animate-pulse-slow delay-700"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center mb-4">
              <img src="/lovable-uploads/8f2aac09-11e4-414a-929d-997fd9338097.png" alt="NDC Logo" className="h-12 w-auto mr-3" />
              <div>
                <h3 className="text-xl font-bold text-white">NextGen</h3>
                <h4 className="text-lg font-medium text-white/80">Developer Club</h4>
              </div>
            </div>
            <p className="text-gray-300">
              Empowering students through technology, innovation, and community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-background/30 hover:bg-ndc-purple/20 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-background/30 hover:bg-ndc-blue/20 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-6">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-background/30 hover:bg-ndc-green/20 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-background/30 hover:bg-ndc-purple/20 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-6">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:block after:w-full after:h-0.5 after:bg-gradient-to-r after:from-ndc-purple after:to-ndc-blue">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-0 h-px bg-ndc-purple group-hover:w-3 transition-all duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-join" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-0 h-px bg-ndc-blue group-hover:w-3 transition-all duration-300"></span>
                  Why Join
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-0 h-px bg-ndc-green group-hover:w-3 transition-all duration-300"></span>
                  Benefits
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-0 h-px bg-ndc-purple group-hover:w-3 transition-all duration-300"></span>
                  Events
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-0 h-px bg-ndc-blue group-hover:w-3 transition-all duration-300"></span>
                  Our Team
                </a>
              </li>
              <li>
                <a href="#partners" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-0 h-px bg-ndc-green group-hover:w-3 transition-all duration-300"></span>
                  Partners
                </a>
              </li>
              <li>
                <a href="#join" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-0 h-px bg-ndc-purple group-hover:w-3 transition-all duration-300"></span>
                  Join Us
                </a>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:block after:w-full after:h-0.5 after:bg-gradient-to-r after:from-ndc-blue after:to-ndc-green">Contact Us</h3>
            <ul className="space-y-5">
              <li className="group">
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2 rounded-full bg-background/30 group-hover:bg-ndc-blue/20 transition-colors">
                    <Mail className="h-4 w-4 text-ndc-blue" />
                  </div>
                  <span className="font-medium text-white/90">Email</span>
                </div>
                <a href="mailto:contact@ndclub.com" className="text-gray-300 hover:text-white transition-colors ml-11 block">
                  contact@ndclub.com
                </a>
              </li>
              <li className="group">
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2 rounded-full bg-background/30 group-hover:bg-ndc-green/20 transition-colors">
                    <MapPin className="h-4 w-4 text-ndc-green" />
                  </div>
                  <span className="font-medium text-white/90">Location</span>
                </div>
                <p className="text-gray-300 ml-11">
                  Shri Shivaji Institute of Engineering and Management Studies
                </p>
              </li>
              <li className="group">
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2 rounded-full bg-background/30 group-hover:bg-ndc-purple/20 transition-colors">
                    <ExternalLink className="h-4 w-4 text-ndc-purple" />
                  </div>
                  <span className="font-medium text-white/90">Website</span>
                </div>
                <a href="https://ssiems.org.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors ml-11 block">
                  ssiems.org.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} NextGen Developer Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
