/**
 * UpcomingEventsSection
 * Displays upcoming Hackathons, Workshops, and Competitions using centralized data.
 * Premium cards: icon + title + badge + bullet list + gradient CTA.
 */
import { Code2, Rocket, Globe, CheckCircle2, ChevronRight } from "lucide-react";
import { upcomingEvents } from "@/data/upcomingEvents";

const UpcomingEventsSection = () => {
  const getIcon = (key: string) => {
    switch (key) {
      case "hackathons":
        return <Rocket className="w-7 h-7 text-ndc-purple" />;
      case "workshops":
        return <Code2 className="w-7 h-7 text-ndc-blue" />;
      case "competitions":
        return <Globe className="w-7 h-7 text-ndc-green" />;
      default:
        return <Rocket className="w-7 h-7 text-ndc-purple" />;
    }
  };

  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden scroll-mt-28 md:scroll-mt-32">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ndc-purple/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-ndc-blue/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block mb-3">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-ndc-purple/20 text-ndc-purple border border-ndc-purple/30">
              🏆 Upcoming Events
            </span>
          </div>
          <h2 className="heading-md mb-6">
            Our <span className="gradient-text">Featured Events & Competitions</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue rounded-full"></div>
            <div className="w-2 h-2 bg-ndc-purple rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-ndc-blue to-ndc-purple rounded-full"></div>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            Upcoming hackathons, workshops, and coding competitions — details to be announced.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((item, index) => (
            <div key={index} className="group relative p-7 rounded-3xl transition-all duration-500 hover:-translate-y-1 border backdrop-blur-xl bg-white/[0.04] border-white/10 hover:border-ndc-purple/40">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-ndc-purple/10 to-ndc-blue/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              <div className="flex items-center justify-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/5">{getIcon(item.icon)}</div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                {item.points.map((p, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-ndc-purple/80" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://forms.gle/CHamTqBMouu6ucYa7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 bg-gradient-to-r from-ndc-purple to-ndc-blue text-white hover:opacity-90"
              >
                Get Notified
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
