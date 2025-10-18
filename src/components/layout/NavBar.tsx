// src/components/NavBar.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    };
      window.addEventListener('resize', handleResize);

      return()=>{
        window.removeEventListener('resize', handleResize)
      };
  }, [isMenuOpen])
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <div className="logo-section">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <span className="logo-letter">K</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links-desktop">
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="nav-buttons-desktop">
          <button className="btn btn-ghost">
            <Link to="/login">
              Login
            </Link>
          </button>
          <button className="btn btn-primary">
            <Link to="/register">
              Register
            </Link>
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div 
          className={`burger-menu ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <ul className="nav-links-mobile">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/login" className="nav-link" onClick={closeMenu}>
                Login
              </Link>
            </li> */}
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
          <div className="nav-buttons-mobile">
            <button className="btn btn-ghost" onClick={closeMenu}>
              <Link to="/login">
                Login
              </Link>
            </button>
            <button className="btn btn-primary" onClick={closeMenu}>
              <Link to="/register">
                Register
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;