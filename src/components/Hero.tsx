'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { ArrowRight, Award, ShieldCheck, Smartphone, Globe2, Sparkles } from 'lucide-react';

export default function Hero() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-44 md:pb-24 overflow-hidden">
      {/* Subtle, refined background grid texture instead of overused glowing AI blur orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-50/50 via-transparent to-transparent dark:from-indigo-950/20 dark:via-transparent pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full px-4 py-1.5 shadow-2xs text-xs font-medium text-zinc-700 dark:text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold text-zinc-900 dark:text-white">Cindy Ardelya</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>Informatics Engineering Graduate • Politeknik Caltex Riau</span>
          </div>
        </motion.div>

        {/* Clear, Memorable Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.14]"
          >
            Building dependable web platforms, native Android apps, and thoughtful digital interfaces.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-normal max-w-2xl mx-auto leading-relaxed"
          >
            I&apos;m an Informatics Engineering graduate from Politeknik Caltex Riau with hands-on corporate engineering experience at PTPN IV Regional III. I build clean fullstack web applications, native Kotlin Android tools, and user-centered interfaces that solve practical problems.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2"
          >
            <a
              href="#featured"
              className="inline-flex items-center space-x-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all group"
              onMouseEnter={() => setCursor('explore', 'PROJECTS')}
              onMouseLeave={resetCursor}
            >
              <span>Explore Featured Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#certificates"
              className="inline-flex items-center space-x-2 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-2xs hover:shadow-sm transition-all"
              onMouseEnter={() => setCursor('link')}
              onMouseLeave={resetCursor}
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>View Certifications</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold text-xs sm:text-sm px-4 py-3.5 rounded-full transition-all"
              onMouseEnter={() => setCursor('link')}
              onMouseLeave={resetCursor}
            >
              <span>Get in Touch</span>
            </a>
          </motion.div>
        </div>

        {/* Practical Grounding: 4 Focus Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-12 sm:pt-16 max-w-5xl mx-auto"
        >
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-4 shadow-2xs hover:shadow-md transition-all">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-extrabold text-zinc-900 dark:text-white">Web & GIS Platforms</div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">Laravel, Livewire, MySQL, Leaflet</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-4 shadow-2xs hover:shadow-md transition-all">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-extrabold text-zinc-900 dark:text-white">Native Android</div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">Kotlin, Jetpack, MVVM, Clean Architecture</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-4 shadow-2xs hover:shadow-md transition-all">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-extrabold text-zinc-900 dark:text-white">Certified Security</div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">EC-Council (EHE, NDE) & Cisco</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-4 shadow-2xs hover:shadow-md transition-all">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-extrabold text-zinc-900 dark:text-white">Enterprise Systems</div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">PTPN IV MBKM & Industrial IT</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
