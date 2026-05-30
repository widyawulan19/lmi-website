// import React from 'react'
// import '../Style/Footer.css'
// import logoImg from '../Assets/logo-bg.png'
// import { GoClockFill } from "react-icons/go";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { IoLocation } from "react-icons/io5";
// import { MdOutlineAttachEmail } from "react-icons/md";


// function Footer() {
//   return (
//     <div className='footer-container'>
//         <div className="ft">
//             <div className="ft-left">
//                 <div className="left-img">
//                      <img src={logoImg} alt="Logo image" />
//                 </div>
//                 <div className="fl-text">
//                     {/* <p> 08.00 - 17.00</p> */}
//                     <p><IoLocation/> Jalan Damai 47, Mampang Kel., Pancoran Mas, Depok, 16433, Indonesia</p>

//                 </div>
//             </div>

//             <div className="ft-center">
//                 <div className="box-center">
//                     <span>QUICK LINKS</span>
//                     <div className="list-box">
//                         <a href="">About</a>
//                         <a href="">Visi Misi</a>
//                         <a href="">Program</a>
//                         <a href="">Dokumentasi</a>
//                     </div>
//                 </div>
//                 <div className="box-center">
                   
//                 </div>
//             </div>
//             <div className="ft-right">
//                 <span>CONTACT US</span>
//                 <div className="text">
//                     <p><IoLogoWhatsapp/> +6281115599002</p>
//                     <p><MdOutlineAttachEmail/> mail@gmail.com</p>
//                 </div>
                
//             </div>
//         </div>

//         <div className="fb">
//             <p>© 2026 Yayasan Sarasvati Wedatama Semesta. All rights reserved. luminous.id</p>
//         </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import '../Style/Footer.css'

import logoImg from '../Assets/logo-bg.png'

import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";

function Footer() {
    return (
        <footer className='footer-container'>

            <div className="ft">

                {/* LEFT */}
                <div className="ft-left">

                    <div className="left-img">
                        <img src={logoImg} alt="Logo Yayasan" />
                    </div>

                    <p className='footer-desc'>
                        Yayasan Sarasvati Wedatama Semesta hadir untuk
                        membangun pendidikan, sosial, dan kemanusiaan
                        yang lebih baik bagi masyarakat.
                    </p>

                    <div className="footer-address">
                        <IoLocation />
                        <p>
                            Jalan Gunung Salak, Ganidha Residence ruko no.1. Br Tegalantang, Padangsambian Kelod, Denpasar Barat.
                        </p>
                    </div>

                </div>

                {/* CENTER */}
                <div className="ft-center">

                    <h3>Quick Links</h3>

                    <div className="list-box">
                        <a href="#about">About</a>
                        <a href="#visi">Visi & Misi</a>
                        <a href="#program">Program</a>
                        <a href="#dokumentasi">Dokumentasi</a>
                    </div>

                </div>

                {/* RIGHT */}
                <div className="ft-right">

                    <h3>Contact Us</h3>

                    <div className="contact-box">

                        <div className="contact-item">
                            <IoLogoWhatsapp />
                            <p>+62 811-1559-9002</p>
                        </div>

                        <div className="contact-item">
                            <MdOutlineAttachEmail />
                            <p>sarasvatiwedatamasemesta@gmail.com</p>
                        </div>

                        <div className="contact-item">
                            <IoLogoInstagram/>
                            <p>sarasvati.wedatama.semesta</p>
                        </div>

                    </div>

                </div>

            </div>

            {/* BOTTOM */}
            <div className="fb">
                <p>
                    © 2026 Yayasan Sarasvati Wedatama Semesta.
                    All rights reserved.
                </p>
            </div>

        </footer>
    )
}

export default Footer
