/**
 * upcoming.ts
 * Centralized upcoming events data for Hackathons, Workshops, and Competitions.
 * Each item drives the Upcoming Events section cards.
 */
export interface UpcomingItem {
  title: string;
  badge: string;
  points: string[];
  icon: 'hackathons' | 'workshops' | 'competitions';
}

export const upcoming: UpcomingItem[] = [
  {
    title: "Hackathons",
    badge: "Upcoming very soon",
    icon: "hackathons",
    points: ["National-level challenges", "Team formation & ideation", "Problem statements TBA"]
  },
  {
    title: "Workshops",
    badge: "Upcoming very soon",
    icon: "workshops",
    points: ["Hands-on sessions", "Expert-led guidance", "Schedule TBA"]
  },
  {
    title: "Competitions",
    badge: "Upcoming very soon",
    icon: "competitions",
    points: ["Coding contests", "Robotics & automation", "Registration TBA"]
  }
];
