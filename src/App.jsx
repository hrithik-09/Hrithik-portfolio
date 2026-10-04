import { portfolioData } from './data';
import { useTheme } from './hooks/useTheme';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { personal, experience, skills, projects, education, awards = [], certifications = [] } = portfolioData;
  const { theme, toggleTheme } = useTheme();

  const sections = [
    {
      id: 'experience',
      title: "Where I've Worked",
      content: experience.map((exp, index) => (
        <ExperienceCard
          key={`${exp.company}-${exp.role}`}
          experience={exp}
          index={index}
          isLast={index === experience.length - 1}
        />
      )),
    },
    { id: 'skills', title: 'Skills & Expertise', content: <Skills skills={skills} /> },
    { id: 'projects', title: 'Featured Projects', content: <Projects projects={projects} /> },
    awards.length > 0 && { id: 'awards', title: 'Awards & Achievements', content: <Awards awards={awards} /> },
    certifications.length > 0 && {
      id: 'certifications',
      title: 'Certifications',
      content: <Certifications certifications={certifications} />,
    },
    { id: 'education', title: 'Education', content: <Education education={education} /> },
    { id: 'contact', title: 'Get In Touch', content: <Contact personal={personal} /> },
  ].filter(Boolean);

  return (
    <div className="min-h-screen overflow-x-hidden bg-page font-sans text-fg antialiased transition-colors duration-300 selection:bg-primary selection:text-white">
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-primary px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Navigation theme={theme} toggleTheme={toggleTheme} resumeUrl={personal.resume} />

      <main id="main">
        <Hero personal={personal} />

        {sections.map(({ id, title, content }, index) => (
          <Section key={id} id={id} number={String(index + 1).padStart(2, '0')} title={title}>
            {content}
          </Section>
        ))}
      </main>

      <Footer personal={personal} />
    </div>
  );
}
