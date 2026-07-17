import Link from 'next/link';
import Image from 'next/image';
import Tag from './Tag';
import { Post } from '@/lib/data';

export default function TextPostRow({ post }: { post: Post }) {
  const href = `/blog/${post.slug}`;
  return (
    <article style={{ padding: 'clamp(20px,3vw,28px) 0', borderTop: '1px solid var(--border-hairline)' }}>
      <div style={{ display: 'flex', gap: 'clamp(18px,3vw,32px)', alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 auto', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)' }}>
            <Tag category={post.category} />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{post.date}</span>
          </div>
          <Link href={href} className="hover-underline" style={{
            display: 'inline-block',
            fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-regular)',
            fontSize: 'var(--text-xl)', lineHeight: 'var(--lh-snug)', color: 'var(--c-ink)',
          }}>
            {post.title}
          </Link>
          {post.excerpt && (
            <p style={{
              margin: '12px 0 0', maxWidth: '64ch',
              fontFamily: 'var(--font-serif)', fontSize: 'var(--text-md)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-body)',
              display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
            } as React.CSSProperties}>
              {post.excerpt}
            </p>
          )}
          <div style={{ marginTop: 'var(--space-3)' }}>
            <Link href={href} className="hover-underline-ink" style={{
              fontFamily: 'var(--font-serif)', fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--link)',
            }}>
              Keep reading →
            </Link>
          </div>
        </div>
        {post.image && (
          <Link href={href} aria-label={post.title} style={{
            flex: '0 0 auto', width: 'clamp(120px,22vw,200px)', alignSelf: 'stretch', minHeight: 110,
            borderRadius: 'var(--radius-md)', overflow: 'hidden',
            background: 'var(--surface-sand)', border: '1px solid var(--border-hairline)',
            position: 'relative',
          }}>
            <Image src={post.image} alt="" fill style={{ objectFit: 'cover' }} />
          </Link>
        )}
      </div>
    </article>
  );
}
