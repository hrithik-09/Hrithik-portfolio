import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from './data';
import { Github, Linkedin, Mail, ExternalLink, Award, Trophy, Badge } from "lucide-react";



const Section = ({ title, children, className = "" }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-16 px-6 max-w-4xl mx-auto ${className} transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3 group">
        <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full animate-pulse group-hover:animate-none group-hover:scale-110 transition-transform"></span>
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {children}
    </section>
  );
};

const Card = ({ title, subtitle, date, children, index = 0 }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={`bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-500 shadow-lg mb-6 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
          <p className="text-blue-400 font-medium group-hover:text-cyan-400 transition-colors duration-300">{subtitle}</p>
        </div>
        {date && (
          <span className="text-sm text-slate-400 bg-gradient-to-r from-slate-900 to-slate-800 px-3 py-1 rounded-full border border-slate-700 group-hover:border-blue-500/50 transition-all duration-300">
            {date}
          </span>
        )}
      </div>
      <div className="text-slate-300 space-y-2 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
        {children}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const projectRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.1 }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, [index]);

  const ProjectContent = (
    <>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        {project.link && (
          <ExternalLink size={18} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        )}
      </div>
      <p className="text-sm text-blue-400 mb-4 group-hover:text-cyan-400 transition-colors duration-300">
        {project.subtitle}
      </p>
      <p className="text-slate-400 text-sm mb-6 h-20 overflow-hidden group-hover:text-slate-300 transition-colors duration-300">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span 
            key={i} 
            className="text-xs font-mono text-blue-300 bg-blue-900/30 px-2 py-1 rounded border border-blue-800/30 group-hover:bg-cyan-900/30 group-hover:text-cyan-300 group-hover:border-cyan-700/30 transition-all duration-300 hover:scale-110 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      ref={projectRef}
      className={`group block bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
    >
      {ProjectContent}
    </a>
  ) : (
    <div 
      ref={projectRef}
      className={`group bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
    >
      {ProjectContent}
    </div>
  );
};

const AwardCard = ({ award, index }) => {
  const awardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.2 }
    );

    if (awardRef.current) {
      observer.observe(awardRef.current);
    }

    return () => {
      if (awardRef.current) {
        observer.unobserve(awardRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={awardRef}
      className={`group bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Trophy size={24} className="text-slate-900" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
            <div>
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-yellow-400 transition-colors duration-300">
                {award.title}
              </h3>
              <p className="text-blue-400 group-hover:text-yellow-400 transition-colors duration-300 text-sm mt-1">
                {award.organization}
              </p>
            </div>
            <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700 group-hover:border-yellow-500/50 group-hover:text-yellow-400 transition-all duration-300 whitespace-nowrap">
              {award.date}
            </span>
          </div>
          <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-300">
            {award.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const CertCard = ({ cert, index }) => {
  const certRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.2 }
    );

    if (certRef.current) {
      observer.observe(certRef.current);
    }

    return () => {
      if (certRef.current) {
        observer.unobserve(certRef.current);
      }
    };
  }, [index]);

  const CertContent = (
    <>
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Badge size={20} className="text-slate-900" />
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-100 group-hover:text-green-400 transition-colors duration-300">
            {cert.title}
          </h3>
          <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
            {cert.issuer} • {cert.date}
          </p>
        </div>
      </div>
      {cert.link && (
        <ExternalLink size={18} className="text-slate-600 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300" />
      )}
    </>
  );

  return cert.link ? (
    <a
      href={cert.link}
      target="_blank"
      rel="noreferrer"
      ref={certRef}
      className={`group flex items-center justify-between bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-5 rounded-xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1 cursor-pointer ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
    >
      {CertContent}
    </a>
  ) : (
    <div
      ref={certRef}
      className={`group flex items-center justify-between bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-5 rounded-xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
    >
      {CertContent}
    </div>
  );
};

const SkillBadge = ({ skill, index }) => {
  const skillRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 50);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [index]);

  return (
    <span 
      ref={skillRef}
      className={`px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:border-cyan-500 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-900/20 hover:to-blue-900/20 transition-all duration-300 cursor-default hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {skill}
    </span>
  );
};

const TimelineItem = ({ edu, index }) => {
  const timelineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={timelineRef}
      className={`relative pl-20 group ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      } transition-all duration-700`}
    >
      {/* Timeline Node */}
      <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-slate-900 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 z-10">
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
      </div>
      
      {/* Content Card */}
      <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700 group-hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
              {edu.degree}
            </h3>
            <p className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-300 text-sm mt-1">
              {edu.institute}
            </p>
          </div>
          <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300 whitespace-nowrap">
            {edu.year}
          </span>
        </div>
        <p className="text-slate-300 text-sm mt-2 group-hover:text-blue-400 transition-colors duration-300">
          {edu.gpa}
        </p>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const { personal, experience, skills, projects, education, awards = [], certifications = [] } = portfolioData;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen text-slate-300 font-sans selection:bg-blue-500 selection:text-white relative overflow-hidden">
      {/* Base gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"></div>
      
      {/* Animated mesh gradient overlay */}
      <div className="fixed inset-0 opacity-40">
        <div 
          className="absolute inset-0 animate-gradient-mesh"
          style={{
            background: `
              radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
              radial-gradient(at 100% 0%, rgba(6, 182, 212, 0.2) 0px, transparent 50%),
              radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.2) 0px, transparent 50%),
              radial-gradient(at 0% 100%, rgba(59, 130, 246, 0.25) 0px, transparent 50%)
            `
          }}
        />
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            animationDelay: '0s',
            animationDuration: '20s'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
            top: '60%',
            right: '10%',
            animationDelay: '5s',
            animationDuration: '25s'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-15 animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            bottom: '20%',
            left: '50%',
            animationDelay: '10s',
            animationDuration: '30s'
          }}
        />
      </div>
      
      {/* Mouse-following spotlight */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
        }}
      />
      
      {/* Content wrapper with backdrop blur effect */}
      <div className="relative z-10 min-h-screen">
      
      {/* Hero Section */}
      <header className="min-h-[80vh] flex flex-col justify-center px-6 max-w-4xl mx-auto relative z-10">
        <div className="space-y-4 animate-fade-in">
          <p className="text-blue-400 font-medium tracking-wide animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Hi, my name is
          </p>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
              {personal.name}
            </span>
            <span className="text-slate-100">.</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-400 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            I build{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            production-grade software systems
            </span>
            .
          </h2>
          <p className="max-w-xl text-lg text-slate-400 mt-6 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {personal.about}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a 
              href={personal.github} 
              target="_blank" 
              rel="noreferrer" 
              className="group flex items-center gap-2 px-6 py-3 bg-slate-800/80 backdrop-blur-sm text-white rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" /> 
              <span>GitHub</span>
            </a>
            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" /> 
              <span>LinkedIn</span>
            </a>
            <a 
              href={`mailto:${personal.email}`} 
              className="group flex items-center gap-2 px-6 py-3 bg-transparent text-slate-300 border border-slate-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:bg-slate-800/50 hover:scale-105"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" /> 
              <span>Email</span>
            </a>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <Section title="Where I've Worked">
        {experience.map((exp, index) => (
          <Card 
            key={index} 
            title={exp.role} 
            subtitle={exp.company} 
            date={exp.duration}
            index={index}
          >
            <ul className="list-disc list-outside ml-4 space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li 
                  key={i}
                  className="hover:text-blue-400 transition-colors duration-300 cursor-default"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Section>

      {/* Skills Section */}
      <Section title="Technical Skills">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} index={index} />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="Featured Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </Section>

      {/* Awards & Achievements Section */}
      {awards && awards.length > 0 && (
        <Section title="Awards & Achievements">
          <div className="space-y-6">
            {awards.map((award, index) => (
              <AwardCard key={index} award={award} index={index} />
            ))}
          </div>
        </Section>
      )}

      {/* Certifications Section */}
      {certifications && certifications.length > 0 && (
        <Section title="Certifications">
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <CertCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </Section>
      )}

      {/* Education Timeline Section */}
      <Section title="Education">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 opacity-30"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <TimelineItem key={index} edu={edu} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-500 text-sm bg-gradient-to-t from-slate-950 to-slate-900 mt-12 border-t border-slate-800">
        <p className="text-slate-500 hover:text-slate-400 transition-colors duration-300">
          Designed by{' '}
          <span className="text-blue-400 hover:text-cyan-400 transition-colors duration-300">
            {personal.name}
          </span>
        </p>
      </footer>
      </div>
    </div>
  );
}