import { Github, Linkedin, Mail } from 'lucide-react';
import HRLogo from './HRLogo';

export default function Footer({ personal }) {
  const links = [
    { href: personal.github, label: 'GitHub', icon: Github, external: true },
    { href: personal.linkedin, label: 'LinkedIn', icon: Linkedin, external: true },
    { href: `mailto:${personal.email}`, label: 'Email', icon: Mail },
  ];

  return (
    <footer className="mt-12 border-t border-border bg-card">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <HRLogo size={26} />
          <p>
            © {new Date().getFullYear()} <span className="font-medium text-fg">{personal.name}</span>
          </p>
        </div>

        <ul className="flex items-center gap-2">
          {links.map(({ href, label, icon, external }) => {
            const Icon = icon;
            return (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external && { target: '_blank', rel: 'noreferrer' })}
                  className="flex rounded-lg p-2 text-muted transition-colors duration-300 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
