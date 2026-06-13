import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "@/components/site/ProductGrid";

export const Route = createFileRoute("/catalogues/consoles")({
  head: () => ({
    meta: [
      { title: "Game Consoles — Tenten Computers" },
      { name: "description", content: "Shop PlayStation, Xbox and Nintendo consoles with games and accessories." },
      { property: "og:title", content: "Game Consoles at Tenten Computers" },
      { property: "og:description", content: "PlayStation, Xbox, Nintendo and more." },
    ],
  }),
  component: Consoles,
});

const items = [
  { name: "PlayStation 5 Slim", tag: "Sony", price: "KSh 78,000", desc: "Disc edition, DualSense controller included." },
  { name: "PS5 Pro", tag: "Sony", price: "KSh 115,000", desc: "Enhanced GPU, 2TB SSD, 8K-ready." },
  { name: "Xbox Series X", tag: "Microsoft", price: "KSh 75,000", desc: "4K gaming, 1TB SSD, wireless controller." },
  { name: "Xbox Series S", tag: "Microsoft", price: "KSh 48,000", desc: "Compact next-gen console." },
  { name: "Nintendo Switch OLED", tag: "Nintendo", price: "KSh 45,000", desc: "Vivid 7-inch OLED screen, enhanced audio." },
  { name: "Steam Deck OLED", tag: "Valve", price: "KSh 92,000", desc: "Handheld PC gaming, 512GB." },
];

function Consoles() {
  return (
    <div>
      <section className="border-b border-border/50" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Game Consoles</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">The latest from PlayStation, Xbox and Nintendo — plus all the games and gear.</p>
        </div>
      </section>
      <ProductGrid items={items} />
    </div>
  );
}