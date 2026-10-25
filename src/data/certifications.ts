export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  organization: string;
  category: string;
  credentialId?: string;
  date: string;
  status: string;
  description: string;
  skills: string[];
  iconType: 'code' | 'network' | 'shield' | 'building' | 'briefcase' | 'lock' | 'languages';
}

export const certificationsData: CertificationItem[] = [
  {
    id: 'bnsp-programmer',
    title: 'Certified National Programmer',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    organization: 'LSP P1 Politeknik Caltex Riau',
    category: 'National Professional Certification',
    credentialId: 'SK: 005/SK-LSP/PCR/2026 • BNSP-LSP-564-ID',
    date: 'August 2026',
    status: 'KOMPETEN (Competent)',
    description:
      'National professional programmer certification assessing core software development, database modeling, algorithm implementation, and professional code standards.',
    skills: [
      'Software Engineering',
      'Database Modeling',
      'Algorithmic Logic',
      'Clean Code',
      'QA & Production Standards',
    ],
    iconType: 'code',
  },
  {
    id: 'ec-council-ehe',
    title: 'Ethical Hacking Essentials (EHE)',
    issuer: 'EC-Council',
    organization: 'International Council of E-Commerce Consultants',
    category: 'Global Cybersecurity Certification',
    credentialId: 'Certificate No: 345112',
    date: 'July 18, 2024',
    status: 'Certified (EC-Council)',
    description:
      'Accredited international cybersecurity certification covering ethical hacking concepts, threat vectors, vulnerability assessment, network penetration testing, and security countermeasures.',
    skills: [
      'Ethical Hacking',
      'Vulnerability Assessment',
      'Threat Vectors',
      'Network Countermeasures',
      'Penetration Testing Concepts',
    ],
    iconType: 'lock',
  },
  {
    id: 'mikrotik-mtcna',
    title: 'MikroTik Certified Network Associate (MTCNA)',
    issuer: 'MikroTikls SIA (Riga, Latvia)',
    organization: 'MikroTik Academy',
    category: 'International Network Certification',
    credentialId: 'Certificate ID: 2407NA9051',
    date: 'July 2024 – July 2027',
    status: 'Active Associate (3 Years)',
    description:
      'International accreditation certifying hands-on proficiency in RouterOS network configuration, IP routing, firewall filter policies, NAT, bandwidth queues, and wireless infrastructure.',
    skills: [
      'RouterOS Administration',
      'IPv4 Routing & Subnets',
      'Firewall & NAT Filters',
      'Bandwidth Queues',
      'Wireless Networking',
    ],
    iconType: 'network',
  },
  {
    id: 'cisco-cybersecurity',
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    organization: 'Cisco Corporate Social Responsibility',
    category: 'Global Security Certification',
    credentialId: 'Cisco NetAcad Course Completion',
    date: 'July 18, 2024',
    status: 'Verified Completion',
    description:
      'Comprehensive security certification covering cyber criminal tactics, principles of confidentiality, integrity, availability (CIA triad), network defense architectures, and legal compliance.',
    skills: [
      'Threat Analysis',
      'CIA Triad Principles',
      'Network Defense',
      'Countermeasure Protocols',
      'Security Laws & Compliance',
    ],
    iconType: 'shield',
  },
  {
    id: 'toefl-lti',
    title: 'TOEFL Prediction Test — Score 547',
    issuer: 'Language Training Institution (LTI)',
    organization: 'Standardized English Proficiency Assessment',
    category: 'Language Proficiency',
    credentialId: 'Listening: 44 • Structure: 59 • Reading: 61',
    date: 'May 2024',
    status: 'Overall Score: 547 (High Proficiency)',
    description:
      'Standardized English proficiency test demonstrating high-level academic and professional competency across listening comprehension, grammatical structure & written expression, and reading analysis.',
    skills: [
      'Technical English',
      'Written Expression (Score 59)',
      'Reading Comprehension (Score 61)',
      'Listening Analysis (Score 44)',
      'Professional Communication',
    ],
    iconType: 'languages',
  },
  {
    id: 'ptpn-mbkm',
    title: 'Magang Berdampak (MBKM) Certification',
    issuer: 'PT Perkebunan Nusantara IV Regional III',
    organization: 'BUMN Danantara Indonesia',
    category: 'Enterprise MBKM Certification',
    credentialId: 'No: 3/SDM/EX-405/IV/2026',
    date: 'Feb – Jun 2025 (Issued Jul 2026)',
    status: 'Grade: Sangat Baik (Excellent)',
    description:
      'Awarded with the highest grade for engineering the "By-Pro" mobile sales contract & cryptographic digital signing application, and developing the "AgriSmart" GIS soil analysis platform.',
    skills: [
      'Mobile Engineering (Kotlin)',
      'GIS Spatial Mapping',
      'Digital Signing Workflow',
      'Gemini AI Advisor',
      'Enterprise Architecture',
    ],
    iconType: 'building',
  },
  {
    id: 'ptpn-kp',
    title: 'Kerja Praktek (KP) Industrial Certification',
    issuer: 'PT Perkebunan Nusantara IV Regional III',
    organization: 'BUMN Danantara Indonesia',
    category: 'Corporate IT Certification',
    credentialId: 'No: 3/SDM/EX-94/IV/2026',
    date: 'Aug – Dec 2025 (Issued Jul 2026)',
    status: 'Grade: Sangat Baik (Excellent)',
    description:
      'Industrial practicum certification recognizing high-performance engineering on internal enterprise web booking platforms, IT hardware provisioning, and hybrid corporate event technical operations.',
    skills: [
      'Fullstack Web Platforms',
      'Enterprise IT Provisioning',
      'Network Maintenance',
      'Hybrid Event Ops',
      'Corporate Systems Support',
    ],
    iconType: 'briefcase',
  },
];
