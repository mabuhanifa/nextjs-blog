import Link from "next/link";
import Image from "next/image";
import { Twitter, Github, Instagram, Mail } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 border-t border-stone-800">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-widest text-amber-600 uppercase">
            Curator
          </span>
          <h1 className="font-serif text-5xl text-amber-50 mt-4">
            About the Archivist
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3">
            <div className="p-2 bg-stone-800 border border-stone-700">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                alt="Author portrait"
                width={400}
                height={500}
                className="w-full sepia-[.25] grayscale-[.3]"
              />
            </div>
          </div>
          <div className="md:w-2/3 space-y-6">
            <p className="drop-cap text-stone-300 leading-relaxed">
              I am Sebastian Thorne, a wanderer between worlds—both geographical
              and intellectual. By day, I craft code; by night, I craft
              sentences. This archive serves as the repository for observations
              gathered over years of reading, traveling, and thinking perhaps too
              deeply about things others take for granted.
            </p>
            <p className="text-stone-300 leading-relaxed">
              My interests span the breadth of human inquiry: from the
              pre-Socratic fragments to contemporary philosophy of mind, from
              the abandoned monasteries of Ireland to the neon-lit streets of
              Tokyo. I believe that wisdom is scattered across time and space,
              waiting to be collected and preserved.
            </p>
            <p className="text-stone-300 leading-relaxed">
              This digital archive is my attempt to create a space where ideas
              can breathe, where photographs can tell stories, and where the
              curious reader might find something to ponder during their own
              quiet hours.
            </p>
            <div className="pt-6 flex gap-4">
              <Link
                href="#"
                className="text-stone-500 hover:text-amber-500 transition-colors"
                title="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-stone-500 hover:text-amber-500 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-stone-500 hover:text-amber-500 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:sebastian@thearchive.io"
                className="text-stone-500 hover:text-amber-500 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
