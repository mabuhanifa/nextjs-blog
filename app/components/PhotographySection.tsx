import Image from "next/image";
import { Aperture } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
    alt: "Ancient library",
    fig: "Fig. 1",
    caption: "Trinity College Library, Dublin",
  },
  {
    src: "https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Foggy forest",
    fig: "Fig. 2",
    caption: "Black Forest, Germany",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop",
    alt: "Gothic architecture",
    fig: "Fig. 3",
    caption: "Notre-Dame Cathedral, Paris",
  },
  {
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=400&fit=crop",
    alt: "Old books",
    fig: "Fig. 4",
    caption: "Antiquarian Collection, Oxford",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=350&fit=crop",
    alt: "Mountain landscape",
    fig: "Fig. 5",
    caption: "Swiss Alps at Dawn",
  },
  {
    src: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Vintage typewriter",
    fig: "Fig. 6",
    caption: "Underwood No. 5, 1923",
  },
];

export default function PhotographySection() {
  return (
    <section id="photography" className="py-16 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-4">
        {/* Category Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-widest text-amber-600 uppercase">
            Visual Archive
          </span>
          <h1 className="font-serif text-5xl text-amber-50 mt-4 mb-6">
            PHOTOGRAPHY
          </h1>
          <div className="flex items-center justify-center gap-4">
            <span className="w-24 h-px bg-stone-700"></span>
            <Aperture className="w-5 h-5 text-amber-600" />
            <span className="w-24 h-px bg-stone-700"></span>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <figure key={i} className="break-inside-avoid group relative">
              <div className="p-2 bg-stone-800 border border-stone-700">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={500}
                  className="w-full sepia-[.15] group-hover:sepia-0 transition-all duration-500"
                />
                <figcaption className="opacity-0 group-hover:opacity-100 absolute bottom-4 left-4 right-4 bg-stone-950/90 p-3 transition-opacity duration-300">
                  <span className="font-mono text-[10px] text-amber-600 tracking-wider">
                    {photo.fig}
                  </span>
                  <p className="font-mono text-xs text-stone-300 mt-1">
                    {photo.caption}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
