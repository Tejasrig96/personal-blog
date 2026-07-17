import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import TextPostRow from '@/components/TextPostRow';
import { POSTS, categorySlug } from '@/lib/data';

const CATEGORIES = Array.from(new Set(POSTS.map((p) => p.category)));

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: categorySlug(c) }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const name = CATEGORIES.find((c) => categorySlug(c) === category);
  return { title: name ? `Category: ${name}` : 'Category' };
}

export default async function Category({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const name = CATEGORIES.find((c) => categorySlug(c) === category);
  if (!name) notFound();

  const posts = POSTS.filter((p) => p.category === name)
    .sort((a, b) => (b.dateISO || '').localeCompare(a.dateISO || ''));

  return (
    <section style={{ padding: 'clamp(40px,7vw,80px) var(--page-gutter)', maxWidth: 'var(--measure-content)', margin: '0 auto' }}>
      <Link href="/blog" className="btn-link">
        <span aria-hidden="true">←</span> All posts
      </Link>
      <h1 style={{
        margin: '20px 0 0', padding: 'clamp(10px,1.5vw,16px) clamp(16px,2vw,22px)',
        background: 'var(--surface-sage)',
        fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-light)',
        fontSize: 'clamp(28px,4vw,46px)', lineHeight: 'var(--lh-snug)', color: 'var(--c-ink)',
      }}>
        Category: {name}
      </h1>
      <hr style={{ border: 0, borderTop: '1px solid var(--border-rule)', opacity: 0.55, margin: 'var(--space-6) 0' }} />
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 8 }}>
        {posts.map((p) => (
          <TextPostRow key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}
