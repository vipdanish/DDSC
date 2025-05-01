
const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-md mb-6">Our <span className="gradient-text">Partners</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            We collaborate with leading organizations and institutions to bring the best opportunities to our members.
          </p>
        </div>

        <div className="glass-card p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img 
                src="/ssiems-logo.png" 
                alt="SSIEMS Logo" 
                className="max-h-48 object-contain"
              />
            </div>
            <div>
              <h3 className="heading-sm mb-4">Shri Shivaji Institute of Engineering and Management Studies</h3>
              <p className="text-gray-300 mb-4">
                Our official academic partner providing resources, spaces, and academic support for the club's activities and growth.
              </p>
              <p className="text-ndc-blue font-medium">Official Academic Partner</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
