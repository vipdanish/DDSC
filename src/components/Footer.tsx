
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, ExternalLink, Heart } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`relative pt-16 pb-10 overflow-hidden ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-gray-900 to-blue-900' 
        : 'bg-secondary'
    }`}>
      {/* Background elements with improved animations */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-60 h-60 rounded-full bg-ndc-purple/30 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-ndc-blue/30 blur-[100px] animate-pulse-slow delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-ndc-green/20 blur-[80px] animate-pulse-slow delay-700"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6 animate-fade-in">
            <div className="flex items-center mb-6">
              <img src="/lovable-uploads/1cf4c0d1-cdfb-4d0a-9466-63096565f5d4.png" alt="NDC Logo" className="h-14 w-auto mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-white">NextGen</h3>
                <h4 className="text-lg font-medium text-white/80">Developer Club</h4>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Empowering students through technology, innovation, and community. Join us in building the future of tech together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-ndc-purple/30 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 group">
                <Facebook className="h-5 w-5 text-white group-hover:text-ndc-purple" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-ndc-blue/30 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-6 group">
                <Twitter className="h-5 w-5 text-white group-hover:text-ndc-blue" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-ndc-green/30 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 group">
                <Instagram className="h-5 w-5 text-white group-hover:text-ndc-green" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-ndc-purple/30 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-6 group">
                <Linkedin className="h-5 w-5 text-white group-hover:text-ndc-purple" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-ndc-purple to-ndc-blue"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about', color: 'ndc-purple' },
                { name: 'Why Join', href: '#why-join', color: 'ndc-blue' },
                { name: 'Benefits', href: '#benefits', color: 'ndc-green' },
                { name: 'Our Team', href: '#team', color: 'ndc-purple' },
                { name: 'Partners', href: '#partners', color: 'ndc-blue' },
                { name: 'Join Us', href: '#join', color: 'ndc-green' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className={`w-0 h-px bg-${link.color} group-hover:w-4 transition-all duration-300`}></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-ndc-blue to-ndc-green"></div>
            </h3>
            <ul className="space-y-6">
              <li className="group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/10 group-hover:bg-ndc-blue/20 transition-all duration-300 mt-1">
                    <Mail className="h-5 w-5 text-ndc-blue" />
                  </div>
                  <div>
                    <span className="font-medium text-white/90 block mb-1">Email</span>
                    <a href="mailto:contact@ndclub.com" className="text-gray-300 hover:text-white transition-colors">
                      contact@ndclub.com
                    </a>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/10 group-hover:bg-ndc-green/20 transition-all duration-300 mt-1">
                    <MapPin className="h-5 w-5 text-ndc-green" />
                  </div>
                  <div>
                    <span className="font-medium text-white/90 block mb-1">Location</span>
                    <p className="text-gray-300 leading-relaxed">
                      Shri Shivaji Institute of Engineering and Management Studies
                    </p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/10 group-hover:bg-ndc-purple/20 transition-all duration-300 mt-1">
                    <ExternalLink className="h-5 w-5 text-ndc-purple" />
                  </div>
                  <div>
                    <span className="font-medium text-white/90 block mb-1">Website</span>
                    <a href="https://ssiems.org.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                      ssiems.org.in
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} NextGen Developer Club. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by</span>
              <span 
                className="font-medium text-ndc-purple hover:text-ndc-blue cursor-pointer transition-colors"
                onClick={() => window.open('https://okdanish.netlify.app/', '_blank')}
              >
                Danish
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
