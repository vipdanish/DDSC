
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

const PartnersSection = () => {
  const { theme } = useTheme();
  
  return (
    <section id="partners" className={theme === 'light' ? 'py-20 bg-gray-50' : 'py-20 bg-secondary/30'}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="heading-md mb-6">Our <span className="gradient-text">Partners</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            We collaborate with leading organizations and institutions to bring the best opportunities to our members.
          </p>
        </div>

        <div className="space-y-8">
          <div className={`${theme === 'light' ? 'bg-white shadow-lg border border-gray-100' : 'glass-card'} p-8 transform hover:scale-[1.02] transition-all duration-300`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center animate-float">
                <img 
                  src="/lovable-uploads/8f2aac09-11e4-414a-929d-997fd9338097.png" 
                  alt="SSIEMS Logo" 
                  className="max-h-48 object-contain"
                />
              </div>
              <div className="animate-fade-in">
                <h3 className={`heading-sm mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Shri Shivaji Institute of Engineering and Management Studies</h3>
                <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} mb-4`}>
                  Our official academic partner providing resources, spaces, and academic support for the club's activities and growth.
                </p>
                <div className="flex items-center">
                  <span className="text-ndc-blue font-medium mr-4">Official Academic Partner</span>
                  <Button variant="outline" size="sm" className={`flex items-center gap-2 ${theme === 'light' ? 'hover:bg-gray-50' : 'hover:bg-ndc-blue/10'}`} onClick={() => window.open('https://ssiems.org.in/', '_blank')}>
                    Visit Website
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`${theme === 'light' ? 'bg-white shadow-lg border border-gray-100' : 'glass-card'} p-8 transform hover:scale-[1.02] transition-all duration-300`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center animate-float">
                <img 
                  src="/lovable-uploads/a962026c-ed9f-4509-9ff7-86ec7bad35d9.png" 
                  alt="GDG Logo" 
                  className="max-h-48 object-contain"
                />
              </div>
              <div className="animate-fade-in">
                <h3 className={`heading-sm mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>GDG on Campus PES College of Engineering - Aurangabad, India</h3>
                <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} mb-4`}>
                  Supporting our technical events and providing access to Google technologies and resources for our student community.
                </p>
                <div className="flex items-center">
                  <span className="text-ndc-green font-medium mr-4">Technical Community Partner</span>
                  <Button variant="outline" size="sm" className={`flex items-center gap-2 ${theme === 'light' ? 'hover:bg-gray-50' : 'hover:bg-ndc-green/10'}`} onClick={() => window.open('https://gdsc.community.dev/', '_blank')}>
                    Visit GDG Community
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
