'use client';

import React from 'react';
import Image from 'next/image';
import { skillCategories } from '@/data/skills';
import { useCursor } from '@/context/CursorContext';
import {
  Smartphone,
  Monitor,
  Database,
  Mail,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Code2,
} from 'lucide-react';

export default function AboutSection() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="about" className="py-16 sm:py-20 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">
        {/* Personal Story & Background Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-10 lg:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Profile Column */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 shadow-sm">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  <Image
                    src="/images/profile.jpg"
                    alt="Cindy Ardelya"
                    fill
                    sizes="(max-width: 640px) 144px, 176px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">Cindy Ardelya</h3>
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                Informatics Engineering Graduate • Developer
              </p>
              <div className="flex items-center justify-center space-x-1 text-xs text-zinc-500 dark:text-zinc-400 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>Pekanbaru, Riau, Indonesia</span>
              </div>
            </div>

            {/* Quick Contact Email Pill */}
            <div className="pt-1 w-full text-xs font-medium">
              <a
                href="mailto:cindyardelya@gmail.com"
                className="flex items-center justify-center space-x-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-4 py-2 rounded-full text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors shadow-2xs"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>cindyardelya@gmail.com</span>
              </a>
            </div>

            {/* Quick Fast Facts */}
            <div className="w-full pt-3 border-t border-zinc-100 dark:border-zinc-800 text-left space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Politeknik Caltex Riau</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>EC-Council Certified (EHE, NDE)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Kotlin, Laravel, Web GIS, Python</span>
              </div>
            </div>
          </div>

          {/* Bio Story Narrative Column */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider border border-zinc-200/60 dark:border-zinc-700">
              <span>About Me & Background</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
              A developer who enjoys turning real operational problems into clear, reliable software.
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed">
              <p>
                Hi! I&apos;m <strong className="text-zinc-900 dark:text-white font-semibold">Cindy Ardelya</strong>. I recently graduated with a degree in Informatics Engineering from Politeknik Caltex Riau. Throughout my studies and professional internships, I&apos;ve focused on writing dependable code, designing intuitive user flows, and shipping systems that make everyday tasks easier for real teams.
              </p>
              <p>
                During my corporate internship and certified MBKM program at <strong className="text-zinc-900 dark:text-white font-semibold">PT Perkebunan Nusantara (PTPN) IV Regional III</strong>, I had the opportunity to build two core enterprise tools: the <strong className="text-zinc-900 dark:text-white font-semibold">By-Pro</strong> native Android contract and digital signing application, and <strong className="text-zinc-900 dark:text-white font-semibold">AgriSmart</strong>, an interactive web GIS portal for soil fertility management with Gemini AI assistance.
              </p>
              <p>
                I don&apos;t just code in isolation. Working in enterprise environments taught me the importance of clear communication — authoring official technical user manuals (SOP), running IT diagnostics, preparing device staging, and operating boardroom audiovisual telemetry for executive conferences.
              </p>
              <p>
                I&apos;m also certified in <strong className="text-zinc-900 dark:text-white font-semibold">Ethical Hacking Essentials (EHE)</strong> and <strong className="text-zinc-900 dark:text-white font-semibold">Network Defense Essentials (NDE)</strong> by EC-Council, which keeps data protection, validation, and security top of mind in every project I develop.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Capabilities Matrix */}
        <div className="space-y-8 sm:space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider border border-zinc-200/60 dark:border-zinc-700">
              <span>Technical Competencies</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Tools & Technologies.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              The frameworks, languages, and patterns I regularly use in production and research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => {
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-start h-full"
                  onMouseEnter={() => setCursor('explore')}
                  onMouseLeave={resetCursor}
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white">
                        {idx === 0 && <Smartphone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
                        {idx === 1 && <Monitor className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
                        {idx === 2 && <Database className="w-5 h-5 text-amber-600 dark:text-amber-400" />}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-base text-zinc-900 dark:text-white">
                          {cat.category}
                        </h4>
                        <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                          {cat.tag}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed min-h-[36px]">
                      {cat.description}
                    </p>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2 pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-zinc-50 dark:bg-zinc-800/80 rounded-xl px-3.5 py-2.5 border border-zinc-200/60 dark:border-zinc-700/60 flex items-center justify-between text-xs hover:bg-zinc-100/70 dark:hover:bg-zinc-800 transition-colors"
                      >
                        <span className="font-bold text-zinc-800 dark:text-zinc-200">{skill.name}</span>
                        <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium text-right truncate max-w-[170px] sm:max-w-[200px]">
                          {skill.highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
