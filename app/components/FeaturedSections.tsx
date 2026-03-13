import Link from "next/link";
import Image from "next/image";
import { PenTool, Compass, Camera } from "lucide-react";

const sections = [
  {
    href: "/writing",
    image:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=500&fit=crop",
    alt: "Writing",
    icon: PenTool,
    count: "24 Entries",
    title: "Writing",
    description: "Essays, reflections, and literary explorations",
  },
  {
    href: "/travel",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=500&fit=crop",
    alt: "Travel",
    icon: Compass,
    count: "18 Entries",
    title: "Travel Logs",
    description: "Journeys through landscapes and cultures",
  },
  {
    href: "/photography",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=500&fit=crop",
    alt: "Photography",
    icon: Camera,
    count: "42 Images",
    title: "Photography",
    description: "Visual documentation and artistic captures",
  },
];

export default function FeaturedSections() {
  return (
    <section className="py-16 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="font-mono text-xs tracking-widest text-amber-600 uppercase">
            Collections
          </span>
          <h2 className="font-serif text-3xl text-amber-50 mt-2">
            Browse by Archive
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <Link
                key={i}
                href={section.href}
                className="group relative overflow-hidden border border-stone-800 hover:border-amber-700 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent z-10"></div>
                <Image
                  src={section.image}
                  alt={section.alt}
                  width={400}
                  height={500}
                  className="w-full h-64 object-cover sepia-[.35] opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-amber-600" />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase">
                      {section.count}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-amber-50 group-hover:text-amber-500 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-stone-400 mt-2">
                    {section.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
