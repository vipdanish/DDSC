
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
        {/* Connect With Us Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Connect With Us</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {/* Instagram */}
            <a 
              href="https://instagram.com/dcode_developers" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="group relative p-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-pink-500/50 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Instagram className="h-8 w-8 text-white group-hover:text-pink-400 transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Instagram</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/company/dcode-developers" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Connect with us on LinkedIn"
              className="group relative p-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Linkedin className="h-8 w-8 text-white group-hover:text-blue-400 transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">LinkedIn</span>
            </a>

            {/* Gmail */}
            <a 
              href="mailto:contact@dcode.dev" 
              aria-label="Email us"
              className="group relative p-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-red-500/50 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-red-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Mail className="h-8 w-8 text-white group-hover:text-red-400 transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Gmail</span>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/+1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="group relative p-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-green-500/50 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-green-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <svg className="h-8 w-8 text-white group-hover:text-green-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690"/>
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">WhatsApp</span>
            </a>
          </div>
        </div>

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
