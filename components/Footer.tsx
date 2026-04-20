import Link from 'next/link';
import { Cpu, Globe, Mail, Rss } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#07070c] border-t border-white/5 mt-16 md:mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Cpu size={15} className="text-black" />
              </div>
              <span className="font-serif text-xl font-bold text-white">
                Tech<span className="text-amber-400">ReviewHub</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              A place for ideas, stories, and insights on tech, design, and development. Written with care by Hassan Hashmi.
            </p>
            <div className="flex gap-3">
              {[Globe, Mail, Rss].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all duration-150"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/80 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Articles', href: '/blog' },
                { label: 'About', href: '/about' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/40 hover:text-amber-400 text-sm transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-white/80 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-5">
              Stay Updated
            </h4>
            <p className="text-white/40 text-sm mb-4">
              Get new articles delivered straight to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 transition-colors"
              />
              <button className="px-3 sm:px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-black text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} TechReviewHub by{' '}
            <span className="text-white/40 font-medium">Hassan Hashmi</span>. All rights reserved.
          </p>
          <p className="text-white/25 text-xs sm:text-sm">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
