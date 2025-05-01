
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleJoinClick = () => {
    window.open("https://forms.gle/ke3hyQjEtDZWPkyL7", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Enhanced abstract background with more animations */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient blobs with enhanced animations */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-ndc-purple/30 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-ndc-blue/30 blur-[100px] animate-pulse-slow delay-300"></div>
        <div className="absolute top-1/2 right-1/3 w-60 h-60 rounded-full bg-ndc-green/20 blur-[80px] animate-pulse-slow delay-700"></div>
        
        {/* Enhanced animated elements */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-ndc-purple/40 rounded-full animate-float"></div>
        <div className="absolute top-40 right-1/3 w-12 h-12 bg-ndc-blue/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-ndc-green/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-ndc-purple/30 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Code-like pattern overlay with animation */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 animate-slide-slow"></div>
        
        {/* Enhanced particle trails */}
        <div className="hidden md:block absolute h-px w-[30%] top-1/4 left-0 bg-gradient-to-r from-transparent via-ndc-purple/50 to-transparent animate-pulse-slow"></div>
        <div className="hidden md:block absolute h-px w-[30%] bottom-1/3 right-0 bg-gradient-to-r from-transparent via-ndc-blue/50 to-transparent animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="hidden md:block absolute h-px w-[20%] top-1/2 right-1/4 bg-gradient-to-r from-transparent via-ndc-green/50 to-transparent animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <img src="/lovable-uploads/1cf4c0d1-cdfb-4d0a-9466-63096565f5d4.png" alt="NDC Logo" className="h-28 w-auto mb-8 animate-float" />
          <h1 className="heading-lg mb-6 animate-fade-in">
            Open Minds, <span className="gradient-text">Open Code.</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl">Build. Learn. Lead.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
            Join a community that empowers you to build real-world projects, master cutting-edge technologies, and lead innovation in the tech world.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Button onClick={handleJoinClick} className="btn-primary text-lg group hover:scale-105 transition-transform">
              <span className="group-hover:mr-2 transition-all duration-300">Join the Club</span>
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
