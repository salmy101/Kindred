// src/components/NavBAr.jsx
import { useState } from "react";
import { BrowserRouter as Router, Link, Routes } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/*Logo Section */}
        <div className="logo-section">
          <div className="logo-circle">
            <Link to="/" className="nav-logo">
              <span className="logo-letter">K</span>
              {/* Your App Name */}
            </Link>
          </div>
        </div>
        {/*Burger Menu */}
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {/*Link Section */}
        <div className={`responsive-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" onClick={closeMenu}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link" onClick={closeMenu}>
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link" onClick={closeMenu}>
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link" onClick={closeMenu}>
              Dashboard
            </Link>
          </li>
        </ul>
        </div>
        {/*Button Section */}
        <div className="nav-buttons">
          <button className="btn btn-ghost">Sign In</button>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
