import React, { useState } from "react";
import '../Style/Gallery.css'

// image 
import img1 from "../Assets/grup1.jpg";
import img2 from "../Assets/grup2.jpg";
import img3 from "../Assets/grup3.jpeg";
import img4 from "../Assets/grup4.jpg";
import deliv1 from '../Assets/Delivery/Distribusi-barang-1.jpg'
import deliv2 from '../Assets/Delivery/Distribusi-barang-2.jpg'
import delive3 from '../Assets/Delivery/Pengiriman-3.jpg'
import delive4 from '../Assets/Delivery/Pengiriman-1.jpg'
import emp1 from '../Assets/Employee/Karyawan-LMI-2.jpg'
import emp2 from '../Assets/Employee/Karyawan-LMI.jpg'
import emp3 from '../Assets/Employee/Kegiatan-Karyawan-5.jpg'
import emp4 from '../Assets/Employee/Kegiatan-Karyawan-6.jpg'
import inv1 from '../Assets/Inventory/inventory-2.jpg'
import inv2 from '../Assets/Inventory/inventory-3.jpg'
import inv3 from '../Assets/Inventory/inventory-4.jpg'
import inv4 from '../Assets/Inventory/inventory-5.jpg'



import LmiNavbar from "./LmiNavbar";
import LmiFooter from "./LmiFooter";


function Gallery() {

    const galleryData = [
        {
            image: img1,
            category: "ALL"
        },
        {
            image: inv4,
            category: "WAREHOUSE"
        },
        {
            image: img4,
            category: "EMPLOYEE ACTIVITIES"
        },
        {
            image: emp1,
            category: "EMPLOYEE ACTIVITIES"
        },
        {
            image: emp2,
            category: "EMPLOYEE ACTIVITIES"
        },
        {
            image: emp3,
            category: "EMPLOYEE ACTIVITIES"
        },
        {
            image: emp4,
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
            image: inv2,
            category: "WAREHOUSE"
        },
        {
            image: deliv1,
            category: "DELIVERY"
        },
         {
            image: deliv2,
            category: "DELIVERY"
        },
         {
            image: delive3,
            category: "DELIVERY"
        },
        {
            image: delive4,
            category: "DELIVERY"
        },
         {
            image: inv1,
            category: "WAREHOUSE"
        },
         {
            image: inv2,
            category: "WAREHOUSE"
        },
         {
            image: inv3,
            category: "WAREHOUSE"
        },
         {
            image: inv4,
            category: "WAREHOUSE"
        }
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