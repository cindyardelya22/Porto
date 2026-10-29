'use client';

import React from 'react';
import { experienceTimeline } from '@/data/skills';
import KpSlideshow from '@/components/KpSlideshow';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Experience Timeline Header */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200/80 dark:border-zinc-800 pb-8">
            <div className="space-y-3 max-w-xl">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                05 / Experience & Trajectory
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                Professional roles, corporate placements &{' '}
                <span className="font-serif italic font-normal text-zinc-600 dark:text-zinc-400">
                  applied engineering
                </span>
                .
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Corporate software engineering at PT Perkebunan Nusantara IV Regional III, fullstack undergraduate deliverables, and technical leadership.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 shrink-0">
              {experienceTimeline.length} Core Milestones
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-6">
            {experienceTimeline.map((exp, idx) => (
              <article
                key={idx}
                className="bg-white/70 dark:bg-zinc-900/60 rounded-xl border border-zinc-200/80 dark:border-zinc-800 p-7 sm:p-9 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                {/* Period & Meta Column */}
                <div className="lg:col-span-3 space-y-1.5 font-mono text-xs">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">
                    {exp.period}
                  </span>
                  <div className="text-zinc-600 dark:text-zinc-400 font-normal">
                    {exp.location}
                  </div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-400 uppercase tracking-wider pt-0.5">
                    {exp.type}
                  </div>
                </div>

                {/* Narrative & Highlights Column */}
                <div className="lg:col-span-9 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 dark:text-zinc-50 tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                      {exp.company}
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights with subtle typographic dashes */}
                  <ul className="space-y-2 pt-1 text-xs text-zinc-600 dark:text-zinc-400">
                    {exp.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2.5">
                        <span className="text-zinc-400 dark:text-zinc-600 select-none font-mono">
                          —
                        </span>
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                    <span className="text-zinc-600 dark:text-zinc-400 uppercase text-[10px] tracking-wider">
                      Focus:
                    </span>
                    {exp.skills.map((sk, sIdx) => (
                      <span key={sIdx} className="inline-flex items-center">
                        <span>{sk}</span>
                        {sIdx < exp.skills.length - 1 && (
                          <span className="text-zinc-400 dark:text-zinc-600 ml-2">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Industrial Internship & Certified MBKM Slideshow Component */}
        <KpSlideshow />
      </div>
    </section>
  );
}
