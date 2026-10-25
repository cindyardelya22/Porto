import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import { CursorProvider } from '@/context/CursorContext';
import { ThemeProvider } from '@/context/ThemeContext';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF9FE' },
    { media: '(prefers-color-scheme: dark)', color: '#09090B' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cindyardelya.dev'),
  title: 'Cindy Ardelya — Mobile & Fullstack Developer | Personal Portfolio',
  description:
    'Official portfolio of Cindy Ardelya, Fresh Graduate from Politeknik Caltex Riau. Showcasing native Android (MindCare & By-Pro PTPN IV), fullstack web & GIS (Alumna Islamic School Pekanbaru & AgriSmart), and applied deep learning.',
  keywords: [
    'Cindy Ardelya',
    'Personal Portfolio',
    'Politeknik Caltex Riau',
    'Fresh Graduate Software Engineer',
    'MindCare',
    'By-Pro Sales Contract',
    'PTPN IV Regional III',
    'Alumna Islamic School Pekanbaru',
    'AgriSmart GIS',
    'Malaria CNN',
    'Android Kotlin Developer',
    'Laravel Fullstack',
  ],
  authors: [{ name: 'Cindy Ardelya' }],
  openGraph: {
    title: 'Cindy Ardelya — Mobile & Fullstack Developer | Personal Portfolio',
    description:
      'Personal creative portfolio of Cindy Ardelya, Fresh Graduate from Politeknik Caltex Riau. Showcasing MindCare, By-Pro PTPN IV, Alumna Islamic School Pekanbaru, AgriSmart GIS, and Malaria CNN Classifier.',
    url: 'https://cindyardelya.dev',
    siteName: 'Cindy Ardelya Portfolio',
    images: [
      {
        url: '/images/mindcare.jpg',
        width: 1200,
        height: 630,
        alt: 'Cindy Ardelya Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cindy Ardelya — Mobile & Fullstack Developer | Personal Portfolio',
    description:
      'Personal creative portfolio of Cindy Ardelya. Showcasing MindCare, By-Pro, Alumna Islamic School Pekanbaru, AgriSmart, and Malaria CNN.',
    images: ['/images/mindcare.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('porto_theme');
                if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#faf9fe] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 font-sans antialiased selection:bg-purple-500 selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <CursorProvider>
            <CustomCursor />
            <SmoothScroll>{children}</SmoothScroll>
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
