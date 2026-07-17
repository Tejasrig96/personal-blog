import type { Metadata } from 'next';
import PageHeading from '@/components/PageHeading';
import PublicationCard from '@/components/PublicationCard';
import { PUBLICATIONS, OTHER_PUBS } from '@/lib/data';

export const metadata: Metadata = { title: 'Portfolio' };

export default function Portfolio() {
  return (
    <section style={{ padding: 'clamp(40px,7vw,80px) var(--page-gutter)', maxWidth: 980, margin: '0 auto' }}>
      <PageHeading title="Portfolio" />
      <p style={{
        textAlign: 'center', maxWidth: '64ch', margin: '0 auto clamp(32px,5vw,48px)',
        fontFamily: 'var(--font-serif)', fontSize: 'var(--text-md)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-secondary)',
      }}>
        A selection of my published work covering a wide range of topics in leading science and news outlets worldwide.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {PUBLICATIONS.map((p) => (
          <PublicationCard key={p.name} {...p} />
        ))}
      </div>

      <div style={{ marginTop: 48 }}>
        <hr style={{ border: 0, borderTop: '1px solid var(--border-rule)', opacity: 0.55, margin: '0 0 var(--space-6)' }} />
        <div style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 24 }}>
          Also featured in
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(28px,5vw,56px)', alignItems: 'center', justifyContent: 'center' }}>
          {OTHER_PUBS.map((o) => (
            <a key={o.name} href={o.href} target="_blank" rel="noreferrer" style={{ display: 'inline-flex' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={o.logo} alt={o.name} title={o.name} className="pub-logo" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
