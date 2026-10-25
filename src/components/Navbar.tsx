'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCursor } from '@/context/CursorContext';
import { useTheme } from '@/context/ThemeContext';
import { Sparkles, MessageCircleHeart, Sun, Moon } from 'lucide-react';

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
        className={`max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 transition-all duration-300 rounded-full ${
          isScrolled
            ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl shadow-md shadow-black/[0.04] dark:shadow-black/40 border border-zinc-200/80 dark:border-zinc-800'
            : 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/80 shadow-xs'
        }`}
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center space-x-2.5 sm:space-x-3 shrink-0"
          onMouseEnter={() => setCursor('default')}
          onMouseLeave={resetCursor}
        >
          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gradient-to-tr from-zinc-200 via-indigo-200 to-zinc-300 dark:from-zinc-700 dark:via-indigo-900/40 dark:to-zinc-700 p-[2px] shadow-sm group-hover:scale-105 transition-transform duration-300">
            <div className="relative h-full w-full rounded-full overflow-hidden bg-white dark:bg-zinc-800 shadow-inner">
              <Image
                src="/images/profile.jpg"
                alt="Cindy Ardelya"
                fill
                sizes="36px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          <div>
            <div className="font-extrabold text-xs sm:text-sm tracking-tight text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1">
              <span>Cindy Ardelya</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium hidden md:block">
              Informatics Engineering Graduate • Web Developer
            </div>
          </div>
        </Link>

        {/* Career Availability Badge (Hidden on mobile/tablet) */}
        <div className="hidden xl:flex items-center space-x-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 border border-emerald-200 dark:border-emerald-800/60 rounded-full px-3.5 py-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-800 dark:text-emerald-300 font-bold text-[11px] flex items-center gap-1">
            <span>Open for Opportunities & Projects</span>
          </span>
        </div>

        {/* Nav Links & Controls */}
        <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-semibold">
          <a
            href="#about"
            className="px-2.5 sm:px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all text-xs sm:text-sm"
            onMouseEnter={() => setCursor('explore')}
            onMouseLeave={resetCursor}
          >
            About
          </a>
          <a
            href="#featured"
            className="px-2.5 sm:px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all text-xs sm:text-sm"
            onMouseEnter={() => setCursor('explore')}
            onMouseLeave={resetCursor}
          >
            Projects
          </a>
          <a
            href="#archive"
            className="hidden sm:inline-block px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all text-xs sm:text-sm"
            onMouseEnter={() => setCursor('explore')}
            onMouseLeave={resetCursor}
          >
            Gallery
          </a>
          <a
            href="#experience"
            className="hidden lg:inline-block px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all text-xs sm:text-sm"
            onMouseEnter={() => setCursor('explore')}
            onMouseLeave={resetCursor}
          >
            Experience
          </a>

          {/* Theme Switcher Toggle Button (Sun / Moon) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-full border transition-all duration-300 text-zinc-700 dark:text-amber-300 bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200/70 dark:hover:bg-zinc-700 hover:scale-105 active:scale-95 shadow-2xs"
            onMouseEnter={() => setCursor('link')}
            onMouseLeave={resetCursor}
          >
            {mounted ? (
              theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-90 duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700 animate-in spin-in-90 duration-300" />
              )
            ) : (
              <span className="w-4 h-4 block" />
            )}
          </button>

          {/* Connect CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center space-x-1 sm:space-x-1.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 px-3.5 sm:px-4 py-1.5 sm:py-2 font-bold text-xs rounded-full shadow-xs hover:shadow-md transition-all shrink-0"
            onMouseEnter={() => setCursor('link')}
            onMouseLeave={resetCursor}
          >
            <MessageCircleHeart className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
