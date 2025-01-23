import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import AdminPanel from './components/AdminPanel';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      {/* Include Header and Footer only for routes other than '/admin' */}
      <Routes>
        {/* Only render Header and Footer for non-admin routes */}
        <Route path="/" element={<><Header /><HomePage /><Footer /></>} />
        <Route path="/login" element={<><Header /><LoginPage /><Footer /></>} />
        <Route path="/admin" element={<AdminPanel />} /> {/* Admin panel route without Header and Footer */}
      </Routes>
    </Router>
  );
};

export default App;
