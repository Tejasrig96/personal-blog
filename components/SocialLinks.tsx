'use client';
import { useState } from 'react';

const ICONS = {
  instagram: <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.4.37 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.25 1.8-.42 2.2-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.4.17-1 .37-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.25-2.2-.42-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.17-.4-.37-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.25-1.8.42-2.2.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.4-.17 1-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.98c-3.14 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.6-.07-4.74-.07Zm0 3.37a5.06 5.06 0 1 1 0 10.12 5.06 5.06 0 0 1 0-10.12Zm0 8.34a3.28 3.28 0 1 0 0-6.56 3.28 3.28 0 0 0 0 6.56Zm6.44-8.56a1.18 1.18 0 1 1-2.36 0 1.18 1.18 0 0 1 2.36 0Z" />,
  linkedin: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.83v1.64h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9V9Z" />,
  email: <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm.4 2 8.6 6 8.6-6H3.4ZM20 8.3l-7.4 5.2a1 1 0 0 1-1.2 0L4 8.3V17h16V8.3Z" />,
};

const BRAND_COLORS: Record<string, string> = { instagram: '#E1306C', linkedin: '#0A66C2', email: '#5d8889' };

const ITEMS = [
  { type: 'instagram' as const, href: 'https://www.instagram.com/darkmatter_96/', label: 'Instagram' },
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
