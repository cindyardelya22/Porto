'use client';

import React, { useState } from 'react';
import { useCursor } from '@/context/CursorContext';
import {
  Copy,
  Check,
  ArrowUpRight,
  ChevronUp,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function ContactFooter() {
  const { setCursor, resetCursor } = useCursor();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = 'cindyardelya@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Editorial Invitation Banner */}
        <div className="rounded-2xl bg-zinc-950 text-white p-8 sm:p-12 lg:p-14 border border-zinc-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                07 / Direct Contact
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12]">
                Interested in building together? <br />
                <span className="font-serif italic font-normal text-zinc-400">
                  Let&apos;s start a conversation.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-xl leading-relaxed">
                Whether you&apos;re looking to fill a software engineering position, collaborate on a project, or discuss native Android and fullstack architectures, I would love to connect.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-3">
              <a
                href="https://www.linkedin.com/in/cindy-ardelya/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('link', 'CONNECT')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-white text-zinc-950 font-semibold text-xs tracking-wider uppercase hover:bg-zinc-100 transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-zinc-500 font-mono">
                Typical reply within 24h
              </span>
            </div>
          </div>
        </div>

        {/* Direct Reach Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white/70 dark:bg-zinc-900/60 p-6 sm:p-7 rounded-xl border border-zinc-200/80 dark:border-zinc-800">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block">
              Direct Inquiries
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-base sm:text-lg font-semibold text-zinc-950 dark:text-zinc-50 font-mono">
                {email}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                onMouseEnter={() => setCursor('copy', 'COPY')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center space-x-1.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-3 py-1 rounded-md text-xs font-medium transition-colors border border-zinc-200 dark:border-zinc-700"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-300">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-2">
            <a
              href="https://github.com/cindyardelya22"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors border border-zinc-200/60 dark:border-zinc-700/60"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/cindy-ardelya/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors border border-zinc-200/60 dark:border-zinc-700/60"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Footer Colophon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400 border-t border-zinc-200/80 dark:border-zinc-800 pt-8">
          <div className="flex items-center space-x-2 text-center sm:text-left">
            <span>© 2026 Cindy Ardelya</span>
            <span>·</span>
            <span>Informatics Engineering Graduate, Politeknik Caltex Riau</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <span>Top of page</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
