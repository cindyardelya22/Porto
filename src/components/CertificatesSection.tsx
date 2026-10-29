'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Certificate } from '@/types';
import { useCursor } from '@/context/CursorContext';
import { ArrowUpRight, Award, ExternalLink } from 'lucide-react';

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
    <section id="certificates" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200/80 dark:border-zinc-800 pb-8">
          <div className="space-y-3 max-w-xl">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
              04 / Accreditations & Credentials
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Verified industry credentials &{' '}
              <span className="font-serif italic font-normal text-zinc-600 dark:text-zinc-400">
                official documentation
              </span>
              .
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Official competency degrees, international cybersecurity certifications, and certified enterprise internship documentation. Click any credential to inspect the verified document.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 text-xs font-medium shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeCategory === cat
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold'
                    : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/60 dark:border-zinc-700/60'
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
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
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
              className="group cursor-pointer bg-white/70 dark:bg-zinc-900/60 rounded-xl border border-zinc-200/80 dark:border-zinc-800 overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-300 flex flex-col justify-between focus:outline-hidden focus:ring-2 focus:ring-zinc-400"
            >
              {/* Document Thumbnail Preview */}
              <div className="relative aspect-[16/11] bg-zinc-100 dark:bg-zinc-800/60 overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
                {cert.previewImage || cert.documentUrl ? (
                  <Image
                    src={cert.previewImage || cert.documentUrl!}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                      {cert.credentialId || 'Verified Credential'}
                    </span>
                  </div>
                )}

                {/* Quiet Category Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xs text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-md border border-zinc-200/80 dark:border-zinc-700/80">
                    {cert.category}
                  </span>
                </div>

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-zinc-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="bg-zinc-950/85 text-white font-medium text-xs px-3.5 py-1.5 rounded-md flex items-center space-x-1.5 border border-white/10 backdrop-blur-xs">
                    <span>Inspect Document</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                    <span className="truncate pr-2">{cert.issuer}</span>
                    <span className="shrink-0 text-[11px]">
                      {cert.issueDate.split('(')[0].trim()}
                    </span>
                  </div>

                  <h3 className="font-semibold text-base text-zinc-950 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                {/* Footer: ID & Verification */}
                <div className="space-y-2.5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                  <div className="flex items-center justify-between text-[11px] text-zinc-600 dark:text-zinc-400 font-mono">
                    <span className="truncate pr-2">
                      {cert.credentialId ? `ID: ${cert.credentialId}` : 'Certified Credential'}
                    </span>
                    {cert.verificationUrl && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(cert.verificationUrl, '_blank');
                        }}
                        className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline flex items-center space-x-0.5 cursor-pointer font-sans font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-0.5 text-xs">
                    <span className="inline-flex items-center space-x-1 font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      <span>View Credential</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                    <span className="text-[10px] font-mono text-zinc-600 dark:text-zinc-400 uppercase">
                      {cert.fileType}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
