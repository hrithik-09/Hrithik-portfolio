import { Briefcase } from 'lucide-react';
import Reveal from './Reveal';

export default function ExperienceCard({ experience, index, isLast }) {
  const { role, company, duration, achievements } = experience;
  const isCurrent = duration.includes('Present');

  return (
    <Reveal delay={index * 100} className="relative pb-8 pl-14 md:pl-16">
      {!isLast && <span className="absolute bottom-0 left-5 top-12 w-px bg-linear-to-b from-primary/50 to-border" aria-hidden="true" />}
      <span
        className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border ${
          isCurrent ? 'border-primary bg-primary text-white shadow-lg shadow-primary/30 dark:text-slate-900' : 'border-border bg-card text-primary'
        }`}
        aria-hidden="true"
      >
        <Briefcase size={18} />
      </span>

      <article className="card card-hover p-6">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-bold text-fg">{role}</h3>
              {isCurrent && (
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Current
                </span>
              )}
            </div>
            <p className="font-semibold text-primary">{company}</p>
          </div>
          <span className="chip font-mono">{duration}</span>
        </div>
        <ul className="space-y-2.5 text-[15px] leading-relaxed text-fg/90">
          {achievements.map((achievement) => (
            <li key={achievement} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}
