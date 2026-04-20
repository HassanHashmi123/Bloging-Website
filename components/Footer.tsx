import Link from 'next/link';
import { Feather, GitBranch, Share2, Rss } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#07070c] border-t border-white/5 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Feather size={16} className="text-black" />
              </div>
              <span className="font-serif text-xl font-bold text-white">
                Ink<span className="text-amber-400">Space</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              A place for ideas, stories, and insights. Written with care for curious minds.
            </p>
            <div className="flex gap-3 mt-6">
              {[GitBranch, Share2, Rss].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Home', 'Articles', 'About'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/40 hover:text-amber-400 text-sm transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm uppercase tracking-widest mb-5">
              Stay Updated
            </h4>
            <p className="text-white/40 text-sm mb-4">
              Get new articles delivered straight to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 transition-colors"
              />
              <button className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-black text-sm font-semibold rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-sm">
            © {new Date().getFullYear()} InkSpace by <span className="text-white/40 font-medium">Hassan Hashmi</span>. All rights reserved.
          </p>
          <p className="text-white/25 text-sm">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
