'use client';

import React from 'react';
import { Award, ShieldCheck, Network, Code2, Building2, Briefcase, CheckCircle2, FileCheck, Lock, Languages } from 'lucide-react';
import { certificationsData, CertificationItem } from '@/data/certifications';
import { useCursor } from '@/context/CursorContext';

export default function CertificationsSection() {
  const { setCursor, resetCursor } = useCursor();

  const getIconAndStyle = (type: CertificationItem['iconType']) => {
    switch (type) {
      case 'code':
        return {
          icon: <Code2 className="w-5 h-5 text-amber-700 dark:text-amber-400" />,
          boxStyle: 'bg-amber-50 dark:bg-amber-950/60 border border-amber-200/80 dark:border-amber-900/40',
          badgeStyle: 'text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 border-amber-200/70 dark:border-amber-900/40',
        };
      case 'lock':
        return {
          icon: <Lock className="w-5 h-5 text-teal-700 dark:text-teal-400" />,
          boxStyle: 'bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-900/40',
          badgeStyle: 'text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 border-teal-200/70 dark:border-teal-900/40',
        };
      case 'network':
        return {
          icon: <Network className="w-5 h-5 text-stone-700 dark:text-stone-300" />,
          boxStyle: 'bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700',
          badgeStyle: 'text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800/80 border-stone-200 dark:border-stone-700',
        };
      case 'shield':
        return {
          icon: <ShieldCheck className="w-5 h-5 text-teal-700 dark:text-teal-400" />,
          boxStyle: 'bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-900/40',
          badgeStyle: 'text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 border-teal-200/70 dark:border-teal-900/40',
        };
      case 'languages':
        return {
          icon: <Languages className="w-5 h-5 text-amber-700 dark:text-amber-400" />,
          boxStyle: 'bg-amber-50 dark:bg-amber-950/60 border border-amber-200/80 dark:border-amber-900/40',
          badgeStyle: 'text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 border-amber-200/70 dark:border-amber-900/40',
        };
      case 'building':
        return {
          icon: <Building2 className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />,
          boxStyle: 'bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-900/40',
          badgeStyle: 'text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200/70 dark:border-emerald-900/40',
        };
      case 'briefcase':
        return {
          icon: <Briefcase className="w-5 h-5 text-stone-700 dark:text-stone-300" />,
          boxStyle: 'bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700',
          badgeStyle: 'text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800/80 border-stone-200 dark:border-stone-700',
        };
      default:
        return {
          icon: <Award className="w-5 h-5 text-amber-700 dark:text-amber-400" />,
          boxStyle: 'bg-amber-50 dark:bg-amber-950/60 border border-amber-200/80 dark:border-amber-900/40',
          badgeStyle: 'text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 border-amber-200/70 dark:border-amber-900/40',
        };
    }
  };

  return (
    <div id="certifications" className="space-y-8 sm:space-y-10 pt-14 sm:pt-18 border-t border-zinc-200/80 dark:border-zinc-800/80">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-200/70 dark:border-amber-800/50">
          <Award className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
          <span>Verified Credentials</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Certifications & Accreditations.
        </h3>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
          National professional competency, international networking credentials, global cybersecurity, English language proficiency, and corporate enterprise certifications.
        </p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {certificationsData.map((cert) => {
          const { icon, boxStyle, badgeStyle } = getIconAndStyle(cert.iconType);

          return (
            <div
              key={cert.id}
              className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group"
              onMouseEnter={() => setCursor('explore')}
              onMouseLeave={resetCursor}
            >
              <div className="space-y-4">
                {/* Header with Icon and Category Tag */}
                <div className="flex items-start justify-between gap-3">
                  <div className={`h-11 w-11 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${boxStyle}`}>
                    {icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeStyle}`}>
                    {cert.category}
                  </span>
                </div>

                {/* Title & Organization */}
                <div>
                  <h4 className="font-extrabold text-base sm:text-lg text-zinc-900 dark:text-white leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
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
                  <span className={`inline-flex items-center space-x-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                    cert.iconType === 'languages' || cert.iconType === 'code'
                      ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border-amber-200/70 dark:border-amber-800/50'
                      : 'bg-teal-50 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300 border-teal-200/70 dark:border-teal-800/50'
                  }`}>
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
          );
        })}
      </div>
    </div>
  );
}
