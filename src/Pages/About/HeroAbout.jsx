import React from "react";
import '../../Style/About/HeroAbout.css';

function HeroAbout() {
  return (
    <section className="about-hero">

      <div className="about-hero-overlay"></div>

      <div className="about-hero-content">

        <span className="about-page-tag">
          COMPANY PROFILE
        </span>

        

        <h1>
          ABOUT <br />
           <span> 
                PT LAMONTE
                MODE INTERNASIONAL
            </span>
        </h1>
        <div className="hero-line"></div>

        <p>
          Inspiring Children's Style Since 2011.
          Becoming a Manufacturer and Presenting
          High Quality Children's Fashion for the
          Comfort of Children's Fashion Models.
        </p>

      </div>

    </section>
  );
}

export default HeroAbout;