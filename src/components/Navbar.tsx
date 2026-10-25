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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-5 py-3 transition-all duration-300 rounded-full ${
          isScrolled
            ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl shadow-lg shadow-purple-500/5 dark:shadow-purple-950/20 border border-purple-100/90 dark:border-zinc-800'
            : 'bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-purple-100/50 dark:border-zinc-800/80 shadow-sm'
        }`}
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center space-x-3"
          onMouseEnter={() => setCursor('default')}
          onMouseLeave={resetCursor}
        >
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-rose-400 p-[2px] shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="relative h-full w-full rounded-full overflow-hidden bg-white shadow-inner">
              <Image
                src="/images/profile.jpg"
                alt="Cindy Ardelya"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div>
            <div className="font-extrabold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex items-center gap-1.5">
              <span>Cindy Ardelya</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium hidden sm:block">
              Politeknik Caltex Riau • Fresh Graduate
            </div>
          </div>
        </Link>

        {/* Career Availability Badge */}
        <div className="hidden lg:flex items-center space-x-2 text-xs font-medium text-zinc-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 rounded-full px-3.5 py-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-800 dark:text-emerald-300 font-bold text-[11px] flex items-center gap-1">
            <span>Open for Full-Time Opportunities & Projects</span>
          </span>
        </div>

        {/* Nav Links & Controls */}
        <nav className="flex items-center space-x-1 sm:space-x-2.5 text-xs sm:text-sm font-semibold">
          <a
            href="#featured"
            className="px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-zinc-800/60 rounded-full transition-all"
            onMouseEnter={() => setCursor('explore')}
            onMouseLeave={resetCursor}
          >
            Projects
          </a>
          <a
            href="#archive"
            className="px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-zinc-800/60 rounded-full transition-all"
            onMouseEnter={() => setCursor('explore')}
            onMouseLeave={resetCursor}
          >
            Gallery
          </a>
          <a
            href="#about"
            className="hidden sm:inline-block px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-zinc-800/60 rounded-full transition-all"
            onMouseEnter={() => setCursor('explore')}
            onMouseLeave={resetCursor}
          >
            About
          </a>
          <a
            href="#kp"
            className="hidden md:inline-block px-3 py-1.5 text-zinc-600 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-zinc-800/60 rounded-full transition-all"
            onMouseEnter={() => setCursor('explore')}
            onMouseLeave={resetCursor}
          >
            KP & MBKM
          </a>

          {/* Theme Mode Toggle (White / Black Mode) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to White Mode' : 'Switch to Black Mode'}
            title={theme === 'dark' ? 'Beralih ke White Mode' : 'Beralih ke Black Mode'}
            className="p-2 rounded-full border transition-all duration-300 bg-zinc-100/80 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-amber-400 hover:scale-110 active:scale-90 shadow-2xs"
            onMouseEnter={() => setCursor('link')}
            onMouseLeave={resetCursor}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-180 duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-purple-700 animate-in -spin-in-180 duration-300" />
            )}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white px-4 py-2 font-bold text-xs rounded-full shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/35 hover:scale-105 active:scale-95 transition-all"
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
