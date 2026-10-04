import { BadgeCheck, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';

function CertContent({ cert }) {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
          <BadgeCheck size={20} aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-base font-bold text-fg">{cert.title}</h3>
          <p className="text-sm text-muted">
            {cert.issuer} • {cert.date}
          </p>
        </div>
      </div>
      {cert.link && (
        <ExternalLink size={18} className="shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
      )}
    </>
  );
}

export default function Certifications({ certifications }) {
  const className = 'card group flex items-center justify-between gap-4 p-5 card-hover';

  return (
    <div className="space-y-4">
      {certifications.map((cert, index) => (
        <Reveal key={cert.title} delay={index * 100} from="left">
          {cert.link ? (
            <a href={cert.link} target="_blank" rel="noreferrer" className={className}>
              <CertContent cert={cert} />
            </a>
          ) : (
            <div className={className}>
              <CertContent cert={cert} />
            </div>
          )}
        </Reveal>
      ))}
    </div>
  );
}
