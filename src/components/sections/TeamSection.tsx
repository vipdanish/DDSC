import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Mail, Users } from "lucide-react";

const TeamSection = () => {

  // President (Featured Profile)
  const president = {
    name: "",
    role: "President – DDSC",
    initials: "",
    bio: "",
    tagline: "",
    image: "",
    linkedin: "",
    github: "",
    email: ""
  };

  // Coordinator (Special Card)
  const coordinator = {
    name: "",
    role: "Faculty Coordinator",
    initials: "",
    bio: "",
    image: "",
    linkedin: "",
    email: ""
  };

  // Core Team (Standard Profile Cards)
  const coreTeam = [
    {
      name: "",
      role: "Vice President",
      initials: "",
      bio: "",
      image: ""
    },
    {
      name: "",
      role: "Treasurer",
      initials: "",
      bio: "",
      image: ""
    },
    {
      name: "",
      role: "Technical Team Leader",
      initials: "",
      bio: "",
      image: ""
    },
    {
      name: "",
      role: "Social Media Team Leader",
      initials: "",
      bio: "",
      image: ""
    },
    {
      name: "",
      role: "Design Team Leader",
      initials: "",
      bio: "",
      image: ""
    },
    {
      name: "",
      role: "Event Management Team Leader",
      initials: "",
      bio: "",
      image: ""
    }
  ];

  // Team Members organized by teams
  const teams = {
    technical: {
      leader: "",
      icon: "🛠",
      members: []
    },
    socialMedia: {
      leader: "",
      icon: "📣",
      members: []
    },
    design: {
      leader: "",
      icon: "🎨",
      members: []
    },
    eventManagement: {
      leader: "",
      icon: "🎯",
      members: []
    }
  };

  return (
    <section id="team" className="py-16 md:py-20 bg-transparent relative overflow-hidden scroll-mt-28 md:scroll-mt-32">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-ndc-blue/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-ndc-purple/10 blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header - Enhanced Design */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block mb-3">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-ndc-purple/20 to-ndc-blue/20 text-ndc-purple">
              🚀 Leadership & Innovation
            </span>
          </div>
          <h2 className="heading-md mb-4">
            Meet Our <span className="gradient-text">Leadership Team</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-ndc-purple via-blue-500 to-ndc-purple rounded-full"></div>
            <div className="w-2 h-2 bg-ndc-purple rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-ndc-purple via-blue-500 to-ndc-purple rounded-full"></div>
          </div>
          <p className="text-lg leading-relaxed text-gray-300">
            A dedicated team of visionary leaders, innovators, and collaborators working together to 
            foster a thriving community of tech enthusiasts and drive excellence in technology and innovation.
          </p>
        </div>

        {/* President & Faculty Coordinator - Side by Side Leadership Cards */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            
            {/* President Card */}
            <div className="relative group p-1 rounded-3xl transition-all duration-500 animate-fade-in bg-white/5 border border-white/10">
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
              
              <div className="bg-slate-900/20 backdrop-blur-3xl border-white/10 p-6 md:p-8 rounded-3xl relative overflow-hidden h-full shadow-2xl">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-ndc-purple/10 to-ndc-blue/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  {/* President Photo - Enhanced with badge */}
                  <div className="relative mb-6">
                    {/* Crown/Ribbon Badge */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse-slow whitespace-nowrap">
                      👑 President
                    </div>
                    
                    <div className="w-40 h-40 mx-auto overflow-hidden rounded-full ring-4 ring-offset-4 ring-offset-transparent ring-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-1 shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-500">
                      <Avatar className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
                        {president.image ? (
                          <AvatarImage src={president.image} alt={president.name} className="rounded-full object-cover" />
                        ) : null}
                        <AvatarFallback className="text-3xl font-bold text-white">
                          {president.initials || "👤"}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  
                  {/* President Info */}
                  <div className="text-center space-y-4">
                    {president.name ? (
                      <>
                        {/* Name with gradient underline */}
                        <div className="relative inline-block">
                          <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-white">
                            {president.name}
                          </h3>
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full transform scale-x-0 hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                        
                        {/* Role Badge */}
                        <div className="flex justify-center">
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-base font-bold bg-gradient-to-r from-ndc-purple to-indigo-600 text-white shadow-lg shadow-purple-500/30">
                            <span className="text-lg">🎯</span>
                            {president.role}
                          </span>
                        </div>
                        
                        {/* Bio with quote icon */}
                        <div className="relative pl-4 pr-3 py-2 border-l-4 border-gradient-to-r from-blue-500 to-purple-500">
                          <div className="absolute -left-2.5 top-0 text-2xl text-blue-500/30 font-serif">"</div>
                          <p className="text-sm md:text-base leading-relaxed text-gray-300">
                            {president.bio}
                          </p>
                        </div>
                        
                        {/* Tagline in styled box */}
                        {president.tagline && (
                          <div className="px-4 py-2 rounded-xl border-2 border-dashed border-ndc-purple/50 bg-purple-900/20 text-ndc-purple">
                            <p className="text-sm md:text-base font-semibold italic flex items-center justify-center gap-2">
                              <span className="text-lg">💡</span>
                              <span>"{president.tagline}"</span>
                            </p>
                          </div>
                        )}
                        
                        {/* Enhanced Social Links */}
                        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                          {president.linkedin && (
                            <a 
                              href={president.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group p-3 rounded-xl font-medium transition-all duration-300 hover:scale-110 bg-white/10 hover:bg-blue-600 text-blue-400 hover:text-white"
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                          )}
                          {president.github && (
                            <a 
                              href={president.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group p-3 rounded-xl font-medium transition-all duration-300 hover:scale-110 bg-white/10 hover:bg-purple-600 text-purple-400 hover:text-white"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                          {president.email && (
                            <a 
                              href={`mailto:${president.email}`}
                              className="group p-3 rounded-xl font-medium transition-all duration-300 hover:scale-110 bg-white/10 hover:bg-green-600 text-green-400 hover:text-white"
                            >
                              <Mail className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="py-8 text-center">
                        <div className="text-5xl mb-4">🔜</div>
                        <p className="text-base font-medium text-gray-400">
                          President details coming soon
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Faculty Coordinator Card */}
            <div className="relative group p-1 rounded-3xl transition-all duration-500 animate-fade-in bg-white/5 border border-white/10" style={{animationDelay: '200ms'}}>
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
              
              <div className="bg-slate-900/20 backdrop-blur-3xl border-white/10 p-6 md:p-8 rounded-3xl relative overflow-hidden h-full shadow-2xl">
                {/* Specific decorative elements for Faculty */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                
                <div className="relative z-10">
                  {/* Coordinator Photo - Enhanced with badge */}
                  <div className="relative mb-6">
                    {/* Badge */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse-slow whitespace-nowrap">
                      🎓 Faculty Coordinator
                    </div>
                    
                    <div className="w-40 h-40 mx-auto overflow-hidden rounded-full ring-4 ring-offset-4 ring-offset-transparent ring-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-1 shadow-2xl hover:shadow-emerald-500/50 transition-shadow duration-500">
                      <Avatar className="w-full h-full bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
                        {coordinator.image ? (
                          <AvatarImage src={coordinator.image} alt={coordinator.name} className="rounded-full object-cover" />
                        ) : null}
                        <AvatarFallback className="text-3xl font-bold text-white">
                          {coordinator.initials || "👤"}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  
                  {/* Coordinator Info */}
                  <div className="text-center space-y-4">
                    {coordinator.name ? (
                      <>
                        {/* Name with gradient underline */}
                        <div className="relative inline-block">
                          <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-white">
                            {coordinator.name}
                          </h3>
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full transform scale-x-0 hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                        
                        {/* Role Badge */}
                        <div className="flex justify-center">
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-base font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg shadow-emerald-500/30">
                            <span className="text-lg">🎓</span>
                            {coordinator.role}
                          </span>
                        </div>
                        
                        {/* Bio with quote icon */}
                        <div className="relative pl-4 pr-3 py-2 border-l-4 border-gradient-to-r from-emerald-500 to-teal-500">
                          <div className="absolute -left-2.5 top-0 text-2xl text-emerald-500/30 font-serif">"</div>
                          <p className="text-sm md:text-base leading-relaxed text-gray-300">
                            {coordinator.bio}
                          </p>
                        </div>
                        
                        {/* Contact Links */}
                        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                          {coordinator.linkedin && (
                            <a 
                              href={coordinator.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group p-3 rounded-xl font-medium transition-all duration-300 hover:scale-110 bg-white/10 hover:bg-emerald-600 text-emerald-400 hover:text-white"
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                          )}
                          {coordinator.email && (
                            <a 
                              href={`mailto:${coordinator.email}`}
                              className="group p-3 rounded-xl font-medium transition-all duration-300 hover:scale-110 bg-white/10 hover:bg-teal-600 text-teal-400 hover:text-white"
                            >
                              <Mail className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="py-12 text-center">
                        <div className="text-6xl mb-6 animate-bounce">🎓</div>
                        <p className="text-xl font-bold tracking-wide uppercase text-emerald-400">
                          Faculty Coordinator
                        </p>
                        <p className="text-sm mt-2 font-medium text-gray-400">
                          Details will be updated soon
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Core Team Leaders - Executive Board */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-900/50 to-purple-900/50 text-indigo-300">
                🎯 Executive Leadership
              </span>
            </div>
            <h3 className="text-3xl font-extrabold mb-4 text-white">
              Core <span className="gradient-text">Team Leaders</span>
            </h3>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-300">
              Our dedicated core team leads various domains, driving innovation and excellence across all club activities.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreTeam.map((member, index) => (
              <div
                key={index}
                className="group relative glass-card rounded-2xl border border-transparent hover:border-indigo-300 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                
                <Card className="bg-slate-900/30 backdrop-blur-xl border-white/10 p-6 text-center h-full relative overflow-hidden border-none">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-bl-full"></div>
                  
                  <CardContent className="p-0 relative z-10">
                    {member.name ? (
                      <>
                        {/* Photo with animated ring */}
                        <div className="relative inline-block mb-4">
                          <div className="w-24 h-24 mx-auto overflow-hidden rounded-full ring-4 ring-offset-2 ring-offset-transparent ring-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-500">
                            <Avatar className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
                              {member.image ? (
                                <AvatarImage src={member.image} alt={member.name} className="rounded-full object-cover" />
                              ) : null}
                              <AvatarFallback className="text-lg font-bold text-white">
                                {member.initials || "👤"}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          {/* Role icon badge */}
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                            👨‍💼
                          </div>
                        </div>
                        
                        {/* Name with hover effect */}
                        <h4 className="text-xl font-extrabold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-500 text-white">
                          {member.name}
                        </h4>
                        
                        {/* Role badge */}
                        <div className="mb-4">
                          <span className="inline-block px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30">
                            {member.role}
                          </span>
                        </div>
                        
                        {/* Bio in styled container */}
                        <div className="px-4 py-3 rounded-xl bg-white/5 border border-indigo-700/30">
                          <p className="text-sm leading-relaxed text-gray-300">
                            {member.bio}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="py-12 text-center">
                        <div className="text-5xl mb-4">🔜</div>
                        <p className="text-sm font-medium text-gray-400">
                          {member.role}<br />details coming soon
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Department Teams - Collaborative Divisions */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-900/50 to-indigo-900/50 text-blue-300">
                🤝 Department Teams
              </span>
            </div>
            <h3 className="text-3xl font-extrabold mb-4 text-white">
              Our <span className="gradient-text">Team Divisions</span>
            </h3>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-300">
              Specialized teams working collaboratively across different domains to drive innovation and execute successful events.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {Object.entries(teams).map(([teamKey, team], index) => (
              <div
                key={teamKey}
                className="group relative glass-card rounded-2xl border border-transparent hover:border-blue-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-t-2xl"></div>
                
                <Card className="bg-slate-900/30 backdrop-blur-xl border-white/10 p-6 h-full relative overflow-hidden border-none">
                  {/* Background decoration */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-2xl"></div>
                  
                  <CardContent className="p-0 relative z-10">
                  
                    {/* Team Header with Icon */}
                    <div className="flex items-center mb-6 pb-4 border-b-2 border-indigo-700">
                      <span className="text-3xl mr-4 bg-indigo-900/50 p-3 rounded-xl">{team.icon}</span>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {teamKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </h4>
                        {team.leader ? (
                          <p className="text-sm text-gray-400">
                            👨‍💼 Led by <span className="font-semibold">{team.leader}</span>
                          </p>
                        ) : team.members.length === 0 ? (
                          <p className="text-xs italic text-gray-500">
                            📢 Team will be announced soon
                          </p>
                        ) : null}
                      </div>
                    </div>
                    
                    {/* Team Members Grid */}
                    {team.members.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {team.members.map((member, memberIndex) => (
                          <div 
                            key={memberIndex}
                            className="group flex items-center justify-center p-3 rounded-xl border-2 border-transparent hover:border-blue-400 transition-all duration-300 bg-white/5 hover:bg-white/10 border-white/5"
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                              <Users className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-xs font-medium truncate text-gray-300">
                              {member}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="text-4xl mb-3">👥</div>
                        <p className="text-sm text-gray-400">
                          Team members will be announced soon
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* DDSC Community Section */}
        <div className="text-center">
          <Card className="bg-ndc-purple/10 backdrop-blur-xl border-white/10 shadow-2xl p-8 max-w-2xl mx-auto border-none">
            <CardContent className="p-0">
              <h4 className="text-xl font-bold mb-3 text-white">
                DDSC Community Members
              </h4>
              <p className="text-lg text-gray-300">
                Actively participate and learn through our workshops, hackathons, and events.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
