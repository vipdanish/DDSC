
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const EventsSection = () => {
  const events = [
    {
      title: "NextGen Developer Club Launch Event",
      date: "June 10, 2025",
      time: "11:00 AM - 2:00 PM",
      location: "Main Campus Auditorium",
      description: "Join us for the official launch of NextGen Developer Club with special guests, networking, and tech demos."
    },
    {
      title: "Cloud Computing Workshop",
      date: "June 22, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual (Zoom)",
      description: "Hands-on workshop on AWS services and cloud architecture fundamentals."
    },
    {
      title: "Hackathon: Code for Good",
      date: "July 5-7, 2023",
      time: "48 Hour Event",
      location: "Main Campus",
      description: "Build innovative solutions for local non-profits and community challenges."
    },
  ];

  return (
    <section id="events" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-md mb-6">Upcoming <span className="gradient-text">Events</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Join us for exciting workshops, hackathons, and tech talks designed to enhance your skills
            and expand your knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {events.map((event, index) => (
            <Card key={index} className={`bg-background border border-white/10 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${index === 0 ? 'border-l-4 border-l-ndc-purple' : ''}`}>
              <div className="h-3 bg-gradient-to-r from-ndc-purple to-ndc-blue"></div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {event.date} • {event.time}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 mb-2">📍 {event.location}</p>
                <p className="text-gray-300">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full btn-primary">RSVP Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="btn-outline hover:scale-105 transition-transform">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
