type Item = { name: string; tag: string; price: string; desc: string };

export function ProductGrid({ items }: { items: Item[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <article key={it.name} className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-[var(--shadow-glow)]">
            <div className="aspect-video rounded-xl" style={{ background: "var(--gradient-hero)" }} />
            <div className="mt-4 flex items-center justify-between">
              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">{it.tag}</span>
              <span className="text-sm font-semibold text-primary">{it.price}</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold">{it.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}