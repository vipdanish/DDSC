
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Enhanced abstract background */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-ndc-purple/30 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-ndc-blue/30 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-60 h-60 rounded-full bg-ndc-green/20 blur-[80px] animate-pulse-slow"></div>
        
        {/* Animated elements */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-ndc-purple/40 rounded-full animate-float"></div>
        <div className="absolute top-40 right-1/3 w-12 h-12 bg-ndc-blue/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-ndc-green/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Code-like pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        
        {/* Particle trails */}
        <div className="hidden md:block absolute h-px w-[30%] top-1/4 left-0 bg-gradient-to-r from-transparent via-ndc-purple/50 to-transparent animate-pulse-slow"></div>
        <div className="hidden md:block absolute h-px w-[30%] bottom-1/3 right-0 bg-gradient-to-r from-transparent via-ndc-blue/50 to-transparent animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <img src="/lovable-uploads/39c21d43-126d-4494-81a1-86721a1dc1e7.png" alt="NDC Logo" className="h-28 w-auto mb-8 animate-float" />
          <h1 className="heading-lg mb-6">
            Open Minds, <span className="gradient-text">Open Code.</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl">Build. Learn. Lead.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
            Join a community that empowers you to build real-world projects, master cutting-edge technologies, and lead innovation in the tech world.
          </p>
          <div>
            <Button className="btn-primary text-lg">Join the Club</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
