import React, { useState } from "react";
import '../Style/LMI/Navbar.css'
import logo from  '../Assets/Logo-lmi.png'

function LmiNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
        <div className="navbar-box">
            <div className="navbar-logo">
                {/* <h2>LAMONTE</h2> */}
                <img src={logo} alt="LAMONTE Logo" />
            </div>

            <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <a href="/">HOME</a>
                <a href="/">ABOUT US</a>
                <a href="/">GALLERY</a>
                <a href="/">ARTICLES</a>
                <a href="/">CAREERS</a>
                <a href="/">CONTACT US</a>
            </div>

            <div className="navbar-actions">
                <button className="btn-outline">
                Login Partner
                </button>

                <button className="btn-primary">
                Contact Us
                </button>

                <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                >
                ☰
                </div>
            </div>
      </div>
    </nav>
  );
}

export default LmiNavbar;