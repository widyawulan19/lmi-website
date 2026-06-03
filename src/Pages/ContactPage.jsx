import React, { useState } from "react";
import '../Style/Contact.css'

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from "react-icons/fa";

function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const subject =
      `Website Inquiry - ${formData.name}`;

    const body = `
Name: ${formData.name}

Email: ${formData.email}

Message:
${formData.message}
`;

    window.location.href =
      `mailto:info@lamonte.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  };

  return (

    <section className="contact-page">

      {/* HERO */}

      <div className="contact-hero">

        <div className="hero-header">
          <span>CONTACT US</span>

          <h1>
            Let's Start
            A Conversation
          </h1>

          <p>
            Whether you are a customer, partner,
            or future team member, we would love
            to hear from you.
          </p>
        </div>

      </div>

      {/* CONTENT */}

      <div className="contact-wrapper">

        {/* LEFT */}

        <div className="contact-info">

          <div className="contact-card">

            <FaMapMarkerAlt />

            <div>

              <h4>Office Address</h4>

              <p>
                Jl. Example No. 123,
                Bandung, Indonesia
              </p>

            </div>

          </div>

          <div className="contact-card">

            <FaPhoneAlt />
            <div>
              {/* <div className="cc-title">
                <FaPhoneAlt />
                <h4>Phone Number</h4>
              </div> */}

              <h4>Phone Number</h4>
              <p>
                +62 812 3456 7890
              </p>

            </div>

          </div>

          <div className="contact-card">

            <FaEnvelope />

            <div>

              <h4>Email Address</h4>

              <p>
                info@lamonte.com
              </p>

            </div>

          </div>

          <div className="contact-card">

            <FaClock />

            <div>

              <h4>Business Hours</h4>

              <p>
                Monday - Friday
                <br />
                08.00 - 17.00 WIB
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="contact-form-box">

          <h2>
            Send Us A Message
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
              onChange={handleChange}
            />

            <button type="submit">

              Send Message

            </button>

          </form>

        </div>

      </div>

      {/* MAP */}

     <div className="contact-map">

      <div className="cm-header">
        <span>Find Us Here</span>
        <h4>Visit Our Office</h4>
        <p>Meet our team and discover how Lamonte delivers high-quality children's fashion manufacturing solutions for partners across Indonesia and beyond.</p>
      </div>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8463078895875!2d106.8174083!3d-6.1513323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f60a03c58f71%3A0xc9cd72f074ef46b4!2sHayam%20Wuruk%20St%20No.111%2C%20RT.9%2FRW.9%2C%20Maphar%2C%20Taman%20Sari%2C%20West%20Jakarta%20City%2C%20Jakarta%2011160!5e0!3m2!1sen!2sid!4v1780474530165!5m2!1sen!2sid" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>

    </div>

    </section>

  );
}

export default ContactPage;