import React from "react";
import '../Style/LMI/Footer.css'
import logo from '../Assets/Logo-lmi.png';

function LmiFooter() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          {/* <h2>LAMONTE</h2> */}
          <img src={logo} alt="Lamonte Logo" className="footer-logo" />

          <p>
            Jalan Hayam Wuruk no. 111 ZC, Kel Maphar, Kec. Taman Sari, Kota Adm Jakarta Barat, Prov. DKI Jakarta
          </p>

        </div>

        <div className="footer-links">

          <h3>Navigation</h3>

          <a href="/">HOME</a>
          <a href="/about">ABOUT US</a>
          <a href="/gallery">GALLERY</a>
          <a href="/articles">ARTICLES</a>
          <a href="/careers">CARRERS</a>
          <a href="/contact">CONTACT US</a>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>+62 87897117360</p>
          <p>hello@lamonte.id</p>

        </div>

        <div className="footer-office">

          <h3>Operational Hour</h3>

          <p>
           Mon-Sat, 08.00-17.00 WIB
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 PT Lamonte Mode Internasional.
          All Rights Reserved.
        </p>

        <div className="footer-policy">

          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>

        </div>

      </div>

    </footer>
  );
}

export default LmiFooter;