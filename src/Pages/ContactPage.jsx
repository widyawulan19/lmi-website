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

        <iframe
          title="Lamonte Location"
          src="https://www.google.com/maps/embed?pb="
          loading="lazy"
        ></iframe>

      </div>

    </section>

  );
}

export default ContactPage;