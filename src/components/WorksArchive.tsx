'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArchiveItem, CaseStudy } from '@/types';
import { useCursor } from '@/context/CursorContext';
import { Search, ArrowUpRight, Heart, Sparkles, FileText } from 'lucide-react';
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
  const [likedItems, setLikedItems] = useState<{ [key: string]: boolean }>({});

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

  const toggleLike = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    setLikedItems((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section id="archive" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-purple-100 dark:border-zinc-800 pb-8">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-100/80 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>Project Directory & Lab</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Selected Works & Shots.
            </h2>
          </div>

          {/* Filter Tabs & Search */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative text-xs">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Cari proyek atau teknologi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-56 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-purple-500 rounded-full pl-9 pr-4 py-2.5 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 outline-none shadow-2xs transition-all focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/40"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 rounded-full transition-all ${
                    activeCategory === cat
                      ? 'bg-purple-600 text-white shadow-sm shadow-purple-500/25 font-bold'
                      : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-zinc-750 border border-zinc-200/80 dark:border-zinc-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dribbble Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArchive.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => handleCardClick(item)}
              onMouseEnter={() => setCursor('explore', 'INSPECT')}
              onMouseLeave={resetCursor}
              className="group cursor-pointer bg-white dark:bg-zinc-900 rounded-3xl border border-purple-100/80 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/11] bg-gradient-to-br from-purple-100 to-pink-50 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Category Pill */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="text-[10px] font-bold bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-zinc-800 dark:text-zinc-200 px-3 py-1 rounded-full shadow-sm border border-white/60 dark:border-zinc-700">
                    {item.platform}
                  </span>
                </div>

                {/* Like Button */}
                <button
                  onClick={(e) => toggleLike(e, item.title)}
                  aria-label="Like shot"
                  className="absolute top-3.5 right-3.5 h-8 w-8 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-rose-500 hover:scale-110 active:scale-95 transition-all shadow-sm"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likedItems[item.title] ? 'fill-rose-500 text-rose-500' : ''
                    }`}
                  />
                </button>

                {/* Hover Quick Overlay */}
                <div className="absolute inset-0 bg-purple-950/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>Lihat Dokumentasi</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                  <span>{item.client}</span>
                  <span>{item.year}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-extrabold text-base text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    {item.role}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.slice(0, 3).map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2.5 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Direct Preview Link Button */}
                {item.linkLabel && (
                  <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <button
                      onClick={(e) => handleDirectPreview(e, item)}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 hover:underline"
                    >
                      {item.linkType === 'figma' && <FigmaIcon className="w-3.5 h-3.5" />}
                      {item.linkType === 'canva' && <CanvaIcon className="w-3.5 h-3.5" />}
                      {item.linkType === 'pdf' && <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />}
                      <span>{item.linkLabel}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredArchive.length === 0 && (
          <div className="py-16 text-center bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
              Tidak ada proyek yang sesuai dengan kata kunci pencarian.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
