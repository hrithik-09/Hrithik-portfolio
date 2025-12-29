// src/data.js
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Hrithik Ranjan",
    role: "Software Development Engineer 1",
    email: "ranjan.hrithikofficial@gmail.com",
    github: "https://github.com/hrithik-09",
    linkedin: "https://linkedin.com/in/hrithik2209",
    phone: "+91-9102978168",
    about:
      "Software Development Engineer with experience building and scaling backend services, integrating client applications, and shipping reliable features in production. Comfortable working across the stack using Go, Java, and modern web and mobile technologies.",
  },

  experience: [
    {
      company: "LetsTransport",
      role: "Software Development Engineer 1",
      duration: "07/2025 - Present",
      achievements: [
        "Designed and scaled a horizontally distributed backend architecture, preventing Redis and database overloads while enabling seamless scale-out from single to multiple pods.",
        "Built a real-time payment processing system replacing NEFT/RTGS workflows, achieving 98%+ transaction success rates and improved client experience.",
        "Implemented dynamic configuration management for multi-region operations, contributing to 4x growth in platform scalability and operational throughput.",
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

  skills: {
    technical: [
      { name: "Go (Golang)", icon: "SiGo" },
      { name: "Java", icon: "FaJava" },
      { name: "C++", icon: "SiCplusplus" },
      { name: "Python", icon: "SiPython" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "ReactJs", icon: "SiReact" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Flutter", icon: "SiFlutter" },
      { name: "Android", icon: "SiAndroid" },
      { name: "SQL", icon: "FaDatabase" },
      { name: "Firebase", icon: "SiFirebase" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "Redis", icon: "SiRedis" },
    ],
    tools: [
      { name: "Docker", icon: "SiDocker" },
      { name: "Git & GitHub", icon: "SiGithub" },
      { name: "Cursor", icon: "FaTerminal" },
      { name: "Postman", icon: "SiPostman" },
    ],
    methodologies: [
      { name: "Object-Oriented Programming", icon: "FaCode" },
      { name: "SDLC", icon: "FaProjectDiagram" },
      { name: "Algorithms", icon: "FaBrain" },
      { name: "System Design", icon: "FaSitemap" },
      { name: "REST APIs", icon: "FaPlug" },
    ]
  },

  projects: [
    {
      title: "FilmFolio",
      subtitle: "Your Ultimate Movie Tracker",
      tags: ["Android", "Java", "MVVM", "Retrofit", "Room DB", "Firebase", "XML"],
      description: [
        "Android movie tracker powered by TMDB API",
        "Advanced filtering by genre, year, rating, and language",
        "Wishlist management and smart reminders with notifications",
        "Real-time sync across devices using Firebase Firestore",
        "Google Sign-In and MVVM architecture with dark theme UI"
      ],
      link: "https://github.com/hrithik-09/filmfolio",
    },
    {
      title: "WaveSync",
      subtitle: "Hearables Management Android Application",
      tags: ["Android", "Java", "XML", "Android Studio"],
      description: [
        "TWS device management: scan, connect, and remove paired devices",
        "Real-time battery monitoring for earbuds and charging case",
        "Toggle switches for game mode, Dolby Atmos, and more",
        "Customizable tap, hold, and swipe gestures for playback and calls",
        "Equalizer presets and SDK-ready architecture for integration"
      ],
      link: "https://github.com/hrithik-09/WaveSync",
    },
    {
      title: "Rakshak",
      subtitle: "Medical Infrastructure Management Portal",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "SQL", "PHP"],
      description: [
        "Unified platform for India's medical infrastructure",
        "10+ features: expert advice, hospital information, appointments",
        "Subscription plans and payment integration",
        "4 dedicated views: patients, doctors, hospitals, administrators",
        "Enhanced UX with role-based access and interfaces"
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
    {
      institute: "St. Xavier's High School",
      degree: "Matriculation",
      year: "2018",
      gpa: "Percentage: 96.8%",
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
