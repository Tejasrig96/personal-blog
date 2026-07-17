import Link from 'next/link';
import { catTone, categorySlug } from '@/lib/data';

export default function Tag({ category, link = true }: { category: string; link?: boolean }) {
  const cls = `tg-tag tg-tag--${catTone(category)}`;
  if (!link) return <span className={cls}>{category}</span>;
  return (
    <Link href={`/blog/category/${categorySlug(category)}`} className={cls}>
      {category}
    </Link>
  );
}
