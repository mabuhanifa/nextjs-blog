import Link from "next/link";
import { Twitter, Github, Instagram, Rss, Heart, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-serif text-2xl text-amber-50 tracking-wide hover:text-amber-500 transition-colors"
            >
              <span className="text-amber-600">§</span> The Archive
            </Link>
            <p className="font-body text-stone-500 mt-4 leading-relaxed">
              A digital repository of thoughts, photographs, and wanderings.
              Exploring philosophy, code, and art since 2024.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="#"
                className="w-10 h-10 border border-stone-700 flex items-center justify-center text-stone-500 hover:border-amber-700 hover:text-amber-500 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-stone-700 flex items-center justify-center text-stone-500 hover:border-amber-700 hover:text-amber-500 transition-colors"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-stone-700 flex items-center justify-center text-stone-500 hover:border-amber-700 hover:text-amber-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-stone-700 flex items-center justify-center text-stone-500 hover:border-amber-700 hover:text-amber-500 transition-colors"
              >
                <Rss className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-amber-600 uppercase mb-4">
              Archives
            </h4>
            <nav className="space-y-3">
              <Link
                href="/writing"
                className="block font-mono text-sm text-stone-500 hover:text-amber-500 transition-colors"
              >
                Writing
              </Link>
              <Link
                href="/travel"
                className="block font-mono text-sm text-stone-500 hover:text-amber-500 transition-colors"
              >
                Travel Logs
              </Link>
              <Link
                href="/photography"
                className="block font-mono text-sm text-stone-500 hover:text-amber-500 transition-colors"
              >
                Photography
              </Link>
              <Link
                href="#"
                className="block font-mono text-sm text-stone-500 hover:text-amber-500 transition-colors"
              >
                Philosophy
              </Link>
              <Link
                href="#"
                className="block font-mono text-sm text-stone-500 hover:text-amber-500 transition-colors"
              >
                All Entries
              </Link>
            </nav>
          </div>

          {/* Info Column */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-amber-600 uppercase mb-4">
              Information
            </h4>
            <nav className="space-y-3">
              <Link
                href="/about"
                className="block font-mono text-sm text-stone-500 hover:text-amber-500 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block font-mono text-sm text-stone-500 hover:text-amber-500 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="block font-mono text-sm text-stone-500 hover:text-amber-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="block font-mono text-sm text-stone-500 hover:text-amber-500 transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="#"
                className="block font-mono text-sm text-stone-500 hover:text-amber-500 transition-colors"
              >
                RSS Feed
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-stone-600 tracking-wider">
            © 2024 THE DARK ARCHIVE. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-xs text-stone-700">
            <span className="text-stone-600">Crafted with</span>
            <Heart className="w-3 h-3 inline text-amber-700 mx-1" />
            <span className="text-stone-600">and</span>
            <Coffee className="w-3 h-3 inline text-amber-700 mx-1" />
            <span className="text-stone-600">in Oxford</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
