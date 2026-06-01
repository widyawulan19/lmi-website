import React from "react";
import "../Style/LMI/About.css";
import aboutImg from '../Assets/aboutimg.png'
import { FaCircle } from "react-icons/fa";

function LmiAbout() {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-top" data-aos="zoom-out" data-aos-duration="1000">

          <span className="about-tag">
            OUR LEGACY
          </span>

          <h2>
            More Than a Manufacturer,
            <span> A Growth Partner</span>
          </h2>

          <p>
            Since 2011, PT Lamonte Mode Internasional has helped
            retailers and fashion entrepreneurs grow their businesses
            through high-quality children's apparel, reliable
            production, and long-term partnerships.
          </p>

        </div>

        <div className="about-grid">

          <div className="about-image" data-aos="zoom-out" data-aos-duration="1000">

            <img
              src={aboutImg}
              alt="about"
            />

            <div className="floating-card">

              <h3>13+</h3>
              <p>Years of Industry Experience</p>

            </div>

          </div>

          <div className="about-content">

            <div className="content-block" data-aos="fade-up" data-aos-delay="200">
              <h3><FaCircle className="content-icon" /> Trusted by Retailers Nationwide</h3>

              <p>
                We understand market trends, customer behavior,
                and inventory needs, enabling our partners to
                offer products that sell consistently.
              </p>
            </div>

            <div className="content-block" data-aos="fade-up" data-aos-delay="200">
              <h3><FaCircle className="content-icon" /> Integrated Manufacturing Process</h3>

              <p>
                From sourcing fabrics to final quality control,
                every stage is managed internally to ensure
                consistency and efficiency.
              </p>
            </div>

            <div className="content-block" data-aos="fade-up" data-aos-delay="200">
              <h3><FaCircle className="content-icon" /> Built for Long-Term Partnership</h3>

              <p>
                Our mission goes beyond supplying products.
                We help our partners scale sustainably with
                reliable production capacity and competitive pricing.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LmiAbout;