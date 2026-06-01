import React, { useEffect, useRef, useState } from "react";
import "../../Style/About/HistoryPremium.css";

function HistoryPremium() {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  const timeline = [
    { year: "2011", title: "Foundation", desc: "Company started." },
    { year: "2016", title: "Expansion", desc: "National growth." },
    { year: "2023", title: "Global Direction", desc: "International focus." },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const section = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // calculate scroll progress inside section
      const start = windowHeight;
      const end = -section.height;

      const progress =
        (start - section.top) / (start - end);

      setProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="history-premium" ref={ref}>

      <div className="hp-header">
        <span>OUR JOURNEY</span>
        <h2>Growth Through Time</h2>
      </div>

      <div className="hp-timeline">

        {/* BACK LINE */}
        <div className="hp-line-bg"></div>

        {/* PROGRESS LINE */}
        <div
          className="hp-line-progress"
          style={{ transform: `scaleY(${progress})` }}
        />

        {timeline.map((item, i) => (
          <div className="hp-item" key={i}>
            <div className="hp-dot"></div>

            <div className="hp-card">
              <span>{item.year}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default HistoryPremium;