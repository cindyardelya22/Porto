'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  Code2,
  Wrench,
  MonitorPlay,
  Users2,
  Pause,
  Play,
  Briefcase,
  GraduationCap,
  Activity,
} from 'lucide-react';

type TabType = 'kp' | 'mbkm';

const kpPhotos = [
  { id: 1, src: '/images/kp/kp-presentation.jpg', title: 'Internal System Dashboard Presentation' },
  { id: 2, src: '/images/kp/kp-building.jpg', title: 'PTPN IV Regional III Corporate Headquarters' },
  { id: 3, src: '/images/kp/kp-team-meeting.jpg', title: 'Team Coordination & Technical Review Roundtable' },
  { id: 4, src: '/images/kp/kp-workspace.jpg', title: 'Workstation Setup & Dell Staging Preparation' },
  { id: 5, src: '/images/kp/kp-devices.jpg', title: 'Hardware Provisioning & Testing Unit' },
];

const mbkmPhotos = [
  { id: 1, src: '/images/mbkm/mbkm-event-brondolan.jpg', title: 'BRONDOLAN Employee Engagement Event' },
  { id: 2, src: '/images/mbkm/mbkm-team-celebration.jpg', title: 'MBKM Internship Cohort & Team Solidarity' },
  { id: 3, src: '/images/mbkm/mbkm-hybrid-meeting-operator.jpg', title: 'Executive Zoom Hybrid Conference Operator' },
  { id: 4, src: '/images/mbkm/mbkm-boardroom-work.jpg', title: 'Software Engineering in Main Boardroom' },
  { id: 5, src: '/images/mbkm/mbkm-hardware-repair.jpg', title: 'IT Support & Laptop Hardware Maintenance' },
];

const kpActivities = [
  {
    icon: Code2,
    color: 'from-violet-500 to-purple-600',
    bgColor:
      'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-800/50',
    title: 'System Architecture & Engineering',
    description:
      'Architected and engineered internal enterprise systems (Resource & Accommodation Booking, By-Pro digital signing, and plantation GIS mapping).',
  },
  {
    icon: Wrench,
    color: 'from-blue-500 to-indigo-600',
    bgColor:
      'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800/50',
    title: 'IT Support & Device Provisioning',
    description:
      'Conducted hardware unboxing, Windows OS deployment, disk partitioning via PowerShell, staging environment preparation, and office network troubleshooting.',
  },
  {
    icon: MonitorPlay,
    color: 'from-amber-500 to-rose-500',
    bgColor:
      'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-800/50',
    title: 'Event Operations & AV Technical Lead',
    description:
      'Operated audiovisual displays, high-lumen projectors, and live data telemetry dashboards during official corporate presentations and stakeholder sessions.',
  },
  {
    icon: Users2,
    color: 'from-emerald-500 to-teal-600',
    bgColor:
      'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800/50',
    title: 'Cross-Functional Team Collaboration',
    description:
      'Engaged actively in technical roundtables with industrial supervisors and IT directors for business process alignment and system digitalization.',
  },
];

const mbkmActivities = [
  {
    icon: Code2,
    color: 'from-violet-500 to-purple-600',
    bgColor:
      'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-800/50',
    title: 'Software Developer & Engineering',
    description:
      'Engineered internal enterprise software, developed secure database schemas, and implemented cryptographic digital signatures for By-Pro sales contracts.',
  },
  {
    icon: Wrench,
    color: 'from-blue-500 to-indigo-600',
    bgColor:
      'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800/50',
    title: 'Hardware Servicing & IT Infrastructure',
    description:
      'Executed laptop disassembly (motherboard, RAM, SSD, cooling units), hardware diagnostics, OS clean installations, and staff IT troubleshooting.',
  },
  {
    icon: MonitorPlay,
    color: 'from-amber-500 to-rose-500',
    bgColor:
      'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-800/50',
    title: 'Hybrid Meeting & AV Operations',
    description:
      'Operated multi-monitor display controllers, executive Zoom hybrid conferences, audio mixers, and presentation technology in the executive boardroom.',
  },
  {
    icon: Activity,
    color: 'from-emerald-500 to-teal-600',
    bgColor:
      'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800/50',
    title: 'Corporate Events & Team Engagement',
    description:
      'Supported employee community programs such as the corporate "BRONDOLAN PTPN IV" sports gatherings, morning briefings, and departmental teamwork initiatives.',
  },
];

export default function KpSlideshow() {
  const { setCursor, resetCursor } = useCursor();
  const [activeTab, setActiveTab] = useState<TabType>('kp');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Sync active tab with URL hash if loaded or changed
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined') {
        if (window.location.hash === '#mbkm') {
          setActiveTab('mbkm');
          setCurrentIndex(0);
        } else if (window.location.hash === '#kp' || window.location.hash === '#experience') {
          setActiveTab('kp');
          setCurrentIndex(0);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const activePhotos = activeTab === 'kp' ? kpPhotos : mbkmPhotos;
  const activeActivities = activeTab === 'kp' ? kpActivities : mbkmActivities;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % activePhotos.length);
  }, [activePhotos.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + activePhotos.length) % activePhotos.length);
  }, [activePhotos.length]);

  // Autoplay handler
  useEffect(() => {
    if (!isPlaying || isLightboxOpen) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, isLightboxOpen, nextSlide]);

  // Handle keyboard arrow navigation & Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div id="experience" className="space-y-10 scroll-mt-24">
      {/* Anchors for backward compatibility */}
      <div id="kp" className="-mt-24 pt-24" />
      <div id="mbkm" className="-mt-24 pt-24" />

      {/* Section Header & Tab Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200/80 dark:border-zinc-800 pb-6 gap-6">
        <div className="space-y-3 max-w-xl">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
            Field Documentation · PTPN IV Regional III
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-950 dark:text-zinc-50 tracking-tight">
            {activeTab === 'kp'
              ? 'Engineering & Operations at PTPN IV Regional III.'
              : 'Software Developer & IT Support Specialist.'}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {activeTab === 'kp'
              ? 'Visual records from industrial placement at PT Perkebunan Nusantara IV Regional III — internal system architecture, IT staging, and multimedia operations.'
              : 'Certified MBKM internship documentation at PTPN IV Regional III — native mobile development, hardware diagnostics, and executive conference support.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 rounded-lg w-fit shrink-0 font-mono text-xs">
          <button
            type="button"
            onClick={() => {
              setActiveTab('kp');
              setCurrentIndex(0);
            }}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-md transition-colors ${
              activeTab === 'kp'
                ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-100 font-semibold shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100'
            }`}
          >
            <span>Internship (KP)</span>
            <span className="text-[10px] text-zinc-600 dark:text-zinc-400">5</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('mbkm');
              setCurrentIndex(0);
            }}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-md transition-colors ${
              activeTab === 'mbkm'
                ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-100 font-semibold shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100'
            }`}
          >
            <span>MBKM Program</span>
            <span className="text-[10px] text-zinc-600 dark:text-zinc-400">5</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Slideshow Viewport (Left) + Unified Activities Overview (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Slideshow Frame (7 Cols on LG) */}
        <div
          className="lg:col-span-7 space-y-4"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Main Slide Card */}
          <div className="relative w-full h-[380px] sm:h-[460px] md:h-[480px] rounded-xl overflow-hidden bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-center group shadow-sm">
            {/* Animated Photo Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full p-4 flex items-center justify-center z-10"
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src={activePhotos[currentIndex].src}
                    alt={activePhotos[currentIndex].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Top Slide Meta & Controls */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
              <div className="bg-zinc-950/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-mono px-3 py-1.5 rounded-md flex items-center space-x-2">
                <span>PTPN IV Regional III</span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-300">
                  {activeTab === 'kp' ? 'Internship' : 'MBKM'}
                </span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400">
                  {currentIndex + 1} / {activePhotos.length}
                </span>
              </div>

              <div className="flex items-center space-x-1.5">
                {/* Play/Pause Button */}
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
                  className="bg-zinc-950/80 hover:bg-zinc-900 backdrop-blur-md border border-white/10 text-white p-2 rounded-md transition-colors"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>

                {/* Lightbox Fullscreen Button */}
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  title="Expand Fullscreen"
                  className="bg-zinc-950/80 hover:bg-zinc-900 backdrop-blur-md border border-white/10 text-white p-2 rounded-md transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Slide Title Bar */}
            <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
              <div className="bg-zinc-950/85 backdrop-blur-md border border-white/10 text-white text-xs px-3.5 py-2 rounded-md truncate">
                {activePhotos[currentIndex].title}
              </div>
            </div>

            {/* Floating Prev / Next Navigation Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              title="Previous Photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-zinc-950/70 hover:bg-zinc-950 text-white p-2.5 rounded-md transition-colors border border-white/10"
              onMouseEnter={() => setCursor('link')}
              onMouseLeave={resetCursor}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              title="Next Photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-zinc-950/70 hover:bg-zinc-950 text-white p-2.5 rounded-md transition-colors border border-white/10"
              onMouseEnter={() => setCursor('link')}
              onMouseLeave={resetCursor}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="flex items-center justify-between gap-4 pt-1">
            <div className="flex items-center space-x-2 overflow-x-auto py-1 scrollbar-none">
              {activePhotos.map((photo, idx) => (
                <button
                  key={`${activeTab}-${photo.id}`}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-14 h-10 rounded-md overflow-hidden shrink-0 transition-all border ${
                    currentIndex === idx
                      ? 'border-zinc-950 dark:border-white opacity-100 ring-1 ring-zinc-900 dark:ring-white'
                      : 'border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 shrink-0">
              {currentIndex + 1} of {activePhotos.length}
            </div>
          </div>
        </div>

        {/* Unified Activities Overview (5 Cols on LG) */}
        <div className="lg:col-span-5 space-y-6 bg-white/70 dark:bg-zinc-900/60 rounded-xl border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-7">
          <div className="space-y-2">
            <div className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
              {activeTab === 'kp' ? 'Internship Responsibilities' : 'MBKM Responsibilities'}
            </div>
            <h4 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50 leading-snug">
              {activeTab === 'kp'
                ? 'Corporate IT & Systems Support'
                : 'Software Engineering & IT Operations'}
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
              {activeTab === 'kp' ? (
                <>
                  During the industrial placement at <strong>PT Perkebunan Nusantara IV Regional III</strong>, Cindy actively contributed across engineering, IT operations, and corporate event management:
                </>
              ) : (
                <>
                  During the certified MBKM internship at <strong>PT Perkebunan Nusantara IV Regional III</strong>, Cindy carried out responsibilities as a <strong>Programmer</strong> and <strong>IT Support</strong> specialist:
                </>
              )}
            </p>
          </div>

          {/* 4 Key Activity Cards */}
          <div className="space-y-3 pt-1">
            {activeActivities.map((act, aIdx) => {
              const Icon = act.icon;
              return (
                <div
                  key={aIdx}
                  className="rounded-lg p-3.5 border border-zinc-200/70 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40 flex items-start space-x-3 group"
                >
                  <div className="h-8 w-8 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0 text-zinc-700 dark:text-zinc-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-semibold text-xs sm:text-sm text-zinc-950 dark:text-zinc-50">
                      {act.title}
                    </h5>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {act.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="bg-zinc-950 rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl border border-zinc-800 animate-in zoom-in-95 duration-200 flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Controls */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/60 font-mono text-xs">
              <div className="text-zinc-200 flex items-center space-x-2">
                <span className="text-zinc-100 font-semibold">PTPN IV Regional III</span>
                <span className="text-zinc-600">/</span>
                <span className="text-zinc-400">
                  {activeTab === 'kp' ? 'Industrial Internship' : 'Certified Internship (MBKM)'}
                </span>
                <span className="text-zinc-600">/</span>
                <span className="text-zinc-400">{currentIndex + 1} of {activePhotos.length}</span>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black flex items-center justify-center p-4">
              <Image
                src={activePhotos[currentIndex].src}
                alt="Fullscreen Documentation View"
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />

              {/* Prev / Next within Modal */}
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-zinc-900 p-3 rounded-full shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-zinc-900 p-3 rounded-full shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
