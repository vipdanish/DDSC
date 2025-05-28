
import { useTheme } from "@/hooks/use-theme";

const AboutSection = () => {
  const { theme } = useTheme();
  
  return (
    <section id="about" className={`py-20 ${
      theme === 'light' ? 'bg-gray-100' : 'bg-secondary/30'
    }`}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`heading-md mb-6 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            About <span className="gradient-text">DCode</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className={`text-lg ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            The DCode Developers Club is a student-driven community dedicated to empowering the next generation of 
            technology leaders through hands-on learning, collaboration, and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className={`p-8 space-y-6 rounded-xl border backdrop-blur-lg ${
            theme === 'light' 
              ? 'bg-white/80 border-gray-200 shadow-lg' 
              : 'bg-black/20 border-white/10'
          }`}>
            <h3 className={`heading-sm text-ndc-purple ${
              theme === 'light' ? 'text-purple-700' : ''
            }`}>Our Vision</h3>
            <p className={`${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              To create a thriving ecosystem where students can transform their technical knowledge into real-world solutions, 
              developing the skills and mindset necessary to lead technological innovation in the future.
            </p>
          </div>
          
          <div className={`p-8 space-y-6 rounded-xl border backdrop-blur-lg ${
            theme === 'light' 
              ? 'bg-white/80 border-gray-200 shadow-lg' 
              : 'bg-black/20 border-white/10'
          }`}>
            <h3 className={`heading-sm text-ndc-blue ${
              theme === 'light' ? 'text-blue-700' : ''
            }`}>Our Mission</h3>
            <p className={`${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
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
