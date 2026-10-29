'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CaseStudy } from '@/types';
import { useCursor } from '@/context/CursorContext';
import { ArrowUpRight, FileText } from 'lucide-react';
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
    <section id="featured" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200/80 dark:border-zinc-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
              03 / Selected Work & Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Production software, mobile tools, and{' '}
              <span className="font-serif italic font-normal text-zinc-600 dark:text-zinc-400">
                applied systems
              </span>
              .
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Deep dives into end-to-end engineering, database architecture, and user workflows across enterprise platforms, native Android applications, and machine learning.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 shrink-0">
            {projects.length} Case Studies
          </div>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-16 sm:space-y-20">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;
            const projectNumber = String(index + 1).padStart(2, '0');

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => onSelectProject(project)}
                onMouseEnter={() => setCursor('view', 'VIEW')}
                onMouseLeave={resetCursor}
                className="group cursor-pointer rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xs p-7 sm:p-10 lg:p-12 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-950/5 dark:hover:shadow-black/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Narrative Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Index & Category Metadata */}
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-800/80 pb-3">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                          {projectNumber}
                        </span>
                        <span>/</span>
                        <span className="uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                      <span className="text-[11px] text-zinc-600 dark:text-zinc-400">
                        {project.timeline}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-950 dark:text-zinc-50 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-snug">
                        {project.subtitle}
                      </p>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400 font-medium pt-0.5">
                        {project.client}
                      </div>
                    </div>

                    {/* Narrative Summary */}
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    {/* Architectural Highlights / Metrics */}
                    <div className="grid grid-cols-2 gap-4 py-3 border-y border-zinc-100 dark:border-zinc-800/80">
                      {project.stats.slice(0, 2).map((st, i) => (
                        <div key={i} className="space-y-0.5">
                          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 font-mono">
                            {st.value}
                          </div>
                          <div className="text-xs text-zinc-600 dark:text-zinc-400">
                            {st.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack List */}
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                      <span className="text-zinc-600 dark:text-zinc-400 uppercase text-[10px] tracking-wider">
                        Stack:
                      </span>
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="inline-flex items-center">
                          <span className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                            {tag}
                          </span>
                          {tIdx < project.tags.length - 1 && (
                            <span className="text-zinc-400 dark:text-zinc-600 ml-2.5">·</span>
                          )}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      {project.primaryLink && (
                        <button
                          type="button"
                          onClick={(e) => handleExternalPreview(e, project.primaryLink.url, project)}
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 transition-colors"
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

                      <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Visual Preview Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-800 shadow-sm transition-all duration-500 group-hover:border-zinc-300 dark:group-hover:border-zinc-700">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-xs font-medium text-white bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-md flex items-center space-x-1.5 border border-white/10">
                          <span>Open Case Study Documentation</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
