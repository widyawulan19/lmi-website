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

            <button className="hero-primary">
                Become Distributor
            </button>

            <button className="hero-secondary">
                View Collection
            </button>

            </div>
      </div>
      

      <div className="hero-stats">

        <div className="stat-card" data-aos="fade-up"  data-aos-delay="200">
          <h2>13+</h2>
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