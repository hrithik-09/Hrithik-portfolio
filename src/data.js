// src/data.js

export const portfolioData = {
  personal: {
    name: "Hrithik Ranjan",
    role: "Software Development Engineer 1",
    company: "LetsTransport",
    email: "ranjan.hrithikofficial@gmail.com",
    github: "https://github.com/hrithik-09",
    linkedin: "https://linkedin.com/in/hrithik2209",
    resume: `${import.meta.env.BASE_URL}Hrithik_Ranjan_Main.pdf`,
    about:
      "Software Development Engineer with experience building and scaling backend services, integrating client applications, and shipping reliable features in production. Comfortable working across the stack using Node.js, Go, Java, C++ and modern web and mobile technologies.",
    focus: ["Backend", "Distributed Systems", "Real-time Systems"],
    stack: ["Go", "Node.js", "PostgreSQL", "Redis"],
  },
  experience: [
    {
      company: "LetsTransport",
      role: "Software Development Engineer 1",
      duration: "07/2025 - Present",
      achievements: [
        "Built an end-to-end Insurance CRM, digitizing case management, financial workflows, approvals, and analytics.",
        "Building the PTL (Part Truck Load) platform from scratch, implementing core modules for scalable transportation operations.",
        "Engineered a multi-LSP (logistics service provider) broadcast model, reducing order-state anomalies by 99% through race-condition fixes.",
        "Built a real-time Supplier Dashboard, reducing manual reporting effort by 70% and replacing Excel tracking.",
        "Built a self-service SME payment portal, reducing payment turnaround time from days to minutes.",
      ],
    },
    {
      company: "Lava International Ltd.",
      role: "SDE Intern (Application Development)",
      duration: "12/2024 - 06/2025",
      achievements: [
        "Developed Android application interfaces using Java, Kotlin, and XML, improving UI responsiveness and overall performance.",
        "Implemented reliable local and cloud data persistence with real-time synchronization using Firebase and SQLite.",
        "Integrated Bluetooth-based communication for TWS devices, enabling low-latency and real-time device interactions.",
      ],
    },
    {
      company: "VivahSahyog",
      role: "Backend Development Intern",
      duration: "10/2023 - 12/2023",
      achievements: [
        "Designed and implemented a scalable MySQL database architecture comprising 20+ tables for efficient data management.",
        "Developed and optimized RESTful APIs for 5+ core features, improving system reliability, performance, and scalability.",
      ],
    },
  ],

  skills: [
    {
      title: "Languages",
      items: [
        { name: "Go", icon: "SiGo" },
        { name: "Java", icon: "FaJava" },
        { name: "C++", icon: "SiCplusplus" },
        { name: "Python", icon: "SiPython" },
        { name: "JavaScript", icon: "SiJavascript" },
        { name: "TypeScript", icon: "SiTypescript" },
      ],
    },
    {
      title: "Frameworks & Platforms",
      items: [
        { name: "Node.js", icon: "SiNodedotjs" },
        { name: "React", icon: "SiReact" },
        { name: "Android", icon: "SiAndroid" },
        { name: "Flutter", icon: "SiFlutter" },
        { name: "Firebase", icon: "SiFirebase" },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "PostgreSQL", icon: "SiPostgresql" },
        { name: "MySQL", icon: "SiMysql" },
        { name: "Redis", icon: "SiRedis" },
        { name: "SQL", icon: "FaDatabase" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Docker", icon: "SiDocker" },
        { name: "Git & GitHub", icon: "SiGithub" },
        { name: "Postman", icon: "SiPostman" },
      ],
    },
    {
      title: "Core Concepts",
      wide: true,
      items: [
        { name: "System Design", icon: "FaSitemap" },
        { name: "Distributed Systems", icon: "FaProjectDiagram" },
        { name: "REST APIs", icon: "FaPlug" },
        { name: "Algorithms", icon: "FaBrain" },
        { name: "Object-Oriented Programming", icon: "FaCode" },
      ],
    },
  ],

  projects: [
    {
      title: "InitiateAI",
      subtitle: "AI Platform that Turns Business Problems into Initiation-Ready Projects",
      featured: true,
      pipeline: ["Interview", "Analysis", "Solutions", "Charter", "Execution Plan"],
      tags: ["Go", "Gin", "React", "TypeScript", "PostgreSQL", "OpenAI"],
      description: [
        "Adaptive AI interview that keeps asking until discovery is evidence-ready, then produces analysis, solutions, a project charter and an execution plan",
        "Pipeline of 6 specialised GPT-4o agents with 12 JSON-schema-validated outputs (fishbone diagram, root-cause summary, stakeholder analysis, timeline)",
        "Go/Gin REST API with JWT auth, admin approval workflow, and plan-gated limits (Starter, Professional, Enterprise) stored in PostgreSQL",
      ],
      link: "https://initiateai.pages.dev",
    },
    {
      title: "FilmFolio",
      subtitle: "Your Ultimate Movie Tracker",
      tags: ["Android", "Java", "MVVM", "Retrofit", "Room DB", "Firebase"],
      description: [
        "Android movie tracker powered by the TMDB API with filtering by genre, year, rating and language",
        "Wishlist management and smart reminders with notifications",
        "Real-time sync across devices using Firebase Firestore and Google Sign-In",
      ],
      link: "https://github.com/hrithik-09/filmfolio",
    },
    {
      title: "WaveSync",
      subtitle: "Hearables Management Android Application",
      tags: ["Android", "Java", "Bluetooth", "XML"],
      description: [
        "TWS device management: scan, connect, and remove paired devices",
        "Real-time battery monitoring for earbuds and charging case",
        "Customisable gestures, equalizer presets and toggles for game mode and Dolby Atmos",
      ],
      link: "https://github.com/hrithik-09/WaveSync",
    },
    {
      title: "Rakshak",
      subtitle: "Medical Infrastructure Management Portal",
      tags: ["PHP", "SQL", "JavaScript", "Bootstrap"],
      description: [
        "Unified platform for India's medical infrastructure with 10+ features",
        "Expert advice, hospital information, appointments and subscription payments",
        "Role-based views for patients, doctors, hospitals and administrators",
      ],
      link: "https://github.com/hrithik-09/Rakshak",
    },
  ],

  education: [
    {
      institute: "Indian Institute of Information Technology, Jabalpur",
      degree: "Bachelor of Technology, Computer Science Engineering",
      year: "2021 - 2025",
      gpa: "CGPA: 8.4",
    },
    {
      institute: "St. Michael's High School",
      degree: "Intermediate",
      year: "2018 - 2020",
      gpa: "Percentage: 92.2%",
    },
  ],

  awards: [
    {
      title: "EXCALIBUR 23' Finalist",
      organization: "NIT Kurukshetra Techfest",
      date: "01/2023",
      description: "Secured 3rd place among 250+ teams and received a special mention for the project in the hackathon organized during the annual techfest of NIT Kurukshetra.",
    },
  ],

  certifications: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle",
      date: "09/2025",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=57FB03C727DAA36B79FBC746B56564462811BABB734B136FA89FA746A8608D54",
    },
  ],
};
