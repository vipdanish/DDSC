
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, ExternalLink, Heart, Github } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`relative pt-20 pb-8 overflow-hidden ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-gray-900 to-blue-900' 
        : 'bg-secondary'
    }`}>
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-ndc-purple/30 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-ndc-blue/30 blur-[120px] animate-pulse-slow delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-60 h-60 rounded-full bg-ndc-green/20 blur-[100px] animate-pulse-slow delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full bg-ndc-purple/20 blur-[80px] animate-pulse-slow delay-1000"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Enhanced Brand Section */}
          <div className="md:col-span-2 space-y-8 animate-fade-in">
            <div className="flex items-center mb-8">
              <img src="/lovable-uploads/1562081e-2603-4dd2-8c30-cc01d2781a8b.png" alt="DCode Logo" className="h-16 w-auto mr-4" />
              <div>
                <h3 className="text-3xl font-bold text-white">DCode</h3>
                <h4 className="text-xl font-medium text-white/80">Developers Club</h4>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Empowering students through technology, innovation, and community. Join us in building the future of tech together.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-ndc-purple/30 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 group backdrop-blur-sm border border-white/10">
                <Facebook className="h-6 w-6 text-white group-hover:text-ndc-purple transition-colors" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-ndc-blue/30 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-6 group backdrop-blur-sm border border-white/10">
                <Twitter className="h-6 w-6 text-white group-hover:text-ndc-blue transition-colors" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-ndc-green/30 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 group backdrop-blur-sm border border-white/10">
                <Instagram className="h-6 w-6 text-white group-hover:text-ndc-green transition-colors" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-ndc-purple/30 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-6 group backdrop-blur-sm border border-white/10">
                <Linkedin className="h-6 w-6 text-white group-hover:text-ndc-purple transition-colors" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gray-400/30 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 group backdrop-blur-sm border border-white/10">
                <Github className="h-6 w-6 text-white group-hover:text-gray-400 transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Enhanced Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold mb-8 text-white relative inline-block">
              Quick Links
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue rounded-full"></div>
            </h3>
            <ul className="space-y-4">
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
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-3 group py-2"
                  >
                    <span className={`w-0 h-0.5 bg-${link.color} group-hover:w-6 transition-all duration-300 rounded-full`}></span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300 text-lg">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Enhanced Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-xl font-bold mb-8 text-white relative inline-block">
              Contact Us
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-ndc-blue to-ndc-green rounded-full"></div>
            </h3>
            <ul className="space-y-8">
              <li className="group">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-white/10 group-hover:bg-ndc-blue/20 transition-all duration-300 mt-1 backdrop-blur-sm border border-white/10">
                    <Mail className="h-6 w-6 text-ndc-blue" />
                  </div>
                  <div>
                    <span className="font-semibold text-white/90 block mb-2 text-lg">Email</span>
                    <a href="mailto:contact@dcode.dev" className="text-gray-300 hover:text-white transition-colors text-lg">
                      contact@dcode.dev
                    </a>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-white/10 group-hover:bg-ndc-green/20 transition-all duration-300 mt-1 backdrop-blur-sm border border-white/10">
                    <MapPin className="h-6 w-6 text-ndc-green" />
                  </div>
                  <div>
                    <span className="font-semibold text-white/90 block mb-2 text-lg">Location</span>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Shri Shivaji Institute of Engineering and Management Studies
                    </p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-white/10 group-hover:bg-ndc-purple/20 transition-all duration-300 mt-1 backdrop-blur-sm border border-white/10">
                    <ExternalLink className="h-6 w-6 text-ndc-purple" />
                  </div>
                  <div>
                    <span className="font-semibold text-white/90 block mb-2 text-lg">Website</span>
                    <a href="https://ssiems.org.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-lg">
                      ssiems.org.in
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Enhanced Bottom Section */}
        <div className="border-t border-white/20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <p className="text-gray-400 text-lg">
                © {new Date().getFullYear()} DCode Developers Club. All rights reserved.
              </p>
              <div className="hidden md:block w-px h-6 bg-white/20"></div>
              <p className="text-gray-400 text-lg">
                Building the future, one line of code at a time.
              </p>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <span className="text-lg">Made with</span>
              <Heart className="h-5 w-5 text-red-500 animate-pulse" />
              <span className="text-lg">by</span>
              <span 
                className="font-semibold text-ndc-purple hover:text-ndc-blue cursor-pointer transition-colors text-lg underline decoration-ndc-purple hover:decoration-ndc-blue"
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
