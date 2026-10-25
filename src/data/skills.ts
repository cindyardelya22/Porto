import { ExperienceItem } from '@/types';

export const skillCategories = [
  {
    category: 'Mobile Engineering',
    tag: 'CORE SPECIALTY',
    description: 'Native Android application development with Kotlin, modern architecture patterns, and human-centered design.',
    skills: [
      { name: 'Kotlin for Android', level: 'Advanced', highlight: 'Coroutines, StateFlow, ViewModel' },
      { name: 'Android Jetpack', level: 'Advanced', highlight: 'ViewBinding, Lifecycle, Navigation' },
      { name: 'Clean Architecture & MVVM', level: 'Advanced', highlight: 'Modular layers, robust data flow' },
      { name: 'Digital Signatures & PDF', level: 'Advanced', highlight: 'QR encryption, document workflow' },
      { name: 'UI/UX Mobile Design', level: 'Advanced', highlight: 'Figma prototyping, Material Design 3' },
      { name: 'Conversational UX', level: 'Advanced', highlight: 'Chatbot assessments, mood tracking' },
    ],
  },
  {
    category: 'Web & GIS Systems',
    tag: 'FULLSTACK & GEOSPATIAL',
    description: 'End-to-end fullstack web development, relational database schemas, and interactive spatial GIS interfaces.',
    skills: [
      { name: 'Laravel & PHP', level: 'Advanced', highlight: 'MVC, Eloquent ORM, Authentication' },
      { name: 'Laravel Livewire', level: 'Advanced', highlight: 'Reactive fullstack single-page apps' },
      { name: 'Web GIS & Spatial Maps', level: 'Advanced', highlight: 'Leaflet, GeoJSON, polygon overlays' },
      { name: 'Tailwind CSS & JavaScript', level: 'Advanced', highlight: 'Responsive UI, interactive dashboards' },
      { name: 'MySQL Database', level: 'Advanced', highlight: 'Relational design, indexing, queries' },
      { name: 'AI API Integration', level: 'Intermediate', highlight: 'Google Gemini AI Chatbot embedding' },
    ],
  },
  {
    category: 'Machine Learning & AI',
    tag: 'DEEP LEARNING',
    description: 'Applied artificial intelligence, computer vision, and neural network classification for medical imaging.',
    skills: [
      { name: 'Python 3', level: 'Advanced', highlight: 'Scientific computing, automation' },
      { name: 'TensorFlow & Keras', level: 'Intermediate', highlight: 'Convolutional Neural Networks (CNN)' },
      { name: 'Computer Vision', level: 'Intermediate', highlight: 'Image preprocessing, OpenCV' },
      { name: 'Model Evaluation', level: 'Advanced', highlight: 'Confusion matrices, ROC-AUC, precision' },
      { name: 'Data Preprocessing', level: 'Advanced', highlight: 'Normalization, data augmentation' },
    ],
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    period: '2025 - 2026',
    role: 'Mobile & Frontend Developer (MBKM Program)',
    company: 'PT Perkebunan Nusantara (PTPN) IV Regional III',
    location: 'Riau, Indonesia',
    type: 'Corporate Internship / MBKM Mandiri',
    description:
      'Engineered two flagship enterprise digital solutions: the "By-Pro" mobile contract & digital signing application and the "AgriSmart" GIS soil fertility analysis system with Gemini AI.',
    highlights: [
      'Developed native Android "By-Pro Sales Contract" app with digital signatures and QR verification, accelerating trade contract approvals by 65%.',
      'Engineered reactive GIS web portal "AgriSmart" mapping 54+ plantation blocks and integrating Gemini AI chatbot for agronomy recommendations.',
      'Authored comprehensive enterprise technical user guides: "panduan_salescontract" and "panduan.agrismart".',
    ],
    skills: ['Kotlin', 'Android Jetpack', 'Laravel Livewire', 'Web GIS', 'Gemini AI', 'MySQL', 'Digital Signatures'],
  },
  {
    period: '2024 - 2025',
    role: 'Fullstack Web Developer (Final Project)',
    company: 'Alumna Islamic School Pekanbaru',
    location: 'Pekanbaru, Riau, Indonesia',
    type: 'Undergraduate Final Project',
    description:
      'Individually designed and developed a comprehensive web-based child growth and development monitoring system to streamline developmental milestone tracking for educators and parents.',
    highlights: [
      'Built complete multi-role Laravel web system featuring visual growth percentiles (Chart.js), daily classroom activity logging, and automated semester report cards.',
      'Conducted user interviews with daycare principals and parents, increasing parent-school milestone visibility by 85%.',
      'Achieved top distinction in final project defense at Politeknik Caltex Riau.',
    ],
    skills: ['Laravel', 'PHP', 'MySQL', 'Visual Charts', 'UI/UX Design', 'Fullstack Web', 'Tailwind CSS'],
  },
  {
    period: '2024 - 2025',
    role: 'Mobile & Machine Learning Engineer',
    company: 'Politeknik Caltex Riau',
    location: 'Pekanbaru, Indonesia',
    type: 'Academic & Applied Research',
    description:
      'Led the design and technical development of innovative student projects including the MindCare mental health mobile app and CNN-based malaria cell classification research.',
    highlights: [
      'Designed and built "MindCare" native Android app with conversational chatbot screening, emotional mood tracker, and therapeutic exercises.',
      'Trained custom deep Convolutional Neural Network (CNN) achieving 96.8% accuracy in classifying infected malaria microscopic cell images.',
      'Ready for professional mobile engineering (Kotlin) and fullstack software development roles.',
    ],
    skills: ['Kotlin', 'Android', 'Python', 'TensorFlow / Keras', 'CNN', 'Deep Learning', 'Figma'],
  },
  {
    period: '2024 (2 Months)',
    role: 'Fullstack Web Developer & IT Support (Internship)',
    company: 'PT Perkebunan Nusantara (PTPN) IV Regional III',
    location: 'Pekanbaru, Riau, Indonesia',
    type: 'Industrial Internship (Kerja Praktik)',
    description:
      'Engineered internal enterprise web solutions for official duty travel and room reservations, while providing IT hardware provisioning and hybrid event technical operations.',
    highlights: [
      'Developed internal web solutions with Laravel and MySQL for corporate duty travel accommodation and room management.',
      'Provisioned and staged corporate Dell laptops, partitioned OS disks via PowerShell, and supported corporate network infrastructure.',
      'Operated audiovisual telemetry and presentation controllers for executive boardroom meetings and corporate townhalls.',
    ],
    skills: ['Laravel', 'PHP', 'MySQL', 'IT Support', 'PowerShell', 'Network Diagnostics', 'AV Operations'],
  },
];
