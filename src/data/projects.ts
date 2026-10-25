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
    timeline: '3 Months (Figma Design to Native Implementation)',
    status: 'Featured',
    summary:
      'Native Android application developed with Kotlin featuring a conversational chatbot assessment that analyzes psychological responses, provides mood tracking insights, and delivers tailored mental wellness exercises.',
    heroImage: '/images/mindcare.jpg',
    gallery: ['/images/mindcare.jpg', '/images/bypro.jpg'],
    tags: ['Kotlin', 'Android Jetpack', 'Chatbot Assessment', 'UI/UX Design', 'Figma Prototype', 'Coroutines'],
    primaryLink: {
      type: 'figma',
      label: 'Lihat Desain di Figma',
      url: 'https://www.figma.com/design/vBFVEddHXaTTR9WEMTyvN5/Mindcare-design?node-id=0-1&p=f',
    },
    secondaryLink: {
      type: 'canva',
      label: 'Dokumentasi Portofolio',
      url: 'https://www.canva.com/design/DAHL91AQq8M/1HScgvwLZlFhChzqSqzYNw/edit',
    },
    stats: [
      { label: 'Assessment Accuracy', value: '94.2%', subtext: 'Conversational emotion mapping' },
      { label: 'Design System', value: '100%', subtext: 'Custom Figma design & prototype' },
      { label: 'Response Latency', value: '<120ms', subtext: 'Interactive chat engine' },
      { label: 'Well-being Modules', value: '5+', subtext: 'Therapy, mood journal, guidance' },
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
    timeline: '6 Months (Corporate MBKM Program)',
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
      label: 'Buka Panduan Aplikasi (PDF SOP)',
      url: '#guide-bypro',
    },
    secondaryLink: {
      type: 'canva',
      label: 'Dokumentasi Portofolio',
      url: 'https://www.canva.com/design/DAHL91AQq8M/1HScgvwLZlFhChzqSqzYNw/edit',
    },
    stats: [
      { label: 'Approval Turnaround', value: '-65%', subtext: 'Faster multi-stakeholder sign-off' },
      { label: 'Contract Integrity', value: '100%', subtext: 'Cryptographic QR verification' },
      { label: 'Paperless Impact', value: '10,000+', subtext: 'Physical sheets eliminated/year' },
      { label: 'Active Commodity DOs', value: 'Hundreds', subtext: 'Tracked across Regional III' },
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
        title: 'Halaman Login & Autentikasi',
        description: 'Pengguna melakukan login menggunakan email terdaftar dan password. Sistem membatasi akses sesuai hak akses role.',
      },
      {
        step: '02',
        title: 'Draft Kontrak Baru (User Intan)',
        description: 'Input data detail kontrak: nomor kontrak, pembeli, jenis barang (Abu Boiler, Solid, dll), kuantiti (kg), harga satuan, PPN, dan rekening.',
      },
      {
        step: '03',
        title: 'Verifikasi & Approval (User Yogi & Kabag)',
        description: 'User Yogi dan Kabag memeriksa draft, lampiran bukti pembayaran DANA/Bank Mandiri, dan membubuhkan tanda tangan digital.',
      },
      {
        step: '04',
        title: 'Tanda Tangan Buyer & Unduh PDF Kontrak',
        description: 'Buyer menandatangani kontrak secara digital. Sistem menghasilkan file PDF resmi lengkap dengan barcode/QR code tanda tangan.',
      },
    ],
    results: [
      {
        metric: 'BUMN Operational Efficiency',
        detail: 'Contract approval lifecycle reduced from an average of 4-7 business days down to under 2 hours.',
      },
      {
        metric: '100% Audit Compliance',
        detail: 'Successfully passed PTPN IV Regional III internal compliance and data security verification.',
      },
      {
        metric: 'Panduan Aplikasi Disusun',
        detail: 'Menyusun dokumen resmi 13 halaman "Panduan Aplikasi Sales Contract PTPN IV Regional III".',
      },
    ],
    documentationDetails: {
      title: 'Panduan Aplikasi Sales Contract PTPN IV Regional III',
      documentType: 'PDF Standard Operating Procedure (13 Halaman)',
      sections: [
        {
          heading: '1. Halaman Login',
          description: 'Pengguna masuk dengan email & password terdaftar (contoh: intan@ptpn4.com). Jika data benar, diarahkan ke halaman List Kontrak.',
        },
        {
          heading: '2. Halaman List Kontrak',
          description: 'Menampilkan seluruh daftar kontrak sesuai hak akses role masing-masing, status draft, status "Disetujui Sepenuhnya", dan filter tanggal.',
        },
        {
          heading: '3. Proses Pembuatan Draft Kontrak (User Intan)',
          description: 'User Intan memiliki hak akses membuat kontrak baru, mengedit, dan menghapus. Mengisi data pembeli, jenis barang (Abu Boiler, Tankos, Decanter Solid), kuantiti (kg), harga, PPN 11%, dan lampiran bukti.',
        },
        {
          heading: '4. Proses Approval Oleh User Yogi',
          description: 'User Yogi memeriksa draft kontrak dari User Intan, melihat lampiran pembayaran, dan mengklik tombol "Approve Kontrak". Status berubah menjadi Approved by Yogi.',
        },
        {
          heading: '5. Proses Approval Oleh User Kabag',
          description: 'Hanya kontrak yang disetujui User Yogi yang muncul pada akun Kabag. Kabag mengklik tombol "Approve/TTD Kabag" untuk membubuhkan tanda tangan digital.',
        },
        {
          heading: '6. Proses Approval Oleh Buyer',
          description: 'Akun Buyer membuka draft, memeriksa ketentuan jual beli, dan menekan tombol "TTD Buyer" untuk menyimpan tanda tangan digital sah.',
        },
        {
          heading: '7. Unduh Dokumen PDF Kontrak Resmi',
          description: 'Setelah seluruh pihak menyetujui, sistem otomatis menghasilkan file PDF resmi PTPN IV lengkap dengan QR Code barcode verifikasi tanda tangan digital Kabag dan Buyer.',
        },
      ],
    },
  },
  {
    id: 'allumna-school',
    slug: 'allumna-child-monitoring-system',
    title: 'Alumna Islamic School Pekanbaru',
    subtitle: 'Child Growth & Early Development Monitoring Web Platform (Proyek Akhir / TA)',
    category: 'Web Platform',
    year: '2025',
    client: 'Alumna Islamic School Pekanbaru',
    role: 'Fullstack Web Developer & System Designer (Individual Project)',
    timeline: '6 Months (Undergraduate Final Thesis / TA)',
    status: 'Featured',
    summary:
      'Web-based child development monitoring system developed with Laravel and MySQL to help educators and parents track cognitive, motoric, and Islamic character growth through standardized assessments and visual growth charts.',
    heroImage: '/images/allumna.jpg',
    gallery: ['/images/allumna.jpg', '/images/mindcare.jpg'],
    tags: ['Laravel', 'MySQL', 'Fullstack Web', 'Child Development', 'Visual Charts', 'Proyek Akhir / TA'],
    primaryLink: {
      type: 'figma',
      label: 'Lihat Rancangan di Figma',
      url: 'https://www.figma.com/design/bvoXtZOnz4oTGPB6Fw5YAC/PA?node-id=0-1&p=f',
    },
    secondaryLink: {
      type: 'canva',
      label: 'Dokumentasi Portofolio',
      url: 'https://www.canva.com/design/DAHL91AQq8M/1HScgvwLZlFhChzqSqzYNw/edit',
    },
    stats: [
      { label: 'Developmental Domains', value: '6 Areas', subtext: 'Cognitive, motor, moral, etc.' },
      { label: 'Parent Engagement', value: '+85%', subtext: 'Real-time daily activity tracking' },
      { label: 'Report Generation', value: '1-Click', subtext: 'Automated semester report cards' },
      { label: 'System Completeness', value: '100%', subtext: 'Individual end-to-end project' },
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
        metric: 'Full Thesis Completion',
        detail: 'Successfully defended as undergraduate final project (TA) at Politeknik Caltex Riau with top distinction.',
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
    timeline: '6 Months (Corporate MBKM Program)',
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
      label: 'Buka Panduan Sistem AgriSmart (PDF SOP)',
      url: '#guide-agrismart',
    },
    secondaryLink: {
      type: 'github',
      label: 'Repository PTPN GIS',
      url: 'https://github.com/cindyardelya22/ptpn_gis',
    },
    stats: [
      { label: 'Plantation Blocks Mapped', value: '54+ Blocks', subtext: 'Color-coded spatial polygons' },
      { label: 'AI Soil Advisor', value: 'Gemini 2.5', subtext: 'Integrated interactive assistant' },
      { label: 'Nutrient Indexing', value: 'NPK + pH', subtext: 'Comprehensive soil chemistry' },
      { label: 'Fertilizer Optimization', value: '24%', subtext: 'Projected agrochemical savings' },
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
        title: 'Login & Keamanan Akun',
        description: 'Login menggunakan nomor SAP dan Password. Dilengkapi pengamanan penguncian otomatis 10 menit jika gagal 10 kali.',
      },
      {
        step: '02',
        title: 'Dashboard & Peta Blok Interaktif',
        description: 'Menampilkan 4 kartu ringkasan, diagram status kesuburan, dan peta satelit poligon blok kebun berwarna.',
      },
      {
        step: '03',
        title: 'Input & Klasifikasi Unsur Hara',
        description: 'Input data unsur hara (N, P, K, pH) diproses oleh model machine learning untuk klasifikasi kesuburan tanah otomatis.',
      },
      {
        step: '04',
        title: 'Konsultasi Chatbot AI & Export Laporan',
        description: 'Pengguna berkonsultasi dengan chatbot AgriBot (Gemini 2.5 Flash) dan mengunduh laporan rekap dalam format PDF/Excel.',
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
        metric: 'Buku Panduan 16 Halaman Disusun',
        detail: 'Disusun oleh Cindy Ardelya, M. Zikri Haykal, Verry Adrian untuk PT Perkebunan Nusantara IV Regional III (2026).',
      },
    ],
    documentationDetails: {
      title: 'Panduan Penggunaan Sistem AgriSmart PTPN IV Regional III (2026)',
      documentType: 'PDF Manual & Technical Architecture (16 Halaman)',
      sections: [
        {
          heading: 'BAB I Panduan Menjalankan Sistem',
          description: 'Kebutuhan sistem: PHP 8.3+, Composer 2.8+, Python 3.11+, MySQL 8.0+. Struktur source code terdiri atas AgriSmart-app (Laravel) dan Flask-ml (Machine Learning).',
          steps: [
            'Unduh source code: git clone https://github.com/cindyardelya22/ptpn_gis.git',
            'Konfigurasi Laravel: composer install, cp .env.example .env, php artisan key:generate',
            'Konfigurasi Database: DB_DATABASE=agrismart, php artisan migrate --seed',
            'Konfigurasi API Key: GEMINI_API_KEY= (Gemini 2.5 Flash)',
            'Jalankan Flask ML: pip install -r requirements.txt && python app.py',
            'Jalankan Laravel: php artisan serve (akses http://127.0.0.1:8000)',
          ],
        },
        {
          heading: 'BAB II Panduan Menggunakan Sistem',
          description: 'Terdiri dari halaman Login dengan proteksi batas percobaan, Dashboard peta blok kebun, Manajemen data unsur hara, Analisis detail kesuburan tanah, Konsultasi Chatbot AgriBot, serta Laporan & Cetak Dokumen PDF/Excel.',
          steps: [
            'Halaman Login: nomor SAP & password, proteksi lock akun 10 menit.',
            'Halaman Dashboard: kartu ringkasan, peta satelit blok interaktif, status kesuburan (Subur, Kurang Subur, Tidak Subur).',
            'Chatbot AgriBot: asisten AI pintar yang menjelaskan analisis tanah & rekomendasi tindakan pemupukan.',
            'Data Unsur Hara: penambahan & pengubahan data dengan kalkulasi machine learning.',
            'Laporan & Cetak: ekspor data rekap kesuburan tanah dan rekomendasi pemupukan ke file PDF dan Excel.',
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
    timeline: '4 Months (Dataset Research & Model Training)',
    status: 'Featured',
    summary:
      'Computer vision medical diagnostic system utilizing Convolutional Neural Networks (CNN) to automatically analyze microscopic blood smear images and classify malaria-parasitized cells versus uninfected cells.',
    heroImage: '/images/malaria.jpg',
    gallery: ['/images/malaria.jpg', '/images/mindcare.jpg'],
    tags: ['Deep Learning', 'CNN (Convolutional Neural Networks)', 'Python', 'TensorFlow / Keras', 'Medical AI'],
    primaryLink: {
      type: 'canva',
      label: 'Buka Slide Riset di Canva',
      url: 'https://www.canva.com/design/DAGnSRBlMyw/2o9EVtakLUgiyg7EyRuSPg/edit',
    },
    secondaryLink: {
      type: 'canva',
      label: 'Dokumentasi Portofolio',
      url: 'https://www.canva.com/design/DAHL91AQq8M/1HScgvwLZlFhChzqSqzYNw/edit',
    },
    stats: [
      { label: 'Classification Accuracy', value: '96.8%', subtext: 'Validated on test split' },
      { label: 'Model Architecture', value: 'Custom CNN', subtext: 'Multi-layer Conv2D + Pooling' },
      { label: 'Inference Speed', value: '<80ms', subtext: 'Per microscopic cell image' },
      { label: 'Dataset Analyzed', value: '27,500+', subtext: 'Cell images processed' },
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
