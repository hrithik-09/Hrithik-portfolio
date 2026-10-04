import { ArrowRight, ArrowUpRight, CheckCircle2, ExternalLink, Github, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

function Tags({ tags }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}

function isGithubLink(link) {
  return link.includes('github.com');
}

function Pipeline({ steps }) {
  return (
    <ol className="mb-6 flex flex-wrap items-center gap-2 rounded-xl border border-border bg-subtle p-3" aria-label="How it works">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          <span className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-fg shadow-sm">
            <span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, '0')}</span>
            {step}
          </span>
          {index < steps.length - 1 && <ArrowRight size={16} className="text-primary/70" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}

function FeaturedProject({ project }) {
  return (
    <Reveal>
      <article className="card relative overflow-hidden p-6 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 md:p-8">
        <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-cyan-400 to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <Sparkles size={14} aria-hidden="true" />
              Featured Project
            </span>
            <h3 className="text-2xl font-bold text-fg md:text-3xl">{project.title}</h3>
            <p className="mt-1 text-primary">{project.subtitle}</p>
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-primary-hover hover:shadow-md dark:text-slate-900"
            >
              {isGithubLink(project.link) ? 'View code' : 'Live site'}
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
        </div>

        {project.pipeline && <Pipeline steps={project.pipeline} />}

        <ul className="mb-6 space-y-3 text-[15px] leading-relaxed text-muted">
          {project.description.map((point) => (
            <li key={point} className="flex gap-2.5">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <Tags tags={project.tags} />
      </article>
    </Reveal>
  );
}

function ProjectCard({ project, index }) {
  const LinkIcon = isGithubLink(project.link) ? Github : ExternalLink;

  return (
    <Reveal delay={index * 120} className="h-full">
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="card card-hover group flex h-full flex-col p-6"
      >
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-fg transition-colors duration-300 group-hover:text-primary">{project.title}</h3>
          <LinkIcon size={18} className="mt-1 shrink-0 text-muted transition-colors duration-300 group-hover:text-primary" aria-hidden="true" />
        </div>
        <p className="mb-4 text-sm text-primary">{project.subtitle}</p>
        <ul className="mb-6 list-inside list-disc space-y-1.5 text-sm leading-relaxed text-muted marker:text-primary">
          {project.description.slice(0, 3).map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="mt-auto">
          <Tags tags={project.tags} />
        </div>
      </a>
    </Reveal>
  );
}

export default function Projects({ projects }) {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <div className="space-y-6">
      {featured.map((project) => (
        <FeaturedProject key={project.title} project={project} />
      ))}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {others.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
