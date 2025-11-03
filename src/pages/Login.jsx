import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // 1. Import axios

const Login = () => {
  // 2. Kita isi state dengan data user Anda agar mudah saat tes
  const [email, setEmail] = useState('lekemotiga@contoh.com');
  const [password, setPassword] = useState('admin123');
  
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  // 3. Fungsi ini diganti total untuk memanggil API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 4. Kirim request POST ke API Laravel Anda
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login', {
        email: email,
        password: password
      });

      // 5. Cek apakah login berhasil dan dapat token
      if (response.data.access_token) {
        // 6. Simpan token untuk panggilan API selanjutnya (spt buat berita)
        localStorage.setItem('authToken', response.data.access_token);
        
        // 7. Simpan status login (ini agar PrivateRoute Anda tetap berfungsi)
        localStorage.setItem('isLoggedIn', 'true'); 

        alert('Login berhasil! Selamat datang, Admin.');
        navigate('/dashboard'); // Arahkan ke dashboard
      } else {
        alert('Login gagal! Token tidak diterima dari server.');
      }

    } catch (error) {
      // 8. Tangani jika terjadi error (misal: password salah, server mati)
      console.error('Login error:', error);
      alert('Login gagal! Email atau password salah.');
    }
  };

  // 9. Bagian JSX (tampilan) di bawah ini sama persis dengan file asli Anda
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #6b1212, #b33a3a)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Cinzel', serif",
        color: 'white',
        padding: '20px',
      }}
    >
      <h1 style={{ marginBottom: '40px', fontWeight: 'normal', fontSize: '24px' }}>
        LOGIN FOR ADMIN
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: '#d3ce7f',
          padding: '30px 40px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          width: '320px',
          color: '#000',
        }}
      >
        <p style={{ fontSize: '12px', marginBottom: '8px' }}>Please enter your details</p>
        <h2 style={{ fontWeight: 'normal', marginBottom: '20px', fontSize: '16px' }}>
          Welcome back , Admin
        </h2>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px 15px',
            borderRadius: '20px',
            border: '1px solid #999',
            marginBottom: '15px',
            outline: 'none',
            fontSize: '12px',
            backgroundColor: 'white',
            color: 'black',
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px 15px',
            borderRadius: '20px',
            border: '1px solid #999',
            marginBottom: '15px',
            outline: 'none',
            fontSize: '12px',
            backgroundColor: 'white',
            color: 'black',
          }}
        />

        <label style={{ display: 'flex', alignItems: 'center', fontSize: '12px', marginBottom: '20px' }}>
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
            style={{ marginRight: '8px' }}
          />
          Remember me
        </label>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px 0',
            borderRadius: '20px',
            backgroundColor: '#f0e9b8',
            border: '1px solid #999',
            boxShadow: '0 2px 2px rgba(0,0,0,0.2)',
            fontWeight: 'bold',
            fontSize: '12px',
            cursor: 'pointer',
            color: '#000',
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#e6df8a')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#f0e9b8')}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;