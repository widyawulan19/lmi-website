import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../Style/Articles/Articles.css';
import { articles } from "../../Data/ArticleData";


// image 
import imgHero from '../../Assets/business.jpg'
import artikel1 from '../../Assets/artikel1.jpg'
import artikel2 from '../../Assets/artikel2.jpg'
import artikel3 from '../../Assets/artikel3.jpg'
import artikel4 from '../../Assets/artikel4.jpeg'

function ArticleHero() {

  const [category, setCategory] =
    useState("ALL");

  const filtered =
    category === "ALL"
      ? articles
      : articles.filter(
          item =>
            item.category === category
        );

  const recentPosts =
    [...articles].slice(0, 4);

  return (

    <section className="articles-page">

      {/* HERO */}

      <div 
        className="articles-hero"
        style={{
            backgroundImage:`url(${imgHero})`
        }}
        >
        
        <div className="career-watermark">
            CAREERS
        </div>

        <div className="article-hero-text">
            <span>INSIGHTS & STORIES</span>

            <h1>
            Explore our latest articles to find out more interesting information about the world of children's fashion
            </h1>

            <p>
            Discover industry insights,
            company updates and valuable
            perspectives from Lamonte.
            </p>
        </div>
        <div className="articles-hero-overlay"></div>

      </div>

      {/* FILTER */}

      <div className="article-filter">

        {[
          "ALL",
          "EVENT",
          "EDUCATION",
          "BUSINESS"
        ].map((item) => (

          <button
            key={item}
            className={
              category === item
                ? "active"
                : ""
            }
            onClick={() =>
              setCategory(item)
            }
          >
            {item}
          </button>

        ))}

      </div>

      {/* CONTENT */}

      <div className="article-layout">

        {/* LEFT */}

        <div className="article-content">

          {filtered.map((article) => (

            <article
              className="article-card"
              key={article.id}
            >

              <img
                src={article.image}
                alt=""
              />

              <div className="article-info">

                <div className="af-span">
                    <span>
                        {article.category}
                    </span>
                </div>
                

                <h3>
                  {article.title}
                </h3>

                <p>
                  {article.excerpt}
                </p>

                <Link
                  to={`/articles/${article.slug}`}
                >
                  Read More →
                </Link>

              </div>

            </article>

          ))}

        </div>

        {/* SIDEBAR */}

        <aside className="article-sidebar">

          <div className="sidebar-box">

            <h4>
              Our Company
            </h4>

            <p>
              PT Lamonte Mode Internasional is a leading children’s clothing supplier that provides various children’s clothing fashion needs at affordable prices.
            </p>

          </div>

          <div className="sidebar-box">

            <h4>
              Recent Posts
            </h4>

            {recentPosts.map((post) => (

                <div
                    className="recent-box"
                    key={post.id}
                >

                    <div className="rb-img">

                    <img
                        src={post.image}
                        alt={post.title}
                    />

                    </div>

                    <Link
                    to={`/articles/${post.slug}`}
                    className="recent-post"
                    >

                    <p>{post.title}</p>

                    </Link>

                </div>

            ))}

          </div>

          <div className="sidebar-box">

            <h4>
              Popular Tags
            </h4>

            <div className="tags">

              <span>Fashion</span>
              <span>Business</span>
              <span>Education</span>
              <span>Events</span>
              <span>Innovation</span>

            </div>

          </div>

        </aside>

      </div>

    </section>

  );
}

export default ArticleHero;