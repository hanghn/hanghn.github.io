import type { Metadata } from 'next';
import { Source_Serif_4 } from 'next/font/google';
import Script from 'next/script';

import CodeBackground from '@/components/Template/CodeBackground';
import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import ScrollToTop from '@/components/Template/ScrollToTop';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';
import './tailwind.css';

const sourceSerif = Source_Serif_4({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const siteDescription =
  'Computer Science + Business student at Northeastern University — Khoury College. Currently a TA for Foundations of Data Science. Seeking Summer 2026 internships in data science, ML, fintech, or software engineering.';

export const metadata: Metadata = {
  title: {
    default: AUTHOR_NAME,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: siteDescription,
  keywords: [
    AUTHOR_NAME,
    'Northeastern University',
    'Khoury College',
    'Computer Science',
    'Business',
    'Data Science',
    'Machine Learning',
    'Boston',
    'Summer 2026 Internship',
  ],
  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: AUTHOR_NAME,
    title: AUTHOR_NAME,
    description: siteDescription,
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: AUTHOR_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: AUTHOR_NAME,
    description: siteDescription,
    images: ['/images/me.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceSerif.variable} suppressHydrationWarning>
      <head>
        {/* CSP-safe theme initialization - prevents flash on load */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=window.localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.setAttribute('data-theme','dark')}else{document.documentElement.setAttribute('data-theme','light')}}catch(e){}})();`}
        </Script>
      </head>
      <body>
        <ScrollToTop />
        <CodeBackground />
        <div className="site-wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
