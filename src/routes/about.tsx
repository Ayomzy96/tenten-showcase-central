import { createFileRoute } from "@tanstack/react-router";
import { Target, Heart, Users, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tenten Computers" },
      { name: "description", content: "Learn about Tenten Computers — your trusted source for laptops, consoles and accessories." },
      { property: "og:title", content: "About Tenten Computers" },
      { property: "og:description", content: "Our story, mission and values." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="relative" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About <span className="text-primary">Tenten Computers</span></h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We make great technology accessible. From the first gaming console to your next work laptop, we're here to help you choose, buy and enjoy with confidence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Tenten Computers started with a simple idea: tech shopping should be friendly, transparent and trustworthy. Today we serve thousands of customers with carefully sourced laptops, game consoles and accessories.
            </p>
            <p className="mt-4 text-muted-foreground">
              Whether you're a student, a creator, a gamer or a small business, we'll help you find the right gear at the right price — and we'll be here long after the sale.
            </p>
            <p className="mt-4 text-sm font-medium text-primary">
              Tenten Computers is a registered company.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Target, label: "Mission", text: "Make premium tech affordable." },
              { icon: Heart, label: "Values", text: "Honesty in every transaction." },
              { icon: Users, label: "Community", text: "5,000+ happy customers." },
              { icon: Award, label: "Quality", text: "Authentic & warranty-backed." },
            ].map(({ icon: Icon, label, text }) => (
              <div key={label} className="rounded-2xl border border-border bg-card p-5">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold">{label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}