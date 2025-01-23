// Header.js
import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <div className="header-container">
        <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
        <div className="button-group">
          <Link to="/login">
            <button className="loginBtn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signupBtn" >Sign Up</button>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;
