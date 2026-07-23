import { createFileRoute, Link } from "@tanstack/react-router";
import { Laptop, Gamepad2, Headphones, Truck, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tenten Computers — Laptops, Consoles & Accessories" },
      { name: "description", content: "Tenten Computers sells premium laptops, game consoles, and computer accessories with trusted warranty and fast delivery." },
      { property: "og:title", content: "Tenten Computers — Laptops, Consoles & Accessories" },
      { property: "og:description", content: "Tenten Computers sells premium laptops, game consoles, and computer accessories with trusted warranty and fast delivery." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-primary">
              <Sparkles className="h-3 w-3" /> New arrivals in stock
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Power up your <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>setup</span>.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
              Laptops, game consoles, and premium accessories — handpicked by Tenten Computers and backed by real-world warranty.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-[var(--shadow-glow)]">
                <Link to="/catalogues/laptops">Shop Laptops <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/catalogues/consoles">Explore Consoles</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl opacity-40 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
            <img
              src={heroImg}
              alt="Laptop, controller and headphones with cyan neon glow"
              width={1600}
              height={900}
              className="relative w-full rounded-2xl border border-border shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Shop by Category</h2>
          <p className="mt-3 text-muted-foreground">Everything you need to work, create and game.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Laptop, title: "Laptops", desc: "Ultrabooks, gaming and business laptops.", to: "/catalogues/laptops" },
            { icon: Gamepad2, title: "Game Consoles", desc: "PlayStation, Xbox, Nintendo & more.", to: "/catalogues/consoles" },
            { icon: Headphones, title: "Accessories", desc: "Headphones, keyboards, mice, storage.", to: "/catalogues/laptops" },
          ].map(({ icon: Icon, title, desc, to }) => (
            <Link key={title} to={to} className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-[var(--shadow-glow)]">
              <div className="grid h-12 w-12 place-items-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                Browse <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: ShieldCheck, title: "Genuine Products", desc: "100% authentic with manufacturer warranty." },
            { icon: Truck, title: "Fast Delivery", desc: "Same-day delivery within Nairobi." },
            { icon: Sparkles, title: "Expert Support", desc: "Friendly help before and after you buy." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <Icon className="h-8 w-8 shrink-0 text-primary" />
              <div>
                <h4 className="font-semibold">{title}</h4>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border p-10 text-center md:p-16" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="text-3xl font-bold sm:text-4xl">Loved by gamers, creators & professionals</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">See what our customers are saying or share your own experience.</p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/reviews">Read & Leave a Review</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
