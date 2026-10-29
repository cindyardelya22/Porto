'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import CertificatesSection from '@/components/CertificatesSection';
import CertificateModal from '@/components/CertificateModal';
import ExperienceSection from '@/components/ExperienceSection';
import WorksArchive from '@/components/WorksArchive';
import AboutSection from '@/components/AboutSection';
import ContactFooter from '@/components/ContactFooter';
import CaseStudyModal from '@/components/CaseStudyModal';
import { featuredProjects } from '@/data/projects';
import { archiveProjects } from '@/data/archive';
import { certificatesData } from '@/data/certificates';
import { CaseStudy, Certificate } from '@/types';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const handleOpenCaseStudy = (project: CaseStudy) => {
    setSelectedProject(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
  };

  const handleOpenCertificate = (cert: Certificate) => {
    setSelectedCertificate(cert);
  };

  const handleCloseCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <main className="relative min-h-screen bg-[#fafaf9] dark:bg-[#111215] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section & Technical Capabilities */}
      <AboutSection />

      {/* Featured Projects Narrative Showcase */}
      <FeaturedProjects
        projects={featuredProjects}
        onSelectProject={handleOpenCaseStudy}
      />

      {/* Interactive Certificates & Credentials Section */}
      <CertificatesSection
        certificates={certificatesData}
        onSelectCertificate={handleOpenCertificate}
      />

      {/* Project Archive & Deliverables */}
      <WorksArchive
        archive={archiveProjects}
        projects={featuredProjects}
        onSelectProject={handleOpenCaseStudy}
      />

      {/* Professional Experience & Certified Internship Documentation */}
      <ExperienceSection />

      {/* Interactive Footer & Contact */}
      <ContactFooter />

      {/* Case Study Narrative Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={handleCloseCaseStudy}
      />

      {/* Interactive Certificate Preview & Zoom Lightbox Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={handleCloseCertificate}
      />
    </main>
  );
}
