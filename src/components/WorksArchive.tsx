'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArchiveItem, CaseStudy } from '@/types';
import { useCursor } from '@/context/CursorContext';
import { Search, ArrowUpRight, FileText } from 'lucide-react';
import { FigmaIcon, CanvaIcon } from '@/components/Icons';

interface WorksArchiveProps {
  archive: ArchiveItem[];
  projects: CaseStudy[];
  onSelectProject: (project: CaseStudy) => void;
}

export default function WorksArchive({ archive, projects, onSelectProject }: WorksArchiveProps) {
  const { setCursor, resetCursor } = useCursor();
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', 'MOBILE', 'WEB PLATFORM', 'GIS', 'DEEP LEARNING'];

  const filteredArchive = archive.filter((item) => {
    const matchesCategory =
      activeCategory === 'ALL' ||
      item.category.toUpperCase().includes(activeCategory) ||
      item.platform.toUpperCase().includes(activeCategory);

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleCardClick = (item: ArchiveItem) => {
    if (item.caseStudyId) {
      const match = projects.find((p) => p.id === item.caseStudyId);
      if (match) {
        onSelectProject(match);
        return;
      }
    }
    if (item.link && !item.link.startsWith('#')) {
      window.open(item.link, '_blank');
    }
  };

  const handleDirectPreview = (e: React.MouseEvent, item: ArchiveItem) => {
    e.stopPropagation();
    if (item.link && !item.link.startsWith('#')) {
      window.open(item.link, '_blank');
    } else if (item.caseStudyId) {
      const match = projects.find((p) => p.id === item.caseStudyId);
      if (match) onSelectProject(match);
    }
  };

  return (
    <section id="archive" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200/80 dark:border-zinc-800 pb-8">
          <div className="space-y-3 max-w-xl">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
              06 / Deliverables & Archive
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Full index of projects, prototypes &{' '}
              <span className="font-serif italic font-normal text-zinc-600 dark:text-zinc-400">
                deliverables
              </span>
              .
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Figma interactive prototypes, official Standard Operating Procedure (SOP) documentation guides, and slide decks.
            </p>
          </div>

          {/* Filter Tabs & Search */}
          <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative text-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
              <input
                type="text"
                placeholder="Search deliverables..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-52 bg-white dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-700/80 focus:border-zinc-400 dark:focus:border-zinc-500 rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 outline-hidden transition-colors"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1 text-xs font-medium">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeCategory === cat
                      ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold'
                      : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/60 dark:border-zinc-700/60'
                  }`}
                >
                  {cat === 'ALL' ? 'All' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredArchive.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              onClick={() => handleCardClick(item)}
              onMouseEnter={() => setCursor('explore', 'INSPECT')}
              onMouseLeave={resetCursor}
              className="group cursor-pointer bg-white/70 dark:bg-zinc-900/60 rounded-xl border border-zinc-200/80 dark:border-zinc-800 overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/11] bg-zinc-100 dark:bg-zinc-800/60 overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Platform Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xs text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-md border border-zinc-200/80 dark:border-zinc-700/80">
                    {item.platform}
                  </span>
                </div>

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-zinc-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="bg-zinc-950/85 text-white font-medium text-xs px-3.5 py-1.5 rounded-md flex items-center space-x-1.5 border border-white/10 backdrop-blur-xs">
                    <span>{item.caseStudyId ? 'View Case Study' : item.linkLabel || 'Open Deliverable'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                    <span className="truncate pr-2">{item.client}</span>
                    <span className="shrink-0 text-[11px]">{item.year}</span>
                  </div>

                  <h3 className="font-semibold text-base text-zinc-950 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    {item.role}
                  </p>
                </div>

                {/* Footer: Tags & Action Link */}
                <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                    {item.tags.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="inline-flex items-center">
                        <span>{t}</span>
                        {idx < Math.min(item.tags.length, 3) - 1 && (
                          <span className="text-zinc-400 dark:text-zinc-600 ml-2">·</span>
                        )}
                      </span>
                    ))}
                  </div>

                  {item.linkLabel && (
                    <div className="flex items-center justify-between pt-0.5">
                      <button
                        type="button"
                        onClick={(e) => handleDirectPreview(e, item)}
                        className="inline-flex items-center space-x-1.5 text-xs font-medium text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {item.linkType === 'figma' && <FigmaIcon className="w-3.5 h-3.5" />}
                        {item.linkType === 'canva' && <CanvaIcon className="w-3.5 h-3.5" />}
                        {item.linkType === 'pdf' && (
                          <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        )}
                        <span>{item.linkLabel}</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredArchive.length === 0 && (
          <div className="py-16 text-center bg-white/70 dark:bg-zinc-900/60 rounded-xl border border-zinc-200 dark:border-zinc-800 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            No projects found matching your search keyword.
          </div>
        )}
      </div>
    </section>
  );
}
