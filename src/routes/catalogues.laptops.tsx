import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "@/components/site/ProductGrid";

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

const items = [
  { name: "MacBook Pro 14 M3", tag: "Ultrabook", price: "KSh 285,000", desc: "Apple M3 chip, 16GB RAM, 512GB SSD." },
  { name: "Dell XPS 15", tag: "Creator", price: "KSh 235,000", desc: "Intel i7, 16GB, 1TB SSD, OLED display." },
  { name: "ASUS ROG Strix G16", tag: "Gaming", price: "KSh 210,000", desc: "RTX 4060, i7-13650HX, 16GB DDR5." },
  { name: "Lenovo ThinkPad X1", tag: "Business", price: "KSh 195,000", desc: "Carbon, 14-inch 2.8K, ultra-light." },
  { name: "HP Pavilion 15", tag: "Everyday", price: "KSh 89,000", desc: "Ryzen 5, 8GB, 512GB SSD." },
  { name: "Acer Swift Go 14", tag: "Student", price: "KSh 72,000", desc: "Intel Core 5, 16GB, 512GB SSD." },
];

function Laptops() {
  return (
    <div>
      <section className="border-b border-border/50" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Laptops</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">Powerful machines for work, school and play — handpicked for performance and value.</p>
        </div>
      </section>
      <ProductGrid items={items} />
    </div>
  );
}