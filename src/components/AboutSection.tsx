'use client';

import React from 'react';
import Image from 'next/image';
import { useCursor } from '@/context/CursorContext';
import { ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="about" className="py-20 sm:py-24 relative scroll-mt-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20 sm:space-y-24">
        {/* Narrative & Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          {/* Profile Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <Image
                src="/images/profile.jpg"
                alt="Cindy Ardelya"
                fill
                sizes="(max-width: 640px) 160px, 192px"
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-100">Cindy Ardelya</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Informatics Engineering Graduate
                </p>
              </div>

              <div className="text-xs space-y-1 text-zinc-600 dark:text-zinc-400 font-normal border-t border-zinc-200/80 dark:border-zinc-800/80 pt-3">
                <p>Politeknik Caltex Riau (PCR)</p>
                <p>PT Perkebunan Nusantara IV (Internship & MBKM)</p>
                <p>Pekanbaru, Riau, Indonesia</p>
              </div>

              <div className="pt-2">
                <a
                  href="mailto:cindyardelya@gmail.com"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <span>cindyardelya@gmail.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>

          {/* Narrative Story */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-medium text-zinc-400 dark:text-zinc-500">
                02 / ABOUT & BACKGROUND
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.2]">
                Turning operational challenges into{' '}
                <span className="font-serif italic font-normal text-zinc-700 dark:text-zinc-300">
                  dependable, human-centered software.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                I recently graduated with a degree in Informatics Engineering from Politeknik Caltex Riau. Throughout my academic curriculum and professional placements, I&apos;ve focused on writing clear, dependable code, designing intuitive user flows, and shipping tools that make everyday workflows simpler for real teams.
              </p>
              <p>
                During my certified MBKM program and industrial internship at <strong className="font-semibold text-zinc-900 dark:text-zinc-100">PT Perkebunan Nusantara (PTPN) IV Regional III</strong>, I engineered two flagship corporate solutions: the <strong className="font-semibold text-zinc-900 dark:text-zinc-100">By-Pro</strong> native Android sales contract and cryptographic signing application, and <strong className="font-semibold text-zinc-900 dark:text-zinc-100">AgriSmart</strong>, an interactive web GIS platform for soil nutrient monitoring integrated with a Gemini AI advisor.
              </p>
              <p>
                My approach extends beyond coding in isolation. Working in a production enterprise environment taught me the value of thorough documentation — authoring official Standard Operating Procedures (SOP), configuring workstations and OS deployments, and operating live telemetry and audiovisual infrastructure for executive conferences.
              </p>
              <p>
                I also hold international cybersecurity credentials in <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Ethical Hacking Essentials (EHE)</strong> and <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Network Defense Essentials (NDE)</strong> from EC-Council, alongside networking certifications from Cisco and MikroTik — ensuring data validation, integrity, and security remain foundational to everything I build.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Capabilities Matrix (Scannable, Architectural, No Nested Boxes) */}
        <div className="space-y-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-medium text-zinc-400 dark:text-zinc-500">
                03 / TECHNICAL REPERTOIRE
              </span>
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-950 dark:text-zinc-50">
                Skills & Technical Competencies
              </h3>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm">
              Languages, frameworks, and tools applied across production enterprise projects and academic research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Column 1: Mobile */}
            <div className="space-y-4">
              <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">A / MOBILE ENGINEERING</span>
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
                  Native Android (Kotlin)
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Modern reactive Android apps with offline caching and clean architecture.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-300">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Core Architecture</span>
                  <span className="text-zinc-500 dark:text-zinc-400">Kotlin, Jetpack Compose, Coroutines, Flow, MVVM</span>
                </div>
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Persistence & Network</span>
                  <span className="text-zinc-500 dark:text-zinc-400">Room Database, Retrofit, OkHttp, Repository Pattern</span>
                </div>
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Shipped Deliverables</span>
                  <span className="text-zinc-500 dark:text-zinc-400">By-Pro Digital Contract App, MindCare Android</span>
                </div>
              </div>
            </div>

            {/* Column 2: Web & GIS */}
            <div className="space-y-4">
              <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">B / FULLSTACK & SPATIAL</span>
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
                  Web & GIS Platforms
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Enterprise backends, responsive dashboards, and interactive map systems.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-300">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Backend & Frameworks</span>
                  <span className="text-zinc-500 dark:text-zinc-400">Laravel, Livewire, PHP, RESTful API Design, MySQL</span>
                </div>
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Frontend & Mapping</span>
                  <span className="text-zinc-500 dark:text-zinc-400">Tailwind CSS, JavaScript, Leaflet GIS, GeoJSON Layers</span>
                </div>
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Shipped Deliverables</span>
                  <span className="text-zinc-500 dark:text-zinc-400">AgriSmart GIS Portal, Alumna Islamic School Monitoring Web</span>
                </div>
              </div>
            </div>

            {/* Column 3: Security & AI */}
            <div className="space-y-4">
              <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">C / SECURITY & SYSTEMS</span>
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
                  Applied Security & AI
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Certified defense standards, system diagnostics, and machine learning research.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-300">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Security & Infrastructure</span>
                  <span className="text-zinc-500 dark:text-zinc-400">EC-Council EHE & NDE, Cisco NetAcad, RouterOS MikroTik</span>
                </div>
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Data & Computer Vision</span>
                  <span className="text-zinc-500 dark:text-zinc-400">Python, TensorFlow, CNN Image Classification, Google Gemini API</span>
                </div>
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Research & Accreditation</span>
                  <span className="text-zinc-500 dark:text-zinc-400">Malaria Cell CNN (96.8% Acc), BNSP National Programmer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
