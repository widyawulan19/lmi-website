import React from 'react'
import '../Style/About.css'
import { FaDonate } from "react-icons/fa";
import { PiCubeTransparentLight } from "react-icons/pi";

function About() {

    const text = [
        {
            id:1,
            title:"PENDANAAN",
            ikon:<FaDonate/>,
            desc:"Yayasan Sosial kami memperoleh dana dari sumbangan individu, hibah dari perusahaan dan lembaga, serta hasil dari acara penggalangan dana. Kami berkomitmen untuk transparansi dan akuntabilitas dalam setiap penggunaan dana."
        },
        {
            id:2,
            title:"AKUNTABILITAS & TRANSPARANSI",
            ikon: <PiCubeTransparentLight/>,
            desc:"Kami menerbitkan laporan tahunan yang rinci mengenai kegiatan dan keuangan yayasan. Laporan ini tersedia untuk diunduh di website kami dan dapat diakses oleh publik.",
        }
    ]

  return (
    <div className='about-container' id='about'>
        <div className="ac-title" data-aos='fade-up'>
            <span>TENTANG YAYASAN</span>
            <h2>Mengenal Lebih Dekat Yayasan Kami </h2>
            <hr className='line'/>
            <div className="ac-desc">
                <p>
                    Yayasan yang berdiri sejak tahun 2024 ini berfokus pada pemberdayaan masyarakat dan anak-anak melalui program sosial, pendidikan, kesehatan, serta pengembangan keterampilan untuk menciptakan kehidupan yang lebih mandiri dan berkelanjutan. Dengan semangat kolaborasi dan inovasi, yayasan berkomitmen menghadirkan dampak positif bagi komunitas melalui dukungan pendidikan berkualitas, lingkungan yang aman bagi anak-anak, serta berbagai inisiatif sosial yang membantu meningkatkan kesejahteraan masyarakat.
                </p>
            </div>
        </div>
        
        <div className="ac-title" data-aos='fade-up'>
            <span>TRANSPARANSI</span>
            <h2>Komitmen Kami Terhadap Kepercayaan Publik </h2>
            <hr className='line'/>
            <div className="ac-desc2">
                <p>
                    Kami berkomitmen mengelola setiap dukungan dan program secara terbuka, bertanggung jawab, dan berkelanjutan demi menciptakan dampak positif bagi masyarakat.
                </p>
            </div>
            <div className="ac-box">
                {text.map((item,index) =>(
                    <div className="ac-card" 
                        key={index}
                        data-aos='fade-up'
                        data-aos-delay={index*300}
                    >
                        <div className="icon">{item.ikon}</div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About

