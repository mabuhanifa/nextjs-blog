import Link from "next/link";
import { BookOpen, Info } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative py-24 md:py-32">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      <div className="max-w-5xl mx-auto px-4 text-center relative">
        <div className="mb-6">
          <span className="font-mono text-xs tracking-[0.3em] text-amber-600 uppercase">
            Welcome to
          </span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-amber-50 mb-6 leading-tight">
          The Digital Archive
          <br />
          <span className="text-4xl md:text-5xl italic text-stone-400">
            of Sebastian Thorne
          </span>
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-16 h-px bg-amber-700"></span>
          <span className="font-mono text-xs tracking-widest text-stone-500">
            EST. 2024
          </span>
          <span className="w-16 h-px bg-amber-700"></span>
        </div>
        <p className="font-mono text-sm text-stone-500 tracking-wide max-w-xl mx-auto">
          Exploring Philosophy, Code, and Art // A collection of writings,
          photographs, and wanderings through time and thought.
        </p>
        <div className="mt-12 flex items-center justify-center gap-6">
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-stone-950 font-mono text-xs tracking-widest uppercase px-6 py-3 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Browse Archives
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-stone-600 hover:border-amber-600 text-stone-300 hover:text-amber-500 font-mono text-xs tracking-widest uppercase px-6 py-3 transition-colors"
          >
            <Info className="w-4 h-4" />
            About
          </Link>
        </div>
      </div>
    </section>
  );
}
