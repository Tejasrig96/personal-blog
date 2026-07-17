import SocialLinks from './SocialLinks';

export default function SiteFooter() {
  return (
    <footer style={{
      background: 'var(--surface-sage)',
      color: 'var(--c-ink)',
      padding: 'var(--space-8) var(--page-gutter)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 560, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-5)' }}>
        <SocialLinks size={42} tone="brand" />
        <p style={{
          margin: 0,
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 'var(--text-xs)',
          color: 'var(--text-secondary)',
        }}>
          Designed with care · Graphics from Canva and Freepik
        </p>
      </div>
    </footer>
  );
}
