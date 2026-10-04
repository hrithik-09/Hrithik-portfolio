import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import Reveal from './Reveal';

const secondaryButton =
  'flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-medium text-fg transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-sm';

export default function Contact({ personal }) {
  return (
    <Reveal>
      <div className="card relative isolate overflow-hidden px-6 py-12 text-center md:px-12">
        <div className="dot-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div className="absolute -bottom-24 left-1/2 -z-10 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
        <h3 className="text-2xl font-bold text-fg md:text-3xl">Let&apos;s build something together</h3>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
          I&apos;m always happy to talk about backend engineering, interesting problems, or new opportunities. The
          fastest way to reach me is email.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white shadow-sm transition-all duration-300 hover:bg-primary-hover hover:shadow-md dark:text-slate-900"
          >
            <Mail size={18} />
            Say hello
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className={secondaryButton}>
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className={secondaryButton}>
            <Github size={18} />
            GitHub
          </a>
          <a href={personal.resume} download="Hrithik_Ranjan_Resume.pdf" className={secondaryButton}>
            <FileText size={18} />
            Resume
          </a>
        </div>
      </div>
    </Reveal>
  );
}
