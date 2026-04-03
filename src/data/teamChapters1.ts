export const chapter1Data = {
  president: {
    name: "Syed Danish Ishaque",
    role: "President – DDSC",
    initials: "SDI",
    bio: "Danish built DDSC from the ground up—not just as a club, but as a launchpad for Tech makers, dreamers, and doers. He leads with the belief that learning happens best when you create, collaborate, and challenge yourself every day.",
    tagline: "From ideas to impact — together.",
    image: "lovable-uploads/37e91a02-fe41-4401-801a-8bafaf180aca.png",
    linkedin: "https://www.linkedin.com/in/techdanish/",
    github: "https://github.com/vipdanish",
    email: "techdanish001@gmail.com"
  },
  coordinator: {
    name: "Prof. Shelke S.B.",
    role: "Faculty Coordinator",
    initials: "SB",
    bio: "Guides, mentors, and supports DDSC's vision by bridging the gap between students and the institution. Provides constant encouragement for innovation and excellence.",
    image: "lovable-uploads/Prof.-Shelke-S.B.-new.webp",
    linkedin: "",
    email: "snehal.shelke@cse.ssiems.in"
  },
  coreTeam: [
    {
      name: "Syed Saad",
      role: "Vice President",
      initials: "SS",
      bio: "Supports the president and oversees daily operations of the club.",
      image: "lovable-uploads/WhatsApp Image 2025-06-01 at 16.08.39_8c4b091f.jpg"
    },
    {
      name: "Karan Ingole",
      role: "Treasurer",
      initials: "KI",
      bio: "Manages financial planning and resource allocation for club activities.",
      image: "lovable-uploads/WhatsApp Image 2025-06-19 at 22.42.19_8035b078.jpg"
    },
    {
      name: "Shaikh Ab Raheman",
      role: "Technical Lead",
      initials: "SAR",
      bio: "Leads technical initiatives and guides development projects.",
      image: "lovable-uploads/slazzer-edit-image.png"
    },
    {
      name: "Prem Bharose",
      role: "Social Media Lead",
      initials: "PB",
      bio: "Manages online presence and community engagement strategies.",
      image: "lovable-uploads/WhatsApp Image 2025-06-19 at 22.39.26_d224b0f5.jpg"
    },
    {
      name: "Jadhav Vaishnavi",
      role: "Design Lead",
      initials: "JV",
      bio: "Oversees visual identity and creative design initiatives.",
      image: "lovable-uploads/IMG-20250619-WA0114[2](1)(1).png"
    },
    {
      name: "Geeta Jadhav",
      role: "Event Lead",
      initials: "GJ",
      bio: "Plans and coordinates all club events and workshops.",
      image: "lovable-uploads/WhatsApp Image 2025-06-19 at 23.07.58_e9242bf2.jpg"
    }
  ],
  teams: {
    technical: {
      leader: "Shaikh Ab Raheman",
      icon: "🛠",
      members: [
        "Minakshi Ugile", "Sanjivani Jadhav", "Syed Asif", "Syeda Bisma",
        "Shravan Gaikwad", "Dipali Karad", "Romana Arsheen", "Azra Jabeen",
        "Nabat Fatima", "Supriya Shahane", "Jyoti Solanke", "Rahul Raut",
        "Yogita Chinke", "Shivani Lokhande", "Geeta Kadam", "Mohammad Ahmad",
        "Shaikh Aref", "Gayathri Bharose", "Danish Qazi", "Zishan Beig", "Arpita Jondhale"
      ]
    },
    socialMedia: {
      leader: "Prem Bharose",
      icon: "📣",
      members: [
        "Syed Rayyan", "Vaibhav Chavan", "Vaibhav Javanjal", "Shweta Ghuge",
        "Ingole Srushti", "Arti Navale", "Pratiksha Dange"
      ]
    },
    design: {
      leader: "Jadhav Vaishnavi",
      icon: "🎨",
      members: [
        "Suryawanshi Rohini", "Saniya Baig", "Supriya Panchal", "Radhika Deshmukh",
        "Vaishnavi Shinde", "Rutuja Ghatge", "Shital Lande", "Dhiraj Gaikwad",
        "Rahul Telbhare", "Sarvadnya Kshirsagar"
      ]
    },
    eventManagement: {
      leader: "Geeta Jadhav",
      icon: "🎯",
      members: [
        "Shital Vyavhare", "Neha Vanjare", "Vaishnavi Udawant", "Shivani Lokhande",
        "Sanaullah Khan", "Ayodhya Jadhav", "Arjun Pimprikar", "Priyanka Awachar",
        "Asmita Raut", "Keshav Rajurkar", "Adarsh Surye", "Dhiraj Gaikwad"
      ]
    }
  }
};

export const chapter2Data = {
  president: { name: "", role: "President – DDSC", initials: "", bio: "", image: "" },
  coordinator: { name: "", role: "Faculty Coordinator", initials: "", bio: "", image: "" },
  coreTeam: [
    { role: "Vice President" },
    { role: "Treasurer" },
    { role: "Technical Lead" },
    { role: "Social Media Lead" },
    { role: "Design Lead" },
    { role: "Event Lead" }
  ].map(m => ({ ...m, name: "", bio: "", image: "" })),
  teams: {
    technical: { icon: "🛠", members: [] },
    socialMedia: { icon: "📣", members: [] },
    design: { icon: "🎨", members: [] },
    eventManagement: { icon: "🎯", members: [] }
  }
};
