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
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#111215' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cindyardelya.dev'),
  title: 'Cindy Ardelya — Software Engineer & Web Developer',
  description:
    'Portfolio of Cindy Ardelya, an Informatics Engineering graduate from Politeknik Caltex Riau. Fullstack web developer (Laravel), native Android engineer (Kotlin), and EC-Council certified security specialist.',
  keywords: [
    'Cindy Ardelya',
    'Personal Portfolio',
    'Informatics Engineering Graduate',
    'Software Engineer',
    'Web Developer',
    'Politeknik Caltex Riau',
    'Android Kotlin Developer',
    'Laravel Fullstack Developer',
    'EC-Council Certified',
    'PTPN IV Regional III',
  ],
  authors: [{ name: 'Cindy Ardelya' }],
  openGraph: {
    title: 'Cindy Ardelya — Software Engineer & Web Developer',
    description:
      'Portfolio of Cindy Ardelya, an Informatics Engineering graduate from Politeknik Caltex Riau. Fullstack web developer (Laravel), native Android engineer (Kotlin), and EC-Council certified security specialist.',
    url: 'https://cindyardelya.dev',
    siteName: 'Cindy Ardelya Portfolio',
    images: [
      {
        url: '/images/profile.jpg',
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
    title: 'Cindy Ardelya — Software Engineer & Web Developer',
    description:
      'Portfolio of Cindy Ardelya, an Informatics Engineering graduate from Politeknik Caltex Riau. Fullstack web developer (Laravel), native Android engineer (Kotlin), and EC-Council certified security specialist.',
    images: ['/images/profile.jpg'],
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
      <body className="min-h-screen bg-[#fafaf9] dark:bg-[#111215] text-zinc-900 dark:text-zinc-100 font-sans antialiased selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-zinc-900 transition-colors duration-300">
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
