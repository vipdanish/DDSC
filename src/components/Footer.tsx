import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, ExternalLink, Heart, Github } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";

const Footer = () => {
  const { theme } = useTheme();
  const [heartClicked, setHeartClicked] = useState(false);
  
  const handleHeartClick = () => {
    setHeartClicked(true);
    setTimeout(() => setHeartClicked(false), 1000);
  };
  
  return (
    <footer className={`relative pt-20 pb-8 overflow-hidden transition-all duration-1000 ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-br from-secondary via-gray-900 to-black'
    }`}>
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-ndc-purple/40 blur-[150px] animate-pulse delay-0"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-ndc-blue/40 blur-[150px] animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-ndc-green/30 blur-[120px] animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-ndc-purple/30 blur-[100px] animate-pulse delay-1000"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Brand Section */}
          <div className="md:col-span-2 space-y-8 animate-fade-in">
            <div className="flex items-center mb-8 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/1562081e-2603-4dd2-8c30-cc01d2781a8b.png" 
                  alt="DCode Logo" 
                  className="h-20 w-auto mr-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ndc-purple to-ndc-blue opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full blur-xl"></div>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white transition-all duration-500 group-hover:scale-105">DCode</h3>
                <h4 className="text-2xl font-medium text-white/90 transition-all duration-500 group-hover:text-ndc-blue">Developers Club</h4>
              </div>
            </div>
            <p className="text-gray-300 text-xl leading-relaxed max-w-lg transition-all duration-500 hover:text-white hover:scale-105">
              Empowering students through technology, innovation, and community. Join us in building the future of tech together.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/ddsc.club/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-pink-500/30 p-5 rounded-2xl transition-all duration-500 hover:scale-125 hover:rotate-12 group backdrop-blur-md border border-white/20 hover:border-pink-400/50">
                <Instagram className="h-7 w-7 text-white group-hover:text-pink-400 transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/dcodeclub" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-blue-500/30 p-5 rounded-2xl transition-all duration-500 hover:scale-125 hover:-rotate-12 group backdrop-blur-md border border-white/20 hover:border-blue-400/50">
                <Linkedin className="h-7 w-7 text-white group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a href="mailto:ddsc.team@gmail.com" className="bg-white/10 hover:bg-red-500/30 p-5 rounded-2xl transition-all duration-500 hover:scale-125 hover:rotate-12 group backdrop-blur-md border border-white/20 hover:border-red-400/50">
                <Mail className="h-7 w-7 text-white group-hover:text-red-400 transition-colors duration-300" />
              </a>
              <a href="https://chat.whatsapp.com/GzsHCCMYjeAIYGmhpQnXC6" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-green-500/30 p-5 rounded-2xl transition-all duration-500 hover:scale-125 hover:-rotate-12 group backdrop-blur-md border border-white/20 hover:border-green-400/50">
                <svg className="h-7 w-7 text-white group-hover:text-green-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690"/>
                </svg>
              </a>
              <a href="https://t.me/+2BZEBRGj6Y5iOTM9" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-blue-400/30 p-5 rounded-2xl transition-all duration-500 hover:scale-125 hover:rotate-12 group backdrop-blur-md border border-white/20 hover:border-blue-300/50">
                <svg className="h-7 w-7 text-white group-hover:text-blue-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Enhanced Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold mb-10 text-white relative inline-block group">
              Quick Links
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue rounded-full transition-all duration-500 group-hover:h-2"></div>
            </h3>
            <ul className="space-y-6">
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
                    className="text-gray-300 hover:text-white transition-all duration-500 flex items-center gap-4 group py-3 hover:scale-105"
                  >
                    <span className={`w-0 h-1 bg-${link.color} group-hover:w-8 transition-all duration-500 rounded-full`}></span>
                    <span className="group-hover:translate-x-3 transition-all duration-500 text-lg group-hover:text-xl">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Enhanced Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-bold mb-10 text-white relative inline-block group">
              Contact Us
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-ndc-blue to-ndc-green rounded-full transition-all duration-500 group-hover:h-2"></div>
            </h3>
            <ul className="space-y-10">
              <li className="group hover:scale-105 transition-all duration-500">
                <div className="flex items-start gap-5">
                  <div className="p-5 rounded-2xl bg-white/10 group-hover:bg-ndc-blue/30 transition-all duration-500 mt-1 backdrop-blur-md border border-white/20 group-hover:border-ndc-blue/50 group-hover:scale-110">
                    <Mail className="h-7 w-7 text-ndc-blue transition-all duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-white/90 block mb-3 text-xl">Email</span>
                    <a href="mailto:ddsc.team@gmail.com" className="text-gray-300 hover:text-white transition-all duration-300 text-lg hover:underline">
                      ddsc.team@gmail.com
                    </a>
                  </div>
                </div>
              </li>
              <li className="group hover:scale-105 transition-all duration-500">
                <div className="flex items-start gap-5">
                  <div className="p-5 rounded-2xl bg-white/10 group-hover:bg-ndc-green/30 transition-all duration-500 mt-1 backdrop-blur-md border border-white/20 group-hover:border-ndc-green/50 group-hover:scale-110">
                    <MapPin className="h-7 w-7 text-ndc-green transition-all duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-white/90 block mb-3 text-xl">Location</span>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Shri Shivaji Institute of Engineering and Management Studies
                    </p>
                  </div>
                </div>
              </li>
              <li className="group hover:scale-105 transition-all duration-500">
                <div className="flex items-start gap-5">
                  <div className="p-5 rounded-2xl bg-white/10 group-hover:bg-ndc-purple/30 transition-all duration-500 mt-1 backdrop-blur-md border border-white/20 group-hover:border-ndc-purple/50 group-hover:scale-110">
                    <ExternalLink className="h-7 w-7 text-ndc-purple transition-all duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-white/90 block mb-3 text-xl">Website</span>
                    <a href="https://ssiems.org.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all duration-300 text-lg hover:underline">
                      ssiems.org.in
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Enhanced Bottom Section with Professional "Made with ❤️" */}
        <div className="border-t border-white/20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <p className="text-gray-400 text-xl transition-all duration-300 hover:text-white">
                © {new Date().getFullYear()} DCode Developers Club. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4 text-gray-400 group">
              <span className="text-xl transition-all duration-300 group-hover:text-white">Made with</span>
              <button
                onClick={handleHeartClick}
                className={`transition-all duration-300 hover:scale-125 cursor-pointer ${
                  heartClicked ? 'animate-bounce' : ''
                }`}
              >
                <Heart 
                  className={`h-6 w-6 text-red-500 fill-red-500 transition-all duration-300 hover:text-red-400 hover:fill-red-400 ${
                    heartClicked ? 'scale-150 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]' : ''
                  }`} 
                />
              </button>
              <span className="text-xl transition-all duration-300 group-hover:text-white">by</span>
              <div className="relative">
                <a 
                  href="https://www.linkedin.com/in/techdanish/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-2xl bg-gradient-to-r from-ndc-purple via-ndc-blue to-ndc-green text-transparent bg-clip-text hover:scale-110 cursor-pointer transition-all duration-500 relative inline-block group-hover:animate-pulse"
                >
                  Syed Danish
                </a>
                <div className="absolute inset-0 bg-gradient-to-r from-ndc-purple via-ndc-blue to-ndc-green opacity-0 hover:opacity-20 transition-opacity duration-500 blur-xl rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
