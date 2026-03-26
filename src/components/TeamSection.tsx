import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/hooks/use-theme";
import { ExternalLink, Linkedin, Github, Mail, Users } from "lucide-react";

const TeamSection = () => {
  const { theme } = useTheme();

  // President (Featured Profile)
  const president = {
    name: "Syed Danish Ishaque",
    role: "Founder & President – DDSC",
    initials: "SDI",
    bio: "Danish built DDSC from the ground up—not just as a club, but as a launchpad for Tech makers, dreamers, and doers. He leads with the belief that learning happens best when you create, collaborate, and challenge yourself every day.",
    tagline: "From ideas to impact — together.",
    image: "/lovable-uploads/37e91a02-fe41-4401-801a-8bafaf180aca.png",
    linkedin: "https://www.linkedin.com/in/techdanish/",
    github: "https://github.com/vipdanish",
    email: "techdanish001@gmail.com"
  };

  // Coordinator (Special Card)
  const coordinator = {
    name: "Prof. Shelek S.B.",
    role: "Faculty Coordinator",
    initials: "SB",
    bio: "Guides, mentors, and supports DDSC's vision by bridging the gap between students and the institution. Provides constant encouragement for innovation and excellence.",
    image: "/lovable-uploads/Prof.-Shelke-S.B.-new.webp", // Change if you have the correct image path
    linkedin: "", // Add if you have the profile
    email: "snehal.shelke@cse.ssiems.in    " // Add if you want to show email
  };

  // Core Team (Standard Profile Cards)
  const coreTeam = [
    {
      name: "Syed Saad",
      role: "Vice President",
      initials: "SS",
      bio: "Supports the president and oversees daily operations of the club.",
      image: "/lovable-uploads/WhatsApp Image 2025-06-01 at 16.08.39_8c4b091f.jpg"
    },
    {
      name: "Karan Ingole",
      role: "Treasurer",
      initials: "KI",
      bio: "Manages financial planning and resource allocation for club activities.",
      image : "/lovable-uploads/WhatsApp Image 2025-06-19 at 22.42.19_8035b078.jpg"
    },
    {
      name: "Shaikh Ab Raheman",
      role: "Technical Team Leader",
      initials: "SAR",
      bio: "Leads technical initiatives and guides development projects.",
      image: "/lovable-uploads/slazzer-edit-image.png"
    },
    {
      name: "Prem Bharose",
      role: "Social Media Team Leader",
      initials: "PB",
      bio: "Manages online presence and community engagement strategies.",
      image: "/lovable-uploads/WhatsApp Image 2025-06-19 at 22.39.26_d224b0f5.jpg"
    },
    {
      name: "Jadhav Vaishnavi",
      role: "Design Team Leader",
      initials: "JV",
      bio: "Oversees visual identity and creative design initiatives.",
      image: "/lovable-uploads/IMG-20250619-WA0114[2](1)(1).png"
    },
    {
      name: "Geeta Jadhav",
      role: "Event Management Team Leader",
      initials: "GJ",
      bio: "Plans and coordinates all club events and workshops.",
      image: "/lovable-uploads/WhatsApp Image 2025-06-19 at 23.07.58_e9242bf2.jpg"
    }
  ];

  // Team Members organized by teams
  const teams = {
    technical: {
      leader: "Shaikh Ab Raheman",
      icon: "🛠",
      members: [
        "Minakshi Ugile", "Sanjivani Jadhav", "Syed Asif", "Syeda Bisma",
        "Shravan Gaikwad", "Dipali Karad", "Romana Arsheen", "Azra Jabeen",
        "Nabat Fatima", "Supriya Shahane", "Jyoti Solanke", "Rahul Raut",
        "Yogita Chinke", "Shivani Lokhande", "Geeta Kadam", "Mohammad Ahmad",
        "Shaikh Aref", "Gayathri Bharose", "Danish Qazi", "Zishan Beig", "Arpita Jondhale"
      ]
    },
    socialMedia: {
      leader: "Prem Bharose",
      icon: "📣",
      members: [
        "Syed Rayyan", "Vaibhav Chavan", "Vaibhav Javanjal", "Shweta Ghuge",
        "Ingole Srushti", "Arti Navale", "Pratiksha Dange"
      ]
    },
    design: {
      leader: "Jadhav Vaishnavi",
      icon: "🎨",
      members: [
        "Suryawanshi Rohini", "Saniya Baig", "Supriya Panchal", "Radhika Deshmukh",
        "Vaishnavi Shinde", "Rutuja Ghatge", "Shital Lande", "Dhiraj Gaikwad",
        "Rahul Telbhare", "Sarvadnya Kshirsagar"
      ]
    },
    eventManagement: {
      leader: "Geeta Jadhav",
      icon: "🎯",
      members: [
        "Shital Vyavhare", "Neha Vanjare", "Vaishnavi Udawant", "Shivani Lokhande",
        "Sanaullah Khan", "Ayodhya Jadhav", "Arjun Pimprikar", "Priyanka Awachar",
        "Asmita Raut", "Keshav Rajurkar", "Adarsh Surye", "Dhiraj Gaikwad"
      ]
    }
  };

  return (
    <section id="team" className={`py-20 ${theme === 'light' ? 'bg-gradient-to-br from-blue-50 to-purple-50' : 'bg-gradient-to-br from-gray-900 to-black'}`}>
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-md mb-6">Meet Our <span className="gradient-text">Team</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Meet the passionate individuals who lead the DCode Developers Club and work
            tirelessly to create valuable experiences for our members.
          </p>
        </div>

        {/* President Section (Featured Profile) */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className={`${
              theme === 'light' 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                : 'bg-gradient-to-r from-ndc-purple to-ndc-blue'
            } p-1 rounded-3xl shadow-2xl animate-fade-in`}>
              <div className={`${
                theme === 'light' 
                  ? 'bg-white' 
                  : 'bg-gray-900'
              } p-8 rounded-3xl relative overflow-hidden`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-ndc-purple/20 to-ndc-blue/20"></div>
                </div>
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                  {/* President Photo */}
                  <div className="relative">
                    <div className="w-40 h-40 mx-auto overflow-hidden rounded-full ring-4 ring-gradient-to-r from-ndc-purple to-ndc-blue p-1 shadow-2xl">
                      <Avatar className="w-full h-full bg-gradient-to-br from-ndc-purple to-ndc-blue">
                        {president.image ? (
                          <AvatarImage src={president.image} alt={president.name} className="rounded-full" />
                        ) : null}
                        <AvatarFallback className="text-2xl font-bold text-white">
                          {president.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  
                  {/* President Info */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className={`text-3xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      {president.name}
                    </h3>
                    
                    <div className="mb-4">
                      <span className={`inline-block px-4 py-2 rounded-full text-lg font-semibold ${
                        theme === 'light' 
                          ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800' 
                          : 'bg-gradient-to-r from-ndc-purple/20 to-ndc-blue/20 text-ndc-purple'
                      }`}>
                        {president.role}
                      </span>
                    </div>
                    
                    <p className={`text-lg leading-relaxed mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      {president.bio}
                    </p>
                    
                    <p className={`text-xl font-semibold mb-6 italic ${theme === 'light' ? 'text-blue-600' : 'text-ndc-blue'}`}>
                      "{president.tagline}"
                    </p>
                    
                    {/* Social links */}
                    <div className="flex justify-center lg:justify-start space-x-4">
                      <a 
                        href={president.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full ${
                          theme === 'light' 
                            ? 'bg-blue-100 hover:bg-blue-200' 
                            : 'bg-white/10 hover:bg-white/20'
                        } transition-colors cursor-pointer hover:scale-110 transition-transform`}
                      >
                        <Linkedin className="h-5 w-5 text-ndc-blue" />
                      </a>
                      <a 
                        href={president.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full ${
                          theme === 'light' 
                            ? 'bg-purple-100 hover:bg-purple-200' 
                            : 'bg-white/10 hover:bg-white/20'
                        } transition-colors cursor-pointer hover:scale-110 transition-transform`}
                      >
                        <Github className="h-5 w-5 text-ndc-purple" />
                      </a>
                      <a 
                        href={`mailto:${president.email}`}
                        className={`p-3 rounded-full ${
                          theme === 'light' 
                            ? 'bg-green-100 hover:bg-green-200' 
                            : 'bg-white/10 hover:bg-white/20'
                        } transition-colors cursor-pointer hover:scale-110 transition-transform`}
                      >
                        <Mail className="h-5 w-5 text-ndc-green" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coordinator Card (Special) */}
        <div className="mb-16">
          <div className="max-w-xl mx-auto">
            <Card
              className={`${
                theme === 'light'
                  ? 'bg-gradient-to-r from-blue-200 to-purple-200 border-blue-200 shadow-lg'
                  : 'bg-gradient-to-r from-ndc-purple/30 to-ndc-blue/30 border-white/10'
              } p-8 text-center mb-12 animate-fade-in`}
            >
              <CardContent className="p-0">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-gradient-to-r from-ndc-purple to-ndc-blue p-1 shadow-xl">
                  <Avatar className="w-full h-full bg-gradient-to-br from-ndc-purple to-ndc-blue">
                    {coordinator.image ? (
                      <AvatarImage src={coordinator.image} alt={coordinator.name} className="rounded-full" />
                    ) : null}
                    <AvatarFallback className="text-xl font-bold text-white">
                      {coordinator.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h4 className={`text-xl font-bold mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  {coordinator.name}
                </h4>
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    theme === 'light'
                      ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800'
                      : 'bg-gradient-to-r from-ndc-purple/20 to-ndc-blue/20 text-ndc-purple'
                  }`}>
                    {coordinator.role}
                  </span>
                </div>
                <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} text-base`}>
                  {coordinator.bio}
                </p>
                {/* Optional: Social/Email */}
                <div className="flex justify-center space-x-3 mt-4">
                  {coordinator.linkedin && (
                    <a
                      href={coordinator.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${
                        theme === 'light'
                          ? 'bg-blue-100 hover:bg-blue-200'
                          : 'bg-white/10 hover:bg-white/20'
                      } transition-colors cursor-pointer hover:scale-110 transition-transform`}
                    >
                      <Linkedin className="h-5 w-5 text-ndc-blue" />
                    </a>
                  )}
                  {coordinator.email && (
                    <a
                      href={`mailto:${coordinator.email}`}
                      className={`p-3 rounded-full ${
                        theme === 'light'
                          ? 'bg-green-100 hover:bg-green-200'
                          : 'bg-white/10 hover:bg-white/20'
                      } transition-colors cursor-pointer hover:scale-110 transition-transform`}
                    >
                      <Mail className="h-5 w-5 text-ndc-green" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Team Section */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold text-center mb-12 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Core Team Leaders
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeam.map((member, index) => (
              <Card 
                key={index} 
                className={`${
                  theme === 'light' 
                    ? 'bg-white/80 backdrop-blur-sm shadow-lg border border-blue-100 hover:shadow-xl' 
                    : 'glass-card hover:bg-white/10'
                } p-6 text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in`} 
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardContent className="p-0">
                  <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full ring-2 ring-gradient-to-r from-ndc-purple to-ndc-blue p-0.5">
                    <Avatar className="w-full h-full bg-gradient-to-br from-ndc-purple to-ndc-blue">
                      {member.image ? (
                        <AvatarImage src={member.image} alt={member.name} className="rounded-full" />
                      ) : null}
                      <AvatarFallback className="text-sm font-bold text-white">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <h4 className={`text-lg font-bold mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    {member.name}
                  </h4>
                  
                  <div className="mb-3">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      theme === 'light' 
                        ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800' 
                        : 'bg-gradient-to-r from-ndc-purple/20 to-ndc-blue/20 text-ndc-purple'
                    }`}>
                      {member.role}
                    </span>
                  </div>
                  
                  <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} text-sm`}>
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-12">
          <h3 className={`text-2xl font-bold text-center mb-12 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Team Members
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(teams).map(([teamKey, team], index) => (
              <Card 
                key={teamKey}
                className={`${
                  theme === 'light' 
                    ? 'bg-white/70 backdrop-blur-sm shadow-lg border border-blue-100' 
                    : 'glass-card'
                } p-6 animate-fade-in`}
                style={{animationDelay: `${index * 200}ms`}}
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{team.icon}</span>
                    <div>
                      <h4 className={`text-lg font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                        {teamKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} Team
                      </h4>
                      <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                        Led by {team.leader}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {team.members.map((member, memberIndex) => (
                      <div 
                        key={memberIndex}
                        className={`flex items-center p-2 rounded-lg ${
                          theme === 'light' 
                            ? 'bg-blue-50 hover:bg-blue-100' 
                            : 'bg-white/5 hover:bg-white/10'
                        } transition-colors`}
                      >
                        <Users className="h-4 w-4 text-ndc-blue mr-2" />
                        <span className={`text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                          {member}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* DDSC Community Section */}
        <div className="text-center">
          <Card className={`${
            theme === 'light' 
              ? 'bg-gradient-to-r from-blue-100 to-purple-100 border-blue-200' 
              : 'bg-gradient-to-r from-ndc-purple/10 to-ndc-blue/10 border-white/10'
          } p-8 max-w-2xl mx-auto`}>
            <CardContent className="p-0">
              <h4 className={`text-xl font-bold mb-3 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                DDSC Community Members
              </h4>
              <p className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
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