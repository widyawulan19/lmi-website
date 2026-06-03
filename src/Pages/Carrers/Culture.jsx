import React from 'react'
import {
  FaLightbulb,
  FaSyncAlt,
  FaPeopleArrows,
  FaFire,
  FaMountain,
  FaShieldAlt,
  FaBullseye
} from "react-icons/fa";
import '../../Style/Carrers/Cultures.css'
import img from '../../Assets/logonew.png'


const dataCultur = 
[
  {
    title: "Innovate",
    icon: <FaLightbulb />,
    desc: "We innovate new things for the progress of the company",
  },
  {
    title: "Adaptive",
    icon: <FaSyncAlt />,
    desc: "We are ready to adapt to change and overcome challenges with flexibility and the ability to change"
  },
  {
    title: "Harmony",
    icon: <FaPeopleArrows />,
    desc: "We create a harmonious and supportive work environment where collaboration and cooperation are key"
  },
  {
    title: "Enthusiastic",
    icon: <FaFire />,
    desc: "We carry out our duties with enthusiasm and a high sense of responsibility"
  },
  {
    title: "Persistent",
    icon: <FaMountain />,
    desc: "We have a persistent spirit in pursuing goals and facing all challenges"
  },
  {
    title: "Integrity",
    icon: <FaShieldAlt />,
    desc: "We act with honesty and high ethics in all actions and decisions"
  },
  {
    title: "Accuracy",
    icon: <FaBullseye />,
    desc: "We prioritize accuracy and precision in work and decision making"
  }
];

function Culture() {
  return (
    <section className="culture-section">

        <div className="culture-left">

            <span>CORPORATE CULTURE</span>

            <h2>
            The Values That
            Drive Our Success
            </h2>

            <p>
            At Lamonte, we foster a workplace
            where people are encouraged to
            innovate, collaborate, and grow
            together while creating meaningful
            value for customers and communities.
            </p>

            <img src={img} alt="Lamonte Mode Logo" className="vm-shape" />

        </div>

        <div className="culture-right">

            {dataCultur.map((item, i) => (

            <div className="culture-item">

                <div className="culture-top">

                    {/* <div className="culture-number">
                        0{i + 1}
                    </div> */}

                    <div className="culture-icon">
                        {item.icon}
                    </div>

                </div>
                <div className="culture-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                </div>

                

            </div>

            ))}

        </div>

        </section>
  )
}

export default Culture