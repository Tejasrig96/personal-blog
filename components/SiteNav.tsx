'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function SiteNav() {
  const pathname = usePathname();
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      flexWrap: 'wrap',
      background: 'var(--surface-sage)',
      padding: 'var(--space-5) var(--page-gutter)',
    }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', textDecoration: 'none' }}>
        <Image src="/assets/avatar-tejasri.jpg" alt="" width={38} height={38} style={{
          objectFit: 'cover', borderRadius: 6, border: '2px solid var(--c-teal)', flex: '0 0 auto',
        }} />
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 'var(--fw-medium)',
          fontSize: 'var(--text-xs)',
          letterSpacing: 'var(--ls-caps)',
          textTransform: 'uppercase',
          color: 'var(--c-ink)',
          lineHeight: 1.7,
        }}>
          Tejasri Gururaj
        </span>
      </Link>
      <ul style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)', margin: 0, padding: 0, listStyle: 'none', flexWrap: 'wrap' }}>
        {LINKS.map((l) => {
          const active = l.href === '/'
            ? pathname === '/'
            : pathname === l.href || pathname.startsWith(l.href + '/');
          return (
            <li key={l.label}>
              <Link href={l.href} style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--text-base)',
                color: 'var(--c-ink)',
                textDecorationLine: active ? 'underline' : 'none',
                textDecorationColor: 'var(--c-ink)',
                textUnderlineOffset: '5px',
                textDecorationThickness: active ? '2px' : '1px',
                opacity: active ? 1 : 0.85,
              }}>
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
