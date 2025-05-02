
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/hooks/use-theme";

const TeamSection = () => {
  const { theme } = useTheme();
  
  const teamMembers = [
    {
      name: "Syed Danish",
      role: "Community Leader",
      initials: "SD",
      bio: "Leading the NextGen Developer Club community initiatives and growth.",
      image: "/lovable-uploads/37e91a02-fe41-4401-801a-8bafaf180aca.png"
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
    <section id="team" className="py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-md mb-6">Our <span className="gradient-text">Core Team</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Meet the passionate individuals who lead the NextGen Developer Club and work
            tirelessly to create valuable experiences for our members.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className={`${theme === 'light' ? 'bg-white/90 shadow-lg border border-gray-100' : 'glass-card'} p-6 text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in`} style={{animationDelay: `${index * 100}ms`}}>
              <div className="relative w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full">
                <Avatar className="w-24 h-24 bg-gradient-to-br from-ndc-purple to-ndc-blue">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={member.name} />
                  ) : null}
                  <AvatarFallback className="text-xl font-bold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className={`text-xl font-bold mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{member.name}</h3>
              <p className="text-ndc-purple font-medium mb-3">{member.role}</p>
              <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} text-sm`}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
