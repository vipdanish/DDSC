
const PartnersSection = () => {
  const partners = [
    {
      name: "SkillOp",
      logo: "/lovable-uploads/c1b6a28e-d166-4a71-a4ff-b747968361b2.png",
      description: "Leading technology education platform"
    },
    {
      name: "Kotlin User Group - Sambhajinagar (Aurangabad)",
      logo: "/lovable-uploads/86cd7680-c4a5-4a27-a4e5-0e5dc28d6bde.png",
      description: "Kotlin development community"
    },
    {
      name: "SSIEMS",
      logo: "/ssiems-logo.png",
      description: "Educational excellence partner"
    }
  ];

  return (
    <section id="partners" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-ndc-green/20 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-ndc-purple/20 blur-[100px] animate-pulse-slow"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="heading-md mb-6">Our <span className="gradient-text">Partners</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-green to-ndc-purple mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            We collaborate with leading organizations to provide the best learning experiences and opportunities for our members.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="glass-card p-8 text-center group hover:shadow-lg hover:shadow-ndc-green/10 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 flex justify-center">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} Logo`}
                  className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-ndc-green transition-colors">
                {partner.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
