import React,{useState, useRef, useEffect} from "react";
import "../../Style/About/History.css";

function HistorySection() {
    const [progress, setProgress] = useState(0);
    const ref = useRef(null)

  const timeline = [
    {
      year: "2011",
      title: "Foundation of the Company",
      desc: "Founded in 2011, with a brand named Lamonte Shop, focused on baby dan children fashion retail",
    },
    {
      year: "2020",
      title: "Lamonte Transformation",
      desc: "Lamonte.id transformed into legitimate business enterprises named PT Lamonte Mode Internasional and began to penetrate Fashion Retail Globally",
    },
    {
      year: "Present",
      title: "Suistainable Company",
      desc: "Taking advantage of the opportunities that currently exist, we are starting to expand our wings in the garment business sector.",
    },
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

      {/* HEADER */}
      <div className="hp-header">
        <span>OUR JOURNEY</span>
        <h2>
          We are a company that invests in fashion and lifestyle, especially for children
        </h2>
        <p>
         A bit of flashback, In 2011 PT Lamonte Mode International was initially founded with a brand called "Lamonte Shop". With 10 years of struggle, "Lamonte Shop" has grown into a Patented and Legally recognized business named PT Lamonte Mode International in 2021. Until Now, we still carrying the dream in providing best quality products to children throughout Indonesia and the world.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="hp-timeline">
        
        {/* BACK LINE  */}
        <div className="hp-line"></div>

        {/* PROGRESS LINE */}
        <div
          className="hp-line-progress"
          style={{ transform: `scaleY(${progress})` }}
        />

        {timeline.map((item, i) => (
          <div
            className={`hp-item ${i % 2 === 0 ? "left" : "right"}`}
            key={i}
          >

            <div className="hp-dot"></div>

            <div className="hp-card">
              <span className="hp-year">{item.year}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HistorySection;