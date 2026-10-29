'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Subtle, Understated Location & Degree Meta */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-6 font-normal"
        >
          <span>Pekanbaru, Indonesia</span>
          <span className="text-zinc-300 dark:text-zinc-700">—</span>
          <span>Informatics Engineering • Politeknik Caltex Riau</span>
        </motion.div>

        {/* Expressive Editorial Headline with Newsreader Serif Accent */}
        <div className="space-y-6 sm:space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[3.65rem] font-medium tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.12]"
          >
            Building dependable web platforms, native Android tools, and{' '}
            <span className="font-serif italic font-normal text-zinc-700 dark:text-zinc-300">
              thoughtful digital systems.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-normal max-w-2xl leading-relaxed"
          >
            I&apos;m Cindy Ardelya. With practical corporate software engineering experience at PTPN IV Regional III, I focus on fullstack web development, native Kotlin applications, and applied security — turning operational needs into clean, dependable software.
          </motion.p>

          {/* Action Links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
          >
            <a
              href="#featured"
              className="inline-flex items-center space-x-1.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-950 text-xs sm:text-sm font-semibold px-5 py-3 rounded-full shadow-2xs transition-all"
              onMouseEnter={() => setCursor('explore', 'PROJECTS')}
              onMouseLeave={resetCursor}
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" strokeWidth={1.75} />
            </a>

            <a
              href="#certificates"
              className="inline-flex items-center space-x-1 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white px-4 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 transition-colors"
              onMouseEnter={() => setCursor('link')}
              onMouseLeave={resetCursor}
            >
              <span>Verified Credentials (8)</span>
            </a>

            <a
              href="mailto:cindyardelya@gmail.com"
              className="inline-flex items-center text-xs sm:text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white px-3 py-3 transition-colors"
              onMouseEnter={() => setCursor('link')}
              onMouseLeave={resetCursor}
            >
              <span>cindyardelya@gmail.com</span>
            </a>
          </motion.div>
        </div>

        {/* Core Disciplines & Background Strip (Natural & Scannable) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono font-medium text-zinc-400 dark:text-zinc-500">01 / WEB & GIS</span>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Fullstack Web Systems</h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Laravel, Livewire, MySQL, and Leaflet GIS spatial mapping for operational data.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] font-mono font-medium text-zinc-400 dark:text-zinc-500">02 / MOBILE</span>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Native Android</h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Kotlin, Jetpack, MVVM architecture, clean repository patterns, and offline-first Room databases.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] font-mono font-medium text-zinc-400 dark:text-zinc-500">03 / ENTERPRISE</span>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">PTPN IV Regional III</h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Engineered By-Pro contract signing, AgriSmart GIS portal, and enterprise IT telemetry.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] font-mono font-medium text-zinc-400 dark:text-zinc-500">04 / ACCREDITATION</span>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Security & Networking</h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              EC-Council EHE & NDE, Cisco NetAcad, MikroTik MTCNA, and BNSP National Programmer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
