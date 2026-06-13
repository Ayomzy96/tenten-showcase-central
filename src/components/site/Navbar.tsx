import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X, Laptop, Gamepad2 } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  const linkCls =
    "text-sm font-medium text-foreground/80 hover:text-primary transition-colors";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg text-primary-foreground font-bold" style={{ background: "var(--gradient-primary)" }}>
            10
          </span>
          <span className="text-lg font-bold tracking-tight">
            Tenten <span className="text-primary">Computers</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className={linkCls} activeProps={{ className: "text-primary" }}>Home</Link>
          <Link to="/about" className={linkCls} activeProps={{ className: "text-primary" }}>About Us</Link>

          <div className="relative" onMouseLeave={() => setCatOpen(false)}>
            <button
              onMouseEnter={() => setCatOpen(true)}
              onClick={() => setCatOpen((v) => !v)}
              className={`${linkCls} flex items-center gap-1`}
            >
              Catalogues <ChevronDown className="h-4 w-4" />
            </button>
            {catOpen && (
              <div className="absolute left-0 top-full w-56 pt-2">
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
                  <Link
                    to="/catalogues/laptops"
                    onClick={() => setCatOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-secondary"
                  >
                    <Laptop className="h-4 w-4 text-primary" /> Laptops
                  </Link>
                  <Link
                    to="/catalogues/consoles"
                    onClick={() => setCatOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-secondary"
                  >
                    <Gamepad2 className="h-4 w-4 text-primary" /> Game Consoles
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/reviews" className={linkCls} activeProps={{ className: "text-primary" }}>Reviews</Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/50 md:hidden">
          <div className="space-y-1 px-4 py-3">
            <Link to="/" onClick={() => setOpen(false)} className="block py-2 text-sm">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="block py-2 text-sm">About Us</Link>
            <Link to="/catalogues/laptops" onClick={() => setOpen(false)} className="block py-2 text-sm">Laptops</Link>
            <Link to="/catalogues/consoles" onClick={() => setOpen(false)} className="block py-2 text-sm">Game Consoles</Link>
            <Link to="/reviews" onClick={() => setOpen(false)} className="block py-2 text-sm">Reviews</Link>
          </div>
        </div>
      )}
    </header>
  );
}