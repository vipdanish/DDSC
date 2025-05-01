
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Syed Rayyan",
      role: "Community Leader",
      initials: "SR",
      bio: "Leading the NextGen Developer Club community initiatives and growth.",
      image: "/lovable-uploads/0a894d06-59ec-435e-b30a-bab2549d95d9.png"
    },
    {
      name: "Mohamad Ardeb",
      role: "Graphic Designer",
      initials: "MA",
      bio: "Creating visual identity and designs for the club's digital and print materials."
    },
    {
      name: "Mohammad Zoheb",
      role: "Social Media Expert",
      initials: "MZ",
      bio: "Managing the club's online presence and community engagement strategies."
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
          <p className="text-lg text-gray-300">
            Meet the passionate individuals who lead the NextGen Developer Club and work
            tirelessly to create valuable experiences for our members.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass-card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300">
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
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-ndc-purple font-medium mb-3">{member.role}</p>
              <p className="text-gray-300 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
