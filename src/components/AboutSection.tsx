
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-md mb-6">About <span className="gradient-text">DCode</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            The DCode Developers Club is a student-driven community dedicated to empowering the next generation of 
            technology leaders through hands-on learning, collaboration, and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="glass-card p-8 space-y-6">
            <h3 className="heading-sm text-ndc-purple">Our Vision</h3>
            <p className="text-gray-300">
              To create a thriving ecosystem where students can transform their technical knowledge into real-world solutions, 
              developing the skills and mindset necessary to lead technological innovation in the future.
            </p>
          </div>
          
          <div className="glass-card p-8 space-y-6">
            <h3 className="heading-sm text-ndc-blue">Our Mission</h3>
            <p className="text-gray-300">
              To provide students with opportunities to work on real-world projects, learn cutting-edge technologies, 
              build strong portfolios, and connect with industry professionals and like-minded peers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
