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

        {/* ======= Layanan ======= */}
  <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mb-5 text-center">
    
    {/* KOHA */}
    <div className="col">
      <a href="https://koha-lib.ums.ac.id" target="_blank" rel="noopener noreferrer">
        <div className="menu-item">
          <div className="icon-box">
            <img width="50" height="50" src="https://img.icons8.com/ios/50/book--v1.png" alt="book--v1"/>
          </div>
          <div className="menu-label">KOHA</div>
        </div>
      </a>
    </div>

    {/* OPAC */}
    <div className="col">
      <a href="https://search-lib.ums.ac.id" target="_blank" rel="noopener noreferrer">
        <div className="menu-item">
          <div className="icon-box">
           <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/search--v1.png" alt="search--v1"/>
          </div>
          <div className="menu-label">OPAC</div>
        </div>
      </a>
    </div>

    {/* TROLLY */}
    <div className="col">
      <a href="https://my-lib.ums.ac.id" target="_blank" rel="noopener noreferrer">
        <div className="menu-item">
          <div className="icon-box">
           <img width="44" height="44" src="https://img.icons8.com/external-pixer-icons-pack-dmitry-mirolyubov/44/external-cart-retail-pixer-icons-pack-dmitry-mirolyubov.png" alt="external-cart-retail-pixer-icons-pack-dmitry-mirolyubov"/>
          </div>
          <div className="menu-label">TROLLY</div>
        </div>
      </a>
    </div>

    {/* REPOSITORY */}
    <div className="col">
      <a href="https://eprints.ums.ac.id" target="_blank" rel="noopener noreferrer">
        <div className="menu-item">
          <div className="icon-box">
            <img width="50" height="50" src="https://img.icons8.com/ios/50/repository.png" alt="repository"/>
          </div>
          <div className="menu-label">Repository</div>
        </div>
      </a>
    </div>

    {/* UNGGAH */}
    <div className="col">
      <a href="https://unggah-lib.ums.ac.id" target="_blank" rel="noopener noreferrer">
        <div className="menu-item">
          <div className="icon-box">
<img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/upload--v1.png" alt="upload--v1"/>          </div>
          <div className="menu-label">UNGGAH</div>
        </div>
      </a>
    </div>
  
    {/* VIRTUAL TOUR */}
  <div className="col-6 col-md-4 col-lg-12 d-lg-flex justify-content-center">
    <a
      href="https://library.ums.ac.id/virtual-tour-perpus-ums/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="menu-item">
        <div className="icon-box">
<img width="40" height="40" src="https://img.icons8.com/metro/26/virtual-machine.png" alt="virtual-machine"/>
 </div>
        <div className="menu-label">Virtual Tour</div>
      </div>
    </a>
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
