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

  skills: [
    "Go (Golang)",
    "Java",
    "C++",
    "Python",
    "Flutter",
    "Firebase",
    "Android",
    "ReactJs",
    "Node.js",
    "JavaScript",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Git & GitHub",
    "REST APIs",
    "Algorithms",
    "Object-Oriented Programming",
    "SDLC"
  ],

  projects: [
    {
      title: "WaveSync",
      subtitle: "Hearables Management Android Application",
      tags: ["Android", "Java", "Firebase", "XML"],
      description:
        "A TWS control application with 10+ features including device pairing, battery status monitoring, customizable equalizers, and noise control. Designed with an SDK-ready architecture to support seamless integration for full TWS functionality.",
      link: "https://github.com/hrithik-09/WaveSync",
    },
    {
      title: "Rakshak",
      subtitle: "Medical Infrastructure Management Portal",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "SQL", "PHP"],
      description:
        "A platform built to bring the entire medical infrastructure of India under one roof. Enriched with 10+ features including expert advice, hospital information, appointments, and subscription plans. Enhanced UX with 4 dedicated views for patients, doctors, hospitals, and administrators.",
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
