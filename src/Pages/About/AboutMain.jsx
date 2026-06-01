import React, { useState, useEffect } from "react";
import "../../Style/About/AboutMain.css";

import img1 from "../../Assets/grup1.jpg";
import img2 from "../../Assets/grup2.jpg";
import img3 from "../../Assets/grup3.jpeg";
// import img4 from "../../Assets/grup4.jpg";

function AboutMain() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="about">

      <div className="about-grid">

        {/* LEFT: IMAGE SWIPE */}
        <div className="about-media">

          <div className="swiper-frame">

            <div
              className="swiper-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((img, i) => (
                <img key={i} src={img} alt={`story-${i}`} />
              ))}
            </div>

          </div>

          <div className="swiper-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

        </div>

        {/* RIGHT: STORY */}
        <div className="about-content">

          <div className="about-tag">ABOUT US</div>

          <h2>
            Building Children's Fashion
            Through Innovation & Partnership
          </h2>

          <p>
            PT Lamonte Mode Internasional is a leading supplier of children's clothing,
            providing a wide range of fashion options at affordable prices.
            We take pride in setting trends and understanding the needs of the children's
            fashion industry in Indonesia. <br/>
            <span className="highlight">
               Our commitment is to deliver the finest service and support our partners
            in growing their business sustainably.
            </span>
          </p>

        

        </div>

      </div>

    </section>
  );
}

export default AboutMain;