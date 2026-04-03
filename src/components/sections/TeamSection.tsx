import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Mail, Users, Star, Award, Shield, History } from "lucide-react";
import { chapter1Data, chapter2Data } from "@/data/teamChapters1";
import { useState } from "react";
import { getAssetPath } from "@/lib/utils";

/**
 * Sub-component: Section Header
 */
const SectionHeader = ({ title, subtitle, description, isChapter2 }: { title: string, subtitle: string, description: string, isChapter2?: boolean }) => (
  <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
    <div className="inline-block mb-4 relative group">
      {isChapter2 ? (
        <div className="relative">
          {/* Enhanced Chapter 2 Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-ndc-purple via-ndc-blue to-ndc-purple rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          <span className="relative flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900/80 border border-ndc-purple/30 backdrop-blur-2xl shadow-[0_0_20px_rgba(168,85,247,0.2)] overflow-hidden">
            {/* Shimmer Effect for Chapter 2 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>
            
            <span className="text-[11px] font-black tracking-[0.3em] uppercase bg-gradient-to-r from-ndc-purple to-ndc-blue bg-clip-text text-transparent">
              {subtitle}
            </span>
            
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-ndc-purple animate-ping"></div>
              <div className="w-1 h-1 rounded-full bg-ndc-blue animate-ping delay-300"></div>
            </div>
          </span>
        </div>
      ) : (
        <span className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase bg-white/5 text-gray-400 border border-white/10 backdrop-blur-xl">
          {subtitle}
        </span>
      )}
    </div>
    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white leading-tight">
      {title.split(' ').map((word, i) => (
        word.toLowerCase() === 'leadership' || word.toLowerCase() === 'team' ? 
        <span key={i} className="gradient-text"> {word}</span> : <span key={i}> {word}</span>
      ))}
    </h2>
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent via-ndc-purple/40 to-transparent"></div>
      <div className="w-2 h-2 rounded-full bg-ndc-purple shadow-[0_0_15px_rgba(168,85,247,0.6)] animate-pulse"></div>
      <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent via-ndc-purple/40 to-transparent"></div>
    </div>
    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm opacity-90">
      {description}
    </p>
  </div>
);

/**
 * Sub-component: Leadership Card (President/Coordinator)
 */
const LeadershipCard = ({ member, type }: { member: any, type: 'president' | 'coordinator' }) => {
  const isPresident = type === 'president';
  const themeColor = isPresident ? 'ndc-purple' : 'emerald-400';
  const Icon = isPresident ? CrownIcon : Award;

  return (
    <div className="relative group p-px rounded-[2rem] transition-all duration-700 animate-fade-in bg-gradient-to-br from-white/10 to-transparent border border-white/10 hover:border-white/20 shadow-xl overflow-hidden">
      {/* Dynamic Glow Effect - Subtle for smaller footprint */}
      <div className={`absolute inset-0 bg-gradient-to-br ${isPresident ? 'from-ndc-purple/15 via-indigo-500/5' : 'from-emerald-400/15 via-teal-500/5'} to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl -z-10`}></div>
      
      <div className="bg-slate-950/30 backdrop-blur-3xl p-8 md:p-10 rounded-[2rem] relative overflow-hidden h-full">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:15px_15px]"></div>
        
        {/* Background Accents */}
        <div className={`absolute -top-24 -right-24 w-64 h-64 bg-${themeColor}/10 rounded-full blur-[80px] group-hover:bg-${themeColor}/15 transition-all duration-1000`}></div>
        
        <div className="relative z-10">
          <div className="relative mb-8 flex justify-center">
            {/* Compact Badge */}
            <div className={`absolute -top-4 z-20 bg-gradient-to-r ${isPresident ? 'from-ndc-purple via-indigo-600 to-purple-600' : 'from-emerald-500 via-teal-500 to-cyan-500'} text-white px-5 py-2 rounded-full text-[10px] font-black shadow-2xl tracking-[0.2em] uppercase flex items-center gap-2 border border-white/10 transition-transform duration-500`}>
              <Icon className="h-3 w-3" />
              {isPresident ? 'President' : 'Faculty Coordinator'}
            </div>
            
            {/* Shrunk Photo Container */}
            <div className={`w-36 h-36 overflow-hidden rounded-full ring-1 ring-offset-4 ring-offset-transparent ${isPresident ? 'ring-ndc-purple/30 group-hover:ring-ndc-purple/60' : 'ring-emerald-400/30 group-hover:ring-emerald-400/60'} p-1 transition-all duration-1000 transform group-hover:scale-105 shadow-2xl`}>
              <Avatar className="w-full h-full bg-slate-900/80 backdrop-blur-xl">
                {member.image ? (
                  <AvatarImage src={getAssetPath(member.image)} alt={member.name} className="object-cover" />
                ) : (
                  <AvatarFallback className="bg-slate-900/50 flex flex-col items-center justify-center">
                    <Users className={`h-10 w-10 text-${themeColor}/20 mb-2`} />
                    <span className="text-[8px] font-black text-gray-500 uppercase tracking-[0.2em] opacity-50">Blueprint</span>
                  </AvatarFallback>
                )}
              </Avatar>
            </div>
          </div>

          <div className="text-center space-y-6">
            {member.name ? (
              <>
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover:gradient-text transition-all duration-700 drop-shadow-lg">
                    {member.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <div className={`h-px w-4 bg-${themeColor}/30`}></div>
                    <span className={`text-[10px] font-black tracking-[0.2em] uppercase text-${themeColor} opacity-80`}>
                      {member.role}
                    </span>
                    <div className={`h-px w-4 bg-${themeColor}/30`}></div>
                  </div>
                </div>
                
                {isPresident && member.tagline && (
                  <div className="py-2 px-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-xl inline-block shadow-inner">
                    <p className="text-ndc-purple font-black italic text-xs tracking-tight drop-shadow-md transition-transform duration-500">"{member.tagline}"</p>
                  </div>
                )}

                <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-[280px] mx-auto drop-shadow-sm font-medium opacity-90">
                  {member.bio}
                </p>

                <div className="flex justify-center gap-4 pt-4">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-white/5 hover:bg-${themeColor}/20 text-gray-400 hover:text-${themeColor} backdrop-blur-md border border-white/5 transition-all duration-500 transform hover:-translate-y-1`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {isPresident && member.github && (
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white backdrop-blur-md border border-white/5 transition-all duration-500 transform hover:-translate-y-1"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="p-3 rounded-xl bg-white/5 hover:bg-emerald-500/20 text-gray-400 hover:text-emerald-400 backdrop-blur-md border border-white/5 transition-all duration-500 transform hover:-translate-y-1"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </>
            ) : (
              <div className="space-y-8 py-10 flex flex-col items-center relative overflow-hidden">
                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]"></div>
                
                <div className="space-y-4 w-full relative z-10">
                  <div className="h-10 w-64 bg-white/[0.03] rounded-2xl mx-auto animate-pulse backdrop-blur-md border border-white/5 shadow-inner"></div>
                  <div className="h-4 w-40 bg-white/[0.02] rounded-full mx-auto animate-pulse opacity-60 backdrop-blur-sm border border-white/5"></div>
                </div>

                <div className="relative z-10">
                  <div className="absolute -inset-4 bg-ndc-purple/10 blur-xl rounded-full animate-pulse"></div>
                  <div className="relative py-4 px-10 rounded-[2rem] bg-slate-900/40 border border-ndc-purple/30 backdrop-blur-2xl shadow-2xl overflow-hidden group/cs">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ndc-purple/10 to-transparent -translate-x-full group-hover/cs:animate-shimmer"></div>
                    <div className="flex flex-col items-center gap-2">
                      <p className="text-ndc-purple font-black uppercase tracking-[0.4em] text-[11px] animate-pulse drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
                        Appointment Pending
                      </p>
                      <div className="flex gap-1.5">
                        <div className="h-1 w-1 rounded-full bg-ndc-purple/40 animate-bounce"></div>
                        <div className="h-1 w-1 rounded-full bg-ndc-purple/40 animate-bounce delay-150"></div>
                        <div className="h-1 w-1 rounded-full bg-ndc-purple/40 animate-bounce delay-300"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest opacity-50 relative z-10">
                  Initializing Chapter 2 Leadership
                </p>

                <div className="flex justify-center gap-5 opacity-20 pt-4 relative z-10">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white/10 animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CrownIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
    <path d="M5 20h14" />
  </svg>
);

/**
 * Sub-component: Core Member Card
 */
const CoreMemberCard = ({ member, index }: { member: any, index: number }) => (
  <div 
    className="group relative animate-fade-in h-full"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className={`absolute inset-0 bg-gradient-to-br from-ndc-purple/10 to-ndc-blue/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl -z-10`}></div>
    <Card className="bg-slate-900/10 backdrop-blur-3xl border border-white/5 hover:border-white/20 transition-all duration-500 p-8 rounded-[2rem] h-full overflow-hidden shadow-2xl group-hover:-translate-y-2">
      {/* Internal Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:15px_15px]"></div>
      
      <CardContent className="p-0 flex flex-col items-center text-center relative z-10">
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-3xl bg-slate-800/40 backdrop-blur-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-ndc-purple/40 transition-all duration-700 rotate-6 group-hover:rotate-0 transform shadow-2xl">
            <Avatar className="w-full h-full rounded-none">
              {member.image ? (
                <AvatarImage src={getAssetPath(member.image)} alt={member.name} className="object-cover" />
              ) : (
                <AvatarFallback className="bg-slate-800/30 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-ndc-purple/20" />
                </AvatarFallback>
              )}
            </Avatar>
          </div>
          <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-ndc-purple to-indigo-600 p-2.5 rounded-2xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border border-white/10">
            <Star className="h-4 w-4 text-white fill-white" />
          </div>
        </div>
        
        {member.name ? (
          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="text-2xl font-black text-white tracking-tight drop-shadow-md">{member.name}</h4>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ndc-purple drop-shadow-sm">{member.role}</span>
            </div>
            <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed font-medium drop-shadow-sm px-2">
              {member.bio || 'Key contributor to the club ecosystem and technical innovation.'}
            </p>
          </div>
        ) : (
          <div className="w-full space-y-8 flex flex-col items-center relative py-4">
            <div className="space-y-3 w-full">
              <div className="h-6 w-36 bg-white/[0.03] rounded-full mx-auto animate-pulse backdrop-blur-md"></div>
              <div className="h-3 w-24 bg-ndc-purple/10 rounded-full mx-auto animate-pulse backdrop-blur-md"></div>
            </div>
            
            <div className="relative group/mini">
              <div className="absolute -inset-2 bg-ndc-purple/5 blur-lg rounded-full group-hover/mini:bg-ndc-purple/10 transition-colors"></div>
              <div className="relative py-2 px-5 rounded-xl bg-slate-900/40 border border-white/10 backdrop-blur-xl shadow-xl">
                <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-[9px] animate-pulse">
                  Candidate Selection
                </p>
              </div>
            </div>

            <div className="space-y-2 w-full opacity-20">
              <div className="h-2 w-full bg-white/5 rounded-full animate-pulse backdrop-blur-md"></div>
              <div className="h-2 w-2/3 bg-white/5 rounded-full mx-auto animate-pulse backdrop-blur-md"></div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  </div>
);

/**
 * Sub-component: Team Division Card
 */
const TeamDivisionCard = ({ name, team, index }: { name: string, team: any, index: number }) => (
  <div 
    className="group relative animate-fade-in"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <Card className="bg-slate-900/5 backdrop-blur-3xl border border-white/5 hover:border-ndc-blue/30 transition-all duration-700 p-10 rounded-[2.5rem] h-full relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-40 h-40 bg-ndc-blue/5 rounded-full blur-[100px] -z-10 group-hover:bg-ndc-blue/10 transition-all duration-1000"></div>
      
      <CardContent className="p-0 relative z-10">
        <div className="flex items-center gap-6 mb-10">
          <div className="w-16 h-16 rounded-2xl bg-ndc-blue/10 backdrop-blur-xl border border-white/5 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
            {team.icon}
          </div>
          <div className="space-y-1">
            <h4 className="text-2xl font-black text-white tracking-tighter drop-shadow-md">{name}</h4>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 bg-ndc-blue rounded-full"></div>
              <p className="text-[10px] text-ndc-blue font-black uppercase tracking-[0.2em] drop-shadow-sm">
                {team.leader ? `Leader: ${team.leader}` : 'Department Unit'}
              </p>
            </div>
          </div>
        </div>

        {team.members.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {team.members.map((member: string, i: number) => (
              <div 
                key={i} 
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-ndc-blue/40 hover:bg-slate-800/60 transition-all duration-300 group/member shadow-lg"
              >
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-ndc-blue group-hover/member:scale-125 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
                <span className="text-sm font-semibold text-white/90 group-hover/member:text-white transition-colors tracking-tight leading-none truncate">
                  {member}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 opacity-40 backdrop-blur-xl rounded-[2rem] border border-dashed border-white/10 group-hover:border-ndc-blue/40 transition-all duration-700 relative overflow-hidden">
            {/* Background Scanner Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ndc-blue/5 to-transparent -translate-y-full group-hover:animate-scan pointer-events-none"></div>
            
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-ndc-blue/20 blur-xl rounded-full animate-pulse"></div>
              <Users className="h-14 w-14 text-gray-500 group-hover:text-ndc-blue/60 transition-colors relative z-10" />
            </div>

            <div className="relative py-2.5 px-6 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-2xl mb-4 shadow-xl">
              <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400 group-hover:text-ndc-blue/80 transition-colors">
                Recruitment Open
              </p>
            </div>

            <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] max-w-[200px] text-center leading-relaxed">
              Applications are currently being reviewed for this unit
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  </div>
);

/**
 * Sub-component: Team Chapter View
 */
const TeamChapterView = ({ data, isChapter2 }: { data: any, isChapter2: boolean }) => (
  <div className="animate-fade-in space-y-24 relative">
    {isChapter2 && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 z-0 pointer-events-none opacity-20">
        <div className="text-[12rem] font-black text-white/5 tracking-tighter select-none">CHAPTER 2</div>
      </div>
    )}

    {/* Top Tier Leadership */}
    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
      <LeadershipCard member={data.president} type="president" />
      <LeadershipCard member={data.coordinator} type="coordinator" />
    </div>

    {/* Executive Core */}
    <div className="relative z-10">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-black text-white mb-4">Core <span className="gradient-text">Team Leaders</span></h3>
        <div className="h-1.5 w-20 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto rounded-full"></div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.coreTeam.map((member: any, i: number) => (
          <CoreMemberCard key={i} member={member} index={i} />
        ))}
      </div>
    </div>

    {/* Department Divisions */}
    <div className="relative z-10">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-black text-white mb-4">Our <span className="gradient-text">Team Divisions</span></h3>
        <div className="h-1.5 w-20 bg-gradient-to-r from-ndc-blue to-ndc-purple mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(data.teams).map(([name, team], i) => (
          <TeamDivisionCard 
            key={name} 
            name={name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} 
            team={team} 
            index={i} 
          />
        ))}
      </div>
    </div>
  </div>
);

const TeamSection = () => {
  const [showChapter1, setShowChapter1] = useState(false);

  return (
    <section id="team" className="py-24 md:py-32 bg-transparent relative overflow-hidden scroll-mt-20">
      {/* Background Subtle Glows - Reduced opacity for video visibility */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-ndc-purple/5 blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-ndc-blue/5 blur-[150px] animate-pulse delay-1000"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center">
          <SectionHeader 
            title="Meet Our Leadership Team" 
            subtitle={showChapter1 ? "Chapter 1 Team" : "Chapter 2 Team"} 
            description={showChapter1 
              ? "Honoring the visionary leaders who laid the foundation of our club and started the legacy."
              : "A dedicated team of visionary leaders and innovators working together to foster a thriving tech community."
            }
            isChapter2={!showChapter1}
          />
          
          {/* Chapter Toggle Button */}
          <button 
            onClick={() => setShowChapter1(!showChapter1)}
            className="mb-12 group relative flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-ndc-purple/40 hover:bg-white/10 transition-all duration-500 shadow-lg overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-r from-ndc-purple/10 to-ndc-blue/10 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            <History className={`h-3.5 w-3.5 ${showChapter1 ? 'text-ndc-purple rotate-180' : 'text-gray-400'} transition-all duration-700`} />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-white relative z-10">
              {showChapter1 ? "Switch to Chapter 2" : "View Chapter 1 Team"}
            </span>
          </button>
        </div>

        <TeamChapterView data={showChapter1 ? chapter1Data : chapter2Data} isChapter2={!showChapter1} />

        {/* Community Callout - Compact Premium Design */}
        <div className="text-center animate-fade-in mt-24">
          <div className="relative inline-block group">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-ndc-purple/20 to-ndc-blue/20 blur-3xl rounded-[2rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <Card className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-8 md:p-12 max-w-3xl mx-auto rounded-[2.5rem] relative overflow-hidden shadow-2xl">
              {/* Internal Accent Blurs */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-ndc-purple/10 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-ndc-blue/10 rounded-full blur-[80px]"></div>

              <CardContent className="p-0 relative z-10 flex flex-col items-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-tr from-ndc-purple to-ndc-blue rounded-2xl flex items-center justify-center shadow-lg border border-white/10">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-md">
                    DDSC Community <span className="gradient-text">Members</span>
                  </h4>
                </div>
                
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mb-8 font-medium drop-shadow-sm opacity-90">
                  Be part of our growing ecosystem. Actively participate in workshops, hackathons, and global events to shape the future of technology together.
                </p>
                
                <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-ndc-purple to-ndc-blue rounded-2xl font-black text-white text-sm uppercase tracking-[0.2em] shadow-xl hover:shadow-ndc-purple/20 transition-all duration-500 hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                  <span className="relative z-10">Join Our Community</span>
                  <div className="relative z-10 p-1 bg-white/20 rounded-lg group-hover/btn:rotate-12 transition-transform">
                    <Star className="h-3 w-3 fill-white" />
                  </div>
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
