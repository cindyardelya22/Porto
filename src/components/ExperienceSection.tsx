'use client';

import React from 'react';
import { experienceTimeline } from '@/data/skills';
import KpSlideshow from '@/components/KpSlideshow';
import { Award, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">
        {/* Experience Timeline */}
        <div className="space-y-8 sm:space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider border border-zinc-200/60 dark:border-zinc-700">
              <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>Work & Academic Experience</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Professional Experience & Trajectory.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Hands-on corporate engineering at PTPN IV, undergraduate software development, and applied research.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {experienceTimeline.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                <div className="lg:col-span-3 space-y-1">
                  <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full inline-block border border-zinc-200/60 dark:border-zinc-700">
                    {exp.period}
                  </span>
                  <div className="text-xs text-zinc-400 dark:text-zinc-500 font-medium pt-1">
                    {exp.location}
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-semibold">
                    {exp.type}
                  </div>
                </div>

                <div className="lg:col-span-9 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
                      {exp.company}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {exp.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start space-x-2 text-xs text-zinc-600 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2.5 py-0.5 rounded-full border border-transparent dark:border-zinc-700/60"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industrial Internship & Certified MBKM Slideshow Component */}
        <KpSlideshow />
      </div>
    </section>
  );
}
