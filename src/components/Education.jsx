import Reveal from './Reveal';

export default function Education({ education }) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-8 top-0 w-0.5 bg-primary/30" aria-hidden="true" />

      <div className="space-y-8">
        {education.map((edu, index) => (
          <Reveal key={edu.degree} delay={index * 150} from="left" className="group relative pl-20">
            <div
              className="absolute left-6 top-6 z-10 h-4 w-4 rounded-full border-4 border-page bg-primary transition-transform duration-300 group-hover:scale-125"
              aria-hidden="true"
            />
            <article className="card p-6 card-hover">
              <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-fg">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-primary">{edu.institute}</p>
                </div>
                <span className="chip self-start">{edu.year}</span>
              </div>
              <p className="mt-2 text-sm text-fg">{edu.gpa}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
