import Link from 'next/link';
import { ArrowRight, Code, Palette, PenTool } from 'lucide-react';

export default function AboutPage() {
  const topics = [
    { icon: Code, title: 'Development', desc: 'Next.js, React, TypeScript, modern web technologies and best practices.' },
    { icon: Palette, title: 'Design', desc: 'UI/UX principles, visual design, typography, and the art of simplicity.' },
    { icon: PenTool, title: 'Ideas', desc: 'Essays on creativity, productivity, and the ideas shaping our digital world.' },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12 md:mb-20">
          <p className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4">✦ About</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 md:mb-8 leading-tight">
            A Blog for<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">
              Curious Minds
            </span>
          </h1>
          <div className="h-px w-20 md:w-24 bg-amber-400/40 mb-6 md:mb-8" />
          <p className="text-white/50 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
            TechReviewHub is a publication dedicated to the intersection of design, development, and ideas.
            We write long-form articles that go beyond the surface level — exploring the "why" behind the "how."
          </p>
        </div>

        {/* Author */}
        <div className="bg-[#111118] border border-white/5 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 mb-8 md:mb-12 flex items-start gap-4 sm:gap-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-black text-xl sm:text-2xl shrink-0 shadow-lg shadow-amber-500/20">
            HH
          </div>
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Written by</p>
            <h2 className="text-white font-bold text-lg sm:text-xl mb-1">Hassan Hashmi</h2>
            <p className="text-white/50 text-sm leading-relaxed">
              A passionate writer and developer covering topics at the intersection of design, technology, and culture.
              Building TechReviewHub to share ideas that genuinely move your thinking forward.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-[#111118] border border-white/5 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 mb-8 md:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-4 md:mb-6">
            In a world of hot takes and shallow tutorials, we believe in going deep. Every article on TechReviewHub
            is carefully researched, thoughtfully written, and designed to genuinely move your thinking forward.
          </p>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed">
            We write for developers who care about design, designers who can code, and thinkers who want to
            understand both.
          </p>
        </div>

        {/* Topics */}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6 md:mb-8">What We Cover</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
          {topics.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[#111118] border border-white/5 hover:border-amber-400/20 rounded-2xl p-6 sm:p-8 transition-all duration-150 group">
              <div className="w-11 h-11 bg-amber-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors duration-150">
                <Icon size={20} className="text-amber-400" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Code guide */}
        <div className="bg-linear-to-br from-amber-400/10 to-transparent border border-amber-400/20 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 mb-8 md:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">Adding Blog Posts</h2>
          <p className="text-white/50 mb-5 leading-relaxed text-sm sm:text-base">
            Creating new articles is simple. Add a{' '}
            <code className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded text-sm">.md</code> file
            to the <code className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded text-sm">content/posts/</code> directory with this frontmatter:
          </p>
          <pre className="bg-[#0a0a0f] border border-white/10 rounded-2xl p-4 sm:p-6 text-xs sm:text-sm overflow-x-auto">
            <code className="text-white/70">{`---
title: "Your Article Title"
excerpt: "A short description"
date: "2026-04-20"
author: "Hassan Hashmi"
category: "Development"
tags: ["Tag1", "Tag2"]
image: "https://your-image-url.com/photo.jpg"
featured: false
---

# Your Article Title

Start writing here using Markdown...`}</code>
          </pre>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 md:mb-4">Start Reading</h3>
          <p className="text-white/40 mb-6 md:mb-8 text-sm sm:text-base">Dive into our archive of articles.</p>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 px-7 py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-xl transition-colors duration-150"
          >
            Browse All Articles
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
          </Link>
        </div>
      </div>
    </main>
  );
}
