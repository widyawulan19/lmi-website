import React from "react";
import "../Style/LMI/Hero.css";;

function LmiHero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
            <span className="hero-badge">
            Since 2011 • Trusted Nationwide
            </span>

            <h1>
            Elevating Children's Fashion Through
            <span> Strategic Partnerships</span>
            </h1>

            <p>
            PT Lamonte Mode Internasional provides
            high-quality manufacturing and wholesale
            solutions for fashion brands and retailers
            across Indonesia.
            </p>

            <div className="hero-buttons">

            <a 
              href="https://wa.me/6287897117360?text=Hallo%2C%20bagaimana%20cara%20menjadi%20distributor%20Lamonte%3F"
              target="_blank"
              rel="noopener noreferrer"  
            >
              <button className="hero-primary">
                  Become Distributor
              </button>
            </a>

            <button 
              className="hero-secondary"
              onClick={() =>
                window.open(
                  "https://lamonte.id/",
                  "_blank"
                )
              }
            >
                View Collection
            </button>

            </div>
      </div>
      

      <div className="hero-stats">

        <div className="stat-card" data-aos="fade-up"  data-aos-delay="200">
          <h2>15+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-card" data-aos="fade-up"  data-aos-delay="400">
          <h2>9,750+</h2>
          <p>Product SKUs</p>
        </div>

        <div className="stat-card" data-aos="fade-up"  data-aos-delay="600">
          <h2>1,500+</h2>
          <p>Active Partners</p>
        </div>

        <div className="stat-card" data-aos="fade-up"  data-aos-delay="800">
          <h2>National</h2>
          <p>Distribution</p>
        </div>

      </div>

    </section>
  );
}

export default LmiHero;