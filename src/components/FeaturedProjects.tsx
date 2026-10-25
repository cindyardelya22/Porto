'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CaseStudy } from '@/types';
import { useCursor } from '@/context/CursorContext';
import { ArrowUpRight, Sparkles, FileText, ExternalLink } from 'lucide-react';
import { FigmaIcon, CanvaIcon } from '@/components/Icons';

interface FeaturedProjectsProps {
  projects: CaseStudy[];
  onSelectProject: (project: CaseStudy) => void;
}

export default function FeaturedProjects({ projects, onSelectProject }: FeaturedProjectsProps) {
  const { setCursor, resetCursor } = useCursor();

  // Distinct color palettes for all 5 portfolio projects
  const projectStyles = [
    {
      // 1. MindCare
      cardBg: 'bg-gradient-to-br from-purple-50/90 via-indigo-50/70 to-pink-50/80 dark:from-purple-950/40 dark:via-zinc-900 dark:to-indigo-950/30 border-purple-200/70 dark:border-purple-800/50 shadow-purple-500/5',
      badgeBg: 'bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/60',
      pillColor: 'bg-purple-600 text-white shadow-purple-500/25',
      accentColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      // 2. By-Pro Sales Contract (PTPN IV)
      cardBg: 'bg-gradient-to-br from-emerald-50/90 via-teal-50/70 to-green-50/80 dark:from-emerald-950/40 dark:via-zinc-900 dark:to-teal-950/30 border-emerald-200/70 dark:border-emerald-800/50 shadow-emerald-500/5',
      badgeBg: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
      pillColor: 'bg-emerald-600 text-white shadow-emerald-500/25',
      accentColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      // 3. Alumna Islamic School Pekanbaru (Proyek Akhir / TA)
      cardBg: 'bg-gradient-to-br from-amber-50/90 via-orange-50/70 to-yellow-50/80 dark:from-amber-950/40 dark:via-zinc-900 dark:to-orange-950/30 border-amber-200/70 dark:border-amber-800/50 shadow-amber-500/5',
      badgeBg: 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60',
      pillColor: 'bg-amber-600 text-white shadow-amber-500/25',
      accentColor: 'text-amber-600 dark:text-amber-400',
    },
    {
      // 4. AgriSmart GIS & Gemini AI (PTPN IV)
      cardBg: 'bg-gradient-to-br from-teal-50/90 via-cyan-50/70 to-sky-50/80 dark:from-teal-950/40 dark:via-zinc-900 dark:to-cyan-950/30 border-teal-200/70 dark:border-teal-800/50 shadow-teal-500/5',
      badgeBg: 'bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800/60',
      pillColor: 'bg-teal-600 text-white shadow-teal-500/25',
      accentColor: 'text-teal-600 dark:text-teal-400',
    },
    {
      // 5. Malaria Cell CNN Classifier
      cardBg: 'bg-gradient-to-br from-rose-50/90 via-pink-50/70 to-fuchsia-50/80 dark:from-rose-950/40 dark:via-zinc-900 dark:to-pink-950/30 border-rose-200/70 dark:border-rose-800/50 shadow-rose-500/5',
      badgeBg: 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60',
      pillColor: 'bg-rose-600 text-white shadow-rose-500/25',
      accentColor: 'text-rose-600 dark:text-rose-400',
    },
  ];

  const handleExternalPreview = (e: React.MouseEvent, url: string, project: CaseStudy) => {
    e.stopPropagation();
    if (url.startsWith('#')) {
      onSelectProject(project);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="featured" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-100/80 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-500" />
            <span>Featured Works & Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            5 Core Projects & Case Studies.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            Menampilkan rancangan desain asli di <strong>Figma</strong>, dokumentasi buku <strong>Panduan Aplikasi (PDF SOP)</strong>, dan slide riset <strong>Canva</strong> melalui tombol preview di setiap proyek.
          </p>
        </div>

        {/* Featured Projects Cards */}
        <div className="space-y-12">
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
                className={`group cursor-pointer rounded-[2.5rem] border p-6 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${style.cardBg}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                  {/* Left Column: Project Narrative */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full border ${style.badgeBg}`}
                      >
                        {project.category}
                      </span>
                      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        {project.client} • {project.year}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    {/* Stats Strip */}
                    <div className="grid grid-cols-2 gap-3 py-2">
                      {project.stats.slice(0, 2).map((st, i) => (
                        <div
                          key={i}
                          className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-2xl p-3.5 border border-white/60 dark:border-zinc-700/60 shadow-sm"
                        >
                          <div className={`text-xl sm:text-2xl font-extrabold ${style.accentColor}`}>
                            {st.value}
                          </div>
                          <div className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-200">
                            {st.label}
                          </div>
                          {st.subtext && (
                            <div className="text-[10px] text-zinc-400 dark:text-zinc-400">
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
                          className="text-[11px] font-semibold bg-white/90 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full border border-zinc-200/80 dark:border-zinc-700 shadow-2xs"
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
                          onClick={(e) => handleExternalPreview(e, project.primaryLink.url, project)}
                          className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 shadow-sm hover:shadow-md hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                        >
                          {project.primaryLink.type === 'figma' && <FigmaIcon className="w-3.5 h-3.5" />}
                          {project.primaryLink.type === 'canva' && <CanvaIcon className="w-3.5 h-3.5" />}
                          {project.primaryLink.type === 'pdf' && <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />}
                          <span>{project.primaryLink.label}</span>
                          <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                        </button>
                      )}

                      <div className="inline-flex items-center space-x-1 text-xs font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        <span className="underline underline-offset-4 decoration-purple-300 group-hover:decoration-purple-600">
                          Buka Detail Case Study
                        </span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Preview */}
                  <div className="lg:col-span-6">
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-white dark:bg-zinc-800 border-4 border-white/90 dark:border-zinc-800 group-hover:scale-[1.02]">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center space-x-1.5">
                          <span>Klik untuk Membuka Dokumentasi Lengkap</span>
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
