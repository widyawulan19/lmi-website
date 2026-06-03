import React, { useEffect, useState } from "react";
import '../Style/LMI/Navbar.css'
import logo from  '../Assets/Logo-lmi.png'
import { useNavigate } from "react-router-dom";

function LmiNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () =>{
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const navigateToAbout = () =>{
    navigate('/about')
  }

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-box">
            <div className="navbar-logo">
                {/* <h2>LAMONTE</h2> */}
                <img src={logo} alt="LAMONTE Logo" />
            </div>

            <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <a href="/">HOME</a>
                <a href="/about">ABOUT US</a>
                <a href="/gallery">GALLERY</a>
                <a href="/articles">ARTICLES</a>
                <a href="/careers">CAREERS</a>
                <a href="/contact">CONTACT US</a>
            </div>

            <div className="navbar-actions">
              <a 
                href="https://wa.me/6287897117360?text=Hallo%2C%20bagaimana%20cara%20menjadi%20distributor%20Lamonte%3F"
                target="_blank"
                rel="noopener noreferrer"  
              >
                <button className="btn-primary">
                Contact Us
                </button>
              </a>

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