import Reveal from './Reveal';
import { fallbackIcon, iconMap } from './icons';

function SkillPill({ skill }) {
  const Icon = iconMap[skill.icon] || fallbackIcon;

  return (
    <li className="group flex items-center gap-2 rounded-lg border border-border bg-subtle px-3 py-2 text-sm font-medium text-fg transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary">
      <Icon size={16} className="text-primary" aria-hidden="true" />
      {skill.name}
    </li>
  );
}

export default function Skills({ skills }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((category, index) => (
        <Reveal key={category.title} delay={index * 100} className={category.wide ? 'md:col-span-2' : ''}>
          <div className="card h-full p-6 hover:border-primary/60">
            <h3 className="mb-4 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
