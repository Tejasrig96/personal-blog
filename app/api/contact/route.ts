import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO_EMAIL = 'tejasrigururaj@gmail.com';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return NextResponse.json({ error: 'Email is not configured on the server.' }, { status: 500 });
  }

  let body: { name?: string; email?: string; message?: string; company?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, message, company } = body;

  // Honeypot: real users never fill this hidden field.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Name, email, and message are all required.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: 'Tejasri Gururaj site <contact@tejasrigururaj.com>',
    to: TO_EMAIL,
    replyTo: email,
    subject: `New message from ${name} via tejasrigururaj.com`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
