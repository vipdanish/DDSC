
import { Calendar, User, Code, Cloud } from "lucide-react";

const WhyJoinSection = () => {
  const benefits = [
    {
      icon: <Code className="w-10 h-10 text-ndc-purple" />,
      title: "Hands-on Learning",
      description: "Work on real projects using the latest tools and frameworks in web development, mobile apps, and more."
    },
    {
      icon: <Cloud className="w-10 h-10 text-ndc-blue" />,
      title: "Cutting-edge Technologies",
      description: "Gain practical experience with cloud computing, DevOps practices, and modern development workflows."
    },
    {
      icon: <Calendar className="w-10 h-10 text-ndc-green" />,
      title: "Events & Workshops",
      description: "Attend tech talks, hackathons, and hands-on workshops led by industry experts and experienced developers."
    },
    {
      icon: <User className="w-10 h-10 text-ndc-purple" />,
      title: "Community & Networking",
      description: "Connect with like-minded individuals, build your professional network, and find collaboration opportunities."
    }
  ];

  return (
    <section id="why-join" className="py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-md mb-6 text-center">Why <span className="gradient-text">Join Us?</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 mx-auto">
            Being part of the DCode Developers Club opens doors to valuable learning experiences, 
            professional growth opportunities, and a supportive community of fellow tech enthusiasts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-card p-6 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{benefit.title}</h3>
              <p className="text-gray-300 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
