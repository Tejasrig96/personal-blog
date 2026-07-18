import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';
import './globals.css';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tejasrigururaj.com'),
  title: { default: 'Tejasri Gururaj', template: '%s | Tejasri Gururaj' },
  description: 'Freelance science writer and journalist based in India, telling stories about research in a way that resonates with everyone.',
  openGraph: {
    type: 'website',
    siteName: 'Tejasri Gururaj',
    title: 'Tejasri Gururaj',
    description: 'Freelance science writer and journalist based in India, telling stories about research in a way that resonates with everyone.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tejasri Gururaj',
    description: 'Freelance science writer and journalist based in India, telling stories about research in a way that resonates with everyone.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ebGaramond.variable}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--surface-page)', margin: 0 }}>
        <header style={{ position: 'sticky', top: 0, zIndex: 10 }}>
          <SiteNav />
        </header>
        <main style={{ flex: 1 }}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
