export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Mobile Application' | 'Web Platform' | 'Enterprise System' | 'UI/UX & Design Systems' | 'Deep Learning & AI';
  year: string;
  client: string;
  role: string;
  timeline: string;
  status: 'Production' | 'Featured' | 'Confidential';
  summary: string;
  heroImage: string;
  gallery: string[];
  tags: string[];
  primaryLink: {
    type: 'figma' | 'pdf' | 'canva' | 'github' | 'live';
    label: string;
    url: string;
  };
  secondaryLink?: {
    type: 'figma' | 'pdf' | 'canva' | 'github' | 'live';
    label: string;
    url: string;
  };
  liveUrl?: string;
  githubUrl?: string;
  stats: {
    label: string;
    value: string;
    subtext?: string;
  }[];
  challenge: {
    description: string;
    bulletPoints: string[];
  };
  solution: {
    description: string;
    architecturePoints: string[];
  };
  techStack: {
    category: string;
    items: string[];
  }[];
  userFlow: {
    step: string;
    title: string;
    description: string;
  }[];
  results: {
    metric: string;
    detail: string;
  }[];
  documentationDetails?: {
    title: string;
    documentType: string;
    pdfUrl?: string;
    sections: {
      heading: string;
      description: string;
      steps?: string[];
    }[];
  };
}

export interface ArchiveItem {
  year: string;
  title: string;
  client: string;
  role: string;
  platform: string;
  category: string;
  duration?: string;
  tags: string[];
  image: string;
  link?: string;
  linkType?: 'figma' | 'pdf' | 'canva' | 'github' | 'live';
  linkLabel?: string;
  caseStudyId?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: 'Professional Certifications' | 'Technical Certifications' | 'Corporate Credentials';
  credentialId?: string;
  verificationUrl?: string;
  documentUrl?: string;
  previewImage?: string;
  fileType?: 'pdf' | 'image';
  fileName?: string;
  description: string;
  skills: string[];
}

