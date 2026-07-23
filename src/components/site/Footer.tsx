import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">Tenten Computers</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Your trusted shop for laptops, game consoles, and computer accessories.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/catalogues/laptops" className="hover:text-primary">Laptops</Link></li>
            <li><Link to="/catalogues/consoles" className="hover:text-primary">Game Consoles</Link></li>
            <li><Link to="/reviews" className="hover:text-primary">Reviews</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +254 700 000 000</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@tentencomputers.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Nairobi, Kenya</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" className="rounded-full bg-secondary p-2 hover:bg-primary hover:text-primary-foreground transition"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="rounded-full bg-secondary p-2 hover:bg-primary hover:text-primary-foreground transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="rounded-full bg-secondary p-2 hover:bg-primary hover:text-primary-foreground transition"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tenten Computers. All rights reserved.
      </div>
    </footer>
  );
}