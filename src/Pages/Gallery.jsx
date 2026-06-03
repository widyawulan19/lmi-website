import React, { useState } from "react";
import '../Style/Gallery.css'

import img1 from "../Assets/grup1.jpg";
import img2 from "../Assets/grup2.jpg";
import img3 from "../Assets/grup3.jpeg";
import img4 from "../Assets/grup4.jpg";
import LmiNavbar from "./LmiNavbar";
import LmiFooter from "./LmiFooter";

function Gallery() {

    const galleryData = [
        {
            image: img1,
            category: "ALL"
        },
        {
            image: img2,
            category: "WAREHOUSE"
        },
        {
            image: img3,
            category: "DEVLIVERY"
        },
        {
            image: img4,
            category: "EMPLOYEE ACTIVITIES"
        },
        {
            image: img1,
            category: "BREAKFASTING TOGETHER"
        },
        {
            image: img2,
            category: "BREAKFASTING TOGETHER"
        },
        {
            image: img3,
            category: "WAREHOUSE"
        },
        {
            image: img4,
            category: "DEVLIVERY"
        },
    ];

    const categories = [
        "ALL",
        "WAREHOUSE",
        "DELIVERY",
        "EMPLOYEE ACTIVITIES",
        "BREAKFASTING TOGETHER"
    ];

    const [activeCategory, setActiveCategory] = useState("ALL");
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages =
        activeCategory === "ALL"
            ? galleryData
            : galleryData.filter(
                  item => item.category === activeCategory
              );

    return (
        <section className="gallery-page">

            <div
                className="gallery-hero"
                style={{
                    backgroundImage: `url(${img2})`
                }}
                >

                <div className="gallery-hero-overlay"></div>

                <div className="gallery-hero-content">

                    <span>OUR GALLERY</span>

                    <h1>
                    Capturing Our Journey,
                    <span>
                        Innovation & Excellence
                    </span>
                    
                    </h1>

                    <p>
                   Presenting Diversity and Quality at PT. Lamonte Fashion International.
                    </p>

                </div>

                </div>

            {/* FILTER */}

            <div className="gallery-filter">

                {categories.map((item) => (

                    <button
                        key={item}
                        className={
                            activeCategory === item
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setActiveCategory(item)
                        }
                    >
                        {item}
                    </button>

                ))}

            </div>

            {/* GRID */}

            <div className="gallery-grid">

                {filteredImages.map((item, index) => (

                    <div
                        key={index}
                        className="gallery-card"
                        onClick={() =>
                            setSelectedImage(item.image)
                        }
                    >
                        <img
                            src={item.image}
                            alt="Gallery"
                        />

                        <div className="gallery-overlay">
                            <span>
                                {item.category}
                            </span>
                        </div>

                    </div>

                ))}

            </div>

            {/* MODAL */}

            {selectedImage && (

                <div
                    className="gallery-modal"
                    onClick={() =>
                        setSelectedImage(null)
                    }
                >

                    <img
                        src={selectedImage}
                        alt="Preview"
                    />

                </div>

            )}

        </section>
    );
}

export default Gallery;