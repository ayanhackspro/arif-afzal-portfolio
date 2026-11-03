import type { Metadata, Viewport } from 'next';
import './globals.css';
import { PERSONAL_DETAILS } from '@/data/portfolioData';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF9F5' },
    { media: '(prefers-color-scheme: dark)', color: '#111211' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://arifafzal.dev'),
  title: {
    default: 'Arif Afzal — Software Developer, Technical Educator & Founder',
    template: '%s | Arif Afzal',
  },
  description:
    'Independent portfolio of Arif Afzal. Software developer, computer science educator, and founder based in West Champaran, Bihar, India. Focused on real-time systems, algorithmic engineering, and educational leadership.',
  keywords: [
    'Arif Afzal',
    'Software Developer Bihar',
    'Full Stack Engineer',
    'Computer Science Instructor',
    'GLA University Alumnus',
    'BubbleChat',
    'Deal Detective',
    'Essence Royale Founder',
    'Data Structures and Algorithms Java',
    'AWS Serverless React Developer',
  ],
  authors: [{ name: 'Arif Afzal', url: 'https://github.com/Arifafzal51' }],
  creator: 'Arif Afzal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arifafzal.dev',
    title: 'Arif Afzal — Software Developer, Technical Educator & Founder',
    description:
      'Building things. Solving problems. Sharing knowledge. Software developer, educator, and startup founder from West Champaran, Bihar.',
    siteName: 'Arif Afzal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arif Afzal — Software Developer, Technical Educator & Founder',
    description:
      'Building things. Solving problems. Sharing knowledge. Explore selected systems, technical teaching, and startup achievements.',
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
    jobTitle: 'Software Developer & Technical Educator',
    description: PERSONAL_DETAILS.tagline,
    url: 'https://arifafzal.dev',
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
    alumnusOf: {
      '@type': 'EducationalOrganization',
      name: PERSONAL_DETAILS.education.institution,
    },
    knowsAbout: [
      'Software Engineering',
      'Data Structures & Algorithms',
      'React.js',
      'Next.js',
      'Cloud Computing',
      'AWS Lambda',
      'Serverless Architecture',
      'WebSocket Systems',
      'Java',
      'Competitive Programming',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500;600&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans bg-[#FAF9F5] dark:bg-[#111211] text-[#141413] dark:text-[#F2F1ED] antialiased selection:bg-[#284E3A] selection:text-[#FAF9F5] dark:selection:bg-[#4E8767] dark:selection:text-[#111211] transition-colors duration-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-forest text-white text-xs font-mono tracking-wider uppercase rounded-sm shadow-md"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
