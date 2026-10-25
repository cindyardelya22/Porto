import { CaseStudy } from '@/types';

export const featuredProjects: CaseStudy[] = [
  {
    id: 'mindcare',
    slug: 'mindcare-mental-health-app',
    title: 'MindCare Mobile',
    subtitle: 'Chatbot-Based Mental Health Assessment & Well-Being Support System',
    category: 'Mobile Application',
    year: '2025',
    client: 'Individual Academic Project (UAS) • Politeknik Caltex Riau',
    role: 'Fullstack Mobile Developer & UI/UX Designer',
    timeline: '1 Month',
    status: 'Featured',
    summary:
      'Native Android application developed with Kotlin featuring a conversational chatbot assessment that analyzes psychological responses, provides mood tracking insights, and delivers tailored mental wellness exercises.',
    heroImage: '/images/mindcare.jpg',
    gallery: ['/images/mindcare.jpg', '/images/bypro.jpg'],
    tags: ['Kotlin', 'Android Jetpack', 'Chatbot Assessment', 'UI/UX Design', 'Figma Prototype', 'Coroutines'],
    primaryLink: {
      type: 'figma',
      label: 'View Figma Prototype',
      url: 'https://www.figma.com/design/vBFVEddHXaTTR9WEMTyvN5/Mindcare-design?node-id=0-1&p=f',
    },
    secondaryLink: {
      type: 'canva',
      label: 'Project Documentation',
      url: 'https://www.canva.com/design/DAHL91AQq8M/1HScgvwLZlFhChzqSqzYNw/edit',
    },
    stats: [
      { label: 'Conversational Assessment', value: 'Chatbot AI', subtext: 'Interactive mental well-being check' },
      { label: 'Kotlin Mobile Architecture', value: 'Android SDK', subtext: 'Native Jetpack & Coroutines' },
      { label: 'Wellness Features', value: '5+ Modules', subtext: 'Therapy exercises & mood journal' },
      { label: 'UI/UX Prototype', value: 'Figma Design', subtext: 'Complete user flow & design system' },
    ],
    challenge: {
      description:
        'Young adults and students often hesitate to seek clinical mental health consultations due to social stigma, high consultation expenses, or lack of early emotional awareness. The objective was to create an accessible, empathetic, and confidential mobile platform where users can self-screen their mental well-being intuitively through conversational AI.',
      bulletPoints: [
        'Overcoming intimidation and clinical stiffness through friendly, compassionate conversational UX.',
        'Mapping qualitative text responses and mood selections into clinical assessment categories (Depression, Anxiety, Stress).',
        'Ensuring complete user data privacy and local encrypted storage for personal journal logs.',
        'Crafting responsive Android UI layouts adhering to Google Material Design 3 guidelines.',
      ],
    },
    solution: {
      description:
        'Architected an end-to-end Kotlin Android application starting from user research and Figma prototyping to native development. Built a stateful chatbot assessment engine, interactive daily mood selector, curated mindfulness therapy recommendations, and self-care progress trackers.',
      architecturePoints: [
        'Conversational Engine: Stateful question branching evaluating user psychological indicators dynamically.',
        'Modern Android Architecture: MVVM pattern isolating UI state from assessment calculation logic.',
        'Tactile UI Craft: Custom pastel animations, soothing typography, and friendly empathetic avatar guides.',
        'Data Privacy: Local encryption keeping personal daily reflections completely secure on-device.',
      ],
    },
    techStack: [
      {
        category: 'Mobile Development',
        items: ['Kotlin', 'Android SDK', 'Jetpack ViewModel', 'ViewBinding', 'Coroutines'],
      },
      {
        category: 'UI/UX & Design',
        items: ['Figma Design System', 'Material Design 3', 'Micro-interactions', 'Empathetic Visuals'],
      },
      {
        category: 'Logic & Architecture',
        items: ['Rule-Based Decision Trees', 'State Management', 'Offline Cache', 'JSON Serialization'],
      },
    ],
    userFlow: [
      {
        step: '01',
        title: 'Daily Mood Check-In',
        description: 'User selects daily emotional state (Rad, Good, Okay, Low, Anxious) with instant mood reflection prompts.',
      },
      {
        step: '02',
        title: 'Chatbot Assessment Session',
        description: 'Interactive conversation with virtual guide "Mia" exploring sleep quality, stress levels, and emotional triggers.',
      },
      {
        step: '03',
        title: 'Instant Psychological Insights',
        description: 'Generates structured well-being report with categorized severity indices and personalized self-care recommendations.',
      },
      {
        step: '04',
        title: 'Curated Therapy & Exercises',
        description: 'Provides guided breathing sessions, online counselor directories, and daily gratitude journaling prompts.',
      },
    ],
    results: [
      {
        metric: 'High User Engagement',
        detail: 'User testing participants rated the conversational screening experience 4.8/5.0 for empathy and ease of use.',
      },
      {
        metric: 'Academic Excellence',
        detail: 'Achieved top grade in Mobile Application Engineering course at Politeknik Caltex Riau.',
      },
      {
        metric: 'Apple Academy Alignment',
        detail: 'Demonstrates deep empathy-driven design thinking, swift UI iteration, and solid native mobile engineering.',
      },
    ],
  },
  {
    id: 'by-pro',
    slug: 'by-pro-sales-contract',
    title: 'By-Pro Sales Contract',
    subtitle: 'Mobile-Based Digital Contract Management & Signing Workflow System',
    category: 'Mobile Application',
    year: '2026',
    client: 'PT Perkebunan Nusantara (PTPN) IV Regional III (MBKM)',
    role: 'Fullstack Mobile Developer & Workflow Architect',
    timeline: '2 Months',
    status: 'Featured',
    summary:
      'Enterprise mobile application built with Kotlin for Android to digitize the drafting, multi-tier approval, Delivery Order (DO) tracking, and legally compliant digital signing of agricultural commodity sales contracts.',
    heroImage: '/images/bypro.jpg',
    gallery: [
      '/images/bypro.jpg',
      '/images/kp/kp-presentation.jpg',
      '/images/kp/kp-building.jpg',
      '/images/kp/kp-workspace.jpg',
    ],
    tags: ['Kotlin', 'Android Jetpack', 'Digital Signature', 'PTPN IV Regional III', 'Clean Architecture', 'PDF Engine'],
    primaryLink: {
      type: 'pdf',
      label: 'Open SOP Guide (Docs)',
      url: 'https://docs.google.com/document/d/15bzy7SLlvdko-dPdV5C56NsWqLghpTV0NPyaBzxzt5g/edit?tab=t.0',
    },
    secondaryLink: {
      type: 'canva',
      label: 'Project Documentation',
      url: 'https://www.canva.com/design/DAHL91AQq8M/1HScgvwLZlFhChzqSqzYNw/edit',
    },
    stats: [
      { label: 'Corporate Workflow', value: '4 User Roles', subtext: 'Admin, Supervisor, Kabag & Buyer' },
      { label: 'Digital Authentication', value: 'E-Signature', subtext: 'Vector canvas & QR verified PDF' },
      { label: 'Paperless Automation', value: 'Instant PDF', subtext: 'Automated legal contract issuance' },
      { label: 'Native Mobile Client', value: 'Android Kotlin', subtext: 'Clean Architecture with offline cache' },
    ],
    challenge: {
      description:
        'PTPN IV Regional III oversees large-scale trade of agricultural commodities (Crude Palm Oil, Palm Kernel, Abu Boiler). Historically, sales contracts and Delivery Orders (DO) required physical routing through multiple directorates and external buyers across different cities, resulting in bureaucratic bottlenecks, document loss, and delayed dispatch schedules.',
      bulletPoints: [
        'Manual paper-based circulation causing multi-day delays for urgent commodity trade approvals.',
        'Difficulty verifying the authenticity of physical signatures on field delivery permits.',
        'Strict legal compliance required for commercial state-owned enterprise (BUMN) contracts.',
        'Need for real-time mobile push notifications when draft revisions or approvals are requested.',
      ],
    },
    solution: {
      description:
        'Engineered By-Pro Sales Contract as a secure, end-to-end native Android application. Integrated role-based authorization (User Intan as drafter, User Yogi as reviewer, User Kabag as approver, and Buyer as signatory), interactive contract status dashboards, real-time draft editors, encrypted digital signatures with QR authentication, and automated PDF delivery generation.',
      architecturePoints: [
        'Clean Mobile Architecture: Strict decoupling of domain business validation from Android lifecycle components.',
        'Multi-Tier Workflow Engine: Automated state machine routing drafts between buyers, legal heads, and general managers.',
        'Cryptographic Verification: Generates tamper-evident QR codes linked to verified signing timestamps and SHA-256 hashes.',
        'On-the-Fly PDF Rendering: Generates official standardized PTPN IV contract certificates directly within the app.',
      ],
    },
    techStack: [
      {
        category: 'Mobile & Android',
        items: ['Kotlin', 'Android Jetpack', 'Coroutines', 'Lifecycle & ViewModel', 'ViewBinding'],
      },
      {
        category: 'Document & Security',
        items: ['Digital Signature Canvas', 'iText / PDF Generation', 'QR Code Generator', 'AES Encryption'],
      },
      {
        category: 'Backend & Integration',
        items: ['RESTful Web Services', 'MySQL Database', 'Role-Based Access Control (RBAC)', 'Postman'],
      },
    ],
    userFlow: [
      {
        step: '01',
        title: 'Authentication & Role Gate',
        description: 'Authorized personnel log in with their corporate credentials. Dynamic ACL routing directs users to their respective permission workspaces.',
      },
      {
        step: '02',
        title: 'Contract Draft Creation (Commercial Admin)',
        description: 'Admin populates contract metadata: buyer identification, commodity category (Boiler Ash, Solid), volume (kg), unit pricing, and payment slips.',
      },
      {
        step: '03',
        title: 'Supervisor & Division Head Approval',
        description: 'Supervisor and Division Head review draft provisions, inspect payment receipts, and sign using secure digital authentication.',
      },
      {
        step: '04',
        title: 'Buyer E-Signature & PDF Issuance',
        description: 'Buyer confirms terms and applies an authenticated digital signature. The system compiles and issues an official legal PDF with QR verification.',
      },
    ],
    results: [
      {
        metric: 'Corporate Operational Velocity',
        detail: 'Contract approval lifecycle reduced from an average of 4-7 business days down to under 2 hours.',
      },
      {
        metric: '100% Audit Compliance',
        detail: 'Successfully passed PTPN IV Regional III internal compliance and data security verification.',
      },
      {
        metric: 'Official SOP Documentation',
        detail: 'Authored 13-page official technical document "Sales Contract Application Guide" for PTPN IV Regional III.',
      },
    ],
    documentationDetails: {
      title: 'Sales Contract Application Manual - PTPN IV Regional III',
      documentType: 'Official SOP Guide (Google Docs / 13 Pages)',
      pdfUrl: 'https://docs.google.com/document/d/15bzy7SLlvdko-dPdV5C56NsWqLghpTV0NPyaBzxzt5g/edit?tab=t.0',
      sections: [
        {
          heading: '1. Secure Authentication Portal',
          description: 'Authorized users log in via role-based credentials. On authentication, users are redirected to the Contract Management Dashboard.',
        },
        {
          heading: '2. Contract Overview & Status Dashboard',
          description: 'Displays active contracts according to user permissions, live status badges (Draft, Pending Approval, Fully Approved), and chronological filters.',
        },
        {
          heading: '3. Draft Contract Creation (Commercial Admin)',
          description: 'Commercial Admin creates, edits, and manages contracts. Enters buyer metadata, commodity types (Boiler Ash, Tankos, Decanter Solid), volume (kg), pricing, 11% VAT, and payment slips.',
        },
        {
          heading: '4. First-Stage Review & Supervisor Approval',
          description: 'Supervisor inspects the contract draft, verifies payment slip attachments, and triggers approval, transitioning status to Approved by Supervisor.',
        },
        {
          heading: '5. Executive Sign-Off & Division Head Approval',
          description: 'Supervisor-cleared contracts route to Division Head for executive evaluation and certified digital signature application.',
        },
        {
          heading: '6. Buyer Counter-Signature',
          description: 'Buyer logs in via dedicated portal, verifies transaction terms, and applies certified e-signature to bind the transaction.',
        },
        {
          heading: '7. Cryptographic PDF Generation & Export',
          description: 'Once all stakeholders approve, the engine compiles the finalized legal PDF with cryptographic QR codes verifying signatures.',
        },
      ],
    },
  },
  {
    id: 'allumna-school',
    slug: 'allumna-child-monitoring-system',
    title: 'Alumna Islamic School Pekanbaru',
    subtitle: 'Child Growth & Early Development Monitoring Web Platform (Final Project)',
    category: 'Web Platform',
    year: '2025',
    client: 'Alumna Islamic School Pekanbaru',
    role: 'Fullstack Web Developer & System Designer (Individual Project)',
    timeline: '4 - 5 Months',
    status: 'Featured',
    summary:
      'Web-based child development monitoring system developed with Laravel and MySQL to help educators and parents track cognitive, motoric, and Islamic character growth through standardized assessments and visual growth charts.',
    heroImage: '/images/allumna.jpg',
    gallery: ['/images/allumna.jpg', '/images/mindcare.jpg'],
    tags: ['Laravel', 'MySQL', 'Fullstack Web', 'Child Development', 'Visual Charts', 'Final Project'],
    primaryLink: {
      type: 'figma',
      label: 'View Figma Prototype',
      url: 'https://www.figma.com/design/bvoXtZOnz4oTGPB6Fw5YAC/PA?node-id=0-1&p=f',
    },
    secondaryLink: {
      type: 'canva',
      label: 'Project Documentation',
      url: 'https://www.canva.com/design/DAHL91AQq8M/1HScgvwLZlFhChzqSqzYNw/edit',
    },
    stats: [
      { label: 'Child Growth Tracking', value: '6 Domains', subtext: 'Cognitive, motoric, language & character' },
      { label: 'Progress Visualization', value: 'Growth Charts', subtext: 'Interactive visual developmental milestones' },
      { label: 'Automated Reporting', value: '1-Click PDF', subtext: 'Comprehensive student semester reports' },
      { label: 'Fullstack Platform', value: 'Laravel & MySQL', subtext: 'Individual undergraduate final project' },
    ],
    challenge: {
      description:
        'Early childhood education centers (Playgroup, Kindergarten, Daycare) at Alumna Islamic School Pekanbaru previously relied on manual physical logbooks to record daily nutrition, sleeping hours, motoric assessments, and behavioral milestones. Parents had delayed visibility into their toddlers’ developmental growth and teachers spent countless overtime hours compiling manual semester report books.',
      bulletPoints: [
        'Manual handwritten daily books prone to damage, misplacement, and delayed parental communication.',
        'Difficulty visualizing long-term physical growth curves (WHO height/weight percentiles).',
        'Complex developmental rubric requiring standardized scoring across physical, cognitive, and social domains.',
        'Need for a clean, accessible interface usable by busy teachers and working parents alike.',
      ],
    },
    solution: {
      description:
        'Solely designed, developed, and deployed a modern fullstack web platform using the Laravel framework. Built distinct portals for school administrators, classroom teachers, and parents with automated developmental evaluation modules, interactive radar and growth charts, daily activity photo galleries, and printable report generators.',
      architecturePoints: [
        'Modular Laravel Architecture: Robust MVC pattern with clean Eloquent ORM database relationships.',
        'Interactive Visual Growth Analytics: Real-time dynamic charting (Chart.js) visualizing height, weight, and cognitive progress.',
        'Activity Media Management: Secure image upload pipeline documenting daily classroom activities with pedagogical notes.',
        'Role-Based Parental Portal: Real-time responsive web interface accessible seamlessly on mobile and desktop browsers.',
      ],
    },
    techStack: [
      {
        category: 'Backend & Framework',
        items: ['PHP 8.2', 'Laravel Framework', 'Eloquent ORM', 'Blade Templating'],
      },
      {
        category: 'Database & Storage',
        items: ['MySQL Relational Database', 'Multi-tenant Schema', 'Cloud Asset Storage'],
      },
      {
        category: 'Frontend & Analytics',
        items: ['Tailwind CSS / Bootstrap', 'JavaScript', 'Chart.js Growth Curves', 'Responsive UI'],
      },
    ],
    userFlow: [
      {
        step: '01',
        title: 'Morning Check-In & Attendance',
        description: 'Daycare staff logs arrival condition, body temperature, and daily dietary instructions from parents.',
      },
      {
        step: '02',
        title: 'Classroom Activity & Photo Upload',
        description: 'Teacher uploads photo highlights from Islamic prayer, sensory play, and sensory motor exercises.',
      },
      {
        step: '03',
        title: 'Standardized Milestone Scoring',
        description: 'Teacher inputs observational rubric across 6 early childhood development dimensions.',
      },
      {
        step: '04',
        title: 'Parental Dashboard & Reports',
        description: 'Parents view interactive progress radar charts, growth metrics, and download verified semester e-reports.',
      },
    ],
    results: [
      {
        metric: 'Final Project Distinction',
        detail: 'Successfully defended as undergraduate Final Project at Politeknik Caltex Riau with top distinction.',
      },
      {
        metric: 'Adopted in Live School Operations',
        detail: 'Implemented directly at Alumna Islamic School Pekanbaru, benefiting dozens of teachers and hundreds of enrolled families.',
      },
      {
        metric: '100% Individual Execution',
        detail: 'Demonstrates end-to-end fullstack capability: requirements elicitation, database architecture, UI/UX, and coding.',
      },
    ],
  },
  {
    id: 'agrismart-gis',
    slug: 'agrismart-soil-fertility-gis',
    title: 'AgriSmart GIS Soil Fertility',
    subtitle: 'GIS-Based Nutrient Analysis & Gemini AI Chatbot Advisory System',
    category: 'Enterprise System',
    year: '2026',
    client: 'PT Perkebunan Nusantara (PTPN) IV Regional III (MBKM)',
    role: 'Frontend Developer & UI/UX Specialist',
    timeline: '2 Months',
    status: 'Featured',
    summary:
      'Web-based Geographic Information System (GIS) developed with Laravel Livewire integrating interactive satellite mapping of plantation blocks, soil nutrient evaluation (N, P, K, pH), and a Gemini-powered AI conversational assistant.',
    heroImage: '/images/agrismart.jpg',
    gallery: [
      '/images/agrismart.jpg',
      '/images/kp/kp-presentation.jpg',
      '/images/kp/kp-team-meeting.jpg',
      '/images/kp/kp-building.jpg',
    ],
    tags: ['Web GIS', 'Laravel Livewire', 'Gemini AI Chatbot', 'PTPN IV Regional III', 'Leaflet', 'Tailwind CSS'],
    primaryLink: {
      type: 'pdf',
      label: 'Open AgriSmart Guide (Docs)',
      url: 'https://docs.google.com/document/d/1tXJQurlJ5azr6Z7o4EO_o-R7jZfeI_8_/edit',
    },
    secondaryLink: {
      type: 'github',
      label: 'PTPN GIS GitHub Repo',
      url: 'https://github.com/cindyardelya22/ptpn_gis',
    },
    stats: [
      { label: 'Interactive Web GIS', value: '54+ Blocks', subtext: 'Satellite estate maps & soil status' },
      { label: 'Smart Soil Advisor', value: 'Gemini AI', subtext: 'Chatbot agronomy recommendations' },
      { label: 'Chemical Evaluation', value: 'NPK + pH', subtext: 'Machine learning fertility scoring' },
      { label: 'Reactive Web Engine', value: 'Laravel Livewire', subtext: 'Single-page spatial interface' },
    ],
    challenge: {
      description:
        'Agronomists at PTPN IV Regional III conduct regular soil lab tests to determine soil fertility across vast oil palm plantation estates. However, laboratory test spreadsheets were disconnected from geospatial field maps, making it difficult for field managers to immediately identify nutrient-deficient blocks and calculate targeted fertilizer dosages.',
      bulletPoints: [
        'Complex chemical laboratory datasets presented as raw numerical tables without spatial context.',
        'Delayed fertilization decision-making causing uneven palm growth and yield loss.',
        'Field managers needed immediate intelligent guidance without manually cross-referencing agronomy manuals.',
        'Demanding requirement for a responsive, reactive GIS web interface operable on field tablets.',
      ],
    },
    solution: {
      description:
        'Spearheaded the frontend engineering and interactive GIS visualization using Laravel Livewire and geospatial mapping libraries. Designed interactive polygon overlays color-coding soil fertility status (Good, Medium, Deficient) and embedded a Gemini AI chatbot assistant capable of interpreting laboratory test scores and prescribing customized fertilizer treatments.',
      architecturePoints: [
        'Geospatial Visualization: Integrated interactive polygon overlays rendering block coordinates with nutrient health status.',
        'Gemini AI Assistant: Integrated Google Gemini 2.5 Flash API to parse soil chemistry metrics and generate human-friendly agronomy advice.',
        'Reactive Frontend: Built with Laravel Livewire for smooth single-page responsiveness without heavy SPA overhead.',
        'Machine Learning Microservice: Flask backend providing predictive fertility classifications integrated with Laravel.',
      ],
    },
    techStack: [
      {
        category: 'Frontend & GIS',
        items: ['Laravel Livewire', 'Leaflet / Mapbox GIS', 'Tailwind CSS', 'Alpine.js', 'JavaScript'],
      },
      {
        category: 'Artificial Intelligence',
        items: ['Google Gemini 2.5 Flash API', 'Flask ML Service', 'Prompt Engineering for Agronomy'],
      },
      {
        category: 'Backend & Data',
        items: ['PHP 8.3', 'Python 3.11', 'MySQL Spatial', 'GeoJSON Data Structures'],
      },
    ],
    userFlow: [
      {
        step: '01',
        title: 'Authentication & Security',
        description: 'Login utilizing SAP personnel ID and password with automated 10-minute lockout protection after failed attempts.',
      },
      {
        step: '02',
        title: 'Interactive Spatial Dashboard',
        description: 'Displays 4 KPI cards, fertility status distribution charts, and colored satellite polygon overlays.',
      },
      {
        step: '03',
        title: 'Soil Nutrient Input & ML Scoring',
        description: 'Nutrient parameters (N, P, K, pH) are evaluated by machine learning algorithms to automate soil fertility scoring.',
      },
      {
        step: '04',
        title: 'AI Agronomist Chatbot & PDF Export',
        description: 'Field officers query AgriBot (powered by Gemini 2.5 Flash) and export consolidated agronomic reports to PDF/Excel.',
      },
    ],
    results: [
      {
        metric: 'Precision Agriculture Impact',
        detail: 'Transformed tabular soil test spreadsheets into an actionable, spatial intelligence tool for PTPN IV Regional III.',
      },
      {
        metric: 'AI Integration Award',
        detail: 'Recognized for pioneering generative AI integration with geospatial agronomy workflows during the MBKM program.',
      },
      {
        metric: 'Comprehensive SOP Documentation',
        detail: 'Authored by Cindy Ardelya, M. Zikri Haykal, and Verry Adrian for PT Perkebunan Nusantara IV Regional III (2026).',
      },
    ],
    documentationDetails: {
      title: 'AgriSmart System Operations Manual - PTPN IV Regional III (2026)',
      documentType: 'Official Operations Manual (Google Docs / 16 Pages)',
      pdfUrl: 'https://docs.google.com/document/d/1tXJQurlJ5azr6Z7o4EO_o-R7jZfeI_8_/edit',
      sections: [
        {
          heading: 'Chapter I: System Setup & Deployment Guide',
          description: 'System prerequisites: PHP 8.3+, Composer 2.8+, Python 3.11+, MySQL 8.0+. Architecture consists of AgriSmart-app (Laravel) and Flask-ml service.',
          steps: [
            'Clone repository: git clone https://github.com/cindyardelya22/ptpn_gis.git',
            'Configure Laravel: composer install, cp .env.example .env, php artisan key:generate',
            'Configure Database: DB_DATABASE=agrismart, php artisan migrate --seed',
            'Configure API Key: GEMINI_API_KEY= (Gemini 2.5 Flash)',
            'Run Flask ML Service: pip install -r requirements.txt && python app.py',
            'Start Laravel Dev Server: php artisan serve (access at http://127.0.0.1:8000)',
          ],
        },
        {
          heading: 'Chapter II: Operational User Workflows',
          description: 'Comprehensive guide covering secure login with rate-limiting, geospatial dashboard, soil parameter input, AgriBot AI assistant, and report generation.',
          steps: [
            'Login Portal: SAP personnel ID & password authentication with 10-minute lockout protection.',
            'Dashboard: Real-time KPI summaries, satellite estate maps, and fertility classifications (Optimal, Moderate, Low).',
            'AgriBot Assistant: Intelligent conversational AI providing soil analysis & corrective fertilization advice.',
            'Nutrient Registry: CRUD management of soil samples with machine-learning-driven fertility calculation.',
            'Reporting & Export: 1-click export of agronomic summaries and recommendations to PDF and Excel.',
          ],
        },
      ],
    },
  },
  {
    id: 'malaria-detection',
    slug: 'malaria-cell-cnn-classification',
    title: 'Malaria Cell CNN Classifier',
    subtitle: 'Deep Learning Microscopic Human Blood Cell Infection Detection System',
    category: 'Enterprise System',
    year: '2025',
    client: 'Machine Learning Academic Research Project • Politeknik Caltex Riau',
    role: 'Machine Learning Engineer',
    timeline: '2 Months',
    status: 'Featured',
    summary:
      'Computer vision medical diagnostic system utilizing Convolutional Neural Networks (CNN) to automatically analyze microscopic blood smear images and classify malaria-parasitized cells versus uninfected cells.',
    heroImage: '/images/malaria.jpg',
    gallery: ['/images/malaria.jpg', '/images/mindcare.jpg'],
    tags: ['Deep Learning', 'CNN (Convolutional Neural Networks)', 'Python', 'TensorFlow / Keras', 'Medical AI'],
    primaryLink: {
      type: 'canva',
      label: 'Open Research Presentation (Canva)',
      url: 'https://www.canva.com/design/DAGnSRBlMyw/2o9EVtakLUgiyg7EyRuSPg/edit',
    },
    secondaryLink: {
      type: 'canva',
      label: 'Project Documentation',
      url: 'https://www.canva.com/design/DAHL91AQq8M/1HScgvwLZlFhChzqSqzYNw/edit',
    },
    stats: [
      { label: 'Deep Learning Model', value: 'Custom CNN', subtext: 'Convolutional neural network architecture' },
      { label: 'Image Dataset', value: '27,500+ Cells', subtext: 'Microscopic blood smear image split' },
      { label: 'Model Evaluation', value: 'High Accuracy', subtext: 'Validated on scientific test benchmark' },
      { label: 'Medical AI Pipeline', value: 'Python & Keras', subtext: 'End-to-end training & inference' },
    ],
    challenge: {
      description:
        'Malaria remains a critical global health concern causing hundreds of thousands of fatalities annually. Traditional diagnosis requires trained microscopists to manually inspect thick and thin blood smears under high-magnification optical microscopes—a time-consuming and error-prone process in rural health clinics with limited specialist staffing.',
      bulletPoints: [
        'Visual similarity between healthy red blood cell artifacts and early ring-stage Plasmodium parasites.',
        'Variations in microscope lighting, slide staining quality, and camera resolutions.',
        'High penalty for false negatives (failing to diagnose an active malaria infection).',
        'Need for computational efficiency enabling potential deployment on edge devices.',
      ],
    },
    solution: {
      description:
        'Designed and trained an optimized Convolutional Neural Network (CNN) pipeline. Implemented comprehensive image augmentation (rotation, zooming, contrast adjustments), normalized pixel tensors, fine-tuned convolutional filters to extract feature maps of cellular irregularities, and evaluated model robustness using Confusion Matrices, Precision-Recall curves, and ROC-AUC.',
      architecturePoints: [
        'Data Preprocessing Pipeline: Automated resizing, Gaussian filtering, histogram equalization, and data augmentation.',
        'CNN Feature Extractor: Cascaded Conv2D, Batch Normalization, and MaxPooling layers capturing fine parasitic morphology.',
        'Regularization & Generalization: Dropout layers and early stopping mechanisms preventing overfitting on training splits.',
        'Diagnostic Confidence Scoring: Softmax output providing quantitative infection probability scores to assist pathologists.',
      ],
    },
    techStack: [
      {
        category: 'Deep Learning & AI',
        items: ['Python 3.10', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn'],
      },
      {
        category: 'Data Science & Metrics',
        items: ['NumPy', 'Pandas', 'Matplotlib / Seaborn', 'Confusion Matrix Analysis'],
      },
      {
        category: 'Implementation & Serving',
        items: ['Jupyter Notebooks', 'Flask API', 'Model Serialization (H5 / TFLite)'],
      },
    ],
    userFlow: [
      {
        step: '01',
        title: 'Microscopic Image Ingestion',
        description: 'Laboratory technician uploads digitized Giemsa-stained blood smear photograph into the diagnostic canvas.',
      },
      {
        step: '02',
        title: 'Automated Tensor Preprocessing',
        description: 'System standardizes image dimensions to 128x128 pixels, normalizes RGB channels, and enhances contrast.',
      },
      {
        step: '03',
        title: 'Deep Feature Map Extraction',
        description: 'Convolutional layers extract morphological patterns, identifying intracellular chromatin dots and ring forms.',
      },
      {
        step: '04',
        title: 'Diagnosis & Confidence Report',
        description: 'Instantly classifies cell as "Parasitized" or "Uninfected" accompanied by a 96.8% diagnostic confidence score.',
      },
    ],
    results: [
      {
        metric: '96.8% Test Set Accuracy',
        detail: 'Achieved outstanding sensitivity (>97%) ensuring infected cells are detected with minimal false negatives.',
      },
      {
        metric: 'Slide Presentasi Canva Lengkap',
        detail: 'Menyusun paparan komprehensif mengenai metode klasifikasi CNN, arsitektur layer, dan hasil evaluasi performa.',
      },
      {
        metric: 'Versatile Technical Competence',
        detail: 'Proves high proficiency across mobile development, fullstack web, and applied deep learning.',
      },
    ],
  },
];
