import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Tag from '@/components/Tag';
import RainCalculator from '@/components/RainCalculator';
import { POSTS } from '@/lib/data';

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  return { title: post?.title ?? 'Post' };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const body = post.body;
  // Don't repeat the cover image when it's also an inline body figure.
  const coverInBody = !!post.image && body.some((b) => b.img === post.image);
  const showCover = !!post.image && !coverInBody;

  return (
    <article style={{ padding: 'clamp(36px,6vw,72px) var(--page-gutter)', maxWidth: 'var(--measure-prose)', margin: '0 auto', fontFamily: 'var(--font-serif)', color: 'var(--text-body)' }}>
      <Link href="/blog" className="btn-link">
        <span aria-hidden="true">←</span> Back to blog
      </Link>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', margin: '20px 0 14px' }}>
        <Tag category={post.category} />
        <span style={{ fontStyle: 'italic', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{post.date}</span>
      </div>

      <h1 style={{
        margin: 0, fontWeight: 'var(--fw-light)', fontSize: 'clamp(30px,4.5vw,51px)',
        lineHeight: 'var(--lh-tight)', color: 'var(--c-ink)', textWrap: 'balance',
      } as React.CSSProperties}>
        {post.title}
      </h1>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '22px 0' }}>
        <div style={{ position: 'relative', width: 44, height: 44, borderRadius: 'var(--radius-pill)', overflow: 'hidden', flexShrink: 0 }}>
          <Image src="/assets/avatar-tejasri.jpg" alt="Tejasri Gururaj" fill style={{ objectFit: 'cover' }} />
        </div>
        <span style={{ fontSize: 'var(--text-sm)' }}>By <strong style={{ fontWeight: 'var(--fw-medium)' }}>Tejasri Gururaj</strong></span>
      </div>

      {showCover && (
        <figure style={{ margin: '4px 0 28px' }}>
          <div style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: 'var(--radius-md)', background: 'var(--surface-sand)', position: 'relative' }}>
            <Image src={post.image!} alt="" fill style={{ objectFit: 'cover' }} />
          </div>
        </figure>
      )}

      <hr style={{ border: 0, borderTop: '1px solid var(--border-hairline)', margin: '0 0 var(--space-6)' }} />

      {body.length === 0 && (
        <p style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--lh-relaxed)', fontStyle: 'italic', color: 'var(--text-muted)' }}>
          This post is still in the works — check back soon.
        </p>
      )}

      {body.map((b, i) => {
        if (b.widget === 'rain-calculator') {
          return <RainCalculator key={i} />;
        }
        if (b.h) {
          return (
            <h3 key={i} style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--fw-regular)', margin: '28px 0 10px', color: 'var(--c-ink)' }}>
              {b.h}
            </h3>
          );
        }
        if (b.img) {
          return (
            <figure key={i} style={{ margin: '28px 0' }}>
              <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-hairline)', background: 'var(--c-white)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.img} alt={b.cap || ''} style={{ width: '100%', display: 'block' }} />
              </div>
              {b.cap && (
                <figcaption style={{ fontSize: 'var(--text-sm)', fontStyle: 'italic', color: 'var(--text-muted)', marginTop: 8 }}>
                  {b.cap}
                </figcaption>
              )}
            </figure>
          );
        }
        return (
          <p key={i} style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
            {b.p}
          </p>
        );
      })}
    </article>
  );
}
