export const PROFILE = {
  name: "Nikhil Koundal",
  role: "Computer Science Student & Aspiring Software Developer",
  tagline: "Building practical solutions with programming, web technologies and AI.",
  email: "nikhilkoundal452007@gmail.com",
  phone: "+91-9317751056",
  github: "https://github.com/Nikhil9317",
  linkedin: "https://www.linkedin.com/in/nikhil-choudhary-043245381/",
  university: "Lovely Professional University, Phagwara, Punjab",
} as const;

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "training", label: "Training" },
  { id: "certificates", label: "Certificates" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const SKILL_GROUPS = [
  { title: "Programming", items: ["JavaScript", "C", "C++", "PHP", "Python"] },
  { title: "Web Technologies", items: ["HTML", "CSS", "Node.js", "Tailwind CSS"] },
  { title: "Database & Tools", items: ["MySQL", "MongoDB", "Git", "GitHub", "Figma"] },
  {
    title: "Soft Skills",
    items: ["Problem Solving", "Team Collaboration", "Time Management", "Adaptability"],
  },
] as const;

export const PROJECTS = [
  {
    index: "01",
    title: "College Microjob Platform",
    featured: false,
    visual: "marketplace" as const,
    description:
      "A platform where college students can find small short-term jobs based on their skills while gaining practical experience.",
    features: [
      "Job posting",
      "Job applications",
      "Student profiles",
      "Skill management",
      "Portfolio",
      "Availability",
      "Task tracking",
      "Deadlines",
      "Ratings and reviews",
    ],
    tech: [] as string[],
  },
  {
    index: "02",
    title: "AI Hand Gesture Control",
    featured: true,
    visual: "gesture" as const,
    description:
      "An AI and computer-vision project that recognizes hand gestures in real time and converts them into commands for controlling applications and devices.",
    features: [
      "Real-time gesture recognition",
      "Camera-based interaction",
      "Volume control",
      "Music control",
      "Presentation navigation",
      "Touchless interfaces",
    ],
    tech: ["Python", "OpenCV", "MediaPipe", "Machine Learning"],
  },
  {
    index: "03",
    title: "Student Attendance Management System",
    featured: false,
    visual: "dashboard" as const,
    description:
      "A management system that digitises attendance for students and staff, replacing manual registers with structured records and reports.",
    features: [
      "Attendance tracking",
      "Student records",
      "Attendance percentage",
      "Reports",
      "Easy management",
      "Reduced paperwork",
    ],
    tech: [] as string[],
  },
];

export const TRAINING = {
  title: "Summer Training – Python Teaching",
  org: "Lovely Professional University",
  period: "June 2026 – July 2026",
  points: [
    "Python fundamentals",
    "Variables",
    "Data types",
    "Operators",
    "Loops",
    "Conditions",
    "Functions",
    "Coding exercises",
    "Problem solving",
    "Live demonstrations",
    "Small Python projects",
    "Student guidance",
  ],
};

export const CERTIFICATES = [
  { title: "Master Git and Github", issuer: "WS CUBETECH", date: "April 2025" },
  { title: "Databricks for Generative AI", issuer: "SKILL UP", date: "April 2025" },
  { title: "Data Labelling Job Simulation", issuer: "FORAGE", date: "May 2025" },
  { title: "Collective Leadership", issuer: "OPEN LEARN", date: "May 2025" },
  { title: "Create Engaging Video with Google Vids", issuer: "SKILL UP", date: "April 2025" },
];

export const EDUCATION = [
  {
    school: "Lovely Professional University",
    place: "Phagwara, Punjab",
    level: "",
    score: "",
    date: "",
  },
  {
    school: "DAV Sr Sec Public School – MANAI",
    place: "Himachal Pradesh",
    level: "Higher Secondary Education",
    score: "",
    date: "March 2025",
  },
  {
    school: "DAV Sr Sec Public School – MANAI",
    place: "Himachal Pradesh",
    level: "Secondary Education",
    score: "89%",
    date: "March 2023",
  },
];
