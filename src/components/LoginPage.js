// LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      alert(data.message);
    } catch ({ response }) {
      alert(`Login failed: ${response?.data?.message || 'An error occurred'}`);
    }
  };

  const handleSignup = async () => {

  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-form-left">
        </div>
        <div className="login-form-right">
          <div className="logsection">
            <h1>Login</h1>
            <p style={{ marginBottom: '45px' }}>Fill in your credentials and click the Login button.</p>

            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a style={{ color: '#ffffff' }} href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
          </div>

          <button className="loginBtn1" onClick={handleLogin}>Login</button>
          <p style={{ textAlign: 'left' }}>
            Don’t have an account? <a href="/signup" className="signup-link">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
