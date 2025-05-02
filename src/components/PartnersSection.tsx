
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

const PartnersSection = () => {
  const { theme } = useTheme();
  
  const partners = [
    {
      name: "Shri Shivaji Institute of Engineering and Management Studies",
      description: "Our official academic partner providing resources, spaces, and academic support for the club's activities and growth.",
      logo: "/lovable-uploads/8f2aac09-11e4-414a-929d-997fd9338097.png",
      label: "Official Academic Partner",
      labelColor: "text-ndc-blue",
      website: "https://ssiems.org.in/"
    },
    {
      name: "GDG on Campus PES College of Engineering - Aurangabad, India",
      description: "Supporting our technical events and providing access to Google technologies and resources for our student community.",
      logo: "/lovable-uploads/a962026c-ed9f-4509-9ff7-86ec7bad35d9.png",
      label: "Technical Community Partner",
      labelColor: "text-ndc-green",
      website: "https://gdsc.community.dev/"
    },
    {
      name: "Kotlin User Group - Sambhajinagar (Aurangabad)",
      description: "A vibrant community of developers and enthusiasts passionate about Kotlin and its ecosystem.",
      logo: "/lovable-uploads/41ae9005-9437-499b-8302-f5546c3214e0.png",
      label: "Technical Community Partner",
      labelColor: "text-ndc-purple",
      website: "https://kotlinlang.org/community/"
    },
    {
      name: "Women Techmakers Aurangabad (Chh. Sambhajinagar)",
      description: "Providing visibility, community, and resources for women in technology to drive innovation and participation.",
      logo: "/lovable-uploads/4a60b97e-f6a6-4643-8871-18e17c8abd9d.png",
      label: "Diversity & Inclusion Partner",
      labelColor: "text-ndc-blue",
      website: "https://www.womentechmakers.com/"
    }
  ];
  
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
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={`${theme === 'light' ? 'bg-white shadow-lg border border-gray-100' : 'glass-card'} p-8 transform hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center animate-float">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`} 
                    className="max-h-48 object-contain"
                  />
                </div>
                <div className="animate-fade-in">
                  <h3 className={`heading-sm mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{partner.name}</h3>
                  <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} mb-4`}>
                    {partner.description}
                  </p>
                  <div className="flex items-center">
                    <span className={`${partner.labelColor} font-medium mr-4`}>{partner.label}</span>
                    <Button variant="outline" size="sm" className={`flex items-center gap-2 ${theme === 'light' ? 'hover:bg-gray-50' : 'hover:bg-ndc-blue/10'}`} onClick={() => window.open(partner.website, '_blank')}>
                      Visit Website
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
