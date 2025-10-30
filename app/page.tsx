"use client";
import "./globals.css";
import React, { useState, useEffect } from 'react';

export default function Page() {
   const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* === HEADER === */}
      <header className={`custom-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid px-3 px-md-5">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <a className="navbar-brand m-0" href="#">
              <img 
                className="logo-img"
                src="https://library.ums.ac.id/wp-content/uploads/2023/12/Logo-UMSLib-NPP-White-768x157.png" 
                alt="UMS Library Logo"
              />
            </a>
            
            <button 
              className="navbar-toggler" 
              type="button" 
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}>
              <ul className="navbar-nav align-items-lg-center">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Beranda</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#catalog">Katalog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#library">Web Perpus</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#ums">Web UMS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#resources">E-Resources</a>
                </li>
                <li className="nav-item ms-lg-2">
                  <button className="btn btn-user">
                    👤 USER
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* === DECORATIVE PATTERN === */}
      <div style={{marginTop: "30px"}} className="decorative-pattern"></div>

      {/* === MAIN CONTENT === */}
      <div style={{marginTop: "80px"}} className="container py-5">
        <h1 className="main-title">Layanan Kami</h1>
        
        <div className="row justify-content-center mb-5">
            <div className="col-lg-9 col-md-11">
                <div className="search-container">
                    <p className="search-subtitle">Temukan berbagai layanan dalam satu pintu</p>
                    <div className="search-box">
                        <div className="row g-2">
                            <div className="col-md-9">
                                <input type="text" className="form-control" placeholder="Ketikan kata kunci pencarian"/>
                            </div>
                            <div className="col-md-3">
                                <button className="btn w-100">🔍 Find</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mb-5">
            <div className="col">
                <div className="menu-item">
                    <div className="icon-box">
                        <svg viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="2">
                            <rect x="20" y="70" width="60" height="5" fill="#333"/>
                            <rect x="25" y="35" width="5" height="35" fill="#333"/>
                            <rect x="42" y="35" width="5" height="35" fill="#333"/>
                            <rect x="59" y="35" width="5" height="35" fill="#333"/>
                            <rect x="70" y="35" width="5" height="35" fill="#333"/>
                            <path d="M20 35 L50 15 L80 35" fill="none" strokeWidth="3"/>
                        </svg>
                    </div>
                    <div className="menu-label">DASHBOARD</div>
                </div>
            </div>

            <div className="col">
                <div className="menu-item">
                    <div className="icon-box">
                        <svg viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="2">
                            <rect x="25" y="50" width="15" height="30" fill="#333"/>
                            <rect x="45" y="35" width="15" height="45" fill="#333"/>
                            <rect x="65" y="20" width="15" height="60" fill="#d32f2f"/>
                        </svg>
                    </div>
                    <div className="menu-label">KOLEKSI</div>
                </div>
            </div>

            <div className="col">
                <div className="menu-item">
                    <div className="icon-box">
                        <svg viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="2">
                            <rect x="25" y="35" width="50" height="35" rx="5" strokeWidth="3"/>
                            <path d="M35 45 L45 55 L65 35" fill="none" strokeWidth="3"/>
                            <circle cx="35" cy="25" r="3" fill="#d32f2f"/>
                            <circle cx="50" cy="25" r="3" fill="#d32f2f"/>
                            <circle cx="65" cy="25" r="3" fill="#d32f2f"/>
                        </svg>
                    </div>
                    <div className="menu-label">TRANSAKSI</div>
                </div>
            </div>

            <div className="col">
                <div className="menu-item">
                    <div className="icon-box">
                        <svg viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="2">
                            <circle cx="50" cy="35" r="12" strokeWidth="3"/>
                            <path d="M35 75 Q35 55 50 55 Q65 55 65 75" strokeWidth="3" fill="none"/>
                            <rect x="35" y="75" width="30" height="5" fill="#333"/>
                        </svg>
                    </div>
                    <div className="menu-label">USER</div>
                </div>
            </div>

            <div className="col">
                <div className="menu-item">
                    <div className="icon-box">
                        <svg viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="2">
                            <rect x="25" y="25" width="50" height="50" rx="3" strokeWidth="3"/>
                            <circle cx="35" cy="45" r="2" fill="#d32f2f"/>
                            <circle cx="50" cy="45" r="2" fill="#d32f2f"/>
                            <circle cx="65" cy="45" r="2" fill="#d32f2f"/>
                            <circle cx="35" cy="55" r="2" fill="#d32f2f"/>
                            <circle cx="50" cy="55" r="2" fill="#d32f2f"/>
                            <circle cx="65" cy="55" r="2" fill="#d32f2f"/>
                            <circle cx="35" cy="65" r="2" fill="#d32f2f"/>
                            <circle cx="50" cy="65" r="2" fill="#d32f2f"/>
                        </svg>
                    </div>
                    <div className="menu-label">AGENDA</div>
                </div>
            </div>
        </div>

         <div className="row row-cols-2 row-cols-md-4 g-4 mb-5 justify-content-center">
            <div className="col">
                <div className="menu-item">
                    <div className="icon-box">
                        <svg viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="2">
                            <rect x="30" y="20" width="40" height="55" rx="2" strokeWidth="3"/>
                            <line x1="37" y1="30" x2="63" y2="30" strokeWidth="2"/>
                            <line x1="37" y1="40" x2="63" y2="40" strokeWidth="2"/>
                            <line x1="37" y1="50" x2="63" y2="50" strokeWidth="2"/>
                            <line x1="37" y1="60" x2="50" y2="60" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="menu-label">DASHBOARD</div>
                </div>
            </div>

            <div className="col">
                <div className="menu-item">
                    <div className="icon-box">
                        <svg viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="2">
                            <circle cx="50" cy="50" r="25" strokeWidth="3"/>
                            <line x1="30" y1="50" x2="70" y2="50" strokeWidth="2"/>
                            <line x1="50" y1="30" x2="50" y2="70" strokeWidth="2"/>
                            <path d="M35 35 Q50 25 65 35" fill="none" strokeWidth="2"/>
                            <path d="M35 65 Q50 75 65 65" fill="none" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="menu-label">DASHBOARD</div>
                </div>
            </div>

            <div className="col">
                <div className="menu-item">
                    <div className="icon-box">
                        <svg viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="2">
                            <path d="M30 50 L45 35 L45 50 L55 50 L55 35 L70 50 L70 65 Q70 70 65 70 L35 70 Q30 70 30 65 Z" strokeWidth="3"/>
                            <path d="M75 40 Q80 35 85 40 L85 55 Q85 60 80 60 L75 60" stroke="#d32f2f" strokeWidth="2" fill="none"/>
                            <circle cx="82" cy="47" r="2" fill="#d32f2f"/>
                        </svg>
                    </div>
                    <div className="menu-label">DASHBOARD</div>
                </div>
            </div>

            <div className="col">
                <div className="menu-item">
                    <div className="icon-box">
                        <svg viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="2">
                            <circle cx="50" cy="50" r="28" strokeWidth="3"/>
                            <circle cx="50" cy="50" r="15" strokeWidth="3"/>
                            <line x1="50" y1="22" x2="50" y2="35" strokeWidth="3"/>
                            <line x1="78" y1="50" x2="65" y2="50" strokeWidth="3"/>
                            <line x1="50" y1="78" x2="50" y2="65" strokeWidth="3"/>
                            <line x1="22" y1="50" x2="35" y2="50" strokeWidth="3"/>
                        </svg>
                    </div>
                    <div className="menu-label">DASHBOARD</div>
                </div>
            </div>
        </div>

     <div className="reputasi-section">
      <h2 className="reputasi-title">Reputasi Perpustakaan</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        <div className="col">
          <div className="reputasi-card">
            <div className="badge-icon">
              <img src="/assets/img/a.png" alt="Akreditasi A"/>
            </div>
            <p className="reputasi-text">
              Terakreditasi A<br/>
              <span className="subtitle">Unggul</span>
            </p>
          </div>
        </div>
        <div className="col">
          <div className="reputasi-card">
            <div className="badge-icon">
              <img src="/assets/img/3.png" alt="Juara 3 Best Practice"/>
            </div>
            <p className="reputasi-text">
              Juara 3 Best Practice Perpustakaan<br/>
              <span className="subtitle">Perguruan Tinggi se Indonesia</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

      {/* === FOOTER === */}
       <footer className="custom-footer">
    <div className="container-fluid">
      <div className="footer-content d-flex flex-wrap justify-content-between align-items-center text-center text-lg-start">
        <div className="footer-left mb-3 mb-lg-0">
          <img  style={{width: "250px"}} src="https://library.ums.ac.id/wp-content/uploads/2023/12/Logo-UMSLib-NPP-White-768x157.png" alt="UMSI Library Logo" className="footer-logo"/>
        </div>
        <div className="footer-right">
          <p>Jl. A. Yani Tromol Pos I Pabelan Surakarta 57102</p>
          <p>Telepon 0271-717417 ext. 3206 & 3249</p>
          <p><strong>NPP: 3311122D000002</strong></p>
          <p>Call Center dan Layanan Keluhan:</p>
          <p className="footer-call">0813 2685 9003</p>
        </div>
      </div>
      <div className="footer-bottom text-center mt-3 pt-3 border-top">
        <p>© 2025 - Universitas Muhammadiyah Surakarta</p>
      </div>
    </div>
  </footer>
    </div>
  );
}
