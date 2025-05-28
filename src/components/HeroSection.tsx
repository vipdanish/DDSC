
import { Button } from "@/components/ui/button";
import { Code2, Users, Trophy } from "lucide-react";

const HeroSection = () => {
  const handleJoinClick = () => {
    window.open("https://forms.gle/ke3hyQjEtDZWPkyL7", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"></div>
      
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Logo */}
              <div className="flex justify-center lg:justify-start mb-8">
                <img 
                  src="/lovable-uploads/1562081e-2603-4dd2-8c30-cc01d2781a8b.png" 
                  alt="DCode Logo" 
                  className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300" 
                />
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Inter'] leading-tight mb-6 animate-fade-in">
                <span className="text-white">Empowering Developers.</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 text-transparent bg-clip-text">
                  Building the Future Together.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
                Join a community of passionate developers where innovation meets collaboration. 
                Learn cutting-edge technologies, build impactful projects, and shape the future of tech.
              </p>

              {/* Feature highlights */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10 animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center gap-2 text-gray-300">
                  <Code2 className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium">Real Projects</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="h-5 w-5 text-purple-400" />
                  <span className="text-sm font-medium">Expert Mentorship</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Trophy className="h-5 w-5 text-teal-400" />
                  <span className="text-sm font-medium">Career Growth</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
                <Button 
                  onClick={handleJoinClick} 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Join the Club
                </Button>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: '800ms' }}>
              <div className="relative">
                {/* Main illustration container */}
                <div className="relative w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  {/* Code illustration */}
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                      <Code2 className="h-12 w-12 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gradient-to-r from-blue-400 to-transparent rounded-full w-32 mx-auto"></div>
                      <div className="h-2 bg-gradient-to-r from-purple-400 to-transparent rounded-full w-24 mx-auto"></div>
                      <div className="h-2 bg-gradient-to-r from-teal-400 to-transparent rounded-full w-28 mx-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-teal-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
