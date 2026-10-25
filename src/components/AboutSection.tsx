'use client';

import React from 'react';
import Image from 'next/image';
import { skillCategories, experienceTimeline } from '@/data/skills';
import { useCursor } from '@/context/CursorContext';
import KpSlideshow from '@/components/KpSlideshow';
import {
  Smartphone,
  Monitor,
  Database,
  Award,
  CheckCircle2,
  Sparkles,
  Mail,
  GraduationCap,
} from 'lucide-react';

export default function AboutSection() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">
        {/* Bio & Intro Card */}
        <div className="bg-white dark:bg-zinc-900/90 rounded-[2rem] sm:rounded-[2.5rem] border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-10 lg:p-14 shadow-lg shadow-black/[0.03] dark:shadow-black/40 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-zinc-200 via-indigo-200 to-zinc-300 dark:from-zinc-700 dark:via-indigo-900/40 dark:to-zinc-700 p-1.5 shadow-md shadow-black/5">
                <div className="relative w-full h-full rounded-full bg-white dark:bg-zinc-800 overflow-hidden shadow-inner">
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
              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-zinc-800 rounded-full px-3 py-1 text-xs font-bold shadow-md border border-zinc-200 dark:border-zinc-700 flex items-center space-x-1 text-zinc-800 dark:text-zinc-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Cindy Ardelya</span>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">Cindy Ardelya</h3>
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Informatics Engineering Graduate • Web Developer</p>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 space-y-0.5">
                <p>Politeknik Caltex Riau</p>
                <p>Pekanbaru, Riau, Indonesia</p>
              </div>
            </div>

            {/* Quick Contact Email Pill (No phone number) */}
            <div className="pt-2 flex flex-col gap-1.5 w-full text-xs font-medium">
              <a
                href="mailto:cindyardelya@gmail.com"
                className="flex items-center justify-center space-x-2 bg-zinc-50 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 px-4 py-2 rounded-full text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors shadow-2xs"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>cindyardelya@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider border border-zinc-200/60 dark:border-zinc-700">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Informatics Engineering Graduate • Web Developer</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
              Passionate about technology, graphic design, and digital communication to build meaningful solutions.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed">
              <p>
                Hello! I&apos;m <strong className="text-zinc-900 dark:text-white font-bold">Cindy Ardelya</strong>, an <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Informatics Engineering Graduate</strong> from Politeknik Caltex Riau.
                I am a Web Developer deeply passionate about technology, graphic design, and digital communication, combining solid software engineering with clean, human-centered visual design.
              </p>
              <p>
                My portfolio demonstrates versatility across diverse technical domains:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start space-x-2">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">✦</span>
                  <span><strong className="text-zinc-900 dark:text-white font-semibold">MindCare:</strong> Native Android mental health support app with conversational chatbot screening, mood journaling, and guided therapy.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">✦</span>
                  <span><strong className="text-zinc-900 dark:text-white font-semibold">By-Pro Sales Contract:</strong> Mobile contract management and cryptographic digital signing system built during my MBKM at PTPN IV Regional III.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">✦</span>
                  <span><strong className="text-zinc-900 dark:text-white font-semibold">Alumna Islamic School Pekanbaru (Final Project):</strong> End-to-end Laravel web monitoring platform for Alumna Islamic School Pekanbaru visualizing child anthropometric growth curves and developmental milestones.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">✦</span>
                  <span><strong className="text-zinc-900 dark:text-white font-semibold">AgriSmart GIS Soil Fertility:</strong> Spatial mapping system integrating plantation block nutrient heatmaps with a Google Gemini AI conversational advisor at PTPN IV.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">✦</span>
                  <span><strong className="text-zinc-900 dark:text-white font-semibold">Malaria Cell CNN:</strong> Deep learning computer vision classifier achieving 96.8% accuracy on microscopic human blood smear images.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Capabilities Matrix */}
        <div className="space-y-8 sm:space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider border border-zinc-200/60 dark:border-zinc-700">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              <span>Skills & Competencies</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Cindy&apos;s Technical Toolkit.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Proficiencies across mobile application engineering, fullstack web, GIS, and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => {
              const bgColors = [
                'bg-white dark:bg-zinc-900/90 border-zinc-200/80 dark:border-zinc-800',
                'bg-white dark:bg-zinc-900/90 border-zinc-200/80 dark:border-zinc-800',
                'bg-white dark:bg-zinc-900/90 border-zinc-200/80 dark:border-zinc-800',
              ];
              const iconColors = [
                'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40',
                'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40',
                'bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/40',
              ];

              return (
                <div
                  key={idx}
                  className={`rounded-3xl border p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 ${bgColors[idx % bgColors.length]}`}
                  onMouseEnter={() => setCursor('explore')}
                  onMouseLeave={resetCursor}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`h-11 w-11 rounded-2xl flex items-center justify-center shrink-0 ${iconColors[idx]}`}>
                        {idx === 0 && <Smartphone className="w-5 h-5" />}
                        {idx === 1 && <Monitor className="w-5 h-5" />}
                        {idx === 2 && <Database className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-lg text-zinc-900 dark:text-white">
                          {cat.category}
                        </h4>
                        <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                          {cat.tag}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-zinc-50 dark:bg-zinc-800/80 rounded-xl px-3 py-2 border border-zinc-200/60 dark:border-zinc-700/60 flex items-center justify-between text-xs"
                      >
                        <span className="font-bold text-zinc-800 dark:text-zinc-200">{skill.name}</span>
                        <span className="text-[10px] font-semibold text-zinc-600 dark:text-zinc-300 bg-zinc-200/70 dark:bg-zinc-700 px-2 py-0.5 rounded-full">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 sm:space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider border border-zinc-200/60 dark:border-zinc-700">
              <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>Project & Career Milestones</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Journey & Accomplishments.
            </h3>
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
                    <h4 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-white">
                      {exp.role}
                    </h4>
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
