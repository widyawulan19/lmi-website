import React, { useState } from "react";


function CareerJobModal({ job, closeModal }) {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolio: ""
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
      `Job Application - ${job.title}`;

    const body = `
Full Name: ${formData.fullName}

Email: ${formData.email}

Phone: ${formData.phone}

Position: ${job.title}

Portfolio:
${formData.portfolio}
`;

    window.location.href =
      `mailto:hr@lamonte.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (

    <div
      className="job-modal"
      onClick={closeModal}
    >

      <div
        className="job-modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close-btn"
          onClick={closeModal}
        >
          ×
        </button>

        <div className="job-modal-layout">

          {/* LEFT */}

          <div className="job-info">

            <div className="job-badge">
              {job.type}
            </div>

            <h2>{job.title}</h2>

            <p className="job-description">
              {job.description}
            </p>

            <div className="job-section">

              <h3>
                Responsibilities
              </h3>

              <ul>

                {job.responsibilities.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}

              </ul>

            </div>

            <div className="job-section">

              <h3>
                Requirements
              </h3>

              <ul>

                {job.requirements.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}

              </ul>

            </div>

          </div>

          {/* RIGHT */}

          <div className="job-form">

            <h2>
              Apply Now
            </h2>

            <form
              onSubmit={handleSubmit}
            >

              <div className="form-group">

                <label>
                  Full Name *
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Please enter your full name"
                  required
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Please enter your email"
                  required
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>
                  Mobile Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Please enter your phone number"
                  required
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>
                  Position Applied *
                </label>

                <input
                  type="text"
                  value={job.title}
                  readOnly
                />

              </div>

              <div className="form-group">

                <label>
                  Portfolio URL
                </label>

                <input
                  type="url"
                  name="portfolio"
                  placeholder="Portfolio / LinkedIn"
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>
                  Resume / CV
                </label>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                />

                <small>
                  Upload PDF, DOC, DOCX
                </small>

              </div>

              <button
                type="submit"
                className="submit-btn"
              >
                Send Application
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>

  );
}

export default CareerJobModal;