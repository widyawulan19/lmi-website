import React from "react";
import '../Style/LMI/Benefit.css'

function LmiPartnerBenefit() {
  const benefits = [
    {
      title: "Following Fashion Trends",
      desc: "We always follow the latest developments in chilfren's fashion trends. Thus, we can provide our customers with the latest collections and up-to-date style choices."
    },
    {
      title: "Consistent Product Quality",
      desc: "We understand the importance of comfort and style in childern's clothing, and we ensure that each of our ptoduct meets strict quality standards."
    },
    {
      title: "Best Price",
      desc: "As a company with a B2B business modal, we really understand that price is one of the main consideration factors for our partners."
    },
    {
      title: "Best Service",
      desc: "Customer statisfaction is our top priority. We always ensure that every customer is satisfied in every transaction they make. Our customer service team is ready to help answer questions and provide any assistance needed."
    },
    {
      title: "Own Factory",
      desc: "We have our own factory equipped with modern equipment and skilled workface. This allows us to control product quality and ensure that each product meets hight standars."
    }
  ];

  return (
    <section className="benefits">

      <div className="benefits-header" data-aos="fade-up" data-aos-duration="1000">

        <span className="section-tag">
          WHY CHOOSE US
        </span>

        <h2>
          Businness Excellence
        </h2>

        <p>
          Our commitment as a trendsetter in children's wear is to prioritize excellence, producing best quality at the best prices.
          In addition, we aim to enhance our competence to contribute and building more prosperous society.
        </p>

      </div>

      <div className="benefits-grid">

        {benefits.map((item, index) => (
          <div className="benefit-card" key={index} data-aos="fade-up" data-aos-delay={200 * (index + 1)}>

            <div className="benefit-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default LmiPartnerBenefit;