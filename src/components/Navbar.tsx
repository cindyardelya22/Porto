'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCursor } from '@/context/CursorContext';
import { useTheme } from '@/context/ThemeContext';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { setCursor, resetCursor } = useCursor();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-3 sm:px-6 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 rounded-2xl sm:rounded-full ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#121316]/95 backdrop-blur-xl shadow-xs border border-zinc-200/90 dark:border-zinc-800'
            : 'bg-white/85 dark:bg-[#121316]/85 backdrop-blur-md border border-zinc-200/70 dark:border-zinc-800/80'
        }`}
      >
        {/* Brand / Minimal Typographic Identity */}
        <Link
          href="/"
          className="group flex items-center space-x-3 shrink-0"
          onMouseEnter={() => setCursor('default')}
          onMouseLeave={resetCursor}
        >
          {/* Understated Initial Monogram */}
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-bold text-xs tracking-tight transition-transform group-hover:scale-105 duration-200">
            CA
          </span>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
              Cindy Ardelya
            </span>
            <span className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 font-normal hidden sm:block">
              Informatics Engineering • Software & Web
            </span>
          </div>
        </Link>

        {/* Quiet Availability Indicator */}
        <div className="hidden lg:flex items-center space-x-2 text-xs text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-800 rounded-full px-3 py-1 bg-zinc-50/70 dark:bg-zinc-900/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[11px] font-medium text-zinc-700 dark:text-zinc-300">
            Available for opportunities
          </span>
        </div>

        {/* Nav Links & Controls */}
        <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-medium">
          <a
            href="#about"
            className="px-2.5 sm:px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-lg transition-colors text-xs sm:text-sm"
            onMouseEnter={() => setCursor('explore')}
            onMouseLeave={resetCursor}
          >
            About
          </a>
          <a
            href="#featured"
            className="px-2.5 sm:px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-lg transition-colors text-xs sm:text-sm"
            onMouseEnter={() => setCursor('explore')}
            onMouseLeave={resetCursor}
          >
            Projects
          </a>
          <a
            href="#certificates"
            className="px-2.5 sm:px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-lg transition-colors text-xs sm:text-sm"
            onMouseEnter={() => setCursor('explore')}
            onMouseLeave={resetCursor}
          >
            Certificates
          </a>
          <a
            href="#experience"
            className="hidden sm:inline-block px-2.5 sm:px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-lg transition-colors text-xs sm:text-sm"
            onMouseEnter={() => setCursor('explore')}
            onMouseLeave={resetCursor}
          >
            Experience
          </a>
          <a
            href="#archive"
            className="hidden md:inline-block px-2.5 sm:px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-lg transition-colors text-xs sm:text-sm"
            onMouseEnter={() => setCursor('explore')}
            onMouseLeave={resetCursor}
          >
            Archive
          </a>

          {/* Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-lg transition-colors text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
            onMouseEnter={() => setCursor('link')}
            onMouseLeave={resetCursor}
          >
            {mounted ? (
              theme === 'dark' ? (
                <Sun className="w-4 h-4 text-zinc-300" strokeWidth={1.75} />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" strokeWidth={1.75} />
              )
            ) : (
              <span className="w-4 h-4 block" />
            )}
          </button>

          {/* Contact CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center space-x-1 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-950 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold rounded-full shadow-2xs transition-all shrink-0"
            onMouseEnter={() => setCursor('link')}
            onMouseLeave={resetCursor}
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" strokeWidth={1.75} />
          </a>
        </nav>
      </div>
    </header>
  );
}
