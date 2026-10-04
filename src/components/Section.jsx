import Reveal from './Reveal';

export default function Section({ id, number, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 md:py-20">
      <Reveal className="mb-10 flex items-center gap-4">
        {number && <span className="font-mono text-lg font-medium text-primary">{number}.</span>}
        <h2 className="text-2xl font-bold tracking-tight text-fg md:text-3xl">{title}</h2>
        <span className="h-px flex-1 bg-linear-to-r from-border to-transparent" aria-hidden="true" />
      </Reveal>
      {children}
    </section>
  );
}
