
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="heading-md mb-6">Our <span className="gradient-text">Partners</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            We collaborate with leading organizations and institutions to bring the best opportunities to our members.
          </p>
        </div>

        <div className="glass-card p-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center animate-float">
              <img 
                src="/lovable-uploads/8f2aac09-11e4-414a-929d-997fd9338097.png" 
                alt="SSIEMS Logo" 
                className="max-h-48 object-contain"
              />
            </div>
            <div className="animate-fade-in">
              <h3 className="heading-sm mb-4">Shri Shivaji Institute of Engineering and Management Studies</h3>
              <p className="text-gray-300 mb-4">
                Our official academic partner providing resources, spaces, and academic support for the club's activities and growth.
              </p>
              <div className="flex items-center">
                <span className="text-ndc-blue font-medium mr-4">Official Academic Partner</span>
                <Button variant="outline" size="sm" className="flex items-center gap-2 hover:bg-ndc-blue/10" onClick={() => window.open('https://ssiems.org.in/', '_blank')}>
                  Visit Website
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
