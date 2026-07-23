import { createFileRoute } from "@tanstack/react-router";
import laptops from "@/data/laptops.json";

export const Route = createFileRoute("/catalogues/laptops")({
  head: () => ({
    meta: [
      { title: "Laptops — Tenten Computers" },
      { name: "description", content: "Browse our collection of ultrabooks, gaming and business laptops." },
      { property: "og:title", content: "Laptops at Tenten Computers" },
      { property: "og:description", content: "Ultrabooks, gaming and business laptops." },
    ],
  }),
  component: Laptops,
});

const formatNaira = (n: number) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(n);

function Laptops() {
  return (
    <div>
      <section className="border-b border-border/50" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Laptops</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">Powerful machines for work, school and play — handpicked for performance and value.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {laptops.map((it, i) => (
            <article key={i} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary hover:shadow-[var(--shadow-glow)]">
              <div className="relative aspect-video overflow-hidden bg-secondary">
                {it.image ? (
                  <img src={it.image} alt={it.model} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
                ) : (
                  <div className="h-full w-full" style={{ background: "var(--gradient-hero)" }} />
                )}
                <span className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-medium ${it.inStock ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {it.inStock ? "In stock" : "Out of stock"}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold capitalize">{it.model}</h3>
                  <span className="whitespace-nowrap text-sm font-semibold text-primary">{formatNaira(it.price)}</span>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {it.specs.map((s, j) => (<li key={j}>• {s}</li>))}
                </ul>
                <a
                  href={`https://wa.me/2348165773599?text=${encodeURIComponent("Hi, I'm interested in the " + it.model)}`}
                  target="_blank" rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}