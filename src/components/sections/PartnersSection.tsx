import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAssetPath } from "@/lib/utils";

const PartnersSection = () => {
  const partners = [
    {
      name: "Shri Shivaji Institute of Engineering and Management Studies",
      description: "Our official academic partner providing resources, spaces, and academic support for the club's activities and growth.",
      logo: "images/ssiems-logo.png",
      label: "Official Academic Partner",
      labelColor: "text-ndc-blue",
      website: "https://ssiems.org.in/"
    },
    {
      name: "GDG on Campus PES College of Engineering - Aurangabad, India",
      description: "Supporting our technical events and providing access to Google technologies and resources for our student community.",
      logo: "images/a962026c-ed9f-4509-9ff7-86ec7bad35d9.png",
      label: "Technical Community Partner",
      labelColor: "text-ndc-green",
      website: "https://gdsc.community.dev/"
    },
    {
      name: "Kotlin User Group - Sambhajinagar (Aurangabad)",
      description: "A vibrant community of developers and enthusiasts passionate about Kotlin and its ecosystem.",
      logo: "images/41ae9005-9437-499b-8302-f5546c3214e0.png",
      label: "Technical Community Partner",
      labelColor: "text-ndc-purple",
      website: "https://kotlinlang.org/community/"
    },
    {
      name: "Women Techmakers Aurangabad (Chh. Sambhajinagar)",
      description: "Providing visibility, community, and resources for women in technology to drive innovation and participation.",
      logo: "images/41ae9005-9437-499b-8302-f5546c3214e0.png",
      label: "Diversity & Inclusion Partner",
      labelColor: "text-ndc-blue",
      website: "https://www.womentechmakers.com/"
    }
  ];
  
  return (
    <section id="partners" className="py-16 md:py-20 bg-transparent scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="heading-md mb-4">Our <span className="gradient-text">Partners</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We collaborate with leading organizations to bring the best opportunities to our members.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="border rounded-2xl p-6 transition-all duration-300 group backdrop-blur-xl bg-black/30 border-white/10 shadow-xl hover:shadow-ndc-blue/20"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Logo */}
                <div className="flex-shrink-0 w-full sm:w-32 flex justify-center">
                  <img 
                    src={getAssetPath(partner.logo)} 
                    alt={`${partner.name} Logo`} 
                    className="h-24 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-foreground mb-2 truncate sm:whitespace-normal">
                    {partner.name}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-3 line-clamp-2">
                    {partner.description}
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-medium px-3 py-1 rounded-full text-xs bg-white/10 text-white">
                      {partner.label}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-8 text-xs"
                      onClick={() => window.open(partner.website, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Visit
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
