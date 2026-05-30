import React from 'react'
import '../Style/Hero.css'
import heroImg from '../Assets/heroImg.png'
import { IoLogoWhatsapp, IoMdArrowRoundForward } from "react-icons/io";

function HeroSection() {
  return (
    <div className='hero-container' id='hero'>
      <div className="hc-left">
        <div className="hc-left-text" data-aos='fade-up'>
          <div className='title'>
            <button>
              Yayasan Sarasvati Wedatama Semesta
            </button>
          </div>
          
          <h1>
            Setiap Anak dan Masyarakat Berhak Memiliki Masa Depan yang <span> Lebih Baik</span>
          </h1>
          <p>
            Melalui pendidikan, dukungan sosial, dan kolaborasi bersama berbagai pihak, kami membantu menciptakan lingkungan yang aman, mandiri, dan penuh harapan bagi generasi masa depan.
          </p>
        </div>
        
        <div className="hc-left-btn">
          <a href="#about" data-aos='fade-up' data-aos-delay="300">
            <button className='btn-active'> Kenal Lebih Dekat <IoMdArrowRoundForward className='btn-icon'/> </button>
          </a>
          
           <a 
                href="https://wa.me/6281115599002"
                target="_blank"
                rel="noopener noreferrer"
            >
            <button className='btn-primary' data-aos='fade-up' data-aos-delay="300">Dukung Program Kami <IoLogoWhatsapp className='btn-icon'/>  </button>
          </a>
        </div>
        
      </div>

      <div className="hc-right">
        <div className="hc-img" data-aos='zoom-in'>
          <img src={heroImg} alt="Hero Pic" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection