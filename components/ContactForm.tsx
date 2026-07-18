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

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (status === 'sent') {
    return (
      <div style={{ textAlign: 'center', background: 'var(--surface-sand)', borderRadius: 'var(--radius-md)', padding: '32px 24px' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-md)', color: 'var(--c-ink)', margin: 0 }}>
          Thank you — your message is on its way. ✦
        </p>
        <button className="btn-ghost" onClick={() => setStatus('idle')} style={{ marginTop: 16 }}>
          Send another
        </button>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      message: String(data.get('message') || ''),
      company: String(data.get('company') || ''), // honeypot
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }
      setStatus('sent');
      form.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }} onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={labelStyle} htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" type="text" required placeholder="Your name" style={fieldStyle} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={labelStyle} htmlFor="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" required placeholder="you@example.com" style={fieldStyle} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={labelStyle} htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" required rows={5} placeholder="Say hello…" style={{ ...fieldStyle, resize: 'vertical' }} />
      </div>
      {/* Honeypot — hidden from real users, catches simple bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />
      {status === 'error' && (
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-sm)', color: '#96604a', margin: 0 }}>
          {errorMessage}
        </p>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
        <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ opacity: status === 'sending' ? 0.6 : 1 }}>
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
      </div>
    </form>
  );
}
