/**
 * AchievementsSection
 * Renders the Participations & Achievements grid with category filters and search.
 * Includes a premium header, responsive grid cards, and a bottom CTA to join.
 */
import { useState, useMemo } from "react";
import { Code, Terminal, Cpu, Zap, Trophy, Award, ExternalLink, Sparkles, Calendar, MapPin, ChevronRight, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import { achievements } from "@/data/achievements";
import { getAssetPath } from "@/lib/utils";

const AchievementsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = useMemo(() => {
    const cats = ["All", ...new Set(achievements.map(a => a.category))];
    return cats;
  }, []);

  const filteredAchievements = useMemo(() => {
    const byCategory = activeCategory === "All" ? achievements : achievements.filter(a => a.category === activeCategory);
    const term = searchTerm.trim().toLowerCase();
    if (!term) return byCategory;
    return byCategory.filter(a => 
      a.title.toLowerCase().includes(term) ||
      (a.description?.toLowerCase().includes(term))
    );
  }, [activeCategory, searchTerm]);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'code': return <Code className="w-4 h-4" />;
      case 'terminal': return <Terminal className="w-4 h-4" />;
      case 'cpu': return <Cpu className="w-4 h-4" />;
      case 'zap': return <Zap className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="events" className="py-24 md:py-24 relative overflow-hidden bg-transparent scroll-mt-28 md:scroll-mt-32">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ndc-purple/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-ndc-blue/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple mb-6 backdrop-blur-md">
            <Trophy className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Excellence in Action</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight tracking-tight">
            Participations & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Celebrating technical excellence and innovation from national hackathons to premier technical festivals.
          </p>
        </div>

        {/* Category Filters - Refined UI */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 animate-fade-in" style={{ animationDelay: '100ms' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border flex items-center gap-2 ${
                activeCategory === cat
                  ? "bg-ndc-purple text-white border-ndc-purple shadow-lg scale-105"
                  : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white hover:border-white/10"
              }`}
            >
              {cat === "All" && <LayoutGrid size={12} />}
              {cat}
            </button>
          ))}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search achievements..."
            className="w-full sm:w-64 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest bg-white/5 text-gray-300 border border-white/5 placeholder:text-gray-500 focus:outline-none focus:border-ndc-purple/40 transition-all"
            aria-label="Search achievements"
          />
        </div>

        {/* Unified Grid - Perfect Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredAchievements.map((achievement, index) => (
            <Link 
              key={achievement.id}
              to={`/achievement/${achievement.id}`}
              className="group relative flex flex-col h-full rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-ndc-purple/30 hover:bg-white/[0.04] animate-fade-in active:scale-[0.98]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container - Premium Interaction */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={getAssetPath(achievement.images[0])} 
                  alt={achievement.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                
                {/* View Details Hint Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-ndc-purple/5 backdrop-blur-[1px] z-10">
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[9px] font-bold text-white uppercase tracking-widest">View Details</span>
                    <ChevronRight className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Tags Section - Clean Placement */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/5 text-white">
                    {getIcon(achievement.icon)}
                    <span className="text-[8px] font-bold uppercase tracking-wider">{achievement.category}</span>
                  </div>
                  {achievement.highlight && (
                    <div className="px-2.5 py-1 rounded-lg bg-ndc-purple/90 text-white text-[8px] font-bold uppercase tracking-widest shadow-lg">
                      {achievement.highlight}
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section - Polished Typography */}
              <div className="p-6 flex flex-col flex-1 relative z-20">
                <h3 className="text-lg font-bold text-white group-hover:text-ndc-purple transition-colors line-clamp-2 leading-tight mb-3 tracking-tight">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-6 flex-1 font-medium">
                  {achievement.description}
                </p>

                {/* Footer Metadata - Detailed Info */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3 text-gray-500 text-[9px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5 group-hover:text-gray-400 transition-colors">
                      <Calendar className="w-3 h-3 text-ndc-blue" />
                      {achievement.date?.split('/')[2] || achievement.date || '2025'}
                    </span>
                    <span className="flex items-center gap-1.5 group-hover:text-gray-400 transition-colors">
                      <MapPin className="w-3 h-3 text-ndc-blue" />
                      {achievement.location?.split(',')[0] || achievement.location}
                    </span>
                  </div>
                  
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-ndc-purple transition-all group-hover:bg-ndc-purple group-hover:text-white">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA - Premium Callout */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md max-w-4xl mx-auto group hover:border-ndc-purple/20 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="text-left">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">Ready to join our success story?</h4>
                <p className="text-gray-500 font-medium text-base">Be part of our next national-level challenge and grow your skills.</p>
              </div>
              <a 
                href="https://forms.gle/CHamTqBMouu6ucYa7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-ndc-purple to-ndc-blue text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all hover:shadow-lg active:scale-95 whitespace-nowrap"
              >
                Join the Squad
                <Sparkles className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple Filter Icon for UI
const FilterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

export default AchievementsSection;
