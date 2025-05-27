
import { Gift, Award, Headphones, BookOpen } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Gift className="w-10 h-10 text-ndc-purple" />,
      title: "Google Swag",
      description: "Receive exclusive Google t-shirts, caps, pens, and stickers as you participate in club activities and events."
    },
    {
      icon: <Award className="w-10 h-10 text-ndc-blue" />,
      title: "Professional Mentorship",
      description: "Get direct mentorship from Google engineers, GDC leads, and tech industry professionals."
    },
    {
      icon: <Headphones className="w-10 h-10 text-ndc-green" />,
      title: "1:1 Support",
      description: "Access personalized guidance sessions with experienced developers to help with your projects."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-ndc-purple" />,
      title: "Learning Resources",
      description: "Gain access to premium learning materials, workshops, and hands-on tutorials from industry experts."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-background to-black/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-md mb-6">Exclusive <span className="gradient-text">Benefits</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Being part of the DCode Developers Club comes with amazing perks and opportunities
            to enhance your learning journey and career prospects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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

export default BenefitsSection;
