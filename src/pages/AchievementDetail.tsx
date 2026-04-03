/**
 * AchievementDetail
 * Detailed view for a single achievement: gallery, overview, highlights, teams, judges, coordinators.
 * Includes related achievements grid and a lightbox for images.
 */
import { useParams, useNavigate, Link } from "react-router-dom";
import { achievements } from "@/data/achievements";
import { ChevronLeft, Calendar, MapPin, Trophy, ArrowLeft, ExternalLink, Sparkles, Code, Terminal, Cpu, Zap, ChevronRight, Award, CheckCircle2, Maximize2, X, Share2, Users, Info, ShieldCheck, Mail, Phone, User2, Layers, Quote, BarChart3, Target, Shield, Star, Users2, CalendarDays } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import CollegeHeader from "@/components/layout/CollegeHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";
import { toast } from "sonner";
import { getAssetPath } from "@/lib/utils";

const AchievementDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const achievement = achievements.find(a => a.id === Number(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Get related achievements (excluding current)
  const relatedAchievements = achievements
    .filter(a => a.id !== Number(id))
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [id]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isLightboxOpen) {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    }
  }, [isLightboxOpen]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!achievement) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl font-black mb-4">Achievement Not Found</h1>
        <Link 
          to="/#events"
          className="flex items-center gap-2 px-8 py-4 bg-ndc-purple rounded-xl hover:bg-ndc-purple/80 transition-all font-bold uppercase tracking-widest text-xs"
        >
          <ArrowLeft size={18} />
          Back to achievements
        </Link>
      </div>
    );
  }

  const getIcon = (iconType: string, className = "w-6 h-6") => {
    switch (iconType) {
      case 'code': return <Code className={className} />;
      case 'terminal': return <Terminal className={className} />;
      case 'cpu': return <Cpu className={className} />;
      case 'zap': return <Zap className={className} />;
      default: return <Code className={className} />;
    }
  };

  const getStatIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('date')) return <CalendarDays size={14} />;
    if (l.includes('focus') || l.includes('target')) return <Target size={14} />;
    if (l.includes('guidance') || l.includes('mentor')) return <Shield size={14} />;
    if (l.includes('teams') || l.includes('participants') || l.includes('students')) return <Users2 size={14} />;
    if (l.includes('rank') || l.includes('result') || l.includes('outcome')) return <Trophy size={14} />;
    if (l.includes('level') || l.includes('type')) return <Layers size={14} />;
    if (l.includes('selected') || l.includes('qualified')) return <Star size={14} />;
    if (l.includes('round')) return <BarChart3 size={14} />;
    return <Sparkles size={14} />;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % achievement.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + achievement.images.length) % achievement.images.length);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <CollegeHeader />
      <Navbar />
      
      <main className="pb-24">
        <div className="section-container max-w-6xl">
          {/* Top Actions Bar */}
          <div className="flex items-center justify-between mb-12 animate-fade-in">
            <Link 
              to="/#events"
              className="group flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-xl text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-500"
            >
              <div className="p-1 rounded-lg bg-white/5 group-hover:bg-ndc-purple/20 group-hover:text-ndc-purple transition-all duration-500">
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-500" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.15em]">Back to achievements</span>
            </Link>
            
            <button 
              onClick={copyToClipboard}
              className="group flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-xl text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-500"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.15em]">
                {isCopied ? "Link Copied" : "Share Story"}
              </span>
              <div className={`p-1 rounded-lg bg-white/5 transition-all duration-500 ${isCopied ? 'text-green-500 bg-green-500/10' : 'group-hover:bg-ndc-purple/20 group-hover:text-ndc-purple'}`}>
                {isCopied ? <CheckCircle2 size={14} /> : <Share2 size={14} />}
              </div>
            </button>
          </div>

          {/* Clean Header Section */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple mb-5 font-bold text-[9px] uppercase tracking-widest">
              {getIcon(achievement.icon, "w-3.5 h-3.5")}
              {achievement.category}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              {achievement.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-slate-500 font-bold uppercase tracking-widest text-[9px]">
              <div className="flex items-center gap-2">
                <Calendar size={12} className="text-ndc-blue" />
                {achievement.date}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-ndc-blue" />
                {achievement.location}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Column (8) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Simplified Gallery */}
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] group animate-fade-in" style={{ animationDelay: '200ms' }}>
                <img 
                  src={getAssetPath(achievement.images[currentImageIndex])} 
                  alt={achievement.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                
                {/* Navigation Arrows */}
                {achievement.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-ndc-purple"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-ndc-purple"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}

                {/* Lightbox Icon */}
                <button 
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-ndc-purple"
                >
                  <Maximize2 size={16} />
                </button>

                {/* Simplified Pagination */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 px-2.5 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/5">
                  {achievement.images.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-1 transition-all rounded-full ${idx === currentImageIndex ? 'w-5 bg-ndc-purple' : 'w-1 bg-white/20'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Organized Information Blocks */}
              <div className="space-y-10 animate-fade-in" style={{ animationDelay: '300ms' }}>
                
                {/* Overview */}
                <section>
                  <h3 className="text-white font-bold uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2.5">
                    <Info size={14} className="text-ndc-purple" />
                    Event Overview
                  </h3>
                  <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/5">
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                      {achievement.fullDescription || achievement.description}
                    </p>
                  </div>
                </section>

                {/* Key Points */}
                {achievement.highlights && (
                  <section>
                    <h3 className="text-white font-bold uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2.5">
                      <Sparkles size={14} className="text-ndc-purple" />
                      Key Highlights
                    </h3>
                    <div className="grid md:grid-cols-2 gap-2.5">
                      {achievement.highlights.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                          <CheckCircle2 size={14} className="text-ndc-purple mt-0.5 shrink-0" />
                          <p className="text-slate-400 text-[11px] font-medium leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Judges Section - Redesigned & Compact */}
                {achievement.judges && (
                  <section>
                    <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-4 flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-ndc-purple/10 border border-ndc-purple/20">
                        <ShieldCheck size={12} className="text-ndc-purple" />
                      </div>
                      Jury & Mentors
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {achievement.judges.map((judge, jIdx) => (
                        <div key={jIdx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-ndc-purple/20 transition-all duration-500 flex items-center gap-3 group">
                          <div className="shrink-0 w-7 h-7 rounded-full bg-ndc-purple/5 border border-ndc-purple/10 flex items-center justify-center text-ndc-purple group-hover:bg-ndc-purple group-hover:text-white transition-all duration-500">
                            <User2 size={12} />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-white font-bold text-[11px] tracking-tight truncate">{judge.name}</span>
                            <div className="flex items-center gap-1.5 mt-0.5 overflow-hidden">
                              <span className="text-ndc-purple text-[6px] font-black uppercase tracking-widest whitespace-nowrap">{judge.role}</span>
                              <span className="w-0.5 h-0.5 rounded-full bg-white/10 shrink-0"></span>
                              <span className="text-slate-500 text-[7px] font-medium truncate">{judge.designation}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Coordinators Section - Redesigned & Compact */}
                {achievement.coordinators && (
                  <section>
                    <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-4 flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-ndc-purple/10 border border-ndc-purple/20">
                        <Trophy size={12} className="text-ndc-purple" />
                      </div>
                      Event Coordinators
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {achievement.coordinators.map((coordinator, cIdx) => (
                        <div key={cIdx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-ndc-purple/20 transition-all duration-500 group">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-ndc-purple group-hover:bg-ndc-purple/10 transition-all">
                                <User2 size={12} />
                              </div>
                              <span className="text-white font-bold text-[11px] tracking-tight">{coordinator.name}</span>
                            </div>
                            <span className={`px-1.5 py-0.5 rounded text-[5px] font-black uppercase tracking-[0.1em] border ${
                              coordinator.role === 'Faculty' 
                                ? 'bg-ndc-purple/10 text-ndc-purple border-ndc-purple/20' 
                                : 'bg-ndc-blue/10 text-ndc-blue border-ndc-blue/20'
                            }`}>
                              {coordinator.role}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 gap-1">
                            {coordinator.email && (
                              <a href={`mailto:${coordinator.email}`} className="flex items-center gap-2 text-slate-500 hover:text-white text-[8px] transition-all group/link">
                                <Mail size={8} className="text-ndc-purple/60" />
                                <span className="truncate">{coordinator.email}</span>
                              </a>
                            )}
                            {coordinator.phone && (
                              <a href={`tel:${coordinator.phone}`} className="flex items-center gap-2 text-slate-500 hover:text-white text-[8px] transition-all group/link">
                                <Phone size={8} className="text-ndc-purple/60" />
                                <span>{coordinator.phone}</span>
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>

            {/* Sidebar Column (4) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Compact & Premium Sidebar Stats */}
              <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-6 animate-fade-in shadow-2xl relative overflow-hidden group/stats-card" style={{ animationDelay: '400ms' }}>
                {/* Global Background Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-ndc-purple/5 blur-[60px] rounded-full group-hover/stats-card:bg-ndc-purple/10 transition-all duration-1000"></div>
                
                <div className="relative z-10">
                  {/* Header with Title */}
                  <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                    <div className="p-2 rounded-lg bg-ndc-purple/10 border border-ndc-purple/20">
                      <BarChart3 size={14} className="text-ndc-purple" />
                    </div>
                    <h4 className="text-white font-black uppercase tracking-[0.2em] text-[9px] leading-none">Key Outcomes</h4>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {achievement.stats.map((stat, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="relative group/stat p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[90px]"
                      >
                        {/* Individual Stat Glow */}
                        <div className={`absolute -right-4 -bottom-4 w-12 h-12 blur-[25px] rounded-full opacity-0 group-hover/stat:opacity-40 transition-opacity duration-700 ${
                          stat.color === 'indigo' ? 'bg-indigo-400' : 
                          stat.color === 'purple' ? 'bg-purple-400' : 
                          stat.color === 'pink' ? 'text-pink-400' : 'bg-green-400'
                        }`}></div>

                        <div className="relative z-10 flex flex-col h-full justify-between">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest group-hover/stat:text-slate-400 transition-colors">
                              {stat.label}
                            </span>
                            <div className={`p-1.5 rounded-lg bg-white/5 border border-white/5 transition-all duration-500 group-hover/stat:scale-110 ${
                              stat.color === 'indigo' ? 'text-indigo-400 group-hover/stat:bg-indigo-400/20' : 
                              stat.color === 'purple' ? 'text-purple-400 group-hover/stat:bg-purple-400/20' : 
                              stat.color === 'pink' ? 'text-pink-400 group-hover/stat:bg-pink-400/20' : 'text-green-400 group-hover/stat:bg-green-400/20'
                            }`}>
                              {getStatIcon(stat.label)}
                            </div>
                          </div>
                          
                          <p className={`font-black tracking-tighter leading-none break-words transition-all duration-500 group-hover/stat:translate-x-0.5 ${
                            stat.value.length > 12 ? 'text-[10px]' : stat.value.length > 8 ? 'text-xs' : 'text-lg'
                          } ${
                            stat.color === 'indigo' ? 'text-indigo-400 drop-shadow-[0_0_6px_rgba(129,140,248,0.3)]' : 
                            stat.color === 'purple' ? 'text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.3)]' : 
                            stat.color === 'pink' ? 'text-pink-400 drop-shadow-[0_0_6px_rgba(244,114,182,0.3)]' : 'text-green-400 drop-shadow-[0_0_6px_rgba(74,222,128,0.3)]'
                          }`}>
                            {stat.value}
                          </p>
                          <div className={`h-0.5 w-0 group-hover/stat:w-6 transition-all duration-700 rounded-full mt-2 ${
                            stat.color === 'indigo' ? 'bg-indigo-400/40' : 
                            stat.color === 'purple' ? 'bg-purple-400/40' : 
                            stat.color === 'pink' ? 'bg-pink-400/40' : 'bg-green-400/40'
                          }`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Sidebar Block */}
              <div className="p-6 rounded-2xl bg-ndc-purple/5 border border-ndc-purple/10 space-y-5">
                <div className="text-center space-y-2">
                  <Trophy className="w-6 h-6 text-ndc-purple mx-auto mb-2 opacity-50" />
                  <h4 className="text-white font-bold text-lg tracking-tight">Join the Team</h4>
                  <p className="text-slate-500 text-xs font-medium">Be part of our next national-level success story.</p>
                </div>
                <a 
                  href="https://forms.gle/CHamTqBMouu6ucYa7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-ndc-purple text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-[9px] hover:shadow-lg transition-all active:scale-95"
                >
                  Apply Now
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Full Width Participating Teams Section */}
          {achievement.teams && (
            <div className="mt-20 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <section>
                <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-ndc-purple/10 border border-ndc-purple/20">
                      <Users size={20} className="text-ndc-purple" />
                    </div>
                    <div>
                      <h3 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-1">
                        Excellence in Collaboration
                      </h3>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                        Participating Teams & Innovations
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[9px] font-bold uppercase tracking-widest">
                    {achievement.teams.length} Teams
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {achievement.teams.map((team, tIdx) => (
                    <div 
                      key={tIdx} 
                      className="group relative p-6 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-ndc-purple/30 hover:bg-white/[0.03] transition-all duration-500 flex flex-col h-full overflow-hidden"
                    >
                      {/* Header: Team Name & Project */}
                      <div className="relative z-10 mb-5">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="text-white font-black text-base tracking-tight group-hover:text-ndc-purple transition-colors leading-tight truncate">
                            {team.name}
                          </h4>
                          <Layers size={12} className="text-slate-500 shrink-0 mt-1" />
                        </div>
                        {team.project && (
                          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-ndc-blue/5 border border-ndc-blue/10 text-ndc-blue text-[8px] font-black uppercase tracking-widest">
                            <Code size={8} />
                            {team.project}
                          </div>
                        )}
                      </div>
                      
                      {/* Members List */}
                      <div className="relative z-10 mb-6 flex-1">
                        <div className="flex flex-wrap gap-1.5">
                          {team.members.map((member, mIdx) => (
                            <span 
                              key={mIdx} 
                              className="px-2 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-400 text-[9px] font-bold group-hover:bg-white/10 group-hover:text-white transition-all"
                            >
                              {member}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Abstract / Project Summary */}
                      {team.abstract && (
                        <div className="relative z-10 mt-auto pt-4 border-t border-white/5">
                          <p className="text-slate-500 text-[10px] leading-relaxed italic font-medium line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                            "{team.abstract}"
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* Redesigned Related Stories */}
          <div className="mt-32 pt-20 border-t border-white/5">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
                  Explore More <span className="gradient-text">Success Stories</span>
                </h2>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Discover our journey of technical excellence</p>
              </div>
              <Link to="/" className="hidden md:flex items-center gap-2 text-ndc-purple font-bold text-[10px] uppercase tracking-widest hover:text-white transition-colors group">
                View all achievements
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedAchievements.map((rel) => (
                <Link 
                  key={rel.id}
                  to={`/achievement/${rel.id}`}
                  className="group block relative rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-ndc-purple/30 hover:bg-white/[0.04] transition-all duration-700 overflow-hidden shadow-2xl"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={getAssetPath(rel.images[0])} 
                      alt={`${rel.title} preview`} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/5 text-white text-[8px] font-bold uppercase tracking-widest">
                      {rel.category}
                    </div>
                  </div>
                  <div className="p-7">
                    <h4 className="text-white font-bold uppercase tracking-tight text-sm mb-3 group-hover:text-ndc-purple transition-colors line-clamp-1 leading-tight">{rel.title}</h4>
                    <p className="text-slate-500 text-[11px] line-clamp-2 leading-relaxed font-medium mb-6">{rel.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest group-hover:text-slate-400 transition-colors">{rel.date}</span>
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-ndc-purple group-hover:bg-ndc-purple group-hover:text-white transition-all">
                        <ExternalLink size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Simplified Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-6 animate-in fade-in duration-300">
          <button onClick={() => setIsLightboxOpen(false)} className="absolute top-8 right-8 text-white/40 hover:text-white transition-all"><X size={32} /></button>
          <button onClick={prevImage} className="absolute left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-all"><ChevronLeft size={48} /></button>
          <button onClick={nextImage} className="absolute right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-all"><ChevronRight size={48} /></button>
          <img src={getAssetPath(achievement.images[currentImageIndex])} alt="" className="max-w-full max-h-full object-contain rounded-2xl" />
        </div>
      )}

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AchievementDetail;
