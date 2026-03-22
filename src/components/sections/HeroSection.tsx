import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";
import { Sparkles, Code2, Rocket, Users } from "lucide-react";

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const handleJoinClick = () => {
    window.open("https://forms.gle/CHamTqBMouu6ucYa7", "_blank");
  };

  const slides = [
    {
      title: "Building the Future of Technology Together.",
      subtitle: "DCode Developers Student Club",
      description: "A hub for tech enthusiasts to grow skills, work on impactful projects, and build their future together at SSIEMS.",
      icon: <Sparkles className="w-6 h-6 text-ndc-purple" />,
      tag: "🚀 Innovation Hub"
    },
    {
      title: "Master the Art of Modern Development.",
      subtitle: "Hands-on Learning Experience",
      description: "Dive deep into full-stack development, AI, and cloud computing through our specialized workshops and bootcamps.",
      icon: <Code2 className="w-6 h-6 text-ndc-blue" />,
      tag: "💻 Skill Up"
    },
    {
      title: "Collaborate on Real-World Projects.",
      subtitle: "Impactful Technical Solutions",
      description: "Work with a team of passionate developers to build software that solves actual problems and makes a difference.",
      icon: <Rocket className="w-6 h-6 text-ndc-green" />,
      tag: "🛠 Build & Deploy"
    },
    {
      title: "Join a Thriving Tech Community.",
      subtitle: "Network with Industry Experts",
      description: "Connect with like-minded peers, mentors, and industry professionals to accelerate your career in technology.",
      icon: <Users className="w-6 h-6 text-ndc-purple" />,
      tag: "🤝 Community First"
    }
  ];

  return (
    <section id="hero" className={`min-h-[calc(100vh-180px)] flex items-start pt-8 sm:pt-10 md:pt-12 relative overflow-hidden bg-transparent`}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-ndc-blue/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-ndc-purple/10 blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-4 sm:pt-6 pb-8 sm:pb-12 relative z-10 w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Column - Content */}
                <div className="text-center lg:text-left lg:col-span-1 animate-fade-in">
                  {/* Tagline */}
                  <div className="inline-block mb-6">
                    <span className="px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md border bg-white/10 text-white border-white/20">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className={word === 'Future' || word === 'Art' || word === 'Real-World' || word === 'Thriving' ? 'gradient-text' : ''}>
                        {word}{' '}
                      </span>
                    ))}
                  </h1>
        
                  {/* Subheading */}
                  <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center justify-center lg:justify-start gap-3 text-slate-200">
                    <span className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                      {slide.icon}
                    </span>
                    {slide.subtitle}
                  </h2>
        
                  {/* Description */}
                  <p className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-slate-300">
                    {slide.description}
                  </p>
        
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <Button 
                      onClick={handleJoinClick} 
                      className="font-bold px-8 py-5 text-lg h-auto bg-gradient-to-r from-ndc-purple via-blue-600 to-ndc-blue hover:from-ndc-blue hover:via-purple-600 hover:to-ndc-purple text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl"
                    >
                      Join the Club
                    </Button>
                    <a 
                      href="#events" 
                      className="text-base font-semibold flex items-center gap-2 hover:gap-4 transition-all duration-300 text-white hover:text-ndc-purple"
                      aria-label="View Achievements"
                    >
                      View Achievements <span className="text-xl">→</span>
                    </a>
                  </div>
                </div>
        
                {/* Right Column - Logo/Graphic */}
                <div className="hidden lg:flex justify-center items-center">
                  <div className="relative w-full max-w-lg group">
                    <div className="absolute inset-0 bg-gradient-to-r from-ndc-purple to-ndc-blue rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <img 
                      src="/images/Dcode-Logo.png" 
                      alt="DCode Developers Club Logo" 
                      className="w-full h-auto object-contain opacity-95 hover:opacity-100 transition-all duration-500 drop-shadow-2xl group-hover:scale-105 group-hover:rotate-2" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Navigation Controls */}
        <div className="mt-12 flex items-center justify-center lg:justify-start gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                selectedIndex === index 
                  ? 'w-10 bg-gradient-to-r from-ndc-purple to-ndc-blue shadow-[0_0_15px_rgba(139,51,234,0.5)]' 
                  : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 flex justify-center p-1 border-white/30">
          <div className="w-1 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
