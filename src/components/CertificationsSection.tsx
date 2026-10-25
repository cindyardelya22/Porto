'use client';

import React from 'react';
import { Award, ShieldCheck, Network, Code2, Building2, Briefcase, CheckCircle2, FileCheck } from 'lucide-react';
import { certificationsData, CertificationItem } from '@/data/certifications';
import { useCursor } from '@/context/CursorContext';

export default function CertificationsSection() {
  const { setCursor, resetCursor } = useCursor();

  const getIcon = (type: CertificationItem['iconType']) => {
    switch (type) {
      case 'code':
        return <Code2 className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />;
      case 'network':
        return <Network className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />;
      case 'building':
        return <Building2 className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />;
      case 'briefcase':
        return <Briefcase className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />;
      default:
        return <Award className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />;
    }
  };

  return (
    <div id="certifications" className="space-y-8 sm:space-y-10 pt-14 sm:pt-18 border-t border-zinc-200/80 dark:border-zinc-800/80">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider border border-zinc-200/60 dark:border-zinc-700">
          <Award className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-300" />
          <span>Verified Credentials</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Certifications & Accreditations.
        </h3>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
          National professional competency, international networking credentials, cybersecurity, and corporate enterprise certifications.
        </p>
      </div>

      {/* Grid of 5 Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group"
            onMouseEnter={() => setCursor('explore')}
            onMouseLeave={resetCursor}
          >
            <div className="space-y-4">
              {/* Header with Icon and Category Tag */}
              <div className="flex items-start justify-between gap-3">
                <div className="h-11 w-11 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {getIcon(cert.iconType)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700">
                  {cert.category}
                </span>
              </div>

              {/* Title & Organization */}
              <div>
                <h4 className="font-extrabold text-base sm:text-lg text-zinc-900 dark:text-white leading-snug group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-300 mt-1">
                  {cert.issuer}
                </p>
                {cert.organization && cert.organization !== cert.issuer && (
                  <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
                    {cert.organization}
                  </p>
                )}
              </div>

              {/* Status & Credential Pill */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center space-x-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/50">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{cert.status}</span>
                </span>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                  {cert.date}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {cert.description}
              </p>
            </div>

            {/* Credential ID and Competencies Tags */}
            <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
              {cert.credentialId && (
                <div className="flex items-center space-x-1.5 text-[11px] text-zinc-400 dark:text-zinc-500 font-mono">
                  <FileCheck className="w-3 h-3 shrink-0" />
                  <span className="truncate">{cert.credentialId}</span>
                </div>
              )}
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-zinc-50 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
