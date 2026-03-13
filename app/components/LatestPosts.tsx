import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop",
    alt: "Old library",
    date: "Nov 24",
    category: "Writing",
    title: "On the Nature of Forgotten Knowledge",
    excerpt:
      "What happens when entire libraries of wisdom slip through the cracks of history? An exploration of lost texts.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
    alt: "Misty landscape",
    date: "Nov 18",
    category: "Travel",
    title: "Wandering Through the Scottish Highlands",
    excerpt:
      "Mist-covered hills and ancient stone circles. A journey through time itself in the rugged beauty of Scotland.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Vintage typewriter",
    date: "Nov 12",
    category: "Philosophy",
    title: "The Mechanics of Creative Thought",
    excerpt:
      "Examining the intersection of tools and ideas. How the typewriter shaped a century of literary thought.",
  },
];

export default function LatestPosts() {
  return (
    <section id="latest" className="py-16 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="font-mono text-xs tracking-widest text-amber-600 uppercase">
              Recent Entries
            </span>
            <h2 className="font-serif text-3xl text-amber-50 mt-2">
              Latest from the Archive
            </h2>
          </div>
          <Link
            href="/writing"
            className="hidden md:inline-flex items-center gap-2 font-mono text-xs tracking-widest text-stone-400 hover:text-amber-500 transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="bg-stone-900 border border-stone-800 group hover:border-amber-700/50 transition-colors"
            >
              <div className="overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover sepia-[.25] opacity-80 group-hover:opacity-100 group-hover:sepia-0 transition-all duration-500"
                />
              </div>
              <div className="p-5">
                <div className="font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase mb-3">
                  {post.date} • {post.category}
                </div>
                <h3 className="font-serif text-lg text-amber-50 mb-3 group-hover:text-amber-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-stone-400 mb-4 line-clamp-2">
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
      </div>
    </section>
  );
}
