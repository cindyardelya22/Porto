'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CaseStudy } from '@/types';
import { useCursor } from '@/context/CursorContext';
import { ArrowUpRight, FileText, Sparkles, Clock, Building2 } from 'lucide-react';
import { FigmaIcon, CanvaIcon } from '@/components/Icons';

interface FeaturedProjectsProps {
  projects: CaseStudy[];
  onSelectProject: (project: CaseStudy) => void;
}

export default function FeaturedProjects({ projects, onSelectProject }: FeaturedProjectsProps) {
  const { setCursor, resetCursor } = useCursor();

  const handleExternalPreview = (e: React.MouseEvent, url: string, project: CaseStudy) => {
    e.stopPropagation();
    if (url.startsWith('#')) {
      onSelectProject(project);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="featured" className="py-16 sm:py-20 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider border border-zinc-200/60 dark:border-zinc-700">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Selected Projects & Case Studies.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            A deeper look into how I approach design, engineering, and deployment across mobile applications, enterprise platforms, and applied machine learning.
          </p>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-8 sm:space-y-10">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => onSelectProject(project)}
                onMouseEnter={() => setCursor('view', 'VIEW')}
                onMouseLeave={resetCursor}
                className="group cursor-pointer rounded-[2rem] border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-9 lg:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.04] dark:hover:shadow-black/50 hover:-translate-y-1"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
                  {/* Narrative Column */}
                  <div className="lg:col-span-6 space-y-5">
                    {/* Meta Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700">
                        {project.category}
                      </span>
                      <span className="inline-flex items-center space-x-1 text-xs font-medium px-2.5 py-0.5 rounded-full bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60 text-zinc-600 dark:text-zinc-400">
                        <Clock className="w-3 h-3 text-zinc-400" />
                        <span>{project.timeline}</span>
                      </span>
                      <span className="inline-flex items-center space-x-1 text-xs text-zinc-500 dark:text-zinc-400 font-medium truncate max-w-[220px]">
                        <Building2 className="w-3 h-3 shrink-0 text-zinc-400" />
                        <span className="truncate">{project.client.split('•')[0].trim()}</span>
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1.5">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-snug">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Project Problem & Solution Summary */}
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    {/* Key Results / Metrics Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-1">
                      {project.stats.slice(0, 2).map((st, i) => (
                        <div
                          key={i}
                          className="bg-zinc-50 dark:bg-zinc-800/60 rounded-xl p-3 border border-zinc-200/60 dark:border-zinc-700/60 space-y-0.5"
                        >
                          <div className="text-xs font-extrabold text-zinc-900 dark:text-white">
                            {st.value}
                          </div>
                          <div className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
                            {st.label}
                          </div>
                          {st.subtext && (
                            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 truncate">
                              {st.subtext}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 5).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2.5 py-0.5 rounded-full border border-zinc-200/60 dark:border-zinc-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Direct Links & Case Study CTA */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {project.primaryLink && (
                        <button
                          type="button"
                          onClick={(e) => handleExternalPreview(e, project.primaryLink.url, project)}
                          className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 shadow-2xs hover:shadow-xs hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
                        >
                          {project.primaryLink.type === 'figma' && <FigmaIcon className="w-3.5 h-3.5" />}
                          {project.primaryLink.type === 'canva' && <CanvaIcon className="w-3.5 h-3.5" />}
                          {project.primaryLink.type === 'pdf' && (
                            <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          )}
                          <span>{project.primaryLink.label}</span>
                          <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                        </button>
                      )}

                      <div className="inline-flex items-center space-x-1 text-xs font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        <span className="underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 group-hover:decoration-indigo-600 dark:group-hover:decoration-indigo-400">
                          Read Case Study
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Visual Preview Column */}
                  <div className="lg:col-span-6">
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center group-hover:scale-104 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <span className="text-xs font-semibold text-white bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 border border-white/10">
                          <span>Open Case Study Documentation</span>
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
