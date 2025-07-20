// /app/api/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !email.includes('@') || password.length < 4) {
      return NextResponse.json({ message: 'Credenziali non valide' }, { status: 400 });
    }

    // 🔍 Simulazione verifica credenziali
    if (email === 'simone@example.com' && password === '1234') {
      return NextResponse.json({ message: 'Accesso autorizzato ✅' });
    }

    // 📤 Possibile invio email o log
    console.log(`Tentativo di login: ${email}`);

    return NextResponse.json({ message: 'Accesso non autorizzato ❌' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ message: 'Errore interno del server' }, { status: 500 });
  }
}
