import React from 'react';
import '../styles/About.css';
import profileImage from '../img/ais.png'; // Mengimpor gambar dari folder src/img

function About() {
  return (
    <div className="about-container animated-background">
      <div className="profile-section">
        <img
          src={profileImage}
          alt="Muhammad Faris Abqari"
          className="profile-image"
        />
        <h1>
          Muhammad Faris Abqari<span className="verified-badge">✔</span>
        </h1>
        <p className="profile-title">Design Grafis</p>
      </div>
      <div className="about-content">
        <h2>About</h2>
        <p>
          Let me introduce myself, my name is Muhammad Faris Abqari, a student of Universitas 
          Muhammadiyah Yogyakarta, I am a graphic designer from Dompu, West Nusa Tenggara. 
          I started my journey to become a graphic designer in 2020, starting from me making 
          vectors for personal needs, participating in logo design competitions in high school, to 
          participating in several organizations and committees in the Media field while at university.
        </p>
      </div>
      <div className="work-experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>2020</h3>
            <p>Vector Design</p>
          </li>
          <li>
            <h3>2021</h3>
            <p>Poster Design</p>
            <p>Instagram Content Editing</p>
          </li>
          <li>
            <h3>2022</h3>
            <p>1st Lomba Desain Logo Hut SMA N 1 Dompu</p>
            <p>Freelance Graphic Design</p>
          </li>
          <li>
            <h3>2023</h3>
            <p>Anggota Divisi Media Himpunan KMTI UMY</p>
            <p>Anggota Divisi Media Event IT Specta TI UMY</p>
            <p>Anggota Divisi Media Mataf Fakultas Teknik UMY</p>
            <p>Koordinator Divisi Media Mataf Teknologi Informasi UMY</p>
          </li>
          <li>
            <h3>2024</h3>
            <p>Koordinator Divisi Media Event Teknik Area 2024 UMY</p>
            <p>Koordinator Divisi Media Event IT Specta TI UMY</p>
            <p>Jasa Desain Grafis (A L I A S)</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
