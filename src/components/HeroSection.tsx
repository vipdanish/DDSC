
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Abstract background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-ndc-purple/20 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-ndc-blue/20 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="heading-lg mb-6">
              Open Minds, <span className="gradient-text">Open Code.</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl">Build. Learn. Lead.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Join a community that empowers you to build real-world projects, master cutting-edge technologies, and lead innovation in the tech world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary text-lg">Join the Club</Button>
              <Button variant="outline" className="btn-outline text-lg">Learn More</Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-ndc-purple/80 via-ndc-blue/80 to-ndc-green/80 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
              <img 
                src="/code-illustration.svg" 
                alt="Coding Illustration" 
                className="absolute inset-0 w-full h-full object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
