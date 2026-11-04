import type { Metadata, Viewport } from 'next';
import './globals.css';
import { PERSONAL_DETAILS } from '@/data/portfolioData';

export const viewport: Viewport = {
  themeColor: '#0b0d0e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://arifafzal.dev'),
  title: {
    default: 'Arif Afzal — Software Developer, CS Instructor & Founder',
    template: '%s | Arif Afzal',
  },
  description:
    'Arif Afzal is a software developer, computer science educator, and founder based in West Champaran, Bihar, India. Builder of BubbleChat, Deal Detective, and mentor to 150+ students in Data Structures & Web Technologies.',
  authors: [{ name: 'Arif Afzal', url: 'https://github.com/Arifafzal51' }],
  creator: 'Arif Afzal',
  keywords: [
    'Arif Afzal',
    'Software Developer India',
    'Full Stack Engineer',
    'Computer Science Instructor',
    'GLA University',
    'West Champaran Bihar',
    'BubbleChat',
    'Deal Detective',
    'Essence Royale Founder',
    'DSA in Java',
  ],
  icons: {
    icon: '/avatar.jpg',
    apple: '/avatar.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arifafzal.dev',
    title: 'Arif Afzal — Software Developer, CS Instructor & Founder',
    description:
      'Building things. Solving problems. Sharing knowledge. Software developer, educator, and startup founder from West Champaran, Bihar.',
    siteName: 'Arif Afzal',
    images: [
      {
        url: '/avatar.jpg',
        width: 800,
        height: 1000,
        alt: 'Arif Afzal — Software Developer & Educator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arif Afzal — Software Developer, CS Instructor & Founder',
    description:
      'Building things. Solving problems. Sharing knowledge. Explore selected systems, technical teaching, and startup achievements.',
    images: ['/avatar.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://arifafzal.dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_DETAILS.name,
    jobTitle: 'Software Developer & Computer Science Educator',
    description: PERSONAL_DETAILS.tagline,
    image: 'https://arifafzal.dev/avatar.jpg',
    url: 'https://arifafzal.dev',
    email: PERSONAL_DETAILS.email,
    telephone: PERSONAL_DETAILS.phone,
    sameAs: [
      PERSONAL_DETAILS.github,
      PERSONAL_DETAILS.linkedin,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'West Champaran',
      addressRegion: 'Bihar',
      addressCountry: 'India',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: PERSONAL_DETAILS.education.institution,
    },
    knowsAbout: [
      'Java',
      'Data Structures & Algorithms',
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'AWS Lambda',
      'Serverless',
      'WebSocket API',
      'Tailwind CSS',
      'Full Stack Web Development',
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" type="image/jpeg" href="/avatar.jpg" />
        <link rel="apple-touch-icon" href="/avatar.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0b0d0e] text-[#b3b3b3] antialiased selection:bg-white/20 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-3 py-1.5 bg-[#1a1b1c] text-white text-xs font-mono border border-[#333333] rounded"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
