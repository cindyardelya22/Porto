'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Certificate } from '@/types';
import {
  X,
  ExternalLink,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  CheckCircle2,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Building2,
  Calendar,
  Hash,
} from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [hasError, setHasError] = useState(false);
  const [viewMode, setViewMode] = useState<'image' | 'pdf'>('image');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setZoomLevel(1);
      setHasError(false);
      setViewMode(certificate.fileType === 'pdf' && !certificate.previewImage ? 'pdf' : 'image');
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/75 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-modal-title"
      >
        {/* Backdrop (Click to close) */}
        <div
          className="absolute inset-0"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 z-10 overflow-hidden text-zinc-900 dark:text-zinc-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800 px-4 sm:px-6 py-3.5 bg-zinc-50/95 dark:bg-zinc-900/95 backdrop-blur-md shrink-0">
            <div className="flex items-center space-x-2.5 min-w-0 pr-2">
              <span className="inline-flex items-center space-x-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/50 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{certificate.category}</span>
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono hidden sm:inline-block truncate">
                {certificate.fileName || certificate.credentialId || 'Verified Credential'}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              {/* View Mode Toggle (Preview vs Embedded PDF) */}
              {certificate.documentUrl?.endsWith('.pdf') && certificate.previewImage && !hasError && (
                <div className="flex items-center bg-zinc-200/80 dark:bg-zinc-800 p-0.5 rounded-full text-[11px] font-semibold border border-zinc-300/50 dark:border-zinc-700">
                  <button
                    type="button"
                    onClick={() => setViewMode('image')}
                    className={`px-2.5 py-0.5 rounded-full transition-colors ${
                      viewMode === 'image'
                        ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-2xs font-bold'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    Image
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('pdf')}
                    className={`px-2.5 py-0.5 rounded-full transition-colors ${
                      viewMode === 'pdf'
                        ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-2xs font-bold'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    PDF
                  </button>
                </div>
              )}

              {/* Zoom Controls (when viewing image) */}
              {viewMode === 'image' && !hasError && (
                <div className="hidden sm:flex items-center space-x-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full p-1 shadow-2xs">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 0.75}
                    title="Zoom Out"
                    aria-label="Zoom Out"
                    className="p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 disabled:opacity-40 transition-colors"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-mono px-1.5 min-w-[40px] text-center font-semibold text-zinc-700 dark:text-zinc-300">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 2.5}
                    title="Zoom In"
                    aria-label="Zoom In"
                    className="p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 disabled:opacity-40 transition-colors"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  {zoomLevel !== 1 && (
                    <button
                      type="button"
                      onClick={handleResetZoom}
                      title="Reset Zoom"
                      aria-label="Reset Zoom"
                      className="p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close certificate preview"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-zinc-200/80 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Document Viewer Viewport */}
          <div className="relative flex-1 bg-zinc-950 flex items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[60vh] overflow-auto p-4 sm:p-6 custom-scrollbar">
            {!certificate.documentUrl && !certificate.previewImage ? (
              <div className="text-center p-8 space-y-3 max-w-md bg-zinc-900 rounded-2xl border border-zinc-800 text-zinc-200">
                <ShieldCheck className="w-12 h-12 text-amber-400 mx-auto" />
                <h4 className="font-bold text-base text-white">Verified Credential Record</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Official credential on record with {certificate.issuer}.
                  {certificate.credentialId && (
                    <> Identifier: <code className="text-amber-300">{certificate.credentialId}</code>.</>
                  )}
                  {' '}The physical document scan is being scheduled for digital preview upload.
                </p>
                {certificate.verificationUrl && (
                  <div className="pt-2">
                    <a
                      href={certificate.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verify with Issuing Body</span>
                    </a>
                  </div>
                )}
              </div>
            ) : hasError ? (
              <div className="text-center p-8 space-y-3 max-w-md bg-zinc-900 rounded-2xl border border-zinc-800 text-zinc-200">
                <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto" />
                <h4 className="font-bold text-base text-white">Document Preview Unavailable</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  The document file <code className="text-amber-300">{certificate.fileName || 'file'}</code> could not be loaded directly. You can still download the file or open it in a separate tab.
                </p>
                {certificate.documentUrl && (
                  <div className="pt-2">
                    <a
                      href={certificate.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Try Opening Direct URL</span>
                    </a>
                  </div>
                )}
              </div>
            ) : viewMode === 'pdf' && certificate.documentUrl?.endsWith('.pdf') ? (
              <div className="w-full h-full min-h-[450px]">
                <iframe
                  src={`${certificate.documentUrl}#toolbar=0`}
                  title={certificate.title}
                  className="w-full h-full rounded-xl border border-zinc-800 bg-zinc-900"
                />
              </div>
            ) : (
              <div
                className="relative transition-transform duration-200 ease-out flex items-center justify-center"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'center center',
                }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-zinc-800/80 bg-zinc-900 max-w-full">
                  <Image
                    src={certificate.previewImage || certificate.documentUrl!}
                    alt={certificate.title}
                    width={1400}
                    height={990}
                    className="w-auto max-h-[54vh] object-contain"
                    priority
                    onError={() => setHasError(true)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Details & Action Controls Footer */}
          <div className="p-4 sm:p-6 bg-white dark:bg-zinc-900 border-t border-zinc-200/80 dark:border-zinc-800 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Certificate Metadata */}
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <h3
                    id="certificate-modal-title"
                    className="text-base sm:text-lg md:text-xl font-extrabold text-zinc-900 dark:text-white"
                  >
                    {certificate.title}
                  </h3>
                  {certificate.credentialId && (
                    <span className="inline-flex items-center space-x-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      <Hash className="w-3 h-3 text-zinc-400" />
                      <span>ID: {certificate.credentialId}</span>
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                  <span className="flex items-center space-x-1">
                    <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{certificate.issuer}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Issued: {certificate.issueDate}</span>
                  </span>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
                  {certificate.description}
                </p>
              </div>

              {/* Action Buttons: Open, Download, Verify */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                {/* Official Verification Link (if available) */}
                {certificate.verificationUrl && (
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Verify Credential</span>
                  </a>
                )}

                {/* Open in New Tab & Download (when documentUrl available) */}
                {certificate.documentUrl && (
                  <>
                    <a
                      href={certificate.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 shadow-xs hover:shadow-md transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in New Tab</span>
                    </a>

                    <a
                      href={certificate.documentUrl}
                      download={certificate.fileName || 'certificate'}
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs hover:shadow-md transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download File</span>
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Skills Tag Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-zinc-100 dark:border-zinc-800/80">
              <span className="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 mr-1">
                Verified Competencies:
              </span>
              {certificate.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2.5 py-0.5 rounded-full border border-zinc-200/60 dark:border-zinc-700/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
