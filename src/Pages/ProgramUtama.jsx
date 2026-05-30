import React from 'react'
import '../Style/Program.css'
// icon 
import { IoSchool } from "react-icons/io5";
import { GiTakeMyMoney, GiTornado } from "react-icons/gi";
import { TbRibbonHealth } from "react-icons/tb";


function ProgramUtama() {

    const dataProgram = [
        {
            id:1,
            title:"Pendidikan",
            icon:<IoSchool/>,
            desc:"Dukungan pendidikan untuk anak-anak dan remaja dari keluarga yang kurang mampu, berupa sekolah gratis."
        },
        {
            id:2,
            title:"Pemberdayaan Ekonomi",
            icon:<GiTakeMyMoney/>,
            desc:"Pelatihan kewirausahaan, bantuan modal usaha kecil, dan pendampingan untuk pengembangan usaha mikro."
        },
        {
            id:3,
            title:"Bantu Bencana",
            icon:<GiTornado/>,
            desc:"Respon cepat dalam situasi darurat, distribusi bantuan makanan dan perlengkapan, serta rehabilitasi bagi korban bencana."
        },
        {
            id:4,
            title:"Kesehatan",
            icon:<TbRibbonHealth/>,
            desc:"Klinik kesehatan gratis, program kesehatan masyarakat, dan kampanye kesadaran kesehatan."
        },

    ]

  return (
    <div className='program-container' id='program'>
        <div className="pc-title" data-aos='fade-up'>
            <span>PROGRAM UTAMA</span>
            <h2>Menciptakan Dampak Melalui Program Nyata</h2>
            <hr className='line'/>
            <p>
                Kami menghadirkan berbagai inisiatif sosial dan pemberdayaan untuk membantu membangun komunitas yang lebih mandiri, sehat, dan berdaya.
            </p>
        </div>

        <div className="program-content">
            {dataProgram.map((item,index) =>(
                <div className="program-card" key={index} data-aos='fade-up' data-aos-delay={index * 300}>
                    <div className="program-icon">
                        {item.icon}
                    </div>
                    <div className="program-text">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default ProgramUtama