
import { useTheme } from "@/hooks/use-theme";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RoadmapSection = () => {
  const { theme } = useTheme();
  
  const roadmapEvents = [
    {
      title: "Launch Meetup – Code the Future",
      location: "APJ Abdul Kalam Auditorium Hall",
      description: "Club introduction + lightning tech talks by mentors and industry guests",
      timing: "Coming Soon",
      icon: "🔸"
    },
    {
      title: "Git Started",
      location: "Virtual",
      description: "Hands-on workshop on Git & GitHub for beginners",
      timing: "Coming Soon",
      icon: "🔸"
    },
    {
      title: "Deploy or Die",
      location: "Virtual",
      description: "Learn how to build and deploy a personal portfolio using Netlify or Vercel",
      timing: "Coming Soon",
      icon: "🔸"
    },
    {
      title: "All About Placement",
      location: "Virtual",
      description: "Resume building, interview prep, and insider placement tips",
      timing: "Coming Soon",
      icon: "🔸"
    },
    {
      title: "Project Forge – Build with Purpose",
      location: "Virtual",
      description: "Team up and build a real-world project over 4 weeks\nEnds with a live Demo Day to showcase your solution",
      timing: "Coming Soon",
      icon: "🔸"
    }
  ];

  return (
    <section id="roadmap" className={`py-20 ${theme === 'light' ? 'bg-slate-50' : 'bg-secondary/30'}`}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-md mb-6">
            <span className="gradient-text">Roadmap</span> | What's Coming Up?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Join us on a learning journey filled with code, collaboration, and community. Here's what we've planned:
          </p>
        </div>

        <div className="space-y-8 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-ndc-purple via-ndc-blue to-ndc-green opacity-30 hidden md:block"></div>
          
          {roadmapEvents.map((event, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-fade-in`} style={{animationDelay: `${index * 150}ms`}}>
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'} md:text-${index % 2 === 0 ? 'left' : 'right'}`}>
                <Card className={`overflow-hidden h-full border ${theme === 'light' ? 'bg-white shadow-md border-gray-100' : 'glass-card'} hover:transform hover:scale-105 transition-all duration-300`}>
                  <div className="h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2 gap-2">
                      <span className="text-2xl">{event.icon}</span>
                      <h3 className={`text-xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{event.title}</h3>
                    </div>
                    <p className={`flex items-center my-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                      <span className="mr-2">📍</span>
                      {event.location}
                    </p>
                    <p className={`my-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      <span className="mr-2">🎯</span>
                      {event.description}
                    </p>
                    <p className={`flex items-center mt-4 font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                      <span className="mr-2">🕒</span>
                      {event.timing}
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Timeline dot */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-ndc-purple to-ndc-blue z-10"></div>
              </div>
              
              {/* Empty space for the other side */}
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className={`text-xl italic ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} mb-6`}>
            ✨ <em>Real skills. Real impact. Real projects.</em>
          </p>
          <p className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Join the DCode Developers Club and let your journey begin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
