'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { ArrowRight, Smartphone, Heart, GraduationCap, Palette, Brain, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 md:pt-44 md:pb-28 overflow-hidden">
      {/* Soft Ambient Subtle Architectural Light (Warm Amber & Nordic Teal) */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-amber-500/5 dark:bg-amber-400/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-32 right-1/4 w-80 h-80 rounded-full bg-teal-500/5 dark:bg-teal-400/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Intro Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center space-x-2 bg-white/95 dark:bg-zinc-900/95 border border-zinc-200/80 dark:border-zinc-800 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-xs text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
            <span>Hello! I&apos;m Cindy Ardelya</span>
            <span className="text-zinc-300 dark:text-zinc-600 select-none">•</span>
            <span className="text-zinc-600 dark:text-zinc-400">Informatics Engineering Graduate • Politeknik Caltex Riau</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
          </div>
        </motion.div>

        {/* Big Expressive Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.12]"
          >
            Informatics Engineering Graduate &{' '}
            <span className="text-amber-700 dark:text-amber-400">
              Web Developer.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-normal max-w-3xl mx-auto leading-relaxed px-2"
          >
            Passionate about{' '}
            <span className="font-semibold text-zinc-900 dark:text-white underline decoration-amber-500/70 dark:decoration-amber-400/70 decoration-2 underline-offset-4">
              Technology
            </span>
            ,{' '}
            <span className="font-semibold text-zinc-900 dark:text-white underline decoration-teal-600/70 dark:decoration-teal-400/70 decoration-2 underline-offset-4">
              Graphic Design
            </span>
            , and{' '}
            <span className="font-semibold text-zinc-900 dark:text-white underline decoration-stone-400 dark:decoration-stone-600 decoration-2 underline-offset-4">
              Digital Communication
            </span>
            . I focus on developing{' '}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              modern web applications
            </span>
            ,{' '}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              native Android solutions
            </span>
            , and{' '}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              interactive digital media
            </span>
            —bridging aesthetic UI/UX with solid software engineering to solve real-world problems.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4"
          >
            <a
              href="#featured"
              className="inline-flex items-center space-x-2.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all group border border-transparent hover:border-amber-500/30"
              onMouseEnter={() => setCursor('explore', 'SEE WORK')}
              onMouseLeave={resetCursor}
            >
              <span>Explore My 5 Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-white dark:bg-zinc-900 hover:bg-amber-50/50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-zinc-300 dark:border-zinc-700 shadow-xs hover:border-amber-400 dark:hover:border-amber-500/60 transition-all"
              onMouseEnter={() => setCursor('link')}
              onMouseLeave={resetCursor}
            >
              <span>Contact Cindy</span>
              <Heart className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </a>
          </motion.div>
        </div>

        {/* Floating Dribbble Stat & Highlight Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-12 sm:pt-16 max-w-5xl mx-auto"
        >
          {/* Badge 1: Web Development (Secondary: Warm Amber) */}
          <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-4 shadow-xs hover:shadow-md transition-all flex items-center space-x-3.5 group">
            <div className="h-11 w-11 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0 border border-amber-200/70 dark:border-amber-900/40 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-zinc-900 dark:text-white">Web Development</div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Fullstack & Responsive Platforms</div>
            </div>
          </div>

          {/* Badge 2: Native Android (Tertiary: Nordic Teal) */}
          <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-4 shadow-xs hover:shadow-md transition-all flex items-center space-x-3.5 group">
            <div className="h-11 w-11 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0 border border-teal-200/70 dark:border-teal-900/40 group-hover:scale-105 transition-transform">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-zinc-900 dark:text-white">Native Android</div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Kotlin, Jetpack & Mobile UX</div>
            </div>
          </div>

          {/* Badge 3: Graphic Design & UI/UX (Warm Stone / Terracotta) */}
          <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-4 shadow-xs hover:shadow-md transition-all flex items-center space-x-3.5 group">
            <div className="h-11 w-11 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center justify-center shrink-0 border border-stone-200 dark:border-stone-700 group-hover:scale-105 transition-transform">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-zinc-900 dark:text-white">Graphic & UI/UX Design</div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Visual Identity & Creative Media</div>
            </div>
          </div>

          {/* Badge 4: Applied AI & Systems (Sage Emerald) */}
          <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-4 shadow-xs hover:shadow-md transition-all flex items-center space-x-3.5 group">
            <div className="h-11 w-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200/70 dark:border-emerald-900/40 group-hover:scale-105 transition-transform">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-zinc-900 dark:text-white">Applied AI & Systems</div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Enterprise Workflows & CNN AI</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
