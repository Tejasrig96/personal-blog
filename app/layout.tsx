import type { Metadata } from 'next';
import './globals.css';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: { default: 'Tejasri Gururaj', template: '%s | Tejasri Gururaj' },
  description: 'Freelance science writer and journalist based in India, telling stories about research in a way that resonates with everyone.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
