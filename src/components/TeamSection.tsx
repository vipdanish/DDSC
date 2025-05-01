
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Technical Lead",
      initials: "JD",
      bio: "Expert in full-stack development and mentoring new developers."
    },
    {
      name: "Sarah Lee",
      role: "Events Coordinator",
      initials: "SL",
      bio: "Organizing impactful tech events and building community partnerships."
    },
    {
      name: "Alex Chen",
      role: "Content Lead",
      initials: "AC",
      bio: "Creating engaging technical content and documentation for the club."
    },
    {
      name: "Priya Sharma",
      role: "Outreach Coordinator",
      initials: "PS",
      bio: "Managing partnerships and external relationships with the tech community."
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
            <div key={index} className="glass-card p-6 text-center group">
              <div className="relative w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full">
                <Avatar className="w-24 h-24 bg-gradient-to-br from-ndc-purple to-ndc-blue">
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
