
import { Button } from "@/components/ui/button";

const JoinSection = () => {
  const handleJoinClick = () => {
    window.open("https://forms.gle/ke3hyQjEtDZWPkyL7", "_blank");
  };

  return (
    <section id="join" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-ndc-purple/20 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-ndc-blue/20 blur-[100px] animate-pulse-slow"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="heading-md mb-6">Ready to <span className="gradient-text">Join Us?</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Take the first step towards an exciting journey of learning, building, and growing with a community of tech enthusiasts.
          </p>
        </div>
        
        <div className="max-w-md mx-auto glass-card p-8 hover:shadow-lg hover:shadow-ndc-purple/10 transition-all duration-300 transform hover:-translate-y-1">
          <div className="text-center">
            <img src="/lovable-uploads/1cf4c0d1-cdfb-4d0a-9466-63096565f5d4.png" alt="NDC Logo" className="h-16 w-auto mx-auto mb-6 animate-pulse-slow" />
            <p className="text-gray-300 mb-6">
              Click below to fill out our membership application form and join the NextGen Developer Club today!
            </p>
            <Button onClick={handleJoinClick} className="w-full btn-primary group transition-all duration-300">
              <span className="group-hover:mr-2 transition-all duration-300">Apply to Join</span>
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
