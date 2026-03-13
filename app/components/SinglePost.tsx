import Link from "next/link";
import Image from "next/image";

export default function SinglePost() {
  return (
    <section id="single-post" className="py-16 border-t border-stone-800">
      <article className="max-w-3xl mx-auto px-4">
        {/* Post Header */}
        <header className="text-center mb-12">
          <div className="mb-6">
            <span className="inline-block font-mono text-[10px] tracking-[0.2em] text-amber-600 uppercase border border-amber-700 px-3 py-1">
              Philosophy
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-amber-50 leading-tight mb-6">
            On the Nature of Forgotten Knowledge
          </h1>
          <div className="flex items-center justify-center gap-4 font-mono text-xs text-stone-500">
            <span>November 24, 2024</span>
            <span className="text-stone-700">|</span>
            <span>8 min read</span>
            <span className="text-stone-700">|</span>
            <span>Sebastian Thorne</span>
          </div>
        </header>

        {/* Featured Image */}
        <figure className="mb-12">
          <Image
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=600&fit=crop"
            alt="Ancient manuscripts"
            width={1200}
            height={600}
            className="w-full sepia-[.2] opacity-90"
          />
          <figcaption className="font-mono text-xs text-stone-500 mt-3 text-center">
            Fig. 1: The Hall of Lost Manuscripts, Vatican Archives
          </figcaption>
        </figure>

        {/* Post Content */}
        <div className="prose prose-invert max-w-none">
          <p className="drop-cap text-lg text-stone-300 leading-relaxed mb-6">
            Throughout history, countless libraries have burned, manuscripts have
            crumbled, and oral traditions have faded into silence. The Library of
            Alexandria, that legendary repository of ancient wisdom, stands as
            the most famous casualty in our collective memory—yet it represents
            merely the tip of an iceberg of incalculable loss.
          </p>

          <p className="text-stone-300 leading-relaxed mb-6">
            What does it mean when entire philosophies vanish from human
            consciousness? When the thoughts that occupied the greatest minds of
            antiquity dissolve into the dust of their parchments? We are left to
            reconstruct shadows, to interpret fragments, to imagine whole
            cosmologies from the surviving sentences of lost treatises.
          </p>

          <h2 className="font-serif text-2xl text-amber-50 mt-10 mb-4">
            The Weight of Absence
          </h2>

          <p className="text-stone-300 leading-relaxed mb-6">
            Consider the works of Aristotle that we possess—they are, scholars
            believe, merely his lecture notes. His polished, literary dialogues,
            praised in antiquity as masterpieces rivaling Plato&apos;s, have
            vanished entirely. We teach his surviving corpus as though it were
            the whole, forgetting that what remains might be the footnotes to his
            true genius.
          </p>

          <blockquote className="border-l-4 border-amber-700 pl-6 my-8 italic text-stone-400">
            &ldquo;The greatest tragedy is not the burning of libraries, but the
            forgetting of what was lost within them. For when we forget that we
            have forgotten, the absence becomes invisible, and we mistake our
            poverty for completeness.&rdquo;
            <footer className="font-mono text-xs text-stone-500 mt-2 not-italic">
              — Marcus Aurelius Corvinus,{" "}
              <cite>Meditations on Loss</cite>
            </footer>
          </blockquote>

          <p className="text-stone-300 leading-relaxed mb-6">
            The medieval monasteries that preserved so much of classical learning
            were also filters—choosing what to copy based on relevance, piety,
            and available resources. For every text that survived, how many were
            left to molder, deemed unworthy of the precious parchment?
          </p>

          <h2 className="font-serif text-2xl text-amber-50 mt-10 mb-4">
            Fragments and Echoes
          </h2>

          <p className="text-stone-300 leading-relaxed mb-6">
            The pre-Socratic philosophers exist now only as fragments—quotations
            in later authors, often preserved precisely because those later
            authors disagreed with them. Heraclitus, who spoke of the logos and
            the ever-flowing river of change, survives in roughly 130 cryptic
            fragments. His complete works, which ancient sources suggest ran to
            multiple volumes, are gone.
          </p>

          <figure className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1473177027534-53d906e9abcf?w=800&h=450&fit=crop"
              alt="Ancient scrolls"
              width={800}
              height={450}
              className="w-full sepia-[.2] opacity-90"
            />
            <figcaption className="font-mono text-xs text-stone-500 mt-3 text-center">
              Fig. 2: Carbonized scrolls from Herculaneum, currently being
              decoded with X-ray tomography
            </figcaption>
          </figure>

          <p className="text-stone-300 leading-relaxed mb-6">
            Yet perhaps this loss contains its own wisdom. The fragments force us
            to think, to interpret, to complete the thought ourselves. They
            become koans rather than doctrines, invitations to philosophy rather
            than closed systems. In the spaces between the surviving words, we
            find room for our own understanding.
          </p>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-stone-800">
            <div className="flex flex-wrap gap-2">
              <span className="font-mono text-[10px] tracking-wider text-stone-500 uppercase mr-2">
                Topics:
              </span>
              {["Philosophy", "History", "Libraries", "Ancient World"].map(
                (tag) => (
                  <Link
                    key={tag}
                    href="#"
                    className="font-mono text-xs border border-stone-700 text-stone-400 hover:border-amber-700 hover:text-amber-500 px-2 py-1 transition-colors"
                  >
                    {tag}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>

        {/* Related Archives */}
        <aside className="mt-16 pt-12 border-t border-stone-800">
          <h3 className="font-serif text-2xl text-amber-50 mb-8 text-center">
            Related Archives
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="#" className="flex gap-4 group">
              <Image
                src="https://images.unsplash.com/photo-1526243741027-444d633d7365?w=120&h=120&fit=crop"
                alt="Related post"
                width={120}
                height={120}
                className="w-24 h-24 object-cover sepia-[.25] opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div>
                <span className="font-mono text-[10px] tracking-wider text-stone-500 uppercase">
                  Oct 18 • Writing
                </span>
                <h4 className="font-serif text-amber-50 group-hover:text-amber-500 transition-colors mt-1">
                  The Art of Marginalia
                </h4>
              </div>
            </Link>
            <Link href="#" className="flex gap-4 group">
              <Image
                src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=120&h=120&fit=crop"
                alt="Related post"
                width={120}
                height={120}
                className="w-24 h-24 object-cover sepia-[.25] opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div>
                <span className="font-mono text-[10px] tracking-wider text-stone-500 uppercase">
                  Oct 05 • Philosophy
                </span>
                <h4 className="font-serif text-amber-50 group-hover:text-amber-500 transition-colors mt-1">
                  Stoic Wisdom for Modern Times
                </h4>
              </div>
            </Link>
          </div>
        </aside>
      </article>
    </section>
  );
}
