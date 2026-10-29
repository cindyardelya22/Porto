'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Certificate } from '@/types';
import { useCursor } from '@/context/CursorContext';
import {
  Award,
  ExternalLink,
  ShieldCheck,
  Building2,
  Calendar,
  Hash,
  Eye,
  CheckCircle2,
} from 'lucide-react';

interface CertificatesSectionProps {
  certificates: Certificate[];
  onSelectCertificate: (cert: Certificate) => void;
}

export default function CertificatesSection({
  certificates,
  onSelectCertificate,
}: CertificatesSectionProps) {
  const { setCursor, resetCursor } = useCursor();
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'Professional Certifications',
    'Technical Certifications',
    'Corporate Credentials',
  ];

  const filteredCertificates = certificates.filter((cert) => {
    if (activeCategory === 'ALL') return true;
    return cert.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section id="certificates" className="py-16 sm:py-20 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200/80 dark:border-zinc-800 pb-8">
          <div className="space-y-2.5 max-w-xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider border border-zinc-200/60 dark:border-zinc-700">
              <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>Credentials & Official Documentation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Certifications & Credentials.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Official industry certifications, technical qualifications, and certified enterprise internship documentation. Click any credential card to view, zoom, and download the verified document.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 text-xs font-semibold shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-full transition-all ${
                  activeCategory === cat
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold shadow-xs'
                    : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-700/80'
                }`}
              >
                {cat === 'ALL' ? 'All Credentials' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              onClick={() => onSelectCertificate(cert)}
              onMouseEnter={() => setCursor('explore', 'PREVIEW')}
              onMouseLeave={resetCursor}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCertificate(cert);
                }
              }}
              className="group cursor-pointer bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-black/[0.04] dark:hover:shadow-black/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {/* Card Thumbnail Container */}
              <div className="relative aspect-[16/11] bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800/80 overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
                {cert.previewImage || cert.documentUrl ? (
                  <Image
                    src={cert.previewImage || cert.documentUrl!}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700 flex items-center justify-center shadow-xs text-amber-600 dark:text-amber-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                      {cert.credentialId || 'Verified Credential'}
                    </span>
                  </div>
                )}

                {/* Category Pill Over Image */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-zinc-800 dark:text-zinc-200 px-2.5 py-1 rounded-full shadow-2xs border border-white/60 dark:border-zinc-700 flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                    <span>{cert.category}</span>
                  </span>
                </div>

                {/* Interactive Hover Overlay with "View Certificate" CTA */}
                <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 transform translate-y-2 group-hover:translate-y-0 transition-transform border border-zinc-200 dark:border-zinc-700">
                    <Eye className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>View Certificate</span>
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    <span className="flex items-center space-x-1 truncate pr-2">
                      <Building2 className="w-3.5 h-3.5 shrink-0 text-zinc-400" />
                      <span className="truncate">{cert.issuer}</span>
                    </span>
                    <span className="flex items-center space-x-1 shrink-0 text-[11px]">
                      <Calendar className="w-3 h-3 text-zinc-400" />
                      <span>{cert.issueDate.split('(')[0].trim()}</span>
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Info: Credential ID & Competencies */}
                <div className="space-y-3 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  {cert.credentialId && (
                    <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                      <span className="flex items-center space-x-1 font-mono">
                        <Hash className="w-3 h-3 text-zinc-400" />
                        <span>ID: {cert.credentialId}</span>
                      </span>
                      {cert.verificationUrl && (
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(cert.verificationUrl, '_blank');
                          }}
                          className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline flex items-center space-x-0.5 cursor-pointer font-semibold text-zinc-600 dark:text-zinc-300"
                        >
                          <span>Verify</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </span>
                      )}
                    </div>
                  )}

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2.5 py-0.5 rounded-full border border-transparent dark:border-zinc-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 px-1 py-0.5">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Card Action Link */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="inline-flex items-center space-x-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:underline">
                      <span>Inspect Document</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                    <span className="text-[10px] font-mono font-medium text-zinc-400 dark:text-zinc-500 uppercase">
                      {cert.fileType}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
