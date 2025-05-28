
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

const HeroSection = () => {
  const handleJoinClick = () => {
    window.open("https://forms.gle/ke3hyQjEtDZWPkyL7", "_blank");
  };

  return (
    <section className="min-h-screen bg-slate-900 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            {/* Logo */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/1aa546c5-d84a-4173-99da-48c297e452a9.png" 
                alt="DCode Developers Club" 
                className="h-20 w-auto" 
              />
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Join a Community of{" "}
              <span className="text-blue-500">Builders.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-lg">
              Connect with passionate developers, learn cutting-edge technologies, 
              and build impactful projects that shape the future of technology.
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

          {/* Right Column - Illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Main container */}
              <div className="w-96 h-96 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                {/* Code editor mockup */}
                <div className="w-full h-full p-8">
                  {/* Header bar */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  {/* Code lines */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-sm">1</span>
                      <div className="h-4 bg-blue-500 rounded w-24"></div>
                      <div className="h-4 bg-slate-600 rounded w-16"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-sm">2</span>
                      <div className="h-4 bg-slate-600 rounded w-8"></div>
                      <div className="h-4 bg-green-500 rounded w-32"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-sm">3</span>
                      <div className="h-4 bg-slate-600 rounded w-12"></div>
                      <div className="h-4 bg-purple-500 rounded w-20"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-sm">4</span>
                      <div className="h-4 bg-blue-500 rounded w-28"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-sm">5</span>
                      <div className="h-4 bg-slate-600 rounded w-6"></div>
                      <div className="h-4 bg-orange-500 rounded w-24"></div>
                    </div>
                  </div>

                  {/* Code icon */}
                  <div className="absolute bottom-8 right-8">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Code2 className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-lg opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-500 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
