import { createFileRoute, Link } from "@tanstack/react-router";
import { Laptop, Gamepad2 } from "lucide-react";

export const Route = createFileRoute("/catalogues/")({
  head: () => ({
    meta: [
      { title: "Catalogues — Tenten Computers" },
      { name: "description", content: "Browse our laptop and game console catalogues." },
    ],
  }),
  component: Catalogues,
});

function Catalogues() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold">Catalogues</h1>
      <p className="mt-3 text-muted-foreground">Choose a category to start browsing.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Link to="/catalogues/laptops" className="rounded-2xl border border-border bg-card p-8 transition hover:border-primary hover:shadow-[var(--shadow-glow)]">
          <Laptop className="h-8 w-8 text-primary" />
          <h2 className="mt-4 text-2xl font-semibold">Laptops</h2>
          <p className="mt-2 text-sm text-muted-foreground">Ultrabooks, gaming and business laptops.</p>
        </Link>
        <Link to="/catalogues/consoles" className="rounded-2xl border border-border bg-card p-8 transition hover:border-primary hover:shadow-[var(--shadow-glow)]">
          <Gamepad2 className="h-8 w-8 text-primary" />
          <h2 className="mt-4 text-2xl font-semibold">Game Consoles</h2>
          <p className="mt-2 text-sm text-muted-foreground">PlayStation, Xbox, Nintendo and more.</p>
        </Link>
      </div>
    </section>
  );
}