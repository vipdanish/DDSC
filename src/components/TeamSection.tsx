
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/hooks/use-theme";
import { ExternalLink, Linkedin, Github, Mail } from "lucide-react";

const TeamSection = () => {
  const { theme } = useTheme();
  
  const teamMembers = [
    {
      name: "Syed Danish",
      role: "Community Leader",
      initials: "SD",
      bio: "Leading the DCode Developers Club community initiatives and growth.",
      image: "/lovable-uploads/37e91a02-fe41-4401-801a-8bafaf180aca.png",
      portfolio: "https://okdanish.netlify.app/"
    },
    {
      name: "Syed Rayyan",
      role: "Co-Leader",
      initials: "SR",
      bio: "Supporting community leadership and helping drive club initiatives forward.",
      image: "/lovable-uploads/31650158-cb9b-4eb6-8546-bfc58d52840d.png"
    },
    {
      name: "Shaikh Sohel",
      role: "Management Head (Founder of Profolio)",
      initials: "SS",
      bio: "Overseeing operational management and strategic planning for the club.",
      image: "/lovable-uploads/44bb75de-d18b-454e-9687-e0c620b55c69.png"
    },
    {
      name: "Salman Shaikh",
      role: "GDG Lead, PES College Aurangabad",
      initials: "SS",
      bio: "Bringing Google Developer Group expertise to support our technical community.",
      image: "/lovable-uploads/d88d7695-baa3-48b3-9aa6-bddf1978be46.png"
    },
    {
      name: "Mohammad Areeb",
      role: "Graphic Designer",
      initials: "MA",
      bio: "Creating visual identity and designs for the club's digital and print materials.",
      image: "/lovable-uploads/bf586626-327b-4309-a59b-36193c1649cd.png"
    },
    {
      name: "Vedant Thombre",
      role: "Technical Lead",
      initials: "VT",
      bio: "Overseeing technical projects and guiding members on development practices.",
      image: "/lovable-uploads/c1b6a28e-d166-4a71-a4ff-b747968361b2.png"
    }
  ];

  return (
    <section id="team" className={`py-20 ${theme === 'light' ? 'bg-gradient-to-br from-blue-50 to-purple-50' : 'bg-gradient-to-br from-gray-900 to-black'}`}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-md mb-6">Our <span className="gradient-text">Core Team</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Meet the passionate individuals who lead the DCode Developers Club and work
            tirelessly to create valuable experiences for our members.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`${
                theme === 'light' 
                  ? 'bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100 hover:shadow-2xl' 
                  : 'glass-card hover:bg-white/10'
              } p-8 text-center group hover:transform hover:scale-105 transition-all duration-500 animate-fade-in rounded-2xl relative overflow-hidden`} 
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                theme === 'light' 
                  ? 'from-blue-100/50 to-purple-100/50' 
                  : 'from-ndc-purple/10 to-ndc-blue/10'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="relative w-28 h-28 mx-auto mb-6 overflow-hidden rounded-full ring-4 ring-gradient-to-r from-ndc-purple to-ndc-blue p-1">
                  <Avatar className="w-full h-full bg-gradient-to-br from-ndc-purple to-ndc-blue">
                    {member.image ? (
                      <AvatarImage src={member.image} alt={member.name} className="rounded-full" />
                    ) : null}
                    <AvatarFallback className="text-xl font-bold text-white">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                {member.portfolio ? (
                  <h3 
                    className={`text-xl font-bold mb-2 cursor-pointer transition-colors hover:text-ndc-purple ${
                      theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}
                    onClick={() => window.open(member.portfolio, '_blank')}
                  >
                    {member.name}
                    <ExternalLink className="inline ml-2 h-4 w-4" />
                  </h3>
                ) : (
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    {member.name}
                  </h3>
                )}
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    theme === 'light' 
                      ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800' 
                      : 'bg-gradient-to-r from-ndc-purple/20 to-ndc-blue/20 text-ndc-purple'
                  }`}>
                    {member.role}
                  </span>
                </div>
                
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} text-sm leading-relaxed`}>
                  {member.bio}
                </p>
                
                {/* Social links placeholder */}
                <div className="flex justify-center space-x-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`p-2 rounded-full ${
                    theme === 'light' 
                      ? 'bg-blue-100 hover:bg-blue-200' 
                      : 'bg-white/10 hover:bg-white/20'
                  } transition-colors cursor-pointer`}>
                    <Linkedin className="h-4 w-4 text-ndc-blue" />
                  </div>
                  <div className={`p-2 rounded-full ${
                    theme === 'light' 
                      ? 'bg-purple-100 hover:bg-purple-200' 
                      : 'bg-white/10 hover:bg-white/20'
                  } transition-colors cursor-pointer`}>
                    <Github className="h-4 w-4 text-ndc-purple" />
                  </div>
                  <div className={`p-2 rounded-full ${
                    theme === 'light' 
                      ? 'bg-green-100 hover:bg-green-200' 
                      : 'bg-white/10 hover:bg-white/20'
                  } transition-colors cursor-pointer`}>
                    <Mail className="h-4 w-4 text-ndc-green" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
