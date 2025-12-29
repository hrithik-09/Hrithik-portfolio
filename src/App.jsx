import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from './data';
import { Github, Linkedin, Mail, ExternalLink, Award, Trophy, Badge, FileText, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

// Artistic HR Logo Component - Elegant Interlocking Monogram
const HRLogo = ({ className = "", size = 30 }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      width={size} 
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D9488" /> {/* Teal-600 */}
          <stop offset="100%" stopColor="#0F766E" /> {/* Teal-700 */}
        </linearGradient>
      </defs>

      {/* Optional: Techy container border */}
      <rect 
        x="5" y="5" width="90" height="90" rx="20" 
        stroke="url(#tealGradient)" 
        strokeWidth="3" 
        strokeOpacity="0.3"
        fill="none" 
      />

      {/* H Structure */}
      <path 
        d="M 25 30 V 70 M 25 50 H 45 M 45 30 V 70" 
        stroke="url(#tealGradient)" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* R Structure */}
      <path 
        d="M 60 30 V 70 M 60 30 H 72 C 82 30 82 50 72 50 H 60 M 70 50 L 82 70" 
        stroke="url(#tealGradient)" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};
import { 
  SiGo, 
  SiCplusplus, 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiFlutter, 
  SiAndroid, 
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiFirebase,
  SiGithub,
  SiPostman
} from "react-icons/si";
import { 
  FaCode, 
  FaProjectDiagram, 
  FaBrain,
  FaDatabase,
  FaJava,
  FaPlug,
  FaTerminal,
  FaSitemap
} from "react-icons/fa";



const Section = ({ id, title, children, className = "" }) => {
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
      id={id}
      ref={sectionRef}
      className={`py-16 px-6 max-w-4xl mx-auto ${className} transition-all duration-1000 scroll-mt-20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 group" style={{ color: '#1F2933' }}>
        <span className="w-2 h-8 rounded-full animate-pulse group-hover:animate-none group-hover:scale-110 transition-transform" style={{ backgroundColor: '#0D9488' }}></span>
        <span style={{ color: '#0D9488' }}>
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
      className={`p-6 rounded-xl border transition-all duration-500 shadow-sm mb-6 hover:shadow-md hover:-translate-y-2 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        backgroundColor: '#FFFFFF',
        borderColor: '#E5E7EB'
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0D9488'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
    >
    <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
      <div>
          <h3 className="text-xl font-bold transition-colors duration-300" style={{ color: '#1F2933' }}>{title}</h3>
          <p className="font-medium transition-colors duration-300" style={{ color: '#0D9488' }}>{subtitle}</p>
        </div>
        {date && (
          <span className="text-sm px-3 py-1 rounded-full border transition-all duration-300" style={{ 
            color: '#667085',
            backgroundColor: '#FAFAF8',
            borderColor: '#E5E7EB'
          }}>
            {date}
          </span>
        )}
      </div>
      <div className="space-y-2 text-sm leading-relaxed transition-colors duration-300" style={{ color: '#1F2933' }}>
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
        <h3 className="text-xl font-bold transition-colors duration-300" style={{ color: '#1F2933' }}>
          {project.title}
        </h3>
        {project.link && (
          <ExternalLink size={18} className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: '#667085' }} />
        )}
      </div>
      <p className="text-sm mb-4 transition-colors duration-300" style={{ color: '#0D9488' }}>
        {project.subtitle}
      </p>
      <ul className="text-sm mb-6 leading-relaxed transition-colors duration-300 space-y-1.5 list-disc list-inside" style={{ color: '#667085' }}>
        {Array.isArray(project.description) ? (
          project.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))
        ) : (
          <li>{project.description}</li>
        )}
      </ul>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span 
            key={i} 
            className="text-xs font-mono px-2 py-1 rounded border transition-all duration-300 hover:scale-110 cursor-default"
            style={{ 
              color: '#667085',
              backgroundColor: '#FAFAF8',
              borderColor: '#E5E7EB'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0D9488';
              e.currentTarget.style.color = '#0D9488';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E5E7EB';
              e.currentTarget.style.color = '#667085';
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const cardStyle = { 
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB'
  };

  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      ref={projectRef}
      className={`group block backdrop-blur-sm p-6 rounded-xl border transition-all duration-500 hover:-translate-y-3 hover:shadow-md cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={cardStyle}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0D9488'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
    >
      {ProjectContent}
    </a>
  ) : (
    <div 
      ref={projectRef}
      className={`group backdrop-blur-sm p-6 rounded-xl border transition-all duration-500 hover:-translate-y-3 hover:shadow-md ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={cardStyle}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0D9488'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
    >
      {ProjectContent}
    </div>
  );
};

// Projects Carousel Component
const ProjectsCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance carousel (pauses on hover/interaction)
  useEffect(() => {
    if (isPaused || projects.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000); // Change project every 5 seconds

    return () => clearInterval(interval);
  }, [projects.length, isPaused]);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl py-4">
        <div 
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0 px-2"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls - Buttons and Dots */}
      {projects.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          {/* Previous Button */}
          <button
            onClick={prevProject}
            className="p-2 md:p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center"
            style={{ 
              backgroundColor: '#FFFFFF',
              color: '#0D9488',
              border: '2px solid #0D9488'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0D9488';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#0D9488';
            }}
            aria-label="Previous project"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex ? 'w-8' : 'w-2'
                } h-2`}
                style={{
                  backgroundColor: index === currentIndex ? '#0D9488' : '#E5E7EB'
                }}
                onMouseEnter={(e) => {
                  if (index !== currentIndex) {
                    e.currentTarget.style.backgroundColor = '#0D9488';
                    e.currentTarget.style.opacity = '0.5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== currentIndex) {
                    e.currentTarget.style.backgroundColor = '#E5E7EB';
                    e.currentTarget.style.opacity = '1';
                  }
                }}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextProject}
            className="p-2 md:p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center"
            style={{ 
              backgroundColor: '#FFFFFF',
              color: '#0D9488',
              border: '2px solid #0D9488'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0D9488';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#0D9488';
            }}
            aria-label="Next project"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
      )}
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
      className={`group backdrop-blur-sm p-6 rounded-xl border transition-all duration-500 hover:shadow-md hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        backgroundColor: '#FFFFFF',
        borderColor: '#E5E7EB'
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0D9488'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#0D9488' }}>
            <Trophy size={24} style={{ color: '#FFFFFF' }} />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
            <div>
              <h3 className="text-lg font-bold transition-colors duration-300" style={{ color: '#1F2933' }}>
                {award.title}
              </h3>
              <p className="transition-colors duration-300 text-sm mt-1" style={{ color: '#0D9488' }}>
                {award.organization}
              </p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full border transition-all duration-300 whitespace-nowrap" style={{ 
              color: '#667085',
              backgroundColor: '#FAFAF8',
              borderColor: '#E5E7EB'
            }}>
              {award.date}
            </span>
          </div>
          <p className="text-sm transition-colors duration-300" style={{ color: '#1F2933' }}>
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
          <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#0D9488' }}>
            <Badge size={20} style={{ color: '#FFFFFF' }} />
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold transition-colors duration-300" style={{ color: '#1F2933' }}>
            {cert.title}
          </h3>
          <p className="text-sm transition-colors duration-300" style={{ color: '#667085' }}>
            {cert.issuer} • {cert.date}
          </p>
        </div>
      </div>
      {cert.link && (
        <ExternalLink size={18} className="transition-all duration-300 group-hover:translate-x-1" style={{ color: '#667085' }} />
      )}
    </>
  );

  const cardStyle = { 
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB'
  };

  return cert.link ? (
    <a
      href={cert.link}
      target="_blank"
      rel="noreferrer"
      ref={certRef}
      className={`group flex items-center justify-between backdrop-blur-sm p-5 rounded-xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={cardStyle}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0D9488'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
    >
      {CertContent}
    </a>
  ) : (
    <div
      ref={certRef}
      className={`group flex items-center justify-between backdrop-blur-sm p-5 rounded-xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={cardStyle}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0D9488'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
    >
      {CertContent}
    </div>
  );
};

// Icon mapping for real technology icons
const iconMap = {
  SiGo,
  FaJava,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiFlutter,
  SiAndroid,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiFirebase,
  SiGithub,
  SiPostman,
  FaPlug,
  FaCode,
  FaProjectDiagram,
  FaBrain,
  FaDatabase,
  FaTerminal,
  FaSitemap,
};

const SkillItem = ({ skill, index }) => {
  const skillRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const IconComponent = iconMap[skill.icon] || FaCode;

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
    <div
      ref={skillRef}
      className={`group flex items-center gap-3 px-4 py-3 border rounded-xl transition-all duration-300 cursor-default hover:scale-105 hover:shadow-md ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ 
        backgroundColor: '#FFFFFF',
        borderColor: 'rgba(0, 0, 0, 0.05)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#0D9488';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: 'rgba(13, 148, 136, 0.1)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(13, 148, 136, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(13, 148, 136, 0.1)';
        }}
      >
        <IconComponent size={20} style={{ color: '#0D9488' }} className="group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span 
        className="font-medium transition-colors duration-300"
        style={{ color: '#1F2933' }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#0D9488'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#1F2933'}
      >
        {skill.name}
      </span>
    </div>
  );
};

const SkillsCategory = ({ title, skills, index }) => {
  const categoryRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.1 }
    );

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={categoryRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h3 className="text-xl font-bold mb-4" style={{ color: '#0D9488' }}>
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {skills.map((skill, idx) => (
          <SkillItem key={idx} skill={skill} index={idx} />
        ))}
      </div>
    </div>
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
      <div className="absolute left-6 top-2 w-4 h-4 rounded-full border-4 transition-all duration-300 z-10 group-hover:scale-150" style={{ 
        backgroundColor: '#0D9488',
        borderColor: '#FFFFFF'
      }}>
        <div className="absolute inset-0 rounded-full animate-ping opacity-75" style={{ backgroundColor: '#0D9488' }}></div>
      </div>
      
      {/* Content Card */}
      <div className="backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1" style={{ 
        backgroundColor: '#FFFFFF',
        borderColor: '#E5E7EB'
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0D9488'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-bold transition-colors duration-300" style={{ color: '#1F2933' }}>
              {edu.degree}
            </h3>
            <p className="transition-colors duration-300 text-sm mt-1" style={{ color: '#0D9488' }}>
              {edu.institute}
            </p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full border transition-all duration-300 whitespace-nowrap" style={{ 
            color: '#667085',
            backgroundColor: '#FAFAF8',
            borderColor: '#E5E7EB'
          }}>
            {edu.year}
          </span>
        </div>
        <p className="text-sm mt-2 transition-colors duration-300" style={{ color: '#1F2933' }}>
          {edu.gpa}
        </p>
      </div>
    </div>
  );
};

// --- Main App ---

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'awards', label: 'Awards' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const downloadResume = async () => {
    try {
      // Get the base URL from Vite config (handles GitHub Pages subdirectory)
      const baseUrl = import.meta.env.BASE_URL;
      const resumePath = `${baseUrl}Hrithik_Ranjan_Main.pdf`;
      
      // Try to fetch the file first to ensure it exists
      const response = await fetch(resumePath);
      if (!response.ok) {
        throw new Error('Resume file not found');
      }
      
      // Get the blob
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      // Create a link element
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Hrithik_Ranjan_Resume.pdf';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: open in new tab (works better on mobile devices)
      const baseUrl = import.meta.env.BASE_URL;
      window.open(`${baseUrl}Hrithik_Ranjan_Main.pdf`, '_blank');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || mobileMenuOpen
        ? 'backdrop-blur-md border-b shadow-sm' 
        : 'bg-transparent'
    }`}
    style={isScrolled || mobileMenuOpen ? { 
      backgroundColor: '#1F2933',
      borderColor: 'rgba(255, 255, 255, 0.1)'
    } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center justify-center hover:scale-110 transition-transform duration-300 z-10 relative"
            style={{ color: isScrolled ? '#FFFFFF' : '#1F2933' }}
          >
            <HRLogo isScrolled={isScrolled} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium transition-all duration-300 relative"
                style={{ 
                  color: activeSection === item.id 
                    ? '#0D9488' 
                    : (isScrolled ? '#FFFFFF' : '#1F2933')
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id) e.currentTarget.style.color = '#0D9488';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.color = isScrolled ? '#FFFFFF' : '#1F2933';
                  }
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5" style={{ backgroundColor: '#0D9488' }}></span>
                )}
              </button>
            ))}
            <button
              onClick={downloadResume}
              className="flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
              style={{ backgroundColor: '#0D9488' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F766E'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0D9488'}
            >
              <FileText size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden transition-colors z-10 relative"
            style={{ color: isScrolled ? '#FFFFFF' : '#1F2933' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0D9488'}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = isScrolled ? '#FFFFFF' : '#1F2933';
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Outside inner container for proper positioning */}
      {mobileMenuOpen && (
        <div className="md:hidden pb-4 space-y-2 border-t pt-4 backdrop-blur-md shadow-lg" style={{ 
          borderColor: 'rgba(255, 255, 255, 0.1)',
          backgroundColor: '#1F2933',
          zIndex: 1000
        }}>
          <div className="max-w-7xl mx-auto px-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 rounded-lg transition-all duration-300"
                style={{ 
                  color: activeSection === item.id ? '#0D9488' : '#FFFFFF',
                  backgroundColor: activeSection === item.id ? 'rgba(13, 148, 136, 0.1)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.color = '#0D9488';
                    e.currentTarget.style.backgroundColor = 'rgba(13, 148, 136, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={downloadResume}
              className="flex items-center gap-2 w-full px-4 py-2 text-white rounded-lg transition-all duration-300 mt-2"
              style={{ backgroundColor: '#0D9488' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F766E'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0D9488'}
            >
              <FileText size={16} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

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
    <div className="min-h-screen font-sans selection:bg-[#0D9488] selection:text-white relative overflow-hidden" style={{ color: '#1F2933', backgroundColor: '#FAFAF8' }}>
      {/* Base background - Cream-white */}
      <div className="fixed inset-0" style={{ backgroundColor: '#FAFAF8' }}></div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Content wrapper */}
      <div className="relative z-10 min-h-screen">
      
      {/* Hero Section */}
      <header className="min-h-[80vh] flex flex-col justify-center px-6 max-w-4xl mx-auto relative z-10 pt-24 md:pt-20">
        <div className="space-y-4 animate-fade-in">
          <p className="font-medium tracking-wide animate-slide-up" style={{ animationDelay: '0.1s', color: '#0D9488' }}>
            Hi, my name is
          </p>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span style={{ color: '#0D9488' }}>
              {personal.name}
            </span>
            <span style={{ color: '#1F2933' }}>.</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold animate-slide-up" style={{ animationDelay: '0.3s', color: '#667085' }}>
            I build{' '}
            <span style={{ color: '#1F2933' }}>
            production-grade software systems
            </span>
            .
          </h2>
          <p className="max-w-xl text-lg mt-6 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s', color: '#667085' }}>
            {personal.about}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a 
              href={personal.github} 
              target="_blank" 
              rel="noreferrer" 
              className="group flex items-center gap-2 px-6 py-3 backdrop-blur-sm text-white rounded-lg transition-all duration-300 border hover:shadow-sm hover:scale-105"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderColor: '#E5E7EB',
                color: '#1F2933'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0D9488';
                e.currentTarget.style.color = '#0D9488';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.color = '#1F2933';
              }}
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" /> 
              <span>GitHub</span>
            </a>
            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="group flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
              style={{ backgroundColor: '#0D9488' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F766E'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0D9488'}
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" /> 
              <span>LinkedIn</span>
            </a>
            <a 
              href={`mailto:${personal.email}`} 
              className="group flex items-center gap-2 px-6 py-3 bg-transparent border rounded-lg transition-all duration-300 hover:scale-105"
              style={{ 
                color: '#1F2933',
                borderColor: '#E5E7EB'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0D9488';
                e.currentTarget.style.color = '#0D9488';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.color = '#1F2933';
              }}
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" /> 
              <span>Email</span>
            </a>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <Section id="experience" title="Where I've Worked">
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
                  className="transition-colors duration-300 cursor-default"
                  style={{ color: '#1F2933' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0D9488'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#1F2933'}
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills & Expertise">
        <div className="space-y-12">
          <SkillsCategory 
            title="Technical Skills" 
            skills={skills.technical} 
            index={0}
          />
          <SkillsCategory 
            title="Tools I Use" 
            skills={skills.tools} 
            index={1}
          />
          <SkillsCategory 
            title="Core Concepts & Methodologies" 
            skills={skills.methodologies} 
            index={2}
          />
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <ProjectsCarousel projects={projects} />
      </Section>

      {/* Awards & Achievements Section */}
      {awards && awards.length > 0 && (
        <Section id="awards" title="Awards & Achievements">
          <div className="space-y-6">
            {awards.map((award, index) => (
              <AwardCard key={index} award={award} index={index} />
                ))}
              </div>
        </Section>
      )}

      {/* Certifications Section */}
      {certifications && certifications.length > 0 && (
        <Section id="certifications" title="Certifications">
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <CertCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </Section>
      )}

      {/* Education Timeline Section */}
      <Section id="education" title="Education">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: '#0D9488', opacity: 0.3 }}></div>
          
          {/* Timeline Items */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <TimelineItem key={index} edu={edu} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm mt-12 border-t" style={{ 
        color: '#667085',
        backgroundColor: '#1F2933',
        borderColor: 'rgba(255, 255, 255, 0.1)'
      }}>
        <p className="transition-colors duration-300" style={{ color: '#667085' }}>
          Designed by{' '}
          <span className="transition-colors duration-300" style={{ color: '#FFFFFF' }}>
            {personal.name}
          </span>
        </p>
      </footer>
      </div>
    </div>
  );
}
