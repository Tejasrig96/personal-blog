import type { Metadata } from 'next';
import PageHeading from '@/components/PageHeading';
import SocialLinks from '@/components/SocialLinks';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = { title: 'Contact me' };

export default function Contact() {
  return (
    <section style={{ padding: 'clamp(40px,7vw,80px) var(--page-gutter)', maxWidth: 680, margin: '0 auto', fontFamily: 'var(--font-serif)' }}>
      <PageHeading title="Contact me" />
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-body)', margin: '0 0 var(--space-4)' }}>
          You can reach out via email, social media, or through the form below.
        </p>
        <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-secondary)' }}>
          I&apos;m open to collaborations with researchers, science communicators, journalists, and organizations working to make science accessible. While I can&apos;t guarantee an immediate response, I&apos;ll do my best to get back to you.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '6px 0 28px' }}>
          <SocialLinks size={44} />
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
