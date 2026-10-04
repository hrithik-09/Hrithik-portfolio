import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ProfileTerminal from './ProfileTerminal';

const iconButton =
  'flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-fg transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary';

export default function Hero({ personal }) {
  return (
    <section id="top" className="relative isolate">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="dot-grid absolute inset-0" />
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl md:left-1/4" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[90vh] max-w-6xl items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1.25fr_1fr] lg:pt-24">
        <div className="space-y-6">
          <p
            className="animate-slide-up inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm text-muted shadow-sm backdrop-blur"
            style={{ animationDelay: '0.05s' }}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Currently {personal.role} at <span className="font-semibold text-fg">{personal.company}</span>
          </p>

          <div className="space-y-3">
            <p className="animate-slide-up font-mono text-sm text-primary" style={{ animationDelay: '0.1s' }}>
              Hi, my name is
            </p>
            <h1
              className="animate-slide-up text-5xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="bg-linear-to-r from-primary via-teal-500 to-cyan-500 bg-clip-text text-transparent dark:via-teal-300 dark:to-cyan-300">
                {personal.name}
              </span>
              <span className="text-fg">.</span>
            </h1>
            <h2
              className="animate-slide-up text-3xl font-bold tracking-tight text-muted sm:text-4xl xl:text-5xl"
              style={{ animationDelay: '0.3s' }}
            >
              I build <span className="text-fg">production-grade software systems</span>.
            </h2>
          </div>

          <p className="animate-slide-up max-w-xl text-lg leading-relaxed text-muted" style={{ animationDelay: '0.4s' }}>
            {personal.about}
          </p>

          <div className="animate-slide-up flex flex-wrap items-center gap-3 pt-2" style={{ animationDelay: '0.5s' }}>
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover dark:text-slate-900"
            >
              View my work
              <ArrowDown size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className={iconButton}>
              <Linkedin size={20} />
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className={iconButton}>
              <Github size={20} />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email" title="Email" className={iconButton}>
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="animate-slide-up hidden md:block" style={{ animationDelay: '0.6s' }}>
          <ProfileTerminal personal={personal} />
        </div>
      </div>
    </section>
  );
}
