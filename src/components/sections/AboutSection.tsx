const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-transparent scroll-mt-28 md:scroll-mt-32">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="heading-md mb-4 text-white">
            About <span className="gradient-text">DCode</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            The DCode Developers Club is a student-driven community dedicated to empowering the next generation of 
            technology leaders through hands-on learning, collaboration, and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="p-8 space-y-6 rounded-xl border backdrop-blur-xl bg-black/20 border-white/10 shadow-2xl shadow-ndc-purple/10 hover:scale-105 transition-transform duration-500">
            <h3 className="heading-sm text-ndc-purple">Our Vision</h3>
            <p className="text-gray-200">
              To create a thriving ecosystem where students can transform their technical knowledge into real-world solutions, 
              developing the skills and mindset necessary to lead technological innovation in the future.
            </p>
          </div>
          
          <div className="p-8 space-y-6 rounded-xl border backdrop-blur-xl bg-black/20 border-white/10 shadow-2xl shadow-ndc-blue/10 hover:scale-105 transition-transform duration-500">
            <h3 className="heading-sm text-ndc-blue">Our Mission</h3>
            <p className="text-gray-200">
              To provide students with opportunities to work on real-world projects, learn cutting-edge technologies, 
              build strong portfolios, and connect with industry professionals and like-minded peers.
            </p>
          </div>
        </div>

        {/* Track Record / Achievements Summary */}
        <div className="mt-16 animate-fade-in">
          <div className="p-10 rounded-3xl border border-white/10 bg-slate-900/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ndc-purple/10 blur-[100px] -mr-32 -mt-32 transition-all duration-700 group-hover:bg-ndc-purple/20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-ndc-blue/10 blur-[100px] -ml-32 -mb-32 transition-all duration-700 group-hover:bg-ndc-blue/20"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-black mb-4 text-white">Proven Track Record</h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  DCode members have consistently showcased their technical excellence across national stages like Smart India Hackathon and IIT Bombay Techfest. 
                  Our journey is defined by participation in high-stakes innovation challenges and competitive coding arenas.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-ndc-purple animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-200 uppercase tracking-wider">SIH Nationalists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-ndc-blue animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-200 uppercase tracking-wider">IIT-B Finalists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-ndc-green animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-200 uppercase tracking-wider">National Rankers</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all hover:scale-105">
                  <div className="text-3xl font-black text-ndc-purple mb-1">08+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">SIH Squads</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all hover:scale-105">
                  <div className="text-3xl font-black text-ndc-blue mb-1">4th</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Techfest Rank</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
