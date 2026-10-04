const MAX_INLINE_ARRAY_CHARS = 36;

function JsonArray({ items }) {
  if (items.join('", "').length > MAX_INLINE_ARRAY_CHARS) {
    return (
      <>
        [
        {items.map((item, index) => (
          <div key={item} className="pl-5">
            <span className="text-amber-300">&quot;{item}&quot;</span>
            {index < items.length - 1 && ','}
          </div>
        ))}
        ]
      </>
    );
  }

  return (
    <>
      [
      {items.map((item, index) => (
        <span key={item}>
          <span className="text-amber-300">&quot;{item}&quot;</span>
          {index < items.length - 1 && ', '}
        </span>
      ))}
      ]
    </>
  );
}

function Line({ name, children, last = false }) {
  return (
    <div className="pl-5">
      <span className="text-sky-300">&quot;{name}&quot;</span>: {children}
      {!last && ','}
    </div>
  );
}

export default function ProfileTerminal({ personal }) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-primary/30 via-cyan-500/10 to-transparent blur-2xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl shadow-slate-900/30">
        <div className="flex items-center gap-2 border-b border-slate-700/80 bg-slate-800/70 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/90" />
          <span className="h-3 w-3 rounded-full bg-amber-400/90" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
          <span className="ml-3 font-mono text-xs text-slate-400">~/hrithik — zsh</span>
        </div>

        <div className="overflow-x-auto whitespace-pre p-5 font-mono text-[13px] leading-relaxed text-slate-300">
            <div>
              <span className="text-emerald-400">❯</span> <span className="text-slate-100">cat profile.json</span>
            </div>
            <div>{'{'}</div>
            <Line name="name">
              <span className="text-amber-300">&quot;{personal.name}&quot;</span>
            </Line>
            <Line name="role">
              <span className="text-amber-300">&quot;SDE 1 @ {personal.company}&quot;</span>
            </Line>
            <Line name="focus">
              <JsonArray items={personal.focus} />
            </Line>
            <Line name="stack">
              <JsonArray items={personal.stack} />
            </Line>
            <Line name="shipping" last>
              <span className="text-teal-300">true</span>
            </Line>
            <div>{'}'}</div>
            <div className="mt-2">
              <span className="text-emerald-400">❯</span> <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-slate-300" />
            </div>
        </div>
      </div>
    </div>
  );
}
