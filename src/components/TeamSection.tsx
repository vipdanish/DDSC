
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
      image: "/lovable-uploads/a962026c-ed9f-4509-9ff7-86ec7bad35d9.png"
    },
    {
      name: "Syed Rayyan",
      role: "Co-Leader",
      initials: "SR",
      bio: "Supporting community leadership and helping drive club initiatives forward.",
      image: "/lovable-uploads/12c566a4-43cf-44b6-96e4-042747b9d5e9.png"
    },
    {
      name: "Shaikh Sohel",
      role: "Management Head (Founder of Profolio)",
      initials: "SS",
      bio: "Overseeing operational management and strategic planning for the club.",
      image: "/lovable-uploads/f3a2435e-2f6a-4d14-b554-6a646ba87097.png"
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
      bio: "Overseeing technical projects and guiding members on development practices."
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
