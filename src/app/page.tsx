'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import ExperienceSection from '@/components/ExperienceSection';
import WorksArchive from '@/components/WorksArchive';
import AboutSection from '@/components/AboutSection';
import ContactFooter from '@/components/ContactFooter';
import CaseStudyModal from '@/components/CaseStudyModal';
import { featuredProjects } from '@/data/projects';
import { archiveProjects } from '@/data/archive';
import { CaseStudy } from '@/types';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const handleOpenCaseStudy = (project: CaseStudy) => {
    setSelectedProject(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
  };

  return (
    <main className="relative min-h-screen bg-[#fafaf9] dark:bg-[#111215] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About & Technical Capabilities Matrix */}
      <AboutSection />

      {/* Featured Works (5 Core Projects Narrative Showcase) */}
      <FeaturedProjects
        projects={featuredProjects}
        onSelectProject={handleOpenCaseStudy}
      />

      {/* Selected Works & Shots (Project Directory & Lab) */}
      <WorksArchive
        archive={archiveProjects}
        projects={featuredProjects}
        onSelectProject={handleOpenCaseStudy}
      />

      {/* Corporate Experience & Certified Internship Documentation (Timeline + KpSlideshow) */}
      <ExperienceSection />

      {/* Interactive Footer & Contact (Magnetic CTA & Confetti Email Copy) */}
      <ContactFooter />

      {/* Deep-Dive Case Study Narrative Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={handleCloseCaseStudy}
      />
    </main>
  );
}
