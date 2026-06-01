import React from "react";
import "../../Style/About/Value.css";
import img from '../../Assets/logonew.png'

function ValueAbout() {
  const values = [
    {
      title: "Customer-Centric",
      desc: "We are fully committed to understanding and meeting our customers' needs. We always strive to provide services that exceed expectations, making customer satisfaction our top priority.",
    },
    {
      title: "Integrity and Honesty",
      desc: "We maintain the Company's good reputation by always acting with honesty and integrity in every aspect of our business. We are committed to fulfilling our promises to customers and business partners.",
    },
    {
      title: "Collaborative Growth",
      desc: "We create an environment where every member of the organization can grow and develop together. We embrace a spirit of family and mutual support, ensuring the development of both individuals and organizations.",
    },
    {
      title: "Trust and Trustworthiness",
      desc: "Trust is the foundation of all our relationships. We strive to maintain and build trust through consistent actions, open communication and transparency in all interactions.",
    },
    {
      title: "The Pursuit of Excellence",
      desc: "We encourage efforts towards the best achievements and results. We not only pursue the highest goals, but also value the correct process in achieving those goals. We are always learning and adapting to achieve maximum performance.",
    },
  ];

  return (
    <section className="values-section">

      {/* LEFT SIDE */}
      <div className="values-left">
        <span className="values-tag">CORE VALUES</span>

        <h2>
          The Principles That Define
          How We Work & Grow
        </h2>

        <p className="values-sub">
         Contribute to sustainable development for society and the environment. Continuously innovate, lead, improve, provide the best value products and services to global customers. Creating our branding to stay ahead of fashion trends, market changes and the latest technology. As well as improving the quality of life of our business partners, customers and employees.
        </p>

        <img src={img} alt="Lamonte Mode Logo" className="vm-shape" />
      </div>

      {/* RIGHT SIDE */}
      <div className="values-right">
        {values.map((item, i) => (
          <div className="value-item" key={i}>
            <div className="value-number">0{i + 1}</div>
            <div className="value-content">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default ValueAbout;