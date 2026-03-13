"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/writing", label: "Writing" },
    { href: "/travel", label: "Travel" },
    { href: "/photography", label: "Photography" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl text-amber-50 tracking-wide hover:text-amber-500 transition-colors"
        >
          <span className="text-amber-600">§</span> The Archive
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-widest uppercase text-stone-400 hover:text-amber-500 transition-colors border-b border-transparent hover:border-amber-500 pb-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="font-mono text-xs tracking-widest uppercase text-amber-600 border border-amber-700 px-4 py-2 hover:bg-amber-700 hover:text-stone-950 transition-all"
          >
            Library Card
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-stone-400 hover:text-amber-500 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-stone-800 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block font-mono text-xs tracking-widest uppercase text-stone-400 hover:text-amber-500"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="inline-block font-mono text-xs tracking-widest uppercase text-amber-600 border border-amber-700 px-4 py-2 mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Library Card
          </Link>
        </nav>
      )}
    </header>
  );
}
