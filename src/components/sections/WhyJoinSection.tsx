import { Calendar, User, Code, Cloud, Terminal, Cpu, Zap, Share2 } from "lucide-react";

const WhyJoinSection = () => {
  const benefits = [
    {
      icon: <Terminal className="w-10 h-10 text-ndc-purple" />,
      title: "Hands-on Learning",
      description: "Work on real projects using the latest tools and frameworks in web development, mobile apps, and more."
    },
    {
      icon: <Cpu className="w-10 h-10 text-ndc-blue" />,
      title: "Cutting-edge Technologies",
      description: "Gain practical experience with cloud computing, AI/ML, and modern development workflows."
    },
    {
      icon: <Zap className="w-10 h-10 text-ndc-green" />,
      title: "Events & Workshops",
      description: "Attend tech talks, hackathons, and hands-on workshops led by industry experts and seniors."
    },
    {
      icon: <Share2 className="w-10 h-10 text-ndc-purple" />,
      title: "Community & Networking",
      description: "Connect with like-minded individuals, build your professional network, and find collaboration opportunities."
    }
  ];

  return (
    <section id="why-join" className="py-16 md:py-20 bg-transparent scroll-mt-28 md:scroll-mt-32">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block mb-3">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-ndc-purple/20 text-ndc-purple border border-ndc-purple/30">
              🚀 Growth & Opportunity
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why <span className="gradient-text">Join Us?</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto text-gray-300">
            Being part of the DCode Developers Club opens doors to valuable learning experiences, 
            professional growth opportunities, and a supportive community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 group backdrop-blur-xl bg-slate-800/40 border-white/10 hover:border-ndc-purple/50"
            >
              <div className="mb-6 p-4 rounded-2xl w-fit transition-transform duration-500 group-hover:scale-110 bg-white/5">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
              <p className="leading-relaxed text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
