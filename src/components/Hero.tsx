'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { Sparkles, ArrowRight, Smartphone, Heart, GraduationCap, MapPin, Brain } from 'lucide-react';

export default function Hero() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 md:pt-44 md:pb-28 overflow-hidden">
      {/* Ambient Pastel Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-purple-300/30 dark:bg-purple-600/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-32 right-1/4 w-80 h-80 rounded-full bg-rose-200/40 dark:bg-pink-600/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-amber-200/30 dark:bg-amber-600/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Intro Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center space-x-2 bg-white/90 dark:bg-zinc-900/90 border border-purple-200/70 dark:border-purple-800/50 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-xs text-xs font-semibold text-purple-700 dark:text-purple-300 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <span>Hello! I&apos;m Cindy Ardelya</span>
            <span className="text-zinc-300 dark:text-zinc-600">✦</span>
            <span className="text-zinc-600 dark:text-zinc-300">Fresh Graduate from Politeknik Caltex Riau</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </div>
        </motion.div>

        {/* Big Expressive Dribbble Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.12]"
          >
            Crafting{' '}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-rose-400 bg-clip-text text-transparent">
              empathetic mobile apps
            </span>{' '}
            & impactful digital solutions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-normal max-w-3xl mx-auto leading-relaxed px-2"
          >
            Passionate software engineer with hands-on experience in native Android engineering (MindCare & By-Pro Sales Contract), fullstack web & GIS development (Alumna Islamic School Pekanbaru & AgriSmart), and applied deep learning.
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
              className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35 hover:scale-105 active:scale-95 transition-all group"
              onMouseEnter={() => setCursor('explore', 'SEE WORK')}
              onMouseLeave={resetCursor}
            >
              <span>Explore My 5 Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-white dark:bg-zinc-850 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-zinc-200/80 dark:border-zinc-700 shadow-xs hover:shadow-md transition-all"
              onMouseEnter={() => setCursor('link')}
              onMouseLeave={resetCursor}
            >
              <span>Contact Cindy</span>
              <Heart className="w-4 h-4 text-rose-500" />
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
          {/* Badge 1: MindCare & By-Pro Mobile */}
          <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-purple-100 dark:border-zinc-800 rounded-2xl p-4 shadow-xs hover:shadow-md transition-all flex items-center space-x-3.5">
            <div className="h-11 w-11 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-zinc-900 dark:text-white">Native Android</div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">MindCare & By-Pro (Kotlin)</div>
            </div>
          </div>

          {/* Badge 2: Alumna Islamic School Pekanbaru Final Thesis */}
          <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-amber-100 dark:border-zinc-800 rounded-2xl p-4 shadow-xs hover:shadow-md transition-all flex items-center space-x-3.5">
            <div className="h-11 w-11 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-300 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-zinc-900 dark:text-white">Final Thesis (TA)</div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Alumna Islamic School Pekanbaru</div>
            </div>
          </div>

          {/* Badge 3: PTPN IV MBKM */}
          <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-emerald-100 dark:border-zinc-800 rounded-2xl p-4 shadow-xs hover:shadow-md transition-all flex items-center space-x-3.5">
            <div className="h-11 w-11 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-zinc-900 dark:text-white">PTPN IV Regional III</div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">By-Pro & AgriSmart GIS</div>
            </div>
          </div>

          {/* Badge 4: Deep Learning */}
          <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-rose-100 dark:border-zinc-800 rounded-2xl p-4 shadow-xs hover:shadow-md transition-all flex items-center space-x-3.5">
            <div className="h-11 w-11 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 flex items-center justify-center shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-zinc-900 dark:text-white">Deep Learning CNN</div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">96.8% Malaria Detection</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
