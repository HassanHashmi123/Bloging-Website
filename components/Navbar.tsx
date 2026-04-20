'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Articles' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        scrolled
          ? 'bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 bg-linear-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow duration-150">
            <Cpu size={15} className="text-black" />
          </div>
          <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight">
            Tech<span className="text-amber-400">ReviewHub</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-150 hover:bg-white/5 rounded-lg font-medium tracking-wide"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="ml-3 px-5 py-2 bg-amber-400 hover:bg-amber-300 text-black text-sm font-semibold rounded-lg transition-colors duration-150"
          >
            Start Reading
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white/70 hover:text-white p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/98 backdrop-blur-md border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-150 font-medium"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-lg transition-colors duration-150 text-center"
            >
              Start Reading
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
