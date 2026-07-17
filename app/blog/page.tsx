import type { Metadata } from 'next';
import PageHeading from '@/components/PageHeading';
import TextPostRow from '@/components/TextPostRow';
import { POSTS } from '@/lib/data';

export const metadata: Metadata = { title: 'Blog' };

export default function Blog() {
  // Newest → oldest. Posts with no date (coming soon) sort to the end.
  const posts = POSTS.slice().sort((a, b) => (b.dateISO || '').localeCompare(a.dateISO || ''));
  return (
    <section style={{ padding: 'clamp(40px,7vw,80px) var(--page-gutter)', maxWidth: 'var(--measure-content)', margin: '0 auto' }}>
      <PageHeading title="Blog" />
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 8 }}>
        {posts.map((p) => (
          <TextPostRow key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}
