import { useEffect, useState } from 'react';
import { FileText, Menu, Moon, Sun, X } from 'lucide-react';
import HRLogo from './HRLogo';

const NAV_ITEMS = [
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'awards', label: 'Awards' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function useActiveSection() {
  const [active, setActive] = useState('top');

  useEffect(() => {
    const sections = ['top', ...NAV_ITEMS.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Navigation({ theme, toggleTheme, resumeUrl }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const ThemeIcon = theme === 'light' ? Moon : Sun;
  const themeLabel = `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`;
  const solid = isScrolled || menuOpen;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        solid ? 'border-border bg-nav shadow-sm backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" onClick={closeMenu} aria-label="Back to top" className="transition-transform duration-300 hover:scale-110">
          <HRLogo />
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  isActive ? 'text-primary' : 'text-fg'
                }`}
              >
                {label}
                {isActive && <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary" />}
              </a>
            );
          })}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="rounded-lg p-2 text-fg transition-colors duration-300 hover:bg-primary/10 hover:text-primary"
          >
            <ThemeIcon size={18} />
          </button>

          <a
            href={resumeUrl}
            download="Hrithik_Ranjan_Resume.pdf"
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-primary-hover hover:shadow-md dark:text-slate-900"
          >
            <FileText size={16} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            className="rounded-lg p-2 text-fg transition-colors hover:text-primary"
          >
            <ThemeIcon size={20} />
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="rounded-lg p-2 text-fg transition-colors hover:text-primary"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-border px-6 pb-4 pt-2 lg:hidden">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
                className={`block rounded-lg px-4 py-2 transition-colors duration-300 hover:bg-primary/10 hover:text-primary ${
                  isActive ? 'bg-primary/10 text-primary' : 'text-fg'
                }`}
              >
                {label}
              </a>
            );
          })}
          <a
            href={resumeUrl}
            download="Hrithik_Ranjan_Resume.pdf"
            onClick={closeMenu}
            className="mt-2 flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-white transition-colors hover:bg-primary-hover dark:text-slate-900"
          >
            <FileText size={16} />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
