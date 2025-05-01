
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Your Name",
      role: "Club Leader",
      photo: "/leader-photo.jpg",
      bio: "Leading the NextGen Developer Club with passion for technology and community building."
    },
    {
      name: "Jane Smith",
      role: "Technical Lead",
      photo: "/placeholder.svg",
      bio: "Expert in full-stack development and mentoring new developers."
    },
    {
      name: "Mike Johnson",
      role: "Events Coordinator",
      photo: "/placeholder.svg",
      bio: "Organizing impactful tech events and building community partnerships."
    },
    {
      name: "Sarah Lee",
      role: "Content Lead",
      photo: "/placeholder.svg",
      bio: "Creating engaging technical content and documentation for the club."
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
              <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-medium">Connect</span>
                </div>
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
