
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

const HeroSection = () => {
  const { theme } = useTheme();
  
  const handleJoinClick = () => {
    window.open("https://forms.gle/ke3hyQjEtDZWPkyL7", "_blank");
  };

  return (
    <section className={`min-h-screen flex items-center pt-16 ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-gray-50 to-blue-50' 
        : 'bg-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content (Centered) */}
          <div className="text-center lg:text-left lg:col-span-1">
            {/* Main Headline */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              Welcome to{" "}
              <span className={`${
                theme === 'light' ? 'text-blue-600' : 'text-blue-500'
              }`}>DCode Developers Student Club</span>
            </h1>

            {/* Subheading */}
            <h2 className={`text-2xl md:text-3xl font-semibold mb-8 ${
              theme === 'light' ? 'text-gray-700' : 'text-slate-300'
            }`}>
              Join the Club That Builds the Future.
            </h2>

            {/* Description */}
            <p className={`text-lg mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
              theme === 'light' ? 'text-gray-600' : 'text-slate-400'
            }`}>
              DCode Developers Club is a hub for tech enthusiasts to grow skills, work on impactful projects, and build their future together.
            </p>

            {/* CTA Button */}
            <div>
              <Button 
                onClick={handleJoinClick} 
                className={`font-semibold px-8 py-4 text-lg h-auto ${
                  theme === 'light' 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
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
