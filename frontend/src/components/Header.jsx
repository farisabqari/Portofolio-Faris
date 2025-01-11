import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import Logo from '../img/logo.png'; // Path logo Anda

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? 'white' : 'black';
    document.body.style.color = isDarkMode ? 'black' : 'white';
  };

  return (
    <header className={`header fixed-top ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="container-fluid">
        <nav className={`navbar navbar-expand-lg navbar-${isDarkMode ? 'dark' : 'light'} bg-${isDarkMode ? 'dark' : 'light'} border-0`}>
          <div className="container">
            <NavLink to="/" className="navbar-brand d-flex align-items-center">
              <img src={Logo} alt="Logo" className="header-logo" />
              <span className="ml-2">Portfolio</span>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" activeClassName="active" exact>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/skills" className="nav-link" activeClassName="active">
                    Skills
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/projects" className="nav-link" activeClassName="active">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  {/* Saklar Mode Siang/Malam */}
                  <div className="toggle-switch">
                    <input 
                      type="checkbox" 
                      id="darkModeToggle" 
                      checked={isDarkMode} 
                      onChange={toggleDarkMode} 
                    />
                    <label htmlFor="darkModeToggle"></label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
