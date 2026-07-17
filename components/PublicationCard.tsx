import Image from 'next/image';
import { Publication } from '@/lib/data';

export default function PublicationCard({ name, logo, blurb, allHref, articles }: Publication) {
  return (
    <section style={{
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-xs)',
    }}>
      <header style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
        <span style={{
          flex: '0 0 auto', width: 64, height: 64,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--c-white)',
          borderRadius: 'var(--radius-sm)', overflow: 'hidden',
          position: 'relative',
        }}>
          <Image src={logo} alt={name} fill style={{ objectFit: 'contain' }} />
        </span>
        <div style={{ flex: '1 1 240px', minWidth: 0 }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-regular)', fontSize: 'var(--text-lg)', lineHeight: 'var(--lh-snug)', color: 'var(--c-ink)' }}>
            {name}
          </h3>
          {blurb && (
            <p style={{ margin: '6px 0 0', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-base)', lineHeight: 'var(--lh-normal)', color: 'var(--text-secondary)' }}>
              {blurb}
            </p>
          )}
        </div>
        <a href={allHref} target="_blank" rel="noreferrer" className="hover-underline-ink" style={{
          flex: '0 0 auto',
          alignSelf: 'center',
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--link)',
          whiteSpace: 'nowrap',
        }}>
          View all articles →
        </a>
      </header>

      {articles.length > 0 && (
        <div style={{ marginTop: 'var(--space-5)' }}>
          {articles.map((a, i) => (
            <div key={i} style={{
              borderTop: i !== 0 ? '1px solid var(--border-hairline)' : 'none',
              paddingTop: i !== 0 ? 'var(--space-4)' : 0,
              marginTop: i !== 0 ? 'var(--space-4)' : 0,
              display: 'flex', justifyContent: 'space-between', gap: 'var(--space-4)', alignItems: 'baseline', flexWrap: 'wrap',
            }}>
              <a href={a.href} target="_blank" rel="noreferrer" className="hover-underline-ink" style={{
                fontFamily: 'var(--font-serif)', fontSize: 'var(--text-base)',
                color: 'var(--c-ink)', flex: '1 1 280px',
              }}>
                {a.title}
              </a>
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                {a.date}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
