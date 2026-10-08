import { Trophy } from 'lucide-react';
import Reveal from './Reveal';

export default function Awards({ awards }) {
  return (
    <div className="space-y-6">
      {awards.map((award, index) => (
        <Reveal key={award.title} delay={index * 150}>
          <article className="card group flex items-start gap-4 p-6 card-hover">
            <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
              <Trophy size={24} aria-hidden="true" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-5 md:flex-row md:items-start">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-fg">{award.title}</h3>
                    <p className="mt-1 text-sm text-primary">{award.organization}</p>
                  </div>
                  <span className="chip self-start">{award.date}</span>
                </div>
                <p className="text-sm leading-relaxed text-fg">{award.description}</p>
              </div>
              {award.images?.length > 0 && (
                <div className="grid shrink-0 grid-cols-2 gap-3 md:w-64">
                  {award.images.map((image) => (
                    <a
                      key={image.src}
                      href={image.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/img block overflow-hidden rounded-xl border border-border bg-subtle"
                      aria-label={`Open full image: ${image.alt}`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        width={900}
                        height={1200}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[3/4] h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
