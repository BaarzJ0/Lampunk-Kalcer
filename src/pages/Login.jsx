import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Contoh autentikasi sederhana
    if (email === 'admin@example.com' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      if (remember) {
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('rememberMe');
      }
      alert('Login berhasil! Selamat datang, Admin.');
      navigate('/dashboard');
    } else {
      alert('Login gagal! Email atau password salah.');
    }
  };

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
