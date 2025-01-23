import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';
import logo from './logo.png';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      <header>
        <div className="header-container">
          <img className="logo" src={logo} alt="Logo" />
          <div className="button-group">
            <button className="loginBtn" onClick={handleLogin}>Login</button>
            <button className="signupBtn" onClick={handleSignup}>Sign Up</button>
          </div>
        </div>
      </header>

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


      <footer>
        <div className="footer-section">
          <img className="footer-logo" src={logo} alt="Logo" />
          <p style={{ textAlign: "left" }} className="footer-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.</p>
        </div>
        <div className="footer-section">
          <h3>Important Links</h3>
          <ul className="footer-links">
            <li><a href="/contactus">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">

          <ul className="footer-links">
            <li><a href="/terms">Terms and Conditions</a></li>
            <li><a href="/support">Contact Support</a></li>
          </ul>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://skype.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-skype"></i>
            </a>
          </div>
        </div>
      </footer>



    </div>
  );
};

export default LoginPage;
