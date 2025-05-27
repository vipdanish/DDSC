
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleJoinClick = () => {
    window.open("https://forms.gle/ke3hyQjEtDZWPkyL7", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
      {/* Futuristic 3D Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Main neon gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-purple-600/30 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-purple-600/30 via-blue-500/30 to-cyan-400/30 blur-[100px] animate-pulse-slow delay-300"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 blur-[90px] animate-pulse-slow delay-700"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-cyan-400/40 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-1/3 w-12 h-12 border-2 border-purple-500/40 animate-rotate-3d"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-blue-400/40 rotate-12 animate-hologram"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-particle-float opacity-60"></div>
        
        {/* Hexagon wireframes */}
        <div className="absolute top-32 right-20">
          <div className="w-24 h-24 border-2 border-cyan-400/30 transform rotate-45 animate-float" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        </div>
        <div className="absolute bottom-40 left-40">
          <div className="w-16 h-16 border border-purple-500/40 transform rotate-12 animate-hologram" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        </div>
        
        {/* Circuit-like patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent absolute top-20 left-10 animate-pulse-slow"></div>
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-purple-500 to-transparent absolute top-40 left-28 animate-pulse-slow delay-300"></div>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent absolute bottom-32 right-20 animate-pulse-slow delay-700"></div>
        </div>
        
        {/* Holographic particles */}
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-particle-float opacity-80"></div>
        <div className="absolute bottom-1/2 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-particle-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-particle-float opacity-70" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 animate-slide-slow"></div>
        
        {/* Enhanced neon light trails */}
        <div className="hidden md:block absolute h-px w-[40%] top-1/4 left-0 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse-slow"></div>
        <div className="hidden md:block absolute h-px w-[35%] bottom-1/3 right-0 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="hidden md:block absolute h-px w-[25%] top-1/2 right-1/4 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo with holographic effect */}
          <div className="relative mb-8">
            <img 
              src="/lovable-uploads/1562081e-2603-4dd2-8c30-cc01d2781a8b.png" 
              alt="DCode Logo" 
              className="h-32 w-auto animate-hologram relative z-10" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-xl animate-pulse-glow"></div>
          </div>
          
          {/* Futuristic headline */}
          <h1 className="cyber-heading mb-8 animate-fade-in">
            <span className="block futuristic-text animate-text-glow">OPEN MINDS</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.2em] text-cyan-300 mt-2 opacity-90">OPEN CODE</span>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-cyan-400 animate-pulse-slow">BUILD.</span>
              <span className="text-blue-400 animate-pulse-slow" style={{ animationDelay: '0.5s' }}>LEARN.</span>
              <span className="text-purple-400 animate-pulse-slow" style={{ animationDelay: '1s' }}>LEAD.</span>
            </div>
          </h1>
          
          {/* Enhanced description */}
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '300ms' }}>
            Step into the future of development. Join an elite community where 
            <span className="text-cyan-400 font-medium"> cutting-edge technologies</span> meet 
            <span className="text-purple-400 font-medium"> innovative minds</span>, and where your code shapes tomorrow.
          </p>
          
          {/* CTA Button with enhanced glow */}
          <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Button 
              onClick={handleJoinClick} 
              className="btn-cyber group relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:mr-3 transition-all duration-300 font-orbitron tracking-wider">
                INITIALIZE CONNECTION
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10">
                →
              </span>
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </Button>
          </div>
          
          {/* Status indicator */}
          <div className="mt-8 flex items-center gap-3 animate-fade-in" style={{ animationDelay: '900ms' }}>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-slow shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
            <span className="text-sm text-gray-400 font-mono tracking-wider">SYSTEM STATUS: ONLINE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
