import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ethan Stein',
  description: 'Finance student at UNC Wilmington. ThermoFisher P&A Intern. SGA Treasurer. Founder of BuildSiteCo.',
  metadataBase: new URL('https://ethanstein.com'),
  openGraph: {
    title: 'Ethan Stein',
    description: 'Finance student at UNC Wilmington. ThermoFisher P&A Intern. SGA Treasurer. Founder of BuildSiteCo.',
    url: 'https://ethanstein.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ethan Stein',
  email: 'es2631@uncw.edu',
  url: 'https://ethanstein.com',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of North Carolina Wilmington',
  },
  jobTitle: 'Finance Intern, Performance & Analysis',
  worksFor: {
    '@type': 'Organization',
    name: 'ThermoFisher Scientific',
  },
  sameAs: ['https://www.linkedin.com/in/ethan-stein1'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-background text-foreground" style={{ fontFamily: 'var(--font-body)' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
