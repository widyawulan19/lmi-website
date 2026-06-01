import React from "react";
import '../../Style/About/VisiMisi.css';

function VisiMisiAbout() {
  const missions = [
  {
    subTitle: "Affordable Quality",
    desc: "Produce quality products at affordable prices.",
  },
  {
    subTitle: "Human Capital Development",
    desc: "Increasing employee competence and welfare and creating the best conditions for employees as a source of pride in their work and achievements.",
  },
  {
    subTitle: "Creative Collaboration",
    desc: "Collaborate with customers to realize creativity and innovation.",
  },
  {
    subTitle: "Social Responsibility",
    desc: "Increasing positive contributions to society and the environment.",
  },
  {
    subTitle: "Operational Excellence",
    desc: "Providing services with a superior operational system for each of our consumers in every region.",
  },
  {
    subTitle: "Sustainable Growth",
    desc: "We are committed to social and economic development.",
  },
  {
    subTitle: "Customer-Centric Innovation",
    desc: "Grow profitably by understanding our customers' needs, focusing on operational excellence, and driving product innovation.",
  },
  {
    subTitle: "Global Vision",
    desc: "To become a leading global children's clothing company, maintaining our core focus and roots while bringing our lifestyle message of independence, creativity and innovation to this global community",
  }
];

  return (
    <section className="vm-section">

      {/* VISION */}
      <div className="vision-box">
        <span>OUR VISION</span>
        <h2>
         Contribute to sustainable development for society and the environment. Continuously innovate, lead, improve, provide the best value products and services to global customers. Creating our branding to stay ahead of fashion trends, market changes and the latest technology. As well as improving the quality of life of our business partners, customers and employees.
        </h2>
      </div>

      {/* MISSION */}
      <div className="mission-wrapper">

        <div className="mission-header">
          <span>OUR MISSION</span>
          <h3>What We Commit To</h3>
        </div>

        <div className="mission-grid">
          {missions.map((item, i) => (
            <div className="mission-card" key={i}>
              <div className="number">0{i + 1}</div>
              <h4>{item.subTitle}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default VisiMisiAbout;