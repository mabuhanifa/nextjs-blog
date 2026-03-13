import { ScrollText } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-16 border-t border-stone-800 bg-stone-900/50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 border border-amber-700 mb-6">
          <ScrollText className="w-8 h-8 text-amber-600" />
        </div>
        <h2 className="font-serif text-3xl text-amber-50 mb-4">
          Subscribe to the Archives
        </h2>
        <p className="font-body text-stone-400 mb-8 max-w-lg mx-auto">
          Receive occasional letters containing new entries, reflections, and
          curated recommendations. No more than twice monthly.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your.email@example.com"
            className="flex-1 bg-stone-950 border border-stone-700 text-stone-300 px-4 py-3 font-mono text-sm focus:border-amber-700 focus:outline-none transition-colors placeholder:text-stone-600"
          />
          <button
            type="submit"
            className="bg-amber-700 hover:bg-amber-600 text-stone-950 font-mono text-xs tracking-widest uppercase px-6 py-3 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="font-mono text-[10px] text-stone-600 mt-4 tracking-wider">
          NO SPAM. UNSUBSCRIBE ANYTIME.
        </p>
      </div>
    </section>
  );
}
