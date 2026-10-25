'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '@/types';
import { useCursor } from '@/context/CursorContext';
import {
  X,
  CheckCircle2,
  FileText,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon, FigmaIcon, CanvaIcon } from '@/components/Icons';

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const { resetCursor } = useCursor();
  const [activeTab, setActiveTab] = useState<
    'overview' | 'challenge' | 'architecture' | 'flow' | 'results' | 'documentation'
  >('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setActiveTab('overview');
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      resetCursor();
    };
  }, [project, onClose, resetCursor]);

  if (!project) return null;

  const handleLinkClick = (e: React.MouseEvent, type: string, url: string) => {
    if (type === 'pdf' && url.startsWith('#')) {
      e.preventDefault();
      setActiveTab('documentation');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md">
        {/* Backdrop */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl max-h-[90vh] flex flex-col bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-purple-100 dark:border-zinc-800 z-10 overflow-hidden text-zinc-900 dark:text-zinc-100"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 px-5 sm:px-8 py-4 bg-white/95 dark:bg-zinc-900/95 sticky top-0 z-20 backdrop-blur-md">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-bold px-3 py-1 bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 rounded-full">
                {project.category}
              </span>
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 hidden sm:inline-block">
                {project.client} • {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="h-9 w-9 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-5 sm:p-8 lg:p-10 space-y-7 custom-scrollbar">
            {/* Title & Actions */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Action Preview Buttons with Figma, Canva, PDF, and GitHub */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {/* Primary Preview Link */}
                {project.primaryLink && (
                  <a
                    href={project.primaryLink.url}
                    target={project.primaryLink.url.startsWith('#') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    onClick={(e) => handleLinkClick(e, project.primaryLink.type, project.primaryLink.url)}
                    className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-extrabold shadow-md hover:shadow-lg transition-all ${
                      project.primaryLink.type === 'figma'
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-purple-500/25 hover:scale-105'
                        : project.primaryLink.type === 'canva'
                        ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-teal-500/25 hover:scale-105'
                        : project.primaryLink.type === 'pdf'
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-500/25 hover:scale-105'
                        : 'bg-zinc-900 text-white'
                    }`}
                  >
                    {project.primaryLink.type === 'figma' && <FigmaIcon className="w-4 h-4" />}
                    {project.primaryLink.type === 'canva' && <CanvaIcon className="w-4 h-4" />}
                    {project.primaryLink.type === 'pdf' && <FileText className="w-4 h-4" />}
                    {project.primaryLink.type === 'github' && <GithubIcon className="w-4 h-4" />}
                    <span>{project.primaryLink.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {/* Secondary Preview Link */}
                {project.secondaryLink && (
                  <a
                    href={project.secondaryLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2.5 rounded-full text-xs font-bold transition-all border border-zinc-200/80 dark:border-zinc-700"
                  >
                    {project.secondaryLink.type === 'github' && <GithubIcon className="w-3.5 h-3.5" />}
                    {project.secondaryLink.type === 'canva' && <CanvaIcon className="w-3.5 h-3.5" />}
                    {project.secondaryLink.type === 'figma' && <FigmaIcon className="w-3.5 h-3.5" />}
                    <span>{project.secondaryLink.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-full">
                  Role: <strong className="text-zinc-900 dark:text-zinc-200">{project.role}</strong>
                </span>
                <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-full">
                  Timeline: <strong className="text-zinc-900 dark:text-zinc-200">{project.timeline}</strong>
                </span>
              </div>
            </div>

            {/* Showcase Visual */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-purple-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-purple-50/60 dark:bg-zinc-800/60 rounded-2xl border border-purple-100 dark:border-zinc-750">
              {project.stats.map((st, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-purple-700 dark:text-purple-400">
                    {st.value}
                  </div>
                  <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    {st.label}
                  </div>
                  {st.subtext && (
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                      {st.subtext}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tabs Navigation */}
            <div className="flex border-b border-zinc-200 dark:border-zinc-800 overflow-x-auto space-x-2 pb-2">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'bg-purple-600 text-white shadow-sm shadow-purple-500/25'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-300'
                }`}
              >
                Overview
              </button>

              {project.documentationDetails && (
                <button
                  type="button"
                  onClick={() => setActiveTab('documentation')}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                    activeTab === 'documentation'
                      ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/25'
                      : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Application Guide (PDF SOP)</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => setActiveTab('challenge')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'challenge'
                    ? 'bg-purple-600 text-white shadow-sm shadow-purple-500/25'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-300'
                }`}
              >
                The Challenge
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('architecture')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'architecture'
                    ? 'bg-purple-600 text-white shadow-sm shadow-purple-500/25'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-300'
                }`}
              >
                Architecture & Stack
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('flow')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'flow'
                    ? 'bg-purple-600 text-white shadow-sm shadow-purple-500/25'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-300'
                }`}
              >
                Workflow Steps
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('results')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'results'
                    ? 'bg-purple-600 text-white shadow-sm shadow-purple-500/25'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-300'
                }`}
              >
                Verified Results
              </button>
            </div>

            {/* Tab Contents */}
            <div className="space-y-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-zinc-50 dark:bg-zinc-800/60 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-700/60 space-y-3">
                      <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        Key Architecture Deliverables
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                        {project.solution.architecturePoints.map((pt, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-800/60 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-700/60 space-y-3">
                      <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        Technologies Deployed
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((t, i) => (
                          <span
                            key={i}
                            className="text-xs font-semibold bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full shadow-2xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Dedicated Panduan Aplikasi / SOP Documentation Tab */}
              {activeTab === 'documentation' && project.documentationDetails && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 border border-emerald-200 dark:border-emerald-800/60 p-6 rounded-2xl space-y-2">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                      <h3 className="font-extrabold text-base sm:text-lg text-emerald-900 dark:text-emerald-200">
                        {project.documentationDetails.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 font-medium">
                      Official Document: {project.documentationDetails.documentType}
                    </p>
                    {project.documentationDetails.pdfUrl && (
                      <div className="pt-2">
                        <a
                          href={project.documentationDetails.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-2 rounded-full shadow-md shadow-emerald-600/20 hover:scale-102 transition-all"
                        >
                          <FileText className="w-4 h-4" />
                          <span>Open Full PDF in New Tab</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    {project.documentationDetails.sections.map((sec, idx) => (
                      <div
                        key={idx}
                        className="bg-zinc-50 dark:bg-zinc-800/60 rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-700/60 space-y-2.5"
                      >
                        <h4 className="font-extrabold text-sm sm:text-base text-zinc-900 dark:text-white flex items-center space-x-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          <span>{sec.heading}</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {sec.description}
                        </p>
                        {sec.steps && (
                          <div className="pt-2 pl-4 border-l-2 border-emerald-300 dark:border-emerald-700 space-y-1.5">
                            {sec.steps.map((st, sIdx) => (
                              <div key={sIdx} className="text-xs text-zinc-700 dark:text-zinc-300 font-mono">
                                ➔ {st}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'challenge' && (
                <div className="space-y-6">
                  <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {project.challenge.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      Core Obstacles Overcome
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.challenge.bulletPoints.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-700/60 p-4 rounded-xl text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 flex items-start space-x-2.5"
                        >
                          <span className="font-extrabold text-purple-600 dark:text-purple-400">{idx + 1}.</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'architecture' && (
                <div className="space-y-6">
                  <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {project.solution.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.techStack.map((group, i) => (
                      <div key={i} className="bg-zinc-50 dark:bg-zinc-800/60 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-700/60 space-y-2">
                        <h4 className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                          {group.category}
                        </h4>
                        <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                          {group.items.map((it, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400 inline-block" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'flow' && (
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Operational Workflow
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {project.userFlow.map((flow, i) => (
                      <div
                        key={i}
                        className="bg-purple-50/50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/50 p-4 rounded-2xl space-y-2"
                      >
                        <span className="text-xl font-extrabold text-purple-600 dark:text-purple-400 block">
                          {flow.step}
                        </span>
                        <h5 className="font-bold text-sm text-zinc-900 dark:text-white">{flow.title}</h5>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {flow.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'results' && (
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Measurable Outcomes
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.results.map((res, i) => (
                      <div
                        key={i}
                        className="bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 p-5 rounded-2xl space-y-2"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        <h5 className="font-bold text-sm text-zinc-900 dark:text-white">{res.metric}</h5>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {res.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Close */}
            <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4 flex justify-between items-center">
              <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                Cindy Ardelya Portfolio • Politeknik Caltex Riau
              </span>
              <button
                type="button"
                onClick={onClose}
                className="bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-900 text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
