'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CaseStudy } from '@/types';
import { useCursor } from '@/context/CursorContext';
import { ArrowUpRight, FolderGit2, FileText, CheckCircle2 } from 'lucide-react';
import { FigmaIcon, CanvaIcon } from '@/components/Icons';

interface FeaturedProjectsProps {
  projects: CaseStudy[];
  onSelectProject: (project: CaseStudy) => void;
}

export default function FeaturedProjects({ projects, onSelectProject }: FeaturedProjectsProps) {
  const { setCursor, resetCursor } = useCursor();

  // Distinct color palettes for all 5 portfolio projects (soft, elegant, non-AI-like)
  const projectStyles = [
    {
      // 1. MindCare
      cardBg:
        'bg-white dark:bg-zinc-900/90 border-zinc-200/80 dark:border-zinc-800 shadow-md shadow-black/[0.02] dark:shadow-black/50',
      badgeBg:
        'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200/80 dark:border-slate-700',
      pillColor: 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-xs',
      accentColor: 'text-zinc-800 dark:text-zinc-200',
    },
    {
      // 2. By-Pro Sales Contract (PTPN IV)
      cardBg:
        'bg-white dark:bg-zinc-900/90 border-zinc-200/80 dark:border-zinc-800 shadow-md shadow-black/[0.02] dark:shadow-black/50',
      badgeBg:
        'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/50',
      pillColor: 'bg-emerald-700 dark:bg-emerald-600 text-white shadow-xs',
      accentColor: 'text-emerald-700 dark:text-emerald-400',
    },
    {
      // 3. Alumna Islamic School Pekanbaru (Final Project)
      cardBg:
        'bg-white dark:bg-zinc-900/90 border-zinc-200/80 dark:border-zinc-800 shadow-md shadow-black/[0.02] dark:shadow-black/50',
      badgeBg:
        'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200/60 dark:border-amber-800/50',
      pillColor: 'bg-amber-700 dark:bg-amber-600 text-white shadow-xs',
      accentColor: 'text-amber-700 dark:text-amber-400',
    },
    {
      // 4. AgriSmart GIS & Gemini AI (PTPN IV)
      cardBg:
        'bg-white dark:bg-zinc-900/90 border-zinc-200/80 dark:border-zinc-800 shadow-md shadow-black/[0.02] dark:shadow-black/50',
      badgeBg:
        'bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border-teal-200/60 dark:border-teal-800/50',
      pillColor: 'bg-teal-700 dark:bg-teal-600 text-white shadow-xs',
      accentColor: 'text-teal-700 dark:text-teal-400',
    },
    {
      // 5. Malaria Cell CNN Classifier
      cardBg:
        'bg-white dark:bg-zinc-900/90 border-zinc-200/80 dark:border-zinc-800 shadow-md shadow-black/[0.02] dark:shadow-black/50',
      badgeBg:
        'bg-rose-50 dark:rose-950/60 text-rose-800 dark:text-rose-300 border-rose-200/60 dark:border-rose-800/50',
      pillColor: 'bg-rose-700 dark:bg-rose-600 text-white shadow-xs',
      accentColor: 'text-rose-700 dark:text-rose-400',
    },
  ];

  const handleExternalPreview = (
    e: React.MouseEvent,
    url: string,
    project: CaseStudy
  ) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="featured" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-200/70 dark:border-amber-800/50">
            <FolderGit2 className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
            <span>Featured Works & Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            5 Core Projects & Case Studies.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            Showcasing original UI designs on <strong>Figma</strong>, official <strong>System Manuals (PDF SOP)</strong>, and research presentations on <strong>Canva</strong> via direct preview buttons on each project.
          </p>
        </div>

        {/* Featured Projects Cards */}
        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => {
            const style = projectStyles[index % projectStyles.length];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                onClick={() => onSelectProject(project)}
                onMouseEnter={() => setCursor('view', 'VIEW')}
                onMouseLeave={resetCursor}
                className={`group cursor-pointer rounded-[2rem] sm:rounded-[2.5rem] border p-6 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${style.cardBg}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                  {/* Left Column: Project Narrative */}
                  <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full border ${style.badgeBg}`}
                      >
                        {project.category}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/90 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 shadow-2xs">
                        ⏱ {project.timeline}
                      </span>
                      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        {project.client} • {project.year}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-200 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    {/* Key Highlights (Minimalist & Clean) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-1">
                      {project.stats.slice(0, 2).map((st, i) => (
                        <div
                          key={i}
                          className="flex items-start space-x-3 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm rounded-xl p-3 border border-zinc-200/60 dark:border-zinc-700/60 shadow-2xs"
                        >
                          <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-700/80 ${style.accentColor} shadow-2xs`}>
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 space-y-0.5">
                            <div className="text-xs font-extrabold text-zinc-900 dark:text-white">
                              {st.value}
                            </div>
                            <div className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
                              {st.label}
                            </div>
                            {st.subtext && (
                              <div className="text-[10px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                                {st.subtext}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 5).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-semibold bg-white/90 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-200 px-3 py-1 rounded-full border border-zinc-200/80 dark:border-zinc-700 shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Direct Preview Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {/* Primary Link Button */}
                      {project.primaryLink && (
                        <button
                          type="button"
                          onClick={(e) => handleExternalPreview(e, project.primaryLink.url, project)}
                          className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 shadow-xs hover:shadow-md hover:border-zinc-500 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all"
                        >
                          {project.primaryLink.type === 'figma' && <FigmaIcon className="w-3.5 h-3.5" />}
                          {project.primaryLink.type === 'canva' && <CanvaIcon className="w-3.5 h-3.5" />}
                          {project.primaryLink.type === 'pdf' && <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />}
                          <span>{project.primaryLink.label}</span>
                          <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                        </button>
                      )}

                      <div className="inline-flex items-center space-x-1 text-xs font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                        <span className="underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 group-hover:decoration-amber-700 dark:group-hover:decoration-amber-400">
                          Explore Case Study
                        </span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Preview */}
                  <div className="lg:col-span-6">
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-white dark:bg-zinc-800 border-4 border-white/90 dark:border-zinc-700/60 group-hover:scale-[1.02]">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <span className="text-xs font-bold text-white bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 border border-white/10">
                          <span>Click to View Full Documentation</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
