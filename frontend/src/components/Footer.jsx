import React from 'react';
import '../styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Menambahkan Bootstrap

function Footer() {
  return (
    <footer className="footer bg-white text-dark fixed-bottom">
      <div className="container text-center py-3">
        <p className="text-center">
           <span className="code-icon">💻</span> by Muhammad Faris Abqari. ©2025
        </p>
      </div>
    </footer>
  );
}

export default Footer;
