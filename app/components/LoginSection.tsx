"use client";

import { useState } from "react";
import { Key, Github, Mail } from "lucide-react";

export default function LoginSection() {
  const [activeTab, setActiveTab] = useState<"signin" | "register">("signin");

  return (
    <section id="login" className="py-16 border-t border-stone-800">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-stone-900 border border-stone-800 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 border border-amber-700 mb-4">
              <Key className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="font-serif text-2xl text-amber-50">
              Membership Access
            </h2>
            <p className="font-mono text-xs text-stone-500 mt-2 tracking-wider">
              ENTER YOUR CREDENTIALS
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-stone-700 mb-6">
            <button
              className={`flex-1 py-3 font-mono text-xs tracking-wider ${
                activeTab === "signin"
                  ? "text-amber-600 border-b-2 border-amber-600"
                  : "text-stone-500 hover:text-stone-300 transition-colors"
              }`}
              onClick={() => setActiveTab("signin")}
            >
              SIGN IN
            </button>
            <button
              className={`flex-1 py-3 font-mono text-xs tracking-wider ${
                activeTab === "register"
                  ? "text-amber-600 border-b-2 border-amber-600"
                  : "text-stone-500 hover:text-stone-300 transition-colors"
              }`}
              onClick={() => setActiveTab("register")}
            >
              REGISTER
            </button>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block font-mono text-[10px] tracking-wider text-stone-500 uppercase mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="scholar@archive.edu"
                className="w-full bg-stone-950 border border-stone-700 text-stone-300 px-4 py-3 font-mono text-sm focus:border-amber-700 focus:outline-none transition-colors placeholder:text-stone-600"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-wider text-stone-500 uppercase mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full bg-stone-950 border border-stone-700 text-stone-300 px-4 py-3 font-mono text-sm focus:border-amber-700 focus:outline-none transition-colors placeholder:text-stone-600"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-stone-950 border border-stone-700 accent-amber-700"
                />
                <span className="font-mono text-xs text-stone-500">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="font-mono text-xs text-amber-600 hover:text-amber-500 transition-colors"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-700 hover:bg-amber-600 text-stone-950 font-mono text-xs tracking-widest uppercase py-4 transition-colors"
            >
              Enter the Archive
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <span className="flex-1 h-px bg-stone-700"></span>
            <span className="font-mono text-[10px] text-stone-600">
              OR CONTINUE WITH
            </span>
            <span className="flex-1 h-px bg-stone-700"></span>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 border border-stone-700 hover:border-amber-700 py-3 transition-colors">
              <Github className="w-4 h-4 text-stone-400" />
              <span className="font-mono text-xs text-stone-400">GitHub</span>
            </button>
            <button className="flex items-center justify-center gap-2 border border-stone-700 hover:border-amber-700 py-3 transition-colors">
              <Mail className="w-4 h-4 text-stone-400" />
              <span className="font-mono text-xs text-stone-400">Google</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
