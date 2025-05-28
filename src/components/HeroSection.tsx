
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleJoinClick = () => {
    window.open("https://forms.gle/ke3hyQjEtDZWPkyL7", "_blank");
  };

  return (
    <section className="min-h-screen bg-slate-900 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content (Centered) */}
          <div className="text-center lg:text-left lg:col-span-1">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Welcome to{" "}
              <span className="text-blue-500">DCode Developers Student Club</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-8">
              Join the Club That Builds the Future.
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              DCode Developers Club is a hub for tech enthusiasts to grow skills, work on impactful projects, and build their future together.
            </p>

            {/* CTA Button */}
            <div>
              <Button 
                onClick={handleJoinClick} 
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 text-lg h-auto"
              >
                Join the Club
              </Button>
            </div>
          </div>

          {/* Right Column - Logo/Graphic */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/0b4581fd-f89d-4ef3-877e-e95fcb8be971.png" 
                alt="DCode Developers Club Logo" 
                className="w-96 h-auto opacity-90 hover:opacity-100 transition-opacity duration-300" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
