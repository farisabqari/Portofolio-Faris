import React from 'react';
import "../styles/Contact.css";
import avatar from "../img/sw.png";

function Contact() {
  return (
    <div className="contact-container">
      
      <div className="contact">
        <img src={avatar} alt="Avatar" className="avatar" />
        <h1>Let's Connect</h1>
        <p className="description">
        Contact us if you need graphic design for your business
        </p>
        <div className="contact-links">
          <a href="mailto:aisfarisais1@gmail.com" className="contact-item">📧 aisfarisais1@gmail.com</a>
          <a href="https://www.tiktok.com/@faris17118?_t=ZS-8srtjPxDvoV&_r=1" className="contact-item">🎥 Faris on TikTok</a>
          <a href="https://github.com/farisabqari" className="contact-item">👨‍💻 @farisabqari</a>
          <a href="https://www.instagram.com/aisfaris17?igsh=b2UzMHgwY2l1ZmZp&utm_source=qr" className="contact-item">📸 @faris</a>
          <a
            href="https://wa.me/6282235543922"
            className="contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            📱 Chat via WhatsApp
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
