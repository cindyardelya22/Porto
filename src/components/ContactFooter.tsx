'use client';

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import confetti from 'canvas-confetti';
import {
  Copy,
  Check,
  ArrowUpRight,
  Mail,
  ChevronUp,
  Sparkles,
  Phone,
  GraduationCap,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function ContactFooter() {
  const { setCursor, resetCursor } = useCursor();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const email = 'cindyardelya@gmail.com';
  const phone = '+6285119007433';

  // Magnetic Button Spring Logic
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const magneticX = useSpring(btnX, springConfig);
  const magneticY = useSpring(btnY, springConfig);

  const handleMagneticMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * 0.35;
    const distanceY = (e.clientY - centerY) * 0.35;

    btnX.set(distanceX);
    btnY.set(distanceY);
  };

  const handleMagneticLeave = () => {
    btnX.set(0);
    btnY.set(0);
    resetCursor();
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);

      // Trigger colorful pastel confetti celebration!
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#a855f7', '#ec4899', '#38bdf8', '#fbbf24', '#34d399', '#f43f5e'],
        disableForReducedMotion: true,
      });

      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Vibrant Gradient Banner Card */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-tr from-violet-600 via-purple-600 to-fuchsia-500 text-white p-8 sm:p-14 shadow-2xl shadow-purple-500/25 overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-fuchsia-400/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Open for Opportunities & Projects</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08]">
                Ready to collaborate? <br />
                <span className="text-purple-200">Let&apos;s build something meaningful ✨</span>
              </h2>

              <p className="text-sm sm:text-base text-purple-100 font-normal max-w-xl leading-relaxed">
                Whether discussing mobile engineering in Kotlin, fullstack systems in Laravel, or exciting career opportunities, I&apos;m always excited to connect!
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-4">
              {/* Magnetic CTA Button */}
              <motion.a
                ref={buttonRef}
                href={`mailto:${email}`}
                style={{ x: magneticX, y: magneticY }}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                onMouseEnter={() => setCursor('link', 'CHAT')}
                className="inline-flex items-center justify-center h-28 w-28 sm:h-36 sm:w-36 rounded-full bg-white text-purple-700 font-extrabold text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all group"
              >
                <div className="flex flex-col items-center space-y-1">
                  <span>Say Hello</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copy Email & Phone + Direct Reach Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-3xl border border-purple-100/80 dark:border-zinc-800 shadow-sm">
          <div className="space-y-3 text-center lg:text-left w-full lg:w-auto">
            <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
              Direct Contact & Information
            </span>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* Email Button */}
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-xl font-extrabold text-zinc-900 dark:text-white">
                  {email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => setCursor('copy', 'COPY')}
                  onMouseLeave={resetCursor}
                  className="inline-flex items-center space-x-1 bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-bold transition-all active:scale-95"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Button */}
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-bold text-zinc-600 dark:text-zinc-300">
                  {phone}
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center space-x-1 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-bold transition-all active:scale-95"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call/WA</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-2 justify-center">
            <a
              href="https://github.com/cindyardelya22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-zinc-50 dark:bg-zinc-800 hover:bg-purple-50 dark:hover:bg-purple-950/60 hover:text-purple-700 dark:hover:text-purple-300 text-zinc-700 dark:text-zinc-200 px-4 py-2 rounded-full text-xs font-bold transition-colors border border-zinc-200/70 dark:border-zinc-700"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/cindy-ardelya/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-zinc-50 dark:bg-zinc-800 hover:bg-purple-50 dark:hover:bg-purple-950/60 hover:text-purple-700 dark:hover:text-purple-300 text-zinc-700 dark:text-zinc-200 px-4 py-2 rounded-full text-xs font-bold transition-colors border border-zinc-200/70 dark:border-zinc-700"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center space-x-2 bg-zinc-50 dark:bg-zinc-800 hover:bg-purple-50 dark:hover:bg-purple-950/60 hover:text-purple-700 dark:hover:text-purple-300 text-zinc-700 dark:text-zinc-200 px-4 py-2 rounded-full text-xs font-bold transition-colors border border-zinc-200/70 dark:border-zinc-700"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400 pt-2">
          <div className="flex items-center space-x-2">
            <span>© 2026 Cindy Ardelya</span>
            <span>•</span>
            <span>Politeknik Caltex Riau</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 font-bold transition-colors"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
