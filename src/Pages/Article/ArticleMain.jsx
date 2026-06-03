import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { articles } from "../../Data/ArticleData";

import '../../Style/Articles/ArticleDetails.css'
import LmiNavbar from "../LmiNavbar";

// icon 
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaWhatsapp , } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import LmiFooter from "../LmiFooter";


function ArticleMain() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    })

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

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

  const { slug } = useParams();

  const article =
    articles.find(
      item => item.slug === slug
    );

  if (!article) {

    return (

      <section className="article-not-found">

        <h2>
          Article Not Found
        </h2>

      </section>

    );

  }

  return (

    <section className="article-detail-page">
        <LmiNavbar/>

      {/* HERO */}

      <div className="article-detail-hero">
        <div className="article-detail-overlay"></div>

        <img
          src={article.image}
          alt={article.title}
        />

      </div>

      {/* CONTENT */}

      <div className="article-detail-container">

        <div className="article-info">
            <span>
                {article.category}
            </span>

            <h1>
                {article.title}
            </h1>

            <p>
                {article.date}
            </p>
        </div>

        {/* <ReactMarkdown>
          {article.content}
        </ReactMarkdown> */}
        {article.section.map((section, index) => (

            <div
                className="article-section"
                key={index}
            >

                {section.title && (
                    <h2>{section.title}</h2>
                )}

                {/* content  */}
                {Array.isArray(section.contents)

                    ? section.contents.map(
                        (paragraph, i) => (

                        <ReactMarkdown
                            key={i}
                        >
                            {paragraph}
                        </ReactMarkdown>

                        )
                    )

                    : (
                        <ReactMarkdown>
                        {section.content}
                        </ReactMarkdown>
                    )
                }

                {/* image  */}
                {section.img && (
                    <div className="article-image">
                        <img
                            src={section.img}
                            alt={section.title || "Article"}
                            // className="article-image"
                        />
                    </div>
                )}
                

            </div>

            ))}

      </div>

      <div className="share-btn">
        <FaFacebookF className="share-icon"/>
        <FaTwitter className="share-icon"/>
        <FaLinkedinIn className="share-icon"/>
        <FaWhatsapp className="share-icon"/>
        <FaTelegramPlane className="share-icon"/>
      </div>

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
        

        <LmiFooter/>


    </section>

  );

}

export default ArticleMain;