import React from 'react'
import '../Style/VisiMisi.css'
import { FaCircle } from 'react-icons/fa'
import icon1 from '../Assets/pattern-1.png'
import icon2 from '../Assets/pattern-2.png'
import icon3 from '../Assets/pattern-3.png'

function VisiMisi() {

    const dataMisi = [
        {
            id:1,
            category:"Misi Yayasan",
            items:[
                {
                    id:1,
                    title:"Pemberdayaan Masyarakat",
                    desc:"Menyediakan pelatihan dan sumber daya untuk mengembangkan keterampilan ekonomi dan sosial masyarakat, guna meningkatkan kesejahteraan dan kemandirian mereka."
                },
                {
                    id:2,
                    title:"Pendidikan & Kesehatan Sosial",
                    desc:"Menginisiasi dan mendukung program-program yang mempromosikan pendidikan, kesehatan, dan keadilan sosial di komunitas lokal untuk menciptakan dampak yang positif dan berkelanjutan."
                },
            ]        
        },
        {
            id:2,
            category:"Pemberdayaan Anak - Anak",
            items:[
                {
                    id:1,
                    title:"Akses Pendidikan Anak",
                    desc:"Menginisiasi dan mendukung program-program yang mempromosikan pendidikan, kesehatan, dan keadilan sosial di komunitas lokal untuk menciptakan dampak yang positif dan berkelanjutan.",
                },
                {
                    id:2,
                    title:"Pengembangan Anak",
                    desc:"Mengembangkan dan menjalankan program-program yang mendukung pertumbuhan fisik, mental, dan emosional anak-anak, serta mendorong mereka untuk menjadi individu yang mandiri dan berdaya."
                }
            ]       
        },
        {
            id:3,
            category:"Kolaborasi dan Kemitraan",
            items:[
                {
                    id:1,
                    title:"Kolaborasi & Kemitraan",
                    desc:"Bermitra dengan lembaga pemerintah, organisasi non-pemerintah, dan sektor swasta untuk memperluas jangkauan dan dampak program-program pemberdayaan kami.",
                },
                {
                    id:2,
                    title:"Dukungan Relawan dan Donatur",
                    desc:"Menggalang dukungan dan partisipasi aktif dari masyarakat, relawan, dan donatur untuk mendukung berbagai inisiatif sosial dan pendidikan kami."
                }
            ]       
        },
        {
            id:4,
            category:"Inovasi dan Pengembangan",
            items:[
                {
                    id:1,
                    title:"Inovasi Program Sosial",
                    desc:"Mengimplementasikan pendekatan inovatif dan berbasis data dalam desain dan pelaksanaan program untuk memastikan efektivitas dan keberlanjutan jangka panjang.",
                },
                {
                    id:2,
                    title:"Evaluasi & Pengembangan Berkelanjutan",
                    desc:"Melakukan evaluasi dan pembaruan berkala terhadap program-program kami untuk terus meningkatkan dampak dan memenuhi kebutuhan yang berkembang di masyarakat."
                }
            ]       
        },
    ]

  return (
    <div className='vm-container' id='visi'>

    {/* pattern  */}
        <img src={icon1} className='vm-shape s1' alt="" />
        <img src={icon2} className='vm-shape s2' alt="" />
        <img src={icon3} className='vm-shape s3' alt="" />

        <div className="title" data-aos='fade-up'>
            <span>VISI & MISI</span>
            <h2>Bersama Menciptakan Masa Depan yang Lebih Baik</h2>
            <hr className='line'/>
            <p>Dengan semangat kepedulian, kolaborasi, dan pemberdayaan, kami berkomitmen menghadirkan perubahan nyata bagi masyarakat dan generasi masa depan.</p>
        </div>

        <div className="visi" data-aos='fade-up'>
            <h2>VISI</h2>
            <p>
                Menjadi pelopor perubahan sosial yang memberdayakan masyarakat dan anak-anak untuk mencapai potensi penuh mereka dan menciptakan masa depan yang lebih baik dan berkelanjutan. 
            </p>
        </div>
       
       <div className="misi" data-aos='fade-up'>
        <h2>MISI</h2>
        
        <div className="misi-box">
            {dataMisi.map((data,index) =>(
                <div 
                    className="box-category" 
                    key={index}
                    data-aos='fade-up'
                    data-aos-delay={index * 300}
                >
                    <h4>{data.category}</h4>
                    {data.items.map((item,idx) =>(
                        <div className="list-cat" key={idx}>
                            <span> <FaCircle className='circle-icon'/> {item.title}</span>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        
       </div>


    </div>
  )
}

export default VisiMisi