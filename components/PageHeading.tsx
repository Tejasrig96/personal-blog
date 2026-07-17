export default function PageHeading({ title }: { title: string }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 'clamp(28px,4vw,44px)' }}>
      <h1 style={{
        margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-light)',
        fontSize: 'clamp(36px,5vw,56px)', lineHeight: 'var(--lh-tight)', color: 'var(--c-ink)',
      }}>
        {title}
      </h1>
      <div style={{ width: 96, height: 2, background: 'var(--c-ink)', margin: 'clamp(20px,3vw,28px) auto 0' }} />
    </div>
  );
}
