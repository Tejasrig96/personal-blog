'use client';
import { useState } from 'react';

const ICONS = {
  linkedin: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.83v1.64h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9V9Z" />,
  email: <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm.4 2 8.6 6 8.6-6H3.4ZM20 8.3l-7.4 5.2a1 1 0 0 1-1.2 0L4 8.3V17h16V8.3Z" />,
};

const BRAND_COLORS: Record<string, string> = { linkedin: '#0A66C2', email: '#5d8889' };

const ITEMS = [
  { type: 'linkedin' as const, href: 'https://www.linkedin.com/in/tejasri-gururaj-q3f5/', label: 'LinkedIn' },
  { type: 'email' as const, href: 'mailto:tejasrigururaj@gmail.com', label: 'Email' },
];

function SocialChip({ type, href, label, size, tone }: { type: keyof typeof ICONS; href: string; label: string; size: number; tone: 'ink' | 'brand' }) {
  const [hover, setHover] = useState(false);
  const brand = BRAND_COLORS[type] || 'var(--c-ink)';
  const isBrand = tone === 'brand';
  const bg = hover ? (isBrand ? brand : 'var(--c-ink)') : 'var(--surface-sand)';
  const fg = hover ? 'var(--c-cream)' : (isBrand ? brand : 'var(--c-ink)');
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: 'var(--radius-pill)',
        background: bg,
        color: fg,
        transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard)',
      }}
    >
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {ICONS[type]}
      </svg>
    </a>
  );
}

export default function SocialLinks({ size = 40, tone = 'ink' }: { size?: number; tone?: 'ink' | 'brand' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
      {ITEMS.map((it) => <SocialChip key={it.type} {...it} size={size} tone={tone} />)}
    </div>
  );
}
