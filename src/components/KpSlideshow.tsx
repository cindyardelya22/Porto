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
  { id: 1, src: '/images/kp/kp-presentation.jpg', title: 'Presentasi Sistem Dashboard Internal' },
  { id: 2, src: '/images/kp/kp-building.jpg', title: 'Gedung Kantor Pusat PTPN IV Regional III' },
  { id: 3, src: '/images/kp/kp-team-meeting.jpg', title: 'Koordinasi Tim & Review Teknis Meja Bundar' },
  { id: 4, src: '/images/kp/kp-workspace.jpg', title: 'Setup Workstation & Penyiapan Staging Dell' },
  { id: 5, src: '/images/kp/kp-devices.jpg', title: 'Hardware Provisioning & Testing Unit' },
];

const mbkmPhotos = [
  { id: 1, src: '/images/mbkm/mbkm-event-brondolan.jpg', title: 'Partisipasi Acara BRONDOLAN Karyawan PTPN IV' },
  { id: 2, src: '/images/mbkm/mbkm-team-celebration.jpg', title: 'Kebersamaan & Solidaritas Tim Magang MBKM' },
  { id: 3, src: '/images/mbkm/mbkm-hybrid-meeting-operator.jpg', title: 'Operator Display Zoom Hybrid Meeting' },
  { id: 4, src: '/images/mbkm/mbkm-boardroom-work.jpg', title: 'Programming & Analisis Data di Ruang Rapat Utama' },
  { id: 5, src: '/images/mbkm/mbkm-hardware-repair.jpg', title: 'IT Support & Hardware Disassembly Laptop' },
];

const kpActivities = [
  {
    icon: Code2,
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-800/50',
    title: 'Pengembangan & Pembuatan Sistem',
    description:
      'Merancang arsitektur dan membangun sistem internal perusahaan (Dashboard Akomodasi & Peminjaman, By-Pro digital signing, dan GIS pemetaan perkebunan).',
  },
  {
    icon: Wrench,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800/50',
    title: 'IT Support & Device Provisioning',
    description:
      'Melakukan unboxing, konfigurasi OS Windows, partisi disk via PowerShell, penyiapan environment staging, serta troubleshooting hardware dan jaringan kantor.',
  },
  {
    icon: MonitorPlay,
    color: 'from-amber-500 to-rose-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-800/50',
    title: 'Operator Acara & Teknis Multimedia',
    description:
      'Bertindak sebagai operator teknis display audio-visual, proyektor, serta pemantauan dashboard langsung pada kegiatan resmi dan presentasi korporat.',
  },
  {
    icon: Users2,
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800/50',
    title: 'Kolaborasi & Koordinasi Tim',
    description:
      'Terlibat aktif dalam rapat meja bundar bersama pembimbing industri dan divisi TI untuk penyelarasan proses bisnis dan validasi sistem digitalisasi.',
  },
];

const mbkmActivities = [
  {
    icon: Code2,
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-800/50',
    title: 'Programmer & Software Engineering',
    description:
      'Mengembangkan solusi perangkat lunak internal perusahaan, merancang arsitektur database, dan mengimplementasikan alur digitalisasi sistem kontrak By-Pro.',
  },
  {
    icon: Wrench,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800/50',
    title: 'Hardware Maintenance & IT Support',
    description:
      'Melakukan pembongkaran unit laptop (motherboard, RAM, SSD, kipas pendingin), diagnosis kendala perangkat, instalasi sistem, dan pemeliharaan teknis perangkat staf.',
  },
  {
    icon: MonitorPlay,
    color: 'from-amber-500 to-rose-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-800/50',
    title: 'Operator Acara & Hybrid Meeting Setup',
    description:
      'Mengoperasikan sistem display multi-monitor, integrasi kamera video conference Zoom hybrid, audio mixer, dan proyektor di ruang rapat pimpinan direksi.',
  },
  {
    icon: Activity,
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800/50',
    title: 'Partisipasi Acara Korporat & Gathering',
    description:
      'Terlibat aktif dan mendampingi kelancaran kegiatan bersama karyawan, seperti olahraga bersama "BRONDOLAN PTPN IV", briefing tim, dan kebersamaan rekan kerja.',
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
        } else if (window.location.hash === '#kp') {
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
    <div id="kp" className="space-y-10 scroll-mt-24">
      {/* Anchor for MBKM */}
      <div id="mbkm" className="-mt-24 pt-24" />

      {/* Section Header & Tab Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-purple-100 pb-6 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {activeTab === 'kp'
                ? 'Dokumentasi Kerja Praktik (KP)'
                : 'Dokumentasi Magang Bersertifikat (MBKM)'}
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            {activeTab === 'kp'
              ? 'Aktivitas Nyata di PTPN IV Regional III.'
              : 'Peran Programmer & IT Support di MBKM.'}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-500 max-w-xl">
            {activeTab === 'kp'
              ? 'Dokumentasi visual pengalaman Kerja Praktik industri di PT Perkebunan Nusantara IV Regional III — mencakup pengembangan sistem, IT Support, hingga operator teknis acara.'
              : 'Dokumentasi pengalaman program MBKM di PTPN IV Regional III — menjalankan peran ganda sebagai programmer aplikasi internal, teknisi IT support hardware laptop, dan operator acara.'}
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex items-center p-1.5 bg-gradient-to-r from-purple-50 via-pink-50 to-amber-50 border border-purple-100 rounded-2xl w-fit shadow-2xs shrink-0">
          <button
            type="button"
            onClick={() => {
              setActiveTab('kp');
              setCurrentIndex(0);
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${activeTab === 'kp'
                ? 'bg-white text-purple-700 shadow-md shadow-purple-500/10 scale-102'
                : 'text-zinc-600 hover:text-zinc-900'
              }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-purple-600" />
            <span>Kerja Praktik (KP)</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${activeTab === 'kp' ? 'bg-purple-100 text-purple-700' : 'bg-zinc-200/70 text-zinc-600'
                }`}
            >
              5 Foto
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('mbkm');
              setCurrentIndex(0);
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${activeTab === 'mbkm'
                ? 'bg-white text-purple-700 shadow-md shadow-purple-500/10 scale-102'
                : 'text-zinc-600 hover:text-zinc-900'
              }`}
          >
            <GraduationCap className="w-4 h-4 text-pink-600" />
            <span>Magang MBKM</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${activeTab === 'mbkm' ? 'bg-purple-100 text-purple-700' : 'bg-zinc-200/70 text-zinc-600'
                }`}
            >
              5 Foto
            </span>
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
          <div className="relative w-full h-[380px] sm:h-[460px] md:h-[500px] rounded-[2rem] overflow-hidden bg-zinc-950 shadow-2xl shadow-purple-500/10 border border-zinc-800 flex items-center justify-center group">
            {/* Ambient Blurred Colored Glow from Active Slide */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 pointer-events-none"
              >
                <Image
                  src={activePhotos[currentIndex].src}
                  alt="Backdrop ambient glow"
                  fill
                  sizes="100vw"
                  className="object-cover blur-3xl scale-125"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80 pointer-events-none z-10" />

            {/* Animated Photo Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="relative w-full h-full p-4 sm:p-6 flex items-center justify-center z-10"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                  <Image
                    src={activePhotos[currentIndex].src}
                    alt={activePhotos[currentIndex].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Top Slide Badge & Controls */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center space-x-2 shadow-lg">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>PTPN IV Regional III</span>
                <span className="text-white/40">•</span>
                <span className="text-purple-300 font-semibold uppercase">
                  {activeTab === 'kp' ? 'Kerja Praktik' : 'Magang MBKM'}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-emerald-300">
                  {currentIndex + 1} / {activePhotos.length}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {/* Play/Pause Button */}
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  title={isPlaying ? 'Jeda Slideshow' : 'Putar Slideshow'}
                  className="bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/10 text-white p-2 rounded-full transition-all shadow-lg hover:scale-105 active:scale-95"
                >
                  {isPlaying ? <Pause className="w-4 h-4 text-emerald-400" /> : <Play className="w-4 h-4 text-white" />}
                </button>

                {/* Lightbox Fullscreen Button */}
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  title="Perbesar Foto"
                  className="bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/10 text-white p-2 rounded-full transition-all shadow-lg hover:scale-105 active:scale-95"
                >
                  <Maximize2 className="w-4 h-4 text-purple-300" />
                </button>
              </div>
            </div>

            {/* Floating Prev / Next Navigation Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              title="Foto Sebelumnya"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-zinc-900 p-2.5 sm:p-3 rounded-full shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-90"
              onMouseEnter={() => setCursor('link')}
              onMouseLeave={resetCursor}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              title="Foto Selanjutnya"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-zinc-900 p-2.5 sm:p-3 rounded-full shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-90"
              onMouseEnter={() => setCursor('link')}
              onMouseLeave={resetCursor}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Thumbnails Strip & Dot Indicators */}
          <div className="flex items-center justify-between gap-4 pt-1">
            {/* Clickable Mini Thumbnails */}
            <div className="flex items-center space-x-2.5 overflow-x-auto py-1 scrollbar-none">
              {activePhotos.map((photo, idx) => (
                <button
                  key={`${activeTab}-${photo.id}`}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-xl overflow-hidden shrink-0 transition-all duration-300 border-2 ${currentIndex === idx
                      ? 'border-purple-600 scale-105 shadow-md shadow-purple-500/20'
                      : 'border-transparent opacity-60 hover:opacity-100'
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

            {/* Indicator Dots */}
            <div className="flex items-center space-x-1.5 shrink-0">
              {activePhotos.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Pindah ke foto ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx
                      ? 'w-6 bg-gradient-to-r from-purple-600 to-pink-500'
                      : 'w-2 bg-zinc-200 hover:bg-zinc-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Unified Activities Overview (5 Cols on LG) */}
        <div className="lg:col-span-5 space-y-5 bg-gradient-to-br from-purple-50/70 via-white to-pink-50/70 rounded-[2rem] border border-purple-100 p-6 sm:p-8 shadow-sm">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-purple-700 uppercase tracking-wider bg-purple-100/70 px-3 py-1 rounded-full inline-block">
              {activeTab === 'kp' ? 'Peran & Kontribusi KP' : 'Peran & Kontribusi MBKM'}
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-zinc-900 leading-snug">
              {activeTab === 'kp'
                ? 'Rangkaian Pengalaman Nyata di Lingkungan Korporat'
                : 'Programmer, IT Support, & Pendukung Acara'}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-1">
              {activeTab === 'kp' ? (
                <>
                  Selama menjalani Kerja Praktik (KP) di <strong>PT Perkebunan Nusantara IV (PTPN IV) Regional III</strong>, Cindy berkontribusi aktif menjalankan beragam tugas teknis dan operasional di divisi Teknologi Informasi:
                </>
              ) : (
                <>
                  Pada program Magang MBKM di <strong>PT Perkebunan Nusantara IV (PTPN IV) Regional III</strong>, Cindy mengemban tanggung jawab komprehensif sebagai <strong>Programmer</strong> sekaligus <strong>IT Support</strong>, serta aktif mendampingi jalannya berbagai acara resmi perusahaan:
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
                  className="bg-white/90 rounded-2xl p-4 border border-purple-100/80 shadow-2xs hover:shadow-md transition-all duration-200 flex items-start space-x-3.5 group"
                >
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border ${act.bgColor} group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-extrabold text-xs sm:text-sm text-zinc-900">
                      {act.title}
                    </h5>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
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
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/60">
              <div className="text-white text-xs sm:text-sm font-bold flex items-center space-x-2">
                <span className="bg-purple-600 px-2.5 py-0.5 rounded-full text-xs">PTPN IV Regional III</span>
                <span className="text-zinc-400">
                  {activeTab === 'kp' ? 'Dokumentasi Kerja Praktik (KP)' : 'Dokumentasi Magang MBKM'}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-emerald-400">Foto {currentIndex + 1} / {activePhotos.length}</span>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black flex items-center justify-center p-4">
              <Image
                src={activePhotos[currentIndex].src}
                alt="Dokumentasi Full View"
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
