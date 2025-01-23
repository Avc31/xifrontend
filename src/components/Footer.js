// Footer.js
import React from 'react';
import logo from '../logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <img className="footer-logo" src={logo} alt="Logo" />
        <p style={{ textAlign: "left" }} className="footer-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.
        </p>
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
  );
};

export default Footer;
