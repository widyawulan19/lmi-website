import React from "react";
import "../Style/LMI/CTA.css";

function LmiCTA() {
  return (
    <section className="cta" data-aos="zoom-out" data-aos-duration="1000">

      <div className="cta-overlay"></div>

      <div className="cta-content" >

        <span className="cta-badge">
          LET'S GROW TOGETHER
        </span>

        <h2>
          ACHIEVE SUCCESS WITH <br />
          <span> PT LAMONTE MODE INTERNASIONAL</span>
        </h2>

        <p>
          Partner with Lamonte and gain access to
          high-quality products, reliable production,
          and a trusted wholesale network built to
          support your growth.
        </p>

        {/* <div className="cta-buttons">

          <button className="cta-primary">
            Become A Partner
          </button>

          <button className="cta-secondary">
            Download Catalog
          </button>

        </div> */}

      </div>

    </section>
  );
}

export default LmiCTA;