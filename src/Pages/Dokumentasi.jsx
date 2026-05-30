import React from 'react'
import "../Style/Dokumentasi.css"

//image
import dok1 from '../Assets/dok1.jpeg'
import dok2 from '../Assets/dok2.jpeg'
import dok3 from '../Assets/dok3.jpeg' //memanjang
import dok4 from '../Assets/dok4.jpeg'
import dok5 from '../Assets/dok5.jpeg'
import dok6 from '../Assets/dok6.jpeg'
import dok7 from '../Assets/dok7.jpeg' //memanjang

function Dokumentasi() {

  return (
    <div className='dokumentasi-container' id='dokumentasi'>
        <div className="dc-title">
            <span>DOKUMENTASI</span>
            <h2>Galery Kegiatan dan Program</h2>
            <hr className='line'/>
            <p>
                Dokumentasi berbagai program, kegiatan sosial, dan kolaborasi yang telah kami jalankan sebagai bentuk komitmen dalam memberdayakan masyarakat secara berkelanjutan.
            </p>
        </div>

        <div className="dok-gallery">
            <div className="gallery-item large">
                <img src={dok7} alt="Dokumentasi kegiatan" />
            </div>

            <div className="gallery-item">
                <img src={dok5} alt="Dokumentasi kegiatan" />
            </div>

            <div className="gallery-item">
                <img src={dok2} alt="Dokumentasi kegiatan" />
            </div>

            <div className="gallery-item wide">
                <img src={dok3} alt="Dokumentasi kegiatan" />
            </div>

            <div className="gallery-item">
                <img src={dok4} alt="Dokumentasi kegiatan" />
            </div>

            <div className="gallery-item">
                <img src={dok5} alt="Dokumentasi kegiatan" />
            </div>

            <div className="gallery-item">
                <img src={dok6} alt="Dokumentasi kegiatan" />
            </div>

             <div className="gallery-item">
                <img src={dok2} alt="Dokumentasi kegiatan" />
            </div>

        </div>
    </div>
  )

}

export default Dokumentasi