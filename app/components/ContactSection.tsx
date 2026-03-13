import Link from "next/link";
import { Feather, Lock, Send, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 border-t border-stone-800">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-widest text-amber-600 uppercase">
            Correspondence
          </span>
          <h1 className="font-serif text-5xl text-amber-50 mt-4 mb-6">
            Send a Letter
          </h1>
          <div className="flex items-center justify-center gap-4">
            <span className="w-24 h-px bg-stone-700"></span>
            <Feather className="w-5 h-5 text-amber-600" />
            <span className="w-24 h-px bg-stone-700"></span>
          </div>
          <p className="font-body text-stone-400 mt-6 max-w-xl mx-auto">
            For inquiries, collaborations, or simply to share a thought—the
            archive welcomes all correspondence from fellow wanderers and
            seekers.
          </p>
        </div>

        <div className="bg-stone-900 border border-stone-800 p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[10px] tracking-wider text-stone-500 uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="How shall I address you?"
                  className="w-full bg-stone-950 border border-stone-700 text-stone-300 px-4 py-3 font-mono text-sm focus:border-amber-700 focus:outline-none transition-colors placeholder:text-stone-600"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-wider text-stone-500 uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="For my reply"
                  className="w-full bg-stone-950 border border-stone-700 text-stone-300 px-4 py-3 font-mono text-sm focus:border-amber-700 focus:outline-none transition-colors placeholder:text-stone-600"
                />
              </div>
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-wider text-stone-500 uppercase mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="The nature of your inquiry"
                className="w-full bg-stone-950 border border-stone-700 text-stone-300 px-4 py-3 font-mono text-sm focus:border-amber-700 focus:outline-none transition-colors placeholder:text-stone-600"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-wider text-stone-500 uppercase mb-2">
                Your Message
              </label>
              <textarea
                rows={8}
                placeholder="Write your thoughts here..."
                className="w-full bg-stone-950 border border-stone-700 text-stone-300 px-4 py-3 font-body text-sm leading-relaxed focus:border-amber-700 focus:outline-none transition-colors resize-none placeholder:text-stone-600"
              ></textarea>
            </div>
            <div className="flex items-center justify-between pt-4">
              <p className="font-mono text-xs text-stone-500">
                <Lock className="w-3 h-3 inline mr-1" />
                Your message is encrypted in transit
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-stone-950 font-mono text-xs tracking-widest uppercase px-6 py-3 transition-colors"
              >
                <Send className="w-4 h-4" />
                Send Letter
              </button>
            </div>
          </form>
        </div>

        {/* Alternative Contact */}
        <div className="mt-12 text-center">
          <p className="font-mono text-xs text-stone-500 mb-6 tracking-wider">
            OR REACH ME DIRECTLY
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link
              href="mailto:sebastian@thearchive.io"
              className="flex items-center gap-3 text-stone-400 hover:text-amber-500 transition-colors"
            >
              <Mail className="w-5 h-5 text-amber-600" />
              <span className="font-mono text-sm">
                sebastian@thearchive.io
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-stone-400 hover:text-amber-500 transition-colors"
            >
              <MapPin className="w-5 h-5 text-amber-600" />
              <span className="font-mono text-sm">
                Oxford, United Kingdom
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
