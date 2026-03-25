/**
 * achievements.ts
 * Source of truth for achievements data used across the site.
 * Extend the Achievement interface and populate events with images, highlights, teams, and judges.
 */
export interface Achievement {
  id: number;
  category: string;
  title: string;
  description: string;
  fullDescription?: string;
  images: string[];
  icon: 'code' | 'terminal' | 'cpu' | 'zap';
  stats: { label: string; value: string; color: string }[];
  highlight?: string;
  highlights?: string[];
  date?: string;
  location?: string;
  size: 'small' | 'medium' | 'large';
  teams?: {
    name: string;
    members: string[];
    project?: string;
    abstract?: string;
  }[];
  judges?: {
    name: string;
    role: string;
    designation: string;
  }[];
  coordinators?: {
    name: string;
    role: 'Faculty' | 'Student';
    email?: string;
    phone?: string;
  }[];
}

export const achievements: Achievement[] = [
  {
    id: 1,
    category: "HACKATHON",
    title: "SIH Internal Hackathon 2025",
    description: "Successfully organized to strengthen students’ preparation for the national SIH 2025 competition.",
    fullDescription: "The SIH Internal Hackathon was successfully conducted on 20 September 2025 at SSIEMS, Parbhani. A total of 90 students from 15 teams participated, presenting innovative projects across various national themes. The event served as a critical platform for real-world problem-solving experience, teamwork, and prototype development, resulting in the selection of 8 elite teams for the national stage.",
    images: [
      "/images/competition/SIH Internal Hackathon images/SIH 1.jpg",
      "/images/competition/SIH Internal Hackathon images/SIH 2.jpg",
      "/images/competition/SIH Internal Hackathon images/SIH 3.jpg",
      "/images/competition/SIH Internal Hackathon images/SIH 4.jpg"
    ],
    icon: 'code',
    stats: [
      { label: "Teams", value: "15", color: "indigo" },
      { label: "Students", value: "90", color: "purple" },
      { label: "Selected", value: "8", color: "pink" },
      { label: "Type", value: "Offline", color: "green" }
    ],
    highlight: "8 Teams Selected",
    highlights: [
      "Preparation for India's largest national innovation competition",
      "Projects on Smart Crop Advisory, AI Public Health Chatbots, and more",
      "Guided by Prof. Shelke S. B. and Student Coordinator Syed Asif",
      "Evaluated by a distinguished panel of HODs and the Director"
    ],
    date: "20/09/2025",
    location: "SSIEMS, Parbhani",
    size: 'large',
    teams: [
      {
        name: "Alpha’s",
        members: ["Syed Asif", "Rajesh Kumbhar", "Gayatri Bharose", "Arpita Jondhale", "Sugandhi Sharma", "Ritesh"],
        project: "Micro-credential Aggregator Platform",
        abstract: "A platform designed to consolidate micro-credentials, certificates, and digital badges into a unified portfolio."
      },
      {
        name: "Code Crafters",
        members: ["Karan Ingole", "Prem Bharose", "Shravan Gaikwad", "Dipali Karad", "Yogita Chinke", "Shila Dhembare"],
        project: "AI-Driven Public Health Chatbot",
        abstract: "An AI-powered chatbot designed to spread disease awareness and provide preventive health guidance."
      },
      {
        name: "TechNari Shakti",
        members: ["Sanjivani", "Ayodhya", "Priyanka", "Pushpa", "Vaishnavi Shinde", "Madhura"],
        project: "AI-Powered Personalized Learning",
        abstract: "An intelligent learning platform that analyzes student performance to deliver personalized recommendations."
      },
      {
        name: "404_BNF",
        members: ["Geeta", "Shweta", "Asmita", "Sarvadnya Kshirsagar", "Gauri", "Mayuri"],
        project: "Smart Crop Advisory System",
        abstract: "An AI- and IoT-based system providing real-time advisory on crop management and soil health for farmers."
      },
      {
        name: "LAKSHYAPATH",
        members: ["Saad", "Ab Raheman", "Zeeshan", "Danish", "Bisma", "Saniya"],
        project: "AI-Based Internship Recommendation",
        abstract: "A recommendation system matching students with internships based on skills and career aspirations."
      },
      {
        name: "Future Code",
        members: ["Gaytri", "Gayatri", "Akshara", "Neha", "Manisha", "Gayatri"],
        project: "Tourist Safety Management System",
        abstract: "A comprehensive safety system using AI, Geo-Fencing, and Blockchain-based Digital ID."
      },
      {
        name: "ARVIX",
        members: ["Yaseen", "Farhan", "Adnan", "Rehan", "Vaishnavi", "Ahana"],
        project: "AI-Based Timetable Generation",
        abstract: "An AI solution to automatically generate optimized timetables compliant with NEP 2020."
      },
      {
        name: "CodeIgniters",
        members: ["Satyam", "Ganpat", "Sudarshan", "Mahevsih", "Samiya", "Neha"],
        project: "Gamified Environmental Education",
        abstract: "A gamified platform that teaches environmental awareness through interactive challenges."
      }
    ],
    judges: [
      { name: "Dr. Anand K. Pathrikar", role: "Lead Judge", designation: "Director, SSIEMS" },
      { name: "Prof. Pawar V. K.", role: "Judge", designation: "HOD CSE, SSIEMS" },
      { name: "Prof. Wadhave A. S.", role: "Judge", designation: "HOD EEE, SSIEMS" },
      { name: "Prof. Sheikh A. S.", role: "Judge", designation: "HOD Civil, SSIEMS" }
    ],
    coordinators: [
      { name: "Prof. Shelke S. B.", role: "Faculty", email: "snehal.shelke@cse.ssiems.in", phone: "9156846207" },
      { name: "Syed Asif", role: "Student", email: "syedasif111005@gmail.com", phone: "8788740090" }
    ]
  },
  {
    id: 2,
    category: "NATIONAL COMPETITION",
    title: "IIT Bombay TECHFEST 2025",
    description: "Remarkable success at Asia's largest technical festival, securing a top national rank.",
    fullDescription: "SSIEMS students achieved outstanding success at TECHFEST 2025, organized by Rajalakshmi Institute of Technology, Chennai. Syed Asif secured the 4th rank in the Code Code Competition, while the Line Follower Robot team directly qualified for the final round. The students effectively applied their skills in robotics, coding, and automation under the dedicated guidance of college professors.",
    images: [
      "/images/competition/Techfest images/Techfest zonal codecode.jpg",
      "/images/competition/Techfest images/Techfest zonal linefollower.jpg"
    ],
    icon: 'cpu',
    stats: [
      { label: "Code Rank", value: "4th", color: "indigo" },
      { label: "Robot Round", value: "Finals", color: "purple" },
      { label: "Location", value: "Chennai", color: "pink" },
      { label: "Guidance", value: "Expert Faculty", color: "green" }
    ],
    highlight: "Top 5 National Rank",
    highlights: [
      "Syed Asif secured 4th position in the national Code Code Competition",
      "Line Follower Robot team qualified directly for the Grand Finale",
      "Outstanding performance in robotics, coding, and automation tasks",
      "Mentored by senior faculty and the technical advisory board"
    ],
    date: "2025",
    location: "RIT, Chennai",
    size: 'medium',
    teams: [
      {
        name: "Coding Excellence",
        members: ["Syed Asif"],
        project: "Code Code Competition"
      },
      {
        name: "Robo-Automation Team",
        members: ["Karan Ingole", "Syed Asif", "Sarvadnya Kshirsagar", "Sugandhi Sharma", "Nandini Kumbhar", "Surshi Vidyarthi"],
        project: "Line Follower Robot"
      }
    ]
  },
  {
    id: 3,
    category: "HACKATHON",
    title: "EC Learnix Hackathon 2025",
    description: "Successful qualification of 14 SSIEMS students in the national-level Round 1.",
    fullDescription: "SSIEMS students showed remarkable participation in the national-level Hackathon 2025 organized by EC Learnix. Competing against thousands of students from across the country, our 14-member squad successfully completed Round 1 based on their coding, innovation, and problem-solving abilities, proving the technical excellence of our institution.",
    images: [
      "/images/competition/eclearnix hackathon 360 images/eclearnix hackathon 360.png"
    ],
    icon: 'zap',
    stats: [
      { label: "Participants", value: "14", color: "indigo" },
      { label: "Result", value: "Qualified", color: "purple" },
      { label: "Level", value: "National", color: "pink" },
      { label: "Round", value: "1 Cleared", color: "green" }
    ],
    highlight: "Round 1 Qualified",
    highlights: [
      "Successfully cleared Round 1 of the national EC Learnix Hackathon",
      "Demonstrated superior problem-solving and project presentation skills",
      "Awarded official certificates of qualification for all 14 participants",
      "Institutional pride in national-level technical performance"
    ],
    date: "2025",
    location: "Online/Remote",
    size: 'small',
    teams: [
      {
        name: "Alpha’s",
        members: ["Syed Asif", "Rajesh Kumbhar", "Arpita Jondhale", "Gayatri Bharose"],
        project: "Hackathon Round 1 Qualification"
      },
      {
        name: "Codefour",
        members: ["Karan Ingole", "Prem Bharose", "Sugandhi Sharma", "Nandani Kumbhar"],
        project: "Hackathon Round 1 Qualification"
      },
      {
        name: "Codecrafter",
        members: ["Dipali Karad", "Yogita Chinke", "Shila Dhembre", "Shravan Gaikwad"],
        project: "Hackathon Round 1 Qualification"
      },
      {
        name: "Code Wars",
        members: ["Shivani Lokhande", "Vaishnavi Shinde"],
        project: "Hackathon Round 1 Qualification"
      }
    ]
  },
  {
    id: 4,
    category: "WORKSHOP",
    title: "SIH Guidance Workshop 2025",
    description: "Comprehensive guidance on the SIH 2025 process, from initial idea generation to prototype development for all technical branches.",
    fullDescription: "A highly successful one-day workshop on Smart India Hackathon (SIH) 2025 was organized at SSIEMS to prepare students for the national stage. This multidisciplinary event brought together students from CSE, ECE, EEE, Civil, and Mechanical branches, providing deep dives into problem analysis, Design Thinking, and MVP development. Led by Syed Asif and Rajesh Kumbhar, the session focused on transforming innovative ideas into functional prototypes.",
    images: [
      "/images/competition/SIH One Day Workshop images/Workshop conducted for Sih 1.jpg",
      "/images/competition/SIH One Day Workshop images/Workshop conducted for Sih 2.jpg"
    ],
    icon: 'terminal',
    stats: [
      { label: "Date", value: "12 Sept", color: "indigo" },
      { label: "Focus", value: "SIH 2025", color: "purple" },
      { label: "Guidance", value: "Expert", color: "pink" },
      { label: "Approach", value: "Multidisciplinary", color: "green" }
    ],
    highlight: "Workshop Completed",
    highlights: [
      "Multidisciplinary collaboration across all technical branches (CSE, ECE, EEE, Civil, Mech)",
      "Intensive training on Design Thinking, Brainstorming, and SCAMPER techniques",
      "Prototype and MVP development strategies tailored for national competition standards",
      "PPT and Abstract preparation mentorship by Syed Asif and Rajesh Kumbhar"
    ],
    date: "12/09/2025",
    location: "SSIEMS Auditorium",
    size: 'small',
    teams: [
      {
        name: "Mentoring Team",
        members: ["Syed Asif", "Rajesh Kumbhar"],
        project: "PPT & Abstract Mentorship"
      }
    ]
  }
];
