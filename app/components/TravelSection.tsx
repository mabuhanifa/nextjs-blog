import Link from "next/link";
import Image from "next/image";
import { Compass, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const travelPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=300&h=400&fit=crop",
    alt: "Prague architecture",
    date: "Oct 28",
    region: "Central Europe",
    title: "Gothic Shadows of Prague",
    excerpt:
      "Walking the cobblestone streets where alchemists once sought the philosopher's stone.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=300&h=400&fit=crop",
    alt: "Italian coast",
    date: "Oct 15",
    region: "Italy",
    title: "The Cinque Terre by Twilight",
    excerpt:
      "Ancient fishing villages painted in ochre and rust, clinging to the Mediterranean cliffs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=400&fit=crop",
    alt: "Japanese temple",
    date: "Sep 22",
    region: "Japan",
    title: "Silence in the Bamboo Groves of Kyoto",
    excerpt:
      "Finding meditation in the rustle of ancient bamboo forests surrounding forgotten temples.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=300&h=400&fit=crop",
    alt: "Paris streets",
    date: "Sep 08",
    region: "France",
    title: "The Hidden Bookshops of the Left Bank",
    excerpt:
      "Exploring the dusty shelves where Hemingway and Fitzgerald once searched for inspiration.",
  },
];

export default function TravelSection() {
  return (
    <section id="travel" className="py-16 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-4">
        {/* Category Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-widest text-amber-600 uppercase">
            Archive Section
          </span>
          <h1 className="font-serif text-5xl text-amber-50 mt-4 mb-6">
            TRAVEL LOGS
          </h1>
          <div className="flex items-center justify-center gap-4">
            <span className="w-24 h-px bg-stone-700"></span>
            <Compass className="w-5 h-5 text-amber-600" />
            <span className="w-24 h-px bg-stone-700"></span>
          </div>
          <p className="font-body text-stone-400 mt-6 max-w-2xl mx-auto">
            Chronicles of wandering through ancient cities, forgotten paths, and
            landscapes that whisper stories of ages past.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {travelPosts.map((post, i) => (
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
                  {post.date} • {post.region}
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
              12
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
