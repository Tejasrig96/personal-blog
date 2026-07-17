'use client';
import { useState } from 'react';

const fieldStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'var(--text-base)',
  padding: '10px 14px',
  background: 'var(--surface-sand)',
  border: '1.5px solid var(--border-field)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--c-ink)',
  outline: 'none',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'var(--text-sm)',
  fontWeight: 'var(--fw-medium)' as React.CSSProperties['fontWeight'],
  color: 'var(--c-ink)',
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div style={{ textAlign: 'center', background: 'var(--surface-sand)', borderRadius: 'var(--radius-md)', padding: '32px 24px' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-md)', color: 'var(--c-ink)', margin: 0 }}>
          Thank you — your message is on its way. ✦
        </p>
        <button className="btn-ghost" onClick={() => setSent(false)} style={{ marginTop: 16 }}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={labelStyle} htmlFor="cf-name">Name</label>
        <input id="cf-name" type="text" required placeholder="Your name" style={fieldStyle} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={labelStyle} htmlFor="cf-email">Email</label>
        <input id="cf-email" type="email" required placeholder="you@example.com" style={fieldStyle} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={labelStyle} htmlFor="cf-message">Message</label>
        <textarea id="cf-message" required rows={5} placeholder="Say hello…" style={{ ...fieldStyle, resize: 'vertical' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
        <button type="submit" className="btn-primary">Send</button>
      </div>
    </form>
  );
}
