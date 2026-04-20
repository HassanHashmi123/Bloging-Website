import Link from 'next/link';
import { ArrowRight, Code, Palette, PenTool, Mail } from 'lucide-react';

export default function AboutPage() {
  const topics = [
    { icon: Code, title: 'Development', desc: 'Next.js, React, TypeScript, modern web technologies and best practices.' },
    { icon: Palette, title: 'Design', desc: 'UI/UX principles, visual design, typography, and the art of simplicity.' },
    { icon: PenTool, title: 'Ideas', desc: 'Essays on creativity, productivity, and the ideas shaping our digital world.' },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">✦ About</p>
          <h1 className="font-serif text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            A Blog for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Curious Minds
            </span>
          </h1>
          <div className="h-px w-24 bg-amber-400/40 mb-8" />
          <p className="text-white/50 text-xl leading-relaxed max-w-2xl">
            InkSpace is a publication dedicated to the intersection of design, development, and ideas. 
            We write long-form articles that go beyond the surface level — exploring the "why" behind the "how."
          </p>
        </div>

        {/* Mission */}
        <div className="bg-[#111118] border border-white/5 rounded-3xl p-10 mb-12">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-white/50 text-lg leading-relaxed mb-6">
            In a world of hot takes and shallow tutorials, we believe in going deep. Every article on InkSpace 
            is carefully researched, thoughtfully written, and designed to genuinely move your thinking forward.
          </p>
          <p className="text-white/50 text-lg leading-relaxed">
            We write for developers who care about design, designers who can code, and thinkers who want to 
            understand both.
          </p>
        </div>

        {/* Topics */}
        <h2 className="font-serif text-3xl font-bold text-white mb-8">What We Cover</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {topics.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[#111118] border border-white/5 hover:border-amber-400/20 rounded-2xl p-8 transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-400/20 transition-colors">
                <Icon size={20} className="text-amber-400" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Adding content guide */}
        <div className="bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/20 rounded-3xl p-10 mb-12">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Adding Blog Posts</h2>
          <p className="text-white/50 mb-6 leading-relaxed">
            Creating new articles is simple. Add a <code className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded text-sm">.md</code> file 
            to the <code className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded text-sm">content/posts/</code> directory with this frontmatter:
          </p>
          <pre className="bg-[#0a0a0f] border border-white/10 rounded-2xl p-6 text-sm overflow-x-auto">
            <code className="text-white/70">{`---
title: "Your Article Title"
excerpt: "A short description of the article"
date: "2025-04-15"
author: "Your Name"
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
          <h3 className="font-serif text-3xl font-bold text-white mb-4">Start Reading</h3>
          <p className="text-white/40 mb-8">Dive into our archive of articles.</p>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-xl transition-all duration-200"
          >
            Browse All Articles
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}
