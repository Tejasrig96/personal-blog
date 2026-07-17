import Image from 'next/image';
import { APPROACH, STATS, BEATS, FEATURED } from '@/lib/data';

export default function Home() {
  return (
    <div>
      {/* Hero — headline + atom illustration */}
      <section style={{ background: 'var(--surface-sage)', overflow: 'hidden' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(40px,6vw,76px) var(--page-gutter) 0', textAlign: 'center' }}>
          <h1 style={{
            margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-light)',
            fontSize: 'clamp(34px,5.2vw,58px)', lineHeight: 'var(--lh-tight)', color: 'var(--c-ink)',
            textWrap: 'balance',
          } as React.CSSProperties}>
            <em style={{ fontStyle: 'italic' }}>Transforming</em> complex science into stories for everyone
          </h1>
        </div>
        <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
          <Image
            src="/assets/banner.png"
            alt="An electron leaving a glow and orbiting into an atom"
            width={1920}
            height={765}
            priority
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Approach + stats */}
      <section style={{ background: 'var(--surface-page)', padding: 'clamp(52px,7vw,92px) var(--page-gutter) clamp(40px,5vw,56px)' }}>
        <div style={{ maxWidth: 'var(--measure-content)', margin: '0 auto' }}>
          <h2 style={{
            margin: '0 0 clamp(36px,5vw,56px)', textAlign: 'center',
            fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-light)',
            fontSize: 'clamp(30px,4vw,46px)', lineHeight: 'var(--lh-snug)', color: 'var(--c-ink)',
          }}>
            My approach to science storytelling
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(28px,4vw,52px)' }}>
            {APPROACH.map((a, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <Image src={a.icon} alt="" width={88} height={88} style={{ margin: '0 auto 20px', display: 'block' }} />
                <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 'var(--text-md)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-body)' }}>{a.text}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'clamp(24px,4vw,40px)', marginTop: 'clamp(44px,5vw,68px)' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                  <Image src={s.icon} alt="" width={34} height={34} />
                  <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-light)', fontSize: 'clamp(30px,4vw,46px)', lineHeight: 1, color: 'var(--c-ink)' }}>{s.value}</span>
                </div>
                <div style={{ marginTop: 10, fontFamily: 'var(--font-serif)', fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beats I cover */}
      <section style={{ background: 'var(--surface-page)', padding: 'clamp(12px,2vw,20px) var(--page-gutter) clamp(48px,7vw,88px)' }}>
        <div style={{ maxWidth: 'var(--measure-content)', margin: '0 auto' }}>
          <h2 style={{
            margin: '0 0 clamp(32px,5vw,52px)', textAlign: 'center',
            fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-light)',
            fontSize: 'clamp(30px,4vw,46px)', lineHeight: 'var(--lh-snug)', color: 'var(--c-ink)',
          }}>
            Beats I cover
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'clamp(22px,3vw,36px)' }}>
            {BEATS.map((b, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <Image src={b.icon} alt="" width={58} height={58} style={{ margin: '0 auto 16px', display: 'block' }} />
                <h3 style={{ margin: '0 0 10px', fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-regular)', fontSize: 'var(--text-md)', lineHeight: 'var(--lh-snug)', color: 'var(--c-ink)' }}>{b.title}</h3>
                <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-secondary)' }}>{b.q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section style={{ background: 'var(--surface-page)', padding: 'clamp(12px,2vw,20px) var(--page-gutter) clamp(56px,8vw,96px)' }}>
        <div style={{ maxWidth: 'var(--measure-content)', margin: '0 auto' }}>
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-xs)' }}>
            <h2 style={{
              margin: '0 0 var(--space-5)', textAlign: 'center',
              fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-light)',
              fontSize: 'var(--text-xl)', lineHeight: 'var(--lh-snug)', color: 'var(--c-ink)',
            }}>
              Featured work
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-5)' }}>
              {FEATURED.map((f, i) => (
                <a key={i} href={f.href} target="_blank" rel="noreferrer" className="featured-tile" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', textDecoration: 'none' }}>
                  <span style={{ width: '100%', aspectRatio: '16 / 9', borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: 'var(--surface-sand)', display: 'block' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </span>
                  <span>
                    <span className="featured-title" style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-md)', lineHeight: 'var(--lh-snug)', color: 'var(--c-ink)' }}>{f.title}</span>
                    <span style={{ display: 'block', marginTop: 6, fontFamily: 'var(--font-serif)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{f.publication}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
