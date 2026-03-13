import Link from "next/link";
import Image from "next/image";
import { PenTool, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const writingPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=400&fit=crop",
    alt: "Books and candle",
    date: "Nov 20",
    category: "Essay",
    title: "The Consolation of Old Books",
    excerpt:
      "On the peculiar comfort of holding volumes that have outlived their original owners, carrying the fingerprints of centuries.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop",
    alt: "Open notebook",
    date: "Nov 14",
    category: "Reflection",
    title: "Letters to No One",
    excerpt:
      "The dying art of letter writing and why putting pen to paper remains an act of profound intimacy.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
    alt: "Inkwell and quill",
    date: "Nov 08",
    category: "Philosophy",
    title: "Stoicism in the Digital Age",
    excerpt:
      "How ancient wisdom helps navigate the chaos of modern connectivity, endless notifications, and digital noise.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?w=300&h=400&fit=crop",
    alt: "Reading by window",
    date: "Nov 02",
    category: "Literature",
    title: "Rereading the Romantics",
    excerpt:
      "Returning to Keats and Shelley after a decade. How time changes what we find in familiar verses.",
  },
];

export default function WritingSection() {
  return (
    <section id="writing" className="py-16 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-4">
        {/* Category Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-widest text-amber-600 uppercase">
            Archive Section
          </span>
          <h1 className="font-serif text-5xl text-amber-50 mt-4 mb-6">
            WRITING
          </h1>
          <div className="flex items-center justify-center gap-4">
            <span className="w-24 h-px bg-stone-700"></span>
            <PenTool className="w-5 h-5 text-amber-600" />
            <span className="w-24 h-px bg-stone-700"></span>
          </div>
          <p className="font-body text-stone-400 mt-6 max-w-2xl mx-auto">
            Essays, reflections, and literary explorations on philosophy,
            literature, and the human condition. A collection of thoughts
            preserved in digital ink.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {writingPosts.map((post, i) => (
            <article
              key={i}
              className="bg-stone-900 border border-stone-800 group hover:border-amber-700/50 transition-colors flex"
            >
              <div className="w-1/3 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover sepia-[.25] opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div className="w-2/3 p-5 flex flex-col">
                <div className="font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase mb-2">
                  {post.date} • {post.category}
                </div>
                <h3 className="font-serif text-lg text-amber-50 mb-2 group-hover:text-amber-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-stone-400 mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href="/post/on-the-nature-of-forgotten-knowledge"
                  className="inline-flex items-center gap-2 font-mono text-xs text-amber-600 hover:text-amber-500 transition-colors"
                >
                  Read Entry <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <nav className="flex items-center justify-center gap-4">
          <Link
            href="#"
            className="font-mono text-xs text-stone-500 hover:text-amber-500 transition-colors flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Prev
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-amber-600 border border-amber-700 px-3 py-1">
              1
            </span>
            <span className="font-mono text-xs text-stone-500 hover:text-amber-500 cursor-pointer px-3 py-1">
              2
            </span>
            <span className="font-mono text-xs text-stone-500 hover:text-amber-500 cursor-pointer px-3 py-1">
              3
            </span>
            <span className="font-mono text-xs text-stone-600">...</span>
            <span className="font-mono text-xs text-stone-500 hover:text-amber-500 cursor-pointer px-3 py-1">
              8
            </span>
          </div>
          <Link
            href="#"
            className="font-mono text-xs text-stone-500 hover:text-amber-500 transition-colors flex items-center gap-1"
          >
            Next <ChevronRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>
    </section>
  );
}
