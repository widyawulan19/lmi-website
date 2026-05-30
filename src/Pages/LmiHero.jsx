import React from "react";
import "../Style/LMI/Hero.css";;

function LmiHero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">
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

        <div className="stat-card">
          <h2>13+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <h2>9,750+</h2>
          <p>Product SKUs</p>
        </div>

        <div className="stat-card">
          <h2>1,500+</h2>
          <p>Active Partners</p>
        </div>

        <div className="stat-card">
          <h2>National</h2>
          <p>Distribution</p>
        </div>

      </div>

    </section>
  );
}

export default LmiHero;