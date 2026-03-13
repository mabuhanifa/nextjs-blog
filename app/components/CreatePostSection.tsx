import {
  Send,
  ImagePlus,
  Bold,
  Italic,
  Heading,
  Quote,
  Link as LinkIcon,
  Image as ImageIcon,
} from "lucide-react";

export default function CreatePostSection() {
  return (
    <section id="create-post" className="py-16 border-t border-stone-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl text-amber-50">New Entry</h1>
            <p className="font-mono text-xs text-stone-500 mt-1 tracking-wider">
              ADD TO THE ARCHIVE
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-2 border border-stone-600 hover:border-amber-600 text-stone-300 font-mono text-xs tracking-widest uppercase px-4 py-2 transition-colors">
              Save Draft
            </button>
            <button className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-stone-950 font-mono text-xs tracking-widest uppercase px-4 py-2 transition-colors">
              <Send className="w-4 h-4" />
              Publish
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Title Input */}
          <div>
            <input
              type="text"
              placeholder="Enter your title..."
              className="w-full bg-transparent border-b border-stone-700 text-amber-50 font-serif text-3xl py-4 focus:border-amber-700 focus:outline-none transition-colors placeholder:text-stone-600"
            />
          </div>

          {/* Meta Options */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block font-mono text-[10px] tracking-wider text-stone-500 uppercase mb-2">
                Category
              </label>
              <select className="w-full bg-stone-900 border border-stone-700 text-stone-400 px-4 py-3 font-mono text-sm focus:border-amber-700 focus:outline-none">
                <option>Select category...</option>
                <option>Writing</option>
                <option>Travel</option>
                <option>Philosophy</option>
                <option>Photography</option>
              </select>
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-wider text-stone-500 uppercase mb-2">
                Date
              </label>
              <input
                type="date"
                className="w-full bg-stone-900 border border-stone-700 text-stone-400 px-4 py-3 font-mono text-sm focus:border-amber-700 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-wider text-stone-500 uppercase mb-2">
                Tags
              </label>
              <input
                type="text"
                placeholder="philosophy, books, history"
                className="w-full bg-stone-900 border border-stone-700 text-stone-400 px-4 py-3 font-mono text-sm focus:border-amber-700 focus:outline-none placeholder:text-stone-600"
              />
            </div>
          </div>

          {/* Featured Image Upload */}
          <div>
            <label className="block font-mono text-[10px] tracking-wider text-stone-500 uppercase mb-2">
              Featured Image
            </label>
            <div className="border-2 border-dashed border-stone-700 hover:border-amber-700 transition-colors p-8 text-center cursor-pointer">
              <ImagePlus className="w-12 h-12 text-stone-600 mx-auto mb-4" />
              <p className="font-mono text-sm text-stone-500">
                Click to upload or drag and drop
              </p>
              <p className="font-mono text-xs text-stone-600 mt-1">
                PNG, JPG up to 10MB
              </p>
            </div>
          </div>

          {/* Content Textarea */}
          <div>
            <label className="block font-mono text-[10px] tracking-wider text-stone-500 uppercase mb-2">
              Content
            </label>
            <div className="bg-stone-900 border border-stone-700 focus-within:border-amber-700 transition-colors">
              {/* Toolbar */}
              <div className="flex items-center gap-1 p-2 border-b border-stone-700">
                <button
                  className="p-2 text-stone-500 hover:text-amber-500 transition-colors"
                  title="Bold"
                >
                  <Bold className="w-4 h-4" />
                </button>
                <button
                  className="p-2 text-stone-500 hover:text-amber-500 transition-colors"
                  title="Italic"
                >
                  <Italic className="w-4 h-4" />
                </button>
                <span className="w-px h-4 bg-stone-700 mx-1"></span>
                <button
                  className="p-2 text-stone-500 hover:text-amber-500 transition-colors"
                  title="Heading"
                >
                  <Heading className="w-4 h-4" />
                </button>
                <button
                  className="p-2 text-stone-500 hover:text-amber-500 transition-colors"
                  title="Quote"
                >
                  <Quote className="w-4 h-4" />
                </button>
                <span className="w-px h-4 bg-stone-700 mx-1"></span>
                <button
                  className="p-2 text-stone-500 hover:text-amber-500 transition-colors"
                  title="Link"
                >
                  <LinkIcon className="w-4 h-4" />
                </button>
                <button
                  className="p-2 text-stone-500 hover:text-amber-500 transition-colors"
                  title="Image"
                >
                  <ImageIcon className="w-4 h-4" />
                </button>
              </div>
              <textarea
                rows={16}
                placeholder="Begin writing your entry..."
                className="w-full bg-transparent text-stone-300 font-body text-base leading-relaxed p-4 focus:outline-none resize-none placeholder:text-stone-600"
              ></textarea>
            </div>
          </div>

          {/* Publishing Options */}
          <div className="bg-stone-900 border border-stone-800 p-6">
            <h3 className="font-serif text-lg text-amber-50 mb-4">
              Publishing Options
            </h3>
            <div className="space-y-4">
              {[
                { label: "Allow comments", defaultChecked: false },
                { label: "Feature on homepage", defaultChecked: true },
                {
                  label: "Enable newsletter notification",
                  defaultChecked: false,
                },
              ].map((option, i) => (
                <label
                  key={i}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <span className="font-mono text-sm text-stone-400">
                    {option.label}
                  </span>
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={option.defaultChecked}
                    />
                    <div className="w-10 h-5 bg-stone-700 rounded-sm peer-checked:bg-amber-700 transition-colors"></div>
                    <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-stone-400 rounded-sm peer-checked:translate-x-5 peer-checked:bg-stone-950 transition-all"></div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
