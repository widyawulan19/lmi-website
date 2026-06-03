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
        `mailto:hello@lamonte.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    };

  const { slug } = useParams();

  const handleShare = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

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

      {/* <div className="share-btn">
        <FaFacebookF className="share-icon"/>
        <FaTwitter className="share-icon"/>
        <FaLinkedinIn className="share-icon"/>
        <FaWhatsapp className="share-icon"/>
        <FaTelegramPlane className="share-icon"/>
      </div> */}
      <div className="share-btn">

        <FaFacebookF
          className="share-icon"
          onClick={() =>
            handleShare(
              "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flmi.co.id%2Flamonte-beri-edukasi-masyarakat-jualan-itu-mudah-dan-menyenangkan-2%2F&t=Lamonte+Beri+Edukasi+Masyarakat%2C+Jualan+Itu+Mudah+dan+Menyenangkan+-+PT+Lamonte+Mode+Internasional"
            )
          }
        />

        <FaTwitter
          className="share-icon"
          onClick={() =>
            handleShare(
              "https://x.com/i/flow/login?redirect_after_login=%2Fshare%3Furl%3Dhttps%253A%252F%252Flmi.co.id%252Flamonte-beri-edukasi-masyarakat-jualan-itu-mudah-dan-menyenangkan-2%252F%26text%3DLamonte%2520Beri%2520Edukasi%2520Masyarakat%252C%2520Jualan%2520Itu%2520Mudah%2520dan%2520Menyenangkan%2520-%2520PT%2520Lamonte%2520Mode%2520Internasional"
            )
          }
        />

        <FaLinkedinIn
          className="share-icon"
          onClick={() =>
            handleShare(
              "https://www.linkedin.com/login/?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%253A%252F%252Flmi.co.id%252Flamonte-beri-edukasi-masyarakat-jualan-itu-mudah-dan-menyenangkan-2%252F%26text%3DLamonte%2520Beri%2520Edukasi%2520Masyarakat%252C%2520Jualan%2520Itu%2520Mudah%2520dan%2520Menyenangkan%2520-%2520PT%2520Lamonte%2520Mode%2520Internasional%26summary%3D%26mini%3Dtrue"
            )
          }
        />

        <FaWhatsapp
          className="share-icon"
          onClick={() =>
            handleShare(
              "https://api.whatsapp.com/send?text=https%3A%2F%2Flmi.co.id%2Flamonte-beri-edukasi-masyarakat-jualan-itu-mudah-dan-menyenangkan-2%2F"
            )
          }
        />

        <FaTelegramPlane
          className="share-icon"
          onClick={() =>
            handleShare(
              "https://t.me/share/url?url=https%3A%2F%2Flmi.co.id%2Flamonte-beri-edukasi-masyarakat-jualan-itu-mudah-dan-menyenangkan-2%2F"
            )
          }
        />

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