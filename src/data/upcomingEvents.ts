/**
 * upcomingEvents.ts
 * Centralized upcoming events data for Hackathons, Workshops, and Competitions.
 */
export interface UpcomingEventItem {
  title: string;
  points: string[];
  icon: 'hackathons' | 'workshops' | 'competitions';
}

export const upcomingEvents: UpcomingEventItem[] = [
  {
    title: "Hackathons",
    icon: "hackathons",
    points: ["National-level challenges", "Team formation & ideation", "Problem statements TBA"]
  },
  {
    title: "Workshops",
    icon: "workshops",
    points: ["Hands-on sessions", "Expert-led guidance", "Schedule TBA"]
  },
  {
    title: "Competitions",
    icon: "competitions",
    points: ["Coding contests", "Robotics & automation", "Registration TBA"]
  }
];
