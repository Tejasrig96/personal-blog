import type { Metadata } from 'next';
import PageHeading from '@/components/PageHeading';

export const metadata: Metadata = { title: 'About me' };

const para: React.CSSProperties = {
  margin: '0 0 var(--space-5)',
  fontFamily: 'var(--font-serif)',
  fontSize: 'var(--text-md)',
  lineHeight: 'var(--lh-relaxed)',
  color: 'var(--text-body)',
};

export default function About() {
  return (
    <section style={{ padding: 'clamp(40px,7vw,80px) var(--page-gutter)', maxWidth: 900, margin: '0 auto' }}>
      <PageHeading title="About me" />
      <div style={{ textAlign: 'center', marginTop: 'clamp(-12px,-1vw,-4px)' }}>
        <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-light)', fontSize: 'clamp(20px,3vw,30px)', lineHeight: 'var(--lh-snug)', color: 'var(--c-ink)' }}>
          I read the nitty gritty science stuff so you don&apos;t have to!
        </p>
      </div>

      {/* Portrait floats right; bio wraps around it */}
      <div style={{ marginTop: 'clamp(40px,6vw,68px)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/photos/portrait.jpg"
          alt="Tejasri Gururaj"
          style={{
            float: 'right',
            width: 'clamp(200px,38%,320px)',
            height: 'auto',
            margin: '6px 0 18px clamp(24px,4vw,40px)',
            display: 'block',
            borderRadius: 'var(--radius-md)',
            shapeOutside: 'inset(0 round var(--radius-md))',
          } as React.CSSProperties}
        />
        <h2 style={{ margin: '0 0 var(--space-5)', fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-regular)', fontSize: 'clamp(26px,3vw,34px)', lineHeight: 'var(--lh-snug)', color: 'var(--c-ink)' }}>
          Hi, I&apos;m Tejasri!
        </h2>
        <p style={para}>I am a freelance science writer and journalist based in India.</p>
        <p style={para}>
          Ever since I was a kid, I have loved and been fascinated by science. It was only natural for me to go on and study Physics at university, obtaining a bachelor&apos;s and master&apos;s in physics.
        </p>
        <p style={para}>
          While I initially planned to pursue research, I&apos;ve had a soft spot for writing and storytelling thanks to my grandfather, who was also a journalist.
        </p>
        <p style={para}>
          Today, I find ways to tell stories about research in a way that resonates with everyone.
        </p>
        <p style={para}>
          My goal is to help everyone (even people who don&apos;t like science) understand what happens behind heavy equipment and complex mathematical equations because after all, science is all around us!
        </p>
        <p style={{ ...para, marginBottom: 0 }}>
          When I&apos;m not cooking up stories, you can find me curled up with my cats watching television, reading a book, or playing video games.
        </p>
        <div style={{ clear: 'both' }} />
      </div>
    </section>
  );
}
