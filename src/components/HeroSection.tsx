
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
        <div className="flex flex-col items-center text-center">
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
